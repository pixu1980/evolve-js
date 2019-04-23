import Anim from '../Anim';
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

    // this.preInit(options).then(() => {
    //   return this.drawElement();
    // }).then(() => {
    //   this.bindEvents();
    //   return this.init();
    // }).then(() => {
    //   this.postInit();
    // });
    this.preInit(options);
    this.drawElement();
    this.bindEvents();
    this.init();
    this.postInit();
  }

  preInit(options) {
    // return new Promise((resolve, reject) => {
    this.initDefaults();
    this.initSettings(options);
    this.initData();

    //   Function.isFunction(resolve) && resolve();
    // });
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
        regPointAlign: 'center middle',
        horizontalModes: ['left', 'center', 'right'],
        verticalModes: ['top', 'middle', 'bottom'],
        events: {},
      }.inherit(defaults),
    });
  }

  getAlignSettings(alignOptions = null) {
    const alignSettings = {
      horizontal: null,
      vertical: null,
    };

    if (!!alignOptions) {
      if (String.isString(alignOptions) || Array.isArray(alignOptions)) {
        let alignOptionsArray = alignOptions;

        if (String.isString(alignOptions)) {
          alignOptionsArray = alignOptions.split(' ');
        }

        alignSettings.inherit({
          horizontal: this.settings.horizontalModes.intersection(alignOptionsArray).first(),
          vertical: this.settings.verticalModes.intersection(alignOptionsArray).first(),
        });
      } else if (Object.isObject(alignOptions) && (!!alignOptions.horizontal || !!alignOptions.vertical)) {
        alignSettings.inherit(alignOptions);
      }
    }

    return alignSettings;
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

    this.settings.inherit({
      align: this.getAlignSettings(this.settings.align),
      regPointAlign: this.getAlignSettings(this.settings.regPointAlign),
    });
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

  preDrawElement() {
    // return new Promise((resolve, reject) => {
    if (this.settings.parent) {
      this.settings.parent.addChild(this);
    }

    this.setScale(this.settings.scale);
    this.setComputedBounds(this.settings.size);
    this.setReg(this.settings.regPointAlign);
    //   Function.isFunction(resolve) && resolve();
    // });
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

  drawRegPoint() {
    if (!!this.settings.regPoint) {
      this.regPoint = Helpers.createCircle(this.settings.regPoint, ...this.bounds);
      this.addChild(this.regPoint);

      this.regPoint.inherit({
        x: this.regX,
        y: this.regY,
      });

      this.regPointText = Helpers.createText('r:' + this.regX.toFixed(0) + 'x' + this.regY.toFixed(0) + '\np:' + this.getComputedBounds().x.toFixed(0) + 'x' + this.getComputedBounds().y.toFixed(0), '16px Verdana', '#fff').inherit({
        textAlign: this.settings.regPointAlign.horizontal || 'center',
        textBaseline: this.settings.regPointAlign.vertical || 'middle',
      });

      this.addChild(this.regPointText);

      const regPointTextPosition = {
        x: this.regX,
        y: this.regY,
      };

      if (this.settings.horizontalModes[0] === this.settings.regPointAlign.horizontal) {
        regPointTextPosition.x += 5;
      } else if (this.settings.horizontalModes[2] === this.settings.regPointAlign.horizontal) {
        regPointTextPosition.x -= 5;
      }

      if (this.settings.verticalModes[0] === this.settings.regPointAlign.vertical) {
        regPointTextPosition.y += 5;
      } else if (this.settings.verticalModes[1] === this.settings.regPointAlign.vertical) {
        if (this.settings.horizontalModes[1] === this.settings.regPointAlign.horizontal) {
          regPointTextPosition.y += 10;
        } else {
          regPointTextPosition.y -= 10;
        }
      } else if (this.settings.verticalModes[2] === this.settings.regPointAlign.vertical) {
        regPointTextPosition.y -= 20;
      }

      this.regPointText.inherit(regPointTextPosition);
    }
  }

  drawBoundsTexts() {
    if (!!this.settings.debug) {
      this.boundsText = Helpers.createText('s:' + this.getComputedBounds().width.toFixed(0) + 'x' + this.getComputedBounds().height.toFixed(0), '16px Verdana', '#fff').inherit({
        textAlign: this.settings.regPointAlign.horizontal === 'right' && this.settings.regPointAlign.vertical === 'bottom' ? 'center' : 'left',
        textBaseline: 'middle',
      });

      this.addChild(this.boundsText);

      const boundsTextAlign = this.settings.regPointAlign.horizontal === 'right' && this.settings.regPointAlign.vertical === 'bottom' ? 'center middle' : 'right bottom';

      Helpers.align(this.boundsText, null, boundsTextAlign, false);

      if (this.boundsText.textAlign === 'left') {
        this.boundsText.inherit({
          x: this.boundsText.x - 10,
        });
      }
    }
  }

  drawOverlayElements() {
    this.drawRegPoint();
    this.drawBoundsTexts();
  }

  postDrawElement() {
    // if(!!this.settings.scale) {
    //   this.inherit({
    //     scaleX: this.settings.scale.x,
    //     scaleY: this.settings.scale.y,
    //   });
    // }

    // return new Promise((resolve, reject) => {
    // if (!!this.settings.align) {
    //   this.align(null, this.settings.align);
    // } else {
    //   this.setPosition(this.settings.position);
    // }

    //   Function.isFunction(resolve) && resolve();
    // });
  }

  /**
   * draws all graphic elements of the Element instance
   * @memberOf Element
   * @method draw
   * @instance
   */
  drawElement() {
    // return new Promise((resolve, reject) => {
    // this.preDrawElement().then(() => {
    this.preDrawElement();
    this.drawBackgroundElements();
    this.drawElements();
    this.drawBehaviorElements();

    if (!!this.settings.align) {
      this.align(null, this.settings.align);
    } else {
      this.setPosition(this.settings.position);
    }

    this.drawOverlayElements();

    // return this.postDrawElement();
    this.postDrawElement();
    //   }).then(() => {
    //     Function.isFunction(resolve) && resolve();
    //   });
    // });
  }

  /**
   * sets to center/middle the regPoint of the Element instance
   * @memberOf Element
   * @method setReg
   * @instance
   */
  setReg(mode = 'center middle') {
    const bounds = this.getBounds();
    const regPointAlignSettings = this.getAlignSettings(mode);

    const reg = {
      regX: 0,
      regY: 0,
    };

    if (!!regPointAlignSettings.horizontal) {
      if (this.settings.horizontalModes[1] === regPointAlignSettings.horizontal) {
        reg.inherit({
          regX: bounds.width * 0.5,
        });
      } else if (this.settings.horizontalModes[2] === regPointAlignSettings.horizontal) {
        reg.inherit({
          regX: bounds.width,
        });
      }
    }

    if (!!regPointAlignSettings.vertical) {
      if (this.settings.verticalModes[1] === regPointAlignSettings.vertical) {
        reg.inherit({
          regY: bounds.height * 0.5,
        });
      } else if (this.settings.verticalModes[2] === regPointAlignSettings.vertical) {
        reg.inherit({
          regY: bounds.height,
        });
      }
    }

    this.inherit(reg);

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
        x: 1,
        y: 1,
      };

      if (Number.isNumber(this.settings.scale)) {
        scale.inherit({
          x: this.settings.scale,
          y: this.settings.scale,
        });
      } else if (Object.isObject(this.settings.scale)) {
        scale.inherit({
          x: this.settings.scale.x,
          y: this.settings.scale.y,
        });
      }

      this.settings.scale = scale;

      this.inherit({
        scaleX: this.settings.scale.x,
        scaleY: this.settings.scale.y,
      });
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

  getAlignPosition(parentElement = null, mode = 'left top') {
    if (!parentElement) {
      parentElement = this.parent;
    }

    const parentBounds = parentElement.getBounds();
    const bounds = this.getBounds();
    const alignSettings = this.getAlignSettings(mode);

    const position = {
      x: 0,
      y: 0,
    };

    if (!!alignSettings.horizontal) {
      if (this.settings.horizontalModes[0] === alignSettings.horizontal) {
        if (this.settings.horizontalModes[0] === this.settings.regPointAlign.horizontal) {
          position.inherit({
            x: 0,
          });
        } else if (this.settings.horizontalModes[1] === this.settings.regPointAlign.horizontal) {
          position.inherit({
            x: bounds.width * 0.5 * this.settings.scale.x,
          });
        } else if (this.settings.horizontalModes[2] === this.settings.regPointAlign.horizontal) {
          position.inherit({
            x: bounds.width * this.settings.scale.x,
          });
        }
      } else if (this.settings.horizontalModes[1] === alignSettings.horizontal) {
        if (this.settings.horizontalModes[0] === this.settings.regPointAlign.horizontal) {
          position.inherit({
            x: parentBounds.width * 0.5 - bounds.width * 0.5 * this.settings.scale.x,
          });
        } else if (this.settings.horizontalModes[1] === this.settings.regPointAlign.horizontal) {
          position.inherit({
            x: parentBounds.width * 0.5,
          });
        } else if (this.settings.horizontalModes[2] === this.settings.regPointAlign.horizontal) {
          position.inherit({
            x: parentBounds.width * 0.5 + bounds.width * 0.5 * this.settings.scale.x,
          });
        }
      } else if (this.settings.horizontalModes[2] === alignSettings.horizontal) {
        if (this.settings.horizontalModes[0] === this.settings.regPointAlign.horizontal) {
          position.inherit({
            x: parentBounds.width - bounds.width * this.settings.scale.x,
          });
        } else if (this.settings.horizontalModes[1] === this.settings.regPointAlign.horizontal) {
          position.inherit({
            x: parentBounds.width - bounds.width * 0.5 * this.settings.scale.x,
          });
        } else if (this.settings.horizontalModes[2] === this.settings.regPointAlign.horizontal) {
          position.inherit({
            x: parentBounds.width,
          });
        }
      }
    }

    if (!!alignSettings.vertical) {
      if (this.settings.verticalModes[0] === alignSettings.vertical) {
        if (this.settings.verticalModes[0] === this.settings.regPointAlign.vertical) {
          position.inherit({
            y: 0,
          });
        } else if (this.settings.verticalModes[1] === this.settings.regPointAlign.vertical) {
          position.inherit({
            y: bounds.height * 0.5 * this.settings.scale.y,
          });
        } else if (this.settings.verticalModes[2] === this.settings.regPointAlign.vertical) {
          position.inherit({
            y: bounds.height * this.settings.scale.y,
          });
        }
      } else if (this.settings.verticalModes[1] === alignSettings.vertical) {
        if (this.settings.verticalModes[0] === this.settings.regPointAlign.vertical) {
          position.inherit({
            y: parentBounds.height * 0.5 - bounds.height * 0.5 * this.settings.scale.y,
          });
        } else if (this.settings.verticalModes[1] === this.settings.regPointAlign.vertical) {
          position.inherit({
            y: parentBounds.height * 0.5,
          });
        } else if (this.settings.verticalModes[2] === this.settings.regPointAlign.vertical) {
          position.inherit({
            y: parentBounds.height * 0.5 + bounds.height * 0.5 * this.settings.scale.y,
          });
        }
      } else if (this.settings.verticalModes[2] === alignSettings.vertical) {
        if (this.settings.verticalModes[0] === this.settings.regPointAlign.vertical) {
          position.inherit({
            y: parentBounds.height - bounds.height * this.settings.scale.y,
          });
        } else if (this.settings.verticalModes[1] === this.settings.regPointAlign.vertical) {
          position.inherit({
            y: parentBounds.height - bounds.height * 0.5 * this.settings.scale.y,
          });
        } else if (this.settings.verticalModes[2] === this.settings.regPointAlign.vertical) {
          position.inherit({
            y: parentBounds.height,
          });
        }
      }
    }


    return position;
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
    this.settings.inherit({
      position: this.getAlignPosition(parentElement, mode),
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
      top: this.y - bounds.height * 0.5,
      right: this.x + bounds.width * 0.5,
      bottom: this.y + bounds.height * 0.5,
      left: this.x - bounds.width * 0.5,
      x: this.x,
      y: this.y,
      width: bounds.width,
      height: bounds.height,
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
    // return new Promise((resolve, reject) => {
    //   Function.isFunction(resolve) && resolve();
    // });
  }


  postInit() {
    //TODO:
  }

  animate(options = { override: false, delay: 0 }, to = {}, time = 400, ease = Anim.Ease.linear) {
    return new Promise((resolve, reject) => {
      Anim.Tween.get(this, options).wait(options.delay).to(to, time, ease).call(() => {
        Anim.Tween.removeTweens(this);
        resolve();
      });
    });
  }
}
