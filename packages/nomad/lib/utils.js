"use strict";
/**
 * Some utils inspired by https://github.com/Dogstudio/highway/blob/master/src/helpers.js
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
class Utils {
    constructor() {
        this.checkActiveLinks = (links) => {
            const pathname = this.addSlash(window.location.pathname);
            for (const link of links) {
                link.classList.remove('nomad__active-link');
                if (!link.hasAttribute('href'))
                    continue;
                const href = link.getAttribute('href');
                const location = this.getLocation(href);
                if (location.pathname === pathname)
                    link.classList.add('nomad__active-link');
                else if (location.pathname != pathname && pathname.includes(location.pathname))
                    link.classList.add('nomad__parent-link');
            }
        };
    }
    addSlash(url) {
        return url.charAt(url.length - 1) === '/' ? url : `${url}/`;
    }
    getOrigin(url) {
        const match = url.match(/(https?:\/\/[\w\-.]+)/);
        return match ? match[1].replace(/https?:\/\//, '') : null;
    }
    getPathname(url) {
        const match = url.match(/https?:\/\/.*?(\/[\w_\-./]+)/);
        return this.addSlash(match ? match[1] : '/');
    }
    getProtocol(url) {
        const match = url.match(/^[^:]+(?=:\/\/)/);
        return match ? match[0] : null;
    }
    getAnchor(url) {
        const match = url.match(/(#.*)$/);
        return match ? match[1] : null;
    }
    getParams(url) {
        const match = url.match(/\?([\w_\-.=&]+)/);
        if (!match) {
            return null;
        }
        const search = match[1].split('&');
        const object = {};
        for (let i = 0; i < search.length; i++) {
            const part = search[i].split('=');
            const { 0: key } = part;
            const { 1: value } = part;
            object[key] = value;
        }
        return object;
    }
    getLocation(slug) {
        const url = slug.includes(window.location.origin) ? slug : `${window.location.origin}${slug}`;
        const location = {
            href: url,
            anchor: this.getAnchor(url),
            origin: this.getOrigin(url),
            params: this.getParams(url),
            pathname: this.getPathname(url),
            protocol: this.getProtocol(url)
        };
        return location;
    }
}
exports.Utils = Utils;
