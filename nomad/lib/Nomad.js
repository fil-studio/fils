var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Utils } from "./utils";
const linkRule = 'a:not([target]):not([href^=\\#]):not([fil-nomad-ignore])';
export class Nomad {
    constructor() {
        this.utils = new Utils();
        this.isPopstate = false;
        this.inProgress = false;
        this.trigger = null;
        this.location = this.utils.getLocation(window.location.href);
        this.attachLinks();
        window.addEventListener('popstate', () => {
            this.redirect(window.location.href, 'popstate');
        });
        window.addEventListener('nomad-before', (e) => {
            console.log('nomad-before', e.detail);
        });
        window.addEventListener('nomad-after', (e) => {
            console.log('nomad-after', e.detail);
        });
    }
    attachLinks() {
        const domLinks = document.querySelectorAll(linkRule);
        for (const link of domLinks) {
            link.addEventListener('click', this.navigate.bind(this));
        }
        this.utils.checkActiveLinks(domLinks);
    }
    detachLinks() {
        const domLinks = document.querySelectorAll(linkRule);
        for (const link of domLinks) {
            link.removeEventListener('click', this.navigate.bind(this));
        }
    }
    navigate(e) {
        if (e.metaKey || e.ctrlKey)
            return;
        e.preventDefault();
        this.redirect(e.currentTarget.href, e.currentTarget);
    }
    redirect(href, trigger = 'script') {
        if (this.inProgress) {
            console.log('Page Change inProgress');
            return;
        }
        this.trigger = trigger;
        this.inProgress = true;
        this.beforeFetch(href).then(() => {
            console.log('Before');
            this.fetch().then((page) => {
                const newPage = document.querySelector(page);
                console.log(newPage);
                this.afterFetch();
            });
        });
    }
    pushState() {
        if (this.isPopstate)
            return;
        window.history.pushState(this.location, '', this.location.href);
    }
    beforeFetch(href) {
        return __awaiter(this, void 0, void 0, function* () {
            this.detachLinks();
            const fromLocation = this.location;
            this.location = this.utils.getLocation(href);
            this.utils.emitEvent('nomad-before', {
                'from': fromLocation,
                'to': this.location,
                'trigger': this.trigger
            });
            this.pushState();
            return 1;
        });
    }
    fetch() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(this.location.href, {
                mode: 'same-origin',
                method: 'GET',
                headers: { 'X-Requested-With': 'Nomad' },
                credentials: 'same-origin'
            });
            if (response.status >= 200 && response.status < 300) {
                return response.text();
            }
            window.location.href = this.location.href;
        });
    }
    afterFetch() {
        return __awaiter(this, void 0, void 0, function* () {
            this.attachLinks();
            this.inProgress = false;
            this.trigger = null;
            this.utils.emitEvent('nomad-after', {
                'location': this.location,
            });
            return 1;
        });
    }
}
