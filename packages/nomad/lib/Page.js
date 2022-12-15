var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class Page {
    constructor(dom) {
        this.id = '';
        this.isActive = false;
        this.isLoaded = false;
        this.dom = dom;
        this.create();
        this.addEventListeners();
    }
    addEventListeners() { }
    ;
    create() { }
    dispose() { }
    load(resolve) {
        return __awaiter(this, void 0, void 0, function* () {
            resolve();
        });
    }
    loaded() {
        console.log('Loaded!');
    }
    transitionIn(resolve) {
        return __awaiter(this, void 0, void 0, function* () {
            resolve();
        });
    }
    transitionOut(resolve) {
        return __awaiter(this, void 0, void 0, function* () {
            resolve();
        });
    }
    kill() { }
}
