
export class EventsManager {
	subscribers: Array<any> = [];

	on(event, callback) {
		if (!this.subscribers[event]) {
			this.subscribers[event] = [];
		}
		this.subscribers[event].push(callback);
	}

	emit(event) {
		if (this.subscribers[event]) {
			this.subscribers[event].forEach(subscriber => subscriber());
		}
	}

}