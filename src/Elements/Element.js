import {Container, Shadow, Shape} from '../CreateJS/EaselJS';
import ElementHelpers from './ElementHelpers';

/**
 * constructs an Element instance
 * @class Element
 * @classdesc Element Class
 //* @extends Container
 * @param {Object} options the options object to be merged with defaults
 * @type {Element}
 * @public
 */
export default class Element extends Container {
  constructor(options = {}) {
    super();

    this.initDefaults();
    this.initSettings(options);

    this.initData();

    if(this.settings.parent) {
      this.settings.parent.addChild(this);
    }

    this.drawElements();

    if(!!this.settings.align) {
      this.align(null, this.settings.align);
    }

    this.bindEvents();

    this.init();
  }

  /**
   * initializes default settings for Element instance
   * @memberOf Element
   * @method initDefaults
   * @instance
   * @param {Object} defaults the defaults object for Element instance
   */
  initDefaults(defaults) {
    this.inherit({
      debug: {
        fill: 'rgba(0,0,0,0.4)',
        stroke: {
          size: 1,
          color: '#f00',
        },
        regPoint: {
          radius: 3,
          fill: '#f00',
        },
      },
      defaults: {
        debug: false,
        parent: null,
        position: {
          x: 0,
          y: 0,
        },
        scale: {
          x: 1,
          y: 1,
        },
        size: {
          width: 0,
          height: 0,
        },
        mask: false,
        fill: 'rgba(255,255,255,0.001)',
        stroke: {
          size: 0,
          radius: 0,
          color: 'rgba(0,0,0,0.001)',
        },
        shadow: false,
        align: null,
        regPoint: false,
        events: {},
      }.inherit(defaults),
    });
  }

  /**
   * initializes settings object for the Element instance
   * @memberOf Element
   * @method initSettings
   * @instance
   * @param {Object} options the options object to be merged with defaults
   */
  initSettings(options) {
    this.inherit({
      settings: this.defaults.inherit(true, options),
    });

    !!this.settings.debug && this.settings.inherit(this.debug);
  }

  /**
   * initializes data object for the Element instance
   * @memberOf Element
   * @method initData
   * @instance
   */
  initData() {
    this.data = {};
  }

  /**
   * draws all graphic elements of the Element instance
   * @memberOf Element
   * @method drawElements
   * @instance
   */
  drawElements() {
    this.setScale(this.settings.scale);

    if(!this.bounds && !!this.settings.size) {
      if(String.isPercentage(this.settings.size)) {
        this.settings.size = {
          width: '100%',
          height: '100%',
        };
      } else if(Number.isNumber(this.settings.size)) {
        this.settings.size = {
          width: this.settings.size,
          height: this.settings.size,
        };
      }

      if(String.isPercentage(this.settings.size.width) && !!this.parent) {
        this.settings.size.width = this.parent.getComputedBounds().width * this.settings.size.width.parsePercentage();
      }

      if(String.isPercentage(this.settings.size.height) && !!this.parent) {
        this.settings.size.height = this.parent.getComputedBounds().height * this.settings.size.height.parsePercentage();
      }

      this.bounds = [0, 0, this.settings.size.width * this.settings.scale.x, this.settings.size.height * this.settings.scale.y];
    }

    this.background = ElementHelpers.createRect(this.settings.pick(['fill', 'stroke']), ...this.bounds);
    this.addChild(this.background);
    this.setChildIndex(this.background, 0);

    if(!!this.settings.regPoint) {
      this.regPoint = ElementHelpers.createCircle(this.settings.regPoint, ...this.bounds);
      this.addChild(this.regPoint);
      this.setChildIndex(this.regPoint, this.children.length - 1);

      ElementHelpers.align(this.regPoint, null, 'center middle', false);
    }

    this.setBounds(...this.bounds);

    this.setReg();
    this.setPosition(this.settings.position);
    this.setShadow(this.settings.shadow);

    if(!!this.settings.mask) {
      this.maskShape = this.settings.mask;

      if(!(this.settings.mask instanceof Shape) && !(this.settings.mask instanceof Container)) {
        this.maskBounds = [0, 0, this.settings.size.width * this.settings.scale.x, this.settings.size.height * this.settings.scale.y];

        if(Object.isObject(this.settings.mask)) {
          this.maskBounds = [0, 0, this.settings.size.width * this.settings.scale.x * this.settings.mask.scale, this.settings.size.height * this.settings.scale.y * this.settings.mask.scale];
          this.maskShape = ElementHelpers.createRect(this.settings.mask.pick(['fill', 'stroke']), ...this.maskBounds);
        } else if(Number.isNumber(this.settings.mask)) {
          this.maskBounds = [0, 0, this.settings.size.width * this.settings.scale.x * this.settings.mask, this.settings.size.height * this.settings.scale.y * this.settings.mask];
          this.maskShape = ElementHelpers.createRect(this.settings.pick(['fill', 'stroke']), ...this.maskBounds);
        }

        this.mask = this.maskShape.inherit({
          x: this.bounds[2] * 0.5 - this.maskBounds[2] * 0.5,
          y: this.bounds[3] * 0.5 - this.maskBounds[3] * 0.5,
        });
      }

      if(!!this.settings.debug) {
        this.addChild(this.maskShape);
      } else {
        this.mask = this.maskShape;
      }
    }
  }

  /**
   * sets to center/middle the regPoint of the Element instance
   * @memberOf Element
   * @method setReg
   * @instance
   */
  setReg() {
    this.inherit({
      regX: this.settings.size.width * 0.5 * this.settings.scale.x,
      regY: this.settings.size.height * 0.5 * this.settings.scale.y,
    });

    return this;
  }

  /**
   * sets or updates the position of the Element instance
   * @memberOf Element
   * @method setPosition
   * @instance
   * @param {Object} position can contain x and y or only one or them
   * @param {Number} [position.x=0] the x position
   * @param {Number} [position.y=0] the y position
   * @param {Boolean} [override=false] specify to override actual Element position
   * @return {Element} to make chainable the method
   */
  setPosition(position = {x: 0, y: 0}, override = false) {
    if(!!position.x) {
      if(!!override) {
        this.x = position.x;
      } else {
        this.x += position.x;
      }
    }

    if(!!position.y) {
      if(!!override) {
        this.y = position.y;
      } else {
        this.y += position.y;
      }
    }

    return this;
  }

  /**
   * sets or updates the scaling of the Element instance
   * @memberOf Element
   * @method setScale
   * @instance
   * @param {Object|Number} scaleOptions can be an object with x and y couple or only a number to be used for both
   * @return {Element} to make chainable the method
   */
  setScale(scaleOptions = {x: 1, y: 1}) {
    let scaleSettings = scaleOptions;

    if(Number.isNumber(scaleSettings)) {
      scaleSettings = {
        scaleX: scaleSettings,
        scaleY: scaleSettings,
      };
    } else if(Object.isObject(scaleSettings)) {
      scaleSettings = {
        scaleX: scaleSettings.x,
        scaleY: scaleSettings.y,
      };
    }

    this.settings.inherit({
      scale: {
        x: scaleSettings.scaleX,
        y: scaleSettings.scaleY,
      },
    });

    this.inherit(scaleSettings);

    return this;
  }

  /**
   * sets or updates the Shadow of the Element instance
   * @memberOf Element
   * @method setShadow
   * @instance
   * @param {Object|Shadow} shadowOptions can be an object with {color, x, y, blur}<br>or directly an instance of Shadow (EaselJS)
   * @return {Element} to make chainable the method
   */
  setShadow(shadowOptions = null) {
    if(!!shadowOptions) {
      this.settings.shadow = shadowOptions;

      if(!!this.settings.shadow) {
        let shadow = null;

        if(Object.isObject(this.settings.shadow)) {
          const shadowSettings = [
            this.settings.shadow.color,
            this.settings.shadow.x,
            this.settings.shadow.y,
            this.settings.shadow.blur,
          ];

          shadow = new Shadow(...shadowSettings);
        } else if(this.settings.shadow instanceof Shadow) {
          shadow = this.settings.shadow;
        }

        this.inherit({
          shadow,
        });
      }
    } else {
      this.settings.shadow = null;
      this.inherit({
        shadow: null,
      });
    }

    return this;
  }

  /**
   * Aligns the Element instance, based on it's parent bounds or specified parentElement bounds and mode parameter
   * @memberOf Element
   * @method align
   * @instance
   * @param {Object|null} parentElement if null, it considers the actual Element instance parent, otherwise it aligns in base of the specified parentElement
   * @param {String} mode can be a set of one or two strings (blank separated) in any order, for horizontalModes (left, center, right), for verticalModes (top, middle, bottom)
   * @return {Element} to make chainable the method
   */
  align(parentElement = null, mode = 'left top') {
    if(!parentElement) {
      parentElement = this.parent;
    }

    const parentBounds = parentElement.getBounds();
    const bounds = this.getBounds();
    const modes = mode.toArray(' ');
    const horizontalModes = ['left', 'center', 'right'];
    const verticalModes = ['top', 'middle', 'bottom'];

    const position = {
      x: 0,
      y: 0,
    };

    if(horizontalModes.contains(modes)) {
      if(modes.contains('left')) {
        position.inherit({
          x: bounds.width * 0.5,
        });
      } else if(modes.contains('center')) {
        position.inherit({
          x: parentBounds.width * 0.5,
        });
      } else if(modes.contains('right')) {
        position.inherit({
          x: parentBounds.width - bounds.width * 0.5,
        });
      }
    }

    if(verticalModes.contains(modes)) {
      if(modes.contains('top')) {
        position.inherit({
          y: bounds.height * 0.5,
        });
      } else if(modes.contains('middle')) {
        position.inherit({
          y: parentBounds.height * 0.5,
        });
      } else if(modes.contains('bottom')) {
        position.inherit({
          y: parentBounds.height - bounds.height * 0.5,
        });
      }
    }

    this.settings.inherit({
      position,
    });

    this.inherit(position);

    return this;
  }

  /**
   * returns the actual computed bounds of the Element instance, including scale factor and top, right, bottom, left coordinates
   * @memberOf Element
   * @method getComputedBounds
   * @instance
   * @return {Object} the actual Element instance computed bounds object<br>
   * <pre>
   *   {
   *     {
   *       top: number,
   *       right: number,
   *       bottom: number,
   *       left: number,
   *       x: number,
   *       y: number,
   *       width: number,
   *       height: number
   *     }
   *   }
   * </pre>
   */
  getComputedBounds() {
    const bounds = this.getBounds();

    return {
      top: this.y - bounds.height * 0.5 * this.settings.scale.y,
      right: this.x + bounds.width * 0.5 * this.settings.scale.x,
      bottom: this.y + bounds.height * 0.5 * this.settings.scale.y,
      left: this.x - bounds.width * 0.5 * this.settings.scale.x,
      x: this.x,
      y: this.y,
      width: bounds.width * this.settings.scale.x,
      height: bounds.height * this.settings.scale.y,
    };
  }

  /**
   * binds all events specified in the settings object for the Element instance, it supports all EaselJS classes events (eg. click, mouseover, etc...)
   * @memberOf Element
   * @method bindEvents
   * @instance
   */
  bindEvents() {
    if(!!this.settings.events) {
      this.settings.events.each((value, key) => {
        if(Function.isFunction(value)) {
          this.on(key, value);
        }
      });
    }
  }

  /**
   * empty init method, to be overriden in classes that extends Element, to use for all those initializations you might need after having rendered the Element
   * @memberOf Element
   * @method init
   * @instance
   */
  init() {
  }
}
