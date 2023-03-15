export const CSS_UI = {
    baseClass: '_ui',
    wrapper: '_ui-wrapper',
    parent: '_ui-wrapper-has-parent',
    resizer: '_ui-wrapper-resizer',
    item: '_ui-item',
    content: '_ui-item-content',
    utility: {
        hidden: '_ui--hidden',
        grab: '_ui--grab',
        active: '_ui--active',
        loaded: '_ui--loaded',
        error: '_ui--error',
    },
    row: {
        baseClass: '_ui-row',
        vertical: '_ui-row-vertical',
        hasButton: '_ui-row-has-button',
        custom: '_ui-row-custom',
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
            chevron: '_ui-section-header-chevron',
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
    },
    select: {
        panel: '_ui-panel-select',
        optionNone: '_ui-panel-select-option-none',
        option: '_ui-panel-select-option',
        optionButton: '_ui-panel-select-option-button',
    },
    info: {
        baseClass: '_ui-info',
        text: '_ui-info-text',
    }
};
