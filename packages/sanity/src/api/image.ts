import { createImageUrlBuilder } from '@sanity/image-url';
import { sanityConfig } from './client';

const builder = createImageUrlBuilder({
    projectId: sanityConfig.projectId as string,
    dataset: sanityConfig.dataset as string
});

export type ImageFormat = 'jpg' | 'pjpg' | 'png' | 'webp';

/** Shape of a Sanity image field value (asset reference + optional hotspot/crop) */
export interface SanityImageField {
    asset: { _ref: string; _type?: string };
    hotspot?: { x: number; y: number; width: number; height: number };
    crop?: { top: number; bottom: number; left: number; right: number };
}

export interface SanityImageParams {
    width?: number;
    height?: number;
    quality?: number;
    /** Output format. Defaults to 'webp'. */
    format?: ImageFormat;
    /** Arbitrary query string appended to the URL as an escape hatch */
    custom?: string;
    /** Return the original file with no transforms applied. Ignores all other params. */
    original?: boolean;
}

export function imageUrl(image: SanityImageField, params: SanityImageParams): string {
    if (params.original) return builder.image(image).url();

    const q = params.quality ?? 90;
    const fmt = params.format ?? 'webp';

    let b = builder.image(image).quality(q).format(fmt);

    if (params.width) b = b.width(params.width);
    if (params.height) b = b.height(params.height);

    let url = b.url();
    if (params.custom) url += `&${params.custom}`;

    return url;
}

function parseRefDimensions(ref: string): [number, number] {
    const [w, h] = ref.split('-')[2].split('x').map(Number);
    return [w, h];
}

export function imageRatio(image: SanityImageField): number {
    const [w, h] = parseRefDimensions(image.asset._ref);
    return w / h;
}

export function getImageWidth(image: SanityImageField): number {
    return parseRefDimensions(image.asset._ref)[0];
}

export function getImageHeight(image: SanityImageField): number {
    return parseRefDimensions(image.asset._ref)[1];
}
