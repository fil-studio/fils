import { ExtendedItem } from "../ExtendedItem";

export class MaterialItem extends ExtendedItem {

	setValue(value: any): void {
		const newVale = value + 'test';
		super.setValue(newVale);
	}
}