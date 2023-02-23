import { drawColorPickerBar, drawColorPickerSL, HSBColor, hsbToHex, hsbToRgb, hsbToString, rgbToString } from '@fils/color';

export class App {

    constructor() {
        const width = 400;

        const dom = document.createElement('div');
        dom.className = 'color-view';
        document.body.appendChild(dom);

        const info = document.createElement('div');
        info.className = 'color-info';
        document.body.appendChild(info);

        const canvas1 = document.createElement('canvas');
        canvas1.width = canvas1.height = width;
        dom.appendChild(canvas1);

        const canvas2 = document.createElement('canvas');
        canvas2.width = width;
        canvas2.height = 40;
        dom.appendChild(canvas2);

        let angle = 180;
        const color:HSBColor = {
            h: angle,
            s: 50,
            b: 50
        }

        // drawColorPickerSL(canvas1, angle);
        drawColorPickerBar(canvas2);

        const updateColorInfo = () => {
            color.h = angle;
            drawColorPickerSL(canvas1, angle);
            info.innerText = `Hex: ${hsbToHex(color)}
RGB: ${rgbToString(hsbToRgb(color))}
HSB: ${hsbToString(color)}`;
        }

        const update = (x) => {
            angle = 360 * x/width;
            dragger.style.left = `${x}px`;
            updateColorInfo();
        }

        const update2 = (x, y) => {
            color.s = Math.round(100 * x / width);
            color.b = 100 - Math.round(100 * y / width);
            target.style.left = `${x}px`;
            target.style.top = `${y}px`;
            updateColorInfo();
        }

        updateColorInfo();

        const dragger = document.createElement('div');
        dragger.className = 'bar-handle';
        dom.appendChild(dragger);

        const target = document.createElement('div');
        target.className = 'c-target';
        dom.appendChild(target);

        let dragging = false, dragging2 = false;

        canvas2.addEventListener('mousedown', (event)=>{
            update(event.offsetX);
            dragging = true;
        });

        canvas2.addEventListener('mousemove', (event)=>{
            if(!dragging) return;
            update(event.offsetX);
        });

        canvas1.addEventListener('mousedown', (event)=>{
            update2(event.offsetX, event.offsetY);
            dragging2 = true;
        });

        canvas1.addEventListener('mousemove', (event)=>{
            if(!dragging2) return;
            update2(event.offsetX, event.offsetY);
        });

        window.addEventListener('mouseup', () => {
            dragging = false;
            dragging2 = false;
        });

        // console.log(HSBToRGB(359, 10, 100));
    }
}