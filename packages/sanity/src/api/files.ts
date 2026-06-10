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

const session = {
  id: 'default',
  downloaded: 0,
  skipped: 0,
  total: 0
}

const globalTotals = { downloaded: 0, skipped: 0, id: 'assets' };

process.on('exit', () => {
  if (globalTotals.downloaded + globalTotals.skipped > 0) {
    process.stdout.write(`\r✅ [${globalTotals.id}] ${globalTotals.downloaded} downloaded, ${globalTotals.skipped} cached    \n`);
  }
});

/**
 * Call in every data file to begin Background download session
 * A download session allows parallel download of assets
 * @param id id of the session (optional)
 */
export function initDownloadSession(id?:string) {
  if(id) {
    session.id = id;
    globalTotals.id = id;
  }
  session.total = 0;
  session.downloaded = 0;
  session.skipped = 0;
}

function printProgress() {
  const done = session.downloaded + session.skipped;
  if(done < session.total || session.total === 0) {
    process.stdout.write(`\r⬇️  [${session.id}] ${globalTotals.downloaded} downloaded, ${globalTotals.skipped} cached...`);
  }
}

function onDownloaded() {
  session.downloaded++;
  globalTotals.downloaded++;
  printProgress();
}

function onSkipped() {
  session.skipped++;
  globalTotals.skipped++;
  printProgress();
}

export function getSessionProgress() {
  if(session.total === 0) return 1;
  return (session.downloaded + session.skipped) / session.total;
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

async function doDownload(url, fileName) {
  const destination = path.resolve(dst, fileName);
  
  // If already downloading, wait for it
  if (downloadPromises.has(fileName)) {
    await downloadPromises.get(fileName);
    onDownloaded(); // Count this as completed for this caller too
    return;
  }
  
  // If file exists (race condition), mark as done
  if(existsSync(destination)) {
    onDownloaded();
    return;
  }
  
  // Create download promise
  const downloadPromise = (async () => {
    try {
      const res = await fetch(url);
      const fileStream = createWriteStream(destination, { flags: 'wx' });
      //@ts-ignore
      await finished(Readable.fromWeb(res.body).pipe(fileStream));
      onDownloaded();
    } catch (error) {
      if (error.code === 'EEXIST') {
        onDownloaded();
      } else {
        console.log(`Error downloading ${fileName}:`, error.message);
        // Don't call onDownloaded on real errors
        session.total--; // Decrement total since download failed
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
  checkPath();
  session.total++;

  const fullPath = path.resolve(dst, fileName);
  if(existsSync(fullPath)) {
    onSkipped();
    return `${settings.staticPath}/${fileName}`;
  }

  doDownload(url, fileName); // Fire and forget

  return `${settings.staticPath}/${fileName}`;
});

/**
 * Generic download from URL. Must be called by all utils
 * @param url URL to file
 * @param fileName file's name in your static folder
 * @returns url string to site's path. i.e. /assets/files/image.webp
 */
export const downloadFileSync = (async (url, fileName) => {
  checkPath();
  session.total++;

  if(existsSync(path.resolve(dst, fileName))) {
    onSkipped();
    return `${settings.staticPath}/${fileName}`;
  }

  const res = await fetch(url);
  
  const destination = path.resolve(dst, fileName);
  const fileStream = createWriteStream(destination, { flags: 'wx' });
  //@ts-ignore
  await finished(Readable.fromWeb(res.body).pipe(fileStream));
  setTimeout(() => {
    onDownloaded();
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