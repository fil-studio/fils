"use strict";
/*
 * File Utils
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.openFileImportDialog = exports.addFileDropHandler = exports.downloadFile = void 0;
var downloadFile = function (cnt, filename) {
    var link = document.createElement('a');
    link.style.display = 'none';
    document.body.appendChild(link);
    var binary = typeof cnt != "string";
    var blob = binary ? new Blob([cnt]) : new Blob([cnt], { type: 'text/plain' });
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
    document.body.removeChild(link);
};
exports.downloadFile = downloadFile;
var addFileDropHandler = function (el, dropHandler, overHandler, leaveHandler) {
    el.addEventListener("dragover", function (ev) {
        ev.preventDefault();
        if (overHandler !== undefined)
            overHandler(ev);
    });
    el.addEventListener("dragleave", function (ev) {
        ev.preventDefault();
        if (leaveHandler !== undefined)
            leaveHandler(ev);
    });
    el.addEventListener("drop", function (ev) {
        ev.preventDefault();
        if (ev.dataTransfer != null && ev.dataTransfer.items) {
            var files = [];
            // Use DataTransferItemList interface to access the file(s)
            for (var i = 0; i < ev.dataTransfer.items.length; i++) {
                // If dropped items aren't files, reject them
                if (ev.dataTransfer.items[i].kind === 'file') {
                    var file = ev.dataTransfer.items[i].getAsFile();
                    files.push(file);
                }
            }
            dropHandler(files);
        }
        else {
            // Use DataTransfer interface to access the file(s)
            dropHandler(ev.dataTransfer != null && ev.dataTransfer.files);
        }
    });
};
exports.addFileDropHandler = addFileDropHandler;
var openFileImportDialog = function (accept, multiple) {
    if (accept === void 0) { accept = ""; }
    if (multiple === void 0) { multiple = false; }
    // Create an input element
    var input = document.createElement('input');
    // Set the type of the input element to "file"
    input.type = 'file';
    input.accept = accept;
    input.multiple = multiple;
    // Append the input element to the body
    document.body.appendChild(input);
    // Trigger the click event on the input element
    input.click();
    // Remove the input element from the body
    document.body.removeChild(input);
    return input;
};
exports.openFileImportDialog = openFileImportDialog;
