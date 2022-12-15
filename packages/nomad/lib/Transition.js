var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class Transition {
    constructor() {
        this.id = '';
    }
    transitionOutStart() { }
    transitionOutEnd() { }
    transitionOut(resolve, dom) {
        return resolve();
    }
    transitionOutWrapper(dom) {
        return __awaiter(this, void 0, void 0, function* () {
            this.transitionOutStart();
            const promise = new Promise((resolve) => {
                this.transitionOut(resolve, dom);
                this.transitionOutEnd();
            });
            return yield promise;
        });
    }
    transitionInStart() { }
    transitionInEnd() { }
    transitionIn(resolve, dom) {
        return resolve();
    }
    transitionInWrapper(dom) {
        return __awaiter(this, void 0, void 0, function* () {
            this.transitionInStart();
            const promise = new Promise((resolve) => {
                this.transitionIn(resolve, dom);
                this.transitionInEnd();
            });
            return yield promise;
        });
    }
}
