import { ExtendedItem } from "../ExtendedItem";
import { ItemOptions, ItemParams } from "../../Item";
import { ItemRegisterOptions } from "../../../partials/ItemFactory";

export class MaterialItem extends ExtendedItem {

	constructor(registerOptions: ItemRegisterOptions, itemParams: ItemParams, options?: ItemOptions) {
		super(registerOptions, itemParams, options);

		console.log('Material');


	}

	setValue(value: any): void {
		const newVale = value + 'test';
		super.setValue(newVale);
	}
}