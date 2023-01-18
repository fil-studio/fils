
export interface EventsHandler {
	addListeners(children: EventsListener): void;
	onChange(): void;
	onChangeComplete(): void;
}

export class EventsListener extends EventTarget implements EventsHandler {
	addListeners(children: EventsListener): void {
		console.log('EventsListener - addListeners', children);

		children.addEventListener('onChange', (e: CustomEvent) => {
			this.onChange(e);
		})
		children.addEventListener('onChangeComplete', (e: CustomEvent) => {
			this.onChangeComplete(e);
		})
	}

	onChange(e?:CustomEvent): void {
		const detail = e ? e.detail : {
			initiator: this
		};

		let event = new CustomEvent("onChange", { detail });
		this.dispatchEvent(event);
	}

	onChangeComplete(e?:CustomEvent): void {
		const detail = e ? e.detail : {
			initiator: this
		};
		let event = new CustomEvent("onChangeComplete", { detail });
		this.dispatchEvent(event);
	}
}