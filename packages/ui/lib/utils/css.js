const css = {
  inject: (css2) => {
    const style = document.createElement("style");
    style.innerHTML = css2;
    document.head.appendChild(style);
  }
  // merge: (css: string, items: Array<AvailableItem>):string => {
  // 	let style = css;
  // 	for(const item of items){
  // 		const itemCss = item.getCSS();
  // 		if(itemCss) style += itemCss;
  // 	}
  // 	return style;
  // }
};
export default css;
