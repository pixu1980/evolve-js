import LabelElement from './LabelElement';

/**
 * constructs a ButtonElement instance
 * @class ButtonElement
 * @classdesc Button Element class, extending LabelElement with a click event handler
 * @extends LabelElement
 * @param {Object} options the options object to be merged with defaults
 * @type {ButtonElement}
 * @public
 */
export default class ButtonElement extends LabelElement {
  constructor(options = {}) {
    super(options);
  }

  /**
   * Initialize default settings for Button Element
   * @memberOf ButtonElement
   * @method initDefaults
   * @instance
   * @override
   */
  initDefaults(defaults) {
    super.initDefaults({
      text: 'Button',
      stroke: {
        size: 4,
        radius: 5,
        color: '#fff',
      },
      events: {
        click: () => {
        },
      },
    }.inherit(defaults));
  }

  /**
   * drawElements method implementation
   * @memberOf BoxElement
   * @method drawElements
   * @instance
   * @override
   */
  drawElements() {
    super.drawElements();
  }
}
