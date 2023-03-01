export function isUndefined(obj) {
    return obj === undefined;
}
export function isNull(obj) {
    return obj === null;
}
export function isArray(obj) {
    return obj.constructor === Array;
}
export function isObject(obj) {
    return obj === Object(obj);
}
export function isNumber(obj) {
    return obj === obj + 0;
}
export function isString(obj) {
    return obj === obj + '';
}
export function isBoolean(obj) {
    return obj === false || obj === true;
}
export function isFunction(obj) {
    return obj instanceof Function;
}
export function getType(obj) {
    if (isUndefined(obj))
        return 'undefined';
    if (isNull(obj))
        return 'null';
    if (isArray(obj))
        return 'array';
    if (isObject(obj))
        return 'object';
    if (isNumber(obj))
        return 'number';
    if (isString(obj))
        return 'string';
    if (isBoolean(obj))
        return 'boolean';
    if (isFunction(obj))
        return 'function';
}
export function equal(a, b) {
    if (isObject(a) && isObject(b)) {
        if (Object.keys(a).length !== Object.keys(b).length)
            return false;
        for (const key in a) {
            if (!equal(a[key], b[key]))
                return false;
        }
        return true;
    }
    if (a === b)
        return true;
}
