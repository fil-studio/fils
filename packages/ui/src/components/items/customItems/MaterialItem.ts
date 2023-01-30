import { ExtendedItem } from "../ExtendedItem";
import { ItemOptions, ItemParams } from "../../Item";
import { ItemRegisterOptions } from "../../../partials/ItemFactory";

export class MaterialItem extends ExtendedItem {

	setValue(value: any): void {
		const newVale = value + 'test';
		super.setValue(newVale);
	}
}