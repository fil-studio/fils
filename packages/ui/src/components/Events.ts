
export interface EventsHandler {
	addListener(children: EventsListener): void;
	__onChange(e?: CustomEvent): void;
	__onChangeComplete(e?: CustomEvent): void;
	onChange(e?: CustomEvent): void;
	onChangeComplete(e?: CustomEvent): void;
}

export class EventsListener extends EventTarget implements EventsHandler {
	addListener(children: EventsListener): void {
		children.addEventListener('onChange', (e: CustomEvent) => {
			this.__onChange(e);
		})
		children.addEventListener('onChangeComplete', (e: CustomEvent) => {
			this.__onChangeComplete(e);
		})
	}

	// Propagator
	__onChange(e?: CustomEvent<any>): void {
		const detail = e ? e.detail : {
			initiator: this
		};
		let event = new CustomEvent("onChange", { detail });
		this.dispatchEvent(event);
		this.onChange(e);
	}
	// Receiver
	onChange(e?:CustomEvent): void {}

	// Propagator
	__onChangeComplete(e?: CustomEvent<any>): void {
		const detail = e ? e.detail : {
			initiator: this
		};
		let event = new CustomEvent("onChangeComplete", { detail });
		this.dispatchEvent(event);
		this.onChangeComplete(e);
	}
	// Receiver
	onChangeComplete(e?:CustomEvent): void {}
}