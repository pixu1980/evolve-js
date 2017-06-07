import Element from './Element';
import ListItemElement from './ListItemElement';

/**
 * constructs a ListElement instance
 * @class ListElement
 * @classdesc the ListElement class allows to create a list of any type of elements
 * @extend Element
 * @public
 * @param {Object} options the options to be merged with defaults settings
 * @type {ListElement}
 */
export default class ListElement extends Element {
  /**
   * Initialize default settings for List Element
   * @memberOf ListElement
   * @method initDefaults
   * @instance
   * @override
   */
  initDefaults() {
    super.initDefaults({
      items: [],
      item: { // options for a ListItemElement to use as default listItem options
        minWidth: '100%',
        color: '#fff',
      },
      itemEvents: { // event handlers to use as default listItem event handlers
        click: () => {
        },
      },
      indicator: false, // options for an ImageElement to use as default listItem indicator
      stroke: {
        size: 0,
        radius: 0,
        color: 'transparent',
      },
    });
  }

  /**
   * initializes data object for the ListElement instance
   * @memberOf ListElement
   * @method initData
   * @instance
   * @override
   */
  initData() {
    this.items = [];
  }

  /**
   * compute bounds before drawing all graphic elements of ListElement instance
   * @memberOf ListElement
   * @method computeBounds
   * @instance
   * @override
   */
  computeBounds() {
    if(!!this.settings.minWidth) {
      if(this.settings.minWidth.isPercentage() && !!this.parent) {
        this.settings.minWidth = this.parent.getComputedBounds().width * this.settings.minWidth.parsePercentage();
      }

      if(this.settings.size.width < this.settings.minWidth) {
        this.settings.size.width = this.settings.minWidth;
      }
    }
  }

  preDrawElement() {
    this.computeBounds();

    super.preDrawElement();
  }


  /**
   * draws all graphic elements of the ListElement instance, cycles the items, draw them and computes positions
   * @memberOf ListElement
   * @method drawElements
   * @instance
   * @override
   */
  drawElements() {
    super.drawElements();

    this.settings.path('items', []).each((item, i) => {
      const listItem = new ListItemElement(this.settings.item.inherit(true, {
        indicator: this.settings.indicator,
        events: this.settings.itemEvents,
      }, item, {
        parent: this,
        align: 'left top',
      }));

      this.items.push(listItem);

      if(i > 0) {
        listItem.setPosition({
          y: this.items[i - 1].getComputedBounds().bottom,
        });
      }
    });
  }
}
