
export class EventsManager {
	protected subscribers: Object = {};

	/**
	* @typedef {'change'} EventType
	*
	* @description Available event types:
	* - change: Triggered when the value of the item or one of its children changes.
	*
	* @param {EventType} eventType - The type of event to listen for.
	* @param {Function} callback - The callback function to call when the event occurs.
	* @returns {void}
	*/
	on(event:string, callback: Function) {
		if (!this.subscribers[event]) {
			this.subscribers[event] = [];
		}
		this.subscribers[event].push(callback);
	}

	emit(event:string, target?:EventsManager) {
		if (this.subscribers[event]) {
			this.subscribers[event].forEach(subscriber => subscriber(target ? target : this));
		}
	}

}