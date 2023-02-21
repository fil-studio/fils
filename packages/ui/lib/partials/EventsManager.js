"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsManager = void 0;
class EventsManager {
    constructor() {
        this.subscribers = {};
    }
    on(event, callback) {
        if (!this.subscribers[event]) {
            this.subscribers[event] = [];
        }
        this.subscribers[event].push(callback);
    }
    emit(event, target) {
        if (this.subscribers[event]) {
            this.subscribers[event].forEach(subscriber => subscriber(target ? target : this));
        }
    }
}
exports.EventsManager = EventsManager;
