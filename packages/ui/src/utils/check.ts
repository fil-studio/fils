

const check = {
	isUndefined: function(obj) {
		return obj === undefined;
	},

	isNull: function(obj) {
		return obj === null;
	},

	isNaN: function(obj) {
		return isNaN(obj);
	},

	isArray: Array.isArray || function(obj) {
		return obj.constructor === Array;
	},

	isObject: function(obj) {
		return obj === Object(obj);
	},

	isNumber: function(obj) {
		return obj === obj + 0;
	},

	isString: function(obj) {
		return obj === obj + '';
	},

	isBoolean: function(obj) {
		return obj === false || obj === true;
	},

	isFunction: function(obj) {
		return obj instanceof Function;
	}
}

export default check;