

import { CSS } from './../styles';

let injected = false;

export const css = {
	inject: (css: string) => {
		if(injected) return;
		injected = true;
		const style = document.createElement('style');
		style.innerHTML = css;
		document.head.appendChild(style);
	}
}

export const UIInjectCSS = () => {
	css.inject(CSS);
}