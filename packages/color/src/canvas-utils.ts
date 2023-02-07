import { hsbToHex } from "./utils";

export function drawColorWheel(canvas:HTMLCanvasElement) {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(canvas.width, canvas.height) / 2;

    const ctx = canvas.getContext('2d');

    for (let i = 0; i < 360; i++) {
        const rad = (i * Math.PI) / 180;
        const x = centerX + radius * Math.cos(rad);
        const y = centerY + radius * Math.sin(rad);

        ctx.beginPath();
        ctx.arc(x, y, 5, 0, 2 * Math.PI);
        ctx.fillStyle = `hsl(${i}, 100%, 50%)`;
        ctx.fill();
    }
}

export function drawColorPickerBar(canvas:HTMLCanvasElement, x?:number, y?:number, width?:number, height?:number) {
    const _x = x !== undefined ? x : 0;
    const _y = y !== undefined ? y : 0;
    const w = width !== undefined ? width : canvas.width;
    const h = height !== undefined ? height : canvas.height;
    const ctx = canvas.getContext('2d');

    for (let i = 0; i < w; i++) {
        // const rad = (i * Math.PI) / 180;
        const dx = _x + i;
        const angle = 360 * i / w;

        ctx.fillStyle = `hsl(${angle}, 100%, 50%)`;
        ctx.fillRect(dx, _y, 1, h);
    }
}

export function drawColorPickerSL(canvas:HTMLCanvasElement, angle:number, x?:number, y?:number, width?:number, height?:number) {
    const _x = x !== undefined ? x : 0;
    const _y = y !== undefined ? y : 0;
    const w = width !== undefined ? width : canvas.width;
    const h = height !== undefined ? height : canvas.height;
    const ctx = canvas.getContext('2d');

    const sw = w / 100;
    const sh = h / 100;

    for(let i=0; i<=100; i++) {
        for(let j=0; j<=100; j++) {
            const hex = hsbToHex({
                h: angle,
                s: j,
                b: i
            });
            ctx.fillStyle = hex;//`hsl(${angle}, ${j}%, ${100-i}%)`;
            ctx.fillRect(_x + w * j/100, _y + h - h * i/100, sw, sh);
        }
    }
}