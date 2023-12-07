import { D } from "../Scroller";
import { VirtualScrollBar } from "../VirtualScrollBar";

export type FilScrollerParameters = {
	loop?: boolean;
	useNative?: boolean;
	easing?: number;
	direction?: D;
	showVirtualScrollBar?: boolean;
	customScrollBar?: VirtualScrollBar;
	touchForce?: number;
	wheelForce?: number;
	customContainer?: HTMLElement;
	customContent?: HTMLElement;
	allowVerticalScrolling?: boolean;
	allowHorizontalScrolling?: boolean;
}

export const DEFAULT_EASING = 0.16;