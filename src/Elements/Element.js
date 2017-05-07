import Draw from '../Draw';
import Helpers from './Helpers';

/**
 * constructs an Element instance
 * @class Element
 * @classdesc Element Class
 //* @extends Container
 * @param {Object} options the options object to be merged with defaults
 * @type {Element}
 * @public
 */
export default class Element extends Draw.Container {
  constructor(options = {}) {
    super();

    this.initDefaults();
    this.initSettings(options);

    this.initData();

    this.drawElement();

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
        cache: false,
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

  preDrawElements() {
    this.setScale(this.settings.scale);

    if (this.settings.parent) {
      this.settings.parent.addChild(this);
    }

    this.setComputedBounds(this.settings.size);
    this.setReg();
  }

  drawBackgroundElements() {
    this.background = Helpers.createRect(this.settings.pick(['fill', 'stroke']), ...this.bounds);
    this.addChild(this.background);
  }

  drawElements() {
    //TODO:
  }

  drawBehaviorElements() {
    this.setMask(this.settings.mask);
    this.setShadow(this.settings.shadow);
    this.setCache(this.settings.cache);
  }

  drawOverlayElements() {
    if (!!this.settings.regPoint) {
      this.regPoint = Helpers.createCircle(this.settings.regPoint, ...this.bounds);
      this.addChild(this.regPoint);

      Helpers.align(this.regPoint, null, 'center middle', false);
    }
  }

  postDrawElements() {
    if (!!this.settings.align) {
      this.align(null, this.settings.align);
    } else {
      this.setPosition(this.settings.position);
    }
  }

  /**
   * draws all graphic elements of the Element instance
   * @memberOf Element
   * @method draw
   * @instance
   */
  drawElement() {
    this.preDrawElements();

    this.drawBackgroundElements();
    this.drawElements();
    this.drawBehaviorElements();
    this.drawOverlayElements();

    this.postDrawElements();
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
   * @param {Object} [positionOptions=null] can contain x and y or only one or them
   * @param {Number} [positionOptions.x=0] the x position
   * @param {Number} [positionOptions.y=0] the y position
   * @param {Boolean} [override=false] specify to override actual Element position
   * @param {Boolean} [force=true] ...
   * @return {Element} to make chainable the method
   */
  setPosition(positionOptions = null, override = false, force = true) {
    if (!!positionOptions) {
      if (force) {
        this.settings.position = positionOptions;
      } else {
        this.settings.position.inherit(positionOptions);
      }
    }

    if (!!this.settings.position) {
      if (!!this.settings.position.x) {
        if (!!override) {
          this.x = this.settings.position.x;
        } else {
          this.x += this.settings.position.x;
        }
      }

      if (!!this.settings.position.y) {
        if (!!override) {
          this.y = this.settings.position.y;
        } else {
          this.y += this.settings.position.y;
        }
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
  setScale(scaleOptions = null, force = false) {
    if (!!scaleOptions) {
      if (force) {
        this.settings.scale = scaleOptions;
      } else {
        this.settings.scale.inherit(scaleOptions);
      }
    }

    if (!!this.settings.scale) {
      const scale = {
        scaleX: 1,
        scaleY: 1,
      };

      if (Number.isNumber(this.settings.scale)) {
        scale.inherit({
          scaleX: this.settings.scale,
          scaleY: this.settings.scale,
        });
      } else if (Object.isObject(this.settings.scale)) {
        scale.inherit({
          scaleX: this.settings.scale.x,
          scaleY: this.settings.scale.y,
        });
      }

      this.inherit(scale);
    }

    return this;
  }

  /**
   * sets or updates the bounds of the Element instance
   * @memberOf Element
   * @method setComputedBounds
   * @instance
   * @param {Object|Number} boundsOptions ...
   * @return {Element} to make chainable the method
   */
  setComputedBounds(boundsOptions = null, force = false) {
    if (!!boundsOptions) {
      if (force) {
        this.settings.size = boundsOptions;
      } else {
        this.settings.size.inherit(boundsOptions);
      }
    }

    if (!this.bounds && !!this.settings.size) {
      if (String.isPercentage(this.settings.size) || Number.isNumber(this.settings.size)) {
        this.settings.size = {
          width: this.settings.size,
          height: this.settings.size,
        };
      }

      if (String.isPercentage(this.settings.size.width) && !!this.parent) {
        this.settings.size.width = this.parent.getComputedBounds().width * this.settings.size.width.parsePercentage();
      }

      if (String.isPercentage(this.settings.size.height) && !!this.parent) {
        this.settings.size.height = this.parent.getComputedBounds().height * this.settings.size.height.parsePercentage();
      }

      this.bounds = [0, 0, this.settings.size.width * this.settings.scale.x, this.settings.size.height * this.settings.scale.y];
      this.setBounds(...this.bounds);
    }

    return this;
  }

  /**
   * sets or updates the Mask of the Element instance
   * @memberOf Element
   * @method setMask
   * @instance
   * @param {Object|Shadow} maskOptions can be an object with {color, x, y, blur}<br>or directly an instance of Shadow (DrawJS)
   * @param {Boolean} force ....
   * @return {Element} to make chainable the method
   */
  setMask(maskOptions = null, force = false) {
    if (!!maskOptions) {
      if (force) {
        this.settings.mask = maskOptions;
      } else {
        this.settings.mask.inherit(maskOptions);
      }
    }

    if (!!this.settings.mask) {
      this.maskShape = this.settings.mask;

      if (!(this.settings.mask instanceof Draw.Shape) && !(this.settings.mask instanceof Draw.DisplayObject)) {
        this.maskBounds = [0, 0, this.settings.size.width * this.settings.scale.x, this.settings.size.height * this.settings.scale.y];

        if (Object.isObject(this.settings.mask)) {
          this.maskBounds = [0, 0, this.settings.size.width * this.settings.scale.x * this.settings.mask.scale, this.settings.size.height * this.settings.scale.y * this.settings.mask.scale];
          this.maskShape = Helpers.createRect(this.settings.mask.pick(['fill', 'stroke']), ...this.maskBounds);
        } else if (Number.isNumber(this.settings.mask)) {
          this.maskBounds = [0, 0, this.settings.size.width * this.settings.scale.x * this.settings.mask, this.settings.size.height * this.settings.scale.y * this.settings.mask];
          this.maskShape = Helpers.createRect(this.settings.pick(['fill', 'stroke']), ...this.maskBounds);
        }

        this.maskShape.inherit({
          x: this.bounds[2] * 0.5 - this.maskBounds[2] * 0.5,
          y: this.bounds[3] * 0.5 - this.maskBounds[3] * 0.5,
        });
      }

      if (!!this.settings.debug) {
        this.addChild(this.maskShape);
      }

      this.mask = this.maskShape;
    }

    return this;
  }

  /**
   * sets or updates the Shadow of the Element instance
   * @memberOf Element
   * @method setShadow
   * @instance
   * @param {Object|Shadow} shadowOptions can be an object with {color, x, y, blur}<br>or directly an instance of Shadow (DrawJS)
   * @param {Boolean} force ....
   * @return {Element} to make chainable the method
   */
  setShadow(shadowOptions = null, force = false) {
    if (!!shadowOptions) {
      if (force) {
        this.settings.shadow = shadowOptions;
      } else {
        this.settings.shadow.inherit(shadowOptions);
      }

      if (!!this.settings.shadow) {
        let shadow = null;

        if (Object.isObject(this.settings.shadow)) {
          const shadowSettings = [
            this.settings.shadow.color,
            this.settings.shadow.x,
            this.settings.shadow.y,
            this.settings.shadow.blur,
          ];

          shadow = new Draw.Shadow(...shadowSettings);
        } else if (this.settings.shadow instanceof Draw.Shadow) {
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
   * sets or updates the Cache of the Element instance
   * @memberOf Element
   * @method setCache
   * @instance
   * @param {Object|Shadow} cacheOptions ..
   * @param {Boolean} force ....
   * @return {Element} to make chainable the method
   */
  setCache(cacheOptions = null, force = false) {
    if (!!cacheOptions) {
      if (force) {
        this.settings.cache = cacheOptions;
      } else {
        this.settings.cache.inherit(cacheOptions);
      }

      if (!!this.settings.cache) {
        this.cache(...[this.bounds.x - 5, this.bounds.y - 5, this.getComputedBounds().width, this.getComputedBounds().height]);
      }
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
    if (!parentElement) {
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

    if (horizontalModes.contains(modes)) {
      if (modes.contains('left')) {
        position.inherit({
          x: bounds.width * 0.5,
        });
      } else if (modes.contains('center')) {
        position.inherit({
          x: parentBounds.width * 0.5,
        });
      } else if (modes.contains('right')) {
        position.inherit({
          x: parentBounds.width - bounds.width * 0.5,
        });
      }
    }

    if (verticalModes.contains(modes)) {
      if (modes.contains('top')) {
        position.inherit({
          y: bounds.height * 0.5,
        });
      } else if (modes.contains('middle')) {
        position.inherit({
          y: parentBounds.height * 0.5,
        });
      } else if (modes.contains('bottom')) {
        position.inherit({
          y: parentBounds.height - bounds.height * 0.5,
        });
      }
    }

    this.settings.inherit({
      position,
    });

    this.setPosition(null, true);

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
   * binds all events specified in the settings object for the Element instance, it supports all DrawJS classes events (eg. click, mouseover, etc...)
   * @memberOf Element
   * @method bindEvents
   * @instance
   */
  bindEvents() {
    if (!!this.settings.events) {
      this.settings.events.each((value, key) => {
        if (Function.isFunction(value)) {
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
