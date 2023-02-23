import { CSS } from './../styles';
// const styles = `__css__`;
let injected = false;
export const css = {
    inject: (css) => {
        if (injected)
            return;
        injected = true;
        const style = document.createElement('style');
        style.innerHTML = css;
        document.head.appendChild(style);
    }
};
export const UIInjectCSS = () => {
    console.log(CSS);
    css.inject(CSS);
};
