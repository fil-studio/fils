
export class EventsHandler extends EventTarget {
	constructor(parent?:EventsHandler) {
		super();
		if (parent) this.addParentListener(parent);
	}

	private addParentListener(parent: EventsHandler): void {
		parent.addEventListener('refresh', (e: CustomEvent) => {
			this.__refresh();
		})
	}

	protected addChildrenListener(children: EventsHandler): void {
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
	private __refresh(e?: CustomEvent): void {
		this.refresh(e);
		let event = new CustomEvent("refresh");
		this.dispatchEvent(event);
	}
	// Receiver
	refresh(e?:CustomEvent): void {}

	/**
	 * Bottom up events
	 */
	// Propagator
	protected __onChange(e?: CustomEvent): void {
		let event = new CustomEvent("onChange");
		this.onChange(e ? e : event);
		this.dispatchEvent(event);
	}
	// Receiver
	onChange(e?:CustomEvent): void {}

	// Propagator
	private __onChangeComplete(e?: CustomEvent<any>): void {
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