
export const style = `
	html {
		overscroll-behavior: none;
	}
	[fil-scroller]{
		overflow: hidden;
		width: 100%;
		height: 100%;
		position: absolute;
	}
	[fil-scroller][fil-scroller-native]{
		position: relative;
		height: auto;
		overflow: unset;
	}
	[fil-scroller-section]{
		opacity: 0;
		visibility: hidden;
		will-change: auto;
	}
	[fil-scroller-sticky]{
		position: sticky;
		top: 0;
	}
	[fil-scroller-section].fil-scroller__visible {
		opacity: 1;
		visibility: visible;
		will-change: transform, scroll-position;
	}
	[fil-scroller="disabled"] [fil-scroller-container] {
		position: relative;
	}

	.fil-scroller-disabled,
	.fil-scroller-disabled body {
		overflow: hidden !important;
	}

	[fil-scroller-section].fil-scroller__visible [fil-scroller-sticky] {
		will-change: transform;
	}

	[fil-scroller-section].fil-scroller__section-disabled {
		display: none;
	}
`;
