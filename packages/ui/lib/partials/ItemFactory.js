"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemFactory = void 0;
const check_1 = require("../utils/check");
const AvailableItems_1 = require("./AvailableItems");
const compareArrays = (a, b) => {
    if (a.length !== b.length)
        return false;
    for (const item of a) {
        if (b.indexOf(item) === -1) {
            return false;
        }
    }
    return true;
};
const ItemFactory = (createParams) => {
    const params = createParams.params;
    if (!createParams.object)
        throw new Error('ItemFactory - object is required');
    if (!createParams.key)
        throw new Error('ItemFactory - key is required');
    // Force item type
    if (params && params.view) {
        const item = AvailableItems_1.default.items.find(item => item.view === params.view);
        if (!item)
            throw new Error('ItemFactory - unknown view');
        return item.create(createParams);
    }
    const item = getItemByValue(createParams.object[createParams.key], createParams.params);
    if (item) {
        createParams.params.view = item.view;
        return item.create(createParams);
    }
};
exports.ItemFactory = ItemFactory;
const getItemByValue = (value, params) => {
    if (check_1.default.isObject(value)) {
        let keys = Object.keys(value);
        keys = keys.map(key => key.toLowerCase());
        const c1 = ['r', 'g', 'b'];
        const c2 = ['h', 's', 'b'];
        const c3 = ['h', 's', 'l'];
        if (compareArrays(keys, c1) || compareArrays(keys, c2) || compareArrays(keys, c3))
            return AvailableItems_1.default.items.find(item => item.view === 'color');
        const n1 = ['x', 'y'];
        const n2 = ['x', 'y', 'z'];
        const n3 = ['x', 'y', 'z', 'w'];
        if (compareArrays(keys, n1) || compareArrays(keys, n2) || compareArrays(keys, n3))
            return AvailableItems_1.default.items.find(item => item.view === 'number');
    }
    // If min max or step use range
    if (check_1.default.isNumber(value)) {
        if (params) {
            if (params.min || params.max || params.step)
                return AvailableItems_1.default.items.find(item => item.view === 'range');
        }
        return AvailableItems_1.default.items.find(item => item.view === 'number');
    }
    if (check_1.default.isString(value)) {
        if (value.substring(0, 1) === '#')
            return AvailableItems_1.default.items.find(item => item.view === 'color');
        if (value.substring(0, 2) === '0x')
            return AvailableItems_1.default.items.find(item => item.view === 'color');
        return AvailableItems_1.default.items.find(item => item.view === 'string');
    }
    if (check_1.default.isBoolean(value))
        return AvailableItems_1.default.items.find(item => item.view === 'boolean');
    return undefined;
};
