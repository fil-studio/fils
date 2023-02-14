const check = {
  isUndefined: function(obj) {
    return obj === void 0;
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
    return obj === obj + "";
  },
  isBoolean: function(obj) {
    return obj === false || obj === true;
  },
  isFunction: function(obj) {
    return obj instanceof Function;
  },
  getType: function(obj) {
    if (check.isUndefined(obj))
      return "undefined";
    if (check.isNull(obj))
      return "null";
    if (check.isArray(obj))
      return "array";
    if (check.isObject(obj))
      return "object";
    if (check.isNumber(obj))
      return "number";
    if (check.isString(obj))
      return "string";
    if (check.isBoolean(obj))
      return "boolean";
    if (check.isFunction(obj))
      return "function";
  }
};
export default check;
//# sourceMappingURL=check.js.map
