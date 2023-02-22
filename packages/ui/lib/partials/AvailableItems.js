const AvailableItems = {
    items: [],
};
export const ItemRegister = (registerOptions) => {
    const createItem = (createParams) => {
        return new registerOptions.item(createParams);
    };
    AvailableItems.items.push({
        view: registerOptions.view,
        create: createItem,
    });
};
export default AvailableItems;
