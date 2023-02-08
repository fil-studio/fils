import { CSS_UI } from "../partials/cssClasses";
import dom, { RowTypes } from "../utils/dom";
import { Dom } from "./items/Item";

export enum SpacerSize {
	small = 'small',
	medium = 'medium',
	large = 'large'
}

export interface SpacerParams {
	size?: SpacerSize;
	line?: boolean;
}

export class Spacer {
	type: RowTypes = RowTypes.spacer;
	dom: Dom;

	constructor(depth:number, {
		size = SpacerSize.medium,
		line = true,
	}: SpacerParams) {

		this.dom = {
			el: null
		}

		this.dom.el = dom.createRow({
			type: RowTypes.spacer,
			depth,
		});

		if (line) this.dom.el.classList.add(CSS_UI.spacer.hasLine);
		this.dom.el.classList.add(CSS_UI.spacer.size[size]);

	}

}