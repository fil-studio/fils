

const check = {
	isUndefined: function (obj: any) {
		return obj === undefined;
	},

	isNull: function (obj: any) {
		return obj === null;
	},

	isNaN: function (obj: any) {
		return isNaN(obj);
	},

	isArray: Array.isArray || function (obj: any) {
		return obj.constructor === Array;
	},

	isObject: function (obj: any) {
		return obj === Object(obj);
	},

	isNumber: function (obj: any) {
		return obj === obj + 0;
	},

	isString: function (obj: any) {
		return obj === obj + '';
	},

	isBoolean: function (obj: any) {
		return obj === false || obj === true;
	},

	isFunction: function(obj:any) {
		return obj instanceof Function;
	},

	getType: function (obj: any) {
		if (check.isUndefined(obj)) return 'undefined';
		if (check.isNull(obj)) return 'null';
		if (check.isArray(obj)) return 'array';
		if (check.isObject(obj)) return 'object';
		if (check.isNumber(obj)) return 'number';
		if (check.isString(obj)) return 'string';
		if (check.isBoolean(obj)) return 'boolean';
		if (check.isFunction(obj)) return 'function';
	}
}

export default check;