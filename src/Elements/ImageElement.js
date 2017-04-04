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
   * sets the scale factor for ImageElement instance
   * @memberOf ImageElement
   * @method setScale
   * @instance
   * @param {Number|Object} scaleOptions can be a Number (it will be used for both scaleX and scaleY attributes)<br>
   *   can be an Object containing
   * @param {Number} scaleOptions.x the scaleX factor for the ImageElement
   * @param {Number} scaleOptions.y the scaleY factor for the ImageElement
   * @return {ImageElement}
   */
  setScale(scaleOptions = {x: 1, y: 1}) {
    super.setScale(scaleOptions);

    this.image.inherit({
      scaleX: this.settings.scale.x,
      scaleY: this.settings.scale.y,
    });

    return this;
  }

  /**
   * draws all graphic elements of the ImageElement instance
   * @memberOf ImageElement
   * @method drawElements
   * @instance
   * @override
   */
  drawElements() {
    this.image = ElementHelpers.createImage(this.settings.image);
    this.imageBounds = this.image.getBounds();

    if(!this.settings.size.force) {
      this.settings.inherit({
        size: {
          width: this.imageBounds.width,
          height: this.imageBounds.height,
        },
      });
    } else {
      ElementHelpers.align(this.image, null, 'center middle', true);
    }

    if(!this.settings.debug) {
      super.drawElements();
    }

    this.addChild(this.image);

    if(!!this.settings.debug) {
      super.drawElements();
    }
  }
}
