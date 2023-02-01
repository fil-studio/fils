
export interface ItemOptionsInterface {
	view: string,
	title?: string;
	onChangeCallback?: Function;
}

export interface NumberItemOptions extends ItemOptionsInterface {
	min?: number;
	max?: number;
	step?: number;
}

export interface RangeItemOptions extends NumberItemOptions {
	overExpose?: number | [number, number];
}

export interface SelectItemOptions extends ItemOptionsInterface {
	options: Array<string | number> | Object;
}

export interface UploadItemOptions extends ItemOptionsInterface {
	icon: string;
	text: string;
}


export type ItemOptions = ItemOptionsInterface | NumberItemOptions | RangeItemOptions | SelectItemOptions | UploadItemOptions;