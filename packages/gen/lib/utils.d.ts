import { BufferGeometry } from "three";
import { pt, Quad, Tri } from "./types";
export declare function getV3FromVA(geo: BufferGeometry, id: string, i?: number): pt;
export declare function getV2FromVA(geo: BufferGeometry, id: string, i?: number): pt;
export declare function getVertex(geo: BufferGeometry, i?: number): pt;
export declare function getUV(geo: BufferGeometry, i?: number): pt;
export declare function getNormal(geo: BufferGeometry, i?: number): pt;
export declare function getTri(p1: pt, p2: pt, width?: number): Tri;
/**
 * This function is used to generate a triangle along two 3D points
 * @param pos Positions array to add vertices to
 * @param index indices array
 * @param p1 first point
 * @param p2 second point
 * @param width Triangle's width
 * @param addP12 wether to add p1 and p1 to the buffer
 */
export declare function addTri(pos: Array<number>, index: Array<number>, p1: pt, p2: pt, width?: number, addP12?: boolean): void;
export declare function getQuad(p1: pt, p2: pt, width?: number): Quad;
/**
 * This function is used to generate a quad along two 3D points
 * @param pos Positions array to add vertices to
 * @param index indices array
 * @param p1 first point
 * @param p2 second point
 * @param width Quad's width
 * @param addP1 wether to add p11 and p12 to the buffer
 */
export declare function addQuad(pos: Array<number>, index: Array<number>, p1: pt, p2: pt, width?: number, addP1?: boolean): void;
