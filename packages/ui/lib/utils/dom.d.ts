export declare enum RowTypes {
    ui = 0,
    group = 1,
    item = 2,
    button = 3,
    spacer = 4
}
interface DomOptions {
    type: RowTypes;
    depth: number;
    title?: string;
}
declare const dom: {
    createButton: (title: string, icon?: string) => any;
    createRow: ({ type, depth, title, }?: DomOptions) => any;
    addIcon: (header: HTMLElement, icon?: string) => void;
};
export default dom;
