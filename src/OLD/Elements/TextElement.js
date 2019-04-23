import Draw from 'create-es6-js';
import Helpers from './Helpers';
import Element from './Element';

/**
 * constructs a TextElement instance
 * @class TextElement
 * @classdesc extends Element Class adding an EaselJS Text instance inside of it
 * @extend Element
 * @public
 * @param {Object} options the options to be merged with defaults settings
 * @type {TextElement}
 */
export default class TextElement extends Element {
  /**
   * initializes defaults settings for TextElement
   * @memberOf TextElement
   * @method initDefaults
   * @instance
   * @override
   */
  initDefaults(defaults) {
    super.initDefaults({
      text: 'Text Element',
      font: '50px Arial',
      color: '#000',
      padding: false,
      lineHeight: false,
      maxWidth: false,
      shadow: false,
      outline: false,
      textAlign: 'center',
    }.inherit(defaults));
  }

  /**
   * initializes the settings object for the TextElement instance
   * @memberOf TextElement
   * @method initSettings
   * @instance
   * @override
   * @param {Object} options the options to be merged with the defaults settings
   */
  initSettings(options) {
    super.initSettings(options);

    if (!this.settings.lineHeight) {
      this.settings.lineHeight = Number.parse(this.settings.font);
    } else {
      this.settings.lineHeight = Number.parse(this.settings.lineHeight);
    }
  }

  /**
   * computes the bounds based on specified text parameter
   * @memberOf TextElement
   * @method setComputedBounds
   * @instance
   */
  setComputedBounds(boundsOptions = null, force = false) {
    this.textBounds = (!!this.settings.outline ? this.textOutline.getBounds() : this.text.getBounds());

    if (!!this.settings.padding) {
      const paddingSettings = {
        horizontal: 0,
        vertical: 0,
      };

      if (Number.isNumber(this.settings.padding) || Array.isArray(this.settings.padding)) {
        let paddingArray = this.settings.padding;

        if (Number.isNumber(this.settings.padding)) {
          paddingArray = [this.settings.padding, this.settings.padding];
        }

        this.settings.padding = {
          horizontal: paddingArray[0],
          vertical: paddingArray[1],
        };
      }

      if (this.settings.padding.horizontal > 0) {
        this.textBounds.inherit({
          width: this.textBounds.width + this.settings.padding.horizontal,
        });
      }

      if (this.settings.padding.vertical > 0) {
        this.textBounds.inherit({
          height: this.textBounds.height + this.settings.padding.vertical,
        });
      }
    }

    this.settings.inherit({
      size: {
        width: this.textBounds.width,
        height: this.textBounds.height,
      },
    });

    super.setComputedBounds(this.settings.size);
  }

  preDrawElement() {
    if (!!this.settings.outline) {
      this.textOutline = Helpers.createText(this.settings.text, this.settings.font, this.settings.outline.color).inherit({
        textAlign: this.settings.textAlign,
        textBaseline: 'middle',
        lineHeight: this.settings.lineHeight || null,
        lineWidth: this.settings.maxWidth || null,
        outline: this.settings.outline.size,
        shadow: !!this.settings.shadow ? new Draw.Shadow(...this.settings.shadow) : null,
      });
    }

    this.text = Helpers.createText(this.settings.text, this.settings.font, this.settings.color).inherit({
      textAlign: this.settings.textAlign,
      textBaseline: 'middle',
      lineHeight: this.settings.lineHeight || null,
      lineWidth: this.settings.maxWidth || null,
      shadow: !!this.settings.shadow ? new Draw.Shadow(...this.settings.shadow) : null,
    });

    super.preDrawElement();
  }

  setScale(scaleOptions = null, force = false) {
    super.setScale(scaleOptions, force);

    if (!!this.settings.outline) {
      this.textOutline.inherit({
        scaleX: this.settings.scale.x,
        scaleY: this.settings.scale.y,
      });
    }

    this.text.inherit({
      scaleX: this.settings.scale.x,
      scaleY: this.settings.scale.y,
    });
  }
  /**
   * draws all graphic elements of the TextElement instance
   * @memberOf TextElement
   * @method drawElements
   * @instance
   * @override
   */
  drawElements() {
    super.drawElements();

    if (!!this.settings.outline) {
      this.addChild(this.textOutline);
    }

    this.addChild(this.text);
  }

  alignTextObject(text = null, mode = 'center') {
    if (!!text) {
      text.inherit({
        textAlign: mode,
      });

      if (mode === 'center') {
        text.inherit({
          x: text.getBounds().width * 0.5 * this.settings.scale.x,
        });
      } else if (mode === 'right') {
        text.inherit({
          x: text.getBounds().width * this.settings.scale.x,
        });
      }

      text.inherit({
        y: this.settings.lineHeight * 0.5 * this.settings.scale.y,
      });

      if (!!this.settings.padding) {
        text.inherit({
          x: text.x + this.settings.padding.horizontal * 0.5 * this.settings.scale.x,
          y: text.y + this.settings.padding.vertical * 0.5 * this.settings.scale.y,
        });
      }
    }
  }

  alignText(mode = 'center') {
    if (!!this.settings.outline) {
      this.alignTextObject(this.textOutline, mode);
    }

    this.alignTextObject(this.text, mode);
  }

  postDrawElement() {
    super.postDrawElement();

    this.alignText(this.settings.textAlign);
  }

  /**
   * gets the actual text content
   * @memberOf TextElement
   * @method getText
   * @instance
   * @return {String}
   */
  getText() {
    return this.text.text;
  }

  /**
   * sets the text content for the TextElement instance, considering also the textOutline
   * @memberOf TextElement
   * @method setText
   * @instance
   * @param {String} text the text content
   * @return {TextElement} to make chainable the method
   */
  setText(text) {
    if (!!this.settings.outline) {
      this.textOutline.text = text;
    }

    this.text.text = text;

    return this;
  }
}
