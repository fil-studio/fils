
import Scroller from '../../../../scroller/src/Scroller';

export class ScrollerDemo {
	scroller:Scroller;
	constructor(){
		this.scroller = new Scroller();
	}

	update(){
		this.scroller.update();
	}
}