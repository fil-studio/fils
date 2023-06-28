import { debounce } from "@fils/utils";
export interface UIEventListener {
	type: string,
	target: HTMLElement | Window;
	callback: EventListenerOrEventListenerObject
}
export class EventsManager {
	protected subscribers: Object = {};
	listeners:UIEventListener[] = [];

	addEventListeners(): void {}
	removeEventListeners():void {
		while(this.listeners.length > 0) {
			this.removeEventListener(this.listeners[0]);
		}
	}
	addEventListener(event:UIEventListener){
		if(this.listeners.indexOf(event) > -1) return;
		this.listeners.push(event);
		event.target.addEventListener(event.type, event.callback);
	}
	removeEventListener(event:UIEventListener){
		if(this.listeners.indexOf(event) === -1) return;
		this.listeners.splice(this.listeners.indexOf(event), 1);
		event.target.removeEventListener(event.type, event.callback);
	}

	/**
	* @typedef {'change'} EventType
	* @typedef {'refresh'} EventType
	*
	* @description Available event types:
	* - change: Triggered when the value of the item or one of its children changes.
	* - refresh: Triggered right before the UI is refreshed.
	*
	* @param {EventType} eventType - The type of event to listen for.
	* @param {Function} callback - The callback function to call when the event occurs.
	* @returns {void}
	*/
	on(event:string, callback: Function) {
		if (!this.subscribers[event]) {
			this.subscribers[event] = [];
			const completeEvent = event + 'Complete';
			this.subscribers[completeEvent] = [];
			this.subscribers[event].debounced = debounce(() => {
				this.emit(completeEvent);
			}, 100);
		}
		this.subscribers[event].push(callback);
	}
	emit(event:string, target?:EventsManager) {

		if (this.subscribers[event]) {
			this.subscribers[event].forEach(subscriber => subscriber(target ? target : this));

			if (this.subscribers[event].debounced) {
				this.subscribers[event].debounced();
			}
		}
	}

}