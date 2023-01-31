import { ItemRegister } from "./ItemFactory";
import { MathUtils } from '@fils/math';

import { BooleanItem } from "../components/items/customItems/BooleanItem";
import { StringItem } from "../components/items/customItems/StringItem";
import { NumberItem } from "../components/items/customItems/NumberItem";

import { ColorItem } from "../components/items/customItems/ColorItem";
import { ColorPicker } from "../components/inputPanels/ColorPicker";

import { TextureItem } from "../components/items/customItems/TextureItem";
import { TextureList } from "../components/inputPanels/TextureList";

import { MaterialItem } from "../components/items/customItems/MaterialItem";
import { RangeItem } from "../components/items/customItems/RangeItem";
import { SelectItem } from "../components/items/customItems/SelectItem";
import { SelectOptions } from "../components/inputPanels/SelectOptions";

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
		inputPanel: SelectOptions
	})

	ItemRegister({
		view: 'color',
		item: ColorItem,
		inputPanel: ColorPicker
	})

	ItemRegister({
		view: 'texture',
		item: TextureItem,
	 	inputPanel: TextureList
	})

	ItemRegister({
		view: 'material',
		item: MaterialItem,
		// inputController: TextureList
	})
}