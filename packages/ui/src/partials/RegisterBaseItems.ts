import { ItemRegister } from "./ItemFactory";
import { MathUtils } from '@fils/math';

import { BooleanItem } from "../components/items/customItems/BooleanItem";
import { StringItem } from "../components/items/customItems/StringItem";
import { NumberItem } from "../components/items/customItems/NumberItem";

import { ColorItem } from "../components/items/customItems/ColorItem";
import { ColorPicker } from "../components/panels/ColorPicker";

import { TextureItem } from "../components/items/customItems/TextureItem";
import { TextureList } from "../components/panels/TextureList";

import { MaterialItem } from "../components/items/customItems/MaterialItem";
import { RangeItem } from "../components/items/customItems/RangeItem";
import { SelectItem } from "../components/items/customItems/SelectItem";
import { SelectOptions } from "../components/panels/SelectOptions";
import { UploadItem } from "../components/items/customItems/UploadItem";

export const RegisterBaseComponents = () => {

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
		panel: SelectOptions
	})

	ItemRegister({
		view: 'upload',
		item: UploadItem,
	})

	ItemRegister({
		view: 'color',
		item: ColorItem,
		panel: ColorPicker
	})

	ItemRegister({
		view: 'texture',
		item: TextureItem,
	 	panel: TextureList
	})

	ItemRegister({
		view: 'material',
		item: MaterialItem,
		// inputController: TextureList
	})
}