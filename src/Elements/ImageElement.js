import ElementHelpers from './ElementHelpers';
import Element from './Element';

/**
 * constructs an ImageElement instance
 * @class ImageElement
 * @classdesc ImageElement class, extending Element
 * @extends Element
 * @param {Object} options the options object to be merged with defaults
 * @type {ImageElement}
 * @public
 */
export default class ImageElement extends Element {
  constructor(options = {}) {
    super(options);
  }

  /**
   * Initialize default settings for ImageElement
   * @memberOf ImageElement
   * @method initDefaults
   * @instance
   * @override
   */
  initDefaults() {
    super.initDefaults({
      image: null,
    });
  }

  /**
   * sets or updates the scaling of the Element instance
   * @memberOf Element
   * @method setScale
   * @instance
   * @param {Object|Number} scaleOptions can be an object with x and y couple or only a number to be used for both
   * @return {Element} to make chainable the method
   */
  setScale(scaleOptions = null, force = false) {
    super.setScale(scaleOptions, force);

    this.image.inherit({
      scaleX: this.scaleX,
      scaleY: this.scaleY,
    });

    return this;
  }

  preDrawElements() {
    this.image = ElementHelpers.createImage(this.settings.image);
    this.imageBounds = this.image.getBounds();

    if(!this.settings.size.force) {
      this.settings.inherit({
        size: {
          width: this.imageBounds.width,
          height: this.imageBounds.height,
        },
      });
    }

    super.preDrawElements();
  }

  /**
   * draws all graphic elements of the ImageElement instance
   * @memberOf ImageElement
   * @method drawElements
   * @instance
   * @override
   */
  drawElements() {
    super.drawElements();

    this.addChild(this.image);
    ElementHelpers.align(this.image, null, 'center middle', true);
  }
}
