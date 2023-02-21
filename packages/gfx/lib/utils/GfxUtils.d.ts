import { Texture } from "three";
export type FitType = 'cover' | 'contain';
export declare function createTextureFromFile(file: File, handler?: Function): void;
/**
 * Get perspective's FOV at a given depth
 * @param z Perspective's depth (usually camera.position.z)
 * @param viewportHeight Viewport's Height (default: window.innerHeight)
 * @returns FOV in degrees
 */
export declare function perspectiveFov(z: number, viewportHeight?: number): number;
/**
 * Get viewport's height at any given depth.
 * @param fov camera's FOV
 * @param depth distance to camera. usually object.z - cam.z
 * @returns height of frustum
 */
export declare function frustumHeight(fov: number, depth: number): number;
export type Size = {
    width: number;
    height: number;
};
/**
 * Gets a rect's ratio
 * @param size size of rect. Note: A Vector2 of THREE should work since it implements this type
 * @returns ratio of rect
 */
export declare function getRatio(size: Size): number;
/**
 * Gets Window size
 * @returns Window's size
 */
export declare function getWindowSize(): Size;
/**
 * Returns Texture Size (width x height)
 * @param texture Input texture
 * @returns texture's Size
 */
export declare function getTextureSize(texture: Texture): Size;
/**
 * Calculates the ratio of a given texture
 * @param texture imput texture
 * @returns texture's ratio
 */
export declare function getTextureRatio(texture: Texture): number;
/**
 * Returns a scale factor to fit a given rect into viewport.
 * @param rect size of the rect (possible a plane with an image)
 * @param viewport size of viewport (usually window)
 * @returns scale factor you need to apply
 */
export declare function fitRectToViewport(rect: Size, viewport?: Size, fit?: FitType): number;
/**
 * Returns a Size (width, height) to fit a texture into
 * a given orthographic viewport.
 * @param texture Input texture
 * @param viewport Viewport's Size
 * @returns Target Size
 */
export declare function getTextureViewportRect(texture: Texture, viewport?: Size, fit?: FitType): Size;
/**
 * Returns a Size (width, height) to fit a Size into
 * a given orthographic viewport.
 * @param texture Input texture
 * @param viewport Viewport's Size
 * @returns Target Size
 */
export declare function getSizeViewportRect(rect: Size, viewport?: Size, fit?: FitType): Size;
