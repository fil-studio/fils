"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemRegister = void 0;
const AvailableItems = {
    items: [],
};
const ItemRegister = (registerOptions) => {
    const createItem = (createParams) => {
        return new registerOptions.item(createParams);
    };
    AvailableItems.items.push({
        view: registerOptions.view,
        create: createItem,
    });
};
exports.ItemRegister = ItemRegister;
exports.default = AvailableItems;
