import { Readable } from 'stream';
import { finished } from 'stream/promises';
import path from "path";
import { createWriteStream, existsSync, mkdirSync } from 'fs';
import { imageUrl } from './image';
import { sanityClient } from './client';

/**
 * Allows downloading Sanity Assets to static
 * site distribution
 */

const settings = {
  distributionPath: 'public', //defaults to public
  staticPath: '/assets/files' // default path for assets
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

/**
 * Internal use only:
 * Will create the destination path if not found
 */
function checkPath() {
  if(!existsSync(dst)) {
    mkdirSync(dst, {recursive: true});
  }
}

/**
 * Generic download from URL. Must be called by all utils
 * @param url URL to file
 * @param fileName file's name in your static folder
 * @returns url string to site's path. i.e. /assets/files/image.webp
 */
export const downloadFile = (async (url, fileName) => {
  checkPath();

  if(existsSync(path.resolve(dst, fileName))) {
    console.log('Asset already downloaded. Skipping...');
    return `/assets/files/${fileName}`;
  }
  const res = await fetch(url);
  console.log(`Saving ${url} into ${fileName}...`);
  const destination = path.resolve(dst, fileName);
  const fileStream = createWriteStream(destination, { flags: 'wx' });
  //@ts-ignore
  await finished(Readable.fromWeb(res.body).pipe(fileStream));

  return `/assets/files/${fileName}`;
});

/**
 * Uses imageURL internally to fetch webp image
 * @param img Sanity's Image field (containing asset inside img.asset)
 * @param options imageUrl options (SanityImageParams)
 * @param suffix suffix to add at the end of basePath (sueful when generating several image versions)
 * @returns url string to site's path. i.e. /assets/files/image.webp
 */
export async function getImageFile(img, options, suffix="") {
  if(!img && !img.asset) return "";
  const fileName = suffix != "" ? `${img.asset._ref}-${suffix}.webp` : `${img.asset._ref}.webp`;
  const url = await downloadFile(imageUrl(img, options), fileName);
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