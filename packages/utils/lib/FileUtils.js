export const downloadFile = (cnt, filename) => {
    const link = document.createElement('a');
    link.style.display = 'none';
    document.body.appendChild(link);
    const binary = typeof cnt != "string";
    const blob = binary ? new Blob([cnt]) : new Blob([cnt], { type: 'text/plain' });
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
    document.body.removeChild(link);
};
export const addFileDropHandler = (el, dropHandler, overHandler, leaveHandler) => {
    el.addEventListener("dragover", (ev) => {
        ev.preventDefault();
        if (overHandler !== undefined)
            overHandler(ev);
    });
    el.addEventListener("dragleave", (ev) => {
        ev.preventDefault();
        if (leaveHandler !== undefined)
            leaveHandler(ev);
    });
    el.addEventListener("drop", (ev) => {
        ev.preventDefault();
        if (ev.dataTransfer != null && ev.dataTransfer.items) {
            const files = [];
            for (var i = 0; i < ev.dataTransfer.items.length; i++) {
                if (ev.dataTransfer.items[i].kind === 'file') {
                    var file = ev.dataTransfer.items[i].getAsFile();
                    files.push(file);
                }
            }
            dropHandler(files);
        }
        else {
            dropHandler(ev.dataTransfer != null && ev.dataTransfer.files);
        }
    });
};
export const openFileImportDialog = (accept = "", multiple = false) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = accept;
    input.multiple = multiple;
    document.body.appendChild(input);
    input.click();
    document.body.removeChild(input);
    return input;
};
