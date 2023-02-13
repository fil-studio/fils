"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadItem = void 0;
const utils_1 = require("@fils/utils");
const Icons_1 = require("../../../../../ui-icons/lib/Icons");
const cssClasses_1 = require("../../../partials/cssClasses");
const dom_1 = __importDefault(require("../../../utils/dom"));
const Item_1 = require("../Item");
class UploadItem extends Item_1.Item {
    constructor() {
        super(...arguments);
        this.params = {
            text: '',
        };
        this.buttonTitle = '';
        this.uploadButton = (0, utils_1.el)('div');
        this.removeUploadButton = (0, utils_1.el)('div');
        this.input = (0, utils_1.el)('input');
    }
    addEventListeners() {
        this.uploadButton.addEventListener('click', () => {
            this.input.click();
        });
        this.input.addEventListener('change', () => {
            const file = this.input && this.input.files && this.input.files[0] ? this.input.files[0] : null;
            if (!file)
                return;
            this.removeUploadButton.querySelector('h3').innerText = file.name;
            this.removeUploadButton.classList.remove(`${cssClasses_1.CSS_UI.utility.hidden}`);
            this.uploadButton.classList.add(`${cssClasses_1.CSS_UI.utility.hidden}`);
            this.setValue(file);
        });
        this.removeUploadButton.addEventListener('click', () => {
            this.removeUploadButton.classList.add(`${cssClasses_1.CSS_UI.utility.hidden}`);
            this.uploadButton.classList.remove(`${cssClasses_1.CSS_UI.utility.hidden}`);
            this.setValue(null);
        });
    }
    createContent() {
        this.buttonTitle = this.params.text ? this.params.text : this.title;
        this.uploadButton = dom_1.default.createButton(this.buttonTitle, this.params.icon);
        this.content.appendChild(this.uploadButton);
        this.removeUploadButton = dom_1.default.createButton('', Icons_1.uiRemove);
        this.removeUploadButton.classList.add(`${cssClasses_1.CSS_UI.utility.hidden}`);
        this.content.appendChild(this.removeUploadButton);
        this.el.classList.add(cssClasses_1.CSS_UI.row.vertical);
        this.input = document.createElement('input');
        this.input.type = 'file';
        this.input.style.display = 'none';
        this.content.appendChild(this.input);
    }
}
exports.UploadItem = UploadItem;
