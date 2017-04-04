import ElementHelpers from './ElementHelpers';
import Element from './Element';

/**
 * constructs an SpriteElement instance
 * @class SpriteElement
 * @classdesc SpriteElement class, extending Element
 * @extends Element
 * @param {Object} options the options object to be merged with defaults
 * @type {SpriteElement}
 * @public
 */
export default class SpriteElement extends Element {
  constructor(options = {}) {
    super(options);
  }

  /**
   * Initialize default settings for SpriteElement
   * @memberOf SpriteElement
   * @method initDefaults
   * @instance
   * @override
   */
  initDefaults() {
    super.initDefaults({
      spritesheet: null,
    });
  }

  /**
   * sets the scale factor for SpriteElement instance
   * @memberOf SpriteElement
   * @method setScale
   * @instance
   * @param {Number|Object} scaleOptions can be a Number (it will be used for both scaleX and scaleY attributes)<br>
   *   can be an Object containing
   * @param {Number} scaleOptions.x the scaleX factor for the SpriteElement
   * @param {Number} scaleOptions.y the scaleY factor for the SpriteElement
   * @return {SpriteElement}
   */
  setScale(scaleOptions = {x: 1, y: 1}) {
    super.setScale(scaleOptions);

    this.sprite.inherit({
      scaleX: this.settings.scale.x,
      scaleY: this.settings.scale.y,
    });
  }

  /**
   * draws all graphic elements of the SpriteElement instance
   * @memberOf SpriteElement
   * @method drawElements
   * @instance
   * @override
   */
  drawElements() {
    this.sprite = ElementHelpers.createSprite(this.settings.spritesheet);
    this.spriteBounds = this.sprite.getBounds();

    if(!this.settings.size.force) {
      this.settings.inherit({
        size: {
          width: this.spriteBounds.width,
          height: this.spriteBounds.height,
        },
      });
    } else {
      ElementHelpers.align(this.sprite, null, 'center middle', true);
    }

    if(!this.settings.debug) {
      super.drawElements();
    }

    this.addChild(this.sprite);

    if(!!this.settings.debug) {
      super.drawElements();
    }
  }

  /**
   * animates the sprite
   * @memberOf SpriteElement
   * @method animate
   * @instance
   * @param {Object} options the animate options including<br>
   * @param {String} options.animationName the animation name in the spritesheet json to start
   * @param {Function}
   * @return {SpriteElement}
   */
  animate(options = null) {
    if(Object.isObject(options)) {
      if(!!options.animationName) {
        if(!!options.onAnimationEnd) {
          if(Function.isFunction(options.onAnimationEnd)) {
            this.sprite.on('animationend', options.onAnimationEnd);
          }
        }

        this.sprite.gotoAndPlay(options.animationName);
      }
    }

    return this;
  }
}
