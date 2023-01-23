import { AvailabeItem } from "../components/ItemFactory";

const css = {
	inject: (css: string) => {
		const style = document.createElement('style');
		style.innerHTML = css;
		document.head.appendChild(style);
	},
	merge: (css: string, items: Array<AvailabeItem>):string => {
		let style = css;
		for(const item of items){
			const itemCss = item.getCSS();
			if(itemCss) style += itemCss;
		}
		return style;
	}
}


export default css;