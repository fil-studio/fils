import { MathUtils } from "@fils/math";

const style = `
[fil-virtual-scroller] {
    pointer-events: none;
    position: fixed;
    top: 0;
    right: 0px;
    height: 100vh;
    height: 100dvh;
    z-index: 9999;
    opacity: 0;
    transition: opacity 600ms ease-out;
}
[fil-virtual-scroller] div {
    border-radius: 4px;
    width: 50%;
    background-color: rgba(0,0,0,.5);
    position: absolute;
    left: 50%;
}
`;

const TIMEOUT = 1500;
let tid;

export class VirtualScrollBar {
    dom:HTMLDivElement;
    bar:HTMLDivElement;

    width:number;
    height:number;

    protected enabled:boolean = false;
    protected _progress:number = 0;

    constructor(contentHeight:number, scrollBarWidth:number=8) {
        this.dom = document.createElement('div');
        this.dom.setAttribute('fil-virtual-scroller', '');
        this.dom.style.width = `${scrollBarWidth*2}px`;

        this.bar = document.createElement('div');
        this.bar.style.borderRadius = `${scrollBarWidth/2}px`;
        this.dom.appendChild(this.bar);

        // inject styles
        const _styles = document.createElement('style');
		_styles.textContent = style;
		document.head.append(_styles);

        document.body.appendChild(this.dom);
    }

    remove(){
        this.dom.remove();
    }

    set contentHeight(height:number) {
        const dh = height - window.innerHeight;

        if(dh <  0) {
            this.enabled = false;
            this.dom.style.display = 'none';
            return;
        } else {
            this.dom.style.display = 'block';
        }

        const sdh = 1 - MathUtils.smoothstep(100, 1000, dh);
        const h = MathUtils.lerp(100, window.innerHeight/2, sdh);
        this.height = Math.round(h);

        this.bar.style.height = `${this.height}px`;
    }

    show() {
        this.dom.style.opacity = `1`;
        this.hide();
    }

    hide(force:boolean = false) {
        window.clearTimeout(tid);
        if(force) {
            this.dom.style.opacity = `0`;
            return;
        }
        tid = window.setTimeout(()=>{
            this.dom.style.opacity = `0`;
        }, TIMEOUT);
    }

    set progress(value:number) {
        if(value === this._progress) return;
        this._progress = value;
        this.updatePosition();
        this.show();
    }

    updatePosition() {
        const t = MathUtils.lerp(0, window.innerHeight-this.height, this._progress);
        this.bar.style.transform = `translateX(-50%) translateY(${t}px)`;
    }
}