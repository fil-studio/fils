export declare enum RowTypes {
    ui = 0,
    group = 1,
    item = 2,
    button = 3,
    spacer = 4,
    info = 5,
    custom = 6
}
interface DomOptions {
    type: RowTypes;
    depth: number;
    title?: string;
}
declare const dom: {
    createButton: (title: string, icon?: string) => HTMLElement;
    createRow: ({ type, depth, title, }?: DomOptions) => HTMLElement;
    addIcon: (header: HTMLElement, icon?: string) => void;
};
export default dom;
