export class Timer {
    speed:number = 1;
    running:boolean = false;
    paused:boolean = false;

    protected delta:number = 0;
    protected time:number = 0;

    protected lastTime:number = 0;

    get currentTime():number {
        return this.time;
    }

    get currentDelta():number {
        return this.delta;
    }

    constructor(autoStart:boolean=false) {
        if(autoStart) {
            this.start();
        }
    }

    start() {
        if(this.running) {
            console.warn("Timer already running! Ignoring...");
            return;
        }
        this.lastTime = performance.now();
        this.running = true;
    }

    stop() {
        if(!this.running) {
            console.warn("Timer already stopped! Ignoring...");
            return;
        }
        this.running = false;
        this.time = 0;
        this.delta = 0;
    }

    pause() {
        if(!this.running) return;
        if(this.paused) return;
        this.paused = true;
    }

    resume() {
        if(!this.running) return;
        if(!this.paused) return;
        this.paused = false;
        this.lastTime = performance.now();
    }

    tick() {
        if(!this.running || this.paused) return;
        const t = performance.now();
        const dt = (t-this.lastTime) * this.speed * .001; // in seconds
        this.lastTime = t;
        this.time += dt;
        this.delta = dt;
    }
}