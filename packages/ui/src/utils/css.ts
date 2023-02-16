
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
		console.log('Fil UI CSS Injected');
	}
}

export const UIInjectCSS = () => {

	css.inject(styles);
}

