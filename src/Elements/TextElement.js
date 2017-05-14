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
      padding: 0,
      lineHeight: false,
      maxWidth: false,
      shadow: false,
      outline: false,
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

    if(!this.settings.lineHeight) {
      this.settings.lineHeight = Number.parse(this.settings.font);
    }
  }

  /**
   * computes the bounds based on specified text parameter
   * @memberOf TextElement
   * @method computeBounds
   * @instance
   */
  computeBounds() {
    this.textBounds = (!!this.settings.outline ? this.textOutline.getBounds() : this.text.getBounds());

    if(!!this.settings.padding) {
      if(Array.isArray(this.settings.padding)) {
        const horizontalPadding = this.settings.padding[0];
        const verticalPadding = this.settings.padding[1];

        if(horizontalPadding > 0) {
          this.textBounds.inherit({
            width: this.textBounds.width + horizontalPadding,
          });
        }

        if(verticalPadding > 0) {
          this.textBounds.inherit({
            height: this.textBounds.height + verticalPadding,
          });
        }
      } else if(Number.isNumber(this.settings.padding)) {
        if(this.settings.padding > 0) {
          this.textBounds.inherit({
            width: this.textBounds.width + this.settings.padding,
            height: this.textBounds.height + this.settings.padding,
          });
        }
      }
    }

    this.settings.inherit({
      size: {
        width: this.textBounds.width,
        height: this.textBounds.height,
      },
    });
  }

  /**
   * centers the text inside the container
   * @memberOf TextElement
   * @method centerText
   * @instance
   */
  centerText() {
    if(!!this.settings.outline) {
      this.textOutline.inherit({
        x: this.settings.size.width * 0.5,
        y: this.settings.lineHeight * 0.5,
      });
    }

    this.text.inherit({
      x: this.settings.size.width * 0.5,
      y: this.settings.lineHeight * 0.5,
    });
  }

  preDrawElement() {
    if(!!this.settings.outline) {
      this.textOutline = Helpers.createText(this.settings.text, this.settings.font, this.settings.outline.color).inherit({
        textAlign: 'center',
        textBaseline: 'middle',
        lineHeight: this.settings.lineHeight || null,
        lineWidth: this.settings.maxWidth || null,
        outline: this.settings.outline.size,
        shadow: !!this.settings.shadow ? new Draw.Shadow(...this.settings.shadow) : null,
      });
    }

    this.text = Helpers.createText(this.settings.text, this.settings.font, this.settings.color).inherit({
      textAlign: 'center',
      textBaseline: 'middle',
      lineHeight: this.settings.lineHeight || null,
      lineWidth: this.settings.maxWidth || null,
      shadow: !!this.settings.shadow ? new Draw.Shadow(...this.settings.shadow) : null,
    });

    this.computeBounds();
    this.centerText();

    return super.preDrawElement();
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

    if(!!this.settings.outline) {
      this.addChild(this.textOutline);
      this.setChildIndex(this.textOutline, 1);
    }

    this.addChild(this.text);
    this.setChildIndex(this.text, (!!this.settings.outline ? 2 : 1));
  }

  /**
   * sets or updates the position of the TextElement instance
   * @memberOf TextElement
   * @method setPosition
   * @instance
   * @override
   * @param {Object} position can contain x and y or only one or them
   * @param {Number} [position.x=0] the x position
   * @param {Number} [position.y=0] the y position
   * @param {Boolean} [override=false] specify to override actual TextElement position
   * @return {TextElement} to make chainable the method
   */
  setTextPosition(position = {x: 0, y: 0}, override = false) {
    if(!!position.x) {
      if(!!override) {
        if(!!this.settings.outline) {
          this.textOutline.x = position.x;
        }

        this.text.x = position.x;
      } else {
        if(!!this.settings.outline) {
          this.textOutline.x += position.x;
        }

        this.text.x += position.x;
      }
    }

    if(!!position.y) {
      if(!!override) {
        if(!!this.settings.outline) {
          this.textOutline.y = position.y;
        }

        this.text.y = position.y;
      } else {
        if(!!this.settings.outline) {
          this.textOutline.y += position.y;
        }

        this.text.y += position.y;
      }
    }

    return this;
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
    if(!!this.settings.outline) {
      this.textOutline.text = text;
    }

    this.text.text = text;

    return this;
  }
}
