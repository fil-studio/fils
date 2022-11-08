
import Scroller from '../../../../scroller/src/Scroller';

export class ScrollerDemo {
	scroller:Scroller;
	constructor(){
		this.scroller = new Scroller();
		this.scroller.ease = 0.16;
	}

	update(){
		this.scroller.update();
	}
}