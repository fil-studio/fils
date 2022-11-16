var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { el } from '@fils/utils';
import { Page } from "./Page";
import { Utils } from "./utils";
const linkRule = 'a:not([target]):not([href^=\\#]):not([fil-nomad-ignore])';
export class Nomad {
    constructor(createPage = (template, dom) => { return null; }) {
        this.createPage = createPage;
        this.utils = new Utils();
        this.isPopstate = false;
        this.inProgress = false;
        this.trigger = null;
        this.routes = [];
        this.route = null;
        this.wrapper = document.querySelector('[nomad-wrapper]');
        if (!this.wrapper) {
            console.warn("Nomad can't work without warpper element.");
            return;
        }
        this.links = [];
        this.addLinksListener();
        window.addEventListener('popstate', (e) => {
            this.onPopState();
        });
        const newPage = this.wrapper.querySelector('[template]');
        const template = newPage.getAttribute('template');
        let newPageClass = this.createPage(template, newPage);
        if (!newPageClass)
            newPageClass = new Page(newPage);
        this.createRoute(template, newPageClass);
    }
    createRoute(template, page, href = window.location.href) {
        const location = this.utils.getLocation(href);
        const exists = this.routes.find(x => x.id === location.pathname);
        this.route = exists !== undefined ? exists : {
            id: location.pathname,
            template,
            page,
            location,
        };
        if (exists === undefined) {
            this.routes.push(this.route);
        }
    }
    addLinksListener() {
        const allPageLinks = document.querySelectorAll(linkRule);
        const newLinks = [];
        for (const link of allPageLinks) {
            if (this.links.find(x => x === link))
                continue;
            this.links.push(link);
            newLinks.push(link);
        }
        for (const link of newLinks) {
            link.addEventListener('click', (e) => {
                this.onClick(e);
            }, true);
        }
        this.utils.checkActiveLinks(allPageLinks);
    }
    onClick(e) {
        if (e.metaKey || e.ctrlKey)
            return;
        e.preventDefault();
        this.lifeCycle(e.currentTarget.href, e.currentTarget);
    }
    onPopState() {
        this.isPopstate = true;
        this.lifeCycle(window.location.href, 'popstate');
    }
    lifeCycle(href, trigger = 'script') {
        if (this.inProgress) {
            console.log('Page Change inProgress');
            return;
        }
        this.trigger = trigger;
        this.inProgress = true;
        this.beforeFetch();
        this.fetch(href).then((html) => {
            this.addContent(href, html);
            this.afterFetch();
        });
    }
    beforeFetch() {
    }
    addContent(href, html) {
        const oldPage = this.wrapper.querySelector('[template]');
        const content = el('div');
        content.innerHTML = html;
        const newPage = content.querySelector('[template]');
        const template = newPage.getAttribute('template');
        let newPageClass = this.createPage(template, newPage);
        if (!newPageClass)
            newPageClass = new Page(newPage);
        this.createRoute(template, newPageClass, href);
        const title = content.querySelector('title').textContent;
        document.documentElement.querySelector('title').textContent = title;
        if (!this.isPopstate)
            window.history.pushState(this.route.location, title, this.route.location.href);
        oldPage === null || oldPage === void 0 ? void 0 : oldPage.remove();
        this.wrapper.appendChild(newPage);
    }
    fetch(href) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(href, {
                mode: 'same-origin',
                method: 'GET',
                headers: { 'X-Requested-With': 'Nomad' },
                credentials: 'same-origin'
            });
            if (response.status >= 200 && response.status < 300) {
                return response.text();
            }
            window.location.href = href;
        });
    }
    afterFetch() {
        this.addLinksListener();
        this.inProgress = false;
        this.isPopstate = false;
        this.trigger = null;
    }
}
