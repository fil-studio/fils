import { CustomExtendedItem } from "../CustomExtendedItem";
import { ItemOptions, ItemParams } from "../../Item";
import { ItemClassRegisterOptions } from "../../../partials/ItemFactory";

export class MaterialItem extends CustomExtendedItem {

	constructor(registerOptions: ItemClassRegisterOptions, itemParams: ItemParams, options?: ItemOptions) {
		super(registerOptions, itemParams, options);

		console.log('Material');


	}

	setValue(value: any): void {
		const newVale = value + 'test';
		super.setValue(newVale);
	}
}