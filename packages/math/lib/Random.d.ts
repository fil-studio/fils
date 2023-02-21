export declare class Random {
    constructor(seed?: number);
    static seed(seed: number): void;
    static random(): number;
    static randi(min?: number, max?: number): number;
    static randf(min?: number, max?: number): number;
    static randc(): number;
    /**
     * returns an array of shuffled indexes
     */
    static randarrind(arr: Array<any>): Array<number>;
    /**
    * returns a shuffld array
    */
    static randarr(arr: Array<any>): Array<any>;
}
