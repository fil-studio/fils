
export interface ItemOptionsInterface {
	view: string,
	title?: string;
}

export interface NumberItemOptions extends ItemOptionsInterface {
	min?: number;
	max?: number;
	step?: number;
	decimals?: number;
}

export interface RangeItemOptions extends NumberItemOptions {
	overExpose?: number | [number, number];
}

export interface DropdownOptions extends ItemOptionsInterface {
	options: Array<any>;
}
export interface UploadItemOptions extends ItemOptionsInterface {
	icon: string;
	text: string;
}

export type ItemOptions = ItemOptionsInterface | NumberItemOptions | RangeItemOptions | DropdownOptions | UploadItemOptions;