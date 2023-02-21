export declare const downloadFile: (cnt: ArrayBuffer | string, filename: string) => void;
export declare const addFileDropHandler: (el: HTMLElement, dropHandler: Function, overHandler?: Function, leaveHandler?: Function) => void;
export declare const openFileImportDialog: (accept?: string, multiple?: boolean) => HTMLInputElement;
