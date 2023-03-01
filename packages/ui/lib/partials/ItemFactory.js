import { isBoolean, isNumber, isObject, isString } from "@fils/utils";
import AvailableItems from "./AvailableItems";
const compareArrays = (a, b) => {
    for (const item of b) {
        if (a.indexOf(item) === -1) {
            return false;
        }
    }
    return true;
};
export const ItemFactory = ({ object, key, params = {} }) => {
    if (!object)
        throw new Error('ItemFactory - object is required');
    if (!key)
        throw new Error('ItemFactory - key is required');
    // Force item type
    if (params && params.view) {
        const item = AvailableItems.items.find(item => item.view === params.view);
        if (!item)
            throw new Error('ItemFactory - unknown view');
        return item.create({ object, key, params });
    }
    const item = getItemByValue(object[key], params);
    if (item) {
        params.view = item.view;
        return item.create({ object, key, params });
    }
};
const getItemByValue = (value, params) => {
    console.log('entra', value, params);
    if (isObject(value)) {
        let keys = Object.keys(value);
        keys = keys.map(key => key.toLowerCase());
        const c1 = ['r', 'g', 'b'];
        const c2 = ['h', 's', 'b'];
        const c3 = ['h', 's', 'l'];
        if (compareArrays(keys, c1) || compareArrays(keys, c2) || compareArrays(keys, c3))
            return AvailableItems.items.find(item => item.view === 'color');
        const n1 = ['x', 'y'];
        const n2 = ['x', 'y', 'z'];
        const n3 = ['_x', '_y', '_z'];
        const n4 = ['x', 'y', 'z', 'w'];
        if (compareArrays(keys, n1) || compareArrays(keys, n2) || compareArrays(keys, n3) || compareArrays(keys, n4))
            return AvailableItems.items.find(item => item.view === 'number');
    }
    // If min max or step use range
    if (isNumber(value)) {
        if (params) {
            if (params.min || params.max || params.step)
                return AvailableItems.items.find(item => item.view === 'range');
        }
        return AvailableItems.items.find(item => item.view === 'number');
    }
    if (isString(value)) {
        if (value.substring(0, 1) === '#')
            return AvailableItems.items.find(item => item.view === 'color');
        if (value.substring(0, 2) === '0x')
            return AvailableItems.items.find(item => item.view === 'color');
        return AvailableItems.items.find(item => item.view === 'string');
    }
    if (isBoolean(value))
        return AvailableItems.items.find(item => item.view === 'boolean');
    return undefined;
};
