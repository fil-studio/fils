import { MathUtils } from '../../math/src/MathUtils';
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
        this.sections = [];
        this.loaded = false;
        this.paused = false;
        this.disabled = false;
        this.height = 0;
        this.wh = 0;
        this._ease = 0.1;
        this._delta = 0;
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
        this.html.scroller.setAttribute('fil-scroller', 'disabled');
    }
    enable() {
        if (!this.disabled)
            return;
        this.disabled = false;
        this.html.scroller.setAttribute('fil-scroller', '');
    }
    set ease(newEase) {
        this._ease = newEase;
    }
    get ease() {
        return this._ease;
    }
    get delta() {
        return this._delta;
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
            const section = {
                id,
                dom: _section,
                rect: null,
                visible: false,
                progress: 0,
                animationIn: () => {
                },
                animationOut: () => {
                }
            };
            this.sections.push(section);
        }
    }
    restore() {
        for (const section of this.sections) {
            section.dom.style.transform = 'none';
            section.visible = true;
            section.rect = section.dom.getBoundingClientRect();
        }
        this.wh = window.innerHeight;
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
        this.height = 0;
        for (let i = 0, len = this.sections.length; i < len; i++)
            this.height += this.sections[i].rect.height;
        this.html.holder.style.height = `${this.height}px`;
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
        this._delta = MathUtils.clamp(MathUtils.lerp(this._delta, newDelta, 0.1), -1, 1);
    }
    updateSections() {
        const scroll = this.position.current;
        for (let i = 0, len = this.sections.length; i < len; i++) {
            const section = this.sections[i];
            const top = section.rect.top;
            const bottom = section.rect.top + section.rect.height;
            if (scroll + this.wh >= top && scroll <= bottom) {
                if (!section.visible)
                    section.animationIn();
                section.visible = true;
                section.dom.classList.add('fil-scroller-visible');
                section.dom.style.setProperty('--fil-scroller-delta', `${this._delta}`);
                section.progress = MathUtils.map(scroll, top - this.wh, bottom, 0, 1);
                section.dom.style.setProperty('--fil-scroller-progress', `${section.progress}`);
                if (!this.disabled)
                    section.dom.style.transform = `translateY(${-scroll}px)`;
                continue;
            }
            if (!section.visible)
                continue;
            section.animationOut();
            section.visible = false;
            section.dom.classList.remove('fil-scroller-visible');
            section.dom.style.setProperty('--fil-scroller-delta', '0');
            section.progress = 0;
            if (!this.disabled)
                section.dom.style.transform = `translateY(${-this.wh}px)`;
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