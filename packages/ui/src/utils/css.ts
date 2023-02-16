
const styles = `__css__`;
// import styles from '../bundle/bundle.css';

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

export const UIInjectCSS = (extraStyles:Array<string>) => {

	let finalStyles = styles;
	for(let i = 0; i < extraStyles.length; i++){
		finalStyles += extraStyles[i];
	}

	css.inject(finalStyles);
}

