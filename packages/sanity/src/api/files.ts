import { Readable } from 'stream';
import { finished } from 'stream/promises';
import path from "path";
import { createWriteStream, existsSync, mkdirSync } from 'fs';
import { imageUrl, SanityImageParams } from './image';
import { sanityClient } from './client';

/**
 * Allows downloading Sanity Assets to static
 * site distribution
 */

const settings = {
  distributionPath: 'public', //defaults to public
  staticPath: '/cms-assets' // default path for assets
}

let dst = `./${settings.distributionPath}${settings.staticPath}`;
// mkdirSync(dst, {recursive: true});

/**
 * Updates Static Site Settings for Sanity's downloading
 * Defaults are 'public' and '/assets/files/'
 * Make sure to call this at the very beginning of your site generator's config!
 * @param basePath distribution base path (i.e. public)
 * @param staticPath site's path for downloaded files (i.e. /assets/files)
 */
export function updateDistributionSettings(basePath:string, staticPath:string) {
  settings.distributionPath = basePath;
  settings.staticPath= staticPath;

  dst = `./${settings.distributionPath}${settings.staticPath}`;
  // mkdirSync(dst, {recursive: true});
}

type Session = { id: string, downloaded: number, skipped: number, total: number };
const sessions = new Map<string, Session>();
let currentSessionId = 'default';

function getSession(id: string): Session {
  if (!sessions.has(id)) sessions.set(id, { id, downloaded: 0, skipped: 0, total: 0 });
  return sessions.get(id)!;
}

/**
 * Call in every data file to begin a named download session.
 * Sessions are independent — concurrent data files each get their own recap line.
 * @param id session label shown in the recap (optional)
 */
export function initDownloadSession(id = 'default') {
  currentSessionId = id;
  sessions.set(id, { id, downloaded: 0, skipped: 0, total: 0 });
}

const completionTimers = new Map<string, ReturnType<typeof setTimeout>>();

function printProgress(s: Session) {
  process.stdout.write(`\r⬇️  [${s.id}] ${s.downloaded} downloaded, ${s.skipped} cached...`);

  // Defer the completion check so all synchronous downloadFile calls in the
  // same tick finish incrementing total before we decide we're done.
  if (completionTimers.has(s.id)) clearTimeout(completionTimers.get(s.id)!);
  completionTimers.set(s.id, setTimeout(() => {
    completionTimers.delete(s.id);
    const done = s.downloaded + s.skipped;
    if (done === s.total && s.total > 0) {
      process.stdout.write(`\r✅ [${s.id}] ${s.downloaded} downloaded, ${s.skipped} cached    \n`);
    }
  }, 0));
}

function onDownloaded(id: string) {
  const s = getSession(id);
  s.downloaded++;
  printProgress(s);
}

function onSkipped(id: string) {
  const s = getSession(id);
  s.skipped++;
  printProgress(s);
}

export function getSessionProgress() {
  const s = getSession(currentSessionId);
  if(s.total === 0) return 1;
  return (s.downloaded + s.skipped) / s.total;
}

/**
 * Internal use only:
 * Will create the destination path if not found
 */
function checkPath() {
  if(!existsSync(dst)) {
    mkdirSync(dst, {recursive: true});
  }
}

const downloadPromises = new Map<string, Promise<void>>();

async function doDownload(url, fileName, sessionId: string) {
  const destination = path.resolve(dst, fileName);

  if (downloadPromises.has(fileName)) {
    await downloadPromises.get(fileName);
    onDownloaded(sessionId);
    return;
  }

  if(existsSync(destination)) {
    onDownloaded(sessionId);
    return;
  }

  const downloadPromise = (async () => {
    try {
      const res = await fetch(url);
      const fileStream = createWriteStream(destination, { flags: 'wx' });
      //@ts-ignore
      await finished(Readable.fromWeb(res.body).pipe(fileStream));
      onDownloaded(sessionId);
    } catch (error) {
      if (error.code === 'EEXIST') {
        onDownloaded(sessionId);
      } else {
        console.log(`Error downloading ${fileName}:`, error.message);
        getSession(sessionId).total--;
        throw error;
      }
    } finally {
      downloadPromises.delete(fileName);
    }
  })();

  downloadPromises.set(fileName, downloadPromise);
  await downloadPromise;
}

/**
 * Generic download from URL. Must be called by all utils
 * @param url URL to file
 * @param fileName file's name in your static folder
 * @returns url string to site's path. i.e. /assets/files/image.webp
 */
export const downloadFile = (async (url, fileName) => {
  const sessionId = currentSessionId; // capture at call time
  checkPath();
  getSession(sessionId).total++;

  const fullPath = path.resolve(dst, fileName);
  if(existsSync(fullPath)) {
    onSkipped(sessionId);
    return `${settings.staticPath}/${fileName}`;
  }

  doDownload(url, fileName, sessionId); // fire and forget

  return `${settings.staticPath}/${fileName}`;
});

/**
 * Generic download from URL. Must be called by all utils
 * @param url URL to file
 * @param fileName file's name in your static folder
 * @returns url string to site's path. i.e. /assets/files/image.webp
 */
export const downloadFileSync = (async (url, fileName) => {
  const sessionId = currentSessionId; // capture at call time
  checkPath();
  getSession(sessionId).total++;

  if(existsSync(path.resolve(dst, fileName))) {
    onSkipped(sessionId);
    return `${settings.staticPath}/${fileName}`;
  }

  const res = await fetch(url);

  const destination = path.resolve(dst, fileName);
  const fileStream = createWriteStream(destination, { flags: 'wx' });
  //@ts-ignore
  await finished(Readable.fromWeb(res.body).pipe(fileStream));
  setTimeout(() => {
    onDownloaded(sessionId);
  }, 100);

  return `${settings.staticPath}/${fileName}`;
});

function getImageFilename(img, options: SanityImageParams, suffix = "") {
  const parts = img.asset._ref.split('-');
  const originalExt = parts[parts.length - 1];

  if (options.original) return `${img.asset._ref}.${originalExt}`;

  let baseName = suffix !== "" ? `${img.asset._ref}-${suffix}` : `${img.asset._ref}`;
  if (options.width) baseName += `&w=${options.width}`;
  if (options.height) baseName += `&h=${options.height}`;
  if (options.quality) baseName += `&q=${options.quality}`;
  if (options.format && options.format !== 'webp') baseName += `&fm=${options.format}`;
  if (options.custom) baseName += `&${options.custom}`;

  return `${baseName}.${options.format ?? 'webp'}`;
}

/**
 * Uses imageURL internally to fetch webp image
 * @param img Sanity's Image field (containing asset inside img.asset)
 * @param options imageUrl options (SanityImageParams)
 * @param suffix suffix to add at the end of basePath (sueful when generating several image versions)
 * @returns url string to site's path. i.e. /assets/files/image.webp
 */
export async function getImageFile(img, options:SanityImageParams, suffix="") {
  if(!img && !img.asset) return "";
  const fileName = getImageFilename(img, options);
  const url = downloadFile(imageUrl(img, options), fileName);
  return url;
}

/**
 * Named width ladders for getImageSrcSet. Kept short and deliberate rather
 * than a long device-width enumeration — these are build-time downloads
 * (one file per width, stored in the static output), not requests against
 * an on-demand image CDN, so every extra width is a real file written to
 * disk on every build. 'default' suits inline/card images; 'hero' suits
 * full-bleed/background images that can occupy the entire viewport on large
 * screens and therefore need larger top-end variants.
 */
export const imageSrcSetPresets = {
  default: [640, 960, 1280, 1920],
  hero: [960, 1440, 1920, 2560],
} as const;

export type ImageSrcSetPreset = keyof typeof imageSrcSetPresets;

export interface SanitySrcSetParams extends Omit<SanityImageParams, 'width' | 'height'> {
  /** Named width ladder (see imageSrcSetPresets). Ignored if `widths` is set. Defaults to 'default'. */
  preset?: ImageSrcSetPreset;
  /** Explicit widths (px) to generate, overriding `preset` for a one-off case. */
  widths?: number[];
  /**
   * The `sizes` attribute for the consuming <img>/<source> — how much of the
   * viewport width the image actually occupies at each breakpoint, which is
   * a layout/CSS concern this function has no visibility into. Defaults to
   * '100vw' (full viewport width); override per usage to match the real
   * layout, e.g. '(min-width: 1024px) 50vw, 100vw' for a two-column grid.
   */
  sizes?: string;
}

export interface ImageSrcSet {
  /** Fallback <img src> for browsers that ignore srcset — the largest generated width. */
  src: string;
  srcset: string;
  sizes: string;
}

/**
 * Downloads one file per width in the resolved ladder (via getImageFile, so
 * caching/dedup/session-progress tracking all apply per-width exactly like a
 * single getImageFile call) and returns a ready-to-spread {src, srcset,
 * sizes} object for an <img>/<source>.
 * @param img Sanity's Image field (containing asset inside img.asset)
 * @param options preset/widths + sizes, plus the usual SanityImageParams (quality/format/custom)
 * @param suffix suffix to add at the end of basePath (useful when generating several image versions)
 * @returns {src, srcset, sizes} — src is the largest width's URL, srcset is a ready-to-use `"url Nw, ..."` string
 */
export async function getImageSrcSet(
  img,
  options: SanitySrcSetParams = {},
  suffix = "",
): Promise<ImageSrcSet> {
  const sizes = options.sizes ?? '100vw';
  if (!img?.asset) return { src: "", srcset: "", sizes };

  // Sorted ascending regardless of input order, so `src`'s "last = largest"
  // assumption below holds even for a hand-passed, unsorted `widths` list.
  const widths = [...(options.widths ?? imageSrcSetPresets[options.preset ?? 'default'])].sort(
    (a, b) => a - b,
  );
  const imgParams: SanityImageParams = {
    quality: options.quality,
    format: options.format,
    custom: options.custom,
  };

  const urls = await Promise.all(
    widths.map((width) => getImageFile(img, { ...imgParams, width }, suffix)),
  );

  return {
    src: urls[urls.length - 1],
    srcset: urls.map((url, i) => `${url} ${widths[i]}w`).join(', '),
    sizes,
  };
}

/**
 * Generic Sanity's Asset download
 * @param asset Sanity's asset
 * @returns url string to site's path. i.e. /assets/files/image.webp
 */
export async function downloadAsset(asset) {
  const file = await sanityClient.getDocument(asset._ref);
  return downloadFile(file.url, `${file.assetId}.${file.extension}`);
}

/**
 * Uses imageURL internally to fetch webp image
 * @param img Sanity's Image field (containing asset inside img.asset)
 * @param options imageUrl options (SanityImageParams)
 * @param suffix suffix to add at the end of basePath (sueful when generating several image versions)
 * @returns url string to site's path. i.e. /assets/files/image.webp
 */
export async function getImageFileSync(img, options:SanityImageParams, suffix="") {
  if(!img && !img.asset) return "";
  const fileName = getImageFilename(img, options);
  const url = await downloadFileSync(imageUrl(img, options), fileName);
  return url;
}

/**
 * Generic Sanity's Asset download
 * @param asset Sanity's asset
 * @returns url string to site's path. i.e. /assets/files/image.webp
 */
export async function downloadAssetSync(asset) {
  const file = await sanityClient.getDocument(asset._ref);
  return await downloadFileSync(file.url, `${file.assetId}.${file.extension}`);
}