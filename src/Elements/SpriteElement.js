import Helpers from './Helpers';
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
   * sets or updates the scaling of the Element instance
   * @memberOf Element
   * @method setScale
   * @instance
   * @param {Object|Number} scaleOptions can be an object with x and y couple or only a number to be used for both
   * @return {Element} to make chainable the method
   */
  setScale(scaleOptions = null, force = false) {
    super.setScale(scaleOptions, force);

    this.sprite.inherit({
      scaleX: this.scaleX,
      scaleY: this.scaleY,
    });

    return this;
  }

  preDrawElement() {
    this.sprite = Helpers.createSprite(this.settings.spritesheet);
    this.sprite.setBounds(0, 0, this.sprite.getBounds().width, this.sprite.getBounds().height);
    this.spriteBounds = this.sprite.getBounds();

    this.sprite.inherit({
      regX: this.spriteBounds.width * 0.5,
      regY: this.spriteBounds.height * 0.5,
    });

    if (!this.settings.size.force) {
      this.settings.inherit({
        size: {
          width: this.spriteBounds.width,
          height: this.spriteBounds.height,
        },
      });
    }

    super.preDrawElement();
  }
  /**
   * draws all graphic elements of the SpriteElement instance
   * @memberOf SpriteElement
   * @method drawElements
   * @instance
   * @override
   */
  drawElements() {
    super.drawElements();

    this.addChild(this.sprite);
    Helpers.align(this.sprite, null, 'center middle', false);
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
    if (Object.isObject(options)) {
      if (!!options.animationName) {
        if (!!options.onAnimationEnd) {
          if (Function.isFunction(options.onAnimationEnd)) {
            this.sprite.on('animationend', options.onAnimationEnd);
          }
        }

        this.sprite.gotoAndPlay(options.animationName);
      }
    }

    return this;
  }
}
