declare const check: {
    isUndefined: (obj: any) => boolean;
    isNull: (obj: any) => boolean;
    isNaN: (obj: any) => boolean;
    isArray: (obj: any) => boolean;
    isObject: (obj: any) => boolean;
    isNumber: (obj: any) => boolean;
    isString: (obj: any) => boolean;
    isBoolean: (obj: any) => boolean;
    isFunction: (obj: any) => boolean;
    getType: (obj: any) => "object" | "undefined" | "null" | "array" | "number" | "string" | "boolean" | "function";
};
export default check;
