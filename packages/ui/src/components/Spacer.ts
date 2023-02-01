import { CSS_UI } from "../partials/cssClasses";
import dom, { RowTypes } from "../utils/dom";
import { Group } from "./Group";

export enum SpacerSize {
	small,
	medium,
	large
}
const SpacerSizeNames = Object.values(SpacerSize);


export interface SpacerParams {
	parent?: Group;
	size?: SpacerSize;
	line?: boolean;
}


export class Spacer {
	type: RowTypes = RowTypes.spacer;
	dom: HTMLElement;

	constructor({
		parent,
		size = SpacerSize.medium,
		line = true
	}: SpacerParams) {

		const depth = parent.depth + 1;

		this.dom = dom.createRow( {
			type: RowTypes.spacer,
			depth: depth,
		});

		if (line) this.dom.classList.add(CSS_UI.spacer.hasLine);
		this.dom.classList.add(CSS_UI.spacer.size[SpacerSizeNames[size]]);

	}

}