import { SanityImageAssetDocument } from "@sanity/client";
import { configDotenv } from "dotenv";
configDotenv();

const baseURL = `https://cdn.sanity.io/images/${process.env.SANITY_PROJECT_ID}/production`;

export interface SanityImageParams {
	width?: number;
	height?: number;
	quality?: number;
}

export function imageUrl(image:SanityImageAssetDocument, params:SanityImageParams) {
    const parts = image.asset._ref.split('-');
    const oWidth = parseInt(parts[2].split('x')[0]);
    const oHeight = parseInt(parts[2].split('x')[1]);
    const q = params.quality ? params.quality : 90;

    let qp = `auto=format&q=${q}`;
    if(params.width) qp += `&w=${Math.min(params.width, oWidth)}`;
    if(params.height) qp += `&h=${Math.min(params.height, oHeight)}`;
    return `${baseURL}/${parts[1]}-${parts[2]}.${parts[3]}?${qp}`;
}

export function imageRatio(image:SanityImageAssetDocument) {
    const parts = image.asset._ref.split('-');
    const siz = parts[2].split('x');
    const oWidth = parseInt(siz[0]);
    const oHeight = parseInt(siz[1]);

    return oWidth / oHeight;
}

export function getImageWidth(image:SanityImageAssetDocument) {
    const parts = image.asset._ref.split('-');
    const siz = parts[2].split('x');
    const oWidth = parseInt(siz[0]);

    return oWidth;
}

export function getImageHeight(image:SanityImageAssetDocument) {
    const parts = image.asset._ref.split('-');
    const siz = parts[2].split('x');
    const oHeight = parseInt(siz[1]);

    return oHeight;
}
