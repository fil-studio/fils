import check from "../utils/check";
export const AvailableItems = {
  items: []
};
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
export const ItemRegister = (registerOptions) => {
  const createItem = (createParams) => {
    return new registerOptions.item(createParams);
  };
  AvailableItems.items.push({
    view: registerOptions.view,
    create: createItem
  });
};
export const ItemFactory = (createParams) => {
  const params = createParams.params;
  if (!createParams.object)
    throw new Error("ItemFactory - object is required");
  if (!createParams.key)
    throw new Error("ItemFactory - key is required");
  if (params && params.view) {
    const item2 = AvailableItems.items.find((item3) => item3.view === params.view);
    if (!item2)
      throw new Error("ItemFactory - unknown view");
    return item2.create(createParams);
  }
  const item = getItemByValue(createParams.object[createParams.key], createParams.params);
  if (item) {
    createParams.params.view = item.view;
    return item.create(createParams);
  }
};
const getItemByValue = (value, params) => {
  if (check.isObject(value)) {
    let keys = Object.keys(value);
    keys = keys.map((key) => key.toLowerCase());
    const c1 = ["r", "g", "b"];
    const c2 = ["h", "s", "b"];
    const c3 = ["h", "s", "l"];
    if (compareArrays(keys, c1) || compareArrays(keys, c2) || compareArrays(keys, c3))
      return AvailableItems.items.find((item) => item.view === "color");
    const n1 = ["x", "y"];
    const n2 = ["x", "y", "z"];
    const n3 = ["x", "y", "z", "w"];
    if (compareArrays(keys, n1) || compareArrays(keys, n2) || compareArrays(keys, n3))
      return AvailableItems.items.find((item) => item.view === "number");
  }
  if (check.isNumber(value)) {
    if (params) {
      if (params.min || params.max || params.step)
        return AvailableItems.items.find((item) => item.view === "range");
    }
    return AvailableItems.items.find((item) => item.view === "number");
  }
  if (check.isString(value)) {
    if (value.substring(0, 1) === "#")
      return AvailableItems.items.find((item) => item.view === "color");
    if (value.substring(0, 2) === "0x")
      return AvailableItems.items.find((item) => item.view === "color");
    return AvailableItems.items.find((item) => item.view === "string");
  }
  if (check.isBoolean(value))
    return AvailableItems.items.find((item) => item.view === "boolean");
  return void 0;
};
//# sourceMappingURL=ItemFactory.js.map
