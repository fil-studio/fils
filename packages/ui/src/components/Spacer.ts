import { CSS_UI } from "../partials/cssClasses";
import dom, { RowTypes } from "../utils/dom";
import { Group } from "./Group";
import { Dom } from "./items/Item";

export enum SpacerSize {
	small = 'small',
	medium = 'medium',
	large = 'large'
}

export interface SpacerParams {
	parent?: Group;
	size?: SpacerSize;
	line?: boolean;
}

export class Spacer {
	type: RowTypes = RowTypes.spacer;
	dom: Dom;


	constructor({
		parent,
		size = SpacerSize.medium,
		line = true
	}: SpacerParams) {

		const depth = parent.depth + 1;

		this.dom = {
			el: null
		}

		this.dom.el = dom.createRow( {
			type: RowTypes.spacer,
			depth: depth,
		});

		if (line) this.dom.el.classList.add(CSS_UI.spacer.hasLine);
		this.dom.el.classList.add(CSS_UI.spacer.size[size]);

	}

}