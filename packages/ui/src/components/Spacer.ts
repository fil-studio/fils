import { CSS_UI } from "../partials/cssClasses";
import { RowTypes } from "../utils/dom";
import { UIElement } from "./UIElement";

export enum SpacerSize {
	small = 'small',
	medium = 'medium',
	large = 'large'
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
		this.el.classList.add(CSS_UI.spacer.size[size]);
	}
}