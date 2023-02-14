export declare class EventsManager {
    protected subscribers: Object;
    on(event: string, callback: Function): void;
    emit(event: string, target?: EventsManager): void;
}
