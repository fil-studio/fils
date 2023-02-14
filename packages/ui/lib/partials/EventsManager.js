export class EventsManager{constructor(){this.subscribers={}}on(s,i){this.subscribers[s]||(this.subscribers[s]=[]),this.subscribers[s].push(i)}emit(s,i){this.subscribers[s]&&this.subscribers[s].forEach(r=>r(i||this))}}
//# sourceMappingURL=EventsManager.js.map
