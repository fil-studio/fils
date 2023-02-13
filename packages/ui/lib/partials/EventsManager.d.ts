export declare class EventsManager {
    protected subscribers: {
        [key: string]: Array<any>;
    };
    on(event: string, callback: Function): void;
    emit(event: string, target?: EventsManager): void;
}
