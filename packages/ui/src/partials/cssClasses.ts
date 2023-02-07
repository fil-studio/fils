export const CSS_UI = {
	baseClass: '_ui',
	wrapper: '_ui-wrapper',
	embed: '_ui-wrapper-embed',
	resizer: '_ui-wrapper-resizer',
	utility: {
		hidden: '_ui--hidden',
		grab: '_ui--grab',
		active: '_ui--active',
		loaded: '_ui--loaded',
	},
	row: {
		baseClass: '_ui-row',
		vertical: '_ui-row-vertical',
		hasButton: '_ui-row-has-button',
	},
	button: {
		baseClass: '_ui-button',
		hasIcon: '_ui-button-has-icon',
		icon: '_ui-button-icon',
	},
	section: {
		baseClass: '_ui-section',
		header: {
			baseClass: '_ui-section-header',
			hasIcon: '_ui-section-header-has-icon',
			icon: '_ui-section-header-icon',
		},
		content: '_ui-section-content',
		foldable: '_ui-section-foldable',
		folded: '_ui-section-folded',
		foldableElement: '_ui-section-foldable-element',
	},
	spacer: {
		baseClass: '_ui-spacer',
		hasLine: '_ui-spacer-has-line',
		size: {
			small: '_ui-spacer-small',
			medium: '_ui-spacer-medium',
			large: '_ui-spacer-large',
		}
	},
	panel: {
		baseClass: '_ui-panel',
		dropdown: '_ui-panel-dropdown',
		floating: '_ui-panel-floating',
		button: '_ui-panel-button',
		search: '_ui-panel-search',
		option: '_ui-panel-option',
	},

	// Custom items will be injected here
	items: [],
	getItemClasses: function(itemType) {
		return this.items.find(item => item.type === itemType);
	}
};