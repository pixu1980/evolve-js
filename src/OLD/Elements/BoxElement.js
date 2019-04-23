import Element from './Element';
import LabelElement from './LabelElement';

/**
 * constructs a BoxElement instance
 * @class BoxElement
 * @classdesc Box Element class, useful to create boxes with a title options (LabelElement)
 * @extends Element
 * @param {Object} options the options object to be merged with defaults
 * @type {BoxElement}
 * @public
 */
export default class BoxElement extends Element {
  /**
   * Initialize default settings for Box Element
   * @memberOf BoxElement
   * @method initDefaults
   * @instance
   * @override
   */
  initDefaults() {
    super.initDefaults({
      title: { // options for a LabelElement
        text: 'Text Element',
        font: '50px Arial',
        color: '#000',
        padding: 10,
        lineHeight: 50,
        maxWidth: false,
        shadow: false,
        outline: false,
        stroke: false,
        align: 'center top',
      },
      content: { // options for a Element
        fill: 'transparent',
        align: 'center bottom',
      },
    });
  }

  /**
   * drawElements method implementation
   * @memberOf BoxElement
   * @method drawElements
   * @instance
   * @inheritdoc
   * @override
   */
  drawElements() {
    if(!!this.settings.title) {
      this.titleElement = new LabelElement(this.settings.title.inherit({
        parent: this,
        minWidth: this.settings.size.width,
      }));
    }

    this.contentElement = new Element(this.settings.content.inherit({
      parent: this,
      size: {
        width: this.settings.size.width,
        height: this.settings.size.height - (!!this.settings.title ? this.titleElement.getComputedBounds().height : 0),
      },
    }));
  }

  /**
   * gets the title LabelElement instance
   * @memberOf BoxElement
   * @method getTitleElement
   * @instance
   * @return {LabelElement} the instance used to draw the title
   */
  getTitleElement() {
    return this.titleElement;
  }

  /**
   * gets the content Element instance
   * @memberOf BoxElement
   * @method getContentElement
   * @instance
   * @return {Element} the instance used to draw the content element
   */
  getContentElement() {
    return this.contentElement;
  }
}
