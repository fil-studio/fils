import { MeshBasicMaterial, MeshPhongMaterial, MeshPhysicalMaterial, MeshStandardMaterial } from "three";
declare type SupportedMaterial = MeshBasicMaterial | MeshPhongMaterial | MeshStandardMaterial | MeshPhysicalMaterial;
export declare function initMaterial(mat: SupportedMaterial): any;
export {};
