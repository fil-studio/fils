import { CSS_UI } from "../partials/cssClasses";
import { RowTypes } from "../utils/dom";
import { UIElement } from "./UIElement";


export interface UISpacerParams {
	size?: string;
	line?: boolean;
}

export class UISpacer extends UIElement  {
	type: RowTypes = RowTypes.spacer;

	constructor(depth:number, {
		size = 'medium',
		line = true,
	}: UISpacerParams) {
		super(RowTypes.spacer);

		this.init(depth)

		if (line) this.el.classList.add(CSS_UI.spacer.hasLine);
		this.el.classList.add(CSS_UI.spacer.size[size.toLowerCase()]);
	}
}