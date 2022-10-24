
interface position {
	current: number,
	target: number
}

interface html {
	scroller: HTMLElement
}

const style = `
	body.scroller { 
		overscroll-behavior: none;
		height: 100vh;
		width: 100%;
		top: 0;
		left: 0;
		overflow: hidden;
		position: fixed;
	}

	[scroller]{
		position: relative;
		width: 100%;
		height: 100vh;
		overflow-y: auto;
	}
	[scroller-container]{
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		overflow: hidden;
	}
	[scroller-content] {
		position: relative;
		width: 100%;
		height: auto;
	}
`;

export default class Scroller {

	html:html;
	position:position;

	constructor(){

		this.position.current = 0;
		this.position.target = 0;

		this.html.scroller = document.querySelector('[scroller]');

		if(!this.html.scroller){
			console.warn('Fil Scroller - No Scroller element');
			return;
		}

		this.create();

	}

	addStyles(){

		const _styles = document.createElement('style');
		_styles.textContent = style;
		document.head.append(_styles);

	}

	create(){

		this.addStyles();

		document.body.classList.add('scroller');



	}
}