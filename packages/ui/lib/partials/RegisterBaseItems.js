"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterBaseComponents = void 0;
const ItemFactory_1 = require("./ItemFactory");
const BooleanItem_1 = require("../components/items/customItems/BooleanItem");
const NumberItem_1 = require("../components/items/customItems/NumberItem");
const StringItem_1 = require("../components/items/customItems/StringItem");
const ColorItem_1 = require("../components/items/customItems/ColorItem");
const RangeItem_1 = require("../components/items/customItems/RangeItem");
const SelectItem_1 = require("../components/items/customItems/SelectItem");
const UploadItem_1 = require("../components/items/customItems/UploadItem");
const RegisterBaseComponents = () => {
    (0, ItemFactory_1.ItemRegister)({
        view: 'boolean',
        item: BooleanItem_1.BooleanItem
    });
    (0, ItemFactory_1.ItemRegister)({
        view: 'string',
        item: StringItem_1.StringItem
    });
    (0, ItemFactory_1.ItemRegister)({
        view: 'number',
        item: NumberItem_1.NumberItem
    });
    (0, ItemFactory_1.ItemRegister)({
        view: 'range',
        item: RangeItem_1.RangeItem
    });
    (0, ItemFactory_1.ItemRegister)({
        view: 'select',
        item: SelectItem_1.SelectItem,
    });
    (0, ItemFactory_1.ItemRegister)({
        view: 'upload',
        item: UploadItem_1.UploadItem,
    });
    (0, ItemFactory_1.ItemRegister)({
        view: 'color',
        item: ColorItem_1.ColorItem,
    });
};
exports.RegisterBaseComponents = RegisterBaseComponents;
