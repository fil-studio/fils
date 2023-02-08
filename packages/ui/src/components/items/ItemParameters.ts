
export interface ItemParametersInterface {
	view?: string,
	title?: string;
}

export interface NumberItemParameters extends ItemParametersInterface {
	min?: number;
	max?: number;
	step?: number;
	decimals?: number;
}

export interface RangeItemParameters extends NumberItemParameters {
	overExpose?: number | [number, number];
}

export interface UploadItemParameters extends ItemParametersInterface {
	icon: string;
	text: string;
}

export type ItemParameters = ItemParametersInterface | NumberItemParameters | RangeItemParameters | UploadItemParameters;