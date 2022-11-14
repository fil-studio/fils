import { MathUtils } from "@fils/math";
import { Section } from "./Section";
export var D;
(function (D) {
    D[D["TOP"] = 0] = "TOP";
    D[D["BOTTOM"] = 1] = "BOTTOM";
    D[D["LEFT"] = 2] = "LEFT";
    D[D["RIGHT"] = 3] = "RIGHT";
})(D || (D = {}));
const style = `
	[fil-scroller-parent],
	[fil-scroller-parent] body { 
		overscroll-behavior: none;
		height: 100vh;
		width: 100%;
		top: 0;
		left: 0;
		overflow: hidden;
		position: fixed;
		pointer-events: none;
	}
	[fil-scroller]{
		position: relative;
		width: 100%;
		height: 100vh;
		pointer-events: all;
		overflow-y: scroll;
		-webkit-overflow-scrolling: touch;
	}
	[fil-scroller-holder] {
		pointer-events: none;
	}
	[fil-scroller-container]{
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		overflow: hidden;
		pointer-events: none;
	}
	[fil-scroller-content] {
		position: relative;
		width: 100%;
		height: auto;
		will-change: transform;
		pointer-events: none;
	}
	[fil-scroller-content] * {
		pointer-events: none;
	}
	[fil-scroller-content] [fil-scroller-pointer] {
		pointer-events: all;
	}

	.scrolling [fil-scroller-content] [fil-scroller-pointer] {
		pointer-events: none;
	}

	[fil-scroller-section]{
		opacity: 0;
		visibility: hidden;
		will-change: transform;
	}
	[fil-scroller-section].fil-scroller-visible {
		opacity: 1;
		visibility: visible;
	}

	[fil-scroller="disabled"] [fil-scroller-container] {
		position: relative;
	}
`;
export default class Scroller {
    constructor() {
        this.html = {
            scroller: null,
            holder: null,
            container: null,
            content: null,
        };
        this.position = {
            current: 0,
            target: 0
        };
        this._direction = D.RIGHT;
        this.sections = [];
        this.loaded = false;
        this.paused = false;
        this.disabled = false;
        this.distance = 0;
        this._ease = 0.16;
        this.delta = 0;
        this.w = {
            w: 0,
            h: 0
        };
        this.html.scroller = document.querySelector('[fil-scroller]');
        if (!this.html.scroller) {
            console.warn('Fil Scroller - No `fil-scroller` element');
            return;
        }
        this.create();
    }
    pause() {
        this.paused = true;
    }
    resume() {
        this.paused = false;
    }
    disable() {
        if (this.disabled)
            return;
        this.disabled = true;
        for (const section of this.sections)
            section.disabled = this.disabled;
        this.html.scroller.setAttribute('fil-scroller', 'disabled');
    }
    enable() {
        if (!this.disabled)
            return;
        this.disabled = false;
        for (const section of this.sections)
            section.disabled = this.disabled;
        this.html.scroller.setAttribute('fil-scroller', '');
    }
    set direction(val) {
        if (val > D.RIGHT)
            val = 0;
        this._direction = val;
        for (const section of this.sections)
            section.direction = this.direction;
    }
    get direction() {
        return this._direction;
    }
    set ease(newEase) {
        this._ease = newEase;
    }
    get ease() {
        return this._ease;
    }
    addStyles() {
        document.documentElement.setAttribute('fil-scroller-parent', '');
        const _styles = document.createElement('style');
        _styles.textContent = style;
        document.head.append(_styles);
    }
    addHTML() {
        const dom = this.html.scroller;
        this.html.holder = dom.querySelector('[fil-scroller-holder]');
        this.html.container = dom.querySelector('[fil-scroller-container]');
        this.html.content = dom.querySelector('[fil-scroller-content]');
        this.pointerElements = dom.querySelectorAll('[fil-scroller-pointer]');
    }
    addSections() {
        const sections = this.html.content.querySelectorAll('[fil-scroller-section]');
        for (let i = 0, len = sections.length; i < len; i++) {
            const _section = sections[i];
            const id = _section.getAttribute('fil-scroller-section') ? _section.getAttribute('fil-scroller-section') : `section-${i}`;
            const section = new Section(id, _section, this.direction);
            this.sections.push(section);
        }
    }
    restore() {
        this.w.w = window.innerWidth;
        this.w.h = window.innerHeight;
        for (const section of this.sections) {
            section.w = this.w;
            section.restore();
        }
    }
    onResize() {
        this.restore();
    }
    addEventListeners() {
        window.addEventListener('resize', () => {
            this.onResize();
        });
        let timeout;
        const disableScroll = () => {
            if (timeout)
                clearTimeout(timeout);
            document.documentElement.classList.add('scrolling');
            timeout = setTimeout(() => {
                document.documentElement.classList.remove('scrolling');
            }, 20);
        };
        window.addEventListener('wheel', () => {
            disableScroll();
        });
        window.addEventListener('touchmove', () => {
            disableScroll();
        });
    }
    create() {
        this.addStyles();
        this.addHTML();
        this.addSections();
        this.addEventListeners();
        this.restore();
        if ('scrollRestoration' in history)
            history.scrollRestoration = 'manual';
        console.log('Fil Scroller - Loaded');
        this.loaded = true;
    }
    updateTarget() {
        this.position.target = this.html.scroller.scrollTop;
        if (this.paused)
            this.html.scroller.scrollTop = this.position.current;
    }
    updateCheckHeight() {
        this.distance = 0;
        const vertical = this.direction === D.TOP || this.direction === D.BOTTOM;
        for (let i = 0, len = this.sections.length; i < len; i++) {
            if (vertical)
                this.distance += this.sections[i].rect.height;
            else
                this.distance += this.sections[i].rect.width;
        }
        if (!vertical)
            this.distance += this.w.h - this.w.w;
        this.html.holder.style.height = `${this.distance}px`;
    }
    updateScrollValues() {
        const previous = this.position.current;
        if (this.disabled) {
            this.position.current = this.position.target;
        }
        else {
            this.position.current = MathUtils.lerp(this.position.current, this.position.target, this.ease);
        }
        const newDelta = (this.position.current - previous) * 0.01;
        this.delta = MathUtils.clamp(MathUtils.lerp(this.delta, newDelta, 0.1), -1, 1);
    }
    updateSections() {
        const scroll = this.position.current;
        let w = 0;
        for (let i = 0, len = this.sections.length; i < len; i++) {
            const section = this.sections[i];
            section.scroll = scroll;
            section.delta = this.delta;
            section.widthOffset = w;
            w += section.rect.width;
            section.update();
        }
    }
    update() {
        if (!this.loaded)
            return;
        this.updateTarget();
        this.updateCheckHeight();
        this.updateScrollValues();
        this.updateSections();
    }
}
