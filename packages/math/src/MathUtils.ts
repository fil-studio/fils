/*
 * Math Utils
 */

export class MathUtils {
	static clamp(v:number, min:number, max:number):number {
		return Math.min(max, Math.max(min, v));
	}

	static lerp(v1:number, v2:number, alpha:number):number {
		return v1 + (v2 - v1) * alpha;
	}

	static mix(v1: number, v2:number, alpha:number):number {
		return MathUtils.lerp(v1, v2, alpha);
	}

	static smoothstep(min:number, max:number, val:number):number {
		if (val < min) return 0;
		if (val > max) return 1;
		return (val - min) / (max - min);
	}

	static step(thrsh:number, val:number):number {
		return val < thrsh ? 0 : 1;
	}

	static map(x:number, a1:number, a2:number, b1:number, b2:number):number{
		return ((x - a1) * (b2 - b1)) / (a2 - a1) + b1;
	}

	static truncateDecimals(value: number, decimalPlaces: number): number {
		const factor = 10 ** decimalPlaces;
		return Math.floor(value * factor) / factor;
	}


	static fract(n:number):number {
		return n % 1;
	}
}