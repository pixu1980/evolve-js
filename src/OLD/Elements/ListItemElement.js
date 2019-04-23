import ButtonElement from './ButtonElement';
import ImageElement from './ImageElement';

/**
 * constructs a ListItemElement instance
 * @class ListItemElement
 * @classdesc the ListItemElement extends ButtonElement allowing you to add a list item indicator and a text, with a click event handler
 * @extend ButtonElement
 * @param {Object} options the options object to be merged with defaults
 * @type {ListItemElement}
 * @public
 */
export default class ListItemElement extends ButtonElement {
  /**
   * Initialize default settings for ListItemElement instance
   * @memberOf ListItemElement
   * @method initDefaults
   * @instance
   * @override
   */
  initDefaults() {
    super.initDefaults({
      text: 'List Item',
      indicator: false, // options for an ImageElement to use as listItem indicator
      stroke: {
        size: 0,
        radius: 0,
        color: 'transparent',
      },
      events: {
        click: () => {
        },
      },
    });
  }

  /**
   * draws all graphic elements of the ListItemElement instance
   * @memberOf ListItemElement
   * @method drawElements
   * @instance
   * @override
   */
  drawElements() {
    if(!!this.settings.indicator) {
      this.indicator = new ImageElement(this.settings.indicator.inherit({
        parent: this,
        align: 'left middle',
      })).setPosition({
        x: 10,
      });

      this.settings.lineHeight = this.indicator.getComputedBounds().height;
    }

    this.alignText('left middle');
    this.setTextPosition({
      x: this.indicator.getComputedBounds().right + 10,
    }, true);
  }
}
