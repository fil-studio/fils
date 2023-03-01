export function isUndefined(obj: any) {
	return obj === undefined;
}

export function isNull(obj: any) {
	return obj === null;
}

export function isNaN(obj: any) {
	return isNaN(obj);
}

export function isArray (obj: any) {
	return obj.constructor === Array;
}

export function isObject(obj: any) {
	return obj === Object(obj);
}

export function isNumber(obj: any) {
	return obj === obj + 0;
}

export function isString(obj: any) {
	return obj === obj + '';
}

export function isBoolean(obj: any) {
	return obj === false || obj === true;
}

export function isFunction(obj: any) {
	return obj instanceof Function;
}

export function getType(obj: any) {
	if (isUndefined(obj)) return 'undefined';
	if (isNull(obj)) return 'null';
	if (isArray(obj)) return 'array';
	if (isObject(obj)) return 'object';
	if (isNumber(obj)) return 'number';
	if (isString(obj)) return 'string';
	if (isBoolean(obj)) return 'boolean';
	if (isFunction(obj)) return 'function';
}

export function equal(a: any, b: any) {
	if (isObject(a) && isObject(b)) {
		if (Object.keys(a).length !== Object.keys(b).length) return false;
		for (const key in a) {
			if (!equal(a[key], b[key])) return false;
		}
		return true;
	}
	if (a === b) return true;
}
