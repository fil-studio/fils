import { BooleanItem } from "../components/items/customItems/BooleanItem";
import { NumberItem } from "../components/items/customItems/NumberItem";
import { StringItem } from "../components/items/customItems/StringItem";

import { ColorItem } from "../components/items/customItems/ColorItem";

import { RangeItem } from "../components/items/customItems/RangeItem";
import { SelectItem } from "../components/items/customItems/SelectItem";
import { UploadItem } from "../components/items/customItems/UploadItem";
import { ItemRegister, ItemRegisterOptions } from "./AvailableItems";
import { Item } from "../main";

export const RegisterBaseComponents = (extraItems:Array<ItemRegisterOptions>) => {

	for(const item of extraItems) {
		ItemRegister({
			view: item.view,
			item: item.constructor as typeof Item,
		})
	}

	ItemRegister({
		view: 'boolean',
		item: BooleanItem
	})

	ItemRegister({
		view: 'string',
		item: StringItem
	})

	ItemRegister({
		view: 'number',
		item: NumberItem
	})

	ItemRegister({
		view: 'range',
		item: RangeItem
	})

	ItemRegister({
		view: 'select',
		item: SelectItem,
	})

	ItemRegister({
		view: 'upload',
		item: UploadItem,
	})

	ItemRegister({
		view: 'color',
		item: ColorItem,
	})
}