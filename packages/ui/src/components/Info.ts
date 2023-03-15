import { el, isArray } from "@fils/utils";
import { CSS_UI } from "../main";
import { RowTypes } from "../utils/dom";
import { UIElement } from "./UIElement";

export type InfoParams = {
	text?: string | string[];
}


export class Info extends UIElement  {
	params: InfoParams;

	constructor(depth:number, params:InfoParams) {
		super(RowTypes.info);

		this.params = params;

		this.init(depth)
	}

	createContent(){
		const texts = this.params.text;
		if(isArray(texts)){
			for (let i = 0; i < this.params.text.length; i++) this.createText(this.params.text[i]);
		} else this.createText(this.params.text as string);

	}

	createText(text:string){
		const p = el('p', CSS_UI.info.text, this.el);
		p.innerText = text;
	}
}