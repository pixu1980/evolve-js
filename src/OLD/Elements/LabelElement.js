import TextElement from './TextElement';

/**
 * constructs a LabelElement instance
 * @class LabelElement
 * @classdesc the LabelElement class extends TextElement, implementing padding, minWidth, etc etc ...
 * @extend TextElement
 * @public
 * @param {Object} options the options to be merged with defaults settings
 * @type {LabelElement}
 */
export default class LabelElement extends TextElement {
  /**
   * Initialize default settings for Label Element
   * @memberOf LabelElement
   * @method initDefaults
   * @instance
   * @override
   * @param {Object} defaults the defaults settings
   */
  initDefaults(defaults) {
    super.initDefaults({
      text: 'Label',
      padding: 10,
      minWidth: 0,
    }.inherit(defaults));
  }

  /**
   * compute bounds before drawing all graphic elements of LabelElement instance
   * @memberOf LabelElement
   * @method computeBounds
   * @instance
   * @override
   */
  computeBounds() {
    super.computeBounds();

    if(!!this.settings.minWidth) {
      if(String.isPercentage(this.settings.minWidth) && !!this.parent) {
        this.settings.minWidth = this.parent.getComputedBounds().width * this.settings.minWidth.parsePercentage();
      }

      if(this.settings.size.width < this.settings.minWidth) {
        this.settings.size.width = this.settings.minWidth;
      }
    }
  }

  /**
   * centers the text inside LabelElement container
   * @memberOf LabelElement
   * @method centerText
   * @instance
   * @override
   */
  centerText() {
    if(!!this.settings.outline) {
      this.textOutline.inherit({
        x: this.settings.size.width * 0.5,
        y: this.settings.size.height * 0.5,
      });
    }

    this.text.inherit({
      x: this.settings.size.width * 0.5,
      y: this.settings.size.height * 0.5,
    });
  }

  /**
   * aligns the text inside the LabelElement container
   * @memberOf LabelElement
   * @method alignText
   * @instance
   * @override
   * @param {String} mode can be a couple of word for horizontal or vertical align, in any order<br>
   *   accepts the following modes<br>
   *   <ul>
   *     <li><b>Horizontal Modes</b>: left, center, right</li>
   *     <li><b>Vertical Modes</b>: top, middle, bottom</li>
   *   </ul>
   * @return {LabelElement}
   */
  alignText(mode = 'center middle') {
    const modes = mode.toArray(' ');
    const horizontalModes = ['left', 'center', 'right'];
    const verticalModes = ['top', 'middle', 'bottom'];

    const textOptions = {
      x: this.settings.size.width * 0.5,
      y: this.settings.size.height * 0.5,
      textAlign: 'center',
      textBaseline: 'middle',
    };

    if(horizontalModes.contains(modes)) {
      if(modes.contains('left')) {
        textOptions.inherit({
          x: 0,
          textAlign: 'left',
        });
      } else if(modes.contains('right')) {
        textOptions.inherit({
          x: this.settings.size.width,
          textAlign: 'right',
        });
      }
    }

    if(verticalModes.contains(modes)) {
      if(modes.contains('top')) {
        textOptions.inherit({
          y: 0,
          textBaseline: 'top',
        });
      } else if(modes.contains('bottom')) {
        textOptions.inherit({
          y: this.settings.size.height,
          textBaseline: 'bottom',
        });
      }
    }

    if(!!this.settings.outline) {
      this.textOutline.inherit(textOptions);
    }

    this.text.inherit(textOptions);

    return this;
  }
}
