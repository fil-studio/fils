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
import { SliderItem } from "../components/items/customItems/SliderItem";

export const RegisterBaseComponents = () => {

	ItemRegister({
		view: 'boolean',
		type: 'boolean',
		item: BooleanItem
	})

	ItemRegister({
		view: 'string',
		type: 'string',
		item: StringItem
	})

	ItemRegister({
		view: 'number',
		type: 'number',
		item: NumberItem
	})

	ItemRegister({
		view: 'slider',
		type: 'slider',
		item: SliderItem
	})

	ItemRegister({
		view: 'color',
		type: 'color',
		item: ColorItem,
		inputPanel: ColorPicker
	})

	ItemRegister({
		view: 'texture',
		type: 'texture',
		item: TextureItem,
	 	inputPanel: TextureList
	})

	ItemRegister({
		view: 'material',
		type: 'material',
		item: MaterialItem,
		// inputController: TextureList
	})
}