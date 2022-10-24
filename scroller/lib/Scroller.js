import { MathUtils } from '@jocabola/math';
const style = `
	body.fil-scroller { 
		overscroll-behavior: none;
		height: 100vh;
		width: 100%;
		top: 0;
		left: 0;
		overflow: hidden;
		position: fixed;
	}
	[fil-scroller]{
		position: relative;
		width: 100%;
		height: 100vh;
		overflow-y: auto;
	}
	[fil-scroller-container]{
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		overflow: hidden;
	}
	[fil-scroller-content] {
		position: relative;
		width: 100%;
		height: auto;
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
        this.paused = true;
        this.disabled = false;
        this.height = 0;
        this.ease = 0.8;
        this.position.current = 0;
        this.position.target = 0;
        this.html.scroller = document.querySelector('[fil-scroller]');
        if (!this.html.scroller) {
            console.warn('Fil Scroller - No `fil-scroller` element');
            return;
        }
        this.create();
        this.resume();
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
        this.html.content.style.transform = `translate3d(0, 0, 0)`;
        this.html.scroller.classList.add('disabled');
    }
    enable() {
        if (!this.disabled)
            return;
        this.disabled = false;
        this.html.scroller.classList.remove('disabled');
    }
    addStyles() {
        document.body.classList.add('fil-scroller');
        const _styles = document.createElement('style');
        _styles.textContent = style;
        document.head.append(_styles);
    }
    create() {
        this.addStyles();
        if ('scrollRestoration' in history)
            history.scrollRestoration = 'manual';
    }
    updateCheckHeight() {
        if (this.height === this.html.content.offsetHeight)
            return;
        this.height = this.html.content.offsetHeight;
        this.html.holder.style.height = `${this.height}px`;
    }
    updateScrollValues() {
        if (this.disabled) {
            this.position.current = this.position.target;
            return;
        }
        this.position.current = MathUtils.lerp(this.position.current, this.position.target, this.ease);
        this.html.content.style.transform = `translate3d(0, ${-this.position.current}px, 0)`;
    }
    update() {
        this.position.target = this.html.scroller.scrollTop;
        if (this.paused)
            this.html.scroller.scrollTop = this.position.current;
        this.updateCheckHeight();
        this.updateScrollValues();
    }
}
