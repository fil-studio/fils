
interface EventsHandlerInterface {
	addParentListener(parent: EventsHandler): void;
	addChildrenListener(children: EventsHandler): void;
	__onChange(e?: CustomEvent): void;
	__onChangeComplete(e?: CustomEvent): void;
	onChange(e?: CustomEvent): void;
	onChangeComplete(e?: CustomEvent): void;
}

export class EventsHandler extends EventTarget implements EventsHandlerInterface {
	parent: EventsHandler;

	constructor({parent}:{parent?: EventsHandler} = {}) {
		super();
		this.parent = parent;
		if(this.parent) this.addParentListener(this.parent);
	}

	addParentListener(parent: EventsHandler): void {
		parent.addEventListener('refresh', (e: CustomEvent) => {
			this.__refresh();
		})
	}

	addChildrenListener(children: EventsHandler): void {
		children.addEventListener('onChange', (e: CustomEvent) => {
			this.__onChange(e);
		})
		children.addEventListener('onChangeComplete', (e: CustomEvent) => {
			this.__onChangeComplete(e);
		})
	}

	/**
	 * Top down events
	 */
	// Propagator
	__refresh(e?: CustomEvent): void {
		this.refresh(e);
		const detail = e ? e.detail : {
			initiator: this
		};
		let event = new CustomEvent("refresh", { detail });
		this.dispatchEvent(event);
	}
	// Receiver
	refresh(e?:CustomEvent): void {}


	/**
	 * Bottom up events
	 */
	// Propagator
	__onChange(e?: CustomEvent): void {
		this.onChange(e);

		const detail = e ? e.detail : {
			initiator: this
		};
		let event = new CustomEvent("onChange", { detail });
		this.dispatchEvent(event);
	}
	// Receiver
	onChange(e?:CustomEvent): void {}

	// Propagator
	__onChangeComplete(e?: CustomEvent<any>): void {
		this.onChangeComplete(e);

		const detail = e ? e.detail : {
			initiator: this
		};
		let event = new CustomEvent("onChangeComplete", { detail });
		this.dispatchEvent(event);
	}
	// Receiver
	onChangeComplete(e?:CustomEvent): void {}
}