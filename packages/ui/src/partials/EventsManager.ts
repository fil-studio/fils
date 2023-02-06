
export class EventsManager {
	protected subscribers: Object = {};

	constructor() {

	}

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