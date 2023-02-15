import { CSS_UI } from "../partials/cssClasses";
import { RowTypes } from "../utils/dom";
import { UIElement } from "./UIElement";

/**
 * Spacer size options.
 *
 * @typedef {SpacerSize} WidgetOption
 * @property {string} small - Small.
 * @property {string} medium - Medium.
 * @property {string} large - Large.
 * @default medium
 */
export enum SpacerSize {
	small = 'Small',
	medium = 'Medium',
	large = 'Large'
}

export interface SpacerParams {
	size?: SpacerSize;
	line?: boolean;
}

export class Spacer extends UIElement  {
	type: RowTypes = RowTypes.spacer;

	constructor(depth:number, {
		size = SpacerSize.medium,
		line = true,
	}: SpacerParams) {
		super(RowTypes.spacer);

		this.init(depth)

		if (line) this.el.classList.add(CSS_UI.spacer.hasLine);
		this.el.classList.add(CSS_UI.spacer.size[size.toLowerCase()]);
	}
}