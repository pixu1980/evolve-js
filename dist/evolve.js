(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["evolve-js"] = factory();
	else
		root["evolve-js"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Translations = exports.Sounds = exports.Elements = exports.Create = undefined;
	
	var _createEs6Js = __webpack_require__(2);
	
	var _createEs6Js2 = _interopRequireDefault(_createEs6Js);
	
	var _Elements = __webpack_require__(15);
	
	var _Elements2 = _interopRequireDefault(_Elements);
	
	var _Translations = __webpack_require__(19);
	
	var _Translations2 = _interopRequireDefault(_Translations);
	
	var _Sounds = __webpack_require__(17);
	
	var _Sounds2 = _interopRequireDefault(_Sounds);
	
	var _release = __webpack_require__(11);
	
	var _release2 = _interopRequireDefault(_release);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var status = {
	  initialized: true,
	  version: _release2.default.version,
	  build: _release2.default.build
	};
	
	console.log('EvolveJS initialized', status);
	
	var evolve = {
	  Create: _createEs6Js2.default,
	  Elements: _Elements2.default,
	  Sounds: _Sounds2.default,
	  Translations: _Translations2.default,
	  status: status
	};
	
	exports.default = evolve;
	exports.Create = _createEs6Js2.default;
	exports.Elements = _Elements2.default;
	exports.Sounds = _Sounds2.default;
	exports.Translations = _Translations2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _createEs6Js = __webpack_require__(2);
	
	var _ElementHelpers = __webpack_require__(3);
	
	var _ElementHelpers2 = _interopRequireDefault(_ElementHelpers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * constructs an Element instance
	 * @class Element
	 * @classdesc Element Class
	 //* @extends Container
	 * @param {Object} options the options object to be merged with defaults
	 * @type {Element}
	 * @public
	 */
	var Element = function (_Easel$Container) {
	  _inherits(Element, _Easel$Container);
	
	  function Element() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    _classCallCheck(this, Element);
	
	    var _this = _possibleConstructorReturn(this, (Element.__proto__ || Object.getPrototypeOf(Element)).call(this));
	
	    _this.initDefaults();
	    _this.initSettings(options);
	
	    _this.initData();
	
	    _this.drawElement();
	
	    _this.bindEvents();
	
	    _this.init();
	    return _this;
	  }
	
	  /**
	   * initializes default settings for Element instance
	   * @memberOf Element
	   * @method initDefaults
	   * @instance
	   * @param {Object} defaults the defaults object for Element instance
	   */
	
	
	  _createClass(Element, [{
	    key: 'initDefaults',
	    value: function initDefaults(defaults) {
	      this.inherit({
	        debug: {
	          fill: 'rgba(0,0,0,0.4)',
	          stroke: {
	            size: 1,
	            color: '#f00'
	          },
	          regPoint: {
	            radius: 3,
	            fill: '#f00'
	          }
	        },
	        defaults: {
	          debug: false,
	          parent: null,
	          position: {
	            x: 0,
	            y: 0
	          },
	          scale: {
	            x: 1,
	            y: 1
	          },
	          size: {
	            width: 0,
	            height: 0
	          },
	          cache: false,
	          mask: false,
	          fill: 'rgba(255,255,255,0.001)',
	          stroke: {
	            size: 0,
	            radius: 0,
	            color: 'rgba(0,0,0,0.001)'
	          },
	          shadow: false,
	          align: null,
	          regPoint: false,
	          events: {}
	        }.inherit(defaults)
	      });
	    }
	
	    /**
	     * initializes settings object for the Element instance
	     * @memberOf Element
	     * @method initSettings
	     * @instance
	     * @param {Object} options the options object to be merged with defaults
	     */
	
	  }, {
	    key: 'initSettings',
	    value: function initSettings(options) {
	      this.inherit({
	        settings: this.defaults.inherit(true, options)
	      });
	
	      !!this.settings.debug && this.settings.inherit(this.debug);
	    }
	
	    /**
	     * initializes data object for the Element instance
	     * @memberOf Element
	     * @method initData
	     * @instance
	     */
	
	  }, {
	    key: 'initData',
	    value: function initData() {
	      this.data = {};
	    }
	  }, {
	    key: 'preDrawElements',
	    value: function preDrawElements() {
	      this.setScale(this.settings.scale);
	
	      if (this.settings.parent) {
	        this.settings.parent.addChild(this);
	      }
	
	      this.setComputedBounds(this.settings.size);
	      this.setReg();
	    }
	  }, {
	    key: 'drawBackgroundElements',
	    value: function drawBackgroundElements() {
	      this.background = _ElementHelpers2.default.createRect.apply(_ElementHelpers2.default, [this.settings.pick(['fill', 'stroke'])].concat(_toConsumableArray(this.bounds)));
	      this.addChild(this.background);
	    }
	  }, {
	    key: 'drawElements',
	    value: function drawElements() {
	      //TODO:
	    }
	  }, {
	    key: 'drawBehaviorElements',
	    value: function drawBehaviorElements() {
	      this.setMask(this.settings.mask);
	      this.setShadow(this.settings.shadow);
	      this.setCache(this.settings.cache);
	    }
	  }, {
	    key: 'drawOverlayElements',
	    value: function drawOverlayElements() {
	      if (!!this.settings.regPoint) {
	        this.regPoint = _ElementHelpers2.default.createCircle.apply(_ElementHelpers2.default, [this.settings.regPoint].concat(_toConsumableArray(this.bounds)));
	        this.addChild(this.regPoint);
	
	        _ElementHelpers2.default.align(this.regPoint, null, 'center middle', false);
	      }
	    }
	  }, {
	    key: 'postDrawElements',
	    value: function postDrawElements() {
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
	
	  }, {
	    key: 'drawElement',
	    value: function drawElement() {
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
	
	  }, {
	    key: 'setReg',
	    value: function setReg() {
	      this.inherit({
	        regX: this.settings.size.width * 0.5 * this.settings.scale.x,
	        regY: this.settings.size.height * 0.5 * this.settings.scale.y
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
	
	  }, {
	    key: 'setPosition',
	    value: function setPosition() {
	      var positionOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	      var override = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	      var force = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
	
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
	
	  }, {
	    key: 'setScale',
	    value: function setScale() {
	      var scaleOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	
	      if (!!scaleOptions) {
	        if (force) {
	          this.settings.scale = scaleOptions;
	        } else {
	          this.settings.scale.inherit(scaleOptions);
	        }
	      }
	
	      if (!!this.settings.scale) {
	        var scale = {
	          scaleX: 1,
	          scaleY: 1
	        };
	
	        if (Number.isNumber(this.settings.scale)) {
	          scale.inherit({
	            scaleX: this.settings.scale,
	            scaleY: this.settings.scale
	          });
	        } else if (Object.isObject(this.settings.scale)) {
	          scale.inherit({
	            scaleX: this.settings.scale.x,
	            scaleY: this.settings.scale.y
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
	
	  }, {
	    key: 'setComputedBounds',
	    value: function setComputedBounds() {
	      var boundsOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	
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
	            height: this.settings.size
	          };
	        }
	
	        if (String.isPercentage(this.settings.size.width) && !!this.parent) {
	          this.settings.size.width = this.parent.getComputedBounds().width * this.settings.size.width.parsePercentage();
	        }
	
	        if (String.isPercentage(this.settings.size.height) && !!this.parent) {
	          this.settings.size.height = this.parent.getComputedBounds().height * this.settings.size.height.parsePercentage();
	        }
	
	        this.bounds = [0, 0, this.settings.size.width * this.settings.scale.x, this.settings.size.height * this.settings.scale.y];
	        this.setBounds.apply(this, _toConsumableArray(this.bounds));
	      }
	
	      return this;
	    }
	
	    /**
	     * sets or updates the Mask of the Element instance
	     * @memberOf Element
	     * @method setMask
	     * @instance
	     * @param {Object|Shadow} maskOptions can be an object with {color, x, y, blur}<br>or directly an instance of Shadow (EaselJS)
	     * @param {Boolean} force ....
	     * @return {Element} to make chainable the method
	     */
	
	  }, {
	    key: 'setMask',
	    value: function setMask() {
	      var maskOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	
	      if (!!maskOptions) {
	        if (force) {
	          this.settings.mask = maskOptions;
	        } else {
	          this.settings.mask.inherit(maskOptions);
	        }
	      }
	
	      if (!!this.settings.mask) {
	        this.maskShape = this.settings.mask;
	
	        if (!(this.settings.mask instanceof _createEs6Js.Easel.Shape) && !(this.settings.mask instanceof _createEs6Js.Easel.DisplayObject)) {
	          this.maskBounds = [0, 0, this.settings.size.width * this.settings.scale.x, this.settings.size.height * this.settings.scale.y];
	
	          if (Object.isObject(this.settings.mask)) {
	            this.maskBounds = [0, 0, this.settings.size.width * this.settings.scale.x * this.settings.mask.scale, this.settings.size.height * this.settings.scale.y * this.settings.mask.scale];
	            this.maskShape = _ElementHelpers2.default.createRect.apply(_ElementHelpers2.default, [this.settings.mask.pick(['fill', 'stroke'])].concat(_toConsumableArray(this.maskBounds)));
	          } else if (Number.isNumber(this.settings.mask)) {
	            this.maskBounds = [0, 0, this.settings.size.width * this.settings.scale.x * this.settings.mask, this.settings.size.height * this.settings.scale.y * this.settings.mask];
	            this.maskShape = _ElementHelpers2.default.createRect.apply(_ElementHelpers2.default, [this.settings.pick(['fill', 'stroke'])].concat(_toConsumableArray(this.maskBounds)));
	          }
	
	          this.maskShape.inherit({
	            x: this.bounds[2] * 0.5 - this.maskBounds[2] * 0.5,
	            y: this.bounds[3] * 0.5 - this.maskBounds[3] * 0.5
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
	     * @param {Object|Shadow} shadowOptions can be an object with {color, x, y, blur}<br>or directly an instance of Shadow (EaselJS)
	     * @param {Boolean} force ....
	     * @return {Element} to make chainable the method
	     */
	
	  }, {
	    key: 'setShadow',
	    value: function setShadow() {
	      var shadowOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	
	      if (!!shadowOptions) {
	        if (force) {
	          this.settings.shadow = shadowOptions;
	        } else {
	          this.settings.shadow.inherit(shadowOptions);
	        }
	
	        if (!!this.settings.shadow) {
	          var shadow = null;
	
	          if (Object.isObject(this.settings.shadow)) {
	            var shadowSettings = [this.settings.shadow.color, this.settings.shadow.x, this.settings.shadow.y, this.settings.shadow.blur];
	
	            shadow = new (Function.prototype.bind.apply(_createEs6Js.Easel.Shadow, [null].concat(shadowSettings)))();
	          } else if (this.settings.shadow instanceof _createEs6Js.Easel.Shadow) {
	            shadow = this.settings.shadow;
	          }
	
	          this.inherit({
	            shadow: shadow
	          });
	        }
	      } else {
	        this.settings.shadow = null;
	
	        this.inherit({
	          shadow: null
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
	
	  }, {
	    key: 'setCache',
	    value: function setCache() {
	      var cacheOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	
	      if (!!cacheOptions) {
	        if (force) {
	          this.settings.cache = cacheOptions;
	        } else {
	          this.settings.cache.inherit(cacheOptions);
	        }
	
	        if (!!this.settings.cache) {
	          this.cache.apply(this, [this.bounds.x - 5, this.bounds.y - 5, this.getComputedBounds().width, this.getComputedBounds().height]);
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
	
	  }, {
	    key: 'align',
	    value: function align() {
	      var parentElement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	      var mode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'left top';
	
	      if (!parentElement) {
	        parentElement = this.parent;
	      }
	
	      var parentBounds = parentElement.getBounds();
	      var bounds = this.getBounds();
	      var modes = mode.toArray(' ');
	      var horizontalModes = ['left', 'center', 'right'];
	      var verticalModes = ['top', 'middle', 'bottom'];
	
	      var position = {
	        x: 0,
	        y: 0
	      };
	
	      if (horizontalModes.contains(modes)) {
	        if (modes.contains('left')) {
	          position.inherit({
	            x: bounds.width * 0.5
	          });
	        } else if (modes.contains('center')) {
	          position.inherit({
	            x: parentBounds.width * 0.5
	          });
	        } else if (modes.contains('right')) {
	          position.inherit({
	            x: parentBounds.width - bounds.width * 0.5
	          });
	        }
	      }
	
	      if (verticalModes.contains(modes)) {
	        if (modes.contains('top')) {
	          position.inherit({
	            y: bounds.height * 0.5
	          });
	        } else if (modes.contains('middle')) {
	          position.inherit({
	            y: parentBounds.height * 0.5
	          });
	        } else if (modes.contains('bottom')) {
	          position.inherit({
	            y: parentBounds.height - bounds.height * 0.5
	          });
	        }
	      }
	
	      this.settings.inherit({
	        position: position
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
	
	  }, {
	    key: 'getComputedBounds',
	    value: function getComputedBounds() {
	      var bounds = this.getBounds();
	
	      return {
	        top: this.y - bounds.height * 0.5 * this.settings.scale.y,
	        right: this.x + bounds.width * 0.5 * this.settings.scale.x,
	        bottom: this.y + bounds.height * 0.5 * this.settings.scale.y,
	        left: this.x - bounds.width * 0.5 * this.settings.scale.x,
	        x: this.x,
	        y: this.y,
	        width: bounds.width * this.settings.scale.x,
	        height: bounds.height * this.settings.scale.y
	      };
	    }
	
	    /**
	     * binds all events specified in the settings object for the Element instance, it supports all EaselJS classes events (eg. click, mouseover, etc...)
	     * @memberOf Element
	     * @method bindEvents
	     * @instance
	     */
	
	  }, {
	    key: 'bindEvents',
	    value: function bindEvents() {
	      var _this2 = this;
	
	      if (!!this.settings.events) {
	        this.settings.events.each(function (value, key) {
	          if (Function.isFunction(value)) {
	            _this2.on(key, value);
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
	
	  }, {
	    key: 'init',
	    value: function init() {}
	  }]);
	
	  return Element;
	}(_createEs6Js.Easel.Container);
	
	exports.default = Element;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	!function(root,factory){ true?module.exports=factory():"function"==typeof define&&define.amd?define([],factory):"object"==typeof exports?exports["create-es6-js"]=factory():root["create-es6-js"]=factory()}(this,function(){return function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:!1};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.p="",__webpack_require__(0)}([function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Sound=exports.Preload=exports.Tween=exports.Easel=void 0;var _Easel=__webpack_require__(4),_Easel2=_interopRequireDefault(_Easel),_Tween=__webpack_require__(7),_Tween2=_interopRequireDefault(_Tween),_Preload=__webpack_require__(5),_Preload2=_interopRequireDefault(_Preload),_Sound=__webpack_require__(6),_Sound2=_interopRequireDefault(_Sound),_release=__webpack_require__(3),_release2=_interopRequireDefault(_release),status={initialized:!0,modules:{EaselJS:{version:_Easel2.default.version,build:_Easel2.default.buildDate},TweenJS:{version:_Tween2.default.version,build:_Tween2.default.buildDate},PreloadJS:{version:_Preload2.default.version,build:_Preload2.default.buildDate},SoundJS:{version:_Sound2.default.version,build:_Sound2.default.buildDate}},version:_release2.default.version,build:_release2.default.build};console.log("Create JS ES6 initialized",status);var create={Easel:_Easel2.default,Tween:_Tween2.default,Preload:_Preload2.default,Sound:_Sound2.default,status:status};exports.default=create,exports.Easel=_Easel2.default,exports.Tween=_Tween2.default,exports.Preload=_Preload2.default,exports.Sound=_Sound2.default},function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_RESULT__;(function(module,global){var scope="undefined"==typeof window?this:window;scope.createjs=scope.createjs||{},createjs.extend=function(subclass,superclass){"use strict";function o(){this.constructor=subclass}return o.prototype=superclass.prototype,subclass.prototype=new o},createjs.promote=function(subclass,prefix){"use strict";var subP=subclass.prototype,supP=Object.getPrototypeOf&&Object.getPrototypeOf(subP)||subP.__proto__;if(supP){subP[(prefix+="_")+"constructor"]=supP.constructor;for(var n in supP)subP.hasOwnProperty(n)&&"function"==typeof supP[n]&&(subP[prefix+n]=supP[n])}return subclass},createjs.indexOf=function(array,searchElement){"use strict";for(var i=0,l=array.length;i<l;i++)if(searchElement===array[i])return i;return-1},function(){"use strict";function Event(type,bubbles,cancelable){this.type=type,this.target=null,this.currentTarget=null,this.eventPhase=0,this.bubbles=!!bubbles,this.cancelable=!!cancelable,this.timeStamp=(new Date).getTime(),this.defaultPrevented=!1,this.propagationStopped=!1,this.immediatePropagationStopped=!1,this.removed=!1}var p=Event.prototype;p.preventDefault=function(){this.defaultPrevented=this.cancelable&&!0},p.stopPropagation=function(){this.propagationStopped=!0},p.stopImmediatePropagation=function(){this.immediatePropagationStopped=this.propagationStopped=!0},p.remove=function(){this.removed=!0},p.clone=function(){return new Event(this.type,this.bubbles,this.cancelable)},p.set=function(props){for(var n in props)this[n]=props[n];return this},p.toString=function(){return"[Event (type="+this.type+")]"},createjs.Event=Event}(),function(){"use strict";function EventDispatcher(){this._listeners=null,this._captureListeners=null}var p=EventDispatcher.prototype;EventDispatcher.initialize=function(target){target.addEventListener=p.addEventListener,target.on=p.on,target.removeEventListener=target.off=p.removeEventListener,target.removeAllEventListeners=p.removeAllEventListeners,target.hasEventListener=p.hasEventListener,target.dispatchEvent=p.dispatchEvent,target._dispatchEvent=p._dispatchEvent,target.willTrigger=p.willTrigger},p.addEventListener=function(type,listener,useCapture){var listeners;listeners=useCapture?this._captureListeners=this._captureListeners||{}:this._listeners=this._listeners||{};var arr=listeners[type];return arr&&this.removeEventListener(type,listener,useCapture),arr=listeners[type],arr?arr.push(listener):listeners[type]=[listener],listener},p.on=function(type,listener,scope,once,data,useCapture){return listener.handleEvent&&(scope=scope||listener,listener=listener.handleEvent),scope=scope||this,this.addEventListener(type,function(evt){listener.call(scope,evt,data),once&&evt.remove()},useCapture)},p.removeEventListener=function(type,listener,useCapture){var listeners=useCapture?this._captureListeners:this._listeners;if(listeners){var arr=listeners[type];if(arr)for(var i=0,l=arr.length;i<l;i++)if(arr[i]==listener){1==l?delete listeners[type]:arr.splice(i,1);break}}},p.off=p.removeEventListener,p.removeAllEventListeners=function(type){type?(this._listeners&&delete this._listeners[type],this._captureListeners&&delete this._captureListeners[type]):this._listeners=this._captureListeners=null},p.dispatchEvent=function(eventObj,bubbles,cancelable){if("string"==typeof eventObj){var listeners=this._listeners;if(!(bubbles||listeners&&listeners[eventObj]))return!0;eventObj=new createjs.Event(eventObj,bubbles,cancelable)}else eventObj.target&&eventObj.clone&&(eventObj=eventObj.clone());try{eventObj.target=this}catch(e){}if(eventObj.bubbles&&this.parent){for(var top=this,list=[top];top.parent;)list.push(top=top.parent);var i,l=list.length;for(i=l-1;i>=0&&!eventObj.propagationStopped;i--)list[i]._dispatchEvent(eventObj,1+(0==i));for(i=1;i<l&&!eventObj.propagationStopped;i++)list[i]._dispatchEvent(eventObj,3)}else this._dispatchEvent(eventObj,2);return!eventObj.defaultPrevented},p.hasEventListener=function(type){var listeners=this._listeners,captureListeners=this._captureListeners;return!!(listeners&&listeners[type]||captureListeners&&captureListeners[type])},p.willTrigger=function(type){for(var o=this;o;){if(o.hasEventListener(type))return!0;o=o.parent}return!1},p.toString=function(){return"[EventDispatcher]"},p._dispatchEvent=function(eventObj,eventPhase){var l,listeners=1==eventPhase?this._captureListeners:this._listeners;if(eventObj&&listeners){var arr=listeners[eventObj.type];if(!arr||!(l=arr.length))return;try{eventObj.currentTarget=this}catch(e){}try{eventObj.eventPhase=eventPhase}catch(e){}eventObj.removed=!1,arr=arr.slice();for(var i=0;i<l&&!eventObj.immediatePropagationStopped;i++){var o=arr[i];o.handleEvent?o.handleEvent(eventObj):o(eventObj),eventObj.removed&&(this.off(eventObj.type,o,1==eventPhase),eventObj.removed=!1)}}},createjs.EventDispatcher=EventDispatcher}(),function(){"use strict";function Ticker(){throw"Ticker cannot be instantiated."}Ticker.RAF_SYNCHED="synched",Ticker.RAF="raf",Ticker.TIMEOUT="timeout",Ticker.useRAF=!1,Ticker.timingMode=null,Ticker.maxDelta=0,Ticker.paused=!1,Ticker.removeEventListener=null,Ticker.removeAllEventListeners=null,Ticker.dispatchEvent=null,Ticker.hasEventListener=null,Ticker._listeners=null,createjs.EventDispatcher.initialize(Ticker),Ticker._addEventListener=Ticker.addEventListener,Ticker.addEventListener=function(){return!Ticker._inited&&Ticker.init(),Ticker._addEventListener.apply(Ticker,arguments)},Ticker._inited=!1,Ticker._startTime=0,Ticker._pausedTime=0,Ticker._ticks=0,Ticker._pausedTicks=0,Ticker._interval=50,Ticker._lastTime=0,Ticker._times=null,Ticker._tickTimes=null,Ticker._timerId=null,Ticker._raf=!0,Ticker.setInterval=function(interval){Ticker._interval=interval,Ticker._inited&&Ticker._setupTick()},Ticker.getInterval=function(){return Ticker._interval},Ticker.setFPS=function(value){Ticker.setInterval(1e3/value)},Ticker.getFPS=function(){return 1e3/Ticker._interval};try{Object.defineProperties(Ticker,{interval:{get:Ticker.getInterval,set:Ticker.setInterval},framerate:{get:Ticker.getFPS,set:Ticker.setFPS}})}catch(e){console.log(e)}Ticker.init=function(){Ticker._inited||(Ticker._inited=!0,Ticker._times=[],Ticker._tickTimes=[],Ticker._startTime=Ticker._getTime(),Ticker._times.push(Ticker._lastTime=0),Ticker.interval=Ticker._interval)},Ticker.reset=function(){if(Ticker._raf){var f=window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||window.msCancelAnimationFrame;f&&f(Ticker._timerId)}else clearTimeout(Ticker._timerId);Ticker.removeAllEventListeners("tick"),Ticker._timerId=Ticker._times=Ticker._tickTimes=null,Ticker._startTime=Ticker._lastTime=Ticker._ticks=Ticker._pausedTime=0,Ticker._inited=!1},Ticker.getMeasuredTickTime=function(ticks){var ttl=0,times=Ticker._tickTimes;if(!times||times.length<1)return-1;ticks=Math.min(times.length,ticks||0|Ticker.getFPS());for(var i=0;i<ticks;i++)ttl+=times[i];return ttl/ticks},Ticker.getMeasuredFPS=function(ticks){var times=Ticker._times;return!times||times.length<2?-1:(ticks=Math.min(times.length-1,ticks||0|Ticker.getFPS()),1e3/((times[0]-times[ticks])/ticks))},Ticker.setPaused=function(value){Ticker.paused=value},Ticker.getPaused=function(){return Ticker.paused},Ticker.getTime=function(runTime){return Ticker._startTime?Ticker._getTime()-(runTime?Ticker._pausedTime:0):-1},Ticker.getEventTime=function(runTime){return Ticker._startTime?(Ticker._lastTime||Ticker._startTime)-(runTime?Ticker._pausedTime:0):-1},Ticker.getTicks=function(pauseable){return Ticker._ticks-(pauseable?Ticker._pausedTicks:0)},Ticker._handleSynch=function(){Ticker._timerId=null,Ticker._setupTick(),Ticker._getTime()-Ticker._lastTime>=.97*(Ticker._interval-1)&&Ticker._tick()},Ticker._handleRAF=function(){Ticker._timerId=null,Ticker._setupTick(),Ticker._tick()},Ticker._handleTimeout=function(){Ticker._timerId=null,Ticker._setupTick(),Ticker._tick()},Ticker._setupTick=function(){if(null==Ticker._timerId){var mode=Ticker.timingMode||Ticker.useRAF&&Ticker.RAF_SYNCHED;if(mode==Ticker.RAF_SYNCHED||mode==Ticker.RAF){var f=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame;if(f)return Ticker._timerId=f(mode==Ticker.RAF?Ticker._handleRAF:Ticker._handleSynch),void(Ticker._raf=!0)}Ticker._raf=!1,Ticker._timerId=setTimeout(Ticker._handleTimeout,Ticker._interval)}},Ticker._tick=function(){var paused=Ticker.paused,time=Ticker._getTime(),elapsedTime=time-Ticker._lastTime;if(Ticker._lastTime=time,Ticker._ticks++,paused&&(Ticker._pausedTicks++,Ticker._pausedTime+=elapsedTime),Ticker.hasEventListener("tick")){var event=new createjs.Event("tick"),maxDelta=Ticker.maxDelta;event.delta=maxDelta&&elapsedTime>maxDelta?maxDelta:elapsedTime,event.paused=paused,event.time=time,event.runTime=time-Ticker._pausedTime,Ticker.dispatchEvent(event)}for(Ticker._tickTimes.unshift(Ticker._getTime()-time);Ticker._tickTimes.length>100;)Ticker._tickTimes.pop();for(Ticker._times.unshift(time);Ticker._times.length>100;)Ticker._times.pop()};var now=window.performance&&(performance.now||performance.mozNow||performance.msNow||performance.oNow||performance.webkitNow);Ticker._getTime=function(){return(now&&now.call(performance)||(new Date).getTime())-Ticker._startTime},createjs.Ticker=Ticker}(),function(){"use strict";function UID(){throw"UID cannot be instantiated"}UID._nextID=0,UID.get=function(){return UID._nextID++},createjs.UID=UID}(),function(){"use strict";function MouseEvent(type,bubbles,cancelable,stageX,stageY,nativeEvent,pointerID,primary,rawX,rawY,relatedTarget){this.Event_constructor(type,bubbles,cancelable),this.stageX=stageX,this.stageY=stageY,this.rawX=null==rawX?stageX:rawX,this.rawY=null==rawY?stageY:rawY,this.nativeEvent=nativeEvent,this.pointerID=pointerID,this.primary=!!primary,this.relatedTarget=relatedTarget}var p=createjs.extend(MouseEvent,createjs.Event);p._get_localX=function(){return this.currentTarget.globalToLocal(this.rawX,this.rawY).x},p._get_localY=function(){return this.currentTarget.globalToLocal(this.rawX,this.rawY).y},p._get_isTouch=function(){return this.pointerID!==-1};try{Object.defineProperties(p,{localX:{get:p._get_localX},localY:{get:p._get_localY},isTouch:{get:p._get_isTouch}})}catch(e){}p.clone=function(){return new MouseEvent(this.type,this.bubbles,this.cancelable,this.stageX,this.stageY,this.nativeEvent,this.pointerID,this.primary,this.rawX,this.rawY)},p.toString=function(){return"[MouseEvent (type="+this.type+" stageX="+this.stageX+" stageY="+this.stageY+")]"},createjs.MouseEvent=createjs.promote(MouseEvent,"Event")}(),function(){"use strict";function Matrix2D(a,b,c,d,tx,ty){this.setValues(a,b,c,d,tx,ty)}var p=Matrix2D.prototype;Matrix2D.DEG_TO_RAD=Math.PI/180,Matrix2D.identity=null,p.setValues=function(a,b,c,d,tx,ty){return this.a=null==a?1:a,this.b=b||0,this.c=c||0,this.d=null==d?1:d,this.tx=tx||0,this.ty=ty||0,this},p.append=function(a,b,c,d,tx,ty){var a1=this.a,b1=this.b,c1=this.c,d1=this.d;return 1==a&&0==b&&0==c&&1==d||(this.a=a1*a+c1*b,this.b=b1*a+d1*b,this.c=a1*c+c1*d,this.d=b1*c+d1*d),this.tx=a1*tx+c1*ty+this.tx,this.ty=b1*tx+d1*ty+this.ty,this},p.prepend=function(a,b,c,d,tx,ty){var a1=this.a,c1=this.c,tx1=this.tx;return this.a=a*a1+c*this.b,this.b=b*a1+d*this.b,this.c=a*c1+c*this.d,this.d=b*c1+d*this.d,this.tx=a*tx1+c*this.ty+tx,this.ty=b*tx1+d*this.ty+ty,this},p.appendMatrix=function(matrix){return this.append(matrix.a,matrix.b,matrix.c,matrix.d,matrix.tx,matrix.ty)},p.prependMatrix=function(matrix){return this.prepend(matrix.a,matrix.b,matrix.c,matrix.d,matrix.tx,matrix.ty)},p.appendTransform=function(x,y,scaleX,scaleY,rotation,skewX,skewY,regX,regY){if(rotation%360)var r=rotation*Matrix2D.DEG_TO_RAD,cos=Math.cos(r),sin=Math.sin(r);else cos=1,sin=0;return skewX||skewY?(skewX*=Matrix2D.DEG_TO_RAD,skewY*=Matrix2D.DEG_TO_RAD,this.append(Math.cos(skewY),Math.sin(skewY),-Math.sin(skewX),Math.cos(skewX),x,y),this.append(cos*scaleX,sin*scaleX,-sin*scaleY,cos*scaleY,0,0)):this.append(cos*scaleX,sin*scaleX,-sin*scaleY,cos*scaleY,x,y),(regX||regY)&&(this.tx-=regX*this.a+regY*this.c,this.ty-=regX*this.b+regY*this.d),this},p.prependTransform=function(x,y,scaleX,scaleY,rotation,skewX,skewY,regX,regY){if(rotation%360)var r=rotation*Matrix2D.DEG_TO_RAD,cos=Math.cos(r),sin=Math.sin(r);else cos=1,sin=0;return(regX||regY)&&(this.tx-=regX,this.ty-=regY),skewX||skewY?(skewX*=Matrix2D.DEG_TO_RAD,skewY*=Matrix2D.DEG_TO_RAD,this.prepend(cos*scaleX,sin*scaleX,-sin*scaleY,cos*scaleY,0,0),this.prepend(Math.cos(skewY),Math.sin(skewY),-Math.sin(skewX),Math.cos(skewX),x,y)):this.prepend(cos*scaleX,sin*scaleX,-sin*scaleY,cos*scaleY,x,y),this},p.rotate=function(angle){angle*=Matrix2D.DEG_TO_RAD;var cos=Math.cos(angle),sin=Math.sin(angle),a1=this.a,b1=this.b;return this.a=a1*cos+this.c*sin,this.b=b1*cos+this.d*sin,this.c=-a1*sin+this.c*cos,this.d=-b1*sin+this.d*cos,this},p.skew=function(skewX,skewY){return skewX*=Matrix2D.DEG_TO_RAD,skewY*=Matrix2D.DEG_TO_RAD,this.append(Math.cos(skewY),Math.sin(skewY),-Math.sin(skewX),Math.cos(skewX),0,0),this},p.scale=function(x,y){return this.a*=x,this.b*=x,this.c*=y,this.d*=y,this},p.translate=function(x,y){return this.tx+=this.a*x+this.c*y,this.ty+=this.b*x+this.d*y,this},p.identity=function(){return this.a=this.d=1,this.b=this.c=this.tx=this.ty=0,this},p.invert=function(){var a1=this.a,b1=this.b,c1=this.c,d1=this.d,tx1=this.tx,n=a1*d1-b1*c1;return this.a=d1/n,this.b=-b1/n,this.c=-c1/n,this.d=a1/n,this.tx=(c1*this.ty-d1*tx1)/n,this.ty=-(a1*this.ty-b1*tx1)/n,this},p.isIdentity=function(){return 0===this.tx&&0===this.ty&&1===this.a&&0===this.b&&0===this.c&&1===this.d},p.equals=function(matrix){return this.tx===matrix.tx&&this.ty===matrix.ty&&this.a===matrix.a&&this.b===matrix.b&&this.c===matrix.c&&this.d===matrix.d},p.transformPoint=function(x,y,pt){return pt=pt||{},pt.x=x*this.a+y*this.c+this.tx,pt.y=x*this.b+y*this.d+this.ty,pt},p.decompose=function(target){null==target&&(target={}),target.x=this.tx,target.y=this.ty,target.scaleX=Math.sqrt(this.a*this.a+this.b*this.b),target.scaleY=Math.sqrt(this.c*this.c+this.d*this.d);var skewX=Math.atan2(-this.c,this.d),skewY=Math.atan2(this.b,this.a),delta=Math.abs(1-skewX/skewY);return delta<1e-5?(target.rotation=skewY/Matrix2D.DEG_TO_RAD,this.a<0&&this.d>=0&&(target.rotation+=target.rotation<=0?180:-180),target.skewX=target.skewY=0):(target.skewX=skewX/Matrix2D.DEG_TO_RAD,target.skewY=skewY/Matrix2D.DEG_TO_RAD),target},p.copy=function(matrix){return this.setValues(matrix.a,matrix.b,matrix.c,matrix.d,matrix.tx,matrix.ty)},p.clone=function(){return new Matrix2D(this.a,this.b,this.c,this.d,this.tx,this.ty)},p.toString=function(){return"[Matrix2D (a="+this.a+" b="+this.b+" c="+this.c+" d="+this.d+" tx="+this.tx+" ty="+this.ty+")]"},Matrix2D.identity=new Matrix2D,createjs.Matrix2D=Matrix2D}(),function(){"use strict";function DisplayProps(visible,alpha,shadow,compositeOperation,matrix){this.setValues(visible,alpha,shadow,compositeOperation,matrix)}var p=DisplayProps.prototype;p.setValues=function(visible,alpha,shadow,compositeOperation,matrix){return this.visible=null==visible||!!visible,this.alpha=null==alpha?1:alpha,this.shadow=shadow,this.compositeOperation=compositeOperation,this.matrix=matrix||this.matrix&&this.matrix.identity()||new createjs.Matrix2D,this},p.append=function(visible,alpha,shadow,compositeOperation,matrix){return this.alpha*=alpha,this.shadow=shadow||this.shadow,this.compositeOperation=compositeOperation||this.compositeOperation,this.visible=this.visible&&visible,matrix&&this.matrix.appendMatrix(matrix),this},p.prepend=function(visible,alpha,shadow,compositeOperation,matrix){return this.alpha*=alpha,this.shadow=this.shadow||shadow,this.compositeOperation=this.compositeOperation||compositeOperation,this.visible=this.visible&&visible,matrix&&this.matrix.prependMatrix(matrix),this},p.identity=function(){return this.visible=!0,this.alpha=1,this.shadow=this.compositeOperation=null,this.matrix.identity(),this},p.clone=function(){return new DisplayProps(this.alpha,this.shadow,this.compositeOperation,this.visible,this.matrix.clone())},createjs.DisplayProps=DisplayProps}(),function(){"use strict";function Point(x,y){this.setValues(x,y)}var p=Point.prototype;p.setValues=function(x,y){return this.x=x||0,this.y=y||0,this},p.copy=function(point){return this.x=point.x,this.y=point.y,this},p.clone=function(){return new Point(this.x,this.y)},p.toString=function(){return"[Point (x="+this.x+" y="+this.y+")]"},createjs.Point=Point}(),function(){"use strict";function Rectangle(x,y,width,height){this.setValues(x,y,width,height)}var p=Rectangle.prototype;p.setValues=function(x,y,width,height){return this.x=x||0,this.y=y||0,this.width=width||0,this.height=height||0,this},p.extend=function(x,y,width,height){return width=width||0,height=height||0,x+width>this.x+this.width&&(this.width=x+width-this.x),y+height>this.y+this.height&&(this.height=y+height-this.y),x<this.x&&(this.width+=this.x-x,this.x=x),y<this.y&&(this.height+=this.y-y,this.y=y),this},p.pad=function(top,left,bottom,right){return this.x-=left,this.y-=top,this.width+=left+right,this.height+=top+bottom,this},p.copy=function(rectangle){return this.setValues(rectangle.x,rectangle.y,rectangle.width,rectangle.height)},p.contains=function(x,y,width,height){return width=width||0,height=height||0,x>=this.x&&x+width<=this.x+this.width&&y>=this.y&&y+height<=this.y+this.height},p.union=function(rect){return this.clone().extend(rect.x,rect.y,rect.width,rect.height)},p.intersection=function(rect){var x1=rect.x,y1=rect.y,x2=x1+rect.width,y2=y1+rect.height;return this.x>x1&&(x1=this.x),this.y>y1&&(y1=this.y),this.x+this.width<x2&&(x2=this.x+this.width),this.y+this.height<y2&&(y2=this.y+this.height),x2<=x1||y2<=y1?null:new Rectangle(x1,y1,x2-x1,y2-y1)},p.intersects=function(rect){return rect.x<=this.x+this.width&&this.x<=rect.x+rect.width&&rect.y<=this.y+this.height&&this.y<=rect.y+rect.height},p.isEmpty=function(){return this.width<=0||this.height<=0},p.clone=function(){return new Rectangle(this.x,this.y,this.width,this.height)},p.toString=function(){return"[Rectangle (x="+this.x+" y="+this.y+" width="+this.width+" height="+this.height+")]"},createjs.Rectangle=Rectangle}(),function(){"use strict";function ButtonHelper(target,outLabel,overLabel,downLabel,play,hitArea,hitLabel){target.addEventListener&&(this.target=target,this.overLabel=null==overLabel?"over":overLabel,this.outLabel=null==outLabel?"out":outLabel,this.downLabel=null==downLabel?"down":downLabel,this.play=play,this._isPressed=!1,this._isOver=!1,this._enabled=!1,target.mouseChildren=!1,this.enabled=!0,this.handleEvent({}),hitArea&&(hitLabel&&(hitArea.actionsEnabled=!1,hitArea.gotoAndStop&&hitArea.gotoAndStop(hitLabel)),target.hitArea=hitArea))}var p=ButtonHelper.prototype;p.setEnabled=function(value){if(value!=this._enabled){var o=this.target;this._enabled=value,value?(o.cursor="pointer",o.addEventListener("rollover",this),o.addEventListener("rollout",this),o.addEventListener("mousedown",this),o.addEventListener("pressup",this),o._reset&&(o.__reset=o._reset,o._reset=this._reset)):(o.cursor=null,o.removeEventListener("rollover",this),o.removeEventListener("rollout",this),o.removeEventListener("mousedown",this),o.removeEventListener("pressup",this),o.__reset&&(o._reset=o.__reset,delete o.__reset))}},p.getEnabled=function(){return this._enabled};try{Object.defineProperties(p,{enabled:{get:p.getEnabled,set:p.setEnabled}})}catch(e){}p.toString=function(){return"[ButtonHelper]"},p.handleEvent=function(evt){var label,t=this.target,type=evt.type;"mousedown"==type?(this._isPressed=!0,label=this.downLabel):"pressup"==type?(this._isPressed=!1,label=this._isOver?this.overLabel:this.outLabel):"rollover"==type?(this._isOver=!0,label=this._isPressed?this.downLabel:this.overLabel):(this._isOver=!1,label=this._isPressed?this.overLabel:this.outLabel),this.play?t.gotoAndPlay&&t.gotoAndPlay(label):t.gotoAndStop&&t.gotoAndStop(label)},p._reset=function(){var p=this.paused;this.__reset(),this.paused=p},createjs.ButtonHelper=ButtonHelper}(),function(){"use strict";function Shadow(color,offsetX,offsetY,blur){this.color=color||"black",this.offsetX=offsetX||0,this.offsetY=offsetY||0,this.blur=blur||0}var p=Shadow.prototype;Shadow.identity=new Shadow("transparent",0,0,0),p.toString=function(){return"[Shadow]"},p.clone=function(){return new Shadow(this.color,this.offsetX,this.offsetY,this.blur)},createjs.Shadow=Shadow}(),function(){"use strict";function SpriteSheet(data){this.EventDispatcher_constructor(),this.complete=!0,this.framerate=0,this._animations=null,this._frames=null,this._images=null,this._data=null,this._loadCount=0,this._frameHeight=0,this._frameWidth=0,this._numFrames=0,this._regX=0,this._regY=0,this._spacing=0,this._margin=0,this._parseData(data)}var p=createjs.extend(SpriteSheet,createjs.EventDispatcher);p.getAnimations=function(){return this._animations.slice()};try{Object.defineProperties(p,{animations:{get:p.getAnimations}})}catch(e){}p.getNumFrames=function(animation){if(null==animation)return this._frames?this._frames.length:this._numFrames||0;var data=this._data[animation];return null==data?0:data.frames.length},p.getAnimation=function(name){return this._data[name]},p.getFrame=function(frameIndex){var frame;return this._frames&&(frame=this._frames[frameIndex])?frame:null},p.getFrameBounds=function(frameIndex,rectangle){var frame=this.getFrame(frameIndex);return frame?(rectangle||new createjs.Rectangle).setValues(-frame.regX,-frame.regY,frame.rect.width,frame.rect.height):null},p.toString=function(){return"[SpriteSheet]"},p.clone=function(){throw"SpriteSheet cannot be cloned."},p._parseData=function(data){var i,l,o,a;if(null!=data){if(this.framerate=data.framerate||0,data.images&&(l=data.images.length)>0)for(a=this._images=[],i=0;i<l;i++){var img=data.images[i];if("string"==typeof img){var src=img;img=document.createElement("img"),img.src=src}a.push(img),img.getContext||img.naturalWidth||(this._loadCount++,this.complete=!1,function(o,src){img.onload=function(){o._handleImageLoad(src)}}(this,src),function(o,src){img.onerror=function(){o._handleImageError(src)}}(this,src))}if(null==data.frames);else if(Array.isArray(data.frames))for(this._frames=[],a=data.frames,i=0,l=a.length;i<l;i++){var arr=a[i];this._frames.push({image:this._images[arr[4]?arr[4]:0],rect:new createjs.Rectangle(arr[0],arr[1],arr[2],arr[3]),regX:arr[5]||0,regY:arr[6]||0})}else o=data.frames,this._frameWidth=o.width,this._frameHeight=o.height,this._regX=o.regX||0,this._regY=o.regY||0,this._spacing=o.spacing||0,this._margin=o.margin||0,this._numFrames=o.count,0==this._loadCount&&this._calculateFrames();if(this._animations=[],null!=(o=data.animations)){this._data={};var name;for(name in o){var anim={name:name},obj=o[name];if("number"==typeof obj)a=anim.frames=[obj];else if(Array.isArray(obj))if(1==obj.length)anim.frames=[obj[0]];else for(anim.speed=obj[3],anim.next=obj[2],a=anim.frames=[],i=obj[0];i<=obj[1];i++)a.push(i);else{anim.speed=obj.speed,anim.next=obj.next;var frames=obj.frames;a=anim.frames="number"==typeof frames?[frames]:frames.slice(0)}anim.next!==!0&&void 0!==anim.next||(anim.next=name),(anim.next===!1||a.length<2&&anim.next==name)&&(anim.next=null),anim.speed||(anim.speed=1),this._animations.push(name),this._data[name]=anim}}}},p._handleImageLoad=function(src){0==--this._loadCount&&(this._calculateFrames(),this.complete=!0,this.dispatchEvent("complete"))},p._handleImageError=function(src){var errorEvent=new createjs.Event("error");errorEvent.src=src,this.dispatchEvent(errorEvent),0==--this._loadCount&&this.dispatchEvent("complete")},p._calculateFrames=function(){if(!this._frames&&0!=this._frameWidth){this._frames=[];var maxFrames=this._numFrames||1e5,frameCount=0,frameWidth=this._frameWidth,frameHeight=this._frameHeight,spacing=this._spacing,margin=this._margin;imgLoop:for(var i=0,imgs=this._images;i<imgs.length;i++)for(var img=imgs[i],imgW=img.width,imgH=img.height,y=margin;y<=imgH-margin-frameHeight;){for(var x=margin;x<=imgW-margin-frameWidth;){if(frameCount>=maxFrames)break imgLoop;frameCount++,this._frames.push({image:img,rect:new createjs.Rectangle(x,y,frameWidth,frameHeight),regX:this._regX,regY:this._regY}),x+=frameWidth+spacing}y+=frameHeight+spacing}this._numFrames=frameCount}},createjs.SpriteSheet=createjs.promote(SpriteSheet,"EventDispatcher")}(),function(){"use strict";function Graphics(){this.command=null,this._stroke=null,this._strokeStyle=null,this._oldStrokeStyle=null,this._strokeDash=null,this._oldStrokeDash=null,this._strokeIgnoreScale=!1,this._fill=null,this._instructions=[],this._commitIndex=0,this._activeInstructions=[],this._dirty=!1,this._storeIndex=0,this.clear()}var p=Graphics.prototype,G=Graphics;Graphics.getRGB=function(r,g,b,alpha){return null!=r&&null==b&&(alpha=g,b=255&r,g=r>>8&255,r=r>>16&255),null==alpha?"rgb("+r+","+g+","+b+")":"rgba("+r+","+g+","+b+","+alpha+")"},Graphics.getHSL=function(hue,saturation,lightness,alpha){return null==alpha?"hsl("+hue%360+","+saturation+"%,"+lightness+"%)":"hsla("+hue%360+","+saturation+"%,"+lightness+"%,"+alpha+")"},Graphics.BASE_64={A:0,B:1,C:2,D:3,E:4,F:5,G:6,H:7,I:8,J:9,K:10,L:11,M:12,N:13,O:14,P:15,Q:16,R:17,S:18,T:19,U:20,V:21,W:22,X:23,Y:24,Z:25,a:26,b:27,c:28,d:29,e:30,f:31,g:32,h:33,i:34,j:35,k:36,l:37,m:38,n:39,o:40,p:41,q:42,r:43,s:44,t:45,u:46,v:47,w:48,x:49,y:50,z:51,0:52,1:53,2:54,3:55,4:56,5:57,6:58,7:59,8:60,9:61,"+":62,"/":63},Graphics.STROKE_CAPS_MAP=["butt","round","square"],Graphics.STROKE_JOINTS_MAP=["miter","round","bevel"];var canvas=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas");canvas.getContext&&(Graphics._ctx=canvas.getContext("2d"),canvas.width=canvas.height=1),p.getInstructions=function(){return this._updateInstructions(),this._instructions};try{Object.defineProperties(p,{instructions:{get:p.getInstructions}})}catch(e){}p.isEmpty=function(){return!(this._instructions.length||this._activeInstructions.length)},p.draw=function(ctx,data){this._updateInstructions();for(var instr=this._instructions,i=this._storeIndex,l=instr.length;i<l;i++)instr[i].exec(ctx,data)},p.drawAsPath=function(ctx){this._updateInstructions();for(var instr,instrs=this._instructions,i=this._storeIndex,l=instrs.length;i<l;i++)(instr=instrs[i]).path!==!1&&instr.exec(ctx)},p.moveTo=function(x,y){return this.append(new G.MoveTo(x,y),!0)},p.lineTo=function(x,y){return this.append(new G.LineTo(x,y))},p.arcTo=function(x1,y1,x2,y2,radius){return this.append(new G.ArcTo(x1,y1,x2,y2,radius))},p.arc=function(x,y,radius,startAngle,endAngle,anticlockwise){return this.append(new G.Arc(x,y,radius,startAngle,endAngle,anticlockwise))},p.quadraticCurveTo=function(cpx,cpy,x,y){return this.append(new G.QuadraticCurveTo(cpx,cpy,x,y))},p.bezierCurveTo=function(cp1x,cp1y,cp2x,cp2y,x,y){return this.append(new G.BezierCurveTo(cp1x,cp1y,cp2x,cp2y,x,y))},p.rect=function(x,y,w,h){return this.append(new G.Rect(x,y,w,h))},p.closePath=function(){return this._activeInstructions.length?this.append(new G.ClosePath):this},p.clear=function(){return this._instructions.length=this._activeInstructions.length=this._commitIndex=0,this._strokeStyle=this._oldStrokeStyle=this._stroke=this._fill=this._strokeDash=this._oldStrokeDash=null,this._dirty=this._strokeIgnoreScale=!1,this},p.beginFill=function(color){return this._setFill(color?new G.Fill(color):null)},p.beginLinearGradientFill=function(colors,ratios,x0,y0,x1,y1){return this._setFill((new G.Fill).linearGradient(colors,ratios,x0,y0,x1,y1))},p.beginRadialGradientFill=function(colors,ratios,x0,y0,r0,x1,y1,r1){return this._setFill((new G.Fill).radialGradient(colors,ratios,x0,y0,r0,x1,y1,r1))},p.beginBitmapFill=function(image,repetition,matrix){return this._setFill(new G.Fill(null,matrix).bitmap(image,repetition))},p.endFill=function(){return this.beginFill()},p.setStrokeStyle=function(thickness,caps,joints,miterLimit,ignoreScale){return this._updateInstructions(!0),this._strokeStyle=this.command=new G.StrokeStyle(thickness,caps,joints,miterLimit,ignoreScale),this._stroke&&(this._stroke.ignoreScale=ignoreScale),this._strokeIgnoreScale=ignoreScale,this},p.setStrokeDash=function(segments,offset){return this._updateInstructions(!0),this._strokeDash=this.command=new G.StrokeDash(segments,offset),this},p.beginStroke=function(color){return this._setStroke(color?new G.Stroke(color):null)},p.beginLinearGradientStroke=function(colors,ratios,x0,y0,x1,y1){return this._setStroke((new G.Stroke).linearGradient(colors,ratios,x0,y0,x1,y1))},p.beginRadialGradientStroke=function(colors,ratios,x0,y0,r0,x1,y1,r1){return this._setStroke((new G.Stroke).radialGradient(colors,ratios,x0,y0,r0,x1,y1,r1))},p.beginBitmapStroke=function(image,repetition){return this._setStroke((new G.Stroke).bitmap(image,repetition))},p.endStroke=function(){return this.beginStroke()},p.curveTo=p.quadraticCurveTo,p.drawRect=p.rect,p.drawRoundRect=function(x,y,w,h,radius){return this.drawRoundRectComplex(x,y,w,h,radius,radius,radius,radius)},p.drawRoundRectComplex=function(x,y,w,h,radiusTL,radiusTR,radiusBR,radiusBL){return this.append(new G.RoundRect(x,y,w,h,radiusTL,radiusTR,radiusBR,radiusBL))},p.drawCircle=function(x,y,radius){return this.append(new G.Circle(x,y,radius))},p.drawEllipse=function(x,y,w,h){return this.append(new G.Ellipse(x,y,w,h))},p.drawPolyStar=function(x,y,radius,sides,pointSize,angle){return this.append(new G.PolyStar(x,y,radius,sides,pointSize,angle))},p.append=function(command,clean){return this._activeInstructions.push(command),this.command=command,clean||(this._dirty=!0),this},p.decodePath=function(str){for(var instructions=[this.moveTo,this.lineTo,this.quadraticCurveTo,this.bezierCurveTo,this.closePath],paramCount=[2,2,4,6,0],i=0,l=str.length,params=[],x=0,y=0,base64=Graphics.BASE_64;i<l;){var c=str.charAt(i),n=base64[c],fi=n>>3,f=instructions[fi];if(!f||3&n)throw"bad path data (@"+i+"): "+c;
	var pl=paramCount[fi];fi||(x=y=0),params.length=0,i++;for(var charCount=(n>>2&1)+2,p=0;p<pl;p++){var num=base64[str.charAt(i)],sign=num>>5?-1:1;num=(31&num)<<6|base64[str.charAt(i+1)],3==charCount&&(num=num<<6|base64[str.charAt(i+2)]),num=sign*num/10,p%2?x=num+=x:y=num+=y,params[p]=num,i+=charCount}f.apply(this,params)}return this},p.store=function(){return this._updateInstructions(!0),this._storeIndex=this._instructions.length,this},p.unstore=function(){return this._storeIndex=0,this},p.clone=function(){var o=new Graphics;return o.command=this.command,o._stroke=this._stroke,o._strokeStyle=this._strokeStyle,o._strokeDash=this._strokeDash,o._strokeIgnoreScale=this._strokeIgnoreScale,o._fill=this._fill,o._instructions=this._instructions.slice(),o._commitIndex=this._commitIndex,o._activeInstructions=this._activeInstructions.slice(),o._dirty=this._dirty,o._storeIndex=this._storeIndex,o},p.toString=function(){return"[Graphics]"},p.mt=p.moveTo,p.lt=p.lineTo,p.at=p.arcTo,p.bt=p.bezierCurveTo,p.qt=p.quadraticCurveTo,p.a=p.arc,p.r=p.rect,p.cp=p.closePath,p.c=p.clear,p.f=p.beginFill,p.lf=p.beginLinearGradientFill,p.rf=p.beginRadialGradientFill,p.bf=p.beginBitmapFill,p.ef=p.endFill,p.ss=p.setStrokeStyle,p.sd=p.setStrokeDash,p.s=p.beginStroke,p.ls=p.beginLinearGradientStroke,p.rs=p.beginRadialGradientStroke,p.bs=p.beginBitmapStroke,p.es=p.endStroke,p.dr=p.drawRect,p.rr=p.drawRoundRect,p.rc=p.drawRoundRectComplex,p.dc=p.drawCircle,p.de=p.drawEllipse,p.dp=p.drawPolyStar,p.p=p.decodePath,p._updateInstructions=function(commit){var instr=this._instructions,active=this._activeInstructions,commitIndex=this._commitIndex;if(this._dirty&&active.length){instr.length=commitIndex,instr.push(Graphics.beginCmd);var l=active.length,ll=instr.length;instr.length=ll+l;for(var i=0;i<l;i++)instr[i+ll]=active[i];this._fill&&instr.push(this._fill),this._stroke&&(this._strokeDash!==this._oldStrokeDash&&(this._oldStrokeDash=this._strokeDash,instr.push(this._strokeDash)),this._strokeStyle!==this._oldStrokeStyle&&(this._oldStrokeStyle=this._strokeStyle,instr.push(this._strokeStyle)),instr.push(this._stroke)),this._dirty=!1}commit&&(active.length=0,this._commitIndex=instr.length)},p._setFill=function(fill){return this._updateInstructions(!0),this.command=this._fill=fill,this},p._setStroke=function(stroke){return this._updateInstructions(!0),(this.command=this._stroke=stroke)&&(stroke.ignoreScale=this._strokeIgnoreScale),this},(G.LineTo=function(x,y){this.x=x,this.y=y}).prototype.exec=function(ctx){ctx.lineTo(this.x,this.y)},(G.MoveTo=function(x,y){this.x=x,this.y=y}).prototype.exec=function(ctx){ctx.moveTo(this.x,this.y)},(G.ArcTo=function(x1,y1,x2,y2,radius){this.x1=x1,this.y1=y1,this.x2=x2,this.y2=y2,this.radius=radius}).prototype.exec=function(ctx){ctx.arcTo(this.x1,this.y1,this.x2,this.y2,this.radius)},(G.Arc=function(x,y,radius,startAngle,endAngle,anticlockwise){this.x=x,this.y=y,this.radius=radius,this.startAngle=startAngle,this.endAngle=endAngle,this.anticlockwise=!!anticlockwise}).prototype.exec=function(ctx){ctx.arc(this.x,this.y,this.radius,this.startAngle,this.endAngle,this.anticlockwise)},(G.QuadraticCurveTo=function(cpx,cpy,x,y){this.cpx=cpx,this.cpy=cpy,this.x=x,this.y=y}).prototype.exec=function(ctx){ctx.quadraticCurveTo(this.cpx,this.cpy,this.x,this.y)},(G.BezierCurveTo=function(cp1x,cp1y,cp2x,cp2y,x,y){this.cp1x=cp1x,this.cp1y=cp1y,this.cp2x=cp2x,this.cp2y=cp2y,this.x=x,this.y=y}).prototype.exec=function(ctx){ctx.bezierCurveTo(this.cp1x,this.cp1y,this.cp2x,this.cp2y,this.x,this.y)},(G.Rect=function(x,y,w,h){this.x=x,this.y=y,this.w=w,this.h=h}).prototype.exec=function(ctx){ctx.rect(this.x,this.y,this.w,this.h)},(G.ClosePath=function(){}).prototype.exec=function(ctx){ctx.closePath()},(G.BeginPath=function(){}).prototype.exec=function(ctx){ctx.beginPath()},p=(G.Fill=function(style,matrix){this.style=style,this.matrix=matrix}).prototype,p.exec=function(ctx){if(this.style){ctx.fillStyle=this.style;var mtx=this.matrix;mtx&&(ctx.save(),ctx.transform(mtx.a,mtx.b,mtx.c,mtx.d,mtx.tx,mtx.ty)),ctx.fill(),mtx&&ctx.restore()}},p.linearGradient=function(colors,ratios,x0,y0,x1,y1){for(var o=this.style=Graphics._ctx.createLinearGradient(x0,y0,x1,y1),i=0,l=colors.length;i<l;i++)o.addColorStop(ratios[i],colors[i]);return o.props={colors:colors,ratios:ratios,x0:x0,y0:y0,x1:x1,y1:y1,type:"linear"},this},p.radialGradient=function(colors,ratios,x0,y0,r0,x1,y1,r1){for(var o=this.style=Graphics._ctx.createRadialGradient(x0,y0,r0,x1,y1,r1),i=0,l=colors.length;i<l;i++)o.addColorStop(ratios[i],colors[i]);return o.props={colors:colors,ratios:ratios,x0:x0,y0:y0,r0:r0,x1:x1,y1:y1,r1:r1,type:"radial"},this},p.bitmap=function(image,repetition){if(image.naturalWidth||image.getContext||image.readyState>=2){var o=this.style=Graphics._ctx.createPattern(image,repetition||"");o.props={image:image,repetition:repetition,type:"bitmap"}}return this},p.path=!1,p=(G.Stroke=function(style,ignoreScale){this.style=style,this.ignoreScale=ignoreScale}).prototype,p.exec=function(ctx){this.style&&(ctx.strokeStyle=this.style,this.ignoreScale&&(ctx.save(),ctx.setTransform(1,0,0,1,0,0)),ctx.stroke(),this.ignoreScale&&ctx.restore())},p.linearGradient=G.Fill.prototype.linearGradient,p.radialGradient=G.Fill.prototype.radialGradient,p.bitmap=G.Fill.prototype.bitmap,p.path=!1,p=(G.StrokeStyle=function(width,caps,joints,miterLimit,ignoreScale){this.width=width,this.caps=caps,this.joints=joints,this.miterLimit=miterLimit,this.ignoreScale=ignoreScale}).prototype,p.exec=function(ctx){ctx.lineWidth=null==this.width?"1":this.width,ctx.lineCap=null==this.caps?"butt":isNaN(this.caps)?this.caps:Graphics.STROKE_CAPS_MAP[this.caps],ctx.lineJoin=null==this.joints?"miter":isNaN(this.joints)?this.joints:Graphics.STROKE_JOINTS_MAP[this.joints],ctx.miterLimit=null==this.miterLimit?"10":this.miterLimit,ctx.ignoreScale=null!=this.ignoreScale&&this.ignoreScale},p.path=!1,(G.StrokeDash=function(segments,offset){this.segments=segments,this.offset=offset||0}).prototype.exec=function(ctx){ctx.setLineDash&&(ctx.setLineDash(this.segments||G.StrokeDash.EMPTY_SEGMENTS),ctx.lineDashOffset=this.offset||0)},G.StrokeDash.EMPTY_SEGMENTS=[],(G.RoundRect=function(x,y,w,h,radiusTL,radiusTR,radiusBR,radiusBL){this.x=x,this.y=y,this.w=w,this.h=h,this.radiusTL=radiusTL,this.radiusTR=radiusTR,this.radiusBR=radiusBR,this.radiusBL=radiusBL}).prototype.exec=function(ctx){var max=(w<h?w:h)/2,mTL=0,mTR=0,mBR=0,mBL=0,x=this.x,y=this.y,w=this.w,h=this.h,rTL=this.radiusTL,rTR=this.radiusTR,rBR=this.radiusBR,rBL=this.radiusBL;rTL<0&&(rTL*=mTL=-1),rTL>max&&(rTL=max),rTR<0&&(rTR*=mTR=-1),rTR>max&&(rTR=max),rBR<0&&(rBR*=mBR=-1),rBR>max&&(rBR=max),rBL<0&&(rBL*=mBL=-1),rBL>max&&(rBL=max),ctx.moveTo(x+w-rTR,y),ctx.arcTo(x+w+rTR*mTR,y-rTR*mTR,x+w,y+rTR,rTR),ctx.lineTo(x+w,y+h-rBR),ctx.arcTo(x+w+rBR*mBR,y+h+rBR*mBR,x+w-rBR,y+h,rBR),ctx.lineTo(x+rBL,y+h),ctx.arcTo(x-rBL*mBL,y+h+rBL*mBL,x,y+h-rBL,rBL),ctx.lineTo(x,y+rTL),ctx.arcTo(x-rTL*mTL,y-rTL*mTL,x+rTL,y,rTL),ctx.closePath()},(G.Circle=function(x,y,radius){this.x=x,this.y=y,this.radius=radius}).prototype.exec=function(ctx){ctx.arc(this.x,this.y,this.radius,0,2*Math.PI)},(G.Ellipse=function(x,y,w,h){this.x=x,this.y=y,this.w=w,this.h=h}).prototype.exec=function(ctx){var x=this.x,y=this.y,w=this.w,h=this.h,k=.5522848,ox=w/2*k,oy=h/2*k,xe=x+w,ye=y+h,xm=x+w/2,ym=y+h/2;ctx.moveTo(x,ym),ctx.bezierCurveTo(x,ym-oy,xm-ox,y,xm,y),ctx.bezierCurveTo(xm+ox,y,xe,ym-oy,xe,ym),ctx.bezierCurveTo(xe,ym+oy,xm+ox,ye,xm,ye),ctx.bezierCurveTo(xm-ox,ye,x,ym+oy,x,ym)},(G.PolyStar=function(x,y,radius,sides,pointSize,angle){this.x=x,this.y=y,this.radius=radius,this.sides=sides,this.pointSize=pointSize,this.angle=angle}).prototype.exec=function(ctx){var x=this.x,y=this.y,radius=this.radius,angle=(this.angle||0)/180*Math.PI,sides=this.sides,ps=1-(this.pointSize||0),a=Math.PI/sides;ctx.moveTo(x+Math.cos(angle)*radius,y+Math.sin(angle)*radius);for(var i=0;i<sides;i++)angle+=a,1!=ps&&ctx.lineTo(x+Math.cos(angle)*radius*ps,y+Math.sin(angle)*radius*ps),angle+=a,ctx.lineTo(x+Math.cos(angle)*radius,y+Math.sin(angle)*radius);ctx.closePath()},Graphics.beginCmd=new G.BeginPath,createjs.Graphics=Graphics}(),function(){"use strict";function DisplayObject(){this.EventDispatcher_constructor(),this.alpha=1,this.cacheCanvas=null,this.cacheID=0,this.id=createjs.UID.get(),this.mouseEnabled=!0,this.tickEnabled=!0,this.name=null,this.parent=null,this.regX=0,this.regY=0,this.rotation=0,this.scaleX=1,this.scaleY=1,this.skewX=0,this.skewY=0,this.shadow=null,this.visible=!0,this.x=0,this.y=0,this.transformMatrix=null,this.compositeOperation=null,this.snapToPixel=!0,this.filters=null,this.mask=null,this.hitArea=null,this.cursor=null,this._cacheOffsetX=0,this._cacheOffsetY=0,this._filterOffsetX=0,this._filterOffsetY=0,this._cacheScale=1,this._cacheDataURLID=0,this._cacheDataURL=null,this._props=new createjs.DisplayProps,this._rectangle=new createjs.Rectangle,this._bounds=null}var p=createjs.extend(DisplayObject,createjs.EventDispatcher);DisplayObject._MOUSE_EVENTS=["click","dblclick","mousedown","mouseout","mouseover","pressmove","pressup","rollout","rollover"],DisplayObject.suppressCrossDomainErrors=!1,DisplayObject._snapToPixelEnabled=!1;var canvas=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas");canvas.getContext&&(DisplayObject._hitTestCanvas=canvas,DisplayObject._hitTestContext=canvas.getContext("2d"),canvas.width=canvas.height=1),DisplayObject._nextCacheID=1,p.getStage=function(){for(var o=this,_Stage=createjs.Stage;o.parent;)o=o.parent;return o instanceof _Stage?o:null};try{Object.defineProperties(p,{stage:{get:p.getStage}})}catch(e){}p.isVisible=function(){return!!(this.visible&&this.alpha>0&&0!=this.scaleX&&0!=this.scaleY)},p.draw=function(ctx,ignoreCache){var cacheCanvas=this.cacheCanvas;if(ignoreCache||!cacheCanvas)return!1;var scale=this._cacheScale;return ctx.drawImage(cacheCanvas,this._cacheOffsetX+this._filterOffsetX,this._cacheOffsetY+this._filterOffsetY,cacheCanvas.width/scale,cacheCanvas.height/scale),!0},p.updateContext=function(ctx){var o=this,mask=o.mask,mtx=o._props.matrix;mask&&mask.graphics&&!mask.graphics.isEmpty()&&(mask.getMatrix(mtx),ctx.transform(mtx.a,mtx.b,mtx.c,mtx.d,mtx.tx,mtx.ty),mask.graphics.drawAsPath(ctx),ctx.clip(),mtx.invert(),ctx.transform(mtx.a,mtx.b,mtx.c,mtx.d,mtx.tx,mtx.ty)),this.getMatrix(mtx);var tx=mtx.tx,ty=mtx.ty;DisplayObject._snapToPixelEnabled&&o.snapToPixel&&(tx=tx+(tx<0?-.5:.5)|0,ty=ty+(ty<0?-.5:.5)|0),ctx.transform(mtx.a,mtx.b,mtx.c,mtx.d,tx,ty),ctx.globalAlpha*=o.alpha,o.compositeOperation&&(ctx.globalCompositeOperation=o.compositeOperation),o.shadow&&this._applyShadow(ctx,o.shadow)},p.cache=function(x,y,width,height,scale){scale=scale||1,this.cacheCanvas||(this.cacheCanvas=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas")),this._cacheWidth=width,this._cacheHeight=height,this._cacheOffsetX=x,this._cacheOffsetY=y,this._cacheScale=scale,this.updateCache()},p.updateCache=function(compositeOperation){var cacheCanvas=this.cacheCanvas;if(!cacheCanvas)throw"cache() must be called before updateCache()";var scale=this._cacheScale,offX=this._cacheOffsetX*scale,offY=this._cacheOffsetY*scale,w=this._cacheWidth,h=this._cacheHeight,ctx=cacheCanvas.getContext("2d"),fBounds=this._getFilterBounds();offX+=this._filterOffsetX=fBounds.x,offY+=this._filterOffsetY=fBounds.y,w=Math.ceil(w*scale)+fBounds.width,h=Math.ceil(h*scale)+fBounds.height,w!=cacheCanvas.width||h!=cacheCanvas.height?(cacheCanvas.width=w,cacheCanvas.height=h):compositeOperation||ctx.clearRect(0,0,w+1,h+1),ctx.save(),ctx.globalCompositeOperation=compositeOperation,ctx.setTransform(scale,0,0,scale,-offX,-offY),this.draw(ctx,!0),this._applyFilters(),ctx.restore(),this.cacheID=DisplayObject._nextCacheID++},p.uncache=function(){this._cacheDataURL=this.cacheCanvas=null,this.cacheID=this._cacheOffsetX=this._cacheOffsetY=this._filterOffsetX=this._filterOffsetY=0,this._cacheScale=1},p.getCacheDataURL=function(){return this.cacheCanvas?(this.cacheID!=this._cacheDataURLID&&(this._cacheDataURL=this.cacheCanvas.toDataURL()),this._cacheDataURL):null},p.localToGlobal=function(x,y,pt){return this.getConcatenatedMatrix(this._props.matrix).transformPoint(x,y,pt||new createjs.Point)},p.globalToLocal=function(x,y,pt){return this.getConcatenatedMatrix(this._props.matrix).invert().transformPoint(x,y,pt||new createjs.Point)},p.localToLocal=function(x,y,target,pt){return pt=this.localToGlobal(x,y,pt),target.globalToLocal(pt.x,pt.y,pt)},p.setTransform=function(x,y,scaleX,scaleY,rotation,skewX,skewY,regX,regY){return this.x=x||0,this.y=y||0,this.scaleX=null==scaleX?1:scaleX,this.scaleY=null==scaleY?1:scaleY,this.rotation=rotation||0,this.skewX=skewX||0,this.skewY=skewY||0,this.regX=regX||0,this.regY=regY||0,this},p.getMatrix=function(matrix){var o=this,mtx=matrix&&matrix.identity()||new createjs.Matrix2D;return o.transformMatrix?mtx.copy(o.transformMatrix):mtx.appendTransform(o.x,o.y,o.scaleX,o.scaleY,o.rotation,o.skewX,o.skewY,o.regX,o.regY)},p.getConcatenatedMatrix=function(matrix){for(var o=this,mtx=this.getMatrix(matrix);o=o.parent;)mtx.prependMatrix(o.getMatrix(o._props.matrix));return mtx},p.getConcatenatedDisplayProps=function(props){props=props?props.identity():new createjs.DisplayProps;var o=this,mtx=o.getMatrix(props.matrix);do props.prepend(o.visible,o.alpha,o.shadow,o.compositeOperation),o!=this&&mtx.prependMatrix(o.getMatrix(o._props.matrix));while(o=o.parent);return props},p.hitTest=function(x,y){var ctx=DisplayObject._hitTestContext;ctx.setTransform(1,0,0,1,-x,-y),this.draw(ctx);var hit=this._testHit(ctx);return ctx.setTransform(1,0,0,1,0,0),ctx.clearRect(0,0,2,2),hit},p.set=function(props){for(var n in props)this[n]=props[n];return this},p.getBounds=function(){if(this._bounds)return this._rectangle.copy(this._bounds);var cacheCanvas=this.cacheCanvas;if(cacheCanvas){var scale=this._cacheScale;return this._rectangle.setValues(this._cacheOffsetX,this._cacheOffsetY,cacheCanvas.width/scale,cacheCanvas.height/scale)}return null},p.getTransformedBounds=function(){return this._getBounds()},p.setBounds=function(x,y,width,height){null==x&&(this._bounds=x),this._bounds=(this._bounds||new createjs.Rectangle).setValues(x,y,width,height)},p.clone=function(){return this._cloneProps(new DisplayObject)},p.toString=function(){return"[DisplayObject (name="+this.name+")]"},p._cloneProps=function(o){return o.alpha=this.alpha,o.mouseEnabled=this.mouseEnabled,o.tickEnabled=this.tickEnabled,o.name=this.name,o.regX=this.regX,o.regY=this.regY,o.rotation=this.rotation,o.scaleX=this.scaleX,o.scaleY=this.scaleY,o.shadow=this.shadow,o.skewX=this.skewX,o.skewY=this.skewY,o.visible=this.visible,o.x=this.x,o.y=this.y,o.compositeOperation=this.compositeOperation,o.snapToPixel=this.snapToPixel,o.filters=null==this.filters?null:this.filters.slice(0),o.mask=this.mask,o.hitArea=this.hitArea,o.cursor=this.cursor,o._bounds=this._bounds,o},p._applyShadow=function(ctx,shadow){shadow=shadow||Shadow.identity,ctx.shadowColor=shadow.color,ctx.shadowOffsetX=shadow.offsetX,ctx.shadowOffsetY=shadow.offsetY,ctx.shadowBlur=shadow.blur},p._tick=function(evtObj){var ls=this._listeners;ls&&ls.tick&&(evtObj.target=null,evtObj.propagationStopped=evtObj.immediatePropagationStopped=!1,this.dispatchEvent(evtObj))},p._testHit=function(ctx){try{var hit=ctx.getImageData(0,0,1,1).data[3]>1}catch(e){if(!DisplayObject.suppressCrossDomainErrors)throw"An error has occurred. This is most likely due to security restrictions on reading canvas pixel data with local or cross-domain images."}return hit},p._applyFilters=function(){if(this.filters&&0!=this.filters.length&&this.cacheCanvas)for(var l=this.filters.length,ctx=this.cacheCanvas.getContext("2d"),w=this.cacheCanvas.width,h=this.cacheCanvas.height,i=0;i<l;i++)this.filters[i].applyFilter(ctx,0,0,w,h)},p._getFilterBounds=function(rect){var l,filters=this.filters,bounds=this._rectangle.setValues(0,0,0,0);if(!filters||!(l=filters.length))return bounds;for(var i=0;i<l;i++){var f=this.filters[i];f.getBounds&&f.getBounds(bounds)}return bounds},p._getBounds=function(matrix,ignoreTransform){return this._transformBounds(this.getBounds(),matrix,ignoreTransform)},p._transformBounds=function(bounds,matrix,ignoreTransform){if(!bounds)return bounds;var x=bounds.x,y=bounds.y,width=bounds.width,height=bounds.height,mtx=this._props.matrix;mtx=ignoreTransform?mtx.identity():this.getMatrix(mtx),(x||y)&&mtx.appendTransform(0,0,1,1,0,0,0,-x,-y),matrix&&mtx.prependMatrix(matrix);var x_a=width*mtx.a,x_b=width*mtx.b,y_c=height*mtx.c,y_d=height*mtx.d,tx=mtx.tx,ty=mtx.ty,minX=tx,maxX=tx,minY=ty,maxY=ty;return(x=x_a+tx)<minX?minX=x:x>maxX&&(maxX=x),(x=x_a+y_c+tx)<minX?minX=x:x>maxX&&(maxX=x),(x=y_c+tx)<minX?minX=x:x>maxX&&(maxX=x),(y=x_b+ty)<minY?minY=y:y>maxY&&(maxY=y),(y=x_b+y_d+ty)<minY?minY=y:y>maxY&&(maxY=y),(y=y_d+ty)<minY?minY=y:y>maxY&&(maxY=y),bounds.setValues(minX,minY,maxX-minX,maxY-minY)},p._hasMouseEventListener=function(){for(var evts=DisplayObject._MOUSE_EVENTS,i=0,l=evts.length;i<l;i++)if(this.hasEventListener(evts[i]))return!0;return!!this.cursor},createjs.DisplayObject=createjs.promote(DisplayObject,"EventDispatcher")}(),function(){"use strict";function Container(){this.DisplayObject_constructor(),this.children=[],this.mouseChildren=!0,this.tickChildren=!0}var p=createjs.extend(Container,createjs.DisplayObject);p.getNumChildren=function(){return this.children.length};try{Object.defineProperties(p,{numChildren:{get:p.getNumChildren}})}catch(e){}p.initialize=Container,p.isVisible=function(){var hasContent=this.cacheCanvas||this.children.length;return!!(this.visible&&this.alpha>0&&0!=this.scaleX&&0!=this.scaleY&&hasContent)},p.draw=function(ctx,ignoreCache){if(this.DisplayObject_draw(ctx,ignoreCache))return!0;for(var list=this.children.slice(),i=0,l=list.length;i<l;i++){var child=list[i];child.isVisible()&&(ctx.save(),child.updateContext(ctx),child.draw(ctx),ctx.restore())}return!0},p.addChild=function(child){if(null==child)return child;var l=arguments.length;if(l>1){for(var i=0;i<l;i++)this.addChild(arguments[i]);return arguments[l-1]}return child.parent&&child.parent.removeChild(child),child.parent=this,this.children.push(child),child.dispatchEvent("added"),child},p.addChildAt=function(child,index){var l=arguments.length,indx=arguments[l-1];if(indx<0||indx>this.children.length)return arguments[l-2];if(l>2){for(var i=0;i<l-1;i++)this.addChildAt(arguments[i],indx+i);return arguments[l-2]}return child.parent&&child.parent.removeChild(child),child.parent=this,this.children.splice(index,0,child),child.dispatchEvent("added"),child},p.removeChild=function(child){var l=arguments.length;if(l>1){for(var good=!0,i=0;i<l;i++)good=good&&this.removeChild(arguments[i]);return good}return this.removeChildAt(createjs.indexOf(this.children,child))},p.removeChildAt=function(index){var l=arguments.length;if(l>1){for(var a=[],i=0;i<l;i++)a[i]=arguments[i];a.sort(function(a,b){return b-a});for(var good=!0,i=0;i<l;i++)good=good&&this.removeChildAt(a[i]);return good}if(index<0||index>this.children.length-1)return!1;var child=this.children[index];return child&&(child.parent=null),this.children.splice(index,1),child.dispatchEvent("removed"),!0},p.removeAllChildren=function(){for(var kids=this.children;kids.length;)this.removeChildAt(0)},p.getChildAt=function(index){return this.children[index]},p.getChildByName=function(name){for(var kids=this.children,i=0,l=kids.length;i<l;i++)if(kids[i].name==name)return kids[i];return null},p.sortChildren=function(sortFunction){this.children.sort(sortFunction)},p.getChildIndex=function(child){return createjs.indexOf(this.children,child)},p.swapChildrenAt=function(index1,index2){var kids=this.children,o1=kids[index1],o2=kids[index2];o1&&o2&&(kids[index1]=o2,kids[index2]=o1)},p.swapChildren=function(child1,child2){for(var index1,index2,kids=this.children,i=0,l=kids.length;i<l&&(kids[i]==child1&&(index1=i),kids[i]==child2&&(index2=i),null==index1||null==index2);i++);i!=l&&(kids[index1]=child2,kids[index2]=child1)},p.setChildIndex=function(child,index){var kids=this.children,l=kids.length;if(!(child.parent!=this||index<0||index>=l)){for(var i=0;i<l&&kids[i]!=child;i++);i!=l&&i!=index&&(kids.splice(i,1),kids.splice(index,0,child))}},p.contains=function(child){for(;child;){if(child==this)return!0;child=child.parent}return!1},p.hitTest=function(x,y){return null!=this.getObjectUnderPoint(x,y)},p.getObjectsUnderPoint=function(x,y,mode){var arr=[],pt=this.localToGlobal(x,y);return this._getObjectsUnderPoint(pt.x,pt.y,arr,mode>0,1==mode),arr},p.getObjectUnderPoint=function(x,y,mode){var pt=this.localToGlobal(x,y);return this._getObjectsUnderPoint(pt.x,pt.y,null,mode>0,1==mode)},p.getBounds=function(){return this._getBounds(null,!0)},p.getTransformedBounds=function(){return this._getBounds()},p.clone=function(recursive){var o=this._cloneProps(new Container);return recursive&&this._cloneChildren(o),o},p.toString=function(){return"[Container (name="+this.name+")]"},p._tick=function(evtObj){if(this.tickChildren)for(var i=this.children.length-1;i>=0;i--){var child=this.children[i];child.tickEnabled&&child._tick&&child._tick(evtObj)}this.DisplayObject__tick(evtObj)},p._cloneChildren=function(o){o.children.length&&o.removeAllChildren();for(var arr=o.children,i=0,l=this.children.length;i<l;i++){var clone=this.children[i].clone(!0);clone.parent=o,arr.push(clone)}},p._getObjectsUnderPoint=function(x,y,arr,mouse,activeListener,currentDepth){if(currentDepth=currentDepth||0,!currentDepth&&!this._testMask(this,x,y))return null;var mtx,ctx=createjs.DisplayObject._hitTestContext;activeListener=activeListener||mouse&&this._hasMouseEventListener();for(var children=this.children,l=children.length,i=l-1;i>=0;i--){var child=children[i],hitArea=child.hitArea;if(child.visible&&(hitArea||child.isVisible())&&(!mouse||child.mouseEnabled)&&(hitArea||this._testMask(child,x,y)))if(!hitArea&&child instanceof Container){var result=child._getObjectsUnderPoint(x,y,arr,mouse,activeListener,currentDepth+1);if(!arr&&result)return mouse&&!this.mouseChildren?this:result}else{if(mouse&&!activeListener&&!child._hasMouseEventListener())continue;var props=child.getConcatenatedDisplayProps(child._props);if(mtx=props.matrix,hitArea&&(mtx.appendMatrix(hitArea.getMatrix(hitArea._props.matrix)),props.alpha=hitArea.alpha),ctx.globalAlpha=props.alpha,ctx.setTransform(mtx.a,mtx.b,mtx.c,mtx.d,mtx.tx-x,mtx.ty-y),(hitArea||child).draw(ctx),!this._testHit(ctx))continue;if(ctx.setTransform(1,0,0,1,0,0),ctx.clearRect(0,0,2,2),!arr)return mouse&&!this.mouseChildren?this:child;arr.push(child)}}return null},p._testMask=function(target,x,y){var mask=target.mask;if(!mask||!mask.graphics||mask.graphics.isEmpty())return!0;var mtx=this._props.matrix,parent=target.parent;mtx=parent?parent.getConcatenatedMatrix(mtx):mtx.identity(),mtx=mask.getMatrix(mask._props.matrix).prependMatrix(mtx);var ctx=createjs.DisplayObject._hitTestContext;return ctx.setTransform(mtx.a,mtx.b,mtx.c,mtx.d,mtx.tx-x,mtx.ty-y),mask.graphics.drawAsPath(ctx),ctx.fillStyle="#000",ctx.fill(),!!this._testHit(ctx)&&(ctx.setTransform(1,0,0,1,0,0),ctx.clearRect(0,0,2,2),!0)},p._getBounds=function(matrix,ignoreTransform){var bounds=this.DisplayObject_getBounds();if(bounds)return this._transformBounds(bounds,matrix,ignoreTransform);var mtx=this._props.matrix;mtx=ignoreTransform?mtx.identity():this.getMatrix(mtx),matrix&&mtx.prependMatrix(matrix);for(var l=this.children.length,rect=null,i=0;i<l;i++){var child=this.children[i];child.visible&&(bounds=child._getBounds(mtx))&&(rect?rect.extend(bounds.x,bounds.y,bounds.width,bounds.height):rect=bounds.clone())}return rect},createjs.Container=createjs.promote(Container,"DisplayObject")}(),function(){"use strict";function Stage(canvas){this.Container_constructor(),this.autoClear=!0,this.canvas="string"==typeof canvas?document.getElementById(canvas):canvas,this.mouseX=0,this.mouseY=0,this.drawRect=null,this.snapToPixelEnabled=!1,this.mouseInBounds=!1,this.tickOnUpdate=!0,this.mouseMoveOutside=!1,this.preventSelection=!0,this._pointerData={},this._pointerCount=0,this._primaryPointerID=null,this._mouseOverIntervalID=null,this._nextStage=null,this._prevStage=null,this.enableDOMEvents(!0)}var p=createjs.extend(Stage,createjs.Container);p._get_nextStage=function(){return this._nextStage},p._set_nextStage=function(value){this._nextStage&&(this._nextStage._prevStage=null),value&&(value._prevStage=this),this._nextStage=value};try{Object.defineProperties(p,{nextStage:{get:p._get_nextStage,set:p._set_nextStage}})}catch(e){}p.update=function(props){if(this.canvas&&(this.tickOnUpdate&&this.tick(props),this.dispatchEvent("drawstart",!1,!0)!==!1)){createjs.DisplayObject._snapToPixelEnabled=this.snapToPixelEnabled;var r=this.drawRect,ctx=this.canvas.getContext("2d");ctx.setTransform(1,0,0,1,0,0),this.autoClear&&(r?ctx.clearRect(r.x,r.y,r.width,r.height):ctx.clearRect(0,0,this.canvas.width+1,this.canvas.height+1)),ctx.save(),this.drawRect&&(ctx.beginPath(),ctx.rect(r.x,r.y,r.width,r.height),ctx.clip()),this.updateContext(ctx),this.draw(ctx,!1),ctx.restore(),this.dispatchEvent("drawend")}},p.tick=function(props){if(this.tickEnabled&&this.dispatchEvent("tickstart",!1,!0)!==!1){var evtObj=new createjs.Event("tick");if(props)for(var n in props)props.hasOwnProperty(n)&&(evtObj[n]=props[n]);this._tick(evtObj),this.dispatchEvent("tickend")}},p.handleEvent=function(evt){"tick"==evt.type&&this.update(evt)},p.clear=function(){if(this.canvas){var ctx=this.canvas.getContext("2d");ctx.setTransform(1,0,0,1,0,0),ctx.clearRect(0,0,this.canvas.width+1,this.canvas.height+1)}},p.toDataURL=function(backgroundColor,mimeType){var data,ctx=this.canvas.getContext("2d"),w=this.canvas.width,h=this.canvas.height;if(backgroundColor){data=ctx.getImageData(0,0,w,h);var compositeOperation=ctx.globalCompositeOperation;ctx.globalCompositeOperation="destination-over",ctx.fillStyle=backgroundColor,ctx.fillRect(0,0,w,h)}var dataURL=this.canvas.toDataURL(mimeType||"image/png");return backgroundColor&&(ctx.putImageData(data,0,0),ctx.globalCompositeOperation=compositeOperation),dataURL},p.enableMouseOver=function(frequency){if(this._mouseOverIntervalID&&(clearInterval(this._mouseOverIntervalID),this._mouseOverIntervalID=null,0==frequency&&this._testMouseOver(!0)),null==frequency)frequency=20;else if(frequency<=0)return;var o=this;this._mouseOverIntervalID=setInterval(function(){o._testMouseOver()},1e3/Math.min(50,frequency))},p.enableDOMEvents=function(enable){null==enable&&(enable=!0);var n,o,ls=this._eventListeners;if(!enable&&ls){for(n in ls)o=ls[n],o.t.removeEventListener(n,o.f,!1);this._eventListeners=null}else if(enable&&!ls&&this.canvas){var t=window.addEventListener?window:document,_this=this;ls=this._eventListeners={},ls.mouseup={t:t,f:function(e){_this._handleMouseUp(e)}},ls.mousemove={t:t,f:function(e){_this._handleMouseMove(e)}},ls.dblclick={t:this.canvas,f:function(e){_this._handleDoubleClick(e)}},ls.mousedown={t:this.canvas,f:function(e){_this._handleMouseDown(e)}};for(n in ls)o=ls[n],o.t.addEventListener(n,o.f,!1)}},p.clone=function(){throw"Stage cannot be cloned."},p.toString=function(){return"[Stage (name="+this.name+")]"},p._getElementRect=function(e){var bounds;try{bounds=e.getBoundingClientRect()}catch(err){bounds={top:e.offsetTop,left:e.offsetLeft,width:e.offsetWidth,height:e.offsetHeight}}var offX=(window.pageXOffset||document.scrollLeft||0)-(document.clientLeft||document.body.clientLeft||0),offY=(window.pageYOffset||document.scrollTop||0)-(document.clientTop||document.body.clientTop||0),styles=window.getComputedStyle?getComputedStyle(e,null):e.currentStyle,padL=parseInt(styles.paddingLeft)+parseInt(styles.borderLeftWidth),padT=parseInt(styles.paddingTop)+parseInt(styles.borderTopWidth),padR=parseInt(styles.paddingRight)+parseInt(styles.borderRightWidth),padB=parseInt(styles.paddingBottom)+parseInt(styles.borderBottomWidth);return{left:bounds.left+offX+padL,right:bounds.right+offX-padR,top:bounds.top+offY+padT,bottom:bounds.bottom+offY-padB}},p._getPointerData=function(id){var data=this._pointerData[id];return data||(data=this._pointerData[id]={x:0,y:0}),data},p._handleMouseMove=function(e){e||(e=window.event),this._handlePointerMove(-1,e,e.pageX,e.pageY)},p._handlePointerMove=function(id,e,pageX,pageY,owner){if((!this._prevStage||void 0!==owner)&&this.canvas){var nextStage=this._nextStage,o=this._getPointerData(id),inBounds=o.inBounds;this._updatePointerPosition(id,e,pageX,pageY),(inBounds||o.inBounds||this.mouseMoveOutside)&&(id===-1&&o.inBounds==!inBounds&&this._dispatchMouseEvent(this,inBounds?"mouseleave":"mouseenter",!1,id,o,e),this._dispatchMouseEvent(this,"stagemousemove",!1,id,o,e),this._dispatchMouseEvent(o.target,"pressmove",!0,id,o,e)),nextStage&&nextStage._handlePointerMove(id,e,pageX,pageY,null)}},p._updatePointerPosition=function(id,e,pageX,pageY){var rect=this._getElementRect(this.canvas);pageX-=rect.left,pageY-=rect.top;var w=this.canvas.width,h=this.canvas.height;pageX/=(rect.right-rect.left)/w,pageY/=(rect.bottom-rect.top)/h;var o=this._getPointerData(id);(o.inBounds=pageX>=0&&pageY>=0&&pageX<=w-1&&pageY<=h-1)?(o.x=pageX,o.y=pageY):this.mouseMoveOutside&&(o.x=pageX<0?0:pageX>w-1?w-1:pageX,o.y=pageY<0?0:pageY>h-1?h-1:pageY),o.posEvtObj=e,o.rawX=pageX,o.rawY=pageY,id!==this._primaryPointerID&&id!==-1||(this.mouseX=o.x,this.mouseY=o.y,this.mouseInBounds=o.inBounds)},p._handleMouseUp=function(e){this._handlePointerUp(-1,e,!1)},p._handlePointerUp=function(id,e,clear,owner){var nextStage=this._nextStage,o=this._getPointerData(id);if(!this._prevStage||void 0!==owner){var target=null,oTarget=o.target;owner||!oTarget&&!nextStage||(target=this._getObjectsUnderPoint(o.x,o.y,null,!0)),o.down&&(this._dispatchMouseEvent(this,"stagemouseup",!1,id,o,e,target),o.down=!1),target==oTarget&&this._dispatchMouseEvent(oTarget,"click",!0,id,o,e),this._dispatchMouseEvent(oTarget,"pressup",!0,id,o,e),clear?(id==this._primaryPointerID&&(this._primaryPointerID=null),delete this._pointerData[id]):o.target=null,nextStage&&nextStage._handlePointerUp(id,e,clear,owner||target&&this)}},p._handleMouseDown=function(e){this._handlePointerDown(-1,e,e.pageX,e.pageY)},p._handlePointerDown=function(id,e,pageX,pageY,owner){this.preventSelection&&e.preventDefault(),null!=this._primaryPointerID&&id!==-1||(this._primaryPointerID=id),null!=pageY&&this._updatePointerPosition(id,e,pageX,pageY);var target=null,nextStage=this._nextStage,o=this._getPointerData(id);owner||(target=o.target=this._getObjectsUnderPoint(o.x,o.y,null,!0)),o.inBounds&&(this._dispatchMouseEvent(this,"stagemousedown",!1,id,o,e,target),o.down=!0),this._dispatchMouseEvent(target,"mousedown",!0,id,o,e),nextStage&&nextStage._handlePointerDown(id,e,pageX,pageY,owner||target&&this)},p._testMouseOver=function(clear,owner,eventTarget){if(!this._prevStage||void 0!==owner){var nextStage=this._nextStage;if(!this._mouseOverIntervalID)return void(nextStage&&nextStage._testMouseOver(clear,owner,eventTarget));var o=this._getPointerData(-1);if(o&&(clear||this.mouseX!=this._mouseOverX||this.mouseY!=this._mouseOverY||!this.mouseInBounds)){var t,i,l,e=o.posEvtObj,isEventTarget=eventTarget||e&&e.target==this.canvas,target=null,common=-1,cursor="";!owner&&(clear||this.mouseInBounds&&isEventTarget)&&(target=this._getObjectsUnderPoint(this.mouseX,this.mouseY,null,!0),this._mouseOverX=this.mouseX,this._mouseOverY=this.mouseY);var oldList=this._mouseOverTarget||[],oldTarget=oldList[oldList.length-1],list=this._mouseOverTarget=[];for(t=target;t;)list.unshift(t),cursor||(cursor=t.cursor),t=t.parent;for(this.canvas.style.cursor=cursor,!owner&&eventTarget&&(eventTarget.canvas.style.cursor=cursor),i=0,l=list.length;i<l&&list[i]==oldList[i];i++)common=i;for(oldTarget!=target&&this._dispatchMouseEvent(oldTarget,"mouseout",!0,-1,o,e,target),i=oldList.length-1;i>common;i--)this._dispatchMouseEvent(oldList[i],"rollout",!1,-1,o,e,target);for(i=list.length-1;i>common;i--)this._dispatchMouseEvent(list[i],"rollover",!1,-1,o,e,oldTarget);oldTarget!=target&&this._dispatchMouseEvent(target,"mouseover",!0,-1,o,e,oldTarget),
	nextStage&&nextStage._testMouseOver(clear,owner||target&&this,eventTarget||isEventTarget&&this)}}},p._handleDoubleClick=function(e,owner){var target=null,nextStage=this._nextStage,o=this._getPointerData(-1);owner||(target=this._getObjectsUnderPoint(o.x,o.y,null,!0),this._dispatchMouseEvent(target,"dblclick",!0,-1,o,e)),nextStage&&nextStage._handleDoubleClick(e,owner||target&&this)},p._dispatchMouseEvent=function(target,type,bubbles,pointerId,o,nativeEvent,relatedTarget){if(target&&(bubbles||target.hasEventListener(type))){var evt=new createjs.MouseEvent(type,bubbles,!1,o.x,o.y,nativeEvent,pointerId,pointerId===this._primaryPointerID||pointerId===-1,o.rawX,o.rawY,relatedTarget);target.dispatchEvent(evt)}},createjs.Stage=createjs.promote(Stage,"Container")}(),function(){function Bitmap(imageOrUri){this.DisplayObject_constructor(),"string"==typeof imageOrUri?(this.image=document.createElement("img"),this.image.src=imageOrUri):this.image=imageOrUri,this.sourceRect=null}var p=createjs.extend(Bitmap,createjs.DisplayObject);p.initialize=Bitmap,p.isVisible=function(){var image=this.image,hasContent=this.cacheCanvas||image&&(image.naturalWidth||image.getContext||image.readyState>=2);return!!(this.visible&&this.alpha>0&&0!=this.scaleX&&0!=this.scaleY&&hasContent)},p.draw=function(ctx,ignoreCache){if(this.DisplayObject_draw(ctx,ignoreCache)||!this.image)return!0;var img=this.image,rect=this.sourceRect;if(rect){var x1=rect.x,y1=rect.y,x2=x1+rect.width,y2=y1+rect.height,x=0,y=0,w=img.width,h=img.height;x1<0&&(x-=x1,x1=0),x2>w&&(x2=w),y1<0&&(y-=y1,y1=0),y2>h&&(y2=h),ctx.drawImage(img,x1,y1,x2-x1,y2-y1,x,y,x2-x1,y2-y1)}else ctx.drawImage(img,0,0);return!0},p.getBounds=function(){var rect=this.DisplayObject_getBounds();if(rect)return rect;var image=this.image,o=this.sourceRect||image,hasContent=image&&(image.naturalWidth||image.getContext||image.readyState>=2);return hasContent?this._rectangle.setValues(0,0,o.width,o.height):null},p.clone=function(){var o=new Bitmap(this.image);return this.sourceRect&&(o.sourceRect=this.sourceRect.clone()),this._cloneProps(o),o},p.toString=function(){return"[Bitmap (name="+this.name+")]"},createjs.Bitmap=createjs.promote(Bitmap,"DisplayObject")}(),function(){"use strict";function Sprite(spriteSheet,frameOrAnimation){this.DisplayObject_constructor(),this.currentFrame=0,this.currentAnimation=null,this.paused=!0,this.spriteSheet=spriteSheet,this.currentAnimationFrame=0,this.framerate=0,this._animation=null,this._currentFrame=null,this._skipAdvance=!1,null!=frameOrAnimation&&this.gotoAndPlay(frameOrAnimation)}var p=createjs.extend(Sprite,createjs.DisplayObject);p.initialize=Sprite,p.isVisible=function(){var hasContent=this.cacheCanvas||this.spriteSheet.complete;return!!(this.visible&&this.alpha>0&&0!=this.scaleX&&0!=this.scaleY&&hasContent)},p.draw=function(ctx,ignoreCache){if(this.DisplayObject_draw(ctx,ignoreCache))return!0;this._normalizeFrame();var o=this.spriteSheet.getFrame(0|this._currentFrame);if(!o)return!1;var rect=o.rect;return rect.width&&rect.height&&ctx.drawImage(o.image,rect.x,rect.y,rect.width,rect.height,-o.regX,-o.regY,rect.width,rect.height),!0},p.play=function(){this.paused=!1},p.stop=function(){this.paused=!0},p.gotoAndPlay=function(frameOrAnimation){this.paused=!1,this._skipAdvance=!0,this._goto(frameOrAnimation)},p.gotoAndStop=function(frameOrAnimation){this.paused=!0,this._goto(frameOrAnimation)},p.advance=function(time){var fps=this.framerate||this.spriteSheet.framerate,t=fps&&null!=time?time/(1e3/fps):1;this._normalizeFrame(t)},p.getBounds=function(){return this.DisplayObject_getBounds()||this.spriteSheet.getFrameBounds(this.currentFrame,this._rectangle)},p.clone=function(){return this._cloneProps(new Sprite(this.spriteSheet))},p.toString=function(){return"[Sprite (name="+this.name+")]"},p._cloneProps=function(o){return this.DisplayObject__cloneProps(o),o.currentFrame=this.currentFrame,o.currentAnimation=this.currentAnimation,o.paused=this.paused,o.currentAnimationFrame=this.currentAnimationFrame,o.framerate=this.framerate,o._animation=this._animation,o._currentFrame=this._currentFrame,o._skipAdvance=this._skipAdvance,o},p._tick=function(evtObj){this.paused||(this._skipAdvance||this.advance(evtObj&&evtObj.delta),this._skipAdvance=!1),this.DisplayObject__tick(evtObj)},p._normalizeFrame=function(frameDelta){frameDelta=frameDelta||0;var l,animation=this._animation,paused=this.paused,frame=this._currentFrame;if(animation){var speed=animation.speed||1,animFrame=this.currentAnimationFrame;if(l=animation.frames.length,animFrame+frameDelta*speed>=l){var next=animation.next;if(this._dispatchAnimationEnd(animation,frame,paused,next,l-1))return;if(next)return this._goto(next,frameDelta-(l-animFrame)/speed);this.paused=!0,animFrame=animation.frames.length-1}else animFrame+=frameDelta*speed;this.currentAnimationFrame=animFrame,this._currentFrame=animation.frames[0|animFrame]}else if(frame=this._currentFrame+=frameDelta,l=this.spriteSheet.getNumFrames(),frame>=l&&l>0&&!this._dispatchAnimationEnd(animation,frame,paused,l-1)&&(this._currentFrame-=l)>=l)return this._normalizeFrame();frame=0|this._currentFrame,this.currentFrame!=frame&&(this.currentFrame=frame,this.dispatchEvent("change"))},p._dispatchAnimationEnd=function(animation,frame,paused,next,end){var name=animation?animation.name:null;if(this.hasEventListener("animationend")){var evt=new createjs.Event("animationend");evt.name=name,evt.next=next,this.dispatchEvent(evt)}var changed=this._animation!=animation||this._currentFrame!=frame;return changed||paused||!this.paused||(this.currentAnimationFrame=end,changed=!0),changed},p._goto=function(frameOrAnimation,frame){if(this.currentAnimationFrame=0,isNaN(frameOrAnimation)){var data=this.spriteSheet.getAnimation(frameOrAnimation);data&&(this._animation=data,this.currentAnimation=frameOrAnimation,this._normalizeFrame(frame))}else this.currentAnimation=this._animation=null,this._currentFrame=frameOrAnimation,this._normalizeFrame()},createjs.Sprite=createjs.promote(Sprite,"DisplayObject")}(),function(){"use strict";function Shape(graphics){this.DisplayObject_constructor(),this.graphics=graphics?graphics:new createjs.Graphics}var p=createjs.extend(Shape,createjs.DisplayObject);p.isVisible=function(){var hasContent=this.cacheCanvas||this.graphics&&!this.graphics.isEmpty();return!!(this.visible&&this.alpha>0&&0!=this.scaleX&&0!=this.scaleY&&hasContent)},p.draw=function(ctx,ignoreCache){return!!this.DisplayObject_draw(ctx,ignoreCache)||(this.graphics.draw(ctx,this),!0)},p.clone=function(recursive){var g=recursive&&this.graphics?this.graphics.clone():this.graphics;return this._cloneProps(new Shape(g))},p.toString=function(){return"[Shape (name="+this.name+")]"},createjs.Shape=createjs.promote(Shape,"DisplayObject")}(),function(){"use strict";function Text(text,font,color){this.DisplayObject_constructor(),this.text=text,this.font=font,this.color=color,this.textAlign="left",this.textBaseline="top",this.maxWidth=null,this.outline=0,this.lineHeight=0,this.lineWidth=null}var p=createjs.extend(Text,createjs.DisplayObject),canvas=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas");canvas.getContext&&(Text._workingContext=canvas.getContext("2d"),canvas.width=canvas.height=1),Text.H_OFFSETS={start:0,left:0,center:-.5,end:-1,right:-1},Text.V_OFFSETS={top:0,hanging:-.01,middle:-.4,alphabetic:-.8,ideographic:-.85,bottom:-1},p.isVisible=function(){var hasContent=this.cacheCanvas||null!=this.text&&""!==this.text;return!!(this.visible&&this.alpha>0&&0!=this.scaleX&&0!=this.scaleY&&hasContent)},p.draw=function(ctx,ignoreCache){if(this.DisplayObject_draw(ctx,ignoreCache))return!0;var col=this.color||"#000";return this.outline?(ctx.strokeStyle=col,ctx.lineWidth=1*this.outline):ctx.fillStyle=col,this._drawText(this._prepContext(ctx)),!0},p.getMeasuredWidth=function(){return this._getMeasuredWidth(this.text)},p.getMeasuredLineHeight=function(){return 1.2*this._getMeasuredWidth("M")},p.getMeasuredHeight=function(){return this._drawText(null,{}).height},p.getBounds=function(){var rect=this.DisplayObject_getBounds();if(rect)return rect;if(null==this.text||""===this.text)return null;var o=this._drawText(null,{}),w=this.maxWidth&&this.maxWidth<o.width?this.maxWidth:o.width,x=w*Text.H_OFFSETS[this.textAlign||"left"],lineHeight=this.lineHeight||this.getMeasuredLineHeight(),y=lineHeight*Text.V_OFFSETS[this.textBaseline||"top"];return this._rectangle.setValues(x,y,w,o.height)},p.getMetrics=function(){var o={lines:[]};return o.lineHeight=this.lineHeight||this.getMeasuredLineHeight(),o.vOffset=o.lineHeight*Text.V_OFFSETS[this.textBaseline||"top"],this._drawText(null,o,o.lines)},p.clone=function(){return this._cloneProps(new Text(this.text,this.font,this.color))},p.toString=function(){return"[Text (text="+(this.text.length>20?this.text.substr(0,17)+"...":this.text)+")]"},p._cloneProps=function(o){return this.DisplayObject__cloneProps(o),o.textAlign=this.textAlign,o.textBaseline=this.textBaseline,o.maxWidth=this.maxWidth,o.outline=this.outline,o.lineHeight=this.lineHeight,o.lineWidth=this.lineWidth,o},p._prepContext=function(ctx){return ctx.font=this.font||"10px sans-serif",ctx.textAlign=this.textAlign||"left",ctx.textBaseline=this.textBaseline||"top",ctx},p._drawText=function(ctx,o,lines){var paint=!!ctx;paint||(ctx=Text._workingContext,ctx.save(),this._prepContext(ctx));for(var lineHeight=this.lineHeight||this.getMeasuredLineHeight(),maxW=0,count=0,hardLines=String(this.text).split(/(?:\r\n|\r|\n)/),i=0,l=hardLines.length;i<l;i++){var str=hardLines[i],w=null;if(null!=this.lineWidth&&(w=ctx.measureText(str).width)>this.lineWidth){var words=str.split(/(\s)/);str=words[0],w=ctx.measureText(str).width;for(var j=1,jl=words.length;j<jl;j+=2){var wordW=ctx.measureText(words[j]+words[j+1]).width;w+wordW>this.lineWidth?(paint&&this._drawTextLine(ctx,str,count*lineHeight),lines&&lines.push(str),w>maxW&&(maxW=w),str=words[j+1],w=ctx.measureText(str).width,count++):(str+=words[j]+words[j+1],w+=wordW)}}paint&&this._drawTextLine(ctx,str,count*lineHeight),lines&&lines.push(str),o&&null==w&&(w=ctx.measureText(str).width),w>maxW&&(maxW=w),count++}return o&&(o.width=maxW,o.height=count*lineHeight),paint||ctx.restore(),o},p._drawTextLine=function(ctx,text,y){this.outline?ctx.strokeText(text,0,y,this.maxWidth||65535):ctx.fillText(text,0,y,this.maxWidth||65535)},p._getMeasuredWidth=function(text){var ctx=Text._workingContext;ctx.save();var w=this._prepContext(ctx).measureText(text).width;return ctx.restore(),w},createjs.Text=createjs.promote(Text,"DisplayObject")}(),function(){"use strict";function BitmapText(text,spriteSheet){this.Container_constructor(),this.text=text||"",this.spriteSheet=spriteSheet,this.lineHeight=0,this.letterSpacing=0,this.spaceWidth=0,this._oldProps={text:0,spriteSheet:0,lineHeight:0,letterSpacing:0,spaceWidth:0}}var p=createjs.extend(BitmapText,createjs.Container);BitmapText.maxPoolSize=100,BitmapText._spritePool=[],p.draw=function(ctx,ignoreCache){this.DisplayObject_draw(ctx,ignoreCache)||(this._updateText(),this.Container_draw(ctx,ignoreCache))},p.getBounds=function(){return this._updateText(),this.Container_getBounds()},p.isVisible=function(){var hasContent=this.cacheCanvas||this.spriteSheet&&this.spriteSheet.complete&&this.text;return!!(this.visible&&this.alpha>0&&0!==this.scaleX&&0!==this.scaleY&&hasContent)},p.clone=function(){return this._cloneProps(new BitmapText(this.text,this.spriteSheet))},p.addChild=p.addChildAt=p.removeChild=p.removeChildAt=p.removeAllChildren=function(){},p._cloneProps=function(o){return this.Container__cloneProps(o),o.lineHeight=this.lineHeight,o.letterSpacing=this.letterSpacing,o.spaceWidth=this.spaceWidth,o},p._getFrameIndex=function(character,spriteSheet){var c,o=spriteSheet.getAnimation(character);return o||(character!=(c=character.toUpperCase())||character!=(c=character.toLowerCase())||(c=null),c&&(o=spriteSheet.getAnimation(c))),o&&o.frames[0]},p._getFrame=function(character,spriteSheet){var index=this._getFrameIndex(character,spriteSheet);return null==index?index:spriteSheet.getFrame(index)},p._getLineHeight=function(ss){var frame=this._getFrame("1",ss)||this._getFrame("T",ss)||this._getFrame("L",ss)||ss.getFrame(0);return frame?frame.rect.height:1},p._getSpaceWidth=function(ss){var frame=this._getFrame("1",ss)||this._getFrame("l",ss)||this._getFrame("e",ss)||this._getFrame("a",ss)||ss.getFrame(0);return frame?frame.rect.width:1},p._updateText=function(){var sprite,x=0,y=0,o=this._oldProps,change=!1,spaceW=this.spaceWidth,lineH=this.lineHeight,ss=this.spriteSheet,pool=BitmapText._spritePool,kids=this.children,childIndex=0,numKids=kids.length;for(var n in o)o[n]!=this[n]&&(o[n]=this[n],change=!0);if(change){var hasSpace=!!this._getFrame(" ",ss);hasSpace||spaceW||(spaceW=this._getSpaceWidth(ss)),lineH||(lineH=this._getLineHeight(ss));for(var i=0,l=this.text.length;i<l;i++){var character=this.text.charAt(i);if(" "!=character||hasSpace)if("\n"!=character&&"\r"!=character){var index=this._getFrameIndex(character,ss);null!=index&&(childIndex<numKids?sprite=kids[childIndex]:(kids.push(sprite=pool.length?pool.pop():new createjs.Sprite),sprite.parent=this,numKids++),sprite.spriteSheet=ss,sprite.gotoAndStop(index),sprite.x=x,sprite.y=y,childIndex++,x+=sprite.getBounds().width+this.letterSpacing)}else"\r"==character&&"\n"==this.text.charAt(i+1)&&i++,x=0,y+=lineH;else x+=spaceW}for(;numKids>childIndex;)pool.push(sprite=kids.pop()),sprite.parent=null,numKids--;pool.length>BitmapText.maxPoolSize&&(pool.length=BitmapText.maxPoolSize)}},createjs.BitmapText=createjs.promote(BitmapText,"Container")}(),function(){"use strict";function MovieClip(mode,startPosition,loop,labels){this.Container_constructor(),!MovieClip.inited&&MovieClip.init(),this.mode=mode||MovieClip.INDEPENDENT,this.startPosition=startPosition||0,this.loop=loop,this.currentFrame=0,this.timeline=new createjs.Timeline(null,labels,{paused:!0,position:startPosition,useTicks:!0}),this.paused=!1,this.actionsEnabled=!0,this.autoReset=!0,this.frameBounds=this.frameBounds||null,this.framerate=null,this._synchOffset=0,this._prevPos=-1,this._prevPosition=0,this._t=0,this._managed={}}function MovieClipPlugin(){throw"MovieClipPlugin cannot be instantiated."}var p=createjs.extend(MovieClip,createjs.Container);MovieClip.INDEPENDENT="independent",MovieClip.SINGLE_FRAME="single",MovieClip.SYNCHED="synched",MovieClip.inited=!1,MovieClip.init=function(){MovieClip.inited||(MovieClipPlugin.install(),MovieClip.inited=!0)},p.getLabels=function(){return this.timeline.getLabels()},p.getCurrentLabel=function(){return this._updateTimeline(),this.timeline.getCurrentLabel()},p.getDuration=function(){return this.timeline.duration};try{Object.defineProperties(p,{labels:{get:p.getLabels},currentLabel:{get:p.getCurrentLabel},totalFrames:{get:p.getDuration},duration:{get:p.getDuration}})}catch(e){}p.initialize=MovieClip,p.isVisible=function(){return!!(this.visible&&this.alpha>0&&0!=this.scaleX&&0!=this.scaleY)},p.draw=function(ctx,ignoreCache){return!!this.DisplayObject_draw(ctx,ignoreCache)||(this._updateTimeline(),this.Container_draw(ctx,ignoreCache),!0)},p.play=function(){this.paused=!1},p.stop=function(){this.paused=!0},p.gotoAndPlay=function(positionOrLabel){this.paused=!1,this._goto(positionOrLabel)},p.gotoAndStop=function(positionOrLabel){this.paused=!0,this._goto(positionOrLabel)},p.advance=function(time){var independent=MovieClip.INDEPENDENT;if(this.mode==independent){for(var o=this,fps=o.framerate;(o=o.parent)&&null==fps;)o.mode==independent&&(fps=o._framerate);this._framerate=fps;var t=null!=fps&&fps!=-1&&null!=time?time/(1e3/fps)+this._t:1,frames=0|t;for(this._t=t-frames;!this.paused&&frames--;)this._prevPosition=this._prevPos<0?0:this._prevPosition+1,this._updateTimeline()}},p.clone=function(){throw"MovieClip cannot be cloned."},p.toString=function(){return"[MovieClip (name="+this.name+")]"},p._tick=function(evtObj){this.advance(evtObj&&evtObj.delta),this.Container__tick(evtObj)},p._goto=function(positionOrLabel){var pos=this.timeline.resolve(positionOrLabel);null!=pos&&(this._prevPos==-1&&(this._prevPos=NaN),this._prevPosition=pos,this._t=0,this._updateTimeline())},p._reset=function(){this._prevPos=-1,this._t=this.currentFrame=0,this.paused=!1},p._updateTimeline=function(){var tl=this.timeline,synched=this.mode!=MovieClip.INDEPENDENT;tl.loop=null==this.loop||this.loop;var pos=synched?this.startPosition+(this.mode==MovieClip.SINGLE_FRAME?0:this._synchOffset):this._prevPos<0?0:this._prevPosition,mode=synched||!this.actionsEnabled?createjs.Tween.NONE:null;if(this.currentFrame=tl._calcPosition(pos),tl.setPosition(pos,mode),this._prevPosition=tl._prevPosition,this._prevPos!=tl._prevPos){this.currentFrame=this._prevPos=tl._prevPos;for(var n in this._managed)this._managed[n]=1;for(var tweens=tl._tweens,i=0,l=tweens.length;i<l;i++){var tween=tweens[i],target=tween._target;if(target!=this&&!tween.passive){var offset=tween._stepPosition;target instanceof createjs.DisplayObject?this._addManagedChild(target,offset):this._setState(target.state,offset)}}var kids=this.children;for(i=kids.length-1;i>=0;i--){var id=kids[i].id;1==this._managed[id]&&(this.removeChildAt(i),delete this._managed[id])}}},p._setState=function(state,offset){if(state)for(var i=state.length-1;i>=0;i--){var o=state[i],target=o.t,props=o.p;for(var n in props)target[n]=props[n];this._addManagedChild(target,offset)}},p._addManagedChild=function(child,offset){child._off||(this.addChildAt(child,0),child instanceof MovieClip&&(child._synchOffset=offset,child.mode==MovieClip.INDEPENDENT&&child.autoReset&&!this._managed[child.id]&&child._reset()),this._managed[child.id]=2)},p._getBounds=function(matrix,ignoreTransform){var bounds=this.DisplayObject_getBounds();return bounds||(this._updateTimeline(),this.frameBounds&&(bounds=this._rectangle.copy(this.frameBounds[this.currentFrame]))),bounds?this._transformBounds(bounds,matrix,ignoreTransform):this.Container__getBounds(matrix,ignoreTransform)},createjs.MovieClip=createjs.promote(MovieClip,"Container"),MovieClipPlugin.priority=100,MovieClipPlugin.install=function(){createjs.Tween.installPlugin(MovieClipPlugin,["startPosition"])},MovieClipPlugin.init=function(tween,prop,value){return value},MovieClipPlugin.step=function(){},MovieClipPlugin.tween=function(tween,prop,value,startValues,endValues,ratio,wait,end){return tween.target instanceof MovieClip?1==ratio?endValues[prop]:startValues[prop]:value}}(),function(){"use strict";function SpriteSheetUtils(){throw"SpriteSheetUtils cannot be instantiated"}var canvas=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas");canvas.getContext&&(SpriteSheetUtils._workingCanvas=canvas,SpriteSheetUtils._workingContext=canvas.getContext("2d"),canvas.width=canvas.height=1),SpriteSheetUtils.addFlippedFrames=function(spriteSheet,horizontal,vertical,both){if(horizontal||vertical||both){var count=0;horizontal&&SpriteSheetUtils._flip(spriteSheet,++count,!0,!1),vertical&&SpriteSheetUtils._flip(spriteSheet,++count,!1,!0),both&&SpriteSheetUtils._flip(spriteSheet,++count,!0,!0)}},SpriteSheetUtils.extractFrame=function(spriteSheet,frameOrAnimation){isNaN(frameOrAnimation)&&(frameOrAnimation=spriteSheet.getAnimation(frameOrAnimation).frames[0]);var data=spriteSheet.getFrame(frameOrAnimation);if(!data)return null;var r=data.rect,canvas=SpriteSheetUtils._workingCanvas;canvas.width=r.width,canvas.height=r.height,SpriteSheetUtils._workingContext.drawImage(data.image,r.x,r.y,r.width,r.height,0,0,r.width,r.height);var img=document.createElement("img");return img.src=canvas.toDataURL("image/png"),img},SpriteSheetUtils.mergeAlpha=function(rgbImage,alphaImage,canvas){canvas||(canvas=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas")),canvas.width=Math.max(alphaImage.width,rgbImage.width),canvas.height=Math.max(alphaImage.height,rgbImage.height);var ctx=canvas.getContext("2d");return ctx.save(),ctx.drawImage(rgbImage,0,0),ctx.globalCompositeOperation="destination-in",ctx.drawImage(alphaImage,0,0),ctx.restore(),canvas},SpriteSheetUtils._flip=function(spriteSheet,count,h,v){for(var imgs=spriteSheet._images,canvas=SpriteSheetUtils._workingCanvas,ctx=SpriteSheetUtils._workingContext,il=imgs.length/count,i=0;i<il;i++){var src=imgs[i];src.__tmp=i,ctx.setTransform(1,0,0,1,0,0),ctx.clearRect(0,0,canvas.width+1,canvas.height+1),canvas.width=src.width,canvas.height=src.height,ctx.setTransform(h?-1:1,0,0,v?-1:1,h?src.width:0,v?src.height:0),ctx.drawImage(src,0,0);var img=document.createElement("img");img.src=canvas.toDataURL("image/png"),img.width=src.width,img.height=src.height,imgs.push(img)}var frames=spriteSheet._frames,fl=frames.length/count;for(i=0;i<fl;i++){src=frames[i];var rect=src.rect.clone();img=imgs[src.image.__tmp+il*count];var frame={image:img,rect:rect,regX:src.regX,regY:src.regY};h&&(rect.x=img.width-rect.x-rect.width,frame.regX=rect.width-src.regX),v&&(rect.y=img.height-rect.y-rect.height,frame.regY=rect.height-src.regY),frames.push(frame)}var sfx="_"+(h?"h":"")+(v?"v":""),names=spriteSheet._animations,data=spriteSheet._data,al=names.length/count;for(i=0;i<al;i++){var name=names[i];src=data[name];var anim={name:name+sfx,speed:src.speed,next:src.next,frames:[]};src.next&&(anim.next+=sfx),frames=src.frames;for(var j=0,l=frames.length;j<l;j++)anim.frames.push(frames[j]+fl*count);data[anim.name]=anim,names.push(anim.name)}},createjs.SpriteSheetUtils=SpriteSheetUtils}(),function(){"use strict";function SpriteSheetBuilder(framerate){this.EventDispatcher_constructor(),this.maxWidth=2048,this.maxHeight=2048,this.spriteSheet=null,this.scale=1,this.padding=1,this.timeSlice=.3,this.progress=-1,this.framerate=framerate||0,this._frames=[],this._animations={},this._data=null,this._nextFrameIndex=0,this._index=0,this._timerID=null,this._scale=1}var p=createjs.extend(SpriteSheetBuilder,createjs.EventDispatcher);SpriteSheetBuilder.ERR_DIMENSIONS="frame dimensions exceed max spritesheet dimensions",SpriteSheetBuilder.ERR_RUNNING="a build is already running",p.addFrame=function(source,sourceRect,scale,setupFunction,setupData){if(this._data)throw SpriteSheetBuilder.ERR_RUNNING;var rect=sourceRect||source.bounds||source.nominalBounds;return!rect&&source.getBounds&&(rect=source.getBounds()),rect?(scale=scale||1,this._frames.push({source:source,sourceRect:rect,scale:scale,funct:setupFunction,data:setupData,index:this._frames.length,height:rect.height*scale})-1):null},p.addAnimation=function(name,frames,next,speed){if(this._data)throw SpriteSheetBuilder.ERR_RUNNING;this._animations[name]={frames:frames,next:next,speed:speed}},p.addMovieClip=function(source,sourceRect,scale,setupFunction,setupData,labelFunction){if(this._data)throw SpriteSheetBuilder.ERR_RUNNING;var rects=source.frameBounds,rect=sourceRect||source.bounds||source.nominalBounds;if(!rect&&source.getBounds&&(rect=source.getBounds()),rect||rects){var i,l,baseFrameIndex=this._frames.length,duration=source.timeline.duration;for(i=0;i<duration;i++){var r=rects&&rects[i]?rects[i]:rect;this.addFrame(source,r,scale,this._setupMovieClipFrame,{i:i,f:setupFunction,d:setupData})}var labels=source.timeline._labels,lbls=[];for(var n in labels)lbls.push({index:labels[n],label:n});if(lbls.length)for(lbls.sort(function(a,b){return a.index-b.index}),i=0,l=lbls.length;i<l;i++){for(var label=lbls[i].label,start=baseFrameIndex+lbls[i].index,end=baseFrameIndex+(i==l-1?duration:lbls[i+1].index),frames=[],j=start;j<end;j++)frames.push(j);labelFunction&&!(label=labelFunction(label,source,start,end))||this.addAnimation(label,frames,!0)}}},p.build=function(){if(this._data)throw SpriteSheetBuilder.ERR_RUNNING;for(this._startBuild();this._drawNext(););return this._endBuild(),this.spriteSheet},p.buildAsync=function(timeSlice){if(this._data)throw SpriteSheetBuilder.ERR_RUNNING;this.timeSlice=timeSlice,this._startBuild();var _this=this;this._timerID=setTimeout(function(){_this._run()},50-50*Math.max(.01,Math.min(.99,this.timeSlice||.3)))},p.stopAsync=function(){clearTimeout(this._timerID),this._data=null},p.clone=function(){throw"SpriteSheetBuilder cannot be cloned."},p.toString=function(){return"[SpriteSheetBuilder]"},p._startBuild=function(){var pad=this.padding||0;this.progress=0,this.spriteSheet=null,this._index=0,this._scale=this.scale;var dataFrames=[];this._data={images:[],frames:dataFrames,framerate:this.framerate,animations:this._animations};var frames=this._frames.slice();if(frames.sort(function(a,b){return a.height<=b.height?-1:1}),frames[frames.length-1].height+2*pad>this.maxHeight)throw SpriteSheetBuilder.ERR_DIMENSIONS;for(var y=0,x=0,img=0;frames.length;){var o=this._fillRow(frames,y,img,dataFrames,pad);if(o.w>x&&(x=o.w),y+=o.h,!o.h||!frames.length){var canvas=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas");canvas.width=this._getSize(x,this.maxWidth),canvas.height=this._getSize(y,this.maxHeight),this._data.images[img]=canvas,o.h||(x=y=0,img++)}}},p._setupMovieClipFrame=function(source,data){var ae=source.actionsEnabled;source.actionsEnabled=!1,source.gotoAndStop(data.i),source.actionsEnabled=ae,data.f&&data.f(source,data.d,data.i)},p._getSize=function(size,max){for(var pow=4;Math.pow(2,++pow)<size;);return Math.min(max,Math.pow(2,pow))},p._fillRow=function(frames,y,img,dataFrames,pad){var w=this.maxWidth,maxH=this.maxHeight;y+=pad;for(var h=maxH-y,x=pad,height=0,i=frames.length-1;i>=0;i--){var frame=frames[i],sc=this._scale*frame.scale,rect=frame.sourceRect,source=frame.source,rx=Math.floor(sc*rect.x-pad),ry=Math.floor(sc*rect.y-pad),rh=Math.ceil(sc*rect.height+2*pad),rw=Math.ceil(sc*rect.width+2*pad);if(rw>w)throw SpriteSheetBuilder.ERR_DIMENSIONS;rh>h||x+rw>w||(frame.img=img,frame.rect=new createjs.Rectangle(x,y,rw,rh),height=height||rh,frames.splice(i,1),dataFrames[frame.index]=[x,y,rw,rh,img,Math.round(-rx+sc*source.regX-pad),Math.round(-ry+sc*source.regY-pad)],x+=rw)}return{w:x,h:height}},p._endBuild=function(){this.spriteSheet=new createjs.SpriteSheet(this._data),this._data=null,this.progress=1,this.dispatchEvent("complete")},p._run=function(){for(var ts=50*Math.max(.01,Math.min(.99,this.timeSlice||.3)),t=(new Date).getTime()+ts,complete=!1;t>(new Date).getTime();)if(!this._drawNext()){complete=!0;break}if(complete)this._endBuild();else{var _this=this;this._timerID=setTimeout(function(){_this._run()},50-ts)}var p=this.progress=this._index/this._frames.length;if(this.hasEventListener("progress")){var evt=new createjs.Event("progress");evt.progress=p,this.dispatchEvent(evt)}},p._drawNext=function(){var frame=this._frames[this._index],sc=frame.scale*this._scale,rect=frame.rect,sourceRect=frame.sourceRect,canvas=this._data.images[frame.img],ctx=canvas.getContext("2d");return frame.funct&&frame.funct(frame.source,frame.data),ctx.save(),ctx.beginPath(),ctx.rect(rect.x,rect.y,rect.width,rect.height),ctx.clip(),ctx.translate(Math.ceil(rect.x-sourceRect.x*sc),Math.ceil(rect.y-sourceRect.y*sc)),ctx.scale(sc,sc),frame.source.draw(ctx),ctx.restore(),++this._index<this._frames.length},createjs.SpriteSheetBuilder=createjs.promote(SpriteSheetBuilder,"EventDispatcher")}(),function(){"use strict";function DOMElement(htmlElement){this.DisplayObject_constructor(),"string"==typeof htmlElement&&(htmlElement=document.getElementById(htmlElement)),this.mouseEnabled=!1;var style=htmlElement.style;style.position="absolute",style.transformOrigin=style.WebkitTransformOrigin=style.msTransformOrigin=style.MozTransformOrigin=style.OTransformOrigin="0% 0%",this.htmlElement=htmlElement,this._oldProps=null}var p=createjs.extend(DOMElement,createjs.DisplayObject);p.isVisible=function(){return null!=this.htmlElement},p.draw=function(ctx,ignoreCache){return!0},p.cache=function(){},p.uncache=function(){},p.updateCache=function(){},p.hitTest=function(){},p.localToGlobal=function(){},p.globalToLocal=function(){},p.localToLocal=function(){},p.clone=function(){throw"DOMElement cannot be cloned."},p.toString=function(){return"[DOMElement (name="+this.name+")]"},p._tick=function(evtObj){var stage=this.getStage();stage&&stage.on("drawend",this._handleDrawEnd,this,!0),this.DisplayObject__tick(evtObj)},p._handleDrawEnd=function(evt){var o=this.htmlElement;if(o){var style=o.style,props=this.getConcatenatedDisplayProps(this._props),mtx=props.matrix,visibility=props.visible?"visible":"hidden";if(visibility!=style.visibility&&(style.visibility=visibility),props.visible){var oldProps=this._oldProps,oldMtx=oldProps&&oldProps.matrix,n=1e4;if(!oldMtx||!oldMtx.equals(mtx)){var str="matrix("+(mtx.a*n|0)/n+","+(mtx.b*n|0)/n+","+(mtx.c*n|0)/n+","+(mtx.d*n|0)/n+","+(mtx.tx+.5|0);style.transform=style.WebkitTransform=style.OTransform=style.msTransform=str+","+(mtx.ty+.5|0)+")",style.MozTransform=str+"px,"+(mtx.ty+.5|0)+"px)",oldProps||(oldProps=this._oldProps=new createjs.DisplayProps(!0,NaN)),oldProps.matrix.copy(mtx)}oldProps.alpha!=props.alpha&&(style.opacity=""+(props.alpha*n|0)/n,oldProps.alpha=props.alpha)}}},createjs.DOMElement=createjs.promote(DOMElement,"DisplayObject")}(),function(){"use strict";function Filter(){}var p=Filter.prototype;p.getBounds=function(rect){return rect},p.applyFilter=function(ctx,x,y,width,height,targetCtx,targetX,targetY){targetCtx=targetCtx||ctx,null==targetX&&(targetX=x),null==targetY&&(targetY=y);try{var imageData=ctx.getImageData(x,y,width,height)}catch(e){return!1}return!!this._applyFilter(imageData)&&(targetCtx.putImageData(imageData,targetX,targetY),!0)},p.toString=function(){return"[Filter]"},p.clone=function(){return new Filter},p._applyFilter=function(imageData){return!0},createjs.Filter=Filter}(),function(){"use strict";function BlurFilter(blurX,blurY,quality){(isNaN(blurX)||blurX<0)&&(blurX=0),(isNaN(blurY)||blurY<0)&&(blurY=0),(isNaN(quality)||quality<1)&&(quality=1),this.blurX=0|blurX,this.blurY=0|blurY,this.quality=0|quality}var p=createjs.extend(BlurFilter,createjs.Filter);BlurFilter.MUL_TABLE=[1,171,205,293,57,373,79,137,241,27,391,357,41,19,283,265,497,469,443,421,25,191,365,349,335,161,155,149,9,278,269,261,505,245,475,231,449,437,213,415,405,395,193,377,369,361,353,345,169,331,325,319,313,307,301,37,145,285,281,69,271,267,263,259,509,501,493,243,479,118,465,459,113,446,55,435,429,423,209,413,51,403,199,393,97,3,379,375,371,367,363,359,355,351,347,43,85,337,333,165,327,323,5,317,157,311,77,305,303,75,297,294,73,289,287,71,141,279,277,275,68,135,67,133,33,262,260,129,511,507,503,499,495,491,61,121,481,477,237,235,467,232,115,457,227,451,7,445,221,439,218,433,215,427,425,211,419,417,207,411,409,203,202,401,399,396,197,49,389,387,385,383,95,189,47,187,93,185,23,183,91,181,45,179,89,177,11,175,87,173,345,343,341,339,337,21,167,83,331,329,327,163,81,323,321,319,159,79,315,313,39,155,309,307,153,305,303,151,75,299,149,37,295,147,73,291,145,289,287,143,285,71,141,281,35,279,139,69,275,137,273,17,271,135,269,267,133,265,33,263,131,261,130,259,129,257,1],BlurFilter.SHG_TABLE=[0,9,10,11,9,12,10,11,12,9,13,13,10,9,13,13,14,14,14,14,10,13,14,14,14,13,13,13,9,14,14,14,15,14,15,14,15,15,14,15,15,15,14,15,15,15,15,15,14,15,15,15,15,15,15,12,14,15,15,13,15,15,15,15,16,16,16,15,16,14,16,16,14,16,13,16,16,16,15,16,13,16,15,16,14,9,16,16,16,16,16,16,16,16,16,13,14,16,16,15,16,16,10,16,15,16,14,16,16,14,16,16,14,16,16,14,15,16,16,16,14,15,14,15,13,16,16,15,17,17,17,17,17,17,14,15,17,17,16,16,17,16,15,17,16,17,11,17,16,17,16,17,16,17,17,16,17,17,16,17,17,16,16,17,17,17,16,14,17,17,17,17,15,16,14,16,15,16,13,16,15,16,14,16,15,16,12,16,15,16,17,17,17,17,17,13,16,15,17,17,17,16,15,17,17,17,16,15,17,17,14,16,17,17,16,17,17,16,15,17,16,14,17,16,15,17,16,17,17,16,17,15,16,17,14,17,16,15,17,16,17,13,17,16,17,17,16,17,14,17,16,17,16,17,16,17,9],p.getBounds=function(rect){var x=0|this.blurX,y=0|this.blurY;if(x<=0&&y<=0)return rect;var q=Math.pow(this.quality,.2);return(rect||new createjs.Rectangle).pad(x*q+1,y*q+1,x*q+1,y*q+1)},p.clone=function(){return new BlurFilter(this.blurX,this.blurY,this.quality)},p.toString=function(){return"[BlurFilter]"},p._applyFilter=function(imageData){var radiusX=this.blurX>>1;if(isNaN(radiusX)||radiusX<0)return!1;
	var radiusY=this.blurY>>1;if(isNaN(radiusY)||radiusY<0)return!1;if(0==radiusX&&0==radiusY)return!1;var iterations=this.quality;(isNaN(iterations)||iterations<1)&&(iterations=1),iterations|=0,iterations>3&&(iterations=3),iterations<1&&(iterations=1);var px=imageData.data,x=0,y=0,i=0,p=0,yp=0,yi=0,yw=0,r=0,g=0,b=0,a=0,pr=0,pg=0,pb=0,pa=0,divx=radiusX+radiusX+1|0,divy=radiusY+radiusY+1|0,w=0|imageData.width,h=0|imageData.height,w1=w-1|0,h1=h-1|0,rxp1=radiusX+1|0,ryp1=radiusY+1|0,ssx={r:0,b:0,g:0,a:0},sx=ssx;for(i=1;i<divx;i++)sx=sx.n={r:0,b:0,g:0,a:0};sx.n=ssx;var ssy={r:0,b:0,g:0,a:0},sy=ssy;for(i=1;i<divy;i++)sy=sy.n={r:0,b:0,g:0,a:0};sy.n=ssy;for(var si=null,mtx=0|BlurFilter.MUL_TABLE[radiusX],stx=0|BlurFilter.SHG_TABLE[radiusX],mty=0|BlurFilter.MUL_TABLE[radiusY],sty=0|BlurFilter.SHG_TABLE[radiusY];iterations-- >0;){yw=yi=0;var ms=mtx,ss=stx;for(y=h;--y>-1;){for(r=rxp1*(pr=px[0|yi]),g=rxp1*(pg=px[yi+1|0]),b=rxp1*(pb=px[yi+2|0]),a=rxp1*(pa=px[yi+3|0]),sx=ssx,i=rxp1;--i>-1;)sx.r=pr,sx.g=pg,sx.b=pb,sx.a=pa,sx=sx.n;for(i=1;i<rxp1;i++)p=yi+((w1<i?w1:i)<<2)|0,r+=sx.r=px[p],g+=sx.g=px[p+1],b+=sx.b=px[p+2],a+=sx.a=px[p+3],sx=sx.n;for(si=ssx,x=0;x<w;x++)px[yi++]=r*ms>>>ss,px[yi++]=g*ms>>>ss,px[yi++]=b*ms>>>ss,px[yi++]=a*ms>>>ss,p=yw+((p=x+radiusX+1)<w1?p:w1)<<2,r-=si.r-(si.r=px[p]),g-=si.g-(si.g=px[p+1]),b-=si.b-(si.b=px[p+2]),a-=si.a-(si.a=px[p+3]),si=si.n;yw+=w}for(ms=mty,ss=sty,x=0;x<w;x++){for(yi=x<<2|0,r=ryp1*(pr=px[yi])|0,g=ryp1*(pg=px[yi+1|0])|0,b=ryp1*(pb=px[yi+2|0])|0,a=ryp1*(pa=px[yi+3|0])|0,sy=ssy,i=0;i<ryp1;i++)sy.r=pr,sy.g=pg,sy.b=pb,sy.a=pa,sy=sy.n;for(yp=w,i=1;i<=radiusY;i++)yi=yp+x<<2,r+=sy.r=px[yi],g+=sy.g=px[yi+1],b+=sy.b=px[yi+2],a+=sy.a=px[yi+3],sy=sy.n,i<h1&&(yp+=w);if(yi=x,si=ssy,iterations>0)for(y=0;y<h;y++)p=yi<<2,px[p+3]=pa=a*ms>>>ss,pa>0?(px[p]=r*ms>>>ss,px[p+1]=g*ms>>>ss,px[p+2]=b*ms>>>ss):px[p]=px[p+1]=px[p+2]=0,p=x+((p=y+ryp1)<h1?p:h1)*w<<2,r-=si.r-(si.r=px[p]),g-=si.g-(si.g=px[p+1]),b-=si.b-(si.b=px[p+2]),a-=si.a-(si.a=px[p+3]),si=si.n,yi+=w;else for(y=0;y<h;y++)p=yi<<2,px[p+3]=pa=a*ms>>>ss,pa>0?(pa=255/pa,px[p]=(r*ms>>>ss)*pa,px[p+1]=(g*ms>>>ss)*pa,px[p+2]=(b*ms>>>ss)*pa):px[p]=px[p+1]=px[p+2]=0,p=x+((p=y+ryp1)<h1?p:h1)*w<<2,r-=si.r-(si.r=px[p]),g-=si.g-(si.g=px[p+1]),b-=si.b-(si.b=px[p+2]),a-=si.a-(si.a=px[p+3]),si=si.n,yi+=w}}return!0},createjs.BlurFilter=createjs.promote(BlurFilter,"Filter")}(),function(){"use strict";function AlphaMapFilter(alphaMap){this.alphaMap=alphaMap,this._alphaMap=null,this._mapData=null}var p=createjs.extend(AlphaMapFilter,createjs.Filter);p.clone=function(){var o=new AlphaMapFilter(this.alphaMap);return o._alphaMap=this._alphaMap,o._mapData=this._mapData,o},p.toString=function(){return"[AlphaMapFilter]"},p._applyFilter=function(imageData){if(!this.alphaMap)return!0;if(!this._prepAlphaMap())return!1;for(var data=imageData.data,map=this._mapData,i=0,l=data.length;i<l;i+=4)data[i+3]=map[i]||0;return!0},p._prepAlphaMap=function(){if(!this.alphaMap)return!1;if(this.alphaMap==this._alphaMap&&this._mapData)return!0;this._mapData=null;var ctx,map=this._alphaMap=this.alphaMap,canvas=map;map instanceof HTMLCanvasElement?ctx=canvas.getContext("2d"):(canvas=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas"),canvas.width=map.width,canvas.height=map.height,ctx=canvas.getContext("2d"),ctx.drawImage(map,0,0));try{var imgData=ctx.getImageData(0,0,map.width,map.height)}catch(e){return!1}return this._mapData=imgData.data,!0},createjs.AlphaMapFilter=createjs.promote(AlphaMapFilter,"Filter")}(),function(){"use strict";function AlphaMaskFilter(mask){this.mask=mask}var p=createjs.extend(AlphaMaskFilter,createjs.Filter);p.applyFilter=function(ctx,x,y,width,height,targetCtx,targetX,targetY){return!this.mask||(targetCtx=targetCtx||ctx,null==targetX&&(targetX=x),null==targetY&&(targetY=y),targetCtx.save(),ctx==targetCtx&&(targetCtx.globalCompositeOperation="destination-in",targetCtx.drawImage(this.mask,targetX,targetY),targetCtx.restore(),!0))},p.clone=function(){return new AlphaMaskFilter(this.mask)},p.toString=function(){return"[AlphaMaskFilter]"},createjs.AlphaMaskFilter=createjs.promote(AlphaMaskFilter,"Filter")}(),function(){"use strict";function ColorFilter(redMultiplier,greenMultiplier,blueMultiplier,alphaMultiplier,redOffset,greenOffset,blueOffset,alphaOffset){this.redMultiplier=null!=redMultiplier?redMultiplier:1,this.greenMultiplier=null!=greenMultiplier?greenMultiplier:1,this.blueMultiplier=null!=blueMultiplier?blueMultiplier:1,this.alphaMultiplier=null!=alphaMultiplier?alphaMultiplier:1,this.redOffset=redOffset||0,this.greenOffset=greenOffset||0,this.blueOffset=blueOffset||0,this.alphaOffset=alphaOffset||0}var p=createjs.extend(ColorFilter,createjs.Filter);p.toString=function(){return"[ColorFilter]"},p.clone=function(){return new ColorFilter(this.redMultiplier,this.greenMultiplier,this.blueMultiplier,this.alphaMultiplier,this.redOffset,this.greenOffset,this.blueOffset,this.alphaOffset)},p._applyFilter=function(imageData){for(var data=imageData.data,l=data.length,i=0;i<l;i+=4)data[i]=data[i]*this.redMultiplier+this.redOffset,data[i+1]=data[i+1]*this.greenMultiplier+this.greenOffset,data[i+2]=data[i+2]*this.blueMultiplier+this.blueOffset,data[i+3]=data[i+3]*this.alphaMultiplier+this.alphaOffset;return!0},createjs.ColorFilter=createjs.promote(ColorFilter,"Filter")}(),function(){"use strict";function ColorMatrix(brightness,contrast,saturation,hue){this.setColor(brightness,contrast,saturation,hue)}var p=ColorMatrix.prototype;ColorMatrix.DELTA_INDEX=[0,.01,.02,.04,.05,.06,.07,.08,.1,.11,.12,.14,.15,.16,.17,.18,.2,.21,.22,.24,.25,.27,.28,.3,.32,.34,.36,.38,.4,.42,.44,.46,.48,.5,.53,.56,.59,.62,.65,.68,.71,.74,.77,.8,.83,.86,.89,.92,.95,.98,1,1.06,1.12,1.18,1.24,1.3,1.36,1.42,1.48,1.54,1.6,1.66,1.72,1.78,1.84,1.9,1.96,2,2.12,2.25,2.37,2.5,2.62,2.75,2.87,3,3.2,3.4,3.6,3.8,4,4.3,4.7,4.9,5,5.5,6,6.5,6.8,7,7.3,7.5,7.8,8,8.4,8.7,9,9.4,9.6,9.8,10],ColorMatrix.IDENTITY_MATRIX=[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1],ColorMatrix.LENGTH=ColorMatrix.IDENTITY_MATRIX.length,p.setColor=function(brightness,contrast,saturation,hue){return this.reset().adjustColor(brightness,contrast,saturation,hue)},p.reset=function(){return this.copy(ColorMatrix.IDENTITY_MATRIX)},p.adjustColor=function(brightness,contrast,saturation,hue){return this.adjustHue(hue),this.adjustContrast(contrast),this.adjustBrightness(brightness),this.adjustSaturation(saturation)},p.adjustBrightness=function(value){return 0==value||isNaN(value)?this:(value=this._cleanValue(value,255),this._multiplyMatrix([1,0,0,0,value,0,1,0,0,value,0,0,1,0,value,0,0,0,1,0,0,0,0,0,1]),this)},p.adjustContrast=function(value){if(0==value||isNaN(value))return this;value=this._cleanValue(value,100);var x;return value<0?x=127+value/100*127:(x=value%1,x=0==x?ColorMatrix.DELTA_INDEX[value]:ColorMatrix.DELTA_INDEX[value<<0]*(1-x)+ColorMatrix.DELTA_INDEX[(value<<0)+1]*x,x=127*x+127),this._multiplyMatrix([x/127,0,0,0,.5*(127-x),0,x/127,0,0,.5*(127-x),0,0,x/127,0,.5*(127-x),0,0,0,1,0,0,0,0,0,1]),this},p.adjustSaturation=function(value){if(0==value||isNaN(value))return this;value=this._cleanValue(value,100);var x=1+(value>0?3*value/100:value/100),lumR=.3086,lumG=.6094,lumB=.082;return this._multiplyMatrix([lumR*(1-x)+x,lumG*(1-x),lumB*(1-x),0,0,lumR*(1-x),lumG*(1-x)+x,lumB*(1-x),0,0,lumR*(1-x),lumG*(1-x),lumB*(1-x)+x,0,0,0,0,0,1,0,0,0,0,0,1]),this},p.adjustHue=function(value){if(0==value||isNaN(value))return this;value=this._cleanValue(value,180)/180*Math.PI;var cosVal=Math.cos(value),sinVal=Math.sin(value),lumR=.213,lumG=.715,lumB=.072;return this._multiplyMatrix([lumR+cosVal*(1-lumR)+sinVal*-lumR,lumG+cosVal*-lumG+sinVal*-lumG,lumB+cosVal*-lumB+sinVal*(1-lumB),0,0,lumR+cosVal*-lumR+.143*sinVal,lumG+cosVal*(1-lumG)+.14*sinVal,lumB+cosVal*-lumB+sinVal*-.283,0,0,lumR+cosVal*-lumR+sinVal*-(1-lumR),lumG+cosVal*-lumG+sinVal*lumG,lumB+cosVal*(1-lumB)+sinVal*lumB,0,0,0,0,0,1,0,0,0,0,0,1]),this},p.concat=function(matrix){return matrix=this._fixMatrix(matrix),matrix.length!=ColorMatrix.LENGTH?this:(this._multiplyMatrix(matrix),this)},p.clone=function(){return(new ColorMatrix).copy(this)},p.toArray=function(){for(var arr=[],i=0,l=ColorMatrix.LENGTH;i<l;i++)arr[i]=this[i];return arr},p.copy=function(matrix){for(var l=ColorMatrix.LENGTH,i=0;i<l;i++)this[i]=matrix[i];return this},p.toString=function(){return"[ColorMatrix]"},p._multiplyMatrix=function(matrix){var i,j,k,col=[];for(i=0;i<5;i++){for(j=0;j<5;j++)col[j]=this[j+5*i];for(j=0;j<5;j++){var val=0;for(k=0;k<5;k++)val+=matrix[j+5*k]*col[k];this[j+5*i]=val}}},p._cleanValue=function(value,limit){return Math.min(limit,Math.max(-limit,value))},p._fixMatrix=function(matrix){return matrix instanceof ColorMatrix&&(matrix=matrix.toArray()),matrix.length<ColorMatrix.LENGTH?matrix=matrix.slice(0,matrix.length).concat(ColorMatrix.IDENTITY_MATRIX.slice(matrix.length,ColorMatrix.LENGTH)):matrix.length>ColorMatrix.LENGTH&&(matrix=matrix.slice(0,ColorMatrix.LENGTH)),matrix},createjs.ColorMatrix=ColorMatrix}(),function(){"use strict";function ColorMatrixFilter(matrix){this.matrix=matrix}var p=createjs.extend(ColorMatrixFilter,createjs.Filter);p.toString=function(){return"[ColorMatrixFilter]"},p.clone=function(){return new ColorMatrixFilter(this.matrix)},p._applyFilter=function(imageData){for(var r,g,b,a,data=imageData.data,l=data.length,mtx=this.matrix,m0=mtx[0],m1=mtx[1],m2=mtx[2],m3=mtx[3],m4=mtx[4],m5=mtx[5],m6=mtx[6],m7=mtx[7],m8=mtx[8],m9=mtx[9],m10=mtx[10],m11=mtx[11],m12=mtx[12],m13=mtx[13],m14=mtx[14],m15=mtx[15],m16=mtx[16],m17=mtx[17],m18=mtx[18],m19=mtx[19],i=0;i<l;i+=4)r=data[i],g=data[i+1],b=data[i+2],a=data[i+3],data[i]=r*m0+g*m1+b*m2+a*m3+m4,data[i+1]=r*m5+g*m6+b*m7+a*m8+m9,data[i+2]=r*m10+g*m11+b*m12+a*m13+m14,data[i+3]=r*m15+g*m16+b*m17+a*m18+m19;return!0},createjs.ColorMatrixFilter=createjs.promote(ColorMatrixFilter,"Filter")}(),function(){"use strict";function Touch(){throw"Touch cannot be instantiated"}Touch.isSupported=function(){return!!("ontouchstart"in window||window.navigator.msPointerEnabled&&window.navigator.msMaxTouchPoints>0||window.navigator.pointerEnabled&&window.navigator.maxTouchPoints>0)},Touch.enable=function(stage,singleTouch,allowDefault){return!!(stage&&stage.canvas&&Touch.isSupported())&&(!!stage.__touch||(stage.__touch={pointers:{},multitouch:!singleTouch,preventDefault:!allowDefault,count:0},"ontouchstart"in window?Touch._IOS_enable(stage):(window.navigator.msPointerEnabled||window.navigator.pointerEnabled)&&Touch._IE_enable(stage),!0))},Touch.disable=function(stage){stage&&("ontouchstart"in window?Touch._IOS_disable(stage):(window.navigator.msPointerEnabled||window.navigator.pointerEnabled)&&Touch._IE_disable(stage),delete stage.__touch)},Touch._IOS_enable=function(stage){var canvas=stage.canvas,f=stage.__touch.f=function(e){Touch._IOS_handleEvent(stage,e)};canvas.addEventListener("touchstart",f,!1),canvas.addEventListener("touchmove",f,!1),canvas.addEventListener("touchend",f,!1),canvas.addEventListener("touchcancel",f,!1)},Touch._IOS_disable=function(stage){var canvas=stage.canvas;if(canvas){var f=stage.__touch.f;canvas.removeEventListener("touchstart",f,!1),canvas.removeEventListener("touchmove",f,!1),canvas.removeEventListener("touchend",f,!1),canvas.removeEventListener("touchcancel",f,!1)}},Touch._IOS_handleEvent=function(stage,e){if(stage){stage.__touch.preventDefault&&e.preventDefault&&e.preventDefault();for(var touches=e.changedTouches,type=e.type,i=0,l=touches.length;i<l;i++){var touch=touches[i],id=touch.identifier;touch.target==stage.canvas&&("touchstart"==type?this._handleStart(stage,id,e,touch.pageX,touch.pageY):"touchmove"==type?this._handleMove(stage,id,e,touch.pageX,touch.pageY):"touchend"!=type&&"touchcancel"!=type||this._handleEnd(stage,id,e))}}},Touch._IE_enable=function(stage){var canvas=stage.canvas,f=stage.__touch.f=function(e){Touch._IE_handleEvent(stage,e)};void 0===window.navigator.pointerEnabled?(canvas.addEventListener("MSPointerDown",f,!1),window.addEventListener("MSPointerMove",f,!1),window.addEventListener("MSPointerUp",f,!1),window.addEventListener("MSPointerCancel",f,!1),stage.__touch.preventDefault&&(canvas.style.msTouchAction="none")):(canvas.addEventListener("pointerdown",f,!1),window.addEventListener("pointermove",f,!1),window.addEventListener("pointerup",f,!1),window.addEventListener("pointercancel",f,!1),stage.__touch.preventDefault&&(canvas.style.touchAction="none")),stage.__touch.activeIDs={}},Touch._IE_disable=function(stage){var f=stage.__touch.f;void 0===window.navigator.pointerEnabled?(window.removeEventListener("MSPointerMove",f,!1),window.removeEventListener("MSPointerUp",f,!1),window.removeEventListener("MSPointerCancel",f,!1),stage.canvas&&stage.canvas.removeEventListener("MSPointerDown",f,!1)):(window.removeEventListener("pointermove",f,!1),window.removeEventListener("pointerup",f,!1),window.removeEventListener("pointercancel",f,!1),stage.canvas&&stage.canvas.removeEventListener("pointerdown",f,!1))},Touch._IE_handleEvent=function(stage,e){if(stage){stage.__touch.preventDefault&&e.preventDefault&&e.preventDefault();var type=e.type,id=e.pointerId,ids=stage.__touch.activeIDs;if("MSPointerDown"==type||"pointerdown"==type){if(e.srcElement!=stage.canvas)return;ids[id]=!0,this._handleStart(stage,id,e,e.pageX,e.pageY)}else ids[id]&&("MSPointerMove"==type||"pointermove"==type?this._handleMove(stage,id,e,e.pageX,e.pageY):"MSPointerUp"!=type&&"MSPointerCancel"!=type&&"pointerup"!=type&&"pointercancel"!=type||(delete ids[id],this._handleEnd(stage,id,e)))}},Touch._handleStart=function(stage,id,e,x,y){var props=stage.__touch;if(props.multitouch||!props.count){var ids=props.pointers;ids[id]||(ids[id]=!0,props.count++,stage._handlePointerDown(id,e,x,y))}},Touch._handleMove=function(stage,id,e,x,y){stage.__touch.pointers[id]&&stage._handlePointerMove(id,e,x,y)},Touch._handleEnd=function(stage,id,e){var props=stage.__touch,ids=props.pointers;ids[id]&&(props.count--,stage._handlePointerUp(id,e,!0),delete ids[id])},createjs.Touch=Touch}(),function(createjs){"use strict";var s=createjs.EaselJS=createjs.EaselJS||{};s.version="0.8.2",s.buildDate="Sat, 12 Nov 2016 06:45:03 GMT"}(scope.createjs),function(createjs){"use strict";var s=createjs.PreloadJS=createjs.PreloadJS||{};s.version="0.6.2",s.buildDate="Sat, 12 Nov 2016 06:45:00 GMT"}(scope.createjs),function(){"use strict";createjs.proxy=function(method,scope){var aArgs=Array.prototype.slice.call(arguments,2);return function(){return method.apply(scope,Array.prototype.slice.call(arguments,0).concat(aArgs))}}}(),function(){"use strict";function ErrorEvent(title,message,data){this.Event_constructor("error"),this.title=title,this.message=message,this.data=data}var p=createjs.extend(ErrorEvent,createjs.Event);p.clone=function(){return new createjs.ErrorEvent(this.title,this.message,this.data)},createjs.ErrorEvent=createjs.promote(ErrorEvent,"Event")}(),function(scope){"use strict";function ProgressEvent(loaded,total){this.Event_constructor("progress"),this.loaded=loaded,this.total=null==total?1:total,this.progress=0==total?0:this.loaded/this.total}var p=createjs.extend(ProgressEvent,createjs.Event);p.clone=function(){return new createjs.ProgressEvent(this.loaded,this.total)},createjs.ProgressEvent=createjs.promote(ProgressEvent,"Event")}(window),function(){function runInContext(context,exports){function has(name){if(has[name]!==undef)return has[name];var isSupported;if("bug-string-char-index"==name)isSupported="a"!="a"[0];else if("json"==name)isSupported=has("json-stringify")&&has("json-parse");else{var value,serialized='{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';if("json-stringify"==name){var stringify=exports.stringify,stringifySupported="function"==typeof stringify&&isExtended;if(stringifySupported){(value=function(){return 1}).toJSON=value;try{stringifySupported="0"===stringify(0)&&"0"===stringify(new Number)&&'""'==stringify(new String)&&stringify(getClass)===undef&&stringify(undef)===undef&&stringify()===undef&&"1"===stringify(value)&&"[1]"==stringify([value])&&"[null]"==stringify([undef])&&"null"==stringify(null)&&"[null,null,null]"==stringify([undef,getClass,null])&&stringify({a:[value,!0,!1,null,"\0\b\n\f\r\t"]})==serialized&&"1"===stringify(null,value)&&"[\n 1,\n 2\n]"==stringify([1,2],null,1)&&'"-271821-04-20T00:00:00.000Z"'==stringify(new Date(-864e13))&&'"+275760-09-13T00:00:00.000Z"'==stringify(new Date(864e13))&&'"-000001-01-01T00:00:00.000Z"'==stringify(new Date(-621987552e5))&&'"1969-12-31T23:59:59.999Z"'==stringify(new Date(-1))}catch(exception){stringifySupported=!1}}isSupported=stringifySupported}if("json-parse"==name){var parse=exports.parse;if("function"==typeof parse)try{if(0===parse("0")&&!parse(!1)){value=parse(serialized);var parseSupported=5==value.a.length&&1===value.a[0];if(parseSupported){try{parseSupported=!parse('"\t"')}catch(exception){}if(parseSupported)try{parseSupported=1!==parse("01")}catch(exception){}if(parseSupported)try{parseSupported=1!==parse("1.")}catch(exception){}}}}catch(exception){parseSupported=!1}isSupported=parseSupported}}return has[name]=!!isSupported}context||(context=root.Object()),exports||(exports=root.Object());var Number=context.Number||root.Number,String=context.String||root.String,Object=context.Object||root.Object,Date=context.Date||root.Date,SyntaxError=context.SyntaxError||root.SyntaxError,TypeError=context.TypeError||root.TypeError,Math=context.Math||root.Math,nativeJSON=context.JSON||root.JSON;"object"==typeof nativeJSON&&nativeJSON&&(exports.stringify=nativeJSON.stringify,exports.parse=nativeJSON.parse);var isProperty,forEach,undef,objectProto=Object.prototype,getClass=objectProto.toString,isExtended=new Date(-0xc782b5b800cec);try{isExtended=isExtended.getUTCFullYear()==-109252&&0===isExtended.getUTCMonth()&&1===isExtended.getUTCDate()&&10==isExtended.getUTCHours()&&37==isExtended.getUTCMinutes()&&6==isExtended.getUTCSeconds()&&708==isExtended.getUTCMilliseconds()}catch(exception){}if(!has("json")){var functionClass="[object Function]",dateClass="[object Date]",numberClass="[object Number]",stringClass="[object String]",arrayClass="[object Array]",booleanClass="[object Boolean]",charIndexBuggy=has("bug-string-char-index");if(!isExtended)var floor=Math.floor,Months=[0,31,59,90,120,151,181,212,243,273,304,334],getDay=function(year,month){return Months[month]+365*(year-1970)+floor((year-1969+(month=+(month>1)))/4)-floor((year-1901+month)/100)+floor((year-1601+month)/400)};if((isProperty=objectProto.hasOwnProperty)||(isProperty=function(property){var constructor,members={};return(members.__proto__=null,members.__proto__={toString:1},members).toString!=getClass?isProperty=function(property){var original=this.__proto__,result=property in(this.__proto__=null,this);return this.__proto__=original,result}:(constructor=members.constructor,isProperty=function(property){var parent=(this.constructor||constructor).prototype;return property in this&&!(property in parent&&this[property]===parent[property])}),members=null,isProperty.call(this,property)}),forEach=function(object,callback){var Properties,members,property,size=0;(Properties=function(){this.valueOf=0}).prototype.valueOf=0,members=new Properties;for(property in members)isProperty.call(members,property)&&size++;return Properties=members=null,size?forEach=2==size?function(object,callback){var property,members={},isFunction=getClass.call(object)==functionClass;for(property in object)isFunction&&"prototype"==property||isProperty.call(members,property)||!(members[property]=1)||!isProperty.call(object,property)||callback(property)}:function(object,callback){var property,isConstructor,isFunction=getClass.call(object)==functionClass;for(property in object)isFunction&&"prototype"==property||!isProperty.call(object,property)||(isConstructor="constructor"===property)||callback(property);(isConstructor||isProperty.call(object,property="constructor"))&&callback(property)}:(members=["valueOf","toString","toLocaleString","propertyIsEnumerable","isPrototypeOf","hasOwnProperty","constructor"],forEach=function(object,callback){var property,length,isFunction=getClass.call(object)==functionClass,hasProperty=!isFunction&&"function"!=typeof object.constructor&&objectTypes[typeof object.hasOwnProperty]&&object.hasOwnProperty||isProperty;for(property in object)isFunction&&"prototype"==property||!hasProperty.call(object,property)||callback(property);for(length=members.length;property=members[--length];hasProperty.call(object,property)&&callback(property));}),forEach(object,callback)},!has("json-stringify")){var Escapes={92:"\\\\",34:'\\"',8:"\\b",12:"\\f",10:"\\n",13:"\\r",9:"\\t"},leadingZeroes="000000",toPaddedString=function(width,value){return(leadingZeroes+(value||0)).slice(-width)},unicodePrefix="\\u00",quote=function(value){for(var result='"',index=0,length=value.length,useCharIndex=!charIndexBuggy||length>10,symbols=useCharIndex&&(charIndexBuggy?value.split(""):value);index<length;index++){var charCode=value.charCodeAt(index);switch(charCode){case 8:case 9:case 10:case 12:case 13:case 34:case 92:result+=Escapes[charCode];break;default:if(charCode<32){result+=unicodePrefix+toPaddedString(2,charCode.toString(16));break}result+=useCharIndex?symbols[index]:value.charAt(index)}}return result+'"'},serialize=function(property,object,callback,properties,whitespace,indentation,stack){var value,className,year,month,date,time,hours,minutes,seconds,milliseconds,results,element,index,length,prefix,result;try{value=object[property]}catch(exception){}if("object"==typeof value&&value)if(className=getClass.call(value),className!=dateClass||isProperty.call(value,"toJSON"))"function"==typeof value.toJSON&&(className!=numberClass&&className!=stringClass&&className!=arrayClass||isProperty.call(value,"toJSON"))&&(value=value.toJSON(property));else if(value>-1/0&&value<1/0){if(getDay){for(date=floor(value/864e5),year=floor(date/365.2425)+1970-1;getDay(year+1,0)<=date;year++);for(month=floor((date-getDay(year,0))/30.42);getDay(year,month+1)<=date;month++);date=1+date-getDay(year,month),time=(value%864e5+864e5)%864e5,hours=floor(time/36e5)%24,minutes=floor(time/6e4)%60,seconds=floor(time/1e3)%60,milliseconds=time%1e3}else year=value.getUTCFullYear(),month=value.getUTCMonth(),date=value.getUTCDate(),hours=value.getUTCHours(),minutes=value.getUTCMinutes(),seconds=value.getUTCSeconds(),milliseconds=value.getUTCMilliseconds();value=(year<=0||year>=1e4?(year<0?"-":"+")+toPaddedString(6,year<0?-year:year):toPaddedString(4,year))+"-"+toPaddedString(2,month+1)+"-"+toPaddedString(2,date)+"T"+toPaddedString(2,hours)+":"+toPaddedString(2,minutes)+":"+toPaddedString(2,seconds)+"."+toPaddedString(3,milliseconds)+"Z"}else value=null;if(callback&&(value=callback.call(object,property,value)),null===value)return"null";if(className=getClass.call(value),className==booleanClass)return""+value;if(className==numberClass)return value>-1/0&&value<1/0?""+value:"null";if(className==stringClass)return quote(""+value);if("object"==typeof value){for(length=stack.length;length--;)if(stack[length]===value)throw TypeError();if(stack.push(value),results=[],prefix=indentation,indentation+=whitespace,className==arrayClass){for(index=0,length=value.length;index<length;index++)element=serialize(index,value,callback,properties,whitespace,indentation,stack),results.push(element===undef?"null":element);result=results.length?whitespace?"[\n"+indentation+results.join(",\n"+indentation)+"\n"+prefix+"]":"["+results.join(",")+"]":"[]"}else forEach(properties||value,function(property){var element=serialize(property,value,callback,properties,whitespace,indentation,stack);element!==undef&&results.push(quote(property)+":"+(whitespace?" ":"")+element)}),result=results.length?whitespace?"{\n"+indentation+results.join(",\n"+indentation)+"\n"+prefix+"}":"{"+results.join(",")+"}":"{}";return stack.pop(),result}};exports.stringify=function(source,filter,width){var whitespace,callback,properties,className;if(objectTypes[typeof filter]&&filter)if((className=getClass.call(filter))==functionClass)callback=filter;else if(className==arrayClass){properties={};for(var value,index=0,length=filter.length;index<length;value=filter[index++],className=getClass.call(value),(className==stringClass||className==numberClass)&&(properties[value]=1));}if(width)if((className=getClass.call(width))==numberClass){if((width-=width%1)>0)for(whitespace="",width>10&&(width=10);whitespace.length<width;whitespace+=" ");}else className==stringClass&&(whitespace=width.length<=10?width:width.slice(0,10));return serialize("",(value={},value[""]=source,value),callback,properties,whitespace,"",[])}}if(!has("json-parse")){var Index,Source,fromCharCode=String.fromCharCode,Unescapes={92:"\\",34:'"',47:"/",98:"\b",116:"\t",110:"\n",102:"\f",114:"\r"},abort=function(){throw Index=Source=null,SyntaxError()},lex=function(){for(var value,begin,position,isSigned,charCode,source=Source,length=source.length;Index<length;)switch(charCode=source.charCodeAt(Index)){case 9:case 10:case 13:case 32:Index++;break;case 123:case 125:case 91:case 93:case 58:case 44:return value=charIndexBuggy?source.charAt(Index):source[Index],Index++,value;case 34:for(value="@",Index++;Index<length;)if(charCode=source.charCodeAt(Index),charCode<32)abort();else if(92==charCode)switch(charCode=source.charCodeAt(++Index)){case 92:case 34:case 47:case 98:case 116:case 110:case 102:case 114:value+=Unescapes[charCode],Index++;break;case 117:for(begin=++Index,position=Index+4;Index<position;Index++)charCode=source.charCodeAt(Index),charCode>=48&&charCode<=57||charCode>=97&&charCode<=102||charCode>=65&&charCode<=70||abort();value+=fromCharCode("0x"+source.slice(begin,Index));break;default:abort()}else{if(34==charCode)break;for(charCode=source.charCodeAt(Index),begin=Index;charCode>=32&&92!=charCode&&34!=charCode;)charCode=source.charCodeAt(++Index);value+=source.slice(begin,Index)}if(34==source.charCodeAt(Index))return Index++,value;abort();default:if(begin=Index,45==charCode&&(isSigned=!0,charCode=source.charCodeAt(++Index)),charCode>=48&&charCode<=57){for(48==charCode&&(charCode=source.charCodeAt(Index+1),charCode>=48&&charCode<=57)&&abort(),isSigned=!1;Index<length&&(charCode=source.charCodeAt(Index),charCode>=48&&charCode<=57);Index++);if(46==source.charCodeAt(Index)){for(position=++Index;position<length&&(charCode=source.charCodeAt(position),charCode>=48&&charCode<=57);position++);position==Index&&abort(),Index=position}if(charCode=source.charCodeAt(Index),101==charCode||69==charCode){for(charCode=source.charCodeAt(++Index),43!=charCode&&45!=charCode||Index++,position=Index;position<length&&(charCode=source.charCodeAt(position),charCode>=48&&charCode<=57);position++);position==Index&&abort(),Index=position}return+source.slice(begin,Index)}if(isSigned&&abort(),"true"==source.slice(Index,Index+4))return Index+=4,!0;if("false"==source.slice(Index,Index+5))return Index+=5,!1;if("null"==source.slice(Index,Index+4))return Index+=4,null;abort()}return"$"},get=function(value){var results,hasMembers;if("$"==value&&abort(),"string"==typeof value){if("@"==(charIndexBuggy?value.charAt(0):value[0]))return value.slice(1);if("["==value){for(results=[];value=lex(),"]"!=value;hasMembers||(hasMembers=!0))hasMembers&&(","==value?(value=lex(),"]"==value&&abort()):abort()),","==value&&abort(),results.push(get(value));return results}if("{"==value){for(results={};value=lex(),"}"!=value;hasMembers||(hasMembers=!0))hasMembers&&(","==value?(value=lex(),"}"==value&&abort()):abort()),","!=value&&"string"==typeof value&&"@"==(charIndexBuggy?value.charAt(0):value[0])&&":"==lex()||abort(),results[value.slice(1)]=get(lex());return results}abort()}return value},update=function(source,property,callback){var element=walk(source,property,callback);element===undef?delete source[property]:source[property]=element},walk=function(source,property,callback){var length,value=source[property];if("object"==typeof value&&value)if(getClass.call(value)==arrayClass)for(length=value.length;length--;)update(value,length,callback);else forEach(value,function(property){update(value,property,callback)});return callback.call(source,property,value)};exports.parse=function(source,callback){var result,value;return Index=0,Source=""+source,result=get(lex()),"$"!=lex()&&abort(),Index=Source=null,callback&&getClass.call(callback)==functionClass?walk((value={},value[""]=result,value),"",callback):result}}}return exports.runInContext=runInContext,exports}var isLoader=__webpack_require__(8),objectTypes={function:!0,object:!0},freeExports=objectTypes[typeof exports]&&exports&&!exports.nodeType&&exports,root=objectTypes[typeof window]&&window||this,freeGlobal=freeExports&&objectTypes[typeof module]&&module&&!module.nodeType&&"object"==typeof global&&global;if(!freeGlobal||freeGlobal.global!==freeGlobal&&freeGlobal.window!==freeGlobal&&freeGlobal.self!==freeGlobal||(root=freeGlobal),freeExports&&!isLoader)runInContext(root,freeExports);else{var nativeJSON=root.JSON,previousJSON=root.JSON3,isRestored=!1,JSON3=runInContext(root,root.JSON3={noConflict:function(){return isRestored||(isRestored=!0,root.JSON=nativeJSON,root.JSON3=previousJSON,nativeJSON=previousJSON=null),JSON3}});root.JSON={parse:JSON3.parse,stringify:JSON3.stringify}}isLoader&&(__WEBPACK_AMD_DEFINE_RESULT__=function(){return JSON3}.call(exports,__webpack_require__,exports,module),!(void 0!==__WEBPACK_AMD_DEFINE_RESULT__&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)))}.call(this),function(){var s={};s.a=function(){return s.el("a")},s.svg=function(){return s.el("svg")},s.object=function(){return s.el("object")},s.image=function(){return s.el("image")},s.img=function(){return s.el("img")},s.style=function(){return s.el("style")},s.link=function(){return s.el("link")},s.script=function(){return s.el("script")},s.audio=function(){return s.el("audio")},s.video=function(){return s.el("video")},s.text=function(value){return document.createTextNode(value)},s.el=function(name){return document.createElement(name)},createjs.Elements=s}(),function(){var s={};s.ABSOLUTE_PATT=/^(?:\w+:)?\/{2}/i,s.RELATIVE_PATT=/^[.\/]*?\//i,s.EXTENSION_PATT=/\/?[^\/]+\.(\w{1,5})$/i,s.parseURI=function(path){var info={absolute:!1,relative:!1,protocol:null,hostname:null,port:null,pathname:null,search:null,hash:null,host:null};if(null==path)return info;var parser=createjs.Elements.a();parser.href=path;for(var n in info)n in parser&&(info[n]=parser[n]);var queryIndex=path.indexOf("?");queryIndex>-1&&(path=path.substr(0,queryIndex));var match;return s.ABSOLUTE_PATT.test(path)?info.absolute=!0:s.RELATIVE_PATT.test(path)&&(info.relative=!0),(match=path.match(s.EXTENSION_PATT))&&(info.extension=match[1].toLowerCase()),info},s.formatQueryString=function(data,query){if(null==data)throw new Error("You must specify data.");var params=[];for(var n in data)params.push(n+"="+escape(data[n]));return query&&(params=params.concat(query)),params.join("&")},s.buildURI=function(src,data){if(null==data)return src;var query=[],idx=src.indexOf("?");if(idx!=-1){var q=src.slice(idx+1);query=query.concat(q.split("&"))}return idx!=-1?src.slice(0,idx)+"?"+this.formatQueryString(data,query):src+"?"+this.formatQueryString(data,query)},s.isCrossDomain=function(item){var target=createjs.Elements.a();target.href=item.src;var host=createjs.Elements.a();host.href=location.href;var crossdomain=""!=target.hostname&&(target.port!=host.port||target.protocol!=host.protocol||target.hostname!=host.hostname);return crossdomain},s.isLocal=function(item){var target=createjs.Elements.a();return target.href=item.src,""==target.hostname&&"file:"==target.protocol},createjs.URLUtils=s}(),function(){var s={};s.appendToHead=function(el){s.getHead().appendChild(el)},s.appendToBody=function(el){s.getBody().appendChild(el)},s.getHead=function(){return document.head||document.getElementsByTagName("head")[0]},s.getBody=function(){return document.body||document.getElementsByTagName("body")[0]},s.removeChild=function(el){el.parent&&el.parent.removeChild(el)},s.isImageTag=function(item){return item instanceof HTMLImageElement;
	},s.isAudioTag=function(item){return!!window.HTMLAudioElement&&item instanceof HTMLAudioElement},s.isVideoTag=function(item){return!!window.HTMLVideoElement&&item instanceof HTMLVideoElement},createjs.DomUtils=s}(),function(){var s={};s.parseXML=function(text){var xml=null;try{if(window.DOMParser){var parser=new DOMParser;xml=parser.parseFromString(text,"text/xml")}}catch(e){}if(!xml)try{xml=new ActiveXObject("Microsoft.XMLDOM"),xml.async=!1,xml.loadXML(text)}catch(e){xml=null}return xml},s.parseJSON=function(value){if(null==value)return null;try{return JSON.parse(value)}catch(e){throw e}},createjs.DataUtils=s}(),function(){var s={};s.BINARY="binary",s.CSS="css",s.IMAGE="image",s.JAVASCRIPT="javascript",s.JSON="json",s.JSONP="jsonp",s.MANIFEST="manifest",s.SOUND="sound",s.VIDEO="video",s.SPRITESHEET="spritesheet",s.SVG="svg",s.TEXT="text",s.XML="xml",createjs.Types=s}(),function(){var s={};s.POST="POST",s.GET="GET",createjs.Methods=s}(),function(){"use strict";function LoadItem(){this.src=null,this.type=null,this.id=null,this.maintainOrder=!1,this.callback=null,this.data=null,this.method=createjs.LoadItem.GET,this.values=null,this.headers=null,this.withCredentials=!1,this.mimeType=null,this.crossOrigin=null,this.loadTimeout=s.LOAD_TIMEOUT_DEFAULT}var p=LoadItem.prototype={},s=LoadItem;s.LOAD_TIMEOUT_DEFAULT=8e3,s.create=function(value){if("string"==typeof value){var item=new LoadItem;return item.src=value,item}if(value instanceof s)return value;if(value instanceof Object&&value.src)return null==value.loadTimeout&&(value.loadTimeout=s.LOAD_TIMEOUT_DEFAULT),value;throw new Error("Type not recognized.")},p.set=function(props){for(var n in props)this[n]=props[n];return this},createjs.LoadItem=s}(),function(){var s={};s.isBinary=function(type){switch(type){case createjs.AbstractLoader.IMAGE:case createjs.AbstractLoader.BINARY:return!0;default:return!1}},s.isText=function(type){switch(type){case createjs.AbstractLoader.TEXT:case createjs.AbstractLoader.JSON:case createjs.AbstractLoader.MANIFEST:case createjs.AbstractLoader.XML:case createjs.AbstractLoader.CSS:case createjs.AbstractLoader.SVG:case createjs.AbstractLoader.JAVASCRIPT:case createjs.AbstractLoader.SPRITESHEET:return!0;default:return!1}},s.getTypeByExtension=function(extension){if(null==extension)return createjs.AbstractLoader.TEXT;switch(extension.toLowerCase()){case"jpeg":case"jpg":case"gif":case"png":case"webp":case"bmp":return createjs.AbstractLoader.IMAGE;case"ogg":case"mp3":case"webm":return createjs.AbstractLoader.SOUND;case"mp4":case"webm":case"ts":return createjs.AbstractLoader.VIDEO;case"json":return createjs.AbstractLoader.JSON;case"xml":return createjs.AbstractLoader.XML;case"css":return createjs.AbstractLoader.CSS;case"js":return createjs.AbstractLoader.JAVASCRIPT;case"svg":return createjs.AbstractLoader.SVG;default:return createjs.AbstractLoader.TEXT}},createjs.RequestUtils=s}(),function(){"use strict";function AbstractLoader(loadItem,preferXHR,type){this.EventDispatcher_constructor(),this.loaded=!1,this.canceled=!1,this.progress=0,this.type=type,this.resultFormatter=null,loadItem?this._item=createjs.LoadItem.create(loadItem):this._item=null,this._preferXHR=preferXHR,this._result=null,this._rawResult=null,this._loadedItems=null,this._tagSrcAttribute=null,this._tag=null}var p=createjs.extend(AbstractLoader,createjs.EventDispatcher),s=AbstractLoader;s.POST=createjs.Methods.POST,s.GET=createjs.Methods.GET,s.BINARY=createjs.Types.BINARY,s.CSS=createjs.Types.CSS,s.IMAGE=createjs.Types.IMAGE,s.JAVASCRIPT=createjs.Types.JAVASCRIPT,s.JSON=createjs.Types.JSON,s.JSONP=createjs.Types.JSONP,s.MANIFEST="manifest",s.SOUND=createjs.Types.SOUND,s.VIDEO=createjs.Types.VIDEO,s.SPRITESHEET=createjs.Types.SPRITESHEET,s.SVG=createjs.Types.SVG,s.TEXT=createjs.Types.TEXT,s.XML=createjs.Types.XML,p.getItem=function(){return this._item},p.getResult=function(raw){return raw?this._rawResult:this._result},p.getTag=function(){return this._tag},p.setTag=function(tag){this._tag=tag},p.load=function(){this._createRequest(),this._request.on("complete",this,this),this._request.on("progress",this,this),this._request.on("loadStart",this,this),this._request.on("abort",this,this),this._request.on("timeout",this,this),this._request.on("error",this,this);var evt=new createjs.Event("initialize");evt.loader=this._request,this.dispatchEvent(evt),this._request.load()},p.cancel=function(){this.canceled=!0,this.destroy()},p.destroy=function(){this._request&&(this._request.removeAllEventListeners(),this._request.destroy()),this._request=null,this._item=null,this._rawResult=null,this._result=null,this._loadItems=null,this.removeAllEventListeners()},p.getLoadedItems=function(){return this._loadedItems},p._createRequest=function(){this._preferXHR?this._request=new createjs.XHRRequest(this._item):this._request=new createjs.TagRequest(this._item,this._tag||this._createTag(),this._tagSrcAttribute)},p._createTag=function(src){return null},p._sendLoadStart=function(){this._isCanceled()||this.dispatchEvent("loadstart")},p._sendProgress=function(value){if(!this._isCanceled()){var event=null;"number"==typeof value?(this.progress=value,event=new createjs.ProgressEvent(this.progress)):(event=value,this.progress=value.loaded/value.total,event.progress=this.progress,(isNaN(this.progress)||this.progress==1/0)&&(this.progress=0)),this.hasEventListener("progress")&&this.dispatchEvent(event)}},p._sendComplete=function(){if(!this._isCanceled()){this.loaded=!0;var event=new createjs.Event("complete");event.rawResult=this._rawResult,null!=this._result&&(event.result=this._result),this.dispatchEvent(event)}},p._sendError=function(event){!this._isCanceled()&&this.hasEventListener("error")&&(null==event&&(event=new createjs.ErrorEvent("PRELOAD_ERROR_EMPTY")),this.dispatchEvent(event))},p._isCanceled=function(){return!(null!=window.createjs&&!this.canceled)},p.resultFormatter=null,p.handleEvent=function(event){switch(event.type){case"complete":this._rawResult=event.target._response;var result=this.resultFormatter&&this.resultFormatter(this);result instanceof Function?result.call(this,createjs.proxy(this._resultFormatSuccess,this),createjs.proxy(this._resultFormatFailed,this)):(this._result=result||this._rawResult,this._sendComplete());break;case"progress":this._sendProgress(event);break;case"error":this._sendError(event);break;case"loadstart":this._sendLoadStart();break;case"abort":case"timeout":this._isCanceled()||this.dispatchEvent(new createjs.ErrorEvent("PRELOAD_"+event.type.toUpperCase()+"_ERROR"))}},p._resultFormatSuccess=function(result){this._result=result,this._sendComplete()},p._resultFormatFailed=function(event){this._sendError(event)},p.buildPath=function(src,data){return createjs.URLUtils.buildURI(src,data)},p.toString=function(){return"[PreloadJS AbstractLoader]"},createjs.AbstractLoader=createjs.promote(AbstractLoader,"EventDispatcher")}(),function(){"use strict";function AbstractMediaLoader(loadItem,preferXHR,type){this.AbstractLoader_constructor(loadItem,preferXHR,type),this.resultFormatter=this._formatResult,this._tagSrcAttribute="src",this.on("initialize",this._updateXHR,this)}var p=createjs.extend(AbstractMediaLoader,createjs.AbstractLoader);p.load=function(){this._tag||(this._tag=this._createTag(this._item.src)),this._tag.preload="auto",this._tag.load(),this.AbstractLoader_load()},p._createTag=function(){},p._createRequest=function(){this._preferXHR?this._request=new createjs.XHRRequest(this._item):this._request=new createjs.MediaTagRequest(this._item,this._tag||this._createTag(),this._tagSrcAttribute)},p._updateXHR=function(event){event.loader.setResponseType&&event.loader.setResponseType("blob")},p._formatResult=function(loader){if(this._tag.removeEventListener&&this._tag.removeEventListener("canplaythrough",this._loadedHandler),this._tag.onstalled=null,this._preferXHR){var URL=window.URL||window.webkitURL,result=loader.getResult(!0);loader.getTag().src=URL.createObjectURL(result)}return loader.getTag()},createjs.AbstractMediaLoader=createjs.promote(AbstractMediaLoader,"AbstractLoader")}(),function(){"use strict";var AbstractRequest=function(item){this._item=item},p=createjs.extend(AbstractRequest,createjs.EventDispatcher);p.load=function(){},p.destroy=function(){},p.cancel=function(){},createjs.AbstractRequest=createjs.promote(AbstractRequest,"EventDispatcher")}(),function(){"use strict";function TagRequest(loadItem,tag,srcAttribute){this.AbstractRequest_constructor(loadItem),this._tag=tag,this._tagSrcAttribute=srcAttribute,this._loadedHandler=createjs.proxy(this._handleTagComplete,this),this._addedToDOM=!1,this._startTagVisibility=null}var p=createjs.extend(TagRequest,createjs.AbstractRequest);p.load=function(){this._tag.onload=createjs.proxy(this._handleTagComplete,this),this._tag.onreadystatechange=createjs.proxy(this._handleReadyStateChange,this),this._tag.onerror=createjs.proxy(this._handleError,this);var evt=new createjs.Event("initialize");evt.loader=this._tag,this.dispatchEvent(evt),this._hideTag(),this._loadTimeout=setTimeout(createjs.proxy(this._handleTimeout,this),this._item.loadTimeout),this._tag[this._tagSrcAttribute]=this._item.src,null==this._tag.parentNode&&(createjs.DomUtils.appendToBody(this._tag),this._addedToDOM=!0)},p.destroy=function(){this._clean(),this._tag=null,this.AbstractRequest_destroy()},p._handleReadyStateChange=function(){clearTimeout(this._loadTimeout);var tag=this._tag;"loaded"!=tag.readyState&&"complete"!=tag.readyState||this._handleTagComplete()},p._handleError=function(){this._clean(),this.dispatchEvent("error")},p._handleTagComplete=function(){this._rawResult=this._tag,this._result=this.resultFormatter&&this.resultFormatter(this)||this._rawResult,this._clean(),this._showTag(),this.dispatchEvent("complete")},p._handleTimeout=function(){this._clean(),this.dispatchEvent(new createjs.Event("timeout"))},p._clean=function(){this._tag.onload=null,this._tag.onreadystatechange=null,this._tag.onerror=null,this._addedToDOM&&null!=this._tag.parentNode&&this._tag.parentNode.removeChild(this._tag),clearTimeout(this._loadTimeout)},p._hideTag=function(){this._startTagVisibility=this._tag.style.visibility,this._tag.style.visibility="hidden"},p._showTag=function(){this._tag.style.visibility=this._startTagVisibility},p._handleStalled=function(){},createjs.TagRequest=createjs.promote(TagRequest,"AbstractRequest")}(),function(){"use strict";function MediaTagRequest(loadItem,tag,srcAttribute){this.AbstractRequest_constructor(loadItem),this._tag=tag,this._tagSrcAttribute=srcAttribute,this._loadedHandler=createjs.proxy(this._handleTagComplete,this)}var p=createjs.extend(MediaTagRequest,createjs.TagRequest);p.load=function(){var sc=createjs.proxy(this._handleStalled,this);this._stalledCallback=sc;var pc=createjs.proxy(this._handleProgress,this);this._handleProgress=pc,this._tag.addEventListener("stalled",sc),this._tag.addEventListener("progress",pc),this._tag.addEventListener&&this._tag.addEventListener("canplaythrough",this._loadedHandler,!1),this.TagRequest_load()},p._handleReadyStateChange=function(){clearTimeout(this._loadTimeout);var tag=this._tag;"loaded"!=tag.readyState&&"complete"!=tag.readyState||this._handleTagComplete()},p._handleStalled=function(){},p._handleProgress=function(event){if(event&&!(event.loaded>0&&0==event.total)){var newEvent=new createjs.ProgressEvent(event.loaded,event.total);this.dispatchEvent(newEvent)}},p._clean=function(){this._tag.removeEventListener&&this._tag.removeEventListener("canplaythrough",this._loadedHandler),this._tag.removeEventListener("stalled",this._stalledCallback),this._tag.removeEventListener("progress",this._progressCallback),this.TagRequest__clean()},createjs.MediaTagRequest=createjs.promote(MediaTagRequest,"TagRequest")}(),function(){"use strict";function XHRRequest(item){this.AbstractRequest_constructor(item),this._request=null,this._loadTimeout=null,this._xhrLevel=1,this._response=null,this._rawResponse=null,this._canceled=!1,this._handleLoadStartProxy=createjs.proxy(this._handleLoadStart,this),this._handleProgressProxy=createjs.proxy(this._handleProgress,this),this._handleAbortProxy=createjs.proxy(this._handleAbort,this),this._handleErrorProxy=createjs.proxy(this._handleError,this),this._handleTimeoutProxy=createjs.proxy(this._handleTimeout,this),this._handleLoadProxy=createjs.proxy(this._handleLoad,this),this._handleReadyStateChangeProxy=createjs.proxy(this._handleReadyStateChange,this),!this._createXHR(item)}var p=createjs.extend(XHRRequest,createjs.AbstractRequest);XHRRequest.ACTIVEX_VERSIONS=["Msxml2.XMLHTTP.6.0","Msxml2.XMLHTTP.5.0","Msxml2.XMLHTTP.4.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],p.getResult=function(raw){return raw&&this._rawResponse?this._rawResponse:this._response},p.cancel=function(){this.canceled=!0,this._clean(),this._request.abort()},p.load=function(){if(null==this._request)return void this._handleError();null!=this._request.addEventListener?(this._request.addEventListener("loadstart",this._handleLoadStartProxy,!1),this._request.addEventListener("progress",this._handleProgressProxy,!1),this._request.addEventListener("abort",this._handleAbortProxy,!1),this._request.addEventListener("error",this._handleErrorProxy,!1),this._request.addEventListener("timeout",this._handleTimeoutProxy,!1),this._request.addEventListener("load",this._handleLoadProxy,!1),this._request.addEventListener("readystatechange",this._handleReadyStateChangeProxy,!1)):(this._request.onloadstart=this._handleLoadStartProxy,this._request.onprogress=this._handleProgressProxy,this._request.onabort=this._handleAbortProxy,this._request.onerror=this._handleErrorProxy,this._request.ontimeout=this._handleTimeoutProxy,this._request.onload=this._handleLoadProxy,this._request.onreadystatechange=this._handleReadyStateChangeProxy),1==this._xhrLevel&&(this._loadTimeout=setTimeout(createjs.proxy(this._handleTimeout,this),this._item.loadTimeout));try{this._item.values?this._request.send(createjs.URLUtils.formatQueryString(this._item.values)):this._request.send()}catch(error){this.dispatchEvent(new createjs.ErrorEvent("XHR_SEND",null,error))}},p.setResponseType=function(type){"blob"===type&&(type=window.URL?"blob":"arraybuffer",this._responseType=type),this._request.responseType=type},p.getAllResponseHeaders=function(){return this._request.getAllResponseHeaders instanceof Function?this._request.getAllResponseHeaders():null},p.getResponseHeader=function(header){return this._request.getResponseHeader instanceof Function?this._request.getResponseHeader(header):null},p._handleProgress=function(event){if(event&&!(event.loaded>0&&0==event.total)){var newEvent=new createjs.ProgressEvent(event.loaded,event.total);this.dispatchEvent(newEvent)}},p._handleLoadStart=function(event){clearTimeout(this._loadTimeout),this.dispatchEvent("loadstart")},p._handleAbort=function(event){this._clean(),this.dispatchEvent(new createjs.ErrorEvent("XHR_ABORTED",null,event))},p._handleError=function(event){this._clean(),this.dispatchEvent(new createjs.ErrorEvent(event.message))},p._handleReadyStateChange=function(event){4==this._request.readyState&&this._handleLoad()},p._handleLoad=function(event){if(!this.loaded){this.loaded=!0;var error=this._checkError();if(error)return void this._handleError(error);if(this._response=this._getResponse(),"arraybuffer"===this._responseType)try{this._response=new Blob([this._response])}catch(e){if(window.BlobBuilder=window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder,"TypeError"===e.name&&window.BlobBuilder){var builder=new BlobBuilder;builder.append(this._response),this._response=builder.getBlob()}}this._clean(),this.dispatchEvent(new createjs.Event("complete"))}},p._handleTimeout=function(event){this._clean(),this.dispatchEvent(new createjs.ErrorEvent("PRELOAD_TIMEOUT",null,event))},p._checkError=function(){var status=parseInt(this._request.status);return status>=400&&status<=599?new Error(status):null},p._getResponse=function(){if(null!=this._response)return this._response;if(null!=this._request.response)return this._request.response;try{if(null!=this._request.responseText)return this._request.responseText}catch(e){}try{if(null!=this._request.responseXML)return this._request.responseXML}catch(e){}return null},p._createXHR=function(item){var crossdomain=createjs.URLUtils.isCrossDomain(item),headers={},req=null;if(window.XMLHttpRequest)req=new XMLHttpRequest,crossdomain&&void 0===req.withCredentials&&window.XDomainRequest&&(req=new XDomainRequest);else{for(var i=0,l=s.ACTIVEX_VERSIONS.length;i<l;i++){var axVersion=s.ACTIVEX_VERSIONS[i];try{req=new ActiveXObject(axVersion);break}catch(e){}}if(null==req)return!1}null==item.mimeType&&createjs.RequestUtils.isText(item.type)&&(item.mimeType="text/plain; charset=utf-8"),item.mimeType&&req.overrideMimeType&&req.overrideMimeType(item.mimeType),this._xhrLevel="string"==typeof req.responseType?2:1;var src=null;if(src=item.method==createjs.AbstractLoader.GET?createjs.URLUtils.buildURI(item.src,item.values):item.src,req.open(item.method||createjs.AbstractLoader.GET,src,!0),crossdomain&&req instanceof XMLHttpRequest&&1==this._xhrLevel&&(headers.Origin=location.origin),item.values&&item.method==createjs.AbstractLoader.POST&&(headers["Content-Type"]="application/x-www-form-urlencoded"),crossdomain||headers["X-Requested-With"]||(headers["X-Requested-With"]="XMLHttpRequest"),item.headers)for(var n in item.headers)headers[n]=item.headers[n];for(n in headers)req.setRequestHeader(n,headers[n]);return req instanceof XMLHttpRequest&&void 0!==item.withCredentials&&(req.withCredentials=item.withCredentials),this._request=req,!0},p._clean=function(){clearTimeout(this._loadTimeout),null!=this._request.removeEventListener?(this._request.removeEventListener("loadstart",this._handleLoadStartProxy),this._request.removeEventListener("progress",this._handleProgressProxy),this._request.removeEventListener("abort",this._handleAbortProxy),this._request.removeEventListener("error",this._handleErrorProxy),this._request.removeEventListener("timeout",this._handleTimeoutProxy),this._request.removeEventListener("load",this._handleLoadProxy),this._request.removeEventListener("readystatechange",this._handleReadyStateChangeProxy)):(this._request.onloadstart=null,this._request.onprogress=null,this._request.onabort=null,this._request.onerror=null,this._request.ontimeout=null,this._request.onload=null,this._request.onreadystatechange=null)},p.toString=function(){return"[PreloadJS XHRRequest]"},createjs.XHRRequest=createjs.promote(XHRRequest,"AbstractRequest")}(),function(){"use strict";function LoadQueue(preferXHR,basePath,crossOrigin){this.AbstractLoader_constructor(),this._plugins=[],this._typeCallbacks={},this._extensionCallbacks={},this.next=null,this.maintainScriptOrder=!0,this.stopOnError=!1,this._maxConnections=1,this._availableLoaders=[createjs.ImageLoader,createjs.JavaScriptLoader,createjs.CSSLoader,createjs.JSONLoader,createjs.JSONPLoader,createjs.SoundLoader,createjs.ManifestLoader,createjs.SpriteSheetLoader,createjs.XMLLoader,createjs.SVGLoader,createjs.BinaryLoader,createjs.VideoLoader,createjs.TextLoader],this._defaultLoaderLength=this._availableLoaders.length,this.init(preferXHR,basePath,crossOrigin)}var p=createjs.extend(LoadQueue,createjs.AbstractLoader),s=LoadQueue;p.init=function(preferXHR,basePath,crossOrigin){this.useXHR=!0,this.preferXHR=!0,this._preferXHR=!0,this.setPreferXHR(preferXHR),this._paused=!1,this._basePath=basePath,this._crossOrigin=crossOrigin,this._loadStartWasDispatched=!1,this._currentlyLoadingScript=null,this._currentLoads=[],this._loadQueue=[],this._loadQueueBackup=[],this._loadItemsById={},this._loadItemsBySrc={},this._loadedResults={},this._loadedRawResults={},this._numItems=0,this._numItemsLoaded=0,this._scriptOrder=[],this._loadedScripts=[],this._lastProgress=NaN},s.loadTimeout=8e3,s.LOAD_TIMEOUT=0,s.BINARY=createjs.AbstractLoader.BINARY,s.CSS=createjs.AbstractLoader.CSS,s.IMAGE=createjs.AbstractLoader.IMAGE,s.JAVASCRIPT=createjs.AbstractLoader.JAVASCRIPT,s.JSON=createjs.AbstractLoader.JSON,s.JSONP=createjs.AbstractLoader.JSONP,s.MANIFEST=createjs.AbstractLoader.MANIFEST,s.SOUND=createjs.AbstractLoader.SOUND,s.VIDEO=createjs.AbstractLoader.VIDEO,s.SVG=createjs.AbstractLoader.SVG,s.TEXT=createjs.AbstractLoader.TEXT,s.XML=createjs.AbstractLoader.XML,s.POST=createjs.AbstractLoader.POST,s.GET=createjs.AbstractLoader.GET,p.registerLoader=function(loader){if(!loader||!loader.canLoadItem)throw new Error("loader is of an incorrect type.");if(this._availableLoaders.indexOf(loader)!=-1)throw new Error("loader already exists.");this._availableLoaders.unshift(loader)},p.unregisterLoader=function(loader){var idx=this._availableLoaders.indexOf(loader);idx!=-1&&idx<this._defaultLoaderLength-1&&this._availableLoaders.splice(idx,1)},p.setUseXHR=function(value){return this.setPreferXHR(value)},p.setPreferXHR=function(value){return this.preferXHR=0!=value&&null!=window.XMLHttpRequest,this.preferXHR},p.removeAll=function(){this.remove()},p.remove=function(idsOrUrls){var args=null;if(idsOrUrls&&!Array.isArray(idsOrUrls))args=[idsOrUrls];else if(idsOrUrls)args=idsOrUrls;else if(arguments.length>0)return;var itemsWereRemoved=!1;if(args){for(;args.length;){var item=args.pop(),r=this.getResult(item);for(i=this._loadQueue.length-1;i>=0;i--)if(loadItem=this._loadQueue[i].getItem(),loadItem.id==item||loadItem.src==item){this._loadQueue.splice(i,1)[0].cancel();break}for(i=this._loadQueueBackup.length-1;i>=0;i--)if(loadItem=this._loadQueueBackup[i].getItem(),loadItem.id==item||loadItem.src==item){this._loadQueueBackup.splice(i,1)[0].cancel();break}if(r)this._disposeItem(this.getItem(item));else for(var i=this._currentLoads.length-1;i>=0;i--){var loadItem=this._currentLoads[i].getItem();if(loadItem.id==item||loadItem.src==item){this._currentLoads.splice(i,1)[0].cancel(),itemsWereRemoved=!0;break}}}itemsWereRemoved&&this._loadNext()}else{this.close();for(var n in this._loadItemsById)this._disposeItem(this._loadItemsById[n]);this.init(this.preferXHR,this._basePath)}},p.reset=function(){this.close();for(var n in this._loadItemsById)this._disposeItem(this._loadItemsById[n]);for(var a=[],i=0,l=this._loadQueueBackup.length;i<l;i++)a.push(this._loadQueueBackup[i].getItem());this.loadManifest(a,!1)},p.installPlugin=function(plugin){if(null!=plugin&&null!=plugin.getPreloadHandlers){this._plugins.push(plugin);var map=plugin.getPreloadHandlers();if(map.scope=plugin,null!=map.types)for(var i=0,l=map.types.length;i<l;i++)this._typeCallbacks[map.types[i]]=map;if(null!=map.extensions)for(i=0,l=map.extensions.length;i<l;i++)this._extensionCallbacks[map.extensions[i]]=map}},p.setMaxConnections=function(value){this._maxConnections=value,!this._paused&&this._loadQueue.length>0&&this._loadNext()},p.loadFile=function(file,loadNow,basePath){if(null==file){var event=new createjs.ErrorEvent("PRELOAD_NO_FILE");return void this._sendError(event)}this._addItem(file,null,basePath),loadNow!==!1?this.setPaused(!1):this.setPaused(!0)},p.loadManifest=function(manifest,loadNow,basePath){var fileList=null,path=null;if(Array.isArray(manifest)){if(0==manifest.length){var event=new createjs.ErrorEvent("PRELOAD_MANIFEST_EMPTY");return void this._sendError(event)}fileList=manifest}else if("string"==typeof manifest)fileList=[{src:manifest,type:s.MANIFEST}];else{if("object"!=typeof manifest){var event=new createjs.ErrorEvent("PRELOAD_MANIFEST_NULL");return void this._sendError(event)}if(void 0!==manifest.src){if(null==manifest.type)manifest.type=s.MANIFEST;else if(manifest.type!=s.MANIFEST){var event=new createjs.ErrorEvent("PRELOAD_MANIFEST_TYPE");this._sendError(event)}fileList=[manifest]}else void 0!==manifest.manifest&&(fileList=manifest.manifest,path=manifest.path)}for(var i=0,l=fileList.length;i<l;i++)this._addItem(fileList[i],path,basePath);loadNow!==!1?this.setPaused(!1):this.setPaused(!0)},p.load=function(){this.setPaused(!1)},p.getItem=function(value){return this._loadItemsById[value]||this._loadItemsBySrc[value]},p.getResult=function(value,rawResult){var item=this._loadItemsById[value]||this._loadItemsBySrc[value];if(null==item)return null;var id=item.id;return rawResult&&this._loadedRawResults[id]?this._loadedRawResults[id]:this._loadedResults[id]},p.getItems=function(loaded){var arr=[];for(var n in this._loadItemsById){var item=this._loadItemsById[n],result=this.getResult(n);loaded===!0&&null==result||arr.push({item:item,result:result,rawResult:this.getResult(n,!0)})}return arr},p.setPaused=function(value){this._paused=value,this._paused||this._loadNext()},p.close=function(){for(;this._currentLoads.length;)this._currentLoads.pop().cancel();this._scriptOrder.length=0,this._loadedScripts.length=0,this.loadStartWasDispatched=!1,this._itemCount=0,this._lastProgress=NaN},p._addItem=function(value,path,basePath){var item=this._createLoadItem(value,path,basePath);if(null!=item){var loader=this._createLoader(item);null!=loader&&("plugins"in loader&&(loader.plugins=this._plugins),item._loader=loader,this._loadQueue.push(loader),this._loadQueueBackup.push(loader),this._numItems++,this._updateProgress(),(this.maintainScriptOrder&&item.type==createjs.LoadQueue.JAVASCRIPT||item.maintainOrder===!0)&&(this._scriptOrder.push(item),this._loadedScripts.push(null)))}},p._createLoadItem=function(value,path,basePath){var item=createjs.LoadItem.create(value);if(null==item)return null;var bp="",useBasePath=basePath||this._basePath;if(item.src instanceof Object){if(!item.type)return null;if(path){bp=path;var pathMatch=createjs.URLUtils.parseURI(path);null==useBasePath||pathMatch.absolute||pathMatch.relative||(bp=useBasePath+bp)}else null!=useBasePath&&(bp=useBasePath)}else{var match=createjs.URLUtils.parseURI(item.src);match.extension&&(item.ext=match.extension),null==item.type&&(item.type=createjs.RequestUtils.getTypeByExtension(item.ext));var autoId=item.src;if(!match.absolute&&!match.relative)if(path){bp=path;var pathMatch=createjs.URLUtils.parseURI(path);autoId=path+autoId,null==useBasePath||pathMatch.absolute||pathMatch.relative||(bp=useBasePath+bp)}else null!=useBasePath&&(bp=useBasePath);item.src=bp+item.src}item.path=bp,void 0!==item.id&&null!==item.id&&""!==item.id||(item.id=autoId);var customHandler=this._typeCallbacks[item.type]||this._extensionCallbacks[item.ext];if(customHandler){var result=customHandler.callback.call(customHandler.scope,item,this);if(result===!1)return null;result===!0||null!=result&&(item._loader=result),match=createjs.URLUtils.parseURI(item.src),null!=match.extension&&(item.ext=match.extension)}return this._loadItemsById[item.id]=item,this._loadItemsBySrc[item.src]=item,null==item.crossOrigin&&(item.crossOrigin=this._crossOrigin),item},p._createLoader=function(item){if(null!=item._loader)return item._loader;for(var preferXHR=this.preferXHR,i=0;i<this._availableLoaders.length;i++){var loader=this._availableLoaders[i];if(loader&&loader.canLoadItem(item))return new loader(item,preferXHR)}return null},p._loadNext=function(){if(!this._paused){this._loadStartWasDispatched||(this._sendLoadStart(),this._loadStartWasDispatched=!0),this._numItems==this._numItemsLoaded?(this.loaded=!0,this._sendComplete(),this.next&&this.next.load&&this.next.load()):this.loaded=!1;for(var i=0;i<this._loadQueue.length&&!(this._currentLoads.length>=this._maxConnections);i++){var loader=this._loadQueue[i];this._canStartLoad(loader)&&(this._loadQueue.splice(i,1),i--,this._loadItem(loader))}}},p._loadItem=function(loader){loader.on("fileload",this._handleFileLoad,this),loader.on("progress",this._handleProgress,this),loader.on("complete",this._handleFileComplete,this),loader.on("error",this._handleError,this),loader.on("fileerror",this._handleFileError,this),this._currentLoads.push(loader),this._sendFileStart(loader.getItem()),loader.load()},p._handleFileLoad=function(event){event.target=null,this.dispatchEvent(event)},p._handleFileError=function(event){var newEvent=new createjs.ErrorEvent("FILE_LOAD_ERROR",null,event.item);this._sendError(newEvent)},p._handleError=function(event){var loader=event.target;this._numItemsLoaded++,this._finishOrderedItem(loader,!0),this._updateProgress();var newEvent=new createjs.ErrorEvent("FILE_LOAD_ERROR",null,loader.getItem());this._sendError(newEvent),this.stopOnError?this.setPaused(!0):(this._removeLoadItem(loader),this._cleanLoadItem(loader),this._loadNext())},p._handleFileComplete=function(event){var loader=event.target,item=loader.getItem(),result=loader.getResult();this._loadedResults[item.id]=result;var rawResult=loader.getResult(!0);null!=rawResult&&rawResult!==result&&(this._loadedRawResults[item.id]=rawResult),this._saveLoadedItems(loader),this._removeLoadItem(loader),this._finishOrderedItem(loader)||this._processFinishedLoad(item,loader),this._cleanLoadItem(loader)},p._saveLoadedItems=function(loader){var list=loader.getLoadedItems();if(null!==list)for(var i=0;i<list.length;i++){var item=list[i].item;this._loadItemsBySrc[item.src]=item,this._loadItemsById[item.id]=item,this._loadedResults[item.id]=list[i].result,this._loadedRawResults[item.id]=list[i].rawResult}},p._finishOrderedItem=function(loader,loadFailed){var item=loader.getItem();if(this.maintainScriptOrder&&item.type==createjs.LoadQueue.JAVASCRIPT||item.maintainOrder){loader instanceof createjs.JavaScriptLoader&&(this._currentlyLoadingScript=!1);var index=createjs.indexOf(this._scriptOrder,item);return index!=-1&&(this._loadedScripts[index]=loadFailed===!0||item,this._checkScriptLoadOrder(),!0)}return!1},p._checkScriptLoadOrder=function(){for(var l=this._loadedScripts.length,i=0;i<l;i++){var item=this._loadedScripts[i];if(null===item)break;if(item!==!0){var loadItem=this._loadedResults[item.id];item.type==createjs.LoadQueue.JAVASCRIPT&&createjs.DomUtils.appendToHead(loadItem);var loader=item._loader;this._processFinishedLoad(item,loader),this._loadedScripts[i]=!0}}},p._processFinishedLoad=function(item,loader){if(this._numItemsLoaded++,!this.maintainScriptOrder&&item.type==createjs.LoadQueue.JAVASCRIPT){var tag=loader.getTag();createjs.DomUtils.appendToHead(tag)}this._updateProgress(),this._sendFileComplete(item,loader),this._loadNext()},p._canStartLoad=function(loader){if(!this.maintainScriptOrder||loader.preferXHR)return!0;var item=loader.getItem();if(item.type!=createjs.LoadQueue.JAVASCRIPT)return!0;if(this._currentlyLoadingScript)return!1;for(var index=this._scriptOrder.indexOf(item),i=0;i<index;){var checkItem=this._loadedScripts[i];if(null==checkItem)return!1;i++}return this._currentlyLoadingScript=!0,!0},p._removeLoadItem=function(loader){for(var l=this._currentLoads.length,i=0;i<l;i++)if(this._currentLoads[i]==loader){this._currentLoads.splice(i,1);break}},p._cleanLoadItem=function(loader){var item=loader.getItem();item&&delete item._loader},p._handleProgress=function(event){var loader=event.target;this._sendFileProgress(loader.getItem(),loader.progress),this._updateProgress()},p._updateProgress=function(){var loaded=this._numItemsLoaded/this._numItems,remaining=this._numItems-this._numItemsLoaded;if(remaining>0){for(var chunk=0,i=0,l=this._currentLoads.length;i<l;i++)chunk+=this._currentLoads[i].progress;loaded+=chunk/remaining*(remaining/this._numItems)}this._lastProgress!=loaded&&(this._sendProgress(loaded),this._lastProgress=loaded)},p._disposeItem=function(item){delete this._loadedResults[item.id],delete this._loadedRawResults[item.id],delete this._loadItemsById[item.id],delete this._loadItemsBySrc[item.src]},p._sendFileProgress=function(item,progress){if(!this._isCanceled()&&!this._paused&&this.hasEventListener("fileprogress")){var event=new createjs.Event("fileprogress");event.progress=progress,event.loaded=progress,event.total=1,event.item=item,this.dispatchEvent(event)}},p._sendFileComplete=function(item,loader){if(!this._isCanceled()&&!this._paused){var event=new createjs.Event("fileload");event.loader=loader,event.item=item,event.result=this._loadedResults[item.id],event.rawResult=this._loadedRawResults[item.id],item.completeHandler&&item.completeHandler(event),this.hasEventListener("fileload")&&this.dispatchEvent(event);
	}},p._sendFileStart=function(item){var event=new createjs.Event("filestart");event.item=item,this.hasEventListener("filestart")&&this.dispatchEvent(event)},p.toString=function(){return"[PreloadJS LoadQueue]"},createjs.LoadQueue=createjs.promote(LoadQueue,"AbstractLoader")}(),function(){"use strict";function TextLoader(loadItem){this.AbstractLoader_constructor(loadItem,!0,createjs.AbstractLoader.TEXT)}var s=(createjs.extend(TextLoader,createjs.AbstractLoader),TextLoader);s.canLoadItem=function(item){return item.type==createjs.AbstractLoader.TEXT},createjs.TextLoader=createjs.promote(TextLoader,"AbstractLoader")}(),function(){"use strict";function BinaryLoader(loadItem){this.AbstractLoader_constructor(loadItem,!0,createjs.AbstractLoader.BINARY),this.on("initialize",this._updateXHR,this)}var p=createjs.extend(BinaryLoader,createjs.AbstractLoader),s=BinaryLoader;s.canLoadItem=function(item){return item.type==createjs.AbstractLoader.BINARY},p._updateXHR=function(event){event.loader.setResponseType("arraybuffer")},createjs.BinaryLoader=createjs.promote(BinaryLoader,"AbstractLoader")}(),function(){"use strict";function CSSLoader(loadItem,preferXHR){this.AbstractLoader_constructor(loadItem,preferXHR,createjs.AbstractLoader.CSS),this.resultFormatter=this._formatResult,this._tagSrcAttribute="href",preferXHR?this._tag=createjs.Elements.style():this._tag=createjs.Elements.link(),this._tag.rel="stylesheet",this._tag.type="text/css"}var p=createjs.extend(CSSLoader,createjs.AbstractLoader),s=CSSLoader;s.canLoadItem=function(item){return item.type==createjs.AbstractLoader.CSS},p._formatResult=function(loader){if(this._preferXHR){var tag=loader.getTag();if(tag.styleSheet)tag.styleSheet.cssText=loader.getResult(!0);else{var textNode=createjs.Elements.text(loader.getResult(!0));tag.appendChild(textNode)}}else tag=this._tag;return createjs.DomUtils.appendToHead(tag),tag},createjs.CSSLoader=createjs.promote(CSSLoader,"AbstractLoader")}(),function(){"use strict";function ImageLoader(loadItem,preferXHR){this.AbstractLoader_constructor(loadItem,preferXHR,createjs.AbstractLoader.IMAGE),this.resultFormatter=this._formatResult,this._tagSrcAttribute="src",createjs.DomUtils.isImageTag(loadItem)?this._tag=loadItem:createjs.DomUtils.isImageTag(loadItem.src)?this._tag=loadItem.src:createjs.DomUtils.isImageTag(loadItem.tag)&&(this._tag=loadItem.tag),null!=this._tag?this._preferXHR=!1:this._tag=createjs.Elements.img(),this.on("initialize",this._updateXHR,this)}var p=createjs.extend(ImageLoader,createjs.AbstractLoader),s=ImageLoader;s.canLoadItem=function(item){return item.type==createjs.AbstractLoader.IMAGE},p.load=function(){if(""!=this._tag.src&&this._tag.complete)return void this._sendComplete();var crossOrigin=this._item.crossOrigin;1==crossOrigin&&(crossOrigin="Anonymous"),null==crossOrigin||createjs.URLUtils.isLocal(this._item)||(this._tag.crossOrigin=crossOrigin),this.AbstractLoader_load()},p._updateXHR=function(event){event.loader.mimeType="text/plain; charset=x-user-defined-binary",event.loader.setResponseType&&event.loader.setResponseType("blob")},p._formatResult=function(loader){return this._formatImage},p._formatImage=function(successCallback,errorCallback){var tag=this._tag,URL=window.URL||window.webkitURL;if(this._preferXHR)if(URL){var objURL=URL.createObjectURL(this.getResult(!0));tag.src=objURL,tag.addEventListener("load",this._cleanUpURL,!1),tag.addEventListener("error",this._cleanUpURL,!1)}else tag.src=this._item.src;else;tag.complete?successCallback(tag):(tag.onload=createjs.proxy(function(){successCallback(this._tag)},this),tag.onerror=createjs.proxy(function(){errorCallback(this._tag)},this))},p._cleanUpURL=function(event){var URL=window.URL||window.webkitURL;URL.revokeObjectURL(event.target.src)},createjs.ImageLoader=createjs.promote(ImageLoader,"AbstractLoader")}(),function(){"use strict";function JavaScriptLoader(loadItem,preferXHR){this.AbstractLoader_constructor(loadItem,preferXHR,createjs.AbstractLoader.JAVASCRIPT),this.resultFormatter=this._formatResult,this._tagSrcAttribute="src",this.setTag(createjs.Elements.script())}var p=createjs.extend(JavaScriptLoader,createjs.AbstractLoader),s=JavaScriptLoader;s.canLoadItem=function(item){return item.type==createjs.AbstractLoader.JAVASCRIPT},p._formatResult=function(loader){var tag=loader.getTag();return this._preferXHR&&(tag.text=loader.getResult(!0)),tag},createjs.JavaScriptLoader=createjs.promote(JavaScriptLoader,"AbstractLoader")}(),function(){"use strict";function JSONLoader(loadItem){this.AbstractLoader_constructor(loadItem,!0,createjs.AbstractLoader.JSON),this.resultFormatter=this._formatResult}var p=createjs.extend(JSONLoader,createjs.AbstractLoader),s=JSONLoader;s.canLoadItem=function(item){return item.type==createjs.AbstractLoader.JSON},p._formatResult=function(loader){var json=null;try{json=createjs.DataUtils.parseJSON(loader.getResult(!0))}catch(e){var event=new createjs.ErrorEvent("JSON_FORMAT",null,e);return this._sendError(event),e}return json},createjs.JSONLoader=createjs.promote(JSONLoader,"AbstractLoader")}(),function(){"use strict";function JSONPLoader(loadItem){this.AbstractLoader_constructor(loadItem,!1,createjs.AbstractLoader.JSONP),this.setTag(createjs.Elements.script()),this.getTag().type="text/javascript"}var p=createjs.extend(JSONPLoader,createjs.AbstractLoader),s=JSONPLoader;s.canLoadItem=function(item){return item.type==createjs.AbstractLoader.JSONP},p.cancel=function(){this.AbstractLoader_cancel(),this._dispose()},p.load=function(){if(null==this._item.callback)throw new Error("callback is required for loading JSONP requests.");if(null!=window[this._item.callback])throw new Error("JSONP callback '"+this._item.callback+"' already exists on window. You need to specify a different callback or re-name the current one.");window[this._item.callback]=createjs.proxy(this._handleLoad,this),createjs.DomUtils.appendToBody(this._tag),this._loadTimeout=setTimeout(createjs.proxy(this._handleTimeout,this),this._item.loadTimeout),this._tag.src=this._item.src},p._handleLoad=function(data){this._result=this._rawResult=data,this._sendComplete(),this._dispose()},p._handleTimeout=function(){this._dispose(),this.dispatchEvent(new createjs.ErrorEvent("timeout"))},p._dispose=function(){createjs.DomUtils.removeChild(this._tag),delete window[this._item.callback],clearTimeout(this._loadTimeout)},createjs.JSONPLoader=createjs.promote(JSONPLoader,"AbstractLoader")}(),function(){"use strict";function ManifestLoader(loadItem){this.AbstractLoader_constructor(loadItem,null,createjs.AbstractLoader.MANIFEST),this.plugins=null,this._manifestQueue=null}var p=createjs.extend(ManifestLoader,createjs.AbstractLoader),s=ManifestLoader;s.MANIFEST_PROGRESS=.25,s.canLoadItem=function(item){return item.type==createjs.AbstractLoader.MANIFEST},p.load=function(){this.AbstractLoader_load()},p._createRequest=function(){var callback=this._item.callback;null!=callback?this._request=new createjs.JSONPLoader(this._item):this._request=new createjs.JSONLoader(this._item)},p.handleEvent=function(event){switch(event.type){case"complete":return this._rawResult=event.target.getResult(!0),this._result=event.target.getResult(),this._sendProgress(s.MANIFEST_PROGRESS),void this._loadManifest(this._result);case"progress":return event.loaded*=s.MANIFEST_PROGRESS,this.progress=event.loaded/event.total,(isNaN(this.progress)||this.progress==1/0)&&(this.progress=0),void this._sendProgress(event)}this.AbstractLoader_handleEvent(event)},p.destroy=function(){this.AbstractLoader_destroy(),this._manifestQueue.close()},p._loadManifest=function(json){if(json&&json.manifest){var queue=this._manifestQueue=new createjs.LoadQueue;queue.on("fileload",this._handleManifestFileLoad,this),queue.on("progress",this._handleManifestProgress,this),queue.on("complete",this._handleManifestComplete,this,!0),queue.on("error",this._handleManifestError,this,!0);for(var i=0,l=this.plugins.length;i<l;i++)queue.installPlugin(this.plugins[i]);queue.loadManifest(json)}else this._sendComplete()},p._handleManifestFileLoad=function(event){event.target=null,this.dispatchEvent(event)},p._handleManifestComplete=function(event){this._loadedItems=this._manifestQueue.getItems(!0),this._sendComplete()},p._handleManifestProgress=function(event){this.progress=event.progress*(1-s.MANIFEST_PROGRESS)+s.MANIFEST_PROGRESS,this._sendProgress(this.progress)},p._handleManifestError=function(event){var newEvent=new createjs.Event("fileerror");newEvent.item=event.data,this.dispatchEvent(newEvent)},createjs.ManifestLoader=createjs.promote(ManifestLoader,"AbstractLoader")}(),function(){"use strict";function SoundLoader(loadItem,preferXHR){this.AbstractMediaLoader_constructor(loadItem,preferXHR,createjs.AbstractLoader.SOUND),createjs.DomUtils.isAudioTag(loadItem)?this._tag=loadItem:createjs.DomUtils.isAudioTag(loadItem.src)?this._tag=loadItem:createjs.DomUtils.isAudioTag(loadItem.tag)&&(this._tag=createjs.DomUtils.isAudioTag(loadItem)?loadItem:loadItem.src),null!=this._tag&&(this._preferXHR=!1)}var p=createjs.extend(SoundLoader,createjs.AbstractMediaLoader),s=SoundLoader;s.canLoadItem=function(item){return item.type==createjs.AbstractLoader.SOUND},p._createTag=function(src){var tag=createjs.Elements.audio();return tag.autoplay=!1,tag.preload="none",tag.src=src,tag},createjs.SoundLoader=createjs.promote(SoundLoader,"AbstractMediaLoader")}(),function(){"use strict";function VideoLoader(loadItem,preferXHR){this.AbstractMediaLoader_constructor(loadItem,preferXHR,createjs.AbstractLoader.VIDEO),createjs.DomUtils.isVideoTag(loadItem)||createjs.DomUtils.isVideoTag(loadItem.src)?(this.setTag(createjs.DomUtils.isVideoTag(loadItem)?loadItem:loadItem.src),this._preferXHR=!1):this.setTag(this._createTag())}var p=createjs.extend(VideoLoader,createjs.AbstractMediaLoader),s=VideoLoader;p._createTag=function(){return createjs.Elements.video()},s.canLoadItem=function(item){return item.type==createjs.AbstractLoader.VIDEO},createjs.VideoLoader=createjs.promote(VideoLoader,"AbstractMediaLoader")}(),function(){"use strict";function SpriteSheetLoader(loadItem,preferXHR){this.AbstractLoader_constructor(loadItem,preferXHR,createjs.AbstractLoader.SPRITESHEET),this._manifestQueue=null}var p=createjs.extend(SpriteSheetLoader,createjs.AbstractLoader),s=SpriteSheetLoader;s.SPRITESHEET_PROGRESS=.25,s.canLoadItem=function(item){return item.type==createjs.AbstractLoader.SPRITESHEET},p.destroy=function(){this.AbstractLoader_destroy(),this._manifestQueue.close()},p._createRequest=function(){var callback=this._item.callback;null!=callback?this._request=new createjs.JSONPLoader(this._item):this._request=new createjs.JSONLoader(this._item)},p.handleEvent=function(event){switch(event.type){case"complete":return this._rawResult=event.target.getResult(!0),this._result=event.target.getResult(),this._sendProgress(s.SPRITESHEET_PROGRESS),void this._loadManifest(this._result);case"progress":return event.loaded*=s.SPRITESHEET_PROGRESS,this.progress=event.loaded/event.total,(isNaN(this.progress)||this.progress==1/0)&&(this.progress=0),void this._sendProgress(event)}this.AbstractLoader_handleEvent(event)},p._loadManifest=function(json){if(json&&json.images){var queue=this._manifestQueue=new createjs.LoadQueue(this._preferXHR,this._item.path,this._item.crossOrigin);queue.on("complete",this._handleManifestComplete,this,!0),queue.on("fileload",this._handleManifestFileLoad,this),queue.on("progress",this._handleManifestProgress,this),queue.on("error",this._handleManifestError,this,!0),queue.loadManifest(json.images)}},p._handleManifestFileLoad=function(event){var image=event.result;if(null!=image){var images=this.getResult().images,pos=images.indexOf(event.item.src);images[pos]=image}},p._handleManifestComplete=function(event){this._result=new createjs.SpriteSheet(this._result),this._loadedItems=this._manifestQueue.getItems(!0),this._sendComplete()},p._handleManifestProgress=function(event){this.progress=event.progress*(1-s.SPRITESHEET_PROGRESS)+s.SPRITESHEET_PROGRESS,this._sendProgress(this.progress)},p._handleManifestError=function(event){var newEvent=new createjs.Event("fileerror");newEvent.item=event.data,this.dispatchEvent(newEvent)},createjs.SpriteSheetLoader=createjs.promote(SpriteSheetLoader,"AbstractLoader")}(),function(){"use strict";function SVGLoader(loadItem,preferXHR){this.AbstractLoader_constructor(loadItem,preferXHR,createjs.AbstractLoader.SVG),this.resultFormatter=this._formatResult,this._tagSrcAttribute="data",preferXHR?this.setTag(createjs.Elements.svg()):(this.setTag(createjs.Elements.object()),this.getTag().type="image/svg+xml")}var p=createjs.extend(SVGLoader,createjs.AbstractLoader),s=SVGLoader;s.canLoadItem=function(item){return item.type==createjs.AbstractLoader.SVG},p._formatResult=function(loader){var xml=createjs.DataUtils.parseXML(loader.getResult(!0)),tag=loader.getTag();return!this._preferXHR&&document.body.contains(tag)&&document.body.removeChild(tag),null!=xml.documentElement?(tag.appendChild(xml.documentElement),tag.style.visibility="visible",tag):xml},createjs.SVGLoader=createjs.promote(SVGLoader,"AbstractLoader")}(),function(){"use strict";function XMLLoader(loadItem){this.AbstractLoader_constructor(loadItem,!0,createjs.AbstractLoader.XML),this.resultFormatter=this._formatResult}var p=createjs.extend(XMLLoader,createjs.AbstractLoader),s=XMLLoader;s.canLoadItem=function(item){return item.type==createjs.AbstractLoader.XML},p._formatResult=function(loader){return createjs.DataUtils.parseXML(loader.getResult(!0))},createjs.XMLLoader=createjs.promote(XMLLoader,"AbstractLoader")}(),function(createjs){var s=createjs.SoundJS=createjs.SoundJS||{};s.version="0.6.2",s.buildDate="Sat, 12 Nov 2016 06:45:00 GMT"}(scope.createjs),createjs.indexOf=function(array,searchElement){"use strict";for(var i=0,l=array.length;i<l;i++)if(searchElement===array[i])return i;return-1},function(){"use strict";createjs.proxy=function(method,scope){var aArgs=Array.prototype.slice.call(arguments,2);return function(){return method.apply(scope,Array.prototype.slice.call(arguments,0).concat(aArgs))}}}(),function(){"use strict";function BrowserDetect(){throw"BrowserDetect cannot be instantiated"}var agent=BrowserDetect.agent=window.navigator.userAgent;BrowserDetect.isWindowPhone=agent.indexOf("IEMobile")>-1||agent.indexOf("Windows Phone")>-1,BrowserDetect.isFirefox=agent.indexOf("Firefox")>-1,BrowserDetect.isOpera=null!=window.opera,BrowserDetect.isChrome=agent.indexOf("Chrome")>-1,BrowserDetect.isIOS=(agent.indexOf("iPod")>-1||agent.indexOf("iPhone")>-1||agent.indexOf("iPad")>-1)&&!BrowserDetect.isWindowPhone,BrowserDetect.isAndroid=agent.indexOf("Android")>-1&&!BrowserDetect.isWindowPhone,BrowserDetect.isBlackberry=agent.indexOf("Blackberry")>-1,createjs.BrowserDetect=BrowserDetect}(),function(){"use strict";var PlayPropsConfig=function(){this.interrupt=null,this.delay=null,this.offset=null,this.loop=null,this.volume=null,this.pan=null,this.startTime=null,this.duration=null},p=PlayPropsConfig.prototype={},s=PlayPropsConfig;s.create=function(value){if(value instanceof s||value instanceof Object){var ppc=new createjs.PlayPropsConfig;return ppc.set(value),ppc}throw new Error("Type not recognized.")},p.set=function(props){for(var n in props)this[n]=props[n];return this},p.toString=function(){return"[PlayPropsConfig]"},createjs.PlayPropsConfig=s}(),function(){"use strict";function Sound(){throw"Sound cannot be instantiated"}function SoundChannel(src,max){this.init(src,max)}var s=Sound;s.INTERRUPT_ANY="any",s.INTERRUPT_EARLY="early",s.INTERRUPT_LATE="late",s.INTERRUPT_NONE="none",s.PLAY_INITED="playInited",s.PLAY_SUCCEEDED="playSucceeded",s.PLAY_INTERRUPTED="playInterrupted",s.PLAY_FINISHED="playFinished",s.PLAY_FAILED="playFailed",s.SUPPORTED_EXTENSIONS=["mp3","ogg","opus","mpeg","wav","m4a","mp4","aiff","wma","mid"],s.EXTENSION_MAP={m4a:"mp4"},s.FILE_PATTERN=/^(?:(\w+:)\/{2}(\w+(?:\.\w+)*\/?))?([\/.]*?(?:[^?]+)?\/)?((?:[^\/?]+)\.(\w+))(?:\?(\S+)?)?$/,s.defaultInterruptBehavior=s.INTERRUPT_NONE,s.alternateExtensions=[],s.activePlugin=null,s._masterVolume=1,Object.defineProperty(s,"volume",{get:function(){return this._masterVolume},set:function(value){if(null==Number(value))return!1;if(value=Math.max(0,Math.min(1,value)),s._masterVolume=value,!this.activePlugin||!this.activePlugin.setVolume||!this.activePlugin.setVolume(value))for(var instances=this._instances,i=0,l=instances.length;i<l;i++)instances[i].setMasterVolume(value)}}),s._masterMute=!1,Object.defineProperty(s,"muted",{get:function(){return this._masterMute},set:function(value){if(null==value)return!1;if(this._masterMute=value,!this.activePlugin||!this.activePlugin.setMute||!this.activePlugin.setMute(value))for(var instances=this._instances,i=0,l=instances.length;i<l;i++)instances[i].setMasterMute(value);return!0}}),Object.defineProperty(s,"capabilities",{get:function(){return null==s.activePlugin?null:s.activePlugin._capabilities},set:function(value){return!1}}),s._pluginsRegistered=!1,s._lastID=0,s._instances=[],s._idHash={},s._preloadHash={},s._defaultPlayPropsHash={},s.addEventListener=null,s.removeEventListener=null,s.removeAllEventListeners=null,s.dispatchEvent=null,s.hasEventListener=null,s._listeners=null,createjs.EventDispatcher.initialize(s),s.getPreloadHandlers=function(){return{callback:createjs.proxy(s.initLoad,s),types:["sound"],extensions:s.SUPPORTED_EXTENSIONS}},s._handleLoadComplete=function(event){var src=event.target.getItem().src;if(s._preloadHash[src])for(var i=0,l=s._preloadHash[src].length;i<l;i++){var item=s._preloadHash[src][i];if(s._preloadHash[src][i]=!0,s.hasEventListener("fileload")){var event=new createjs.Event("fileload");event.src=item.src,event.id=item.id,event.data=item.data,event.sprite=item.sprite,s.dispatchEvent(event)}}},s._handleLoadError=function(event){var src=event.target.getItem().src;if(s._preloadHash[src])for(var i=0,l=s._preloadHash[src].length;i<l;i++){var item=s._preloadHash[src][i];if(s._preloadHash[src][i]=!1,s.hasEventListener("fileerror")){var event=new createjs.Event("fileerror");event.src=item.src,event.id=item.id,event.data=item.data,event.sprite=item.sprite,s.dispatchEvent(event)}}},s._registerPlugin=function(plugin){return!!plugin.isSupported()&&(s.activePlugin=new plugin,!0)},s.registerPlugins=function(plugins){s._pluginsRegistered=!0;for(var i=0,l=plugins.length;i<l;i++)if(s._registerPlugin(plugins[i]))return!0;return!1},s.initializeDefaultPlugins=function(){return null!=s.activePlugin||!s._pluginsRegistered&&!!s.registerPlugins([createjs.WebAudioPlugin,createjs.HTMLAudioPlugin])},s.isReady=function(){return null!=s.activePlugin},s.getCapabilities=function(){return null==s.activePlugin?null:s.activePlugin._capabilities},s.getCapability=function(key){return null==s.activePlugin?null:s.activePlugin._capabilities[key]},s.initLoad=function(loadItem){return s._registerSound(loadItem)},s._registerSound=function(loadItem){if(!s.initializeDefaultPlugins())return!1;var details;if(loadItem.src instanceof Object?(details=s._parseSrc(loadItem.src),details.src=loadItem.path+details.src):details=s._parsePath(loadItem.src),null==details)return!1;loadItem.src=details.src,loadItem.type="sound";var data=loadItem.data,numChannels=null;if(null!=data&&(isNaN(data.channels)?isNaN(data)||(numChannels=parseInt(data)):numChannels=parseInt(data.channels),data.audioSprite))for(var sp,i=data.audioSprite.length;i--;)sp=data.audioSprite[i],s._idHash[sp.id]={src:loadItem.src,startTime:parseInt(sp.startTime),duration:parseInt(sp.duration)},sp.defaultPlayProps&&(s._defaultPlayPropsHash[sp.id]=createjs.PlayPropsConfig.create(sp.defaultPlayProps));null!=loadItem.id&&(s._idHash[loadItem.id]={src:loadItem.src});var loader=s.activePlugin.register(loadItem);return SoundChannel.create(loadItem.src,numChannels),null!=data&&isNaN(data)?loadItem.data.channels=numChannels||SoundChannel.maxPerChannel():loadItem.data=numChannels||SoundChannel.maxPerChannel(),loader.type&&(loadItem.type=loader.type),loadItem.defaultPlayProps&&(s._defaultPlayPropsHash[loadItem.src]=createjs.PlayPropsConfig.create(loadItem.defaultPlayProps)),loader},s.registerSound=function(src,id,data,basePath,defaultPlayProps){var loadItem={src:src,id:id,data:data,defaultPlayProps:defaultPlayProps};src instanceof Object&&src.src&&(basePath=id,loadItem=src),loadItem=createjs.LoadItem.create(loadItem),loadItem.path=basePath,null==basePath||loadItem.src instanceof Object||(loadItem.src=basePath+loadItem.src);var loader=s._registerSound(loadItem);if(!loader)return!1;if(s._preloadHash[loadItem.src]||(s._preloadHash[loadItem.src]=[]),s._preloadHash[loadItem.src].push(loadItem),1==s._preloadHash[loadItem.src].length)loader.on("complete",this._handleLoadComplete,this),loader.on("error",this._handleLoadError,this),s.activePlugin.preload(loader);else if(1==s._preloadHash[loadItem.src][0])return!0;return loadItem},s.registerSounds=function(sounds,basePath){var returnValues=[];sounds.path&&(basePath?basePath+=sounds.path:basePath=sounds.path,sounds=sounds.manifest);for(var i=0,l=sounds.length;i<l;i++)returnValues[i]=createjs.Sound.registerSound(sounds[i].src,sounds[i].id,sounds[i].data,basePath,sounds[i].defaultPlayProps);return returnValues},s.removeSound=function(src,basePath){if(null==s.activePlugin)return!1;src instanceof Object&&src.src&&(src=src.src);var details;if(src instanceof Object?details=s._parseSrc(src):(src=s._getSrcById(src).src,details=s._parsePath(src)),null==details)return!1;src=details.src,null!=basePath&&(src=basePath+src);for(var prop in s._idHash)s._idHash[prop].src==src&&delete s._idHash[prop];return SoundChannel.removeSrc(src),delete s._preloadHash[src],s.activePlugin.removeSound(src),!0},s.removeSounds=function(sounds,basePath){var returnValues=[];sounds.path&&(basePath?basePath+=sounds.path:basePath=sounds.path,sounds=sounds.manifest);for(var i=0,l=sounds.length;i<l;i++)returnValues[i]=createjs.Sound.removeSound(sounds[i].src,basePath);return returnValues},s.removeAllSounds=function(){s._idHash={},s._preloadHash={},SoundChannel.removeAll(),s.activePlugin&&s.activePlugin.removeAllSounds()},s.loadComplete=function(src){if(!s.isReady())return!1;var details=s._parsePath(src);return src=details?s._getSrcById(details.src).src:s._getSrcById(src).src,void 0!=s._preloadHash[src]&&1==s._preloadHash[src][0]},s._parsePath=function(value){"string"!=typeof value&&(value=value.toString());var match=value.match(s.FILE_PATTERN);if(null==match)return!1;for(var name=match[4],ext=match[5],c=s.capabilities,i=0;!c[ext];)if(ext=s.alternateExtensions[i++],i>s.alternateExtensions.length)return null;value=value.replace("."+match[5],"."+ext);var ret={name:name,src:value,extension:ext};return ret},s._parseSrc=function(value){var ret={name:void 0,src:void 0,extension:void 0},c=s.capabilities;for(var prop in value)if(value.hasOwnProperty(prop)&&c[prop]){ret.src=value[prop],ret.extension=prop;break}if(!ret.src)return!1;var i=ret.src.lastIndexOf("/");return i!=-1?ret.name=ret.src.slice(i+1):ret.name=ret.src,ret},s.play=function(src,interrupt,delay,offset,loop,volume,pan,startTime,duration){var playProps;playProps=interrupt instanceof Object||interrupt instanceof createjs.PlayPropsConfig?createjs.PlayPropsConfig.create(interrupt):createjs.PlayPropsConfig.create({interrupt:interrupt,delay:delay,offset:offset,loop:loop,volume:volume,pan:pan,startTime:startTime,duration:duration});var instance=s.createInstance(src,playProps.startTime,playProps.duration),ok=s._playInstance(instance,playProps);return ok||instance._playFailed(),instance},s.createInstance=function(src,startTime,duration){if(!s.initializeDefaultPlugins())return new createjs.DefaultSoundInstance(src,startTime,duration);var defaultPlayProps=s._defaultPlayPropsHash[src];src=s._getSrcById(src);var details=s._parsePath(src.src),instance=null;return null!=details&&null!=details.src?(SoundChannel.create(details.src),null==startTime&&(startTime=src.startTime),instance=s.activePlugin.create(details.src,startTime,duration||src.duration),defaultPlayProps=defaultPlayProps||s._defaultPlayPropsHash[details.src],defaultPlayProps&&instance.applyPlayProps(defaultPlayProps)):instance=new createjs.DefaultSoundInstance(src,startTime,duration),instance.uniqueId=s._lastID++,instance},s.stop=function(){for(var instances=this._instances,i=instances.length;i--;)instances[i].stop()},s.setVolume=function(value){if(null==Number(value))return!1;if(value=Math.max(0,Math.min(1,value)),s._masterVolume=value,!this.activePlugin||!this.activePlugin.setVolume||!this.activePlugin.setVolume(value))for(var instances=this._instances,i=0,l=instances.length;i<l;i++)instances[i].setMasterVolume(value)},s.getVolume=function(){return this._masterVolume},s.setMute=function(value){if(null==value)return!1;if(this._masterMute=value,!this.activePlugin||!this.activePlugin.setMute||!this.activePlugin.setMute(value))for(var instances=this._instances,i=0,l=instances.length;i<l;i++)instances[i].setMasterMute(value);return!0},s.getMute=function(){return this._masterMute},s.setDefaultPlayProps=function(src,playProps){src=s._getSrcById(src),s._defaultPlayPropsHash[s._parsePath(src.src).src]=createjs.PlayPropsConfig.create(playProps)},s.getDefaultPlayProps=function(src){return src=s._getSrcById(src),s._defaultPlayPropsHash[s._parsePath(src.src).src]},s._playInstance=function(instance,playProps){var defaultPlayProps=s._defaultPlayPropsHash[instance.src]||{};if(null==playProps.interrupt&&(playProps.interrupt=defaultPlayProps.interrupt||s.defaultInterruptBehavior),null==playProps.delay&&(playProps.delay=defaultPlayProps.delay||0),null==playProps.offset&&(playProps.offset=instance.getPosition()),null==playProps.loop&&(playProps.loop=instance.loop),null==playProps.volume&&(playProps.volume=instance.volume),null==playProps.pan&&(playProps.pan=instance.pan),0==playProps.delay){var ok=s._beginPlaying(instance,playProps);if(!ok)return!1}else{var delayTimeoutId=setTimeout(function(){s._beginPlaying(instance,playProps)},playProps.delay);instance.delayTimeoutId=delayTimeoutId}return this._instances.push(instance),!0},s._beginPlaying=function(instance,playProps){if(!SoundChannel.add(instance,playProps.interrupt))return!1;var result=instance._beginPlaying(playProps);if(!result){var index=createjs.indexOf(this._instances,instance);return index>-1&&this._instances.splice(index,1),!1}return!0},s._getSrcById=function(value){return s._idHash[value]||{src:value}},s._playFinished=function(instance){SoundChannel.remove(instance);var index=createjs.indexOf(this._instances,instance);index>-1&&this._instances.splice(index,1)},createjs.Sound=Sound,SoundChannel.channels={},SoundChannel.create=function(src,max){var channel=SoundChannel.get(src);return null==channel&&(SoundChannel.channels[src]=new SoundChannel(src,max),!0)},SoundChannel.removeSrc=function(src){var channel=SoundChannel.get(src);return null!=channel&&(channel._removeAll(),delete SoundChannel.channels[src],!0)},SoundChannel.removeAll=function(){for(var channel in SoundChannel.channels)SoundChannel.channels[channel]._removeAll();SoundChannel.channels={}},SoundChannel.add=function(instance,interrupt){var channel=SoundChannel.get(instance.src);return null!=channel&&channel._add(instance,interrupt)},SoundChannel.remove=function(instance){var channel=SoundChannel.get(instance.src);return null!=channel&&(channel._remove(instance),!0)},SoundChannel.maxPerChannel=function(){return p.maxDefault},SoundChannel.get=function(src){return SoundChannel.channels[src]};var p=SoundChannel.prototype;p.constructor=SoundChannel,p.src=null,p.max=null,p.maxDefault=100,p.length=0,p.init=function(src,max){this.src=src,this.max=max||this.maxDefault,this.max==-1&&(this.max=this.maxDefault),this._instances=[]},p._get=function(index){return this._instances[index]},p._add=function(instance,interrupt){return!!this._getSlot(interrupt,instance)&&(this._instances.push(instance),this.length++,!0)},p._remove=function(instance){var index=createjs.indexOf(this._instances,instance);return index!=-1&&(this._instances.splice(index,1),this.length--,!0)},p._removeAll=function(){for(var i=this.length-1;i>=0;i--)this._instances[i].stop()},p._getSlot=function(interrupt,instance){var target,replacement;if(interrupt!=Sound.INTERRUPT_NONE&&(replacement=this._get(0),null==replacement))return!0;for(var i=0,l=this.max;i<l;i++){if(target=this._get(i),null==target)return!0;if(target.playState==Sound.PLAY_FINISHED||target.playState==Sound.PLAY_INTERRUPTED||target.playState==Sound.PLAY_FAILED){replacement=target;break}interrupt!=Sound.INTERRUPT_NONE&&(interrupt==Sound.INTERRUPT_EARLY&&target.getPosition()<replacement.getPosition()||interrupt==Sound.INTERRUPT_LATE&&target.getPosition()>replacement.getPosition())&&(replacement=target)}return null!=replacement&&(replacement._interrupt(),this._remove(replacement),!0)},p.toString=function(){return"[Sound SoundChannel]"}}(),function(){"use strict";var AbstractSoundInstance=function(src,startTime,duration,playbackResource){this.EventDispatcher_constructor(),this.src=src,this.uniqueId=-1,this.playState=null,this.delayTimeoutId=null,this._volume=1,Object.defineProperty(this,"volume",{get:this.getVolume,set:this.setVolume}),this._pan=0,Object.defineProperty(this,"pan",{get:this.getPan,set:this.setPan}),this._startTime=Math.max(0,startTime||0),Object.defineProperty(this,"startTime",{get:this.getStartTime,set:this.setStartTime}),this._duration=Math.max(0,duration||0),Object.defineProperty(this,"duration",{get:this.getDuration,set:this.setDuration}),this._playbackResource=null,Object.defineProperty(this,"playbackResource",{get:this.getPlaybackResource,set:this.setPlaybackResource}),playbackResource!==!1&&playbackResource!==!0&&this.setPlaybackResource(playbackResource),this._position=0,Object.defineProperty(this,"position",{get:this.getPosition,set:this.setPosition}),this._loop=0,Object.defineProperty(this,"loop",{get:this.getLoop,set:this.setLoop}),this._muted=!1,Object.defineProperty(this,"muted",{get:this.getMuted,set:this.setMuted}),this._paused=!1,Object.defineProperty(this,"paused",{get:this.getPaused,set:this.setPaused})},p=createjs.extend(AbstractSoundInstance,createjs.EventDispatcher);p.play=function(interrupt,delay,offset,loop,volume,pan){var playProps;return playProps=interrupt instanceof Object||interrupt instanceof createjs.PlayPropsConfig?createjs.PlayPropsConfig.create(interrupt):createjs.PlayPropsConfig.create({interrupt:interrupt,delay:delay,offset:offset,loop:loop,volume:volume,pan:pan}),this.playState==createjs.Sound.PLAY_SUCCEEDED?(this.applyPlayProps(playProps),void(this._paused&&this.setPaused(!1))):(this._cleanUp(),createjs.Sound._playInstance(this,playProps),this)},p.stop=function(){return this._position=0,this._paused=!1,this._handleStop(),this._cleanUp(),this.playState=createjs.Sound.PLAY_FINISHED,this},p.destroy=function(){this._cleanUp(),this.src=null,this.playbackResource=null,this.removeAllEventListeners()},p.applyPlayProps=function(playProps){return null!=playProps.offset&&this.setPosition(playProps.offset),null!=playProps.loop&&this.setLoop(playProps.loop),null!=playProps.volume&&this.setVolume(playProps.volume),null!=playProps.pan&&this.setPan(playProps.pan),null!=playProps.startTime&&(this.setStartTime(playProps.startTime),this.setDuration(playProps.duration)),this},p.toString=function(){return"[AbstractSoundInstance]"},p.getPaused=function(){return this._paused},p.setPaused=function(value){if(!(value!==!0&&value!==!1||this._paused==value||1==value&&this.playState!=createjs.Sound.PLAY_SUCCEEDED))return this._paused=value,value?this._pause():this._resume(),clearTimeout(this.delayTimeoutId),this},p.setVolume=function(value){return value==this._volume?this:(this._volume=Math.max(0,Math.min(1,value)),this._muted||this._updateVolume(),this)},p.getVolume=function(){return this._volume},p.setMuted=function(value){if(value===!0||value===!1)return this._muted=value,this._updateVolume(),this},p.getMuted=function(){return this._muted},p.setPan=function(value){return value==this._pan?this:(this._pan=Math.max(-1,Math.min(1,value)),this._updatePan(),
	this)},p.getPan=function(){return this._pan},p.getPosition=function(){return this._paused||this.playState!=createjs.Sound.PLAY_SUCCEEDED||(this._position=this._calculateCurrentPosition()),this._position},p.setPosition=function(value){return this._position=Math.max(0,value),this.playState==createjs.Sound.PLAY_SUCCEEDED&&this._updatePosition(),this},p.getStartTime=function(){return this._startTime},p.setStartTime=function(value){return value==this._startTime?this:(this._startTime=Math.max(0,value||0),this._updateStartTime(),this)},p.getDuration=function(){return this._duration},p.setDuration=function(value){return value==this._duration?this:(this._duration=Math.max(0,value||0),this._updateDuration(),this)},p.setPlaybackResource=function(value){return this._playbackResource=value,0==this._duration&&this._setDurationFromSource(),this},p.getPlaybackResource=function(){return this._playbackResource},p.getLoop=function(){return this._loop},p.setLoop=function(value){null!=this._playbackResource&&(0!=this._loop&&0==value?this._removeLooping(value):0==this._loop&&0!=value&&this._addLooping(value)),this._loop=value},p._sendEvent=function(type){var event=new createjs.Event(type);this.dispatchEvent(event)},p._cleanUp=function(){clearTimeout(this.delayTimeoutId),this._handleCleanUp(),this._paused=!1,createjs.Sound._playFinished(this)},p._interrupt=function(){this._cleanUp(),this.playState=createjs.Sound.PLAY_INTERRUPTED,this._sendEvent("interrupted")},p._beginPlaying=function(playProps){return this.setPosition(playProps.offset),this.setLoop(playProps.loop),this.setVolume(playProps.volume),this.setPan(playProps.pan),null!=playProps.startTime&&(this.setStartTime(playProps.startTime),this.setDuration(playProps.duration)),null!=this._playbackResource&&this._position<this._duration?(this._paused=!1,this._handleSoundReady(),this.playState=createjs.Sound.PLAY_SUCCEEDED,this._sendEvent("succeeded"),!0):(this._playFailed(),!1)},p._playFailed=function(){this._cleanUp(),this.playState=createjs.Sound.PLAY_FAILED,this._sendEvent("failed")},p._handleSoundComplete=function(event){return this._position=0,0!=this._loop?(this._loop--,this._handleLoop(),void this._sendEvent("loop")):(this._cleanUp(),this.playState=createjs.Sound.PLAY_FINISHED,void this._sendEvent("complete"))},p._handleSoundReady=function(){},p._updateVolume=function(){},p._updatePan=function(){},p._updateStartTime=function(){},p._updateDuration=function(){},p._setDurationFromSource=function(){},p._calculateCurrentPosition=function(){},p._updatePosition=function(){},p._removeLooping=function(value){},p._addLooping=function(value){},p._pause=function(){},p._resume=function(){},p._handleStop=function(){},p._handleCleanUp=function(){},p._handleLoop=function(){},createjs.AbstractSoundInstance=createjs.promote(AbstractSoundInstance,"EventDispatcher"),createjs.DefaultSoundInstance=createjs.AbstractSoundInstance}(),function(){"use strict";var AbstractPlugin=function(){this._capabilities=null,this._loaders={},this._audioSources={},this._soundInstances={},this._volume=1,this._loaderClass,this._soundInstanceClass},p=AbstractPlugin.prototype;AbstractPlugin._capabilities=null,AbstractPlugin.isSupported=function(){return!0},p.register=function(loadItem){var loader=this._loaders[loadItem.src];return loader&&!loader.canceled?this._loaders[loadItem.src]:(this._audioSources[loadItem.src]=!0,this._soundInstances[loadItem.src]=[],loader=new this._loaderClass(loadItem),loader.on("complete",this._handlePreloadComplete,this),this._loaders[loadItem.src]=loader,loader)},p.preload=function(loader){loader.on("error",this._handlePreloadError,this),loader.load()},p.isPreloadStarted=function(src){return null!=this._audioSources[src]},p.isPreloadComplete=function(src){return!(null==this._audioSources[src]||1==this._audioSources[src])},p.removeSound=function(src){if(this._soundInstances[src]){for(var i=this._soundInstances[src].length;i--;){var item=this._soundInstances[src][i];item.destroy()}delete this._soundInstances[src],delete this._audioSources[src],this._loaders[src]&&this._loaders[src].destroy(),delete this._loaders[src]}},p.removeAllSounds=function(){for(var key in this._audioSources)this.removeSound(key)},p.create=function(src,startTime,duration){this.isPreloadStarted(src)||this.preload(this.register(src));var si=new this._soundInstanceClass(src,startTime,duration,this._audioSources[src]);return this._soundInstances[src]&&this._soundInstances[src].push(si),si},p.setVolume=function(value){return this._volume=value,this._updateVolume(),!0},p.getVolume=function(){return this._volume},p.setMute=function(value){return this._updateVolume(),!0},p.toString=function(){return"[AbstractPlugin]"},p._handlePreloadComplete=function(event){var src=event.target.getItem().src;this._audioSources[src]=event.result;for(var i=0,l=this._soundInstances[src].length;i<l;i++){var item=this._soundInstances[src][i];item.setPlaybackResource(this._audioSources[src]),this._soundInstances[src]=null}},p._handlePreloadError=function(event){},p._updateVolume=function(){},createjs.AbstractPlugin=AbstractPlugin}(),function(){"use strict";function Loader(loadItem){this.AbstractLoader_constructor(loadItem,!0,createjs.AbstractLoader.SOUND)}var p=createjs.extend(Loader,createjs.AbstractLoader);Loader.context=null,p.toString=function(){return"[WebAudioLoader]"},p._createRequest=function(){this._request=new createjs.XHRRequest(this._item,!1),this._request.setResponseType("arraybuffer")},p._sendComplete=function(event){Loader.context.decodeAudioData(this._rawResult,createjs.proxy(this._handleAudioDecoded,this),createjs.proxy(this._sendError,this))},p._handleAudioDecoded=function(decodedAudio){this._result=decodedAudio,this.AbstractLoader__sendComplete()},createjs.WebAudioLoader=createjs.promote(Loader,"AbstractLoader")}(),function(){"use strict";function WebAudioSoundInstance(src,startTime,duration,playbackResource){this.AbstractSoundInstance_constructor(src,startTime,duration,playbackResource),this.gainNode=s.context.createGain(),this.panNode=s.context.createPanner(),this.panNode.panningModel=s._panningModel,this.panNode.connect(this.gainNode),this._updatePan(),this.sourceNode=null,this._soundCompleteTimeout=null,this._sourceNodeNext=null,this._playbackStartTime=0,this._endedHandler=createjs.proxy(this._handleSoundComplete,this)}var p=createjs.extend(WebAudioSoundInstance,createjs.AbstractSoundInstance),s=WebAudioSoundInstance;s.context=null,s._scratchBuffer=null,s.destinationNode=null,s._panningModel="equalpower",p.destroy=function(){this.AbstractSoundInstance_destroy(),this.panNode.disconnect(0),this.panNode=null,this.gainNode.disconnect(0),this.gainNode=null},p.toString=function(){return"[WebAudioSoundInstance]"},p._updatePan=function(){this.panNode.setPosition(this._pan,0,-.5)},p._removeLooping=function(value){this._sourceNodeNext=this._cleanUpAudioNode(this._sourceNodeNext)},p._addLooping=function(value){this.playState==createjs.Sound.PLAY_SUCCEEDED&&(this._sourceNodeNext=this._createAndPlayAudioNode(this._playbackStartTime,0))},p._setDurationFromSource=function(){this._duration=1e3*this.playbackResource.duration},p._handleCleanUp=function(){this.sourceNode&&this.playState==createjs.Sound.PLAY_SUCCEEDED&&(this.sourceNode=this._cleanUpAudioNode(this.sourceNode),this._sourceNodeNext=this._cleanUpAudioNode(this._sourceNodeNext)),0!=this.gainNode.numberOfOutputs&&this.gainNode.disconnect(0),clearTimeout(this._soundCompleteTimeout),this._playbackStartTime=0},p._cleanUpAudioNode=function(audioNode){if(audioNode){audioNode.stop(0),audioNode.disconnect(0);try{audioNode.buffer=s._scratchBuffer}catch(e){}audioNode=null}return audioNode},p._handleSoundReady=function(event){this.gainNode.connect(s.destinationNode);var dur=.001*this._duration,pos=.001*this._position;pos>dur&&(pos=dur),this.sourceNode=this._createAndPlayAudioNode(s.context.currentTime-dur,pos),this._playbackStartTime=this.sourceNode.startTime-pos,this._soundCompleteTimeout=setTimeout(this._endedHandler,1e3*(dur-pos)),0!=this._loop&&(this._sourceNodeNext=this._createAndPlayAudioNode(this._playbackStartTime,0))},p._createAndPlayAudioNode=function(startTime,offset){var audioNode=s.context.createBufferSource();audioNode.buffer=this.playbackResource,audioNode.connect(this.panNode);var dur=.001*this._duration;return audioNode.startTime=startTime+dur,audioNode.start(audioNode.startTime,offset+.001*this._startTime,dur-offset),audioNode},p._pause=function(){this._position=1e3*(s.context.currentTime-this._playbackStartTime),this.sourceNode=this._cleanUpAudioNode(this.sourceNode),this._sourceNodeNext=this._cleanUpAudioNode(this._sourceNodeNext),0!=this.gainNode.numberOfOutputs&&this.gainNode.disconnect(0),clearTimeout(this._soundCompleteTimeout)},p._resume=function(){this._handleSoundReady()},p._updateVolume=function(){var newVolume=this._muted?0:this._volume;newVolume!=this.gainNode.gain.value&&(this.gainNode.gain.value=newVolume)},p._calculateCurrentPosition=function(){return 1e3*(s.context.currentTime-this._playbackStartTime)},p._updatePosition=function(){this.sourceNode=this._cleanUpAudioNode(this.sourceNode),this._sourceNodeNext=this._cleanUpAudioNode(this._sourceNodeNext),clearTimeout(this._soundCompleteTimeout),this._paused||this._handleSoundReady()},p._handleLoop=function(){this._cleanUpAudioNode(this.sourceNode),this.sourceNode=this._sourceNodeNext,this._playbackStartTime=this.sourceNode.startTime,this._sourceNodeNext=this._createAndPlayAudioNode(this._playbackStartTime,0),this._soundCompleteTimeout=setTimeout(this._endedHandler,this._duration)},p._updateDuration=function(){this.playState==createjs.Sound.PLAY_SUCCEEDED&&(this._pause(),this._resume())},createjs.WebAudioSoundInstance=createjs.promote(WebAudioSoundInstance,"AbstractSoundInstance")}(),function(){"use strict";function WebAudioPlugin(){this.AbstractPlugin_constructor(),this._panningModel=s._panningModel,this.context=s.context,this.dynamicsCompressorNode=this.context.createDynamicsCompressor(),this.dynamicsCompressorNode.connect(this.context.destination),this.gainNode=this.context.createGain(),this.gainNode.connect(this.dynamicsCompressorNode),createjs.WebAudioSoundInstance.destinationNode=this.gainNode,this._capabilities=s._capabilities,this._loaderClass=createjs.WebAudioLoader,this._soundInstanceClass=createjs.WebAudioSoundInstance,this._addPropsToClasses()}var p=createjs.extend(WebAudioPlugin,createjs.AbstractPlugin),s=WebAudioPlugin;s._capabilities=null,s._panningModel="equalpower",s.context=null,s._scratchBuffer=null,s._unlocked=!1,s.isSupported=function(){var isMobilePhoneGap=createjs.BrowserDetect.isIOS||createjs.BrowserDetect.isAndroid||createjs.BrowserDetect.isBlackberry;return!("file:"==location.protocol&&!isMobilePhoneGap&&!this._isFileXHRSupported())&&(s._generateCapabilities(),null!=s.context)},s.playEmptySound=function(){if(null!=s.context){var source=s.context.createBufferSource();source.buffer=s._scratchBuffer,source.connect(s.context.destination),source.start(0,0,0)}},s._isFileXHRSupported=function(){var supported=!0,xhr=new XMLHttpRequest;try{xhr.open("GET","WebAudioPluginTest.fail",!1)}catch(error){return supported=!1}xhr.onerror=function(){supported=!1},xhr.onload=function(){supported=404==this.status||200==this.status||0==this.status&&""!=this.response};try{xhr.send()}catch(error){supported=!1}return supported},s._generateCapabilities=function(){if(null==s._capabilities){var t=document.createElement("audio");if(null==t.canPlayType)return null;if(null==s.context)if(window.AudioContext)s.context=new AudioContext;else{if(!window.webkitAudioContext)return null;s.context=new webkitAudioContext}null==s._scratchBuffer&&(s._scratchBuffer=s.context.createBuffer(1,1,22050)),s._compatibilitySetUp(),"ontouchstart"in window&&"running"!=s.context.state&&(s._unlock(),document.addEventListener("mousedown",s._unlock,!0),document.addEventListener("touchend",s._unlock,!0)),s._capabilities={panning:!0,volume:!0,tracks:-1};for(var supportedExtensions=createjs.Sound.SUPPORTED_EXTENSIONS,extensionMap=createjs.Sound.EXTENSION_MAP,i=0,l=supportedExtensions.length;i<l;i++){var ext=supportedExtensions[i],playType=extensionMap[ext]||ext;s._capabilities[ext]="no"!=t.canPlayType("audio/"+ext)&&""!=t.canPlayType("audio/"+ext)||"no"!=t.canPlayType("audio/"+playType)&&""!=t.canPlayType("audio/"+playType)}s.context.destination.numberOfChannels<2&&(s._capabilities.panning=!1)}},s._compatibilitySetUp=function(){if(s._panningModel="equalpower",!s.context.createGain){s.context.createGain=s.context.createGainNode;var audioNode=s.context.createBufferSource();audioNode.__proto__.start=audioNode.__proto__.noteGrainOn,audioNode.__proto__.stop=audioNode.__proto__.noteOff,s._panningModel=0}},s._unlock=function(){s._unlocked||(s.playEmptySound(),"running"==s.context.state&&(document.removeEventListener("mousedown",s._unlock,!0),document.removeEventListener("touchend",s._unlock,!0),s._unlocked=!0))},p.toString=function(){return"[WebAudioPlugin]"},p._addPropsToClasses=function(){var c=this._soundInstanceClass;c.context=this.context,c._scratchBuffer=s._scratchBuffer,c.destinationNode=this.gainNode,c._panningModel=this._panningModel,this._loaderClass.context=this.context},p._updateVolume=function(){var newVolume=createjs.Sound._masterMute?0:this._volume;newVolume!=this.gainNode.gain.value&&(this.gainNode.gain.value=newVolume)},createjs.WebAudioPlugin=createjs.promote(WebAudioPlugin,"AbstractPlugin")}(),function(){"use strict";function HTMLAudioTagPool(){throw"HTMLAudioTagPool cannot be instantiated"}function TagPool(src){this._tags=[]}var s=HTMLAudioTagPool;s._tags={},s._tagPool=new TagPool,s._tagUsed={},s.get=function(src){var t=s._tags[src];return null==t?(t=s._tags[src]=s._tagPool.get(),t.src=src):s._tagUsed[src]?(t=s._tagPool.get(),t.src=src):s._tagUsed[src]=!0,t},s.set=function(src,tag){tag==s._tags[src]?s._tagUsed[src]=!1:s._tagPool.set(tag)},s.remove=function(src){var tag=s._tags[src];return null!=tag&&(s._tagPool.set(tag),delete s._tags[src],delete s._tagUsed[src],!0)},s.getDuration=function(src){var t=s._tags[src];return null!=t&&t.duration?1e3*t.duration:0},createjs.HTMLAudioTagPool=HTMLAudioTagPool;var p=TagPool.prototype;p.constructor=TagPool,p.get=function(){var tag;return tag=0==this._tags.length?this._createTag():this._tags.pop(),null==tag.parentNode&&document.body.appendChild(tag),tag},p.set=function(tag){var index=createjs.indexOf(this._tags,tag);index==-1&&(this._tags.src=null,this._tags.push(tag))},p.toString=function(){return"[TagPool]"},p._createTag=function(){var tag=document.createElement("audio");return tag.autoplay=!1,tag.preload="none",tag}}(),function(){"use strict";function HTMLAudioSoundInstance(src,startTime,duration,playbackResource){this.AbstractSoundInstance_constructor(src,startTime,duration,playbackResource),this._audioSpriteStopTime=null,this._delayTimeoutId=null,this._endedHandler=createjs.proxy(this._handleSoundComplete,this),this._readyHandler=createjs.proxy(this._handleTagReady,this),this._stalledHandler=createjs.proxy(this._playFailed,this),this._audioSpriteEndHandler=createjs.proxy(this._handleAudioSpriteLoop,this),this._loopHandler=createjs.proxy(this._handleSoundComplete,this),duration?this._audioSpriteStopTime=.001*(startTime+duration):this._duration=createjs.HTMLAudioTagPool.getDuration(this.src)}var p=createjs.extend(HTMLAudioSoundInstance,createjs.AbstractSoundInstance);p.setMasterVolume=function(value){this._updateVolume()},p.setMasterMute=function(isMuted){this._updateVolume()},p.toString=function(){return"[HTMLAudioSoundInstance]"},p._removeLooping=function(){null!=this._playbackResource&&(this._playbackResource.loop=!1,this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED,this._loopHandler,!1))},p._addLooping=function(){null==this._playbackResource||this._audioSpriteStopTime||(this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED,this._loopHandler,!1),this._playbackResource.loop=!0)},p._handleCleanUp=function(){var tag=this._playbackResource;if(null!=tag){tag.pause(),tag.loop=!1,tag.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED,this._endedHandler,!1),tag.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_READY,this._readyHandler,!1),tag.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_STALLED,this._stalledHandler,!1),tag.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED,this._loopHandler,!1),tag.removeEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE,this._audioSpriteEndHandler,!1);try{tag.currentTime=this._startTime}catch(e){}createjs.HTMLAudioTagPool.set(this.src,tag),this._playbackResource=null}},p._beginPlaying=function(playProps){return this._playbackResource=createjs.HTMLAudioTagPool.get(this.src),this.AbstractSoundInstance__beginPlaying(playProps)},p._handleSoundReady=function(event){if(4!==this._playbackResource.readyState){var tag=this._playbackResource;return tag.addEventListener(createjs.HTMLAudioPlugin._AUDIO_READY,this._readyHandler,!1),tag.addEventListener(createjs.HTMLAudioPlugin._AUDIO_STALLED,this._stalledHandler,!1),tag.preload="auto",void tag.load()}this._updateVolume(),this._playbackResource.currentTime=.001*(this._startTime+this._position),this._audioSpriteStopTime?this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE,this._audioSpriteEndHandler,!1):(this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED,this._endedHandler,!1),0!=this._loop&&(this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED,this._loopHandler,!1),this._playbackResource.loop=!0)),this._playbackResource.play()},p._handleTagReady=function(event){this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_READY,this._readyHandler,!1),this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_STALLED,this._stalledHandler,!1),this._handleSoundReady()},p._pause=function(){this._playbackResource.pause()},p._resume=function(){this._playbackResource.play()},p._updateVolume=function(){if(null!=this._playbackResource){var newVolume=this._muted||createjs.Sound._masterMute?0:this._volume*createjs.Sound._masterVolume;newVolume!=this._playbackResource.volume&&(this._playbackResource.volume=newVolume)}},p._calculateCurrentPosition=function(){return 1e3*this._playbackResource.currentTime-this._startTime},p._updatePosition=function(){this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED,this._loopHandler,!1),this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED,this._handleSetPositionSeek,!1);try{this._playbackResource.currentTime=.001*(this._position+this._startTime)}catch(error){this._handleSetPositionSeek(null)}},p._handleSetPositionSeek=function(event){null!=this._playbackResource&&(this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED,this._handleSetPositionSeek,!1),this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED,this._loopHandler,!1))},p._handleAudioSpriteLoop=function(event){this._playbackResource.currentTime<=this._audioSpriteStopTime||(this._playbackResource.pause(),0==this._loop?this._handleSoundComplete(null):(this._position=0,this._loop--,this._playbackResource.currentTime=.001*this._startTime,this._paused||this._playbackResource.play(),this._sendEvent("loop")))},p._handleLoop=function(event){0==this._loop&&(this._playbackResource.loop=!1,this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED,this._loopHandler,!1))},p._updateStartTime=function(){this._audioSpriteStopTime=.001*(this._startTime+this._duration),this.playState==createjs.Sound.PLAY_SUCCEEDED&&(this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED,this._endedHandler,!1),this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE,this._audioSpriteEndHandler,!1))},p._updateDuration=function(){this._audioSpriteStopTime=.001*(this._startTime+this._duration),this.playState==createjs.Sound.PLAY_SUCCEEDED&&(this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED,this._endedHandler,!1),this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE,this._audioSpriteEndHandler,!1))},p._setDurationFromSource=function(){this._duration=createjs.HTMLAudioTagPool.getDuration(this.src),this._playbackResource=null},createjs.HTMLAudioSoundInstance=createjs.promote(HTMLAudioSoundInstance,"AbstractSoundInstance")}(),function(){"use strict";function HTMLAudioPlugin(){this.AbstractPlugin_constructor(),this.defaultNumChannels=2,this._capabilities=s._capabilities,this._loaderClass=createjs.SoundLoader,this._soundInstanceClass=createjs.HTMLAudioSoundInstance}var p=createjs.extend(HTMLAudioPlugin,createjs.AbstractPlugin),s=HTMLAudioPlugin;s.MAX_INSTANCES=30,s._AUDIO_READY="canplaythrough",s._AUDIO_ENDED="ended",s._AUDIO_SEEKED="seeked",s._AUDIO_STALLED="stalled",s._TIME_UPDATE="timeupdate",s._capabilities=null,s.isSupported=function(){return s._generateCapabilities(),null!=s._capabilities},s._generateCapabilities=function(){if(null==s._capabilities){var t=document.createElement("audio");if(null==t.canPlayType)return null;s._capabilities={panning:!1,volume:!0,tracks:-1};for(var supportedExtensions=createjs.Sound.SUPPORTED_EXTENSIONS,extensionMap=createjs.Sound.EXTENSION_MAP,i=0,l=supportedExtensions.length;i<l;i++){var ext=supportedExtensions[i],playType=extensionMap[ext]||ext;s._capabilities[ext]="no"!=t.canPlayType("audio/"+ext)&&""!=t.canPlayType("audio/"+ext)||"no"!=t.canPlayType("audio/"+playType)&&""!=t.canPlayType("audio/"+playType)}}},p.register=function(loadItem){var tag=createjs.HTMLAudioTagPool.get(loadItem.src),loader=this.AbstractPlugin_register(loadItem);return loader.setTag(tag),loader},p.removeSound=function(src){this.AbstractPlugin_removeSound(src),createjs.HTMLAudioTagPool.remove(src)},p.create=function(src,startTime,duration){var si=this.AbstractPlugin_create(src,startTime,duration);return si.setPlaybackResource(null),si},p.toString=function(){return"[HTMLAudioPlugin]"},p.setVolume=p.getVolume=p.setMute=null,createjs.HTMLAudioPlugin=createjs.promote(HTMLAudioPlugin,"AbstractPlugin")}(),function(){"use strict";function Tween(target,props,pluginData){this.ignoreGlobalPause=!1,this.loop=!1,this.duration=0,this.pluginData=pluginData||{},this.target=target,this.position=null,this.passive=!1,this._paused=!1,this._curQueueProps={},this._initQueueProps={},this._steps=[],this._actions=[],this._prevPosition=0,this._stepPosition=0,this._prevPos=-1,this._target=target,this._useTicks=!1,this._inited=!1,this._registered=!1,props&&(this._useTicks=props.useTicks,this.ignoreGlobalPause=props.ignoreGlobalPause,this.loop=props.loop,props.onChange&&this.addEventListener("change",props.onChange),props.override&&Tween.removeTweens(target)),props&&props.paused?this._paused=!0:createjs.Tween._register(this,!0),props&&null!=props.position&&this.setPosition(props.position,Tween.NONE)}var p=createjs.extend(Tween,createjs.EventDispatcher);Tween.NONE=0,Tween.LOOP=1,Tween.REVERSE=2,Tween.IGNORE={},Tween._tweens=[],Tween._plugins={},Tween.get=function(target,props,pluginData,override){return override&&Tween.removeTweens(target),new Tween(target,props,pluginData)},Tween.tick=function(delta,paused){for(var tweens=Tween._tweens.slice(),i=tweens.length-1;i>=0;i--){var tween=tweens[i];paused&&!tween.ignoreGlobalPause||tween._paused||tween.tick(tween._useTicks?1:delta)}},Tween.handleEvent=function(event){"tick"==event.type&&this.tick(event.delta,event.paused)},Tween.removeTweens=function(target){if(target.tweenjs_count){for(var tweens=Tween._tweens,i=tweens.length-1;i>=0;i--){var tween=tweens[i];tween._target==target&&(tween._paused=!0,tweens.splice(i,1))}target.tweenjs_count=0}},Tween.removeAllTweens=function(){for(var tweens=Tween._tweens,i=0,l=tweens.length;i<l;i++){var tween=tweens[i];tween._paused=!0,tween.target&&(tween.target.tweenjs_count=0)}tweens.length=0},Tween.hasActiveTweens=function(target){return target?null!=target.tweenjs_count&&!!target.tweenjs_count:Tween._tweens&&!!Tween._tweens.length},Tween.installPlugin=function(plugin,properties){var priority=plugin.priority;null==priority&&(plugin.priority=priority=0);for(var i=0,l=properties.length,p=Tween._plugins;i<l;i++){var n=properties[i];if(p[n]){for(var arr=p[n],j=0,jl=arr.length;j<jl&&!(priority<arr[j].priority);j++);p[n].splice(j,0,plugin)}else p[n]=[plugin]}},Tween._register=function(tween,value){var target=tween._target,tweens=Tween._tweens;if(value&&!tween._registered)target&&(target.tweenjs_count=target.tweenjs_count?target.tweenjs_count+1:1),tweens.push(tween),!Tween._inited&&createjs.Ticker&&(createjs.Ticker.addEventListener("tick",Tween),Tween._inited=!0);else if(!value&&tween._registered){target&&target.tweenjs_count--;for(var i=tweens.length;i--;)if(tweens[i]==tween){tweens.splice(i,1);break}}tween._registered=value},p.wait=function(duration,passive){if(null==duration||duration<=0)return this;var o=this._cloneProps(this._curQueueProps);return this._addStep({d:duration,p0:o,e:this._linearEase,p1:o,v:passive})},p.to=function(props,duration,ease){return(isNaN(duration)||duration<0)&&(duration=0),this._addStep({d:duration||0,p0:this._cloneProps(this._curQueueProps),e:ease,p1:this._cloneProps(this._appendQueueProps(props))})},p.call=function(callback,params,scope){return this._addAction({f:callback,p:params?params:[this],o:scope?scope:this._target})},p.set=function(props,target){return this._addAction({f:this._set,o:this,p:[props,target?target:this._target]})},p.play=function(tween){return tween||(tween=this),this.call(tween.setPaused,[!1],tween)},p.pause=function(tween){return tween||(tween=this),this.call(tween.setPaused,[!0],tween)},p.setPosition=function(value,actionsMode){value<0&&(value=0),null==actionsMode&&(actionsMode=1);var t=value,end=!1;if(t>=this.duration&&(this.loop?t%=this.duration:(t=this.duration,end=!0)),t==this._prevPos)return end;var prevPos=this._prevPos;if(this.position=this._prevPos=t,this._prevPosition=value,this._target)if(end)this._updateTargetProps(null,1);else if(this._steps.length>0){for(var i=0,l=this._steps.length;i<l&&!(this._steps[i].t>t);i++);var step=this._steps[i-1];this._updateTargetProps(step,(this._stepPosition=t-step.t)/step.d)}return 0!=actionsMode&&this._actions.length>0&&(this._useTicks?this._runActions(t,t):1==actionsMode&&t<prevPos?(prevPos!=this.duration&&this._runActions(prevPos,this.duration),this._runActions(0,t,!0)):this._runActions(prevPos,t)),end&&this.setPaused(!0),this.dispatchEvent("change"),end},p.tick=function(delta){this._paused||this.setPosition(this._prevPosition+delta)},p.setPaused=function(value){return this._paused===!!value?this:(this._paused=!!value,Tween._register(this,!value),this)},p.w=p.wait,p.t=p.to,p.c=p.call,p.s=p.set,p.toString=function(){return"[Tween]"},p.clone=function(){throw"Tween can not be cloned."},p._updateTargetProps=function(step,ratio){var p0,p1,v,v0,v1,arr;if(step||1!=ratio){if(this.passive=!!step.v,this.passive)return;step.e&&(ratio=step.e(ratio,0,1,1)),p0=step.p0,p1=step.p1}else this.passive=!1,p0=p1=this._curQueueProps;for(var n in this._initQueueProps){null==(v0=p0[n])&&(p0[n]=v0=this._initQueueProps[n]),null==(v1=p1[n])&&(p1[n]=v1=v0),v=v0==v1||0==ratio||1==ratio||"number"!=typeof v0?1==ratio?v1:v0:v0+(v1-v0)*ratio;var ignore=!1;if(arr=Tween._plugins[n])for(var i=0,l=arr.length;i<l;i++){var v2=arr[i].tween(this,n,v,p0,p1,ratio,!!step&&p0==p1,!step);v2==Tween.IGNORE?ignore=!0:v=v2}ignore||(this._target[n]=v)}},p._runActions=function(startPos,endPos,includeStart){var sPos=startPos,ePos=endPos,i=-1,j=this._actions.length,k=1;for(startPos>endPos&&(sPos=endPos,ePos=startPos,i=j,j=k=-1);(i+=k)!=j;){var action=this._actions[i],pos=action.t;(pos==ePos||pos>sPos&&pos<ePos||includeStart&&pos==startPos)&&action.f.apply(action.o,action.p)}},p._appendQueueProps=function(o){var arr,oldValue,i,l,injectProps;for(var n in o)if(void 0===this._initQueueProps[n]){if(oldValue=this._target[n],arr=Tween._plugins[n])for(i=0,l=arr.length;i<l;i++)oldValue=arr[i].init(this,n,oldValue);this._initQueueProps[n]=this._curQueueProps[n]=void 0===oldValue?null:oldValue}else oldValue=this._curQueueProps[n];for(var n in o){if(oldValue=this._curQueueProps[n],arr=Tween._plugins[n])for(injectProps=injectProps||{},i=0,l=arr.length;i<l;i++)arr[i].step&&arr[i].step(this,n,oldValue,o[n],injectProps);this._curQueueProps[n]=o[n]}return injectProps&&this._appendQueueProps(injectProps),this._curQueueProps},p._cloneProps=function(props){var o={};for(var n in props)o[n]=props[n];return o},p._addStep=function(o){return o.d>0&&(this._steps.push(o),o.t=this.duration,this.duration+=o.d),this},p._addAction=function(o){return o.t=this.duration,this._actions.push(o),this},p._set=function(props,o){for(var n in props)o[n]=props[n]},createjs.Tween=createjs.promote(Tween,"EventDispatcher")}(),function(){"use strict";function Timeline(tweens,labels,props){this.EventDispatcher_constructor(),this.ignoreGlobalPause=!1,this.duration=0,this.loop=!1,this.position=null,this._paused=!1,this._tweens=[],this._labels=null,this._labelList=null,this._prevPosition=0,this._prevPos=-1,this._useTicks=!1,this._registered=!1,props&&(this._useTicks=props.useTicks,this.loop=props.loop,this.ignoreGlobalPause=props.ignoreGlobalPause,props.onChange&&this.addEventListener("change",props.onChange)),tweens&&this.addTween.apply(this,tweens),this.setLabels(labels),props&&props.paused?this._paused=!0:createjs.Tween._register(this,!0),props&&null!=props.position&&this.setPosition(props.position,createjs.Tween.NONE)}var p=createjs.extend(Timeline,createjs.EventDispatcher);p.addTween=function(tween){var l=arguments.length;if(l>1){for(var i=0;i<l;i++)this.addTween(arguments[i]);return arguments[0]}return 0==l?null:(this.removeTween(tween),this._tweens.push(tween),tween.setPaused(!0),tween._paused=!1,tween._useTicks=this._useTicks,tween.duration>this.duration&&(this.duration=tween.duration),this._prevPos>=0&&tween.setPosition(this._prevPos,createjs.Tween.NONE),tween)},p.removeTween=function(tween){var l=arguments.length;if(l>1){for(var good=!0,i=0;i<l;i++)good=good&&this.removeTween(arguments[i]);return good}if(0==l)return!1;for(var tweens=this._tweens,i=tweens.length;i--;)if(tweens[i]==tween)return tweens.splice(i,1),tween.duration>=this.duration&&this.updateDuration(),!0;return!1},p.addLabel=function(label,position){this._labels[label]=position;var list=this._labelList;if(list){for(var i=0,l=list.length;i<l&&!(position<list[i].position);i++);list.splice(i,0,{label:label,position:position})}},p.setLabels=function(o){this._labels=o?o:{}},p.getLabels=function(){var list=this._labelList;if(!list){list=this._labelList=[];var labels=this._labels;for(var n in labels)list.push({label:n,position:labels[n]});list.sort(function(a,b){return a.position-b.position})}return list},p.getCurrentLabel=function(){var labels=this.getLabels(),pos=this.position,l=labels.length;if(l){for(var i=0;i<l&&!(pos<labels[i].position);i++);return 0==i?null:labels[i-1].label}return null},p.gotoAndPlay=function(positionOrLabel){this.setPaused(!1),this._goto(positionOrLabel)},p.gotoAndStop=function(positionOrLabel){this.setPaused(!0),this._goto(positionOrLabel)},p.setPosition=function(value,actionsMode){var t=this._calcPosition(value),end=!this.loop&&value>=this.duration;if(t==this._prevPos)return end;this._prevPosition=value,this.position=this._prevPos=t;for(var i=0,l=this._tweens.length;i<l;i++)if(this._tweens[i].setPosition(t,actionsMode),t!=this._prevPos)return!1;return end&&this.setPaused(!0),this.dispatchEvent("change"),end},p.setPaused=function(value){this._paused=!!value,createjs.Tween._register(this,!value)},p.updateDuration=function(){this.duration=0;for(var i=0,l=this._tweens.length;i<l;i++){var tween=this._tweens[i];tween.duration>this.duration&&(this.duration=tween.duration)}},p.tick=function(delta){this.setPosition(this._prevPosition+delta)},p.resolve=function(positionOrLabel){var pos=Number(positionOrLabel);return isNaN(pos)&&(pos=this._labels[positionOrLabel]),
	pos},p.toString=function(){return"[Timeline]"},p.clone=function(){throw"Timeline can not be cloned."},p._goto=function(positionOrLabel){var pos=this.resolve(positionOrLabel);null!=pos&&this.setPosition(pos)},p._calcPosition=function(value){return value<0?0:value<this.duration?value:this.loop?value%this.duration:this.duration},createjs.Timeline=createjs.promote(Timeline,"EventDispatcher")}(),function(){"use strict";function Ease(){throw"Ease cannot be instantiated."}Ease.linear=function(t){return t},Ease.none=Ease.linear,Ease.get=function(amount){return amount<-1&&(amount=-1),amount>1&&(amount=1),function(t){return 0==amount?t:amount<0?t*(t*-amount+1+amount):t*((2-t)*amount+(1-amount))}},Ease.getPowIn=function(pow){return function(t){return Math.pow(t,pow)}},Ease.getPowOut=function(pow){return function(t){return 1-Math.pow(1-t,pow)}},Ease.getPowInOut=function(pow){return function(t){return(t*=2)<1?.5*Math.pow(t,pow):1-.5*Math.abs(Math.pow(2-t,pow))}},Ease.quadIn=Ease.getPowIn(2),Ease.quadOut=Ease.getPowOut(2),Ease.quadInOut=Ease.getPowInOut(2),Ease.cubicIn=Ease.getPowIn(3),Ease.cubicOut=Ease.getPowOut(3),Ease.cubicInOut=Ease.getPowInOut(3),Ease.quartIn=Ease.getPowIn(4),Ease.quartOut=Ease.getPowOut(4),Ease.quartInOut=Ease.getPowInOut(4),Ease.quintIn=Ease.getPowIn(5),Ease.quintOut=Ease.getPowOut(5),Ease.quintInOut=Ease.getPowInOut(5),Ease.sineIn=function(t){return 1-Math.cos(t*Math.PI/2)},Ease.sineOut=function(t){return Math.sin(t*Math.PI/2)},Ease.sineInOut=function(t){return-.5*(Math.cos(Math.PI*t)-1)},Ease.getBackIn=function(amount){return function(t){return t*t*((amount+1)*t-amount)}},Ease.backIn=Ease.getBackIn(1.7),Ease.getBackOut=function(amount){return function(t){return--t*t*((amount+1)*t+amount)+1}},Ease.backOut=Ease.getBackOut(1.7),Ease.getBackInOut=function(amount){return amount*=1.525,function(t){return(t*=2)<1?.5*(t*t*((amount+1)*t-amount)):.5*((t-=2)*t*((amount+1)*t+amount)+2)}},Ease.backInOut=Ease.getBackInOut(1.7),Ease.circIn=function(t){return-(Math.sqrt(1-t*t)-1)},Ease.circOut=function(t){return Math.sqrt(1- --t*t)},Ease.circInOut=function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},Ease.bounceIn=function(t){return 1-Ease.bounceOut(1-t)},Ease.bounceOut=function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},Ease.bounceInOut=function(t){return t<.5?.5*Ease.bounceIn(2*t):.5*Ease.bounceOut(2*t-1)+.5},Ease.getElasticIn=function(amplitude,period){var pi2=2*Math.PI;return function(t){if(0==t||1==t)return t;var s=period/pi2*Math.asin(1/amplitude);return-(amplitude*Math.pow(2,10*(t-=1))*Math.sin((t-s)*pi2/period))}},Ease.elasticIn=Ease.getElasticIn(1,.3),Ease.getElasticOut=function(amplitude,period){var pi2=2*Math.PI;return function(t){if(0==t||1==t)return t;var s=period/pi2*Math.asin(1/amplitude);return amplitude*Math.pow(2,-10*t)*Math.sin((t-s)*pi2/period)+1}},Ease.elasticOut=Ease.getElasticOut(1,.3),Ease.getElasticInOut=function(amplitude,period){var pi2=2*Math.PI;return function(t){var s=period/pi2*Math.asin(1/amplitude);return(t*=2)<1?-.5*(amplitude*Math.pow(2,10*(t-=1))*Math.sin((t-s)*pi2/period)):amplitude*Math.pow(2,-10*(t-=1))*Math.sin((t-s)*pi2/period)*.5+1}},Ease.elasticInOut=Ease.getElasticInOut(1,.3*1.5),createjs.Ease=Ease}(),function(){"use strict";function MotionGuidePlugin(){throw"MotionGuidePlugin cannot be instantiated."}MotionGuidePlugin.priority=0,MotionGuidePlugin._rotOffS,MotionGuidePlugin._rotOffE,MotionGuidePlugin._rotNormS,MotionGuidePlugin._rotNormE,MotionGuidePlugin.install=function(){return createjs.Tween.installPlugin(MotionGuidePlugin,["guide","x","y","rotation"]),createjs.Tween.IGNORE},MotionGuidePlugin.init=function(tween,prop,value){var target=tween.target;return target.hasOwnProperty("x")||(target.x=0),target.hasOwnProperty("y")||(target.y=0),target.hasOwnProperty("rotation")||(target.rotation=0),"rotation"==prop&&(tween.__needsRot=!0),"guide"==prop?null:value},MotionGuidePlugin.step=function(tween,prop,startValue,endValue,injectProps){if("rotation"==prop&&(tween.__rotGlobalS=startValue,tween.__rotGlobalE=endValue,MotionGuidePlugin.testRotData(tween,injectProps)),"guide"!=prop)return endValue;var temp,data=endValue;data.hasOwnProperty("path")||(data.path=[]);var path=data.path;if(data.hasOwnProperty("end")||(data.end=1),data.hasOwnProperty("start")||(data.start=startValue&&startValue.hasOwnProperty("end")&&startValue.path===path?startValue.end:0),data.hasOwnProperty("_segments")&&data._length)return endValue;var l=path.length,accuracy=10;if(!(l>=6&&(l-2)%4==0))throw"invalid 'path' data, please see documentation for valid paths";data._segments=[],data._length=0;for(var i=2;i<l;i+=4){for(var tempX,tempY,sx=path[i-2],sy=path[i-1],cx=path[i+0],cy=path[i+1],ex=path[i+2],ey=path[i+3],oldX=sx,oldY=sy,total=0,sublines=[],j=1;j<=accuracy;j++){var t=j/accuracy,inv=1-t;tempX=inv*inv*sx+2*inv*t*cx+t*t*ex,tempY=inv*inv*sy+2*inv*t*cy+t*t*ey,total+=sublines[sublines.push(Math.sqrt((temp=tempX-oldX)*temp+(temp=tempY-oldY)*temp))-1],oldX=tempX,oldY=tempY}data._segments.push(total),data._segments.push(sublines),data._length+=total}temp=data.orient,data.orient=!0;var o={};return MotionGuidePlugin.calc(data,data.start,o),tween.__rotPathS=Number(o.rotation.toFixed(5)),MotionGuidePlugin.calc(data,data.end,o),tween.__rotPathE=Number(o.rotation.toFixed(5)),data.orient=!1,MotionGuidePlugin.calc(data,data.end,injectProps),data.orient=temp,data.orient?(tween.__guideData=data,MotionGuidePlugin.testRotData(tween,injectProps),endValue):endValue},MotionGuidePlugin.testRotData=function(tween,injectProps){if(void 0===tween.__rotGlobalS||void 0===tween.__rotGlobalE){if(tween.__needsRot)return;void 0!==tween._curQueueProps.rotation?tween.__rotGlobalS=tween.__rotGlobalE=tween._curQueueProps.rotation:tween.__rotGlobalS=tween.__rotGlobalE=injectProps.rotation=tween.target.rotation||0}if(void 0!==tween.__guideData){var data=tween.__guideData,rotGlobalD=tween.__rotGlobalE-tween.__rotGlobalS,rotPathD=tween.__rotPathE-tween.__rotPathS,rot=rotGlobalD-rotPathD;if("auto"==data.orient)rot>180?rot-=360:rot<-180&&(rot+=360);else if("cw"==data.orient){for(;rot<0;)rot+=360;0==rot&&rotGlobalD>0&&180!=rotGlobalD&&(rot+=360)}else if("ccw"==data.orient){for(rot=rotGlobalD-(rotPathD>180?360-rotPathD:rotPathD);rot>0;)rot-=360;0==rot&&rotGlobalD<0&&rotGlobalD!=-180&&(rot-=360)}data.rotDelta=rot,data.rotOffS=tween.__rotGlobalS-tween.__rotPathS,tween.__rotGlobalS=tween.__rotGlobalE=tween.__guideData=tween.__needsRot=void 0}},MotionGuidePlugin.tween=function(tween,prop,value,startValues,endValues,ratio,wait,end){var data=endValues.guide;if(void 0==data||data===startValues.guide)return value;if(data.lastRatio!=ratio){var t=(data.end-data.start)*(wait?data.end:ratio)+data.start;switch(MotionGuidePlugin.calc(data,t,tween.target),data.orient){case"cw":case"ccw":case"auto":tween.target.rotation+=data.rotOffS+data.rotDelta*ratio;break;case"fixed":default:tween.target.rotation+=data.rotOffS}data.lastRatio=ratio}return"rotation"!=prop||data.orient&&"false"!=data.orient?tween.target[prop]:value},MotionGuidePlugin.calc=function(data,ratio,target){if(void 0==data._segments)throw"Missing critical pre-calculated information, please file a bug";void 0==target&&(target={x:0,y:0,rotation:0});for(var seg=data._segments,path=data.path,pos=data._length*ratio,cap=seg.length-2,n=0;pos>seg[n]&&n<cap;)pos-=seg[n],n+=2;var sublines=seg[n+1],i=0;for(cap=sublines.length-1;pos>sublines[i]&&i<cap;)pos-=sublines[i],i++;var t=i/++cap+pos/(cap*sublines[i]);n=2*n+2;var inv=1-t;return target.x=inv*inv*path[n-2]+2*inv*t*path[n+0]+t*t*path[n+2],target.y=inv*inv*path[n-1]+2*inv*t*path[n+1]+t*t*path[n+3],data.orient&&(target.rotation=57.2957795*Math.atan2((path[n+1]-path[n-1])*inv+(path[n+3]-path[n+1])*t,(path[n+0]-path[n-2])*inv+(path[n+2]-path[n+0])*t)),target},createjs.MotionGuidePlugin=MotionGuidePlugin}(),function(createjs){"use strict";var s=createjs.TweenJS=createjs.TweenJS||{};s.version="0.6.2",s.buildDate="Sat, 12 Nov 2016 06:45:00 GMT"}(scope.createjs),module.exports=scope.createjs}).call(exports,__webpack_require__(2)(module),function(){return this}())},function(module,exports){module.exports=function(module){return module.webpackPolyfill||(module.deprecate=function(){},module.paths=[],module.children=[],module.webpackPolyfill=1),module}},function(module,exports,__webpack_require__){(function(module){"use strict";module.export={version:"0.1.2",build:new Date}}).call(exports,__webpack_require__(2)(module))},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}Object.defineProperty(exports,"__esModule",{value:!0});var _createjsBrowserify=__webpack_require__(1),_createjsBrowserify2=_interopRequireDefault(_createjsBrowserify),easel={AlphaMapFilter:_createjsBrowserify2.default.AlphaMapFilter,AlphaMaskFilter:_createjsBrowserify2.default.AlphaMaskFilter,Bitmap:_createjsBrowserify2.default.Bitmap,BitmapText:_createjsBrowserify2.default.BitmapText,BlurFilter:_createjsBrowserify2.default.BlurFilter,ButtonHelper:_createjsBrowserify2.default.ButtonHelper,ColorFilter:_createjsBrowserify2.default.ColorFilter,ColorMatrix:_createjsBrowserify2.default.ColorMatrix,ColorMatrixFilter:_createjsBrowserify2.default.ColorMatrixFilter,Container:_createjsBrowserify2.default.Container,DisplayObject:_createjsBrowserify2.default.DisplayObject,DisplayProps:_createjsBrowserify2.default.DisplayProps,DOMElement:_createjsBrowserify2.default.DOMElement,EventDispatcher:_createjsBrowserify2.default.EventDispatcher,Filter:_createjsBrowserify2.default.Filter,Graphics:_createjsBrowserify2.default.Graphics,Matrix2D:_createjsBrowserify2.default.Matrix2D,MouseEvent:_createjsBrowserify2.default.MouseEvent,MovieClip:_createjsBrowserify2.default.MovieClip,MovieClipPlugin:_createjsBrowserify2.default.MovieClipPlugin,Point:_createjsBrowserify2.default.Point,Rectangle:_createjsBrowserify2.default.Rectangle,Shadow:_createjsBrowserify2.default.Shadow,Shape:_createjsBrowserify2.default.Shape,Sprite:_createjsBrowserify2.default.Sprite,SpriteContainer:_createjsBrowserify2.default.SpriteContainer,SpriteSheet:_createjsBrowserify2.default.SpriteSheet,SpriteSheetBuilder:_createjsBrowserify2.default.SpriteSheetBuilder,SpriteSheetUtils:_createjsBrowserify2.default.SpriteSheetUtils,SpriteStage:_createjsBrowserify2.default.SpriteStage,Stage:_createjsBrowserify2.default.Stage,Text:_createjsBrowserify2.default.Text,Ticker:_createjsBrowserify2.default.Ticker,Touch:_createjsBrowserify2.default.Touch,UID:_createjsBrowserify2.default.UID,extend:_createjsBrowserify2.default.extend,indexOf:_createjsBrowserify2.default.indexOf,promote:_createjsBrowserify2.default.promote,buildDate:new Date(_createjsBrowserify2.default.EaselJS.buildDate),version:_createjsBrowserify2.default.EaselJS.version};exports.default=easel},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}Object.defineProperty(exports,"__esModule",{value:!0});var _createjsBrowserify=__webpack_require__(1),_createjsBrowserify2=_interopRequireDefault(_createjsBrowserify),preload={AbstractLoader:_createjsBrowserify2.default.AbstractLoader,AbstractMediaLoader:_createjsBrowserify2.default.AbstractMediaLoader,AbstractRequest:_createjsBrowserify2.default.AbstractRequest,BinaryLoader:_createjsBrowserify2.default.BinaryLoader,CSSLoader:_createjsBrowserify2.default.CSSLoader,DataUtils:_createjsBrowserify2.default.DataUtils,DomUtils:_createjsBrowserify2.default.DomUtils,ErrorEvent:_createjsBrowserify2.default.ErrorEvent,Event:_createjsBrowserify2.default.Event,EventDispatcher:_createjsBrowserify2.default.EventDispatcher,ImageLoader:_createjsBrowserify2.default.ImageLoader,JavaScriptLoader:_createjsBrowserify2.default.JavaScriptLoader,JSONLoader:_createjsBrowserify2.default.JSONLoader,JSONPLoader:_createjsBrowserify2.default.JSONPLoader,LoadItem:_createjsBrowserify2.default.LoadItem,LoadQueue:_createjsBrowserify2.default.LoadQueue,ManifestLoader:_createjsBrowserify2.default.ManifestLoader,MediaTagRequest:_createjsBrowserify2.default.MediaTagRequest,ProgressEvent:_createjsBrowserify2.default.ProgressEvent,RequestUtils:_createjsBrowserify2.default.ProgressEvent,SamplePlugin:_createjsBrowserify2.default.SamplePlugin,SoundLoader:_createjsBrowserify2.default.SoundLoader,SpriteSheetLoader:_createjsBrowserify2.default.SpriteSheetLoader,SVGLoader:_createjsBrowserify2.default.SVGLoader,TagRequest:_createjsBrowserify2.default.TagRequest,TextLoader:_createjsBrowserify2.default.TextLoader,VideoLoader:_createjsBrowserify2.default.VideoLoader,XHRRequest:_createjsBrowserify2.default.XHRRequest,XMLLoader:_createjsBrowserify2.default.XMLLoader,extend:_createjsBrowserify2.default.extend,indexOf:_createjsBrowserify2.default.indexOf,promote:_createjsBrowserify2.default.promote,buildDate:new Date(_createjsBrowserify2.default.PreloadJS.buildDate),version:_createjsBrowserify2.default.PreloadJS.version};exports.default=preload},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}Object.defineProperty(exports,"__esModule",{value:!0});var _createjsBrowserify=__webpack_require__(1),_createjsBrowserify2=_interopRequireDefault(_createjsBrowserify),sound={AbstractPlugin:_createjsBrowserify2.default.AbstractPlugin,AbstractSoundInstance:_createjsBrowserify2.default.AbstractSoundInstance,AudioSprite:_createjsBrowserify2.default.AudioSprite,CordovaAudioLoader:_createjsBrowserify2.default.CordovaAudioLoader,CordovaAudioPlugin:_createjsBrowserify2.default.CordovaAudioPlugin,CordovaAudioSoundInstance:_createjsBrowserify2.default.CordovaAudioSoundInstance,ErrorEvent:_createjsBrowserify2.default.ErrorEvent,Event:_createjsBrowserify2.default.Event,EventDispatcher:_createjsBrowserify2.default.EventDispatcher,FlashAudioLoader:_createjsBrowserify2.default.FlashAudioLoader,FlashAudioPlugin:_createjsBrowserify2.default.FlashAudioPlugin,FlashAudioSoundInstance:_createjsBrowserify2.default.FlashAudioSoundInstance,HTMLAudioPlugin:_createjsBrowserify2.default.HTMLAudioPlugin,HTMLAudioSoundInstance:_createjsBrowserify2.default.HTMLAudioSoundInstance,HTMLAudioTagPool:_createjsBrowserify2.default.HTMLAudioTagPool,PlayPropsConfig:_createjsBrowserify2.default.PlayPropsConfig,Sound:_createjsBrowserify2.default.Sound,WebAudioLoader:_createjsBrowserify2.default.WebAudioLoader,WebAudioPlugin:_createjsBrowserify2.default.WebAudioPlugin,WebAudioSoundInstance:_createjsBrowserify2.default.WebAudioSoundInstance,extend:_createjsBrowserify2.default.extend,indexOf:_createjsBrowserify2.default.indexOf,promote:_createjsBrowserify2.default.promote,buildDate:new Date(_createjsBrowserify2.default.SoundJS.buildDate),version:_createjsBrowserify2.default.SoundJS.version};exports.default=sound},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}Object.defineProperty(exports,"__esModule",{value:!0});var _createjsBrowserify=__webpack_require__(1),_createjsBrowserify2=_interopRequireDefault(_createjsBrowserify),tween={CSSPlugin:_createjsBrowserify2.default.CSSPlugin,Ease:_createjsBrowserify2.default.Ease,Event:_createjsBrowserify2.default.Event,EventDispatcher:_createjsBrowserify2.default.EventDispatcher,MotionGuidePlugin:_createjsBrowserify2.default.MotionGuidePlugin,SamplePlugin:_createjsBrowserify2.default.SamplePlugin,Ticker:_createjsBrowserify2.default.Ticker,Timeline:_createjsBrowserify2.default.Timeline,Tween:_createjsBrowserify2.default.Tween,extend:_createjsBrowserify2.default.extend,indexOf:_createjsBrowserify2.default.indexOf,promote:_createjsBrowserify2.default.promote,buildDate:new Date(_createjsBrowserify2.default.TweenJS.buildDate),version:_createjsBrowserify2.default.TweenJS.version};exports.default=tween},function(module,exports){(function(__webpack_amd_options__){module.exports=__webpack_amd_options__}).call(exports,{})}])});
	//# sourceMappingURL=create-es6.js.map

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _createEs6Js = __webpack_require__(2);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * @class ElementHelpers
	 * @classdesc all the helpers we need to draw the elements
	 */
	var ElementHelpers = function () {
	  function ElementHelpers() {
	    _classCallCheck(this, ElementHelpers);
	  }
	
	  _createClass(ElementHelpers, null, [{
	    key: 'setBoxSize',
	
	
	    /**
	     * sets the box size of an EaselJS element
	     * @memberOf ElementHelpers
	     * @method setBoxSize
	     * @static
	     * @param {Object|Container|Element} element can be an Object, an EaselJS instance, a CreateJS Core Elements instance
	     * @param {Number} width the width
	     * @param {Number} height the height
	     * @param {Boolean} css specity if you want to override also the css box size properties
	     * @return {Object|Container|Element}
	     */
	    value: function setBoxSize(element) {
	      var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	      var height = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	      var css = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
	
	      if (!!css) {
	        element.style.width = width + 'px';
	        element.style.height = height + 'px';
	      }
	
	      return element.inherit({
	        width: width,
	        height: height
	      });
	    }
	
	    /**
	     * sets the scale factor of an EaselJS element
	     * @memberOf ElementHelpers
	     * @method scale
	     * @static
	     * @param {Object|Container|Element} element can be an Object, an EaselJS instance, a CreateJS Core Elements instance
	     * @param {Number|Object} scale the scale factor to be used for both scaleX and scaleY
	     * @return {Object|Container|Element}
	     */
	
	  }, {
	    key: 'scale',
	    value: function scale(element, _scale) {
	      return element.inherit({
	        scaleX: _scale,
	        scaleY: _scale
	      });
	    }
	
	    /**
	     * aligns the reg point or an element
	     * @memberOf ElementHelpers
	     * @method alignRegPoint
	     * @static
	     * @param {Object|Container|Element} element can be an Object, an EaselJS instance, a CreateJS Core Elements instance
	     * @param {String} mode can be a couple of word for horizontal or vertical align, in any order<br>
	     *   accepts the following modes<br>
	     *   <ul>
	     *     <li><b>Horizontal Modes</b>: left, center, right</li>
	     *     <li><b>Vertical Modes</b>: top, middle, bottom</li>
	     *   </ul>
	     * @return {Object|Container|Element}
	     */
	
	  }, {
	    key: 'alignRegPoint',
	    value: function alignRegPoint(element) {
	      var mode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'left top';
	
	      var bounds = element.getBounds();
	      var modes = mode.toArray(' ');
	      var horizontalModes = ['left', 'center', 'right'];
	      var verticalModes = ['top', 'middle', 'bottom'];
	
	      return element.inherit({
	        regX: horizontalModes.contains(modes) ? bounds.width * 0.5 : 0,
	        regY: verticalModes.contains(modes) ? bounds.height * 0.5 : 0
	      });
	    }
	
	    /**
	     * Aligns an element (horizontally, vertically or both) based on it's parent bounds.
	     * @memberOf ElementHelpers
	     * @method align
	     * @static
	     * @param {Object|Container|Element} element can be an Object, an EaselJS instance, a CreateJS Core Elements instance
	     * @param {null|Object|Container|Element} parent can be an Object, an EaselJS instance, a CreateJS Core Elements instance<br>
	     *   if null, it takes automatically the parent property of element parameter
	     * @param {String} mode can be a couple of word for horizontal or vertical align, in any order<br>
	     *   accepts the following modes<br>
	     *   <ul>
	     *     <li><b>Horizontal Modes</b>: left, center, right</li>
	     *     <li><b>Vertical Modes</b>: top, middle, bottom</li>
	     *   </ul>
	     * @param {Boolean} regPoint enabled alignment also on registration point
	     * @param {null|String} regPointMode can be a couple of word for horizontal or vertical align, in any order<br>
	     *   accepts the following modes<br>
	     *   <ul>
	     *     <li><b>Horizontal Modes</b>: left, center, right</li>
	     *     <li><b>Vertical Modes</b>: top, middle, bottom</li>
	     *   </ul><br>
	     *   if null it considers mode parameter as fallback
	     * @return {Object|Container|Element}
	     */
	
	  }, {
	    key: 'align',
	    value: function align(element) {
	      var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	      var mode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'left top';
	      var regPoint = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
	      var regPointMode = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
	
	      if (!parent) {
	        parent = element.parent;
	      }
	
	      var parentBounds = parent.getBounds();
	      var elementBounds = element.getBounds();
	      var modes = mode.toArray(' ');
	      var horizontalModes = ['left', 'center', 'right'];
	      var verticalModes = ['top', 'middle', 'bottom'];
	
	      if (!!regPoint) {
	        this.alignRegPoint(element, regPointMode || mode);
	      }
	
	      var position = {
	        x: 0,
	        y: 0
	      };
	
	      if (horizontalModes.contains(modes)) {
	        if (modes.contains('center')) {
	          position.inherit({
	            x: parentBounds.width * 0.5 + (!!regPoint && !(element instanceof _createEs6Js.Easel.Bitmap) ? elementBounds.width * 0.5 : 0)
	          });
	        } else if (modes.contains('left')) {
	          position.inherit({
	            x: !!regPoint ? elementBounds.width * 0.5 : 0
	          });
	        } else if (modes.contains('right')) {
	          position.inherit({
	            x: parentBounds.width - elementBounds.width + (!!regPoint ? elementBounds.width * 0.5 : 0)
	          });
	        }
	      }
	
	      if (verticalModes.contains(modes)) {
	        if (modes.contains('middle')) {
	          position.inherit({
	            y: parentBounds.height * 0.5 + (!!regPoint && !(element instanceof _createEs6Js.Easel.Bitmap) ? elementBounds.width * 0.5 : 0)
	          });
	        } else if (modes.contains('top')) {
	          position.inherit({
	            y: !!regPoint ? elementBounds.height * 0.5 : 0
	          });
	        } else if (modes.contains('bottom')) {
	          position.inherit({
	            y: parentBounds.height - elementBounds.height
	          });
	        }
	      }
	
	      return element.inherit(position);
	    }
	
	    /**
	     * creates an EaselJS Container instance based on bounds parameters
	     * @memberOf ElementHelpers
	     * @method createContainer
	     * @statuc
	     * @param {Arguments} bounds the bounds parameter will be passed to setBounds method of EaselJS Container class<br>
	     *   so it has to be an array with this sequence<br>
	     *   <ul>
	     *     <li>{Number} x</li>
	     *     <li>{Number} y</li>
	     *     <li>{Number} width</li>
	     *     <li>{Number} height</li>
	     *   </ul>
	     * @return {Container}
	     */
	
	  }, {
	    key: 'createContainer',
	    value: function createContainer() {
	      var container = new _createEs6Js.Easel.Container().inherit({
	        x: arguments.length <= 0 ? undefined : arguments[0],
	        y: arguments.length <= 1 ? undefined : arguments[1]
	      });
	
	      container.setBounds.apply(container, arguments);
	
	      return container;
	    }
	
	    /**
	     * creates an EaselJS Graphics instance
	     * @memberOf ElementHelpers
	     * @method createGraphics
	     * @static
	     * @param {Object} options the options can contain
	     * @param {String|Object} options.fill color for filling graphics<br>
	     * @param {Array} options.fill.colors colors to create a linear gradient fill
	     * @param {Array} options.fill.ratios color ratios to create a linear gradient fill
	     * @param {Array} options.fill.points start & stop points to create a linear gradient fill
	     * @param {String|Object} options.stroke stroke options, if string it creates a stroke with size 1
	     * @param {Number} options.stroke.size the size
	     * @param {String} options.stroke.color the color
	     * @param {Arguments} bounds the bounds parameter will be passed to setBounds method of EaselJS Container class<br>
	     *   so it has to be an array with this sequence<br>
	     *   <ul>
	     *     <li>{Number} x</li>
	     *     <li>{Number} y</li>
	     *     <li>{Number} width</li>
	     *     <li>{Number} height</li>
	     *   </ul>
	     * @return {Graphics}
	     */
	
	  }, {
	    key: 'createGraphics',
	    value: function createGraphics() {
	      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	      var defaults = {
	        fill: false,
	        stroke: false
	      };
	
	      var settings = defaults.inherit(true, options);
	
	      var graphics = new _createEs6Js.Easel.Graphics();
	
	      if (!!settings.fill) {
	        if (Object.isObject(settings.fill)) {
	          if (!!settings.fill.colors && !!settings.fill.ratios && !!settings.fill.points) {
	            graphics.beginLinearGradientFill.apply(graphics, [[].concat(_toConsumableArray(settings.fill.colors)), [].concat(_toConsumableArray(settings.fill.ratios))].concat(_toConsumableArray(settings.fill.points)));
	          }
	        } else {
	          graphics.beginFill(settings.fill);
	        }
	      }
	
	      if (!!settings.stroke) {
	        if (String.isString(settings.stroke)) {
	          settings.inherit({
	            stroke: {
	              size: 1,
	              color: settings.stroke
	            }
	          });
	        }
	
	        graphics.setStrokeStyle(settings.stroke.size);
	        graphics.beginStroke(settings.stroke.color);
	      }
	
	      return graphics;
	    }
	
	    /**
	     * creates an EaselJS Rect Shape instance
	     * @memberOf ElementHelpers
	     * @method createRect
	     * @static
	     * @param {Object} options the options can contain
	     * @param {String|Object} options.fill color for filling graphics<br>
	     * @param {Array} options.fill.colors colors to create a linear gradient fill
	     * @param {Array} options.fill.ratios color ratios to create a linear gradient fill
	     * @param {Array} options.fill.points start & stop points to create a linear gradient fill
	     * @param {String|Object} options.stroke stroke options, if string it creates a stroke with size 1
	     * @param {Number} options.stroke.size the size
	     * @param {String} options.stroke.color the color
	     * @param {Boolean|Number|Array} options.stroke.radius
	     *   <br>if false it draws a rect
	     *   <br>if Number it draws a round rect
	     *   <br>if Array it draws a round rect complex (array has to respect the arguments sequence of drawRoundRectComplex method of EaselJS Graphics class
	     * @param {Arguments} bounds the bounds parameter will be passed to setBounds method of EaselJS Container class<br>
	     *   so it has to be an array with this sequence<br>
	     *   <ul>
	     *     <li>{Number} x</li>
	     *     <li>{Number} y</li>
	     *     <li>{Number} width</li>
	     *     <li>{Number} height</li>
	     *   </ul>
	     * @return {Shape}
	     */
	
	  }, {
	    key: 'createRect',
	    value: function createRect() {
	      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	      for (var _len = arguments.length, bounds = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        bounds[_key - 1] = arguments[_key];
	      }
	
	      var graphics = this.createGraphics.apply(this, [options].concat(bounds));
	
	      if (!!options.stroke.radius) {
	        if (Array.isArray(options.stroke.radius)) {
	          graphics.drawRoundRectComplex.apply(graphics, bounds.concat(_toConsumableArray(options.stroke.radius)));
	        } else if (Number.isNumber(options.stroke.radius)) {
	          graphics.drawRoundRect.apply(graphics, bounds.concat([options.stroke.radius]));
	        }
	      } else {
	        graphics.drawRect.apply(graphics, bounds);
	      }
	
	      graphics.endFill();
	      graphics.endStroke();
	
	      var rect = new _createEs6Js.Easel.Shape(graphics);
	      rect.setBounds.apply(rect, bounds);
	
	      return rect;
	    }
	
	    /**
	     * creates an EaselJS Circle Shape instance
	     * @memberOf ElementHelpers
	     * @method createCircle
	     * @static
	     * @param {Object} options the options can contain
	     * @param {String|Object} options.fill color for filling graphics
	     * @param {Array} options.fill.colors colors to create a linear gradient fill
	     * @param {Array} options.fill.ratios color ratios to create a linear gradient fill
	     * @param {Array} options.fill.points start & stop points to create a linear gradient fill
	     * @param {String|Object} options.stroke stroke options, if string it creates a stroke with size 1
	     * @param {Number} options.stroke.size the size
	     * @param {String} options.stroke.color the color
	     * @param {Number} options.radius the radius of the circle
	     * @param {Arguments} bounds the bounds parameter will be passed to setBounds method of EaselJS Container class<br>
	     *   so it has to be an array with this sequence<br>
	     *   <ul>
	     *     <li>{Number} x</li>
	     *     <li>{Number} y</li>
	     *     <li>{Number} width</li>
	     *     <li>{Number} height</li>
	     *   </ul>
	     * @return {Shape}
	     */
	
	  }, {
	    key: 'createCircle',
	    value: function createCircle() {
	      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	      var defaults = {
	        radius: 1
	      };
	
	      var settings = defaults.inherit(true, options);
	
	      for (var _len2 = arguments.length, bounds = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	        bounds[_key2 - 1] = arguments[_key2];
	      }
	
	      var graphics = this.createGraphics.apply(this, [settings].concat(bounds));
	      graphics.drawCircle(0, 0, settings.radius);
	
	      var circle = new _createEs6Js.Easel.Shape(graphics);
	      circle.setBounds.apply(circle, bounds);
	
	      return circle;
	    }
	
	    /**
	     * creates an EaselJS Text instance
	     * @memberOf ElementHelpers
	     * @method createText
	     * @static
	     * @param {String} text the text to be rendered
	     * @param {String} font font options as expected by the EaselJS Text class
	     * @param {String} color the color of the text
	     * @return {Text}
	     */
	
	  }, {
	    key: 'createText',
	    value: function createText(text, font, color) {
	      return new _createEs6Js.Easel.Text(text, font, color);
	    }
	
	    /**
	     * creates an EaselJS Bitmap instance
	     * @memberOf ElementHelpers
	     * @method createImage
	     * @static
	     * @param {HTMLElement} image the preloaded DOM element representing the image
	     * @return {Bitmap}
	     */
	
	  }, {
	    key: 'createImage',
	    value: function createImage(image) {
	      return new _createEs6Js.Easel.Bitmap(image);
	    }
	
	    /**
	     * creates an EaselJS Sprite instance
	     * @memberOf ElementHelpers
	     * @method createSprite
	     * @static
	     * @param {HTMLElement} spritesheet the preloaded DOM element representing the sprite
	     * @return {Sprite}
	     */
	
	  }, {
	    key: 'createSprite',
	    value: function createSprite(spritesheet) {
	      return new _createEs6Js.Easel.Sprite(spritesheet);
	    }
	  }]);
	
	  return ElementHelpers;
	}();
	
	exports.default = ElementHelpers;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _TextElement2 = __webpack_require__(8);
	
	var _TextElement3 = _interopRequireDefault(_TextElement2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * constructs a LabelElement instance
	 * @class LabelElement
	 * @classdesc the LabelElement class extends TextElement, implementing padding, minWidth, etc etc ...
	 * @extend TextElement
	 * @public
	 * @param {Object} options the options to be merged with defaults settings
	 * @type {LabelElement}
	 */
	var LabelElement = function (_TextElement) {
	  _inherits(LabelElement, _TextElement);
	
	  function LabelElement() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    _classCallCheck(this, LabelElement);
	
	    return _possibleConstructorReturn(this, (LabelElement.__proto__ || Object.getPrototypeOf(LabelElement)).call(this, options));
	  }
	
	  /**
	   * Initialize default settings for Label Element
	   * @memberOf LabelElement
	   * @method initDefaults
	   * @instance
	   * @override
	   * @param {Object} defaults the defaults settings
	   */
	
	
	  _createClass(LabelElement, [{
	    key: 'initDefaults',
	    value: function initDefaults(defaults) {
	      _get(LabelElement.prototype.__proto__ || Object.getPrototypeOf(LabelElement.prototype), 'initDefaults', this).call(this, {
	        text: 'Label',
	        padding: 10,
	        minWidth: 0
	      }.inherit(defaults));
	    }
	
	    /**
	     * compute bounds before drawing all graphic elements of LabelElement instance
	     * @memberOf LabelElement
	     * @method computeBounds
	     * @instance
	     * @override
	     */
	
	  }, {
	    key: 'computeBounds',
	    value: function computeBounds() {
	      _get(LabelElement.prototype.__proto__ || Object.getPrototypeOf(LabelElement.prototype), 'computeBounds', this).call(this);
	
	      if (!!this.settings.minWidth) {
	        if (String.isPercentage(this.settings.minWidth) && !!this.parent) {
	          this.settings.minWidth = this.parent.getComputedBounds().width * this.settings.minWidth.parsePercentage();
	        }
	
	        if (this.settings.size.width < this.settings.minWidth) {
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
	
	  }, {
	    key: 'centerText',
	    value: function centerText() {
	      if (!!this.settings.outline) {
	        this.textOutline.inherit({
	          x: this.settings.size.width * 0.5,
	          y: this.settings.size.height * 0.5
	        });
	      }
	
	      this.text.inherit({
	        x: this.settings.size.width * 0.5,
	        y: this.settings.size.height * 0.5
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
	
	  }, {
	    key: 'alignText',
	    value: function alignText() {
	      var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'center middle';
	
	      var modes = mode.toArray(' ');
	      var horizontalModes = ['left', 'center', 'right'];
	      var verticalModes = ['top', 'middle', 'bottom'];
	
	      var textOptions = {
	        x: this.settings.size.width * 0.5,
	        y: this.settings.size.height * 0.5,
	        textAlign: 'center',
	        textBaseline: 'middle'
	      };
	
	      if (horizontalModes.contains(modes)) {
	        if (modes.contains('left')) {
	          textOptions.inherit({
	            x: 0,
	            textAlign: 'left'
	          });
	        } else if (modes.contains('right')) {
	          textOptions.inherit({
	            x: this.settings.size.width,
	            textAlign: 'right'
	          });
	        }
	      }
	
	      if (verticalModes.contains(modes)) {
	        if (modes.contains('top')) {
	          textOptions.inherit({
	            y: 0,
	            textBaseline: 'top'
	          });
	        } else if (modes.contains('bottom')) {
	          textOptions.inherit({
	            y: this.settings.size.height,
	            textBaseline: 'bottom'
	          });
	        }
	      }
	
	      if (!!this.settings.outline) {
	        this.textOutline.inherit(textOptions);
	      }
	
	      this.text.inherit(textOptions);
	
	      return this;
	    }
	  }]);
	
	  return LabelElement;
	}(_TextElement3.default);
	
	exports.default = LabelElement;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _LabelElement2 = __webpack_require__(4);
	
	var _LabelElement3 = _interopRequireDefault(_LabelElement2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * constructs a ButtonElement instance
	 * @class ButtonElement
	 * @classdesc Button Element class, extending LabelElement with a click event handler
	 * @extends LabelElement
	 * @param {Object} options the options object to be merged with defaults
	 * @type {ButtonElement}
	 * @public
	 */
	var ButtonElement = function (_LabelElement) {
	  _inherits(ButtonElement, _LabelElement);
	
	  function ButtonElement() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    _classCallCheck(this, ButtonElement);
	
	    return _possibleConstructorReturn(this, (ButtonElement.__proto__ || Object.getPrototypeOf(ButtonElement)).call(this, options));
	  }
	
	  /**
	   * Initialize default settings for Button Element
	   * @memberOf ButtonElement
	   * @method initDefaults
	   * @instance
	   * @override
	   */
	
	
	  _createClass(ButtonElement, [{
	    key: 'initDefaults',
	    value: function initDefaults(defaults) {
	      _get(ButtonElement.prototype.__proto__ || Object.getPrototypeOf(ButtonElement.prototype), 'initDefaults', this).call(this, {
	        text: 'Button',
	        stroke: {
	          size: 4,
	          radius: 5,
	          color: '#fff'
	        },
	        events: {
	          click: function click() {}
	        }
	      }.inherit(defaults));
	    }
	  }]);
	
	  return ButtonElement;
	}(_LabelElement3.default);
	
	exports.default = ButtonElement;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _ElementHelpers = __webpack_require__(3);
	
	var _ElementHelpers2 = _interopRequireDefault(_ElementHelpers);
	
	var _Element2 = __webpack_require__(1);
	
	var _Element3 = _interopRequireDefault(_Element2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * constructs an ImageElement instance
	 * @class ImageElement
	 * @classdesc ImageElement class, extending Element
	 * @extends Element
	 * @param {Object} options the options object to be merged with defaults
	 * @type {ImageElement}
	 * @public
	 */
	var ImageElement = function (_Element) {
	  _inherits(ImageElement, _Element);
	
	  function ImageElement() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    _classCallCheck(this, ImageElement);
	
	    return _possibleConstructorReturn(this, (ImageElement.__proto__ || Object.getPrototypeOf(ImageElement)).call(this, options));
	  }
	
	  /**
	   * Initialize default settings for ImageElement
	   * @memberOf ImageElement
	   * @method initDefaults
	   * @instance
	   * @override
	   */
	
	
	  _createClass(ImageElement, [{
	    key: 'initDefaults',
	    value: function initDefaults() {
	      _get(ImageElement.prototype.__proto__ || Object.getPrototypeOf(ImageElement.prototype), 'initDefaults', this).call(this, {
	        image: null
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
	
	  }, {
	    key: 'setScale',
	    value: function setScale() {
	      var scaleOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	
	      _get(ImageElement.prototype.__proto__ || Object.getPrototypeOf(ImageElement.prototype), 'setScale', this).call(this, scaleOptions, force);
	
	      this.image.inherit({
	        scaleX: this.scaleX,
	        scaleY: this.scaleY
	      });
	
	      return this;
	    }
	  }, {
	    key: 'preDrawElements',
	    value: function preDrawElements() {
	      this.image = _ElementHelpers2.default.createImage(this.settings.image);
	      this.imageBounds = this.image.getBounds();
	
	      if (!this.settings.size.force) {
	        this.settings.inherit({
	          size: {
	            width: this.imageBounds.width,
	            height: this.imageBounds.height
	          }
	        });
	      }
	
	      _get(ImageElement.prototype.__proto__ || Object.getPrototypeOf(ImageElement.prototype), 'preDrawElements', this).call(this);
	    }
	
	    /**
	     * draws all graphic elements of the ImageElement instance
	     * @memberOf ImageElement
	     * @method drawElements
	     * @instance
	     * @override
	     */
	
	  }, {
	    key: 'drawElements',
	    value: function drawElements() {
	      _get(ImageElement.prototype.__proto__ || Object.getPrototypeOf(ImageElement.prototype), 'drawElements', this).call(this);
	
	      this.addChild(this.image);
	      _ElementHelpers2.default.align(this.image, null, 'center middle', true);
	    }
	  }]);
	
	  return ImageElement;
	}(_Element3.default);
	
	exports.default = ImageElement;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _ButtonElement2 = __webpack_require__(5);
	
	var _ButtonElement3 = _interopRequireDefault(_ButtonElement2);
	
	var _ImageElement = __webpack_require__(6);
	
	var _ImageElement2 = _interopRequireDefault(_ImageElement);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * constructs a ListItemElement instance
	 * @class ListItemElement
	 * @classdesc the ListItemElement extends ButtonElement allowing you to add a list item indicator and a text, with a click event handler
	 * @extend ButtonElement
	 * @param {Object} options the options object to be merged with defaults
	 * @type {ListItemElement}
	 * @public
	 */
	var ListItemElement = function (_ButtonElement) {
	  _inherits(ListItemElement, _ButtonElement);
	
	  function ListItemElement() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    _classCallCheck(this, ListItemElement);
	
	    return _possibleConstructorReturn(this, (ListItemElement.__proto__ || Object.getPrototypeOf(ListItemElement)).call(this, options));
	  }
	
	  /**
	   * Initialize default settings for ListItemElement instance
	   * @memberOf ListItemElement
	   * @method initDefaults
	   * @instance
	   * @override
	   */
	
	
	  _createClass(ListItemElement, [{
	    key: 'initDefaults',
	    value: function initDefaults() {
	      _get(ListItemElement.prototype.__proto__ || Object.getPrototypeOf(ListItemElement.prototype), 'initDefaults', this).call(this, {
	        text: 'List Item',
	        indicator: false, // options for an ImageElement to use as listItem indicator
	        stroke: {
	          size: 0,
	          radius: 0,
	          color: 'transparent'
	        },
	        events: {
	          click: function click() {}
	        }
	      });
	    }
	
	    /**
	     * draws all graphic elements of the ListItemElement instance
	     * @memberOf ListItemElement
	     * @method drawElements
	     * @instance
	     * @override
	     */
	
	  }, {
	    key: 'drawElements',
	    value: function drawElements() {
	      if (!!this.settings.indicator) {
	        this.indicator = new _ImageElement2.default(this.settings.indicator.inherit({
	          parent: this,
	          align: 'left middle'
	        })).setPosition({
	          x: 10
	        });
	
	        this.settings.lineHeight = this.indicator.getComputedBounds().height;
	      }
	
	      this.alignText('left middle');
	      this.setTextPosition({
	        x: this.indicator.getComputedBounds().right + 10
	      }, true);
	    }
	  }]);
	
	  return ListItemElement;
	}(_ButtonElement3.default);
	
	exports.default = ListItemElement;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _createEs6Js = __webpack_require__(2);
	
	var _createEs6Js2 = _interopRequireDefault(_createEs6Js);
	
	var _ElementHelpers = __webpack_require__(3);
	
	var _ElementHelpers2 = _interopRequireDefault(_ElementHelpers);
	
	var _Element2 = __webpack_require__(1);
	
	var _Element3 = _interopRequireDefault(_Element2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * constructs a TextElement instance
	 * @class TextElement
	 * @classdesc extends Element Class adding an EaselJS Text instance inside of it
	 * @extend Element
	 * @public
	 * @param {Object} options the options to be merged with defaults settings
	 * @type {TextElement}
	 */
	var TextElement = function (_Element) {
	  _inherits(TextElement, _Element);
	
	  function TextElement() {
	    _classCallCheck(this, TextElement);
	
	    return _possibleConstructorReturn(this, (TextElement.__proto__ || Object.getPrototypeOf(TextElement)).apply(this, arguments));
	  }
	
	  _createClass(TextElement, [{
	    key: 'initDefaults',
	
	    /**
	     * initializes defaults settings for TextElement
	     * @memberOf TextElement
	     * @method initDefaults
	     * @instance
	     * @override
	     */
	    value: function initDefaults(defaults) {
	      _get(TextElement.prototype.__proto__ || Object.getPrototypeOf(TextElement.prototype), 'initDefaults', this).call(this, {
	        text: 'Text Element',
	        font: '50px Arial',
	        color: '#000',
	        padding: 0,
	        lineHeight: false,
	        maxWidth: false,
	        shadow: false,
	        outline: false
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
	
	  }, {
	    key: 'initSettings',
	    value: function initSettings(options) {
	      _get(TextElement.prototype.__proto__ || Object.getPrototypeOf(TextElement.prototype), 'initSettings', this).call(this, options);
	
	      if (!this.settings.lineHeight) {
	        this.settings.lineHeight = Number.parse(this.settings.font);
	      }
	    }
	
	    /**
	     * computes the bounds based on specified text parameter
	     * @memberOf TextElement
	     * @method computeBounds
	     * @instance
	     */
	
	  }, {
	    key: 'computeBounds',
	    value: function computeBounds() {
	      this.textBounds = !!this.settings.outline ? this.textOutline.getBounds() : this.text.getBounds();
	
	      if (!!this.settings.padding) {
	        if (Array.isArray(this.settings.padding)) {
	          var horizontalPadding = this.settings.padding[0];
	          var verticalPadding = this.settings.padding[1];
	
	          if (horizontalPadding > 0) {
	            this.textBounds.inherit({
	              width: this.textBounds.width + horizontalPadding
	            });
	          }
	
	          if (verticalPadding > 0) {
	            this.textBounds.inherit({
	              height: this.textBounds.height + verticalPadding
	            });
	          }
	        } else if (Number.isNumber(this.settings.padding)) {
	          if (this.settings.padding > 0) {
	            this.textBounds.inherit({
	              width: this.textBounds.width + this.settings.padding,
	              height: this.textBounds.height + this.settings.padding
	            });
	          }
	        }
	      }
	
	      this.settings.inherit({
	        size: {
	          width: this.textBounds.width,
	          height: this.textBounds.height
	        }
	      });
	    }
	
	    /**
	     * centers the text inside the container
	     * @memberOf TextElement
	     * @method centerText
	     * @instance
	     */
	
	  }, {
	    key: 'centerText',
	    value: function centerText() {
	      if (!!this.settings.outline) {
	        this.textOutline.inherit({
	          x: this.settings.size.width * 0.5,
	          y: this.settings.lineHeight * 0.5
	        });
	      }
	
	      this.text.inherit({
	        x: this.settings.size.width * 0.5,
	        y: this.settings.lineHeight * 0.5
	      });
	    }
	  }, {
	    key: 'preDrawElements',
	    value: function preDrawElements() {
	      if (!!this.settings.outline) {
	        this.textOutline = _ElementHelpers2.default.createText(this.settings.text, this.settings.font, this.settings.outline.color).inherit({
	          textAlign: 'center',
	          textBaseline: 'middle',
	          lineHeight: this.settings.lineHeight || null,
	          lineWidth: this.settings.maxWidth || null,
	          outline: this.settings.outline.size,
	          shadow: !!this.settings.shadow ? new (Function.prototype.bind.apply(_createEs6Js2.default.Easel.Shadow, [null].concat(_toConsumableArray(this.settings.shadow))))() : null
	        });
	      }
	
	      this.text = _ElementHelpers2.default.createText(this.settings.text, this.settings.font, this.settings.color).inherit({
	        textAlign: 'center',
	        textBaseline: 'middle',
	        lineHeight: this.settings.lineHeight || null,
	        lineWidth: this.settings.maxWidth || null,
	        shadow: !!this.settings.shadow ? new (Function.prototype.bind.apply(_createEs6Js2.default.Easel.Shadow, [null].concat(_toConsumableArray(this.settings.shadow))))() : null
	      });
	
	      this.computeBounds();
	      this.centerText();
	
	      _get(TextElement.prototype.__proto__ || Object.getPrototypeOf(TextElement.prototype), 'preDrawElements', this).call(this);
	    }
	
	    /**
	     * draws all graphic elements of the TextElement instance
	     * @memberOf TextElement
	     * @method drawElements
	     * @instance
	     * @override
	     */
	
	  }, {
	    key: 'drawElements',
	    value: function drawElements() {
	      _get(TextElement.prototype.__proto__ || Object.getPrototypeOf(TextElement.prototype), 'drawElements', this).call(this);
	
	      if (!!this.settings.outline) {
	        this.addChild(this.textOutline);
	        this.setChildIndex(this.textOutline, 1);
	      }
	
	      this.addChild(this.text);
	      this.setChildIndex(this.text, !!this.settings.outline ? 2 : 1);
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
	
	  }, {
	    key: 'setTextPosition',
	    value: function setTextPosition() {
	      var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { x: 0, y: 0 };
	      var override = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	
	      if (!!position.x) {
	        if (!!override) {
	          if (!!this.settings.outline) {
	            this.textOutline.x = position.x;
	          }
	
	          this.text.x = position.x;
	        } else {
	          if (!!this.settings.outline) {
	            this.textOutline.x += position.x;
	          }
	
	          this.text.x += position.x;
	        }
	      }
	
	      if (!!position.y) {
	        if (!!override) {
	          if (!!this.settings.outline) {
	            this.textOutline.y = position.y;
	          }
	
	          this.text.y = position.y;
	        } else {
	          if (!!this.settings.outline) {
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
	
	  }, {
	    key: 'getText',
	    value: function getText() {
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
	
	  }, {
	    key: 'setText',
	    value: function setText(text) {
	      if (!!this.settings.outline) {
	        this.textOutline.text = text;
	      }
	
	      this.text.text = text;
	
	      return this;
	    }
	  }]);
	
	  return TextElement;
	}(_Element3.default);
	
	exports.default = TextElement;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _createEs6Js = __webpack_require__(2);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var SoundElement = function () {
	  function SoundElement(props) {
	    _classCallCheck(this, SoundElement);
	
	    this.defaults = {
	      interrupt: _createEs6Js.Sound.Sound.INTERRUPT_ANY,
	      loop: 0,
	      delay: 0,
	      offset: 0,
	      volume: 1,
	      pan: 0
	    };
	    this.props = props;
	    this.playSound();
	  }
	
	  _createClass(SoundElement, [{
	    key: 'playSound',
	    value: function playSound() {
	      var _this = this;
	
	      var filteredProps = Object.assign({}, this.props);
	      delete filteredProps.sound;
	      delete filteredProps.fadeIn;
	      delete filteredProps.fadeOut;
	      delete filteredProps.events;
	      var soundProps = Object.assign({}, this.defaults, filteredProps);
	
	      if (Object.isObject(this.props.fade) && (this.props.fade.type === 'FADE_IN' || this.props.fade.type === 'FADE_ALL')) {
	        soundProps.volume = 0;
	      }
	
	      this.instance = _createEs6Js.Sound.Sound.play(this.props.sound, soundProps);
	
	      var eventsDefined = !!this.props.events;
	
	      if (eventsDefined) {
	        this.props.events.each(function (value, key) {
	          if (Function.isFunction(value)) {
	            _this.instance.on(key, value);
	          }
	        });
	      }
	
	      return this.instance;
	    }
	  }]);
	
	  return SoundElement;
	}();
	
	exports.default = SoundElement;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global, module, _) {/**
	 * @license
	 * Lodash <https://lodash.com/>
	 * Copyright JS Foundation and other contributors <https://js.foundation/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */
	;(function() {
	
	  /** Used as a safe reference for `undefined` in pre-ES5 environments. */
	  var undefined;
	
	  /** Used as the semantic version number. */
	  var VERSION = '4.17.4';
	
	  /** Used as the size to enable large array optimizations. */
	  var LARGE_ARRAY_SIZE = 200;
	
	  /** Error message constants. */
	  var CORE_ERROR_TEXT = 'Unsupported core-js use. Try https://npms.io/search?q=ponyfill.',
	      FUNC_ERROR_TEXT = 'Expected a function';
	
	  /** Used to stand-in for `undefined` hash values. */
	  var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	  /** Used as the maximum memoize cache size. */
	  var MAX_MEMOIZE_SIZE = 500;
	
	  /** Used as the internal argument placeholder. */
	  var PLACEHOLDER = '__lodash_placeholder__';
	
	  /** Used to compose bitmasks for cloning. */
	  var CLONE_DEEP_FLAG = 1,
	      CLONE_FLAT_FLAG = 2,
	      CLONE_SYMBOLS_FLAG = 4;
	
	  /** Used to compose bitmasks for value comparisons. */
	  var COMPARE_PARTIAL_FLAG = 1,
	      COMPARE_UNORDERED_FLAG = 2;
	
	  /** Used to compose bitmasks for function metadata. */
	  var WRAP_BIND_FLAG = 1,
	      WRAP_BIND_KEY_FLAG = 2,
	      WRAP_CURRY_BOUND_FLAG = 4,
	      WRAP_CURRY_FLAG = 8,
	      WRAP_CURRY_RIGHT_FLAG = 16,
	      WRAP_PARTIAL_FLAG = 32,
	      WRAP_PARTIAL_RIGHT_FLAG = 64,
	      WRAP_ARY_FLAG = 128,
	      WRAP_REARG_FLAG = 256,
	      WRAP_FLIP_FLAG = 512;
	
	  /** Used as default options for `_.truncate`. */
	  var DEFAULT_TRUNC_LENGTH = 30,
	      DEFAULT_TRUNC_OMISSION = '...';
	
	  /** Used to detect hot functions by number of calls within a span of milliseconds. */
	  var HOT_COUNT = 800,
	      HOT_SPAN = 16;
	
	  /** Used to indicate the type of lazy iteratees. */
	  var LAZY_FILTER_FLAG = 1,
	      LAZY_MAP_FLAG = 2,
	      LAZY_WHILE_FLAG = 3;
	
	  /** Used as references for various `Number` constants. */
	  var INFINITY = 1 / 0,
	      MAX_SAFE_INTEGER = 9007199254740991,
	      MAX_INTEGER = 1.7976931348623157e+308,
	      NAN = 0 / 0;
	
	  /** Used as references for the maximum length and index of an array. */
	  var MAX_ARRAY_LENGTH = 4294967295,
	      MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1,
	      HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;
	
	  /** Used to associate wrap methods with their bit flags. */
	  var wrapFlags = [
	    ['ary', WRAP_ARY_FLAG],
	    ['bind', WRAP_BIND_FLAG],
	    ['bindKey', WRAP_BIND_KEY_FLAG],
	    ['curry', WRAP_CURRY_FLAG],
	    ['curryRight', WRAP_CURRY_RIGHT_FLAG],
	    ['flip', WRAP_FLIP_FLAG],
	    ['partial', WRAP_PARTIAL_FLAG],
	    ['partialRight', WRAP_PARTIAL_RIGHT_FLAG],
	    ['rearg', WRAP_REARG_FLAG]
	  ];
	
	  /** `Object#toString` result references. */
	  var argsTag = '[object Arguments]',
	      arrayTag = '[object Array]',
	      asyncTag = '[object AsyncFunction]',
	      boolTag = '[object Boolean]',
	      dateTag = '[object Date]',
	      domExcTag = '[object DOMException]',
	      errorTag = '[object Error]',
	      funcTag = '[object Function]',
	      genTag = '[object GeneratorFunction]',
	      mapTag = '[object Map]',
	      numberTag = '[object Number]',
	      nullTag = '[object Null]',
	      objectTag = '[object Object]',
	      promiseTag = '[object Promise]',
	      proxyTag = '[object Proxy]',
	      regexpTag = '[object RegExp]',
	      setTag = '[object Set]',
	      stringTag = '[object String]',
	      symbolTag = '[object Symbol]',
	      undefinedTag = '[object Undefined]',
	      weakMapTag = '[object WeakMap]',
	      weakSetTag = '[object WeakSet]';
	
	  var arrayBufferTag = '[object ArrayBuffer]',
	      dataViewTag = '[object DataView]',
	      float32Tag = '[object Float32Array]',
	      float64Tag = '[object Float64Array]',
	      int8Tag = '[object Int8Array]',
	      int16Tag = '[object Int16Array]',
	      int32Tag = '[object Int32Array]',
	      uint8Tag = '[object Uint8Array]',
	      uint8ClampedTag = '[object Uint8ClampedArray]',
	      uint16Tag = '[object Uint16Array]',
	      uint32Tag = '[object Uint32Array]';
	
	  /** Used to match empty string literals in compiled template source. */
	  var reEmptyStringLeading = /\b__p \+= '';/g,
	      reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
	      reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
	
	  /** Used to match HTML entities and HTML characters. */
	  var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g,
	      reUnescapedHtml = /[&<>"']/g,
	      reHasEscapedHtml = RegExp(reEscapedHtml.source),
	      reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
	
	  /** Used to match template delimiters. */
	  var reEscape = /<%-([\s\S]+?)%>/g,
	      reEvaluate = /<%([\s\S]+?)%>/g,
	      reInterpolate = /<%=([\s\S]+?)%>/g;
	
	  /** Used to match property names within property paths. */
	  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	      reIsPlainProp = /^\w*$/,
	      reLeadingDot = /^\./,
	      rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
	
	  /**
	   * Used to match `RegExp`
	   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	   */
	  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g,
	      reHasRegExpChar = RegExp(reRegExpChar.source);
	
	  /** Used to match leading and trailing whitespace. */
	  var reTrim = /^\s+|\s+$/g,
	      reTrimStart = /^\s+/,
	      reTrimEnd = /\s+$/;
	
	  /** Used to match wrap detail comments. */
	  var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
	      reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/,
	      reSplitDetails = /,? & /;
	
	  /** Used to match words composed of alphanumeric characters. */
	  var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
	
	  /** Used to match backslashes in property paths. */
	  var reEscapeChar = /\\(\\)?/g;
	
	  /**
	   * Used to match
	   * [ES template delimiters](http://ecma-international.org/ecma-262/7.0/#sec-template-literal-lexical-components).
	   */
	  var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
	
	  /** Used to match `RegExp` flags from their coerced string values. */
	  var reFlags = /\w*$/;
	
	  /** Used to detect bad signed hexadecimal string values. */
	  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
	
	  /** Used to detect binary string values. */
	  var reIsBinary = /^0b[01]+$/i;
	
	  /** Used to detect host constructors (Safari). */
	  var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	  /** Used to detect octal string values. */
	  var reIsOctal = /^0o[0-7]+$/i;
	
	  /** Used to detect unsigned integer values. */
	  var reIsUint = /^(?:0|[1-9]\d*)$/;
	
	  /** Used to match Latin Unicode letters (excluding mathematical operators). */
	  var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
	
	  /** Used to ensure capturing order of template delimiters. */
	  var reNoMatch = /($^)/;
	
	  /** Used to match unescaped characters in compiled string literals. */
	  var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
	
	  /** Used to compose unicode character classes. */
	  var rsAstralRange = '\\ud800-\\udfff',
	      rsComboMarksRange = '\\u0300-\\u036f',
	      reComboHalfMarksRange = '\\ufe20-\\ufe2f',
	      rsComboSymbolsRange = '\\u20d0-\\u20ff',
	      rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
	      rsDingbatRange = '\\u2700-\\u27bf',
	      rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
	      rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
	      rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
	      rsPunctuationRange = '\\u2000-\\u206f',
	      rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
	      rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
	      rsVarRange = '\\ufe0e\\ufe0f',
	      rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
	
	  /** Used to compose unicode capture groups. */
	  var rsApos = "['\u2019]",
	      rsAstral = '[' + rsAstralRange + ']',
	      rsBreak = '[' + rsBreakRange + ']',
	      rsCombo = '[' + rsComboRange + ']',
	      rsDigits = '\\d+',
	      rsDingbat = '[' + rsDingbatRange + ']',
	      rsLower = '[' + rsLowerRange + ']',
	      rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
	      rsFitz = '\\ud83c[\\udffb-\\udfff]',
	      rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
	      rsNonAstral = '[^' + rsAstralRange + ']',
	      rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
	      rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
	      rsUpper = '[' + rsUpperRange + ']',
	      rsZWJ = '\\u200d';
	
	  /** Used to compose unicode regexes. */
	  var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
	      rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
	      rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
	      rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
	      reOptMod = rsModifier + '?',
	      rsOptVar = '[' + rsVarRange + ']?',
	      rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
	      rsOrdLower = '\\d*(?:(?:1st|2nd|3rd|(?![123])\\dth)\\b)',
	      rsOrdUpper = '\\d*(?:(?:1ST|2ND|3RD|(?![123])\\dTH)\\b)',
	      rsSeq = rsOptVar + reOptMod + rsOptJoin,
	      rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq,
	      rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';
	
	  /** Used to match apostrophes. */
	  var reApos = RegExp(rsApos, 'g');
	
	  /**
	   * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
	   * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
	   */
	  var reComboMark = RegExp(rsCombo, 'g');
	
	  /** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
	  var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');
	
	  /** Used to match complex or compound words. */
	  var reUnicodeWord = RegExp([
	    rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
	    rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
	    rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
	    rsUpper + '+' + rsOptContrUpper,
	    rsOrdUpper,
	    rsOrdLower,
	    rsDigits,
	    rsEmoji
	  ].join('|'), 'g');
	
	  /** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
	  var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');
	
	  /** Used to detect strings that need a more robust regexp to match words. */
	  var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
	
	  /** Used to assign default `context` object properties. */
	  var contextProps = [
	    'Array', 'Buffer', 'DataView', 'Date', 'Error', 'Float32Array', 'Float64Array',
	    'Function', 'Int8Array', 'Int16Array', 'Int32Array', 'Map', 'Math', 'Object',
	    'Promise', 'RegExp', 'Set', 'String', 'Symbol', 'TypeError', 'Uint8Array',
	    'Uint8ClampedArray', 'Uint16Array', 'Uint32Array', 'WeakMap',
	    '_', 'clearTimeout', 'isFinite', 'parseInt', 'setTimeout'
	  ];
	
	  /** Used to make template sourceURLs easier to identify. */
	  var templateCounter = -1;
	
	  /** Used to identify `toStringTag` values of typed arrays. */
	  var typedArrayTags = {};
	  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	  typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	  typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	  typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	  typedArrayTags[uint32Tag] = true;
	  typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	  typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	  typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	  typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	  typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	  typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	  typedArrayTags[setTag] = typedArrayTags[stringTag] =
	  typedArrayTags[weakMapTag] = false;
	
	  /** Used to identify `toStringTag` values supported by `_.clone`. */
	  var cloneableTags = {};
	  cloneableTags[argsTag] = cloneableTags[arrayTag] =
	  cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
	  cloneableTags[boolTag] = cloneableTags[dateTag] =
	  cloneableTags[float32Tag] = cloneableTags[float64Tag] =
	  cloneableTags[int8Tag] = cloneableTags[int16Tag] =
	  cloneableTags[int32Tag] = cloneableTags[mapTag] =
	  cloneableTags[numberTag] = cloneableTags[objectTag] =
	  cloneableTags[regexpTag] = cloneableTags[setTag] =
	  cloneableTags[stringTag] = cloneableTags[symbolTag] =
	  cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
	  cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
	  cloneableTags[errorTag] = cloneableTags[funcTag] =
	  cloneableTags[weakMapTag] = false;
	
	  /** Used to map Latin Unicode letters to basic Latin letters. */
	  var deburredLetters = {
	    // Latin-1 Supplement block.
	    '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
	    '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
	    '\xc7': 'C',  '\xe7': 'c',
	    '\xd0': 'D',  '\xf0': 'd',
	    '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
	    '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
	    '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
	    '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
	    '\xd1': 'N',  '\xf1': 'n',
	    '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
	    '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
	    '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
	    '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
	    '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
	    '\xc6': 'Ae', '\xe6': 'ae',
	    '\xde': 'Th', '\xfe': 'th',
	    '\xdf': 'ss',
	    // Latin Extended-A block.
	    '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
	    '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
	    '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
	    '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
	    '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
	    '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
	    '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
	    '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
	    '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
	    '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
	    '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
	    '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
	    '\u0134': 'J',  '\u0135': 'j',
	    '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
	    '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
	    '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
	    '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
	    '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
	    '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
	    '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
	    '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
	    '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
	    '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
	    '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
	    '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
	    '\u0163': 't',  '\u0165': 't', '\u0167': 't',
	    '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
	    '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
	    '\u0174': 'W',  '\u0175': 'w',
	    '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
	    '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
	    '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
	    '\u0132': 'IJ', '\u0133': 'ij',
	    '\u0152': 'Oe', '\u0153': 'oe',
	    '\u0149': "'n", '\u017f': 's'
	  };
	
	  /** Used to map characters to HTML entities. */
	  var htmlEscapes = {
	    '&': '&amp;',
	    '<': '&lt;',
	    '>': '&gt;',
	    '"': '&quot;',
	    "'": '&#39;'
	  };
	
	  /** Used to map HTML entities to characters. */
	  var htmlUnescapes = {
	    '&amp;': '&',
	    '&lt;': '<',
	    '&gt;': '>',
	    '&quot;': '"',
	    '&#39;': "'"
	  };
	
	  /** Used to escape characters for inclusion in compiled string literals. */
	  var stringEscapes = {
	    '\\': '\\',
	    "'": "'",
	    '\n': 'n',
	    '\r': 'r',
	    '\u2028': 'u2028',
	    '\u2029': 'u2029'
	  };
	
	  /** Built-in method references without a dependency on `root`. */
	  var freeParseFloat = parseFloat,
	      freeParseInt = parseInt;
	
	  /** Detect free variable `global` from Node.js. */
	  var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
	
	  /** Detect free variable `self`. */
	  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	
	  /** Used as a reference to the global object. */
	  var root = freeGlobal || freeSelf || Function('return this')();
	
	  /** Detect free variable `exports`. */
	  var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
	
	  /** Detect free variable `module`. */
	  var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
	
	  /** Detect the popular CommonJS extension `module.exports`. */
	  var moduleExports = freeModule && freeModule.exports === freeExports;
	
	  /** Detect free variable `process` from Node.js. */
	  var freeProcess = moduleExports && freeGlobal.process;
	
	  /** Used to access faster Node.js helpers. */
	  var nodeUtil = (function() {
	    try {
	      return freeProcess && freeProcess.binding && freeProcess.binding('util');
	    } catch (e) {}
	  }());
	
	  /* Node.js helper references. */
	  var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer,
	      nodeIsDate = nodeUtil && nodeUtil.isDate,
	      nodeIsMap = nodeUtil && nodeUtil.isMap,
	      nodeIsRegExp = nodeUtil && nodeUtil.isRegExp,
	      nodeIsSet = nodeUtil && nodeUtil.isSet,
	      nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
	
	  /*--------------------------------------------------------------------------*/
	
	  /**
	   * Adds the key-value `pair` to `map`.
	   *
	   * @private
	   * @param {Object} map The map to modify.
	   * @param {Array} pair The key-value pair to add.
	   * @returns {Object} Returns `map`.
	   */
	  function addMapEntry(map, pair) {
	    // Don't return `map.set` because it's not chainable in IE 11.
	    map.set(pair[0], pair[1]);
	    return map;
	  }
	
	  /**
	   * Adds `value` to `set`.
	   *
	   * @private
	   * @param {Object} set The set to modify.
	   * @param {*} value The value to add.
	   * @returns {Object} Returns `set`.
	   */
	  function addSetEntry(set, value) {
	    // Don't return `set.add` because it's not chainable in IE 11.
	    set.add(value);
	    return set;
	  }
	
	  /**
	   * A faster alternative to `Function#apply`, this function invokes `func`
	   * with the `this` binding of `thisArg` and the arguments of `args`.
	   *
	   * @private
	   * @param {Function} func The function to invoke.
	   * @param {*} thisArg The `this` binding of `func`.
	   * @param {Array} args The arguments to invoke `func` with.
	   * @returns {*} Returns the result of `func`.
	   */
	  function apply(func, thisArg, args) {
	    switch (args.length) {
	      case 0: return func.call(thisArg);
	      case 1: return func.call(thisArg, args[0]);
	      case 2: return func.call(thisArg, args[0], args[1]);
	      case 3: return func.call(thisArg, args[0], args[1], args[2]);
	    }
	    return func.apply(thisArg, args);
	  }
	
	  /**
	   * A specialized version of `baseAggregator` for arrays.
	   *
	   * @private
	   * @param {Array} [array] The array to iterate over.
	   * @param {Function} setter The function to set `accumulator` values.
	   * @param {Function} iteratee The iteratee to transform keys.
	   * @param {Object} accumulator The initial aggregated object.
	   * @returns {Function} Returns `accumulator`.
	   */
	  function arrayAggregator(array, setter, iteratee, accumulator) {
	    var index = -1,
	        length = array == null ? 0 : array.length;
	
	    while (++index < length) {
	      var value = array[index];
	      setter(accumulator, value, iteratee(value), array);
	    }
	    return accumulator;
	  }
	
	  /**
	   * A specialized version of `_.forEach` for arrays without support for
	   * iteratee shorthands.
	   *
	   * @private
	   * @param {Array} [array] The array to iterate over.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @returns {Array} Returns `array`.
	   */
	  function arrayEach(array, iteratee) {
	    var index = -1,
	        length = array == null ? 0 : array.length;
	
	    while (++index < length) {
	      if (iteratee(array[index], index, array) === false) {
	        break;
	      }
	    }
	    return array;
	  }
	
	  /**
	   * A specialized version of `_.forEachRight` for arrays without support for
	   * iteratee shorthands.
	   *
	   * @private
	   * @param {Array} [array] The array to iterate over.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @returns {Array} Returns `array`.
	   */
	  function arrayEachRight(array, iteratee) {
	    var length = array == null ? 0 : array.length;
	
	    while (length--) {
	      if (iteratee(array[length], length, array) === false) {
	        break;
	      }
	    }
	    return array;
	  }
	
	  /**
	   * A specialized version of `_.every` for arrays without support for
	   * iteratee shorthands.
	   *
	   * @private
	   * @param {Array} [array] The array to iterate over.
	   * @param {Function} predicate The function invoked per iteration.
	   * @returns {boolean} Returns `true` if all elements pass the predicate check,
	   *  else `false`.
	   */
	  function arrayEvery(array, predicate) {
	    var index = -1,
	        length = array == null ? 0 : array.length;
	
	    while (++index < length) {
	      if (!predicate(array[index], index, array)) {
	        return false;
	      }
	    }
	    return true;
	  }
	
	  /**
	   * A specialized version of `_.filter` for arrays without support for
	   * iteratee shorthands.
	   *
	   * @private
	   * @param {Array} [array] The array to iterate over.
	   * @param {Function} predicate The function invoked per iteration.
	   * @returns {Array} Returns the new filtered array.
	   */
	  function arrayFilter(array, predicate) {
	    var index = -1,
	        length = array == null ? 0 : array.length,
	        resIndex = 0,
	        result = [];
	
	    while (++index < length) {
	      var value = array[index];
	      if (predicate(value, index, array)) {
	        result[resIndex++] = value;
	      }
	    }
	    return result;
	  }
	
	  /**
	   * A specialized version of `_.includes` for arrays without support for
	   * specifying an index to search from.
	   *
	   * @private
	   * @param {Array} [array] The array to inspect.
	   * @param {*} target The value to search for.
	   * @returns {boolean} Returns `true` if `target` is found, else `false`.
	   */
	  function arrayIncludes(array, value) {
	    var length = array == null ? 0 : array.length;
	    return !!length && baseIndexOf(array, value, 0) > -1;
	  }
	
	  /**
	   * This function is like `arrayIncludes` except that it accepts a comparator.
	   *
	   * @private
	   * @param {Array} [array] The array to inspect.
	   * @param {*} target The value to search for.
	   * @param {Function} comparator The comparator invoked per element.
	   * @returns {boolean} Returns `true` if `target` is found, else `false`.
	   */
	  function arrayIncludesWith(array, value, comparator) {
	    var index = -1,
	        length = array == null ? 0 : array.length;
	
	    while (++index < length) {
	      if (comparator(value, array[index])) {
	        return true;
	      }
	    }
	    return false;
	  }
	
	  /**
	   * A specialized version of `_.map` for arrays without support for iteratee
	   * shorthands.
	   *
	   * @private
	   * @param {Array} [array] The array to iterate over.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @returns {Array} Returns the new mapped array.
	   */
	  function arrayMap(array, iteratee) {
	    var index = -1,
	        length = array == null ? 0 : array.length,
	        result = Array(length);
	
	    while (++index < length) {
	      result[index] = iteratee(array[index], index, array);
	    }
	    return result;
	  }
	
	  /**
	   * Appends the elements of `values` to `array`.
	   *
	   * @private
	   * @param {Array} array The array to modify.
	   * @param {Array} values The values to append.
	   * @returns {Array} Returns `array`.
	   */
	  function arrayPush(array, values) {
	    var index = -1,
	        length = values.length,
	        offset = array.length;
	
	    while (++index < length) {
	      array[offset + index] = values[index];
	    }
	    return array;
	  }
	
	  /**
	   * A specialized version of `_.reduce` for arrays without support for
	   * iteratee shorthands.
	   *
	   * @private
	   * @param {Array} [array] The array to iterate over.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @param {*} [accumulator] The initial value.
	   * @param {boolean} [initAccum] Specify using the first element of `array` as
	   *  the initial value.
	   * @returns {*} Returns the accumulated value.
	   */
	  function arrayReduce(array, iteratee, accumulator, initAccum) {
	    var index = -1,
	        length = array == null ? 0 : array.length;
	
	    if (initAccum && length) {
	      accumulator = array[++index];
	    }
	    while (++index < length) {
	      accumulator = iteratee(accumulator, array[index], index, array);
	    }
	    return accumulator;
	  }
	
	  /**
	   * A specialized version of `_.reduceRight` for arrays without support for
	   * iteratee shorthands.
	   *
	   * @private
	   * @param {Array} [array] The array to iterate over.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @param {*} [accumulator] The initial value.
	   * @param {boolean} [initAccum] Specify using the last element of `array` as
	   *  the initial value.
	   * @returns {*} Returns the accumulated value.
	   */
	  function arrayReduceRight(array, iteratee, accumulator, initAccum) {
	    var length = array == null ? 0 : array.length;
	    if (initAccum && length) {
	      accumulator = array[--length];
	    }
	    while (length--) {
	      accumulator = iteratee(accumulator, array[length], length, array);
	    }
	    return accumulator;
	  }
	
	  /**
	   * A specialized version of `_.some` for arrays without support for iteratee
	   * shorthands.
	   *
	   * @private
	   * @param {Array} [array] The array to iterate over.
	   * @param {Function} predicate The function invoked per iteration.
	   * @returns {boolean} Returns `true` if any element passes the predicate check,
	   *  else `false`.
	   */
	  function arraySome(array, predicate) {
	    var index = -1,
	        length = array == null ? 0 : array.length;
	
	    while (++index < length) {
	      if (predicate(array[index], index, array)) {
	        return true;
	      }
	    }
	    return false;
	  }
	
	  /**
	   * Gets the size of an ASCII `string`.
	   *
	   * @private
	   * @param {string} string The string inspect.
	   * @returns {number} Returns the string size.
	   */
	  var asciiSize = baseProperty('length');
	
	  /**
	   * Converts an ASCII `string` to an array.
	   *
	   * @private
	   * @param {string} string The string to convert.
	   * @returns {Array} Returns the converted array.
	   */
	  function asciiToArray(string) {
	    return string.split('');
	  }
	
	  /**
	   * Splits an ASCII `string` into an array of its words.
	   *
	   * @private
	   * @param {string} The string to inspect.
	   * @returns {Array} Returns the words of `string`.
	   */
	  function asciiWords(string) {
	    return string.match(reAsciiWord) || [];
	  }
	
	  /**
	   * The base implementation of methods like `_.findKey` and `_.findLastKey`,
	   * without support for iteratee shorthands, which iterates over `collection`
	   * using `eachFunc`.
	   *
	   * @private
	   * @param {Array|Object} collection The collection to inspect.
	   * @param {Function} predicate The function invoked per iteration.
	   * @param {Function} eachFunc The function to iterate over `collection`.
	   * @returns {*} Returns the found element or its key, else `undefined`.
	   */
	  function baseFindKey(collection, predicate, eachFunc) {
	    var result;
	    eachFunc(collection, function(value, key, collection) {
	      if (predicate(value, key, collection)) {
	        result = key;
	        return false;
	      }
	    });
	    return result;
	  }
	
	  /**
	   * The base implementation of `_.findIndex` and `_.findLastIndex` without
	   * support for iteratee shorthands.
	   *
	   * @private
	   * @param {Array} array The array to inspect.
	   * @param {Function} predicate The function invoked per iteration.
	   * @param {number} fromIndex The index to search from.
	   * @param {boolean} [fromRight] Specify iterating from right to left.
	   * @returns {number} Returns the index of the matched value, else `-1`.
	   */
	  function baseFindIndex(array, predicate, fromIndex, fromRight) {
	    var length = array.length,
	        index = fromIndex + (fromRight ? 1 : -1);
	
	    while ((fromRight ? index-- : ++index < length)) {
	      if (predicate(array[index], index, array)) {
	        return index;
	      }
	    }
	    return -1;
	  }
	
	  /**
	   * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
	   *
	   * @private
	   * @param {Array} array The array to inspect.
	   * @param {*} value The value to search for.
	   * @param {number} fromIndex The index to search from.
	   * @returns {number} Returns the index of the matched value, else `-1`.
	   */
	  function baseIndexOf(array, value, fromIndex) {
	    return value === value
	      ? strictIndexOf(array, value, fromIndex)
	      : baseFindIndex(array, baseIsNaN, fromIndex);
	  }
	
	  /**
	   * This function is like `baseIndexOf` except that it accepts a comparator.
	   *
	   * @private
	   * @param {Array} array The array to inspect.
	   * @param {*} value The value to search for.
	   * @param {number} fromIndex The index to search from.
	   * @param {Function} comparator The comparator invoked per element.
	   * @returns {number} Returns the index of the matched value, else `-1`.
	   */
	  function baseIndexOfWith(array, value, fromIndex, comparator) {
	    var index = fromIndex - 1,
	        length = array.length;
	
	    while (++index < length) {
	      if (comparator(array[index], value)) {
	        return index;
	      }
	    }
	    return -1;
	  }
	
	  /**
	   * The base implementation of `_.isNaN` without support for number objects.
	   *
	   * @private
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
	   */
	  function baseIsNaN(value) {
	    return value !== value;
	  }
	
	  /**
	   * The base implementation of `_.mean` and `_.meanBy` without support for
	   * iteratee shorthands.
	   *
	   * @private
	   * @param {Array} array The array to iterate over.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @returns {number} Returns the mean.
	   */
	  function baseMean(array, iteratee) {
	    var length = array == null ? 0 : array.length;
	    return length ? (baseSum(array, iteratee) / length) : NAN;
	  }
	
	  /**
	   * The base implementation of `_.property` without support for deep paths.
	   *
	   * @private
	   * @param {string} key The key of the property to get.
	   * @returns {Function} Returns the new accessor function.
	   */
	  function baseProperty(key) {
	    return function(object) {
	      return object == null ? undefined : object[key];
	    };
	  }
	
	  /**
	   * The base implementation of `_.propertyOf` without support for deep paths.
	   *
	   * @private
	   * @param {Object} object The object to query.
	   * @returns {Function} Returns the new accessor function.
	   */
	  function basePropertyOf(object) {
	    return function(key) {
	      return object == null ? undefined : object[key];
	    };
	  }
	
	  /**
	   * The base implementation of `_.reduce` and `_.reduceRight`, without support
	   * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
	   *
	   * @private
	   * @param {Array|Object} collection The collection to iterate over.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @param {*} accumulator The initial value.
	   * @param {boolean} initAccum Specify using the first or last element of
	   *  `collection` as the initial value.
	   * @param {Function} eachFunc The function to iterate over `collection`.
	   * @returns {*} Returns the accumulated value.
	   */
	  function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
	    eachFunc(collection, function(value, index, collection) {
	      accumulator = initAccum
	        ? (initAccum = false, value)
	        : iteratee(accumulator, value, index, collection);
	    });
	    return accumulator;
	  }
	
	  /**
	   * The base implementation of `_.sortBy` which uses `comparer` to define the
	   * sort order of `array` and replaces criteria objects with their corresponding
	   * values.
	   *
	   * @private
	   * @param {Array} array The array to sort.
	   * @param {Function} comparer The function to define sort order.
	   * @returns {Array} Returns `array`.
	   */
	  function baseSortBy(array, comparer) {
	    var length = array.length;
	
	    array.sort(comparer);
	    while (length--) {
	      array[length] = array[length].value;
	    }
	    return array;
	  }
	
	  /**
	   * The base implementation of `_.sum` and `_.sumBy` without support for
	   * iteratee shorthands.
	   *
	   * @private
	   * @param {Array} array The array to iterate over.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @returns {number} Returns the sum.
	   */
	  function baseSum(array, iteratee) {
	    var result,
	        index = -1,
	        length = array.length;
	
	    while (++index < length) {
	      var current = iteratee(array[index]);
	      if (current !== undefined) {
	        result = result === undefined ? current : (result + current);
	      }
	    }
	    return result;
	  }
	
	  /**
	   * The base implementation of `_.times` without support for iteratee shorthands
	   * or max array length checks.
	   *
	   * @private
	   * @param {number} n The number of times to invoke `iteratee`.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @returns {Array} Returns the array of results.
	   */
	  function baseTimes(n, iteratee) {
	    var index = -1,
	        result = Array(n);
	
	    while (++index < n) {
	      result[index] = iteratee(index);
	    }
	    return result;
	  }
	
	  /**
	   * The base implementation of `_.toPairs` and `_.toPairsIn` which creates an array
	   * of key-value pairs for `object` corresponding to the property names of `props`.
	   *
	   * @private
	   * @param {Object} object The object to query.
	   * @param {Array} props The property names to get values for.
	   * @returns {Object} Returns the key-value pairs.
	   */
	  function baseToPairs(object, props) {
	    return arrayMap(props, function(key) {
	      return [key, object[key]];
	    });
	  }
	
	  /**
	   * The base implementation of `_.unary` without support for storing metadata.
	   *
	   * @private
	   * @param {Function} func The function to cap arguments for.
	   * @returns {Function} Returns the new capped function.
	   */
	  function baseUnary(func) {
	    return function(value) {
	      return func(value);
	    };
	  }
	
	  /**
	   * The base implementation of `_.values` and `_.valuesIn` which creates an
	   * array of `object` property values corresponding to the property names
	   * of `props`.
	   *
	   * @private
	   * @param {Object} object The object to query.
	   * @param {Array} props The property names to get values for.
	   * @returns {Object} Returns the array of property values.
	   */
	  function baseValues(object, props) {
	    return arrayMap(props, function(key) {
	      return object[key];
	    });
	  }
	
	  /**
	   * Checks if a `cache` value for `key` exists.
	   *
	   * @private
	   * @param {Object} cache The cache to query.
	   * @param {string} key The key of the entry to check.
	   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	   */
	  function cacheHas(cache, key) {
	    return cache.has(key);
	  }
	
	  /**
	   * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
	   * that is not found in the character symbols.
	   *
	   * @private
	   * @param {Array} strSymbols The string symbols to inspect.
	   * @param {Array} chrSymbols The character symbols to find.
	   * @returns {number} Returns the index of the first unmatched string symbol.
	   */
	  function charsStartIndex(strSymbols, chrSymbols) {
	    var index = -1,
	        length = strSymbols.length;
	
	    while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
	    return index;
	  }
	
	  /**
	   * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
	   * that is not found in the character symbols.
	   *
	   * @private
	   * @param {Array} strSymbols The string symbols to inspect.
	   * @param {Array} chrSymbols The character symbols to find.
	   * @returns {number} Returns the index of the last unmatched string symbol.
	   */
	  function charsEndIndex(strSymbols, chrSymbols) {
	    var index = strSymbols.length;
	
	    while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
	    return index;
	  }
	
	  /**
	   * Gets the number of `placeholder` occurrences in `array`.
	   *
	   * @private
	   * @param {Array} array The array to inspect.
	   * @param {*} placeholder The placeholder to search for.
	   * @returns {number} Returns the placeholder count.
	   */
	  function countHolders(array, placeholder) {
	    var length = array.length,
	        result = 0;
	
	    while (length--) {
	      if (array[length] === placeholder) {
	        ++result;
	      }
	    }
	    return result;
	  }
	
	  /**
	   * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
	   * letters to basic Latin letters.
	   *
	   * @private
	   * @param {string} letter The matched letter to deburr.
	   * @returns {string} Returns the deburred letter.
	   */
	  var deburrLetter = basePropertyOf(deburredLetters);
	
	  /**
	   * Used by `_.escape` to convert characters to HTML entities.
	   *
	   * @private
	   * @param {string} chr The matched character to escape.
	   * @returns {string} Returns the escaped character.
	   */
	  var escapeHtmlChar = basePropertyOf(htmlEscapes);
	
	  /**
	   * Used by `_.template` to escape characters for inclusion in compiled string literals.
	   *
	   * @private
	   * @param {string} chr The matched character to escape.
	   * @returns {string} Returns the escaped character.
	   */
	  function escapeStringChar(chr) {
	    return '\\' + stringEscapes[chr];
	  }
	
	  /**
	   * Gets the value at `key` of `object`.
	   *
	   * @private
	   * @param {Object} [object] The object to query.
	   * @param {string} key The key of the property to get.
	   * @returns {*} Returns the property value.
	   */
	  function getValue(object, key) {
	    return object == null ? undefined : object[key];
	  }
	
	  /**
	   * Checks if `string` contains Unicode symbols.
	   *
	   * @private
	   * @param {string} string The string to inspect.
	   * @returns {boolean} Returns `true` if a symbol is found, else `false`.
	   */
	  function hasUnicode(string) {
	    return reHasUnicode.test(string);
	  }
	
	  /**
	   * Checks if `string` contains a word composed of Unicode symbols.
	   *
	   * @private
	   * @param {string} string The string to inspect.
	   * @returns {boolean} Returns `true` if a word is found, else `false`.
	   */
	  function hasUnicodeWord(string) {
	    return reHasUnicodeWord.test(string);
	  }
	
	  /**
	   * Converts `iterator` to an array.
	   *
	   * @private
	   * @param {Object} iterator The iterator to convert.
	   * @returns {Array} Returns the converted array.
	   */
	  function iteratorToArray(iterator) {
	    var data,
	        result = [];
	
	    while (!(data = iterator.next()).done) {
	      result.push(data.value);
	    }
	    return result;
	  }
	
	  /**
	   * Converts `map` to its key-value pairs.
	   *
	   * @private
	   * @param {Object} map The map to convert.
	   * @returns {Array} Returns the key-value pairs.
	   */
	  function mapToArray(map) {
	    var index = -1,
	        result = Array(map.size);
	
	    map.forEach(function(value, key) {
	      result[++index] = [key, value];
	    });
	    return result;
	  }
	
	  /**
	   * Creates a unary function that invokes `func` with its argument transformed.
	   *
	   * @private
	   * @param {Function} func The function to wrap.
	   * @param {Function} transform The argument transform.
	   * @returns {Function} Returns the new function.
	   */
	  function overArg(func, transform) {
	    return function(arg) {
	      return func(transform(arg));
	    };
	  }
	
	  /**
	   * Replaces all `placeholder` elements in `array` with an internal placeholder
	   * and returns an array of their indexes.
	   *
	   * @private
	   * @param {Array} array The array to modify.
	   * @param {*} placeholder The placeholder to replace.
	   * @returns {Array} Returns the new array of placeholder indexes.
	   */
	  function replaceHolders(array, placeholder) {
	    var index = -1,
	        length = array.length,
	        resIndex = 0,
	        result = [];
	
	    while (++index < length) {
	      var value = array[index];
	      if (value === placeholder || value === PLACEHOLDER) {
	        array[index] = PLACEHOLDER;
	        result[resIndex++] = index;
	      }
	    }
	    return result;
	  }
	
	  /**
	   * Converts `set` to an array of its values.
	   *
	   * @private
	   * @param {Object} set The set to convert.
	   * @returns {Array} Returns the values.
	   */
	  function setToArray(set) {
	    var index = -1,
	        result = Array(set.size);
	
	    set.forEach(function(value) {
	      result[++index] = value;
	    });
	    return result;
	  }
	
	  /**
	   * Converts `set` to its value-value pairs.
	   *
	   * @private
	   * @param {Object} set The set to convert.
	   * @returns {Array} Returns the value-value pairs.
	   */
	  function setToPairs(set) {
	    var index = -1,
	        result = Array(set.size);
	
	    set.forEach(function(value) {
	      result[++index] = [value, value];
	    });
	    return result;
	  }
	
	  /**
	   * A specialized version of `_.indexOf` which performs strict equality
	   * comparisons of values, i.e. `===`.
	   *
	   * @private
	   * @param {Array} array The array to inspect.
	   * @param {*} value The value to search for.
	   * @param {number} fromIndex The index to search from.
	   * @returns {number} Returns the index of the matched value, else `-1`.
	   */
	  function strictIndexOf(array, value, fromIndex) {
	    var index = fromIndex - 1,
	        length = array.length;
	
	    while (++index < length) {
	      if (array[index] === value) {
	        return index;
	      }
	    }
	    return -1;
	  }
	
	  /**
	   * A specialized version of `_.lastIndexOf` which performs strict equality
	   * comparisons of values, i.e. `===`.
	   *
	   * @private
	   * @param {Array} array The array to inspect.
	   * @param {*} value The value to search for.
	   * @param {number} fromIndex The index to search from.
	   * @returns {number} Returns the index of the matched value, else `-1`.
	   */
	  function strictLastIndexOf(array, value, fromIndex) {
	    var index = fromIndex + 1;
	    while (index--) {
	      if (array[index] === value) {
	        return index;
	      }
	    }
	    return index;
	  }
	
	  /**
	   * Gets the number of symbols in `string`.
	   *
	   * @private
	   * @param {string} string The string to inspect.
	   * @returns {number} Returns the string size.
	   */
	  function stringSize(string) {
	    return hasUnicode(string)
	      ? unicodeSize(string)
	      : asciiSize(string);
	  }
	
	  /**
	   * Converts `string` to an array.
	   *
	   * @private
	   * @param {string} string The string to convert.
	   * @returns {Array} Returns the converted array.
	   */
	  function stringToArray(string) {
	    return hasUnicode(string)
	      ? unicodeToArray(string)
	      : asciiToArray(string);
	  }
	
	  /**
	   * Used by `_.unescape` to convert HTML entities to characters.
	   *
	   * @private
	   * @param {string} chr The matched character to unescape.
	   * @returns {string} Returns the unescaped character.
	   */
	  var unescapeHtmlChar = basePropertyOf(htmlUnescapes);
	
	  /**
	   * Gets the size of a Unicode `string`.
	   *
	   * @private
	   * @param {string} string The string inspect.
	   * @returns {number} Returns the string size.
	   */
	  function unicodeSize(string) {
	    var result = reUnicode.lastIndex = 0;
	    while (reUnicode.test(string)) {
	      ++result;
	    }
	    return result;
	  }
	
	  /**
	   * Converts a Unicode `string` to an array.
	   *
	   * @private
	   * @param {string} string The string to convert.
	   * @returns {Array} Returns the converted array.
	   */
	  function unicodeToArray(string) {
	    return string.match(reUnicode) || [];
	  }
	
	  /**
	   * Splits a Unicode `string` into an array of its words.
	   *
	   * @private
	   * @param {string} The string to inspect.
	   * @returns {Array} Returns the words of `string`.
	   */
	  function unicodeWords(string) {
	    return string.match(reUnicodeWord) || [];
	  }
	
	  /*--------------------------------------------------------------------------*/
	
	  /**
	   * Create a new pristine `lodash` function using the `context` object.
	   *
	   * @static
	   * @memberOf _
	   * @since 1.1.0
	   * @category Util
	   * @param {Object} [context=root] The context object.
	   * @returns {Function} Returns a new `lodash` function.
	   * @example
	   *
	   * _.mixin({ 'foo': _.constant('foo') });
	   *
	   * var lodash = _.runInContext();
	   * lodash.mixin({ 'bar': lodash.constant('bar') });
	   *
	   * _.isFunction(_.foo);
	   * // => true
	   * _.isFunction(_.bar);
	   * // => false
	   *
	   * lodash.isFunction(lodash.foo);
	   * // => false
	   * lodash.isFunction(lodash.bar);
	   * // => true
	   *
	   * // Create a suped-up `defer` in Node.js.
	   * var defer = _.runInContext({ 'setTimeout': setImmediate }).defer;
	   */
	  var runInContext = (function runInContext(context) {
	    context = context == null ? root : _.defaults(root.Object(), context, _.pick(root, contextProps));
	
	    /** Built-in constructor references. */
	    var Array = context.Array,
	        Date = context.Date,
	        Error = context.Error,
	        Function = context.Function,
	        Math = context.Math,
	        Object = context.Object,
	        RegExp = context.RegExp,
	        String = context.String,
	        TypeError = context.TypeError;
	
	    /** Used for built-in method references. */
	    var arrayProto = Array.prototype,
	        funcProto = Function.prototype,
	        objectProto = Object.prototype;
	
	    /** Used to detect overreaching core-js shims. */
	    var coreJsData = context['__core-js_shared__'];
	
	    /** Used to resolve the decompiled source of functions. */
	    var funcToString = funcProto.toString;
	
	    /** Used to check objects for own properties. */
	    var hasOwnProperty = objectProto.hasOwnProperty;
	
	    /** Used to generate unique IDs. */
	    var idCounter = 0;
	
	    /** Used to detect methods masquerading as native. */
	    var maskSrcKey = (function() {
	      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	      return uid ? ('Symbol(src)_1.' + uid) : '';
	    }());
	
	    /**
	     * Used to resolve the
	     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	     * of values.
	     */
	    var nativeObjectToString = objectProto.toString;
	
	    /** Used to infer the `Object` constructor. */
	    var objectCtorString = funcToString.call(Object);
	
	    /** Used to restore the original `_` reference in `_.noConflict`. */
	    var oldDash = root._;
	
	    /** Used to detect if a method is native. */
	    var reIsNative = RegExp('^' +
	      funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	      .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	    );
	
	    /** Built-in value references. */
	    var Buffer = moduleExports ? context.Buffer : undefined,
	        Symbol = context.Symbol,
	        Uint8Array = context.Uint8Array,
	        allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined,
	        getPrototype = overArg(Object.getPrototypeOf, Object),
	        objectCreate = Object.create,
	        propertyIsEnumerable = objectProto.propertyIsEnumerable,
	        splice = arrayProto.splice,
	        spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined,
	        symIterator = Symbol ? Symbol.iterator : undefined,
	        symToStringTag = Symbol ? Symbol.toStringTag : undefined;
	
	    var defineProperty = (function() {
	      try {
	        var func = getNative(Object, 'defineProperty');
	        func({}, '', {});
	        return func;
	      } catch (e) {}
	    }());
	
	    /** Mocked built-ins. */
	    var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout,
	        ctxNow = Date && Date.now !== root.Date.now && Date.now,
	        ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;
	
	    /* Built-in method references for those with the same name as other `lodash` methods. */
	    var nativeCeil = Math.ceil,
	        nativeFloor = Math.floor,
	        nativeGetSymbols = Object.getOwnPropertySymbols,
	        nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
	        nativeIsFinite = context.isFinite,
	        nativeJoin = arrayProto.join,
	        nativeKeys = overArg(Object.keys, Object),
	        nativeMax = Math.max,
	        nativeMin = Math.min,
	        nativeNow = Date.now,
	        nativeParseInt = context.parseInt,
	        nativeRandom = Math.random,
	        nativeReverse = arrayProto.reverse;
	
	    /* Built-in method references that are verified to be native. */
	    var DataView = getNative(context, 'DataView'),
	        Map = getNative(context, 'Map'),
	        Promise = getNative(context, 'Promise'),
	        Set = getNative(context, 'Set'),
	        WeakMap = getNative(context, 'WeakMap'),
	        nativeCreate = getNative(Object, 'create');
	
	    /** Used to store function metadata. */
	    var metaMap = WeakMap && new WeakMap;
	
	    /** Used to lookup unminified function names. */
	    var realNames = {};
	
	    /** Used to detect maps, sets, and weakmaps. */
	    var dataViewCtorString = toSource(DataView),
	        mapCtorString = toSource(Map),
	        promiseCtorString = toSource(Promise),
	        setCtorString = toSource(Set),
	        weakMapCtorString = toSource(WeakMap);
	
	    /** Used to convert symbols to primitives and strings. */
	    var symbolProto = Symbol ? Symbol.prototype : undefined,
	        symbolValueOf = symbolProto ? symbolProto.valueOf : undefined,
	        symbolToString = symbolProto ? symbolProto.toString : undefined;
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * Creates a `lodash` object which wraps `value` to enable implicit method
	     * chain sequences. Methods that operate on and return arrays, collections,
	     * and functions can be chained together. Methods that retrieve a single value
	     * or may return a primitive value will automatically end the chain sequence
	     * and return the unwrapped value. Otherwise, the value must be unwrapped
	     * with `_#value`.
	     *
	     * Explicit chain sequences, which must be unwrapped with `_#value`, may be
	     * enabled using `_.chain`.
	     *
	     * The execution of chained methods is lazy, that is, it's deferred until
	     * `_#value` is implicitly or explicitly called.
	     *
	     * Lazy evaluation allows several methods to support shortcut fusion.
	     * Shortcut fusion is an optimization to merge iteratee calls; this avoids
	     * the creation of intermediate arrays and can greatly reduce the number of
	     * iteratee executions. Sections of a chain sequence qualify for shortcut
	     * fusion if the section is applied to an array and iteratees accept only
	     * one argument. The heuristic for whether a section qualifies for shortcut
	     * fusion is subject to change.
	     *
	     * Chaining is supported in custom builds as long as the `_#value` method is
	     * directly or indirectly included in the build.
	     *
	     * In addition to lodash methods, wrappers have `Array` and `String` methods.
	     *
	     * The wrapper `Array` methods are:
	     * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
	     *
	     * The wrapper `String` methods are:
	     * `replace` and `split`
	     *
	     * The wrapper methods that support shortcut fusion are:
	     * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
	     * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
	     * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
	     *
	     * The chainable wrapper methods are:
	     * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
	     * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
	     * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
	     * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
	     * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
	     * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
	     * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
	     * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
	     * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
	     * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
	     * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
	     * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
	     * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
	     * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
	     * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
	     * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
	     * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
	     * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
	     * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
	     * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
	     * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
	     * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
	     * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
	     * `zipObject`, `zipObjectDeep`, and `zipWith`
	     *
	     * The wrapper methods that are **not** chainable by default are:
	     * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
	     * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
	     * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
	     * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
	     * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
	     * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
	     * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
	     * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
	     * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
	     * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
	     * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
	     * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
	     * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
	     * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
	     * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
	     * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
	     * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
	     * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
	     * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
	     * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
	     * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
	     * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
	     * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
	     * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
	     * `upperFirst`, `value`, and `words`
	     *
	     * @name _
	     * @constructor
	     * @category Seq
	     * @param {*} value The value to wrap in a `lodash` instance.
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * function square(n) {
	     *   return n * n;
	     * }
	     *
	     * var wrapped = _([1, 2, 3]);
	     *
	     * // Returns an unwrapped value.
	     * wrapped.reduce(_.add);
	     * // => 6
	     *
	     * // Returns a wrapped value.
	     * var squares = wrapped.map(square);
	     *
	     * _.isArray(squares);
	     * // => false
	     *
	     * _.isArray(squares.value());
	     * // => true
	     */
	    function lodash(value) {
	      if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
	        if (value instanceof LodashWrapper) {
	          return value;
	        }
	        if (hasOwnProperty.call(value, '__wrapped__')) {
	          return wrapperClone(value);
	        }
	      }
	      return new LodashWrapper(value);
	    }
	
	    /**
	     * The base implementation of `_.create` without support for assigning
	     * properties to the created object.
	     *
	     * @private
	     * @param {Object} proto The object to inherit from.
	     * @returns {Object} Returns the new object.
	     */
	    var baseCreate = (function() {
	      function object() {}
	      return function(proto) {
	        if (!isObject(proto)) {
	          return {};
	        }
	        if (objectCreate) {
	          return objectCreate(proto);
	        }
	        object.prototype = proto;
	        var result = new object;
	        object.prototype = undefined;
	        return result;
	      };
	    }());
	
	    /**
	     * The function whose prototype chain sequence wrappers inherit from.
	     *
	     * @private
	     */
	    function baseLodash() {
	      // No operation performed.
	    }
	
	    /**
	     * The base constructor for creating `lodash` wrapper objects.
	     *
	     * @private
	     * @param {*} value The value to wrap.
	     * @param {boolean} [chainAll] Enable explicit method chain sequences.
	     */
	    function LodashWrapper(value, chainAll) {
	      this.__wrapped__ = value;
	      this.__actions__ = [];
	      this.__chain__ = !!chainAll;
	      this.__index__ = 0;
	      this.__values__ = undefined;
	    }
	
	    /**
	     * By default, the template delimiters used by lodash are like those in
	     * embedded Ruby (ERB) as well as ES2015 template strings. Change the
	     * following template settings to use alternative delimiters.
	     *
	     * @static
	     * @memberOf _
	     * @type {Object}
	     */
	    lodash.templateSettings = {
	
	      /**
	       * Used to detect `data` property values to be HTML-escaped.
	       *
	       * @memberOf _.templateSettings
	       * @type {RegExp}
	       */
	      'escape': reEscape,
	
	      /**
	       * Used to detect code to be evaluated.
	       *
	       * @memberOf _.templateSettings
	       * @type {RegExp}
	       */
	      'evaluate': reEvaluate,
	
	      /**
	       * Used to detect `data` property values to inject.
	       *
	       * @memberOf _.templateSettings
	       * @type {RegExp}
	       */
	      'interpolate': reInterpolate,
	
	      /**
	       * Used to reference the data object in the template text.
	       *
	       * @memberOf _.templateSettings
	       * @type {string}
	       */
	      'variable': '',
	
	      /**
	       * Used to import variables into the compiled template.
	       *
	       * @memberOf _.templateSettings
	       * @type {Object}
	       */
	      'imports': {
	
	        /**
	         * A reference to the `lodash` function.
	         *
	         * @memberOf _.templateSettings.imports
	         * @type {Function}
	         */
	        '_': lodash
	      }
	    };
	
	    // Ensure wrappers are instances of `baseLodash`.
	    lodash.prototype = baseLodash.prototype;
	    lodash.prototype.constructor = lodash;
	
	    LodashWrapper.prototype = baseCreate(baseLodash.prototype);
	    LodashWrapper.prototype.constructor = LodashWrapper;
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
	     *
	     * @private
	     * @constructor
	     * @param {*} value The value to wrap.
	     */
	    function LazyWrapper(value) {
	      this.__wrapped__ = value;
	      this.__actions__ = [];
	      this.__dir__ = 1;
	      this.__filtered__ = false;
	      this.__iteratees__ = [];
	      this.__takeCount__ = MAX_ARRAY_LENGTH;
	      this.__views__ = [];
	    }
	
	    /**
	     * Creates a clone of the lazy wrapper object.
	     *
	     * @private
	     * @name clone
	     * @memberOf LazyWrapper
	     * @returns {Object} Returns the cloned `LazyWrapper` object.
	     */
	    function lazyClone() {
	      var result = new LazyWrapper(this.__wrapped__);
	      result.__actions__ = copyArray(this.__actions__);
	      result.__dir__ = this.__dir__;
	      result.__filtered__ = this.__filtered__;
	      result.__iteratees__ = copyArray(this.__iteratees__);
	      result.__takeCount__ = this.__takeCount__;
	      result.__views__ = copyArray(this.__views__);
	      return result;
	    }
	
	    /**
	     * Reverses the direction of lazy iteration.
	     *
	     * @private
	     * @name reverse
	     * @memberOf LazyWrapper
	     * @returns {Object} Returns the new reversed `LazyWrapper` object.
	     */
	    function lazyReverse() {
	      if (this.__filtered__) {
	        var result = new LazyWrapper(this);
	        result.__dir__ = -1;
	        result.__filtered__ = true;
	      } else {
	        result = this.clone();
	        result.__dir__ *= -1;
	      }
	      return result;
	    }
	
	    /**
	     * Extracts the unwrapped value from its lazy wrapper.
	     *
	     * @private
	     * @name value
	     * @memberOf LazyWrapper
	     * @returns {*} Returns the unwrapped value.
	     */
	    function lazyValue() {
	      var array = this.__wrapped__.value(),
	          dir = this.__dir__,
	          isArr = isArray(array),
	          isRight = dir < 0,
	          arrLength = isArr ? array.length : 0,
	          view = getView(0, arrLength, this.__views__),
	          start = view.start,
	          end = view.end,
	          length = end - start,
	          index = isRight ? end : (start - 1),
	          iteratees = this.__iteratees__,
	          iterLength = iteratees.length,
	          resIndex = 0,
	          takeCount = nativeMin(length, this.__takeCount__);
	
	      if (!isArr || (!isRight && arrLength == length && takeCount == length)) {
	        return baseWrapperValue(array, this.__actions__);
	      }
	      var result = [];
	
	      outer:
	      while (length-- && resIndex < takeCount) {
	        index += dir;
	
	        var iterIndex = -1,
	            value = array[index];
	
	        while (++iterIndex < iterLength) {
	          var data = iteratees[iterIndex],
	              iteratee = data.iteratee,
	              type = data.type,
	              computed = iteratee(value);
	
	          if (type == LAZY_MAP_FLAG) {
	            value = computed;
	          } else if (!computed) {
	            if (type == LAZY_FILTER_FLAG) {
	              continue outer;
	            } else {
	              break outer;
	            }
	          }
	        }
	        result[resIndex++] = value;
	      }
	      return result;
	    }
	
	    // Ensure `LazyWrapper` is an instance of `baseLodash`.
	    LazyWrapper.prototype = baseCreate(baseLodash.prototype);
	    LazyWrapper.prototype.constructor = LazyWrapper;
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * Creates a hash object.
	     *
	     * @private
	     * @constructor
	     * @param {Array} [entries] The key-value pairs to cache.
	     */
	    function Hash(entries) {
	      var index = -1,
	          length = entries == null ? 0 : entries.length;
	
	      this.clear();
	      while (++index < length) {
	        var entry = entries[index];
	        this.set(entry[0], entry[1]);
	      }
	    }
	
	    /**
	     * Removes all key-value entries from the hash.
	     *
	     * @private
	     * @name clear
	     * @memberOf Hash
	     */
	    function hashClear() {
	      this.__data__ = nativeCreate ? nativeCreate(null) : {};
	      this.size = 0;
	    }
	
	    /**
	     * Removes `key` and its value from the hash.
	     *
	     * @private
	     * @name delete
	     * @memberOf Hash
	     * @param {Object} hash The hash to modify.
	     * @param {string} key The key of the value to remove.
	     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	     */
	    function hashDelete(key) {
	      var result = this.has(key) && delete this.__data__[key];
	      this.size -= result ? 1 : 0;
	      return result;
	    }
	
	    /**
	     * Gets the hash value for `key`.
	     *
	     * @private
	     * @name get
	     * @memberOf Hash
	     * @param {string} key The key of the value to get.
	     * @returns {*} Returns the entry value.
	     */
	    function hashGet(key) {
	      var data = this.__data__;
	      if (nativeCreate) {
	        var result = data[key];
	        return result === HASH_UNDEFINED ? undefined : result;
	      }
	      return hasOwnProperty.call(data, key) ? data[key] : undefined;
	    }
	
	    /**
	     * Checks if a hash value for `key` exists.
	     *
	     * @private
	     * @name has
	     * @memberOf Hash
	     * @param {string} key The key of the entry to check.
	     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	     */
	    function hashHas(key) {
	      var data = this.__data__;
	      return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
	    }
	
	    /**
	     * Sets the hash `key` to `value`.
	     *
	     * @private
	     * @name set
	     * @memberOf Hash
	     * @param {string} key The key of the value to set.
	     * @param {*} value The value to set.
	     * @returns {Object} Returns the hash instance.
	     */
	    function hashSet(key, value) {
	      var data = this.__data__;
	      this.size += this.has(key) ? 0 : 1;
	      data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	      return this;
	    }
	
	    // Add methods to `Hash`.
	    Hash.prototype.clear = hashClear;
	    Hash.prototype['delete'] = hashDelete;
	    Hash.prototype.get = hashGet;
	    Hash.prototype.has = hashHas;
	    Hash.prototype.set = hashSet;
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * Creates an list cache object.
	     *
	     * @private
	     * @constructor
	     * @param {Array} [entries] The key-value pairs to cache.
	     */
	    function ListCache(entries) {
	      var index = -1,
	          length = entries == null ? 0 : entries.length;
	
	      this.clear();
	      while (++index < length) {
	        var entry = entries[index];
	        this.set(entry[0], entry[1]);
	      }
	    }
	
	    /**
	     * Removes all key-value entries from the list cache.
	     *
	     * @private
	     * @name clear
	     * @memberOf ListCache
	     */
	    function listCacheClear() {
	      this.__data__ = [];
	      this.size = 0;
	    }
	
	    /**
	     * Removes `key` and its value from the list cache.
	     *
	     * @private
	     * @name delete
	     * @memberOf ListCache
	     * @param {string} key The key of the value to remove.
	     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	     */
	    function listCacheDelete(key) {
	      var data = this.__data__,
	          index = assocIndexOf(data, key);
	
	      if (index < 0) {
	        return false;
	      }
	      var lastIndex = data.length - 1;
	      if (index == lastIndex) {
	        data.pop();
	      } else {
	        splice.call(data, index, 1);
	      }
	      --this.size;
	      return true;
	    }
	
	    /**
	     * Gets the list cache value for `key`.
	     *
	     * @private
	     * @name get
	     * @memberOf ListCache
	     * @param {string} key The key of the value to get.
	     * @returns {*} Returns the entry value.
	     */
	    function listCacheGet(key) {
	      var data = this.__data__,
	          index = assocIndexOf(data, key);
	
	      return index < 0 ? undefined : data[index][1];
	    }
	
	    /**
	     * Checks if a list cache value for `key` exists.
	     *
	     * @private
	     * @name has
	     * @memberOf ListCache
	     * @param {string} key The key of the entry to check.
	     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	     */
	    function listCacheHas(key) {
	      return assocIndexOf(this.__data__, key) > -1;
	    }
	
	    /**
	     * Sets the list cache `key` to `value`.
	     *
	     * @private
	     * @name set
	     * @memberOf ListCache
	     * @param {string} key The key of the value to set.
	     * @param {*} value The value to set.
	     * @returns {Object} Returns the list cache instance.
	     */
	    function listCacheSet(key, value) {
	      var data = this.__data__,
	          index = assocIndexOf(data, key);
	
	      if (index < 0) {
	        ++this.size;
	        data.push([key, value]);
	      } else {
	        data[index][1] = value;
	      }
	      return this;
	    }
	
	    // Add methods to `ListCache`.
	    ListCache.prototype.clear = listCacheClear;
	    ListCache.prototype['delete'] = listCacheDelete;
	    ListCache.prototype.get = listCacheGet;
	    ListCache.prototype.has = listCacheHas;
	    ListCache.prototype.set = listCacheSet;
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * Creates a map cache object to store key-value pairs.
	     *
	     * @private
	     * @constructor
	     * @param {Array} [entries] The key-value pairs to cache.
	     */
	    function MapCache(entries) {
	      var index = -1,
	          length = entries == null ? 0 : entries.length;
	
	      this.clear();
	      while (++index < length) {
	        var entry = entries[index];
	        this.set(entry[0], entry[1]);
	      }
	    }
	
	    /**
	     * Removes all key-value entries from the map.
	     *
	     * @private
	     * @name clear
	     * @memberOf MapCache
	     */
	    function mapCacheClear() {
	      this.size = 0;
	      this.__data__ = {
	        'hash': new Hash,
	        'map': new (Map || ListCache),
	        'string': new Hash
	      };
	    }
	
	    /**
	     * Removes `key` and its value from the map.
	     *
	     * @private
	     * @name delete
	     * @memberOf MapCache
	     * @param {string} key The key of the value to remove.
	     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	     */
	    function mapCacheDelete(key) {
	      var result = getMapData(this, key)['delete'](key);
	      this.size -= result ? 1 : 0;
	      return result;
	    }
	
	    /**
	     * Gets the map value for `key`.
	     *
	     * @private
	     * @name get
	     * @memberOf MapCache
	     * @param {string} key The key of the value to get.
	     * @returns {*} Returns the entry value.
	     */
	    function mapCacheGet(key) {
	      return getMapData(this, key).get(key);
	    }
	
	    /**
	     * Checks if a map value for `key` exists.
	     *
	     * @private
	     * @name has
	     * @memberOf MapCache
	     * @param {string} key The key of the entry to check.
	     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	     */
	    function mapCacheHas(key) {
	      return getMapData(this, key).has(key);
	    }
	
	    /**
	     * Sets the map `key` to `value`.
	     *
	     * @private
	     * @name set
	     * @memberOf MapCache
	     * @param {string} key The key of the value to set.
	     * @param {*} value The value to set.
	     * @returns {Object} Returns the map cache instance.
	     */
	    function mapCacheSet(key, value) {
	      var data = getMapData(this, key),
	          size = data.size;
	
	      data.set(key, value);
	      this.size += data.size == size ? 0 : 1;
	      return this;
	    }
	
	    // Add methods to `MapCache`.
	    MapCache.prototype.clear = mapCacheClear;
	    MapCache.prototype['delete'] = mapCacheDelete;
	    MapCache.prototype.get = mapCacheGet;
	    MapCache.prototype.has = mapCacheHas;
	    MapCache.prototype.set = mapCacheSet;
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     *
	     * Creates an array cache object to store unique values.
	     *
	     * @private
	     * @constructor
	     * @param {Array} [values] The values to cache.
	     */
	    function SetCache(values) {
	      var index = -1,
	          length = values == null ? 0 : values.length;
	
	      this.__data__ = new MapCache;
	      while (++index < length) {
	        this.add(values[index]);
	      }
	    }
	
	    /**
	     * Adds `value` to the array cache.
	     *
	     * @private
	     * @name add
	     * @memberOf SetCache
	     * @alias push
	     * @param {*} value The value to cache.
	     * @returns {Object} Returns the cache instance.
	     */
	    function setCacheAdd(value) {
	      this.__data__.set(value, HASH_UNDEFINED);
	      return this;
	    }
	
	    /**
	     * Checks if `value` is in the array cache.
	     *
	     * @private
	     * @name has
	     * @memberOf SetCache
	     * @param {*} value The value to search for.
	     * @returns {number} Returns `true` if `value` is found, else `false`.
	     */
	    function setCacheHas(value) {
	      return this.__data__.has(value);
	    }
	
	    // Add methods to `SetCache`.
	    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
	    SetCache.prototype.has = setCacheHas;
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * Creates a stack cache object to store key-value pairs.
	     *
	     * @private
	     * @constructor
	     * @param {Array} [entries] The key-value pairs to cache.
	     */
	    function Stack(entries) {
	      var data = this.__data__ = new ListCache(entries);
	      this.size = data.size;
	    }
	
	    /**
	     * Removes all key-value entries from the stack.
	     *
	     * @private
	     * @name clear
	     * @memberOf Stack
	     */
	    function stackClear() {
	      this.__data__ = new ListCache;
	      this.size = 0;
	    }
	
	    /**
	     * Removes `key` and its value from the stack.
	     *
	     * @private
	     * @name delete
	     * @memberOf Stack
	     * @param {string} key The key of the value to remove.
	     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	     */
	    function stackDelete(key) {
	      var data = this.__data__,
	          result = data['delete'](key);
	
	      this.size = data.size;
	      return result;
	    }
	
	    /**
	     * Gets the stack value for `key`.
	     *
	     * @private
	     * @name get
	     * @memberOf Stack
	     * @param {string} key The key of the value to get.
	     * @returns {*} Returns the entry value.
	     */
	    function stackGet(key) {
	      return this.__data__.get(key);
	    }
	
	    /**
	     * Checks if a stack value for `key` exists.
	     *
	     * @private
	     * @name has
	     * @memberOf Stack
	     * @param {string} key The key of the entry to check.
	     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	     */
	    function stackHas(key) {
	      return this.__data__.has(key);
	    }
	
	    /**
	     * Sets the stack `key` to `value`.
	     *
	     * @private
	     * @name set
	     * @memberOf Stack
	     * @param {string} key The key of the value to set.
	     * @param {*} value The value to set.
	     * @returns {Object} Returns the stack cache instance.
	     */
	    function stackSet(key, value) {
	      var data = this.__data__;
	      if (data instanceof ListCache) {
	        var pairs = data.__data__;
	        if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
	          pairs.push([key, value]);
	          this.size = ++data.size;
	          return this;
	        }
	        data = this.__data__ = new MapCache(pairs);
	      }
	      data.set(key, value);
	      this.size = data.size;
	      return this;
	    }
	
	    // Add methods to `Stack`.
	    Stack.prototype.clear = stackClear;
	    Stack.prototype['delete'] = stackDelete;
	    Stack.prototype.get = stackGet;
	    Stack.prototype.has = stackHas;
	    Stack.prototype.set = stackSet;
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * Creates an array of the enumerable property names of the array-like `value`.
	     *
	     * @private
	     * @param {*} value The value to query.
	     * @param {boolean} inherited Specify returning inherited property names.
	     * @returns {Array} Returns the array of property names.
	     */
	    function arrayLikeKeys(value, inherited) {
	      var isArr = isArray(value),
	          isArg = !isArr && isArguments(value),
	          isBuff = !isArr && !isArg && isBuffer(value),
	          isType = !isArr && !isArg && !isBuff && isTypedArray(value),
	          skipIndexes = isArr || isArg || isBuff || isType,
	          result = skipIndexes ? baseTimes(value.length, String) : [],
	          length = result.length;
	
	      for (var key in value) {
	        if ((inherited || hasOwnProperty.call(value, key)) &&
	            !(skipIndexes && (
	               // Safari 9 has enumerable `arguments.length` in strict mode.
	               key == 'length' ||
	               // Node.js 0.10 has enumerable non-index properties on buffers.
	               (isBuff && (key == 'offset' || key == 'parent')) ||
	               // PhantomJS 2 has enumerable non-index properties on typed arrays.
	               (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
	               // Skip index properties.
	               isIndex(key, length)
	            ))) {
	          result.push(key);
	        }
	      }
	      return result;
	    }
	
	    /**
	     * A specialized version of `_.sample` for arrays.
	     *
	     * @private
	     * @param {Array} array The array to sample.
	     * @returns {*} Returns the random element.
	     */
	    function arraySample(array) {
	      var length = array.length;
	      return length ? array[baseRandom(0, length - 1)] : undefined;
	    }
	
	    /**
	     * A specialized version of `_.sampleSize` for arrays.
	     *
	     * @private
	     * @param {Array} array The array to sample.
	     * @param {number} n The number of elements to sample.
	     * @returns {Array} Returns the random elements.
	     */
	    function arraySampleSize(array, n) {
	      return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));
	    }
	
	    /**
	     * A specialized version of `_.shuffle` for arrays.
	     *
	     * @private
	     * @param {Array} array The array to shuffle.
	     * @returns {Array} Returns the new shuffled array.
	     */
	    function arrayShuffle(array) {
	      return shuffleSelf(copyArray(array));
	    }
	
	    /**
	     * This function is like `assignValue` except that it doesn't assign
	     * `undefined` values.
	     *
	     * @private
	     * @param {Object} object The object to modify.
	     * @param {string} key The key of the property to assign.
	     * @param {*} value The value to assign.
	     */
	    function assignMergeValue(object, key, value) {
	      if ((value !== undefined && !eq(object[key], value)) ||
	          (value === undefined && !(key in object))) {
	        baseAssignValue(object, key, value);
	      }
	    }
	
	    /**
	     * Assigns `value` to `key` of `object` if the existing value is not equivalent
	     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	     * for equality comparisons.
	     *
	     * @private
	     * @param {Object} object The object to modify.
	     * @param {string} key The key of the property to assign.
	     * @param {*} value The value to assign.
	     */
	    function assignValue(object, key, value) {
	      var objValue = object[key];
	      if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
	          (value === undefined && !(key in object))) {
	        baseAssignValue(object, key, value);
	      }
	    }
	
	    /**
	     * Gets the index at which the `key` is found in `array` of key-value pairs.
	     *
	     * @private
	     * @param {Array} array The array to inspect.
	     * @param {*} key The key to search for.
	     * @returns {number} Returns the index of the matched value, else `-1`.
	     */
	    function assocIndexOf(array, key) {
	      var length = array.length;
	      while (length--) {
	        if (eq(array[length][0], key)) {
	          return length;
	        }
	      }
	      return -1;
	    }
	
	    /**
	     * Aggregates elements of `collection` on `accumulator` with keys transformed
	     * by `iteratee` and values set by `setter`.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} setter The function to set `accumulator` values.
	     * @param {Function} iteratee The iteratee to transform keys.
	     * @param {Object} accumulator The initial aggregated object.
	     * @returns {Function} Returns `accumulator`.
	     */
	    function baseAggregator(collection, setter, iteratee, accumulator) {
	      baseEach(collection, function(value, key, collection) {
	        setter(accumulator, value, iteratee(value), collection);
	      });
	      return accumulator;
	    }
	
	    /**
	     * The base implementation of `_.assign` without support for multiple sources
	     * or `customizer` functions.
	     *
	     * @private
	     * @param {Object} object The destination object.
	     * @param {Object} source The source object.
	     * @returns {Object} Returns `object`.
	     */
	    function baseAssign(object, source) {
	      return object && copyObject(source, keys(source), object);
	    }
	
	    /**
	     * The base implementation of `_.assignIn` without support for multiple sources
	     * or `customizer` functions.
	     *
	     * @private
	     * @param {Object} object The destination object.
	     * @param {Object} source The source object.
	     * @returns {Object} Returns `object`.
	     */
	    function baseAssignIn(object, source) {
	      return object && copyObject(source, keysIn(source), object);
	    }
	
	    /**
	     * The base implementation of `assignValue` and `assignMergeValue` without
	     * value checks.
	     *
	     * @private
	     * @param {Object} object The object to modify.
	     * @param {string} key The key of the property to assign.
	     * @param {*} value The value to assign.
	     */
	    function baseAssignValue(object, key, value) {
	      if (key == '__proto__' && defineProperty) {
	        defineProperty(object, key, {
	          'configurable': true,
	          'enumerable': true,
	          'value': value,
	          'writable': true
	        });
	      } else {
	        object[key] = value;
	      }
	    }
	
	    /**
	     * The base implementation of `_.at` without support for individual paths.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {string[]} paths The property paths to pick.
	     * @returns {Array} Returns the picked elements.
	     */
	    function baseAt(object, paths) {
	      var index = -1,
	          length = paths.length,
	          result = Array(length),
	          skip = object == null;
	
	      while (++index < length) {
	        result[index] = skip ? undefined : get(object, paths[index]);
	      }
	      return result;
	    }
	
	    /**
	     * The base implementation of `_.clamp` which doesn't coerce arguments.
	     *
	     * @private
	     * @param {number} number The number to clamp.
	     * @param {number} [lower] The lower bound.
	     * @param {number} upper The upper bound.
	     * @returns {number} Returns the clamped number.
	     */
	    function baseClamp(number, lower, upper) {
	      if (number === number) {
	        if (upper !== undefined) {
	          number = number <= upper ? number : upper;
	        }
	        if (lower !== undefined) {
	          number = number >= lower ? number : lower;
	        }
	      }
	      return number;
	    }
	
	    /**
	     * The base implementation of `_.clone` and `_.cloneDeep` which tracks
	     * traversed objects.
	     *
	     * @private
	     * @param {*} value The value to clone.
	     * @param {boolean} bitmask The bitmask flags.
	     *  1 - Deep clone
	     *  2 - Flatten inherited properties
	     *  4 - Clone symbols
	     * @param {Function} [customizer] The function to customize cloning.
	     * @param {string} [key] The key of `value`.
	     * @param {Object} [object] The parent object of `value`.
	     * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
	     * @returns {*} Returns the cloned value.
	     */
	    function baseClone(value, bitmask, customizer, key, object, stack) {
	      var result,
	          isDeep = bitmask & CLONE_DEEP_FLAG,
	          isFlat = bitmask & CLONE_FLAT_FLAG,
	          isFull = bitmask & CLONE_SYMBOLS_FLAG;
	
	      if (customizer) {
	        result = object ? customizer(value, key, object, stack) : customizer(value);
	      }
	      if (result !== undefined) {
	        return result;
	      }
	      if (!isObject(value)) {
	        return value;
	      }
	      var isArr = isArray(value);
	      if (isArr) {
	        result = initCloneArray(value);
	        if (!isDeep) {
	          return copyArray(value, result);
	        }
	      } else {
	        var tag = getTag(value),
	            isFunc = tag == funcTag || tag == genTag;
	
	        if (isBuffer(value)) {
	          return cloneBuffer(value, isDeep);
	        }
	        if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
	          result = (isFlat || isFunc) ? {} : initCloneObject(value);
	          if (!isDeep) {
	            return isFlat
	              ? copySymbolsIn(value, baseAssignIn(result, value))
	              : copySymbols(value, baseAssign(result, value));
	          }
	        } else {
	          if (!cloneableTags[tag]) {
	            return object ? value : {};
	          }
	          result = initCloneByTag(value, tag, baseClone, isDeep);
	        }
	      }
	      // Check for circular references and return its corresponding clone.
	      stack || (stack = new Stack);
	      var stacked = stack.get(value);
	      if (stacked) {
	        return stacked;
	      }
	      stack.set(value, result);
	
	      var keysFunc = isFull
	        ? (isFlat ? getAllKeysIn : getAllKeys)
	        : (isFlat ? keysIn : keys);
	
	      var props = isArr ? undefined : keysFunc(value);
	      arrayEach(props || value, function(subValue, key) {
	        if (props) {
	          key = subValue;
	          subValue = value[key];
	        }
	        // Recursively populate clone (susceptible to call stack limits).
	        assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
	      });
	      return result;
	    }
	
	    /**
	     * The base implementation of `_.conforms` which doesn't clone `source`.
	     *
	     * @private
	     * @param {Object} source The object of property predicates to conform to.
	     * @returns {Function} Returns the new spec function.
	     */
	    function baseConforms(source) {
	      var props = keys(source);
	      return function(object) {
	        return baseConformsTo(object, source, props);
	      };
	    }
	
	    /**
	     * The base implementation of `_.conformsTo` which accepts `props` to check.
	     *
	     * @private
	     * @param {Object} object The object to inspect.
	     * @param {Object} source The object of property predicates to conform to.
	     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
	     */
	    function baseConformsTo(object, source, props) {
	      var length = props.length;
	      if (object == null) {
	        return !length;
	      }
	      object = Object(object);
	      while (length--) {
	        var key = props[length],
	            predicate = source[key],
	            value = object[key];
	
	        if ((value === undefined && !(key in object)) || !predicate(value)) {
	          return false;
	        }
	      }
	      return true;
	    }
	
	    /**
	     * The base implementation of `_.delay` and `_.defer` which accepts `args`
	     * to provide to `func`.
	     *
	     * @private
	     * @param {Function} func The function to delay.
	     * @param {number} wait The number of milliseconds to delay invocation.
	     * @param {Array} args The arguments to provide to `func`.
	     * @returns {number|Object} Returns the timer id or timeout object.
	     */
	    function baseDelay(func, wait, args) {
	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      return setTimeout(function() { func.apply(undefined, args); }, wait);
	    }
	
	    /**
	     * The base implementation of methods like `_.difference` without support
	     * for excluding multiple arrays or iteratee shorthands.
	     *
	     * @private
	     * @param {Array} array The array to inspect.
	     * @param {Array} values The values to exclude.
	     * @param {Function} [iteratee] The iteratee invoked per element.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns the new array of filtered values.
	     */
	    function baseDifference(array, values, iteratee, comparator) {
	      var index = -1,
	          includes = arrayIncludes,
	          isCommon = true,
	          length = array.length,
	          result = [],
	          valuesLength = values.length;
	
	      if (!length) {
	        return result;
	      }
	      if (iteratee) {
	        values = arrayMap(values, baseUnary(iteratee));
	      }
	      if (comparator) {
	        includes = arrayIncludesWith;
	        isCommon = false;
	      }
	      else if (values.length >= LARGE_ARRAY_SIZE) {
	        includes = cacheHas;
	        isCommon = false;
	        values = new SetCache(values);
	      }
	      outer:
	      while (++index < length) {
	        var value = array[index],
	            computed = iteratee == null ? value : iteratee(value);
	
	        value = (comparator || value !== 0) ? value : 0;
	        if (isCommon && computed === computed) {
	          var valuesIndex = valuesLength;
	          while (valuesIndex--) {
	            if (values[valuesIndex] === computed) {
	              continue outer;
	            }
	          }
	          result.push(value);
	        }
	        else if (!includes(values, computed, comparator)) {
	          result.push(value);
	        }
	      }
	      return result;
	    }
	
	    /**
	     * The base implementation of `_.forEach` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array|Object} Returns `collection`.
	     */
	    var baseEach = createBaseEach(baseForOwn);
	
	    /**
	     * The base implementation of `_.forEachRight` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array|Object} Returns `collection`.
	     */
	    var baseEachRight = createBaseEach(baseForOwnRight, true);
	
	    /**
	     * The base implementation of `_.every` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {boolean} Returns `true` if all elements pass the predicate check,
	     *  else `false`
	     */
	    function baseEvery(collection, predicate) {
	      var result = true;
	      baseEach(collection, function(value, index, collection) {
	        result = !!predicate(value, index, collection);
	        return result;
	      });
	      return result;
	    }
	
	    /**
	     * The base implementation of methods like `_.max` and `_.min` which accepts a
	     * `comparator` to determine the extremum value.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} iteratee The iteratee invoked per iteration.
	     * @param {Function} comparator The comparator used to compare values.
	     * @returns {*} Returns the extremum value.
	     */
	    function baseExtremum(array, iteratee, comparator) {
	      var index = -1,
	          length = array.length;
	
	      while (++index < length) {
	        var value = array[index],
	            current = iteratee(value);
	
	        if (current != null && (computed === undefined
	              ? (current === current && !isSymbol(current))
	              : comparator(current, computed)
	            )) {
	          var computed = current,
	              result = value;
	        }
	      }
	      return result;
	    }
	
	    /**
	     * The base implementation of `_.fill` without an iteratee call guard.
	     *
	     * @private
	     * @param {Array} array The array to fill.
	     * @param {*} value The value to fill `array` with.
	     * @param {number} [start=0] The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns `array`.
	     */
	    function baseFill(array, value, start, end) {
	      var length = array.length;
	
	      start = toInteger(start);
	      if (start < 0) {
	        start = -start > length ? 0 : (length + start);
	      }
	      end = (end === undefined || end > length) ? length : toInteger(end);
	      if (end < 0) {
	        end += length;
	      }
	      end = start > end ? 0 : toLength(end);
	      while (start < end) {
	        array[start++] = value;
	      }
	      return array;
	    }
	
	    /**
	     * The base implementation of `_.filter` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {Array} Returns the new filtered array.
	     */
	    function baseFilter(collection, predicate) {
	      var result = [];
	      baseEach(collection, function(value, index, collection) {
	        if (predicate(value, index, collection)) {
	          result.push(value);
	        }
	      });
	      return result;
	    }
	
	    /**
	     * The base implementation of `_.flatten` with support for restricting flattening.
	     *
	     * @private
	     * @param {Array} array The array to flatten.
	     * @param {number} depth The maximum recursion depth.
	     * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
	     * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
	     * @param {Array} [result=[]] The initial result value.
	     * @returns {Array} Returns the new flattened array.
	     */
	    function baseFlatten(array, depth, predicate, isStrict, result) {
	      var index = -1,
	          length = array.length;
	
	      predicate || (predicate = isFlattenable);
	      result || (result = []);
	
	      while (++index < length) {
	        var value = array[index];
	        if (depth > 0 && predicate(value)) {
	          if (depth > 1) {
	            // Recursively flatten arrays (susceptible to call stack limits).
	            baseFlatten(value, depth - 1, predicate, isStrict, result);
	          } else {
	            arrayPush(result, value);
	          }
	        } else if (!isStrict) {
	          result[result.length] = value;
	        }
	      }
	      return result;
	    }
	
	    /**
	     * The base implementation of `baseForOwn` which iterates over `object`
	     * properties returned by `keysFunc` and invokes `iteratee` for each property.
	     * Iteratee functions may exit iteration early by explicitly returning `false`.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {Function} keysFunc The function to get the keys of `object`.
	     * @returns {Object} Returns `object`.
	     */
	    var baseFor = createBaseFor();
	
	    /**
	     * This function is like `baseFor` except that it iterates over properties
	     * in the opposite order.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {Function} keysFunc The function to get the keys of `object`.
	     * @returns {Object} Returns `object`.
	     */
	    var baseForRight = createBaseFor(true);
	
	    /**
	     * The base implementation of `_.forOwn` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Object} Returns `object`.
	     */
	    function baseForOwn(object, iteratee) {
	      return object && baseFor(object, iteratee, keys);
	    }
	
	    /**
	     * The base implementation of `_.forOwnRight` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Object} Returns `object`.
	     */
	    function baseForOwnRight(object, iteratee) {
	      return object && baseForRight(object, iteratee, keys);
	    }
	
	    /**
	     * The base implementation of `_.functions` which creates an array of
	     * `object` function property names filtered from `props`.
	     *
	     * @private
	     * @param {Object} object The object to inspect.
	     * @param {Array} props The property names to filter.
	     * @returns {Array} Returns the function names.
	     */
	    function baseFunctions(object, props) {
	      return arrayFilter(props, function(key) {
	        return isFunction(object[key]);
	      });
	    }
	
	    /**
	     * The base implementation of `_.get` without support for default values.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path of the property to get.
	     * @returns {*} Returns the resolved value.
	     */
	    function baseGet(object, path) {
	      path = castPath(path, object);
	
	      var index = 0,
	          length = path.length;
	
	      while (object != null && index < length) {
	        object = object[toKey(path[index++])];
	      }
	      return (index && index == length) ? object : undefined;
	    }
	
	    /**
	     * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	     * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	     * symbols of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {Function} keysFunc The function to get the keys of `object`.
	     * @param {Function} symbolsFunc The function to get the symbols of `object`.
	     * @returns {Array} Returns the array of property names and symbols.
	     */
	    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	      var result = keysFunc(object);
	      return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
	    }
	
	    /**
	     * The base implementation of `getTag` without fallbacks for buggy environments.
	     *
	     * @private
	     * @param {*} value The value to query.
	     * @returns {string} Returns the `toStringTag`.
	     */
	    function baseGetTag(value) {
	      if (value == null) {
	        return value === undefined ? undefinedTag : nullTag;
	      }
	      return (symToStringTag && symToStringTag in Object(value))
	        ? getRawTag(value)
	        : objectToString(value);
	    }
	
	    /**
	     * The base implementation of `_.gt` which doesn't coerce arguments.
	     *
	     * @private
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if `value` is greater than `other`,
	     *  else `false`.
	     */
	    function baseGt(value, other) {
	      return value > other;
	    }
	
	    /**
	     * The base implementation of `_.has` without support for deep paths.
	     *
	     * @private
	     * @param {Object} [object] The object to query.
	     * @param {Array|string} key The key to check.
	     * @returns {boolean} Returns `true` if `key` exists, else `false`.
	     */
	    function baseHas(object, key) {
	      return object != null && hasOwnProperty.call(object, key);
	    }
	
	    /**
	     * The base implementation of `_.hasIn` without support for deep paths.
	     *
	     * @private
	     * @param {Object} [object] The object to query.
	     * @param {Array|string} key The key to check.
	     * @returns {boolean} Returns `true` if `key` exists, else `false`.
	     */
	    function baseHasIn(object, key) {
	      return object != null && key in Object(object);
	    }
	
	    /**
	     * The base implementation of `_.inRange` which doesn't coerce arguments.
	     *
	     * @private
	     * @param {number} number The number to check.
	     * @param {number} start The start of the range.
	     * @param {number} end The end of the range.
	     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
	     */
	    function baseInRange(number, start, end) {
	      return number >= nativeMin(start, end) && number < nativeMax(start, end);
	    }
	
	    /**
	     * The base implementation of methods like `_.intersection`, without support
	     * for iteratee shorthands, that accepts an array of arrays to inspect.
	     *
	     * @private
	     * @param {Array} arrays The arrays to inspect.
	     * @param {Function} [iteratee] The iteratee invoked per element.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns the new array of shared values.
	     */
	    function baseIntersection(arrays, iteratee, comparator) {
	      var includes = comparator ? arrayIncludesWith : arrayIncludes,
	          length = arrays[0].length,
	          othLength = arrays.length,
	          othIndex = othLength,
	          caches = Array(othLength),
	          maxLength = Infinity,
	          result = [];
	
	      while (othIndex--) {
	        var array = arrays[othIndex];
	        if (othIndex && iteratee) {
	          array = arrayMap(array, baseUnary(iteratee));
	        }
	        maxLength = nativeMin(array.length, maxLength);
	        caches[othIndex] = !comparator && (iteratee || (length >= 120 && array.length >= 120))
	          ? new SetCache(othIndex && array)
	          : undefined;
	      }
	      array = arrays[0];
	
	      var index = -1,
	          seen = caches[0];
	
	      outer:
	      while (++index < length && result.length < maxLength) {
	        var value = array[index],
	            computed = iteratee ? iteratee(value) : value;
	
	        value = (comparator || value !== 0) ? value : 0;
	        if (!(seen
	              ? cacheHas(seen, computed)
	              : includes(result, computed, comparator)
	            )) {
	          othIndex = othLength;
	          while (--othIndex) {
	            var cache = caches[othIndex];
	            if (!(cache
	                  ? cacheHas(cache, computed)
	                  : includes(arrays[othIndex], computed, comparator))
	                ) {
	              continue outer;
	            }
	          }
	          if (seen) {
	            seen.push(computed);
	          }
	          result.push(value);
	        }
	      }
	      return result;
	    }
	
	    /**
	     * The base implementation of `_.invert` and `_.invertBy` which inverts
	     * `object` with values transformed by `iteratee` and set by `setter`.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} setter The function to set `accumulator` values.
	     * @param {Function} iteratee The iteratee to transform values.
	     * @param {Object} accumulator The initial inverted object.
	     * @returns {Function} Returns `accumulator`.
	     */
	    function baseInverter(object, setter, iteratee, accumulator) {
	      baseForOwn(object, function(value, key, object) {
	        setter(accumulator, iteratee(value), key, object);
	      });
	      return accumulator;
	    }
	
	    /**
	     * The base implementation of `_.invoke` without support for individual
	     * method arguments.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path of the method to invoke.
	     * @param {Array} args The arguments to invoke the method with.
	     * @returns {*} Returns the result of the invoked method.
	     */
	    function baseInvoke(object, path, args) {
	      path = castPath(path, object);
	      object = parent(object, path);
	      var func = object == null ? object : object[toKey(last(path))];
	      return func == null ? undefined : apply(func, object, args);
	    }
	
	    /**
	     * The base implementation of `_.isArguments`.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	     */
	    function baseIsArguments(value) {
	      return isObjectLike(value) && baseGetTag(value) == argsTag;
	    }
	
	    /**
	     * The base implementation of `_.isArrayBuffer` without Node.js optimizations.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
	     */
	    function baseIsArrayBuffer(value) {
	      return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
	    }
	
	    /**
	     * The base implementation of `_.isDate` without Node.js optimizations.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
	     */
	    function baseIsDate(value) {
	      return isObjectLike(value) && baseGetTag(value) == dateTag;
	    }
	
	    /**
	     * The base implementation of `_.isEqual` which supports partial comparisons
	     * and tracks traversed objects.
	     *
	     * @private
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @param {boolean} bitmask The bitmask flags.
	     *  1 - Unordered comparison
	     *  2 - Partial comparison
	     * @param {Function} [customizer] The function to customize comparisons.
	     * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	     */
	    function baseIsEqual(value, other, bitmask, customizer, stack) {
	      if (value === other) {
	        return true;
	      }
	      if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
	        return value !== value && other !== other;
	      }
	      return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
	    }
	
	    /**
	     * A specialized version of `baseIsEqual` for arrays and objects which performs
	     * deep comparisons and tracks traversed objects enabling objects with circular
	     * references to be compared.
	     *
	     * @private
	     * @param {Object} object The object to compare.
	     * @param {Object} other The other object to compare.
	     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	     * @param {Function} customizer The function to customize comparisons.
	     * @param {Function} equalFunc The function to determine equivalents of values.
	     * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	     */
	    function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
	      var objIsArr = isArray(object),
	          othIsArr = isArray(other),
	          objTag = objIsArr ? arrayTag : getTag(object),
	          othTag = othIsArr ? arrayTag : getTag(other);
	
	      objTag = objTag == argsTag ? objectTag : objTag;
	      othTag = othTag == argsTag ? objectTag : othTag;
	
	      var objIsObj = objTag == objectTag,
	          othIsObj = othTag == objectTag,
	          isSameTag = objTag == othTag;
	
	      if (isSameTag && isBuffer(object)) {
	        if (!isBuffer(other)) {
	          return false;
	        }
	        objIsArr = true;
	        objIsObj = false;
	      }
	      if (isSameTag && !objIsObj) {
	        stack || (stack = new Stack);
	        return (objIsArr || isTypedArray(object))
	          ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
	          : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
	      }
	      if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
	        var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	            othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
	
	        if (objIsWrapped || othIsWrapped) {
	          var objUnwrapped = objIsWrapped ? object.value() : object,
	              othUnwrapped = othIsWrapped ? other.value() : other;
	
	          stack || (stack = new Stack);
	          return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
	        }
	      }
	      if (!isSameTag) {
	        return false;
	      }
	      stack || (stack = new Stack);
	      return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
	    }
	
	    /**
	     * The base implementation of `_.isMap` without Node.js optimizations.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
	     */
	    function baseIsMap(value) {
	      return isObjectLike(value) && getTag(value) == mapTag;
	    }
	
	    /**
	     * The base implementation of `_.isMatch` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Object} object The object to inspect.
	     * @param {Object} source The object of property values to match.
	     * @param {Array} matchData The property names, values, and compare flags to match.
	     * @param {Function} [customizer] The function to customize comparisons.
	     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	     */
	    function baseIsMatch(object, source, matchData, customizer) {
	      var index = matchData.length,
	          length = index,
	          noCustomizer = !customizer;
	
	      if (object == null) {
	        return !length;
	      }
	      object = Object(object);
	      while (index--) {
	        var data = matchData[index];
	        if ((noCustomizer && data[2])
	              ? data[1] !== object[data[0]]
	              : !(data[0] in object)
	            ) {
	          return false;
	        }
	      }
	      while (++index < length) {
	        data = matchData[index];
	        var key = data[0],
	            objValue = object[key],
	            srcValue = data[1];
	
	        if (noCustomizer && data[2]) {
	          if (objValue === undefined && !(key in object)) {
	            return false;
	          }
	        } else {
	          var stack = new Stack;
	          if (customizer) {
	            var result = customizer(objValue, srcValue, key, object, source, stack);
	          }
	          if (!(result === undefined
	                ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
	                : result
	              )) {
	            return false;
	          }
	        }
	      }
	      return true;
	    }
	
	    /**
	     * The base implementation of `_.isNative` without bad shim checks.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a native function,
	     *  else `false`.
	     */
	    function baseIsNative(value) {
	      if (!isObject(value) || isMasked(value)) {
	        return false;
	      }
	      var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
	      return pattern.test(toSource(value));
	    }
	
	    /**
	     * The base implementation of `_.isRegExp` without Node.js optimizations.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
	     */
	    function baseIsRegExp(value) {
	      return isObjectLike(value) && baseGetTag(value) == regexpTag;
	    }
	
	    /**
	     * The base implementation of `_.isSet` without Node.js optimizations.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
	     */
	    function baseIsSet(value) {
	      return isObjectLike(value) && getTag(value) == setTag;
	    }
	
	    /**
	     * The base implementation of `_.isTypedArray` without Node.js optimizations.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	     */
	    function baseIsTypedArray(value) {
	      return isObjectLike(value) &&
	        isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
	    }
	
	    /**
	     * The base implementation of `_.iteratee`.
	     *
	     * @private
	     * @param {*} [value=_.identity] The value to convert to an iteratee.
	     * @returns {Function} Returns the iteratee.
	     */
	    function baseIteratee(value) {
	      // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
	      // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
	      if (typeof value == 'function') {
	        return value;
	      }
	      if (value == null) {
	        return identity;
	      }
	      if (typeof value == 'object') {
	        return isArray(value)
	          ? baseMatchesProperty(value[0], value[1])
	          : baseMatches(value);
	      }
	      return property(value);
	    }
	
	    /**
	     * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names.
	     */
	    function baseKeys(object) {
	      if (!isPrototype(object)) {
	        return nativeKeys(object);
	      }
	      var result = [];
	      for (var key in Object(object)) {
	        if (hasOwnProperty.call(object, key) && key != 'constructor') {
	          result.push(key);
	        }
	      }
	      return result;
	    }
	
	    /**
	     * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names.
	     */
	    function baseKeysIn(object) {
	      if (!isObject(object)) {
	        return nativeKeysIn(object);
	      }
	      var isProto = isPrototype(object),
	          result = [];
	
	      for (var key in object) {
	        if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	          result.push(key);
	        }
	      }
	      return result;
	    }
	
	    /**
	     * The base implementation of `_.lt` which doesn't coerce arguments.
	     *
	     * @private
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if `value` is less than `other`,
	     *  else `false`.
	     */
	    function baseLt(value, other) {
	      return value < other;
	    }
	
	    /**
	     * The base implementation of `_.map` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array} Returns the new mapped array.
	     */
	    function baseMap(collection, iteratee) {
	      var index = -1,
	          result = isArrayLike(collection) ? Array(collection.length) : [];
	
	      baseEach(collection, function(value, key, collection) {
	        result[++index] = iteratee(value, key, collection);
	      });
	      return result;
	    }
	
	    /**
	     * The base implementation of `_.matches` which doesn't clone `source`.
	     *
	     * @private
	     * @param {Object} source The object of property values to match.
	     * @returns {Function} Returns the new spec function.
	     */
	    function baseMatches(source) {
	      var matchData = getMatchData(source);
	      if (matchData.length == 1 && matchData[0][2]) {
	        return matchesStrictComparable(matchData[0][0], matchData[0][1]);
	      }
	      return function(object) {
	        return object === source || baseIsMatch(object, source, matchData);
	      };
	    }
	
	    /**
	     * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
	     *
	     * @private
	     * @param {string} path The path of the property to get.
	     * @param {*} srcValue The value to match.
	     * @returns {Function} Returns the new spec function.
	     */
	    function baseMatchesProperty(path, srcValue) {
	      if (isKey(path) && isStrictComparable(srcValue)) {
	        return matchesStrictComparable(toKey(path), srcValue);
	      }
	      return function(object) {
	        var objValue = get(object, path);
	        return (objValue === undefined && objValue === srcValue)
	          ? hasIn(object, path)
	          : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
	      };
	    }
	
	    /**
	     * The base implementation of `_.merge` without support for multiple sources.
	     *
	     * @private
	     * @param {Object} object The destination object.
	     * @param {Object} source The source object.
	     * @param {number} srcIndex The index of `source`.
	     * @param {Function} [customizer] The function to customize merged values.
	     * @param {Object} [stack] Tracks traversed source values and their merged
	     *  counterparts.
	     */
	    function baseMerge(object, source, srcIndex, customizer, stack) {
	      if (object === source) {
	        return;
	      }
	      baseFor(source, function(srcValue, key) {
	        if (isObject(srcValue)) {
	          stack || (stack = new Stack);
	          baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
	        }
	        else {
	          var newValue = customizer
	            ? customizer(object[key], srcValue, (key + ''), object, source, stack)
	            : undefined;
	
	          if (newValue === undefined) {
	            newValue = srcValue;
	          }
	          assignMergeValue(object, key, newValue);
	        }
	      }, keysIn);
	    }
	
	    /**
	     * A specialized version of `baseMerge` for arrays and objects which performs
	     * deep merges and tracks traversed objects enabling objects with circular
	     * references to be merged.
	     *
	     * @private
	     * @param {Object} object The destination object.
	     * @param {Object} source The source object.
	     * @param {string} key The key of the value to merge.
	     * @param {number} srcIndex The index of `source`.
	     * @param {Function} mergeFunc The function to merge values.
	     * @param {Function} [customizer] The function to customize assigned values.
	     * @param {Object} [stack] Tracks traversed source values and their merged
	     *  counterparts.
	     */
	    function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
	      var objValue = object[key],
	          srcValue = source[key],
	          stacked = stack.get(srcValue);
	
	      if (stacked) {
	        assignMergeValue(object, key, stacked);
	        return;
	      }
	      var newValue = customizer
	        ? customizer(objValue, srcValue, (key + ''), object, source, stack)
	        : undefined;
	
	      var isCommon = newValue === undefined;
	
	      if (isCommon) {
	        var isArr = isArray(srcValue),
	            isBuff = !isArr && isBuffer(srcValue),
	            isTyped = !isArr && !isBuff && isTypedArray(srcValue);
	
	        newValue = srcValue;
	        if (isArr || isBuff || isTyped) {
	          if (isArray(objValue)) {
	            newValue = objValue;
	          }
	          else if (isArrayLikeObject(objValue)) {
	            newValue = copyArray(objValue);
	          }
	          else if (isBuff) {
	            isCommon = false;
	            newValue = cloneBuffer(srcValue, true);
	          }
	          else if (isTyped) {
	            isCommon = false;
	            newValue = cloneTypedArray(srcValue, true);
	          }
	          else {
	            newValue = [];
	          }
	        }
	        else if (isPlainObject(srcValue) || isArguments(srcValue)) {
	          newValue = objValue;
	          if (isArguments(objValue)) {
	            newValue = toPlainObject(objValue);
	          }
	          else if (!isObject(objValue) || (srcIndex && isFunction(objValue))) {
	            newValue = initCloneObject(srcValue);
	          }
	        }
	        else {
	          isCommon = false;
	        }
	      }
	      if (isCommon) {
	        // Recursively merge objects and arrays (susceptible to call stack limits).
	        stack.set(srcValue, newValue);
	        mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
	        stack['delete'](srcValue);
	      }
	      assignMergeValue(object, key, newValue);
	    }
	
	    /**
	     * The base implementation of `_.nth` which doesn't coerce arguments.
	     *
	     * @private
	     * @param {Array} array The array to query.
	     * @param {number} n The index of the element to return.
	     * @returns {*} Returns the nth element of `array`.
	     */
	    function baseNth(array, n) {
	      var length = array.length;
	      if (!length) {
	        return;
	      }
	      n += n < 0 ? length : 0;
	      return isIndex(n, length) ? array[n] : undefined;
	    }
	
	    /**
	     * The base implementation of `_.orderBy` without param guards.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
	     * @param {string[]} orders The sort orders of `iteratees`.
	     * @returns {Array} Returns the new sorted array.
	     */
	    function baseOrderBy(collection, iteratees, orders) {
	      var index = -1;
	      iteratees = arrayMap(iteratees.length ? iteratees : [identity], baseUnary(getIteratee()));
	
	      var result = baseMap(collection, function(value, key, collection) {
	        var criteria = arrayMap(iteratees, function(iteratee) {
	          return iteratee(value);
	        });
	        return { 'criteria': criteria, 'index': ++index, 'value': value };
	      });
	
	      return baseSortBy(result, function(object, other) {
	        return compareMultiple(object, other, orders);
	      });
	    }
	
	    /**
	     * The base implementation of `_.pick` without support for individual
	     * property identifiers.
	     *
	     * @private
	     * @param {Object} object The source object.
	     * @param {string[]} paths The property paths to pick.
	     * @returns {Object} Returns the new object.
	     */
	    function basePick(object, paths) {
	      return basePickBy(object, paths, function(value, path) {
	        return hasIn(object, path);
	      });
	    }
	
	    /**
	     * The base implementation of  `_.pickBy` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Object} object The source object.
	     * @param {string[]} paths The property paths to pick.
	     * @param {Function} predicate The function invoked per property.
	     * @returns {Object} Returns the new object.
	     */
	    function basePickBy(object, paths, predicate) {
	      var index = -1,
	          length = paths.length,
	          result = {};
	
	      while (++index < length) {
	        var path = paths[index],
	            value = baseGet(object, path);
	
	        if (predicate(value, path)) {
	          baseSet(result, castPath(path, object), value);
	        }
	      }
	      return result;
	    }
	
	    /**
	     * A specialized version of `baseProperty` which supports deep paths.
	     *
	     * @private
	     * @param {Array|string} path The path of the property to get.
	     * @returns {Function} Returns the new accessor function.
	     */
	    function basePropertyDeep(path) {
	      return function(object) {
	        return baseGet(object, path);
	      };
	    }
	
	    /**
	     * The base implementation of `_.pullAllBy` without support for iteratee
	     * shorthands.
	     *
	     * @private
	     * @param {Array} array The array to modify.
	     * @param {Array} values The values to remove.
	     * @param {Function} [iteratee] The iteratee invoked per element.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns `array`.
	     */
	    function basePullAll(array, values, iteratee, comparator) {
	      var indexOf = comparator ? baseIndexOfWith : baseIndexOf,
	          index = -1,
	          length = values.length,
	          seen = array;
	
	      if (array === values) {
	        values = copyArray(values);
	      }
	      if (iteratee) {
	        seen = arrayMap(array, baseUnary(iteratee));
	      }
	      while (++index < length) {
	        var fromIndex = 0,
	            value = values[index],
	            computed = iteratee ? iteratee(value) : value;
	
	        while ((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1) {
	          if (seen !== array) {
	            splice.call(seen, fromIndex, 1);
	          }
	          splice.call(array, fromIndex, 1);
	        }
	      }
	      return array;
	    }
	
	    /**
	     * The base implementation of `_.pullAt` without support for individual
	     * indexes or capturing the removed elements.
	     *
	     * @private
	     * @param {Array} array The array to modify.
	     * @param {number[]} indexes The indexes of elements to remove.
	     * @returns {Array} Returns `array`.
	     */
	    function basePullAt(array, indexes) {
	      var length = array ? indexes.length : 0,
	          lastIndex = length - 1;
	
	      while (length--) {
	        var index = indexes[length];
	        if (length == lastIndex || index !== previous) {
	          var previous = index;
	          if (isIndex(index)) {
	            splice.call(array, index, 1);
	          } else {
	            baseUnset(array, index);
	          }
	        }
	      }
	      return array;
	    }
	
	    /**
	     * The base implementation of `_.random` without support for returning
	     * floating-point numbers.
	     *
	     * @private
	     * @param {number} lower The lower bound.
	     * @param {number} upper The upper bound.
	     * @returns {number} Returns the random number.
	     */
	    function baseRandom(lower, upper) {
	      return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
	    }
	
	    /**
	     * The base implementation of `_.range` and `_.rangeRight` which doesn't
	     * coerce arguments.
	     *
	     * @private
	     * @param {number} start The start of the range.
	     * @param {number} end The end of the range.
	     * @param {number} step The value to increment or decrement by.
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Array} Returns the range of numbers.
	     */
	    function baseRange(start, end, step, fromRight) {
	      var index = -1,
	          length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
	          result = Array(length);
	
	      while (length--) {
	        result[fromRight ? length : ++index] = start;
	        start += step;
	      }
	      return result;
	    }
	
	    /**
	     * The base implementation of `_.repeat` which doesn't coerce arguments.
	     *
	     * @private
	     * @param {string} string The string to repeat.
	     * @param {number} n The number of times to repeat the string.
	     * @returns {string} Returns the repeated string.
	     */
	    function baseRepeat(string, n) {
	      var result = '';
	      if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
	        return result;
	      }
	      // Leverage the exponentiation by squaring algorithm for a faster repeat.
	      // See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
	      do {
	        if (n % 2) {
	          result += string;
	        }
	        n = nativeFloor(n / 2);
	        if (n) {
	          string += string;
	        }
	      } while (n);
	
	      return result;
	    }
	
	    /**
	     * The base implementation of `_.rest` which doesn't validate or coerce arguments.
	     *
	     * @private
	     * @param {Function} func The function to apply a rest parameter to.
	     * @param {number} [start=func.length-1] The start position of the rest parameter.
	     * @returns {Function} Returns the new function.
	     */
	    function baseRest(func, start) {
	      return setToString(overRest(func, start, identity), func + '');
	    }
	
	    /**
	     * The base implementation of `_.sample`.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to sample.
	     * @returns {*} Returns the random element.
	     */
	    function baseSample(collection) {
	      return arraySample(values(collection));
	    }
	
	    /**
	     * The base implementation of `_.sampleSize` without param guards.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to sample.
	     * @param {number} n The number of elements to sample.
	     * @returns {Array} Returns the random elements.
	     */
	    function baseSampleSize(collection, n) {
	      var array = values(collection);
	      return shuffleSelf(array, baseClamp(n, 0, array.length));
	    }
	
	    /**
	     * The base implementation of `_.set`.
	     *
	     * @private
	     * @param {Object} object The object to modify.
	     * @param {Array|string} path The path of the property to set.
	     * @param {*} value The value to set.
	     * @param {Function} [customizer] The function to customize path creation.
	     * @returns {Object} Returns `object`.
	     */
	    function baseSet(object, path, value, customizer) {
	      if (!isObject(object)) {
	        return object;
	      }
	      path = castPath(path, object);
	
	      var index = -1,
	          length = path.length,
	          lastIndex = length - 1,
	          nested = object;
	
	      while (nested != null && ++index < length) {
	        var key = toKey(path[index]),
	            newValue = value;
	
	        if (index != lastIndex) {
	          var objValue = nested[key];
	          newValue = customizer ? customizer(objValue, key, nested) : undefined;
	          if (newValue === undefined) {
	            newValue = isObject(objValue)
	              ? objValue
	              : (isIndex(path[index + 1]) ? [] : {});
	          }
	        }
	        assignValue(nested, key, newValue);
	        nested = nested[key];
	      }
	      return object;
	    }
	
	    /**
	     * The base implementation of `setData` without support for hot loop shorting.
	     *
	     * @private
	     * @param {Function} func The function to associate metadata with.
	     * @param {*} data The metadata.
	     * @returns {Function} Returns `func`.
	     */
	    var baseSetData = !metaMap ? identity : function(func, data) {
	      metaMap.set(func, data);
	      return func;
	    };
	
	    /**
	     * The base implementation of `setToString` without support for hot loop shorting.
	     *
	     * @private
	     * @param {Function} func The function to modify.
	     * @param {Function} string The `toString` result.
	     * @returns {Function} Returns `func`.
	     */
	    var baseSetToString = !defineProperty ? identity : function(func, string) {
	      return defineProperty(func, 'toString', {
	        'configurable': true,
	        'enumerable': false,
	        'value': constant(string),
	        'writable': true
	      });
	    };
	
	    /**
	     * The base implementation of `_.shuffle`.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to shuffle.
	     * @returns {Array} Returns the new shuffled array.
	     */
	    function baseShuffle(collection) {
	      return shuffleSelf(values(collection));
	    }
	
	    /**
	     * The base implementation of `_.slice` without an iteratee call guard.
	     *
	     * @private
	     * @param {Array} array The array to slice.
	     * @param {number} [start=0] The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns the slice of `array`.
	     */
	    function baseSlice(array, start, end) {
	      var index = -1,
	          length = array.length;
	
	      if (start < 0) {
	        start = -start > length ? 0 : (length + start);
	      }
	      end = end > length ? length : end;
	      if (end < 0) {
	        end += length;
	      }
	      length = start > end ? 0 : ((end - start) >>> 0);
	      start >>>= 0;
	
	      var result = Array(length);
	      while (++index < length) {
	        result[index] = array[index + start];
	      }
	      return result;
	    }
	
	    /**
	     * The base implementation of `_.some` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {boolean} Returns `true` if any element passes the predicate check,
	     *  else `false`.
	     */
	    function baseSome(collection, predicate) {
	      var result;
	
	      baseEach(collection, function(value, index, collection) {
	        result = predicate(value, index, collection);
	        return !result;
	      });
	      return !!result;
	    }
	
	    /**
	     * The base implementation of `_.sortedIndex` and `_.sortedLastIndex` which
	     * performs a binary search of `array` to determine the index at which `value`
	     * should be inserted into `array` in order to maintain its sort order.
	     *
	     * @private
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @param {boolean} [retHighest] Specify returning the highest qualified index.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     */
	    function baseSortedIndex(array, value, retHighest) {
	      var low = 0,
	          high = array == null ? low : array.length;
	
	      if (typeof value == 'number' && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
	        while (low < high) {
	          var mid = (low + high) >>> 1,
	              computed = array[mid];
	
	          if (computed !== null && !isSymbol(computed) &&
	              (retHighest ? (computed <= value) : (computed < value))) {
	            low = mid + 1;
	          } else {
	            high = mid;
	          }
	        }
	        return high;
	      }
	      return baseSortedIndexBy(array, value, identity, retHighest);
	    }
	
	    /**
	     * The base implementation of `_.sortedIndexBy` and `_.sortedLastIndexBy`
	     * which invokes `iteratee` for `value` and each element of `array` to compute
	     * their sort ranking. The iteratee is invoked with one argument; (value).
	     *
	     * @private
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @param {Function} iteratee The iteratee invoked per element.
	     * @param {boolean} [retHighest] Specify returning the highest qualified index.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     */
	    function baseSortedIndexBy(array, value, iteratee, retHighest) {
	      value = iteratee(value);
	
	      var low = 0,
	          high = array == null ? 0 : array.length,
	          valIsNaN = value !== value,
	          valIsNull = value === null,
	          valIsSymbol = isSymbol(value),
	          valIsUndefined = value === undefined;
	
	      while (low < high) {
	        var mid = nativeFloor((low + high) / 2),
	            computed = iteratee(array[mid]),
	            othIsDefined = computed !== undefined,
	            othIsNull = computed === null,
	            othIsReflexive = computed === computed,
	            othIsSymbol = isSymbol(computed);
	
	        if (valIsNaN) {
	          var setLow = retHighest || othIsReflexive;
	        } else if (valIsUndefined) {
	          setLow = othIsReflexive && (retHighest || othIsDefined);
	        } else if (valIsNull) {
	          setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
	        } else if (valIsSymbol) {
	          setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
	        } else if (othIsNull || othIsSymbol) {
	          setLow = false;
	        } else {
	          setLow = retHighest ? (computed <= value) : (computed < value);
	        }
	        if (setLow) {
	          low = mid + 1;
	        } else {
	          high = mid;
	        }
	      }
	      return nativeMin(high, MAX_ARRAY_INDEX);
	    }
	
	    /**
	     * The base implementation of `_.sortedUniq` and `_.sortedUniqBy` without
	     * support for iteratee shorthands.
	     *
	     * @private
	     * @param {Array} array The array to inspect.
	     * @param {Function} [iteratee] The iteratee invoked per element.
	     * @returns {Array} Returns the new duplicate free array.
	     */
	    function baseSortedUniq(array, iteratee) {
	      var index = -1,
	          length = array.length,
	          resIndex = 0,
	          result = [];
	
	      while (++index < length) {
	        var value = array[index],
	            computed = iteratee ? iteratee(value) : value;
	
	        if (!index || !eq(computed, seen)) {
	          var seen = computed;
	          result[resIndex++] = value === 0 ? 0 : value;
	        }
	      }
	      return result;
	    }
	
	    /**
	     * The base implementation of `_.toNumber` which doesn't ensure correct
	     * conversions of binary, hexadecimal, or octal string values.
	     *
	     * @private
	     * @param {*} value The value to process.
	     * @returns {number} Returns the number.
	     */
	    function baseToNumber(value) {
	      if (typeof value == 'number') {
	        return value;
	      }
	      if (isSymbol(value)) {
	        return NAN;
	      }
	      return +value;
	    }
	
	    /**
	     * The base implementation of `_.toString` which doesn't convert nullish
	     * values to empty strings.
	     *
	     * @private
	     * @param {*} value The value to process.
	     * @returns {string} Returns the string.
	     */
	    function baseToString(value) {
	      // Exit early for strings to avoid a performance hit in some environments.
	      if (typeof value == 'string') {
	        return value;
	      }
	      if (isArray(value)) {
	        // Recursively convert values (susceptible to call stack limits).
	        return arrayMap(value, baseToString) + '';
	      }
	      if (isSymbol(value)) {
	        return symbolToString ? symbolToString.call(value) : '';
	      }
	      var result = (value + '');
	      return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	    }
	
	    /**
	     * The base implementation of `_.uniqBy` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Array} array The array to inspect.
	     * @param {Function} [iteratee] The iteratee invoked per element.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns the new duplicate free array.
	     */
	    function baseUniq(array, iteratee, comparator) {
	      var index = -1,
	          includes = arrayIncludes,
	          length = array.length,
	          isCommon = true,
	          result = [],
	          seen = result;
	
	      if (comparator) {
	        isCommon = false;
	        includes = arrayIncludesWith;
	      }
	      else if (length >= LARGE_ARRAY_SIZE) {
	        var set = iteratee ? null : createSet(array);
	        if (set) {
	          return setToArray(set);
	        }
	        isCommon = false;
	        includes = cacheHas;
	        seen = new SetCache;
	      }
	      else {
	        seen = iteratee ? [] : result;
	      }
	      outer:
	      while (++index < length) {
	        var value = array[index],
	            computed = iteratee ? iteratee(value) : value;
	
	        value = (comparator || value !== 0) ? value : 0;
	        if (isCommon && computed === computed) {
	          var seenIndex = seen.length;
	          while (seenIndex--) {
	            if (seen[seenIndex] === computed) {
	              continue outer;
	            }
	          }
	          if (iteratee) {
	            seen.push(computed);
	          }
	          result.push(value);
	        }
	        else if (!includes(seen, computed, comparator)) {
	          if (seen !== result) {
	            seen.push(computed);
	          }
	          result.push(value);
	        }
	      }
	      return result;
	    }
	
	    /**
	     * The base implementation of `_.unset`.
	     *
	     * @private
	     * @param {Object} object The object to modify.
	     * @param {Array|string} path The property path to unset.
	     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
	     */
	    function baseUnset(object, path) {
	      path = castPath(path, object);
	      object = parent(object, path);
	      return object == null || delete object[toKey(last(path))];
	    }
	
	    /**
	     * The base implementation of `_.update`.
	     *
	     * @private
	     * @param {Object} object The object to modify.
	     * @param {Array|string} path The path of the property to update.
	     * @param {Function} updater The function to produce the updated value.
	     * @param {Function} [customizer] The function to customize path creation.
	     * @returns {Object} Returns `object`.
	     */
	    function baseUpdate(object, path, updater, customizer) {
	      return baseSet(object, path, updater(baseGet(object, path)), customizer);
	    }
	
	    /**
	     * The base implementation of methods like `_.dropWhile` and `_.takeWhile`
	     * without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Array} array The array to query.
	     * @param {Function} predicate The function invoked per iteration.
	     * @param {boolean} [isDrop] Specify dropping elements instead of taking them.
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Array} Returns the slice of `array`.
	     */
	    function baseWhile(array, predicate, isDrop, fromRight) {
	      var length = array.length,
	          index = fromRight ? length : -1;
	
	      while ((fromRight ? index-- : ++index < length) &&
	        predicate(array[index], index, array)) {}
	
	      return isDrop
	        ? baseSlice(array, (fromRight ? 0 : index), (fromRight ? index + 1 : length))
	        : baseSlice(array, (fromRight ? index + 1 : 0), (fromRight ? length : index));
	    }
	
	    /**
	     * The base implementation of `wrapperValue` which returns the result of
	     * performing a sequence of actions on the unwrapped `value`, where each
	     * successive action is supplied the return value of the previous.
	     *
	     * @private
	     * @param {*} value The unwrapped value.
	     * @param {Array} actions Actions to perform to resolve the unwrapped value.
	     * @returns {*} Returns the resolved value.
	     */
	    function baseWrapperValue(value, actions) {
	      var result = value;
	      if (result instanceof LazyWrapper) {
	        result = result.value();
	      }
	      return arrayReduce(actions, function(result, action) {
	        return action.func.apply(action.thisArg, arrayPush([result], action.args));
	      }, result);
	    }
	
	    /**
	     * The base implementation of methods like `_.xor`, without support for
	     * iteratee shorthands, that accepts an array of arrays to inspect.
	     *
	     * @private
	     * @param {Array} arrays The arrays to inspect.
	     * @param {Function} [iteratee] The iteratee invoked per element.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns the new array of values.
	     */
	    function baseXor(arrays, iteratee, comparator) {
	      var length = arrays.length;
	      if (length < 2) {
	        return length ? baseUniq(arrays[0]) : [];
	      }
	      var index = -1,
	          result = Array(length);
	
	      while (++index < length) {
	        var array = arrays[index],
	            othIndex = -1;
	
	        while (++othIndex < length) {
	          if (othIndex != index) {
	            result[index] = baseDifference(result[index] || array, arrays[othIndex], iteratee, comparator);
	          }
	        }
	      }
	      return baseUniq(baseFlatten(result, 1), iteratee, comparator);
	    }
	
	    /**
	     * This base implementation of `_.zipObject` which assigns values using `assignFunc`.
	     *
	     * @private
	     * @param {Array} props The property identifiers.
	     * @param {Array} values The property values.
	     * @param {Function} assignFunc The function to assign values.
	     * @returns {Object} Returns the new object.
	     */
	    function baseZipObject(props, values, assignFunc) {
	      var index = -1,
	          length = props.length,
	          valsLength = values.length,
	          result = {};
	
	      while (++index < length) {
	        var value = index < valsLength ? values[index] : undefined;
	        assignFunc(result, props[index], value);
	      }
	      return result;
	    }
	
	    /**
	     * Casts `value` to an empty array if it's not an array like object.
	     *
	     * @private
	     * @param {*} value The value to inspect.
	     * @returns {Array|Object} Returns the cast array-like object.
	     */
	    function castArrayLikeObject(value) {
	      return isArrayLikeObject(value) ? value : [];
	    }
	
	    /**
	     * Casts `value` to `identity` if it's not a function.
	     *
	     * @private
	     * @param {*} value The value to inspect.
	     * @returns {Function} Returns cast function.
	     */
	    function castFunction(value) {
	      return typeof value == 'function' ? value : identity;
	    }
	
	    /**
	     * Casts `value` to a path array if it's not one.
	     *
	     * @private
	     * @param {*} value The value to inspect.
	     * @param {Object} [object] The object to query keys on.
	     * @returns {Array} Returns the cast property path array.
	     */
	    function castPath(value, object) {
	      if (isArray(value)) {
	        return value;
	      }
	      return isKey(value, object) ? [value] : stringToPath(toString(value));
	    }
	
	    /**
	     * A `baseRest` alias which can be replaced with `identity` by module
	     * replacement plugins.
	     *
	     * @private
	     * @type {Function}
	     * @param {Function} func The function to apply a rest parameter to.
	     * @returns {Function} Returns the new function.
	     */
	    var castRest = baseRest;
	
	    /**
	     * Casts `array` to a slice if it's needed.
	     *
	     * @private
	     * @param {Array} array The array to inspect.
	     * @param {number} start The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns the cast slice.
	     */
	    function castSlice(array, start, end) {
	      var length = array.length;
	      end = end === undefined ? length : end;
	      return (!start && end >= length) ? array : baseSlice(array, start, end);
	    }
	
	    /**
	     * A simple wrapper around the global [`clearTimeout`](https://mdn.io/clearTimeout).
	     *
	     * @private
	     * @param {number|Object} id The timer id or timeout object of the timer to clear.
	     */
	    var clearTimeout = ctxClearTimeout || function(id) {
	      return root.clearTimeout(id);
	    };
	
	    /**
	     * Creates a clone of  `buffer`.
	     *
	     * @private
	     * @param {Buffer} buffer The buffer to clone.
	     * @param {boolean} [isDeep] Specify a deep clone.
	     * @returns {Buffer} Returns the cloned buffer.
	     */
	    function cloneBuffer(buffer, isDeep) {
	      if (isDeep) {
	        return buffer.slice();
	      }
	      var length = buffer.length,
	          result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
	
	      buffer.copy(result);
	      return result;
	    }
	
	    /**
	     * Creates a clone of `arrayBuffer`.
	     *
	     * @private
	     * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
	     * @returns {ArrayBuffer} Returns the cloned array buffer.
	     */
	    function cloneArrayBuffer(arrayBuffer) {
	      var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
	      new Uint8Array(result).set(new Uint8Array(arrayBuffer));
	      return result;
	    }
	
	    /**
	     * Creates a clone of `dataView`.
	     *
	     * @private
	     * @param {Object} dataView The data view to clone.
	     * @param {boolean} [isDeep] Specify a deep clone.
	     * @returns {Object} Returns the cloned data view.
	     */
	    function cloneDataView(dataView, isDeep) {
	      var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
	      return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
	    }
	
	    /**
	     * Creates a clone of `map`.
	     *
	     * @private
	     * @param {Object} map The map to clone.
	     * @param {Function} cloneFunc The function to clone values.
	     * @param {boolean} [isDeep] Specify a deep clone.
	     * @returns {Object} Returns the cloned map.
	     */
	    function cloneMap(map, isDeep, cloneFunc) {
	      var array = isDeep ? cloneFunc(mapToArray(map), CLONE_DEEP_FLAG) : mapToArray(map);
	      return arrayReduce(array, addMapEntry, new map.constructor);
	    }
	
	    /**
	     * Creates a clone of `regexp`.
	     *
	     * @private
	     * @param {Object} regexp The regexp to clone.
	     * @returns {Object} Returns the cloned regexp.
	     */
	    function cloneRegExp(regexp) {
	      var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
	      result.lastIndex = regexp.lastIndex;
	      return result;
	    }
	
	    /**
	     * Creates a clone of `set`.
	     *
	     * @private
	     * @param {Object} set The set to clone.
	     * @param {Function} cloneFunc The function to clone values.
	     * @param {boolean} [isDeep] Specify a deep clone.
	     * @returns {Object} Returns the cloned set.
	     */
	    function cloneSet(set, isDeep, cloneFunc) {
	      var array = isDeep ? cloneFunc(setToArray(set), CLONE_DEEP_FLAG) : setToArray(set);
	      return arrayReduce(array, addSetEntry, new set.constructor);
	    }
	
	    /**
	     * Creates a clone of the `symbol` object.
	     *
	     * @private
	     * @param {Object} symbol The symbol object to clone.
	     * @returns {Object} Returns the cloned symbol object.
	     */
	    function cloneSymbol(symbol) {
	      return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
	    }
	
	    /**
	     * Creates a clone of `typedArray`.
	     *
	     * @private
	     * @param {Object} typedArray The typed array to clone.
	     * @param {boolean} [isDeep] Specify a deep clone.
	     * @returns {Object} Returns the cloned typed array.
	     */
	    function cloneTypedArray(typedArray, isDeep) {
	      var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
	      return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
	    }
	
	    /**
	     * Compares values to sort them in ascending order.
	     *
	     * @private
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {number} Returns the sort order indicator for `value`.
	     */
	    function compareAscending(value, other) {
	      if (value !== other) {
	        var valIsDefined = value !== undefined,
	            valIsNull = value === null,
	            valIsReflexive = value === value,
	            valIsSymbol = isSymbol(value);
	
	        var othIsDefined = other !== undefined,
	            othIsNull = other === null,
	            othIsReflexive = other === other,
	            othIsSymbol = isSymbol(other);
	
	        if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
	            (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
	            (valIsNull && othIsDefined && othIsReflexive) ||
	            (!valIsDefined && othIsReflexive) ||
	            !valIsReflexive) {
	          return 1;
	        }
	        if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
	            (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
	            (othIsNull && valIsDefined && valIsReflexive) ||
	            (!othIsDefined && valIsReflexive) ||
	            !othIsReflexive) {
	          return -1;
	        }
	      }
	      return 0;
	    }
	
	    /**
	     * Used by `_.orderBy` to compare multiple properties of a value to another
	     * and stable sort them.
	     *
	     * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
	     * specify an order of "desc" for descending or "asc" for ascending sort order
	     * of corresponding values.
	     *
	     * @private
	     * @param {Object} object The object to compare.
	     * @param {Object} other The other object to compare.
	     * @param {boolean[]|string[]} orders The order to sort by for each property.
	     * @returns {number} Returns the sort order indicator for `object`.
	     */
	    function compareMultiple(object, other, orders) {
	      var index = -1,
	          objCriteria = object.criteria,
	          othCriteria = other.criteria,
	          length = objCriteria.length,
	          ordersLength = orders.length;
	
	      while (++index < length) {
	        var result = compareAscending(objCriteria[index], othCriteria[index]);
	        if (result) {
	          if (index >= ordersLength) {
	            return result;
	          }
	          var order = orders[index];
	          return result * (order == 'desc' ? -1 : 1);
	        }
	      }
	      // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
	      // that causes it, under certain circumstances, to provide the same value for
	      // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
	      // for more details.
	      //
	      // This also ensures a stable sort in V8 and other engines.
	      // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
	      return object.index - other.index;
	    }
	
	    /**
	     * Creates an array that is the composition of partially applied arguments,
	     * placeholders, and provided arguments into a single array of arguments.
	     *
	     * @private
	     * @param {Array} args The provided arguments.
	     * @param {Array} partials The arguments to prepend to those provided.
	     * @param {Array} holders The `partials` placeholder indexes.
	     * @params {boolean} [isCurried] Specify composing for a curried function.
	     * @returns {Array} Returns the new array of composed arguments.
	     */
	    function composeArgs(args, partials, holders, isCurried) {
	      var argsIndex = -1,
	          argsLength = args.length,
	          holdersLength = holders.length,
	          leftIndex = -1,
	          leftLength = partials.length,
	          rangeLength = nativeMax(argsLength - holdersLength, 0),
	          result = Array(leftLength + rangeLength),
	          isUncurried = !isCurried;
	
	      while (++leftIndex < leftLength) {
	        result[leftIndex] = partials[leftIndex];
	      }
	      while (++argsIndex < holdersLength) {
	        if (isUncurried || argsIndex < argsLength) {
	          result[holders[argsIndex]] = args[argsIndex];
	        }
	      }
	      while (rangeLength--) {
	        result[leftIndex++] = args[argsIndex++];
	      }
	      return result;
	    }
	
	    /**
	     * This function is like `composeArgs` except that the arguments composition
	     * is tailored for `_.partialRight`.
	     *
	     * @private
	     * @param {Array} args The provided arguments.
	     * @param {Array} partials The arguments to append to those provided.
	     * @param {Array} holders The `partials` placeholder indexes.
	     * @params {boolean} [isCurried] Specify composing for a curried function.
	     * @returns {Array} Returns the new array of composed arguments.
	     */
	    function composeArgsRight(args, partials, holders, isCurried) {
	      var argsIndex = -1,
	          argsLength = args.length,
	          holdersIndex = -1,
	          holdersLength = holders.length,
	          rightIndex = -1,
	          rightLength = partials.length,
	          rangeLength = nativeMax(argsLength - holdersLength, 0),
	          result = Array(rangeLength + rightLength),
	          isUncurried = !isCurried;
	
	      while (++argsIndex < rangeLength) {
	        result[argsIndex] = args[argsIndex];
	      }
	      var offset = argsIndex;
	      while (++rightIndex < rightLength) {
	        result[offset + rightIndex] = partials[rightIndex];
	      }
	      while (++holdersIndex < holdersLength) {
	        if (isUncurried || argsIndex < argsLength) {
	          result[offset + holders[holdersIndex]] = args[argsIndex++];
	        }
	      }
	      return result;
	    }
	
	    /**
	     * Copies the values of `source` to `array`.
	     *
	     * @private
	     * @param {Array} source The array to copy values from.
	     * @param {Array} [array=[]] The array to copy values to.
	     * @returns {Array} Returns `array`.
	     */
	    function copyArray(source, array) {
	      var index = -1,
	          length = source.length;
	
	      array || (array = Array(length));
	      while (++index < length) {
	        array[index] = source[index];
	      }
	      return array;
	    }
	
	    /**
	     * Copies properties of `source` to `object`.
	     *
	     * @private
	     * @param {Object} source The object to copy properties from.
	     * @param {Array} props The property identifiers to copy.
	     * @param {Object} [object={}] The object to copy properties to.
	     * @param {Function} [customizer] The function to customize copied values.
	     * @returns {Object} Returns `object`.
	     */
	    function copyObject(source, props, object, customizer) {
	      var isNew = !object;
	      object || (object = {});
	
	      var index = -1,
	          length = props.length;
	
	      while (++index < length) {
	        var key = props[index];
	
	        var newValue = customizer
	          ? customizer(object[key], source[key], key, object, source)
	          : undefined;
	
	        if (newValue === undefined) {
	          newValue = source[key];
	        }
	        if (isNew) {
	          baseAssignValue(object, key, newValue);
	        } else {
	          assignValue(object, key, newValue);
	        }
	      }
	      return object;
	    }
	
	    /**
	     * Copies own symbols of `source` to `object`.
	     *
	     * @private
	     * @param {Object} source The object to copy symbols from.
	     * @param {Object} [object={}] The object to copy symbols to.
	     * @returns {Object} Returns `object`.
	     */
	    function copySymbols(source, object) {
	      return copyObject(source, getSymbols(source), object);
	    }
	
	    /**
	     * Copies own and inherited symbols of `source` to `object`.
	     *
	     * @private
	     * @param {Object} source The object to copy symbols from.
	     * @param {Object} [object={}] The object to copy symbols to.
	     * @returns {Object} Returns `object`.
	     */
	    function copySymbolsIn(source, object) {
	      return copyObject(source, getSymbolsIn(source), object);
	    }
	
	    /**
	     * Creates a function like `_.groupBy`.
	     *
	     * @private
	     * @param {Function} setter The function to set accumulator values.
	     * @param {Function} [initializer] The accumulator object initializer.
	     * @returns {Function} Returns the new aggregator function.
	     */
	    function createAggregator(setter, initializer) {
	      return function(collection, iteratee) {
	        var func = isArray(collection) ? arrayAggregator : baseAggregator,
	            accumulator = initializer ? initializer() : {};
	
	        return func(collection, setter, getIteratee(iteratee, 2), accumulator);
	      };
	    }
	
	    /**
	     * Creates a function like `_.assign`.
	     *
	     * @private
	     * @param {Function} assigner The function to assign values.
	     * @returns {Function} Returns the new assigner function.
	     */
	    function createAssigner(assigner) {
	      return baseRest(function(object, sources) {
	        var index = -1,
	            length = sources.length,
	            customizer = length > 1 ? sources[length - 1] : undefined,
	            guard = length > 2 ? sources[2] : undefined;
	
	        customizer = (assigner.length > 3 && typeof customizer == 'function')
	          ? (length--, customizer)
	          : undefined;
	
	        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	          customizer = length < 3 ? undefined : customizer;
	          length = 1;
	        }
	        object = Object(object);
	        while (++index < length) {
	          var source = sources[index];
	          if (source) {
	            assigner(object, source, index, customizer);
	          }
	        }
	        return object;
	      });
	    }
	
	    /**
	     * Creates a `baseEach` or `baseEachRight` function.
	     *
	     * @private
	     * @param {Function} eachFunc The function to iterate over a collection.
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new base function.
	     */
	    function createBaseEach(eachFunc, fromRight) {
	      return function(collection, iteratee) {
	        if (collection == null) {
	          return collection;
	        }
	        if (!isArrayLike(collection)) {
	          return eachFunc(collection, iteratee);
	        }
	        var length = collection.length,
	            index = fromRight ? length : -1,
	            iterable = Object(collection);
	
	        while ((fromRight ? index-- : ++index < length)) {
	          if (iteratee(iterable[index], index, iterable) === false) {
	            break;
	          }
	        }
	        return collection;
	      };
	    }
	
	    /**
	     * Creates a base function for methods like `_.forIn` and `_.forOwn`.
	     *
	     * @private
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new base function.
	     */
	    function createBaseFor(fromRight) {
	      return function(object, iteratee, keysFunc) {
	        var index = -1,
	            iterable = Object(object),
	            props = keysFunc(object),
	            length = props.length;
	
	        while (length--) {
	          var key = props[fromRight ? length : ++index];
	          if (iteratee(iterable[key], key, iterable) === false) {
	            break;
	          }
	        }
	        return object;
	      };
	    }
	
	    /**
	     * Creates a function that wraps `func` to invoke it with the optional `this`
	     * binding of `thisArg`.
	     *
	     * @private
	     * @param {Function} func The function to wrap.
	     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	     * @param {*} [thisArg] The `this` binding of `func`.
	     * @returns {Function} Returns the new wrapped function.
	     */
	    function createBind(func, bitmask, thisArg) {
	      var isBind = bitmask & WRAP_BIND_FLAG,
	          Ctor = createCtor(func);
	
	      function wrapper() {
	        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
	        return fn.apply(isBind ? thisArg : this, arguments);
	      }
	      return wrapper;
	    }
	
	    /**
	     * Creates a function like `_.lowerFirst`.
	     *
	     * @private
	     * @param {string} methodName The name of the `String` case method to use.
	     * @returns {Function} Returns the new case function.
	     */
	    function createCaseFirst(methodName) {
	      return function(string) {
	        string = toString(string);
	
	        var strSymbols = hasUnicode(string)
	          ? stringToArray(string)
	          : undefined;
	
	        var chr = strSymbols
	          ? strSymbols[0]
	          : string.charAt(0);
	
	        var trailing = strSymbols
	          ? castSlice(strSymbols, 1).join('')
	          : string.slice(1);
	
	        return chr[methodName]() + trailing;
	      };
	    }
	
	    /**
	     * Creates a function like `_.camelCase`.
	     *
	     * @private
	     * @param {Function} callback The function to combine each word.
	     * @returns {Function} Returns the new compounder function.
	     */
	    function createCompounder(callback) {
	      return function(string) {
	        return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
	      };
	    }
	
	    /**
	     * Creates a function that produces an instance of `Ctor` regardless of
	     * whether it was invoked as part of a `new` expression or by `call` or `apply`.
	     *
	     * @private
	     * @param {Function} Ctor The constructor to wrap.
	     * @returns {Function} Returns the new wrapped function.
	     */
	    function createCtor(Ctor) {
	      return function() {
	        // Use a `switch` statement to work with class constructors. See
	        // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
	        // for more details.
	        var args = arguments;
	        switch (args.length) {
	          case 0: return new Ctor;
	          case 1: return new Ctor(args[0]);
	          case 2: return new Ctor(args[0], args[1]);
	          case 3: return new Ctor(args[0], args[1], args[2]);
	          case 4: return new Ctor(args[0], args[1], args[2], args[3]);
	          case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
	          case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
	          case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
	        }
	        var thisBinding = baseCreate(Ctor.prototype),
	            result = Ctor.apply(thisBinding, args);
	
	        // Mimic the constructor's `return` behavior.
	        // See https://es5.github.io/#x13.2.2 for more details.
	        return isObject(result) ? result : thisBinding;
	      };
	    }
	
	    /**
	     * Creates a function that wraps `func` to enable currying.
	     *
	     * @private
	     * @param {Function} func The function to wrap.
	     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	     * @param {number} arity The arity of `func`.
	     * @returns {Function} Returns the new wrapped function.
	     */
	    function createCurry(func, bitmask, arity) {
	      var Ctor = createCtor(func);
	
	      function wrapper() {
	        var length = arguments.length,
	            args = Array(length),
	            index = length,
	            placeholder = getHolder(wrapper);
	
	        while (index--) {
	          args[index] = arguments[index];
	        }
	        var holders = (length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder)
	          ? []
	          : replaceHolders(args, placeholder);
	
	        length -= holders.length;
	        if (length < arity) {
	          return createRecurry(
	            func, bitmask, createHybrid, wrapper.placeholder, undefined,
	            args, holders, undefined, undefined, arity - length);
	        }
	        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
	        return apply(fn, this, args);
	      }
	      return wrapper;
	    }
	
	    /**
	     * Creates a `_.find` or `_.findLast` function.
	     *
	     * @private
	     * @param {Function} findIndexFunc The function to find the collection index.
	     * @returns {Function} Returns the new find function.
	     */
	    function createFind(findIndexFunc) {
	      return function(collection, predicate, fromIndex) {
	        var iterable = Object(collection);
	        if (!isArrayLike(collection)) {
	          var iteratee = getIteratee(predicate, 3);
	          collection = keys(collection);
	          predicate = function(key) { return iteratee(iterable[key], key, iterable); };
	        }
	        var index = findIndexFunc(collection, predicate, fromIndex);
	        return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
	      };
	    }
	
	    /**
	     * Creates a `_.flow` or `_.flowRight` function.
	     *
	     * @private
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new flow function.
	     */
	    function createFlow(fromRight) {
	      return flatRest(function(funcs) {
	        var length = funcs.length,
	            index = length,
	            prereq = LodashWrapper.prototype.thru;
	
	        if (fromRight) {
	          funcs.reverse();
	        }
	        while (index--) {
	          var func = funcs[index];
	          if (typeof func != 'function') {
	            throw new TypeError(FUNC_ERROR_TEXT);
	          }
	          if (prereq && !wrapper && getFuncName(func) == 'wrapper') {
	            var wrapper = new LodashWrapper([], true);
	          }
	        }
	        index = wrapper ? index : length;
	        while (++index < length) {
	          func = funcs[index];
	
	          var funcName = getFuncName(func),
	              data = funcName == 'wrapper' ? getData(func) : undefined;
	
	          if (data && isLaziable(data[0]) &&
	                data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) &&
	                !data[4].length && data[9] == 1
	              ) {
	            wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
	          } else {
	            wrapper = (func.length == 1 && isLaziable(func))
	              ? wrapper[funcName]()
	              : wrapper.thru(func);
	          }
	        }
	        return function() {
	          var args = arguments,
	              value = args[0];
	
	          if (wrapper && args.length == 1 && isArray(value)) {
	            return wrapper.plant(value).value();
	          }
	          var index = 0,
	              result = length ? funcs[index].apply(this, args) : value;
	
	          while (++index < length) {
	            result = funcs[index].call(this, result);
	          }
	          return result;
	        };
	      });
	    }
	
	    /**
	     * Creates a function that wraps `func` to invoke it with optional `this`
	     * binding of `thisArg`, partial application, and currying.
	     *
	     * @private
	     * @param {Function|string} func The function or method name to wrap.
	     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	     * @param {*} [thisArg] The `this` binding of `func`.
	     * @param {Array} [partials] The arguments to prepend to those provided to
	     *  the new function.
	     * @param {Array} [holders] The `partials` placeholder indexes.
	     * @param {Array} [partialsRight] The arguments to append to those provided
	     *  to the new function.
	     * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
	     * @param {Array} [argPos] The argument positions of the new function.
	     * @param {number} [ary] The arity cap of `func`.
	     * @param {number} [arity] The arity of `func`.
	     * @returns {Function} Returns the new wrapped function.
	     */
	    function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
	      var isAry = bitmask & WRAP_ARY_FLAG,
	          isBind = bitmask & WRAP_BIND_FLAG,
	          isBindKey = bitmask & WRAP_BIND_KEY_FLAG,
	          isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG),
	          isFlip = bitmask & WRAP_FLIP_FLAG,
	          Ctor = isBindKey ? undefined : createCtor(func);
	
	      function wrapper() {
	        var length = arguments.length,
	            args = Array(length),
	            index = length;
	
	        while (index--) {
	          args[index] = arguments[index];
	        }
	        if (isCurried) {
	          var placeholder = getHolder(wrapper),
	              holdersCount = countHolders(args, placeholder);
	        }
	        if (partials) {
	          args = composeArgs(args, partials, holders, isCurried);
	        }
	        if (partialsRight) {
	          args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
	        }
	        length -= holdersCount;
	        if (isCurried && length < arity) {
	          var newHolders = replaceHolders(args, placeholder);
	          return createRecurry(
	            func, bitmask, createHybrid, wrapper.placeholder, thisArg,
	            args, newHolders, argPos, ary, arity - length
	          );
	        }
	        var thisBinding = isBind ? thisArg : this,
	            fn = isBindKey ? thisBinding[func] : func;
	
	        length = args.length;
	        if (argPos) {
	          args = reorder(args, argPos);
	        } else if (isFlip && length > 1) {
	          args.reverse();
	        }
	        if (isAry && ary < length) {
	          args.length = ary;
	        }
	        if (this && this !== root && this instanceof wrapper) {
	          fn = Ctor || createCtor(fn);
	        }
	        return fn.apply(thisBinding, args);
	      }
	      return wrapper;
	    }
	
	    /**
	     * Creates a function like `_.invertBy`.
	     *
	     * @private
	     * @param {Function} setter The function to set accumulator values.
	     * @param {Function} toIteratee The function to resolve iteratees.
	     * @returns {Function} Returns the new inverter function.
	     */
	    function createInverter(setter, toIteratee) {
	      return function(object, iteratee) {
	        return baseInverter(object, setter, toIteratee(iteratee), {});
	      };
	    }
	
	    /**
	     * Creates a function that performs a mathematical operation on two values.
	     *
	     * @private
	     * @param {Function} operator The function to perform the operation.
	     * @param {number} [defaultValue] The value used for `undefined` arguments.
	     * @returns {Function} Returns the new mathematical operation function.
	     */
	    function createMathOperation(operator, defaultValue) {
	      return function(value, other) {
	        var result;
	        if (value === undefined && other === undefined) {
	          return defaultValue;
	        }
	        if (value !== undefined) {
	          result = value;
	        }
	        if (other !== undefined) {
	          if (result === undefined) {
	            return other;
	          }
	          if (typeof value == 'string' || typeof other == 'string') {
	            value = baseToString(value);
	            other = baseToString(other);
	          } else {
	            value = baseToNumber(value);
	            other = baseToNumber(other);
	          }
	          result = operator(value, other);
	        }
	        return result;
	      };
	    }
	
	    /**
	     * Creates a function like `_.over`.
	     *
	     * @private
	     * @param {Function} arrayFunc The function to iterate over iteratees.
	     * @returns {Function} Returns the new over function.
	     */
	    function createOver(arrayFunc) {
	      return flatRest(function(iteratees) {
	        iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
	        return baseRest(function(args) {
	          var thisArg = this;
	          return arrayFunc(iteratees, function(iteratee) {
	            return apply(iteratee, thisArg, args);
	          });
	        });
	      });
	    }
	
	    /**
	     * Creates the padding for `string` based on `length`. The `chars` string
	     * is truncated if the number of characters exceeds `length`.
	     *
	     * @private
	     * @param {number} length The padding length.
	     * @param {string} [chars=' '] The string used as padding.
	     * @returns {string} Returns the padding for `string`.
	     */
	    function createPadding(length, chars) {
	      chars = chars === undefined ? ' ' : baseToString(chars);
	
	      var charsLength = chars.length;
	      if (charsLength < 2) {
	        return charsLength ? baseRepeat(chars, length) : chars;
	      }
	      var result = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
	      return hasUnicode(chars)
	        ? castSlice(stringToArray(result), 0, length).join('')
	        : result.slice(0, length);
	    }
	
	    /**
	     * Creates a function that wraps `func` to invoke it with the `this` binding
	     * of `thisArg` and `partials` prepended to the arguments it receives.
	     *
	     * @private
	     * @param {Function} func The function to wrap.
	     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	     * @param {*} thisArg The `this` binding of `func`.
	     * @param {Array} partials The arguments to prepend to those provided to
	     *  the new function.
	     * @returns {Function} Returns the new wrapped function.
	     */
	    function createPartial(func, bitmask, thisArg, partials) {
	      var isBind = bitmask & WRAP_BIND_FLAG,
	          Ctor = createCtor(func);
	
	      function wrapper() {
	        var argsIndex = -1,
	            argsLength = arguments.length,
	            leftIndex = -1,
	            leftLength = partials.length,
	            args = Array(leftLength + argsLength),
	            fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
	
	        while (++leftIndex < leftLength) {
	          args[leftIndex] = partials[leftIndex];
	        }
	        while (argsLength--) {
	          args[leftIndex++] = arguments[++argsIndex];
	        }
	        return apply(fn, isBind ? thisArg : this, args);
	      }
	      return wrapper;
	    }
	
	    /**
	     * Creates a `_.range` or `_.rangeRight` function.
	     *
	     * @private
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new range function.
	     */
	    function createRange(fromRight) {
	      return function(start, end, step) {
	        if (step && typeof step != 'number' && isIterateeCall(start, end, step)) {
	          end = step = undefined;
	        }
	        // Ensure the sign of `-0` is preserved.
	        start = toFinite(start);
	        if (end === undefined) {
	          end = start;
	          start = 0;
	        } else {
	          end = toFinite(end);
	        }
	        step = step === undefined ? (start < end ? 1 : -1) : toFinite(step);
	        return baseRange(start, end, step, fromRight);
	      };
	    }
	
	    /**
	     * Creates a function that performs a relational operation on two values.
	     *
	     * @private
	     * @param {Function} operator The function to perform the operation.
	     * @returns {Function} Returns the new relational operation function.
	     */
	    function createRelationalOperation(operator) {
	      return function(value, other) {
	        if (!(typeof value == 'string' && typeof other == 'string')) {
	          value = toNumber(value);
	          other = toNumber(other);
	        }
	        return operator(value, other);
	      };
	    }
	
	    /**
	     * Creates a function that wraps `func` to continue currying.
	     *
	     * @private
	     * @param {Function} func The function to wrap.
	     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	     * @param {Function} wrapFunc The function to create the `func` wrapper.
	     * @param {*} placeholder The placeholder value.
	     * @param {*} [thisArg] The `this` binding of `func`.
	     * @param {Array} [partials] The arguments to prepend to those provided to
	     *  the new function.
	     * @param {Array} [holders] The `partials` placeholder indexes.
	     * @param {Array} [argPos] The argument positions of the new function.
	     * @param {number} [ary] The arity cap of `func`.
	     * @param {number} [arity] The arity of `func`.
	     * @returns {Function} Returns the new wrapped function.
	     */
	    function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
	      var isCurry = bitmask & WRAP_CURRY_FLAG,
	          newHolders = isCurry ? holders : undefined,
	          newHoldersRight = isCurry ? undefined : holders,
	          newPartials = isCurry ? partials : undefined,
	          newPartialsRight = isCurry ? undefined : partials;
	
	      bitmask |= (isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG);
	      bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);
	
	      if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
	        bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
	      }
	      var newData = [
	        func, bitmask, thisArg, newPartials, newHolders, newPartialsRight,
	        newHoldersRight, argPos, ary, arity
	      ];
	
	      var result = wrapFunc.apply(undefined, newData);
	      if (isLaziable(func)) {
	        setData(result, newData);
	      }
	      result.placeholder = placeholder;
	      return setWrapToString(result, func, bitmask);
	    }
	
	    /**
	     * Creates a function like `_.round`.
	     *
	     * @private
	     * @param {string} methodName The name of the `Math` method to use when rounding.
	     * @returns {Function} Returns the new round function.
	     */
	    function createRound(methodName) {
	      var func = Math[methodName];
	      return function(number, precision) {
	        number = toNumber(number);
	        precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
	        if (precision) {
	          // Shift with exponential notation to avoid floating-point issues.
	          // See [MDN](https://mdn.io/round#Examples) for more details.
	          var pair = (toString(number) + 'e').split('e'),
	              value = func(pair[0] + 'e' + (+pair[1] + precision));
	
	          pair = (toString(value) + 'e').split('e');
	          return +(pair[0] + 'e' + (+pair[1] - precision));
	        }
	        return func(number);
	      };
	    }
	
	    /**
	     * Creates a set object of `values`.
	     *
	     * @private
	     * @param {Array} values The values to add to the set.
	     * @returns {Object} Returns the new set.
	     */
	    var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
	      return new Set(values);
	    };
	
	    /**
	     * Creates a `_.toPairs` or `_.toPairsIn` function.
	     *
	     * @private
	     * @param {Function} keysFunc The function to get the keys of a given object.
	     * @returns {Function} Returns the new pairs function.
	     */
	    function createToPairs(keysFunc) {
	      return function(object) {
	        var tag = getTag(object);
	        if (tag == mapTag) {
	          return mapToArray(object);
	        }
	        if (tag == setTag) {
	          return setToPairs(object);
	        }
	        return baseToPairs(object, keysFunc(object));
	      };
	    }
	
	    /**
	     * Creates a function that either curries or invokes `func` with optional
	     * `this` binding and partially applied arguments.
	     *
	     * @private
	     * @param {Function|string} func The function or method name to wrap.
	     * @param {number} bitmask The bitmask flags.
	     *    1 - `_.bind`
	     *    2 - `_.bindKey`
	     *    4 - `_.curry` or `_.curryRight` of a bound function
	     *    8 - `_.curry`
	     *   16 - `_.curryRight`
	     *   32 - `_.partial`
	     *   64 - `_.partialRight`
	     *  128 - `_.rearg`
	     *  256 - `_.ary`
	     *  512 - `_.flip`
	     * @param {*} [thisArg] The `this` binding of `func`.
	     * @param {Array} [partials] The arguments to be partially applied.
	     * @param {Array} [holders] The `partials` placeholder indexes.
	     * @param {Array} [argPos] The argument positions of the new function.
	     * @param {number} [ary] The arity cap of `func`.
	     * @param {number} [arity] The arity of `func`.
	     * @returns {Function} Returns the new wrapped function.
	     */
	    function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
	      var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
	      if (!isBindKey && typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      var length = partials ? partials.length : 0;
	      if (!length) {
	        bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
	        partials = holders = undefined;
	      }
	      ary = ary === undefined ? ary : nativeMax(toInteger(ary), 0);
	      arity = arity === undefined ? arity : toInteger(arity);
	      length -= holders ? holders.length : 0;
	
	      if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
	        var partialsRight = partials,
	            holdersRight = holders;
	
	        partials = holders = undefined;
	      }
	      var data = isBindKey ? undefined : getData(func);
	
	      var newData = [
	        func, bitmask, thisArg, partials, holders, partialsRight, holdersRight,
	        argPos, ary, arity
	      ];
	
	      if (data) {
	        mergeData(newData, data);
	      }
	      func = newData[0];
	      bitmask = newData[1];
	      thisArg = newData[2];
	      partials = newData[3];
	      holders = newData[4];
	      arity = newData[9] = newData[9] === undefined
	        ? (isBindKey ? 0 : func.length)
	        : nativeMax(newData[9] - length, 0);
	
	      if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
	        bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
	      }
	      if (!bitmask || bitmask == WRAP_BIND_FLAG) {
	        var result = createBind(func, bitmask, thisArg);
	      } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
	        result = createCurry(func, bitmask, arity);
	      } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
	        result = createPartial(func, bitmask, thisArg, partials);
	      } else {
	        result = createHybrid.apply(undefined, newData);
	      }
	      var setter = data ? baseSetData : setData;
	      return setWrapToString(setter(result, newData), func, bitmask);
	    }
	
	    /**
	     * Used by `_.defaults` to customize its `_.assignIn` use to assign properties
	     * of source objects to the destination object for all destination properties
	     * that resolve to `undefined`.
	     *
	     * @private
	     * @param {*} objValue The destination value.
	     * @param {*} srcValue The source value.
	     * @param {string} key The key of the property to assign.
	     * @param {Object} object The parent object of `objValue`.
	     * @returns {*} Returns the value to assign.
	     */
	    function customDefaultsAssignIn(objValue, srcValue, key, object) {
	      if (objValue === undefined ||
	          (eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key))) {
	        return srcValue;
	      }
	      return objValue;
	    }
	
	    /**
	     * Used by `_.defaultsDeep` to customize its `_.merge` use to merge source
	     * objects into destination objects that are passed thru.
	     *
	     * @private
	     * @param {*} objValue The destination value.
	     * @param {*} srcValue The source value.
	     * @param {string} key The key of the property to merge.
	     * @param {Object} object The parent object of `objValue`.
	     * @param {Object} source The parent object of `srcValue`.
	     * @param {Object} [stack] Tracks traversed source values and their merged
	     *  counterparts.
	     * @returns {*} Returns the value to assign.
	     */
	    function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
	      if (isObject(objValue) && isObject(srcValue)) {
	        // Recursively merge objects and arrays (susceptible to call stack limits).
	        stack.set(srcValue, objValue);
	        baseMerge(objValue, srcValue, undefined, customDefaultsMerge, stack);
	        stack['delete'](srcValue);
	      }
	      return objValue;
	    }
	
	    /**
	     * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
	     * objects.
	     *
	     * @private
	     * @param {*} value The value to inspect.
	     * @param {string} key The key of the property to inspect.
	     * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
	     */
	    function customOmitClone(value) {
	      return isPlainObject(value) ? undefined : value;
	    }
	
	    /**
	     * A specialized version of `baseIsEqualDeep` for arrays with support for
	     * partial deep comparisons.
	     *
	     * @private
	     * @param {Array} array The array to compare.
	     * @param {Array} other The other array to compare.
	     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	     * @param {Function} customizer The function to customize comparisons.
	     * @param {Function} equalFunc The function to determine equivalents of values.
	     * @param {Object} stack Tracks traversed `array` and `other` objects.
	     * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	     */
	    function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
	      var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
	          arrLength = array.length,
	          othLength = other.length;
	
	      if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	        return false;
	      }
	      // Assume cyclic values are equal.
	      var stacked = stack.get(array);
	      if (stacked && stack.get(other)) {
	        return stacked == other;
	      }
	      var index = -1,
	          result = true,
	          seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;
	
	      stack.set(array, other);
	      stack.set(other, array);
	
	      // Ignore non-index properties.
	      while (++index < arrLength) {
	        var arrValue = array[index],
	            othValue = other[index];
	
	        if (customizer) {
	          var compared = isPartial
	            ? customizer(othValue, arrValue, index, other, array, stack)
	            : customizer(arrValue, othValue, index, array, other, stack);
	        }
	        if (compared !== undefined) {
	          if (compared) {
	            continue;
	          }
	          result = false;
	          break;
	        }
	        // Recursively compare arrays (susceptible to call stack limits).
	        if (seen) {
	          if (!arraySome(other, function(othValue, othIndex) {
	                if (!cacheHas(seen, othIndex) &&
	                    (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
	                  return seen.push(othIndex);
	                }
	              })) {
	            result = false;
	            break;
	          }
	        } else if (!(
	              arrValue === othValue ||
	                equalFunc(arrValue, othValue, bitmask, customizer, stack)
	            )) {
	          result = false;
	          break;
	        }
	      }
	      stack['delete'](array);
	      stack['delete'](other);
	      return result;
	    }
	
	    /**
	     * A specialized version of `baseIsEqualDeep` for comparing objects of
	     * the same `toStringTag`.
	     *
	     * **Note:** This function only supports comparing values with tags of
	     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	     *
	     * @private
	     * @param {Object} object The object to compare.
	     * @param {Object} other The other object to compare.
	     * @param {string} tag The `toStringTag` of the objects to compare.
	     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	     * @param {Function} customizer The function to customize comparisons.
	     * @param {Function} equalFunc The function to determine equivalents of values.
	     * @param {Object} stack Tracks traversed `object` and `other` objects.
	     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	     */
	    function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
	      switch (tag) {
	        case dataViewTag:
	          if ((object.byteLength != other.byteLength) ||
	              (object.byteOffset != other.byteOffset)) {
	            return false;
	          }
	          object = object.buffer;
	          other = other.buffer;
	
	        case arrayBufferTag:
	          if ((object.byteLength != other.byteLength) ||
	              !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
	            return false;
	          }
	          return true;
	
	        case boolTag:
	        case dateTag:
	        case numberTag:
	          // Coerce booleans to `1` or `0` and dates to milliseconds.
	          // Invalid dates are coerced to `NaN`.
	          return eq(+object, +other);
	
	        case errorTag:
	          return object.name == other.name && object.message == other.message;
	
	        case regexpTag:
	        case stringTag:
	          // Coerce regexes to strings and treat strings, primitives and objects,
	          // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
	          // for more details.
	          return object == (other + '');
	
	        case mapTag:
	          var convert = mapToArray;
	
	        case setTag:
	          var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
	          convert || (convert = setToArray);
	
	          if (object.size != other.size && !isPartial) {
	            return false;
	          }
	          // Assume cyclic values are equal.
	          var stacked = stack.get(object);
	          if (stacked) {
	            return stacked == other;
	          }
	          bitmask |= COMPARE_UNORDERED_FLAG;
	
	          // Recursively compare objects (susceptible to call stack limits).
	          stack.set(object, other);
	          var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
	          stack['delete'](object);
	          return result;
	
	        case symbolTag:
	          if (symbolValueOf) {
	            return symbolValueOf.call(object) == symbolValueOf.call(other);
	          }
	      }
	      return false;
	    }
	
	    /**
	     * A specialized version of `baseIsEqualDeep` for objects with support for
	     * partial deep comparisons.
	     *
	     * @private
	     * @param {Object} object The object to compare.
	     * @param {Object} other The other object to compare.
	     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	     * @param {Function} customizer The function to customize comparisons.
	     * @param {Function} equalFunc The function to determine equivalents of values.
	     * @param {Object} stack Tracks traversed `object` and `other` objects.
	     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	     */
	    function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
	      var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
	          objProps = getAllKeys(object),
	          objLength = objProps.length,
	          othProps = getAllKeys(other),
	          othLength = othProps.length;
	
	      if (objLength != othLength && !isPartial) {
	        return false;
	      }
	      var index = objLength;
	      while (index--) {
	        var key = objProps[index];
	        if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
	          return false;
	        }
	      }
	      // Assume cyclic values are equal.
	      var stacked = stack.get(object);
	      if (stacked && stack.get(other)) {
	        return stacked == other;
	      }
	      var result = true;
	      stack.set(object, other);
	      stack.set(other, object);
	
	      var skipCtor = isPartial;
	      while (++index < objLength) {
	        key = objProps[index];
	        var objValue = object[key],
	            othValue = other[key];
	
	        if (customizer) {
	          var compared = isPartial
	            ? customizer(othValue, objValue, key, other, object, stack)
	            : customizer(objValue, othValue, key, object, other, stack);
	        }
	        // Recursively compare objects (susceptible to call stack limits).
	        if (!(compared === undefined
	              ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
	              : compared
	            )) {
	          result = false;
	          break;
	        }
	        skipCtor || (skipCtor = key == 'constructor');
	      }
	      if (result && !skipCtor) {
	        var objCtor = object.constructor,
	            othCtor = other.constructor;
	
	        // Non `Object` object instances with different constructors are not equal.
	        if (objCtor != othCtor &&
	            ('constructor' in object && 'constructor' in other) &&
	            !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	              typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	          result = false;
	        }
	      }
	      stack['delete'](object);
	      stack['delete'](other);
	      return result;
	    }
	
	    /**
	     * A specialized version of `baseRest` which flattens the rest array.
	     *
	     * @private
	     * @param {Function} func The function to apply a rest parameter to.
	     * @returns {Function} Returns the new function.
	     */
	    function flatRest(func) {
	      return setToString(overRest(func, undefined, flatten), func + '');
	    }
	
	    /**
	     * Creates an array of own enumerable property names and symbols of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names and symbols.
	     */
	    function getAllKeys(object) {
	      return baseGetAllKeys(object, keys, getSymbols);
	    }
	
	    /**
	     * Creates an array of own and inherited enumerable property names and
	     * symbols of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names and symbols.
	     */
	    function getAllKeysIn(object) {
	      return baseGetAllKeys(object, keysIn, getSymbolsIn);
	    }
	
	    /**
	     * Gets metadata for `func`.
	     *
	     * @private
	     * @param {Function} func The function to query.
	     * @returns {*} Returns the metadata for `func`.
	     */
	    var getData = !metaMap ? noop : function(func) {
	      return metaMap.get(func);
	    };
	
	    /**
	     * Gets the name of `func`.
	     *
	     * @private
	     * @param {Function} func The function to query.
	     * @returns {string} Returns the function name.
	     */
	    function getFuncName(func) {
	      var result = (func.name + ''),
	          array = realNames[result],
	          length = hasOwnProperty.call(realNames, result) ? array.length : 0;
	
	      while (length--) {
	        var data = array[length],
	            otherFunc = data.func;
	        if (otherFunc == null || otherFunc == func) {
	          return data.name;
	        }
	      }
	      return result;
	    }
	
	    /**
	     * Gets the argument placeholder value for `func`.
	     *
	     * @private
	     * @param {Function} func The function to inspect.
	     * @returns {*} Returns the placeholder value.
	     */
	    function getHolder(func) {
	      var object = hasOwnProperty.call(lodash, 'placeholder') ? lodash : func;
	      return object.placeholder;
	    }
	
	    /**
	     * Gets the appropriate "iteratee" function. If `_.iteratee` is customized,
	     * this function returns the custom method, otherwise it returns `baseIteratee`.
	     * If arguments are provided, the chosen function is invoked with them and
	     * its result is returned.
	     *
	     * @private
	     * @param {*} [value] The value to convert to an iteratee.
	     * @param {number} [arity] The arity of the created iteratee.
	     * @returns {Function} Returns the chosen function or its result.
	     */
	    function getIteratee() {
	      var result = lodash.iteratee || iteratee;
	      result = result === iteratee ? baseIteratee : result;
	      return arguments.length ? result(arguments[0], arguments[1]) : result;
	    }
	
	    /**
	     * Gets the data for `map`.
	     *
	     * @private
	     * @param {Object} map The map to query.
	     * @param {string} key The reference key.
	     * @returns {*} Returns the map data.
	     */
	    function getMapData(map, key) {
	      var data = map.__data__;
	      return isKeyable(key)
	        ? data[typeof key == 'string' ? 'string' : 'hash']
	        : data.map;
	    }
	
	    /**
	     * Gets the property names, values, and compare flags of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the match data of `object`.
	     */
	    function getMatchData(object) {
	      var result = keys(object),
	          length = result.length;
	
	      while (length--) {
	        var key = result[length],
	            value = object[key];
	
	        result[length] = [key, value, isStrictComparable(value)];
	      }
	      return result;
	    }
	
	    /**
	     * Gets the native function at `key` of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {string} key The key of the method to get.
	     * @returns {*} Returns the function if it's native, else `undefined`.
	     */
	    function getNative(object, key) {
	      var value = getValue(object, key);
	      return baseIsNative(value) ? value : undefined;
	    }
	
	    /**
	     * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	     *
	     * @private
	     * @param {*} value The value to query.
	     * @returns {string} Returns the raw `toStringTag`.
	     */
	    function getRawTag(value) {
	      var isOwn = hasOwnProperty.call(value, symToStringTag),
	          tag = value[symToStringTag];
	
	      try {
	        value[symToStringTag] = undefined;
	        var unmasked = true;
	      } catch (e) {}
	
	      var result = nativeObjectToString.call(value);
	      if (unmasked) {
	        if (isOwn) {
	          value[symToStringTag] = tag;
	        } else {
	          delete value[symToStringTag];
	        }
	      }
	      return result;
	    }
	
	    /**
	     * Creates an array of the own enumerable symbols of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of symbols.
	     */
	    var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
	      if (object == null) {
	        return [];
	      }
	      object = Object(object);
	      return arrayFilter(nativeGetSymbols(object), function(symbol) {
	        return propertyIsEnumerable.call(object, symbol);
	      });
	    };
	
	    /**
	     * Creates an array of the own and inherited enumerable symbols of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of symbols.
	     */
	    var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
	      var result = [];
	      while (object) {
	        arrayPush(result, getSymbols(object));
	        object = getPrototype(object);
	      }
	      return result;
	    };
	
	    /**
	     * Gets the `toStringTag` of `value`.
	     *
	     * @private
	     * @param {*} value The value to query.
	     * @returns {string} Returns the `toStringTag`.
	     */
	    var getTag = baseGetTag;
	
	    // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
	    if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
	        (Map && getTag(new Map) != mapTag) ||
	        (Promise && getTag(Promise.resolve()) != promiseTag) ||
	        (Set && getTag(new Set) != setTag) ||
	        (WeakMap && getTag(new WeakMap) != weakMapTag)) {
	      getTag = function(value) {
	        var result = baseGetTag(value),
	            Ctor = result == objectTag ? value.constructor : undefined,
	            ctorString = Ctor ? toSource(Ctor) : '';
	
	        if (ctorString) {
	          switch (ctorString) {
	            case dataViewCtorString: return dataViewTag;
	            case mapCtorString: return mapTag;
	            case promiseCtorString: return promiseTag;
	            case setCtorString: return setTag;
	            case weakMapCtorString: return weakMapTag;
	          }
	        }
	        return result;
	      };
	    }
	
	    /**
	     * Gets the view, applying any `transforms` to the `start` and `end` positions.
	     *
	     * @private
	     * @param {number} start The start of the view.
	     * @param {number} end The end of the view.
	     * @param {Array} transforms The transformations to apply to the view.
	     * @returns {Object} Returns an object containing the `start` and `end`
	     *  positions of the view.
	     */
	    function getView(start, end, transforms) {
	      var index = -1,
	          length = transforms.length;
	
	      while (++index < length) {
	        var data = transforms[index],
	            size = data.size;
	
	        switch (data.type) {
	          case 'drop':      start += size; break;
	          case 'dropRight': end -= size; break;
	          case 'take':      end = nativeMin(end, start + size); break;
	          case 'takeRight': start = nativeMax(start, end - size); break;
	        }
	      }
	      return { 'start': start, 'end': end };
	    }
	
	    /**
	     * Extracts wrapper details from the `source` body comment.
	     *
	     * @private
	     * @param {string} source The source to inspect.
	     * @returns {Array} Returns the wrapper details.
	     */
	    function getWrapDetails(source) {
	      var match = source.match(reWrapDetails);
	      return match ? match[1].split(reSplitDetails) : [];
	    }
	
	    /**
	     * Checks if `path` exists on `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path to check.
	     * @param {Function} hasFunc The function to check properties.
	     * @returns {boolean} Returns `true` if `path` exists, else `false`.
	     */
	    function hasPath(object, path, hasFunc) {
	      path = castPath(path, object);
	
	      var index = -1,
	          length = path.length,
	          result = false;
	
	      while (++index < length) {
	        var key = toKey(path[index]);
	        if (!(result = object != null && hasFunc(object, key))) {
	          break;
	        }
	        object = object[key];
	      }
	      if (result || ++index != length) {
	        return result;
	      }
	      length = object == null ? 0 : object.length;
	      return !!length && isLength(length) && isIndex(key, length) &&
	        (isArray(object) || isArguments(object));
	    }
	
	    /**
	     * Initializes an array clone.
	     *
	     * @private
	     * @param {Array} array The array to clone.
	     * @returns {Array} Returns the initialized clone.
	     */
	    function initCloneArray(array) {
	      var length = array.length,
	          result = array.constructor(length);
	
	      // Add properties assigned by `RegExp#exec`.
	      if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
	        result.index = array.index;
	        result.input = array.input;
	      }
	      return result;
	    }
	
	    /**
	     * Initializes an object clone.
	     *
	     * @private
	     * @param {Object} object The object to clone.
	     * @returns {Object} Returns the initialized clone.
	     */
	    function initCloneObject(object) {
	      return (typeof object.constructor == 'function' && !isPrototype(object))
	        ? baseCreate(getPrototype(object))
	        : {};
	    }
	
	    /**
	     * Initializes an object clone based on its `toStringTag`.
	     *
	     * **Note:** This function only supports cloning values with tags of
	     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	     *
	     * @private
	     * @param {Object} object The object to clone.
	     * @param {string} tag The `toStringTag` of the object to clone.
	     * @param {Function} cloneFunc The function to clone values.
	     * @param {boolean} [isDeep] Specify a deep clone.
	     * @returns {Object} Returns the initialized clone.
	     */
	    function initCloneByTag(object, tag, cloneFunc, isDeep) {
	      var Ctor = object.constructor;
	      switch (tag) {
	        case arrayBufferTag:
	          return cloneArrayBuffer(object);
	
	        case boolTag:
	        case dateTag:
	          return new Ctor(+object);
	
	        case dataViewTag:
	          return cloneDataView(object, isDeep);
	
	        case float32Tag: case float64Tag:
	        case int8Tag: case int16Tag: case int32Tag:
	        case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
	          return cloneTypedArray(object, isDeep);
	
	        case mapTag:
	          return cloneMap(object, isDeep, cloneFunc);
	
	        case numberTag:
	        case stringTag:
	          return new Ctor(object);
	
	        case regexpTag:
	          return cloneRegExp(object);
	
	        case setTag:
	          return cloneSet(object, isDeep, cloneFunc);
	
	        case symbolTag:
	          return cloneSymbol(object);
	      }
	    }
	
	    /**
	     * Inserts wrapper `details` in a comment at the top of the `source` body.
	     *
	     * @private
	     * @param {string} source The source to modify.
	     * @returns {Array} details The details to insert.
	     * @returns {string} Returns the modified source.
	     */
	    function insertWrapDetails(source, details) {
	      var length = details.length;
	      if (!length) {
	        return source;
	      }
	      var lastIndex = length - 1;
	      details[lastIndex] = (length > 1 ? '& ' : '') + details[lastIndex];
	      details = details.join(length > 2 ? ', ' : ' ');
	      return source.replace(reWrapComment, '{\n/* [wrapped with ' + details + '] */\n');
	    }
	
	    /**
	     * Checks if `value` is a flattenable `arguments` object or array.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
	     */
	    function isFlattenable(value) {
	      return isArray(value) || isArguments(value) ||
	        !!(spreadableSymbol && value && value[spreadableSymbol]);
	    }
	
	    /**
	     * Checks if `value` is a valid array-like index.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	     * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	     */
	    function isIndex(value, length) {
	      length = length == null ? MAX_SAFE_INTEGER : length;
	      return !!length &&
	        (typeof value == 'number' || reIsUint.test(value)) &&
	        (value > -1 && value % 1 == 0 && value < length);
	    }
	
	    /**
	     * Checks if the given arguments are from an iteratee call.
	     *
	     * @private
	     * @param {*} value The potential iteratee value argument.
	     * @param {*} index The potential iteratee index or key argument.
	     * @param {*} object The potential iteratee object argument.
	     * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	     *  else `false`.
	     */
	    function isIterateeCall(value, index, object) {
	      if (!isObject(object)) {
	        return false;
	      }
	      var type = typeof index;
	      if (type == 'number'
	            ? (isArrayLike(object) && isIndex(index, object.length))
	            : (type == 'string' && index in object)
	          ) {
	        return eq(object[index], value);
	      }
	      return false;
	    }
	
	    /**
	     * Checks if `value` is a property name and not a property path.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @param {Object} [object] The object to query keys on.
	     * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	     */
	    function isKey(value, object) {
	      if (isArray(value)) {
	        return false;
	      }
	      var type = typeof value;
	      if (type == 'number' || type == 'symbol' || type == 'boolean' ||
	          value == null || isSymbol(value)) {
	        return true;
	      }
	      return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
	        (object != null && value in Object(object));
	    }
	
	    /**
	     * Checks if `value` is suitable for use as unique object key.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	     */
	    function isKeyable(value) {
	      var type = typeof value;
	      return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	        ? (value !== '__proto__')
	        : (value === null);
	    }
	
	    /**
	     * Checks if `func` has a lazy counterpart.
	     *
	     * @private
	     * @param {Function} func The function to check.
	     * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
	     *  else `false`.
	     */
	    function isLaziable(func) {
	      var funcName = getFuncName(func),
	          other = lodash[funcName];
	
	      if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
	        return false;
	      }
	      if (func === other) {
	        return true;
	      }
	      var data = getData(other);
	      return !!data && func === data[0];
	    }
	
	    /**
	     * Checks if `func` has its source masked.
	     *
	     * @private
	     * @param {Function} func The function to check.
	     * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	     */
	    function isMasked(func) {
	      return !!maskSrcKey && (maskSrcKey in func);
	    }
	
	    /**
	     * Checks if `func` is capable of being masked.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `func` is maskable, else `false`.
	     */
	    var isMaskable = coreJsData ? isFunction : stubFalse;
	
	    /**
	     * Checks if `value` is likely a prototype object.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	     */
	    function isPrototype(value) {
	      var Ctor = value && value.constructor,
	          proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;
	
	      return value === proto;
	    }
	
	    /**
	     * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` if suitable for strict
	     *  equality comparisons, else `false`.
	     */
	    function isStrictComparable(value) {
	      return value === value && !isObject(value);
	    }
	
	    /**
	     * A specialized version of `matchesProperty` for source values suitable
	     * for strict equality comparisons, i.e. `===`.
	     *
	     * @private
	     * @param {string} key The key of the property to get.
	     * @param {*} srcValue The value to match.
	     * @returns {Function} Returns the new spec function.
	     */
	    function matchesStrictComparable(key, srcValue) {
	      return function(object) {
	        if (object == null) {
	          return false;
	        }
	        return object[key] === srcValue &&
	          (srcValue !== undefined || (key in Object(object)));
	      };
	    }
	
	    /**
	     * A specialized version of `_.memoize` which clears the memoized function's
	     * cache when it exceeds `MAX_MEMOIZE_SIZE`.
	     *
	     * @private
	     * @param {Function} func The function to have its output memoized.
	     * @returns {Function} Returns the new memoized function.
	     */
	    function memoizeCapped(func) {
	      var result = memoize(func, function(key) {
	        if (cache.size === MAX_MEMOIZE_SIZE) {
	          cache.clear();
	        }
	        return key;
	      });
	
	      var cache = result.cache;
	      return result;
	    }
	
	    /**
	     * Merges the function metadata of `source` into `data`.
	     *
	     * Merging metadata reduces the number of wrappers used to invoke a function.
	     * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
	     * may be applied regardless of execution order. Methods like `_.ary` and
	     * `_.rearg` modify function arguments, making the order in which they are
	     * executed important, preventing the merging of metadata. However, we make
	     * an exception for a safe combined case where curried functions have `_.ary`
	     * and or `_.rearg` applied.
	     *
	     * @private
	     * @param {Array} data The destination metadata.
	     * @param {Array} source The source metadata.
	     * @returns {Array} Returns `data`.
	     */
	    function mergeData(data, source) {
	      var bitmask = data[1],
	          srcBitmask = source[1],
	          newBitmask = bitmask | srcBitmask,
	          isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);
	
	      var isCombo =
	        ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_CURRY_FLAG)) ||
	        ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_REARG_FLAG) && (data[7].length <= source[8])) ||
	        ((srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG)) && (source[7].length <= source[8]) && (bitmask == WRAP_CURRY_FLAG));
	
	      // Exit early if metadata can't be merged.
	      if (!(isCommon || isCombo)) {
	        return data;
	      }
	      // Use source `thisArg` if available.
	      if (srcBitmask & WRAP_BIND_FLAG) {
	        data[2] = source[2];
	        // Set when currying a bound function.
	        newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
	      }
	      // Compose partial arguments.
	      var value = source[3];
	      if (value) {
	        var partials = data[3];
	        data[3] = partials ? composeArgs(partials, value, source[4]) : value;
	        data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
	      }
	      // Compose partial right arguments.
	      value = source[5];
	      if (value) {
	        partials = data[5];
	        data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
	        data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
	      }
	      // Use source `argPos` if available.
	      value = source[7];
	      if (value) {
	        data[7] = value;
	      }
	      // Use source `ary` if it's smaller.
	      if (srcBitmask & WRAP_ARY_FLAG) {
	        data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
	      }
	      // Use source `arity` if one is not provided.
	      if (data[9] == null) {
	        data[9] = source[9];
	      }
	      // Use source `func` and merge bitmasks.
	      data[0] = source[0];
	      data[1] = newBitmask;
	
	      return data;
	    }
	
	    /**
	     * This function is like
	     * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	     * except that it includes inherited enumerable properties.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names.
	     */
	    function nativeKeysIn(object) {
	      var result = [];
	      if (object != null) {
	        for (var key in Object(object)) {
	          result.push(key);
	        }
	      }
	      return result;
	    }
	
	    /**
	     * Converts `value` to a string using `Object.prototype.toString`.
	     *
	     * @private
	     * @param {*} value The value to convert.
	     * @returns {string} Returns the converted string.
	     */
	    function objectToString(value) {
	      return nativeObjectToString.call(value);
	    }
	
	    /**
	     * A specialized version of `baseRest` which transforms the rest array.
	     *
	     * @private
	     * @param {Function} func The function to apply a rest parameter to.
	     * @param {number} [start=func.length-1] The start position of the rest parameter.
	     * @param {Function} transform The rest array transform.
	     * @returns {Function} Returns the new function.
	     */
	    function overRest(func, start, transform) {
	      start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
	      return function() {
	        var args = arguments,
	            index = -1,
	            length = nativeMax(args.length - start, 0),
	            array = Array(length);
	
	        while (++index < length) {
	          array[index] = args[start + index];
	        }
	        index = -1;
	        var otherArgs = Array(start + 1);
	        while (++index < start) {
	          otherArgs[index] = args[index];
	        }
	        otherArgs[start] = transform(array);
	        return apply(func, this, otherArgs);
	      };
	    }
	
	    /**
	     * Gets the parent value at `path` of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {Array} path The path to get the parent value of.
	     * @returns {*} Returns the parent value.
	     */
	    function parent(object, path) {
	      return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
	    }
	
	    /**
	     * Reorder `array` according to the specified indexes where the element at
	     * the first index is assigned as the first element, the element at
	     * the second index is assigned as the second element, and so on.
	     *
	     * @private
	     * @param {Array} array The array to reorder.
	     * @param {Array} indexes The arranged array indexes.
	     * @returns {Array} Returns `array`.
	     */
	    function reorder(array, indexes) {
	      var arrLength = array.length,
	          length = nativeMin(indexes.length, arrLength),
	          oldArray = copyArray(array);
	
	      while (length--) {
	        var index = indexes[length];
	        array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
	      }
	      return array;
	    }
	
	    /**
	     * Sets metadata for `func`.
	     *
	     * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
	     * period of time, it will trip its breaker and transition to an identity
	     * function to avoid garbage collection pauses in V8. See
	     * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
	     * for more details.
	     *
	     * @private
	     * @param {Function} func The function to associate metadata with.
	     * @param {*} data The metadata.
	     * @returns {Function} Returns `func`.
	     */
	    var setData = shortOut(baseSetData);
	
	    /**
	     * A simple wrapper around the global [`setTimeout`](https://mdn.io/setTimeout).
	     *
	     * @private
	     * @param {Function} func The function to delay.
	     * @param {number} wait The number of milliseconds to delay invocation.
	     * @returns {number|Object} Returns the timer id or timeout object.
	     */
	    var setTimeout = ctxSetTimeout || function(func, wait) {
	      return root.setTimeout(func, wait);
	    };
	
	    /**
	     * Sets the `toString` method of `func` to return `string`.
	     *
	     * @private
	     * @param {Function} func The function to modify.
	     * @param {Function} string The `toString` result.
	     * @returns {Function} Returns `func`.
	     */
	    var setToString = shortOut(baseSetToString);
	
	    /**
	     * Sets the `toString` method of `wrapper` to mimic the source of `reference`
	     * with wrapper details in a comment at the top of the source body.
	     *
	     * @private
	     * @param {Function} wrapper The function to modify.
	     * @param {Function} reference The reference function.
	     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	     * @returns {Function} Returns `wrapper`.
	     */
	    function setWrapToString(wrapper, reference, bitmask) {
	      var source = (reference + '');
	      return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
	    }
	
	    /**
	     * Creates a function that'll short out and invoke `identity` instead
	     * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
	     * milliseconds.
	     *
	     * @private
	     * @param {Function} func The function to restrict.
	     * @returns {Function} Returns the new shortable function.
	     */
	    function shortOut(func) {
	      var count = 0,
	          lastCalled = 0;
	
	      return function() {
	        var stamp = nativeNow(),
	            remaining = HOT_SPAN - (stamp - lastCalled);
	
	        lastCalled = stamp;
	        if (remaining > 0) {
	          if (++count >= HOT_COUNT) {
	            return arguments[0];
	          }
	        } else {
	          count = 0;
	        }
	        return func.apply(undefined, arguments);
	      };
	    }
	
	    /**
	     * A specialized version of `_.shuffle` which mutates and sets the size of `array`.
	     *
	     * @private
	     * @param {Array} array The array to shuffle.
	     * @param {number} [size=array.length] The size of `array`.
	     * @returns {Array} Returns `array`.
	     */
	    function shuffleSelf(array, size) {
	      var index = -1,
	          length = array.length,
	          lastIndex = length - 1;
	
	      size = size === undefined ? length : size;
	      while (++index < size) {
	        var rand = baseRandom(index, lastIndex),
	            value = array[rand];
	
	        array[rand] = array[index];
	        array[index] = value;
	      }
	      array.length = size;
	      return array;
	    }
	
	    /**
	     * Converts `string` to a property path array.
	     *
	     * @private
	     * @param {string} string The string to convert.
	     * @returns {Array} Returns the property path array.
	     */
	    var stringToPath = memoizeCapped(function(string) {
	      var result = [];
	      if (reLeadingDot.test(string)) {
	        result.push('');
	      }
	      string.replace(rePropName, function(match, number, quote, string) {
	        result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	      });
	      return result;
	    });
	
	    /**
	     * Converts `value` to a string key if it's not a string or symbol.
	     *
	     * @private
	     * @param {*} value The value to inspect.
	     * @returns {string|symbol} Returns the key.
	     */
	    function toKey(value) {
	      if (typeof value == 'string' || isSymbol(value)) {
	        return value;
	      }
	      var result = (value + '');
	      return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	    }
	
	    /**
	     * Converts `func` to its source code.
	     *
	     * @private
	     * @param {Function} func The function to convert.
	     * @returns {string} Returns the source code.
	     */
	    function toSource(func) {
	      if (func != null) {
	        try {
	          return funcToString.call(func);
	        } catch (e) {}
	        try {
	          return (func + '');
	        } catch (e) {}
	      }
	      return '';
	    }
	
	    /**
	     * Updates wrapper `details` based on `bitmask` flags.
	     *
	     * @private
	     * @returns {Array} details The details to modify.
	     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	     * @returns {Array} Returns `details`.
	     */
	    function updateWrapDetails(details, bitmask) {
	      arrayEach(wrapFlags, function(pair) {
	        var value = '_.' + pair[0];
	        if ((bitmask & pair[1]) && !arrayIncludes(details, value)) {
	          details.push(value);
	        }
	      });
	      return details.sort();
	    }
	
	    /**
	     * Creates a clone of `wrapper`.
	     *
	     * @private
	     * @param {Object} wrapper The wrapper to clone.
	     * @returns {Object} Returns the cloned wrapper.
	     */
	    function wrapperClone(wrapper) {
	      if (wrapper instanceof LazyWrapper) {
	        return wrapper.clone();
	      }
	      var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
	      result.__actions__ = copyArray(wrapper.__actions__);
	      result.__index__  = wrapper.__index__;
	      result.__values__ = wrapper.__values__;
	      return result;
	    }
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * Creates an array of elements split into groups the length of `size`.
	     * If `array` can't be split evenly, the final chunk will be the remaining
	     * elements.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to process.
	     * @param {number} [size=1] The length of each chunk
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Array} Returns the new array of chunks.
	     * @example
	     *
	     * _.chunk(['a', 'b', 'c', 'd'], 2);
	     * // => [['a', 'b'], ['c', 'd']]
	     *
	     * _.chunk(['a', 'b', 'c', 'd'], 3);
	     * // => [['a', 'b', 'c'], ['d']]
	     */
	    function chunk(array, size, guard) {
	      if ((guard ? isIterateeCall(array, size, guard) : size === undefined)) {
	        size = 1;
	      } else {
	        size = nativeMax(toInteger(size), 0);
	      }
	      var length = array == null ? 0 : array.length;
	      if (!length || size < 1) {
	        return [];
	      }
	      var index = 0,
	          resIndex = 0,
	          result = Array(nativeCeil(length / size));
	
	      while (index < length) {
	        result[resIndex++] = baseSlice(array, index, (index += size));
	      }
	      return result;
	    }
	
	    /**
	     * Creates an array with all falsey values removed. The values `false`, `null`,
	     * `0`, `""`, `undefined`, and `NaN` are falsey.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to compact.
	     * @returns {Array} Returns the new array of filtered values.
	     * @example
	     *
	     * _.compact([0, 1, false, 2, '', 3]);
	     * // => [1, 2, 3]
	     */
	    function compact(array) {
	      var index = -1,
	          length = array == null ? 0 : array.length,
	          resIndex = 0,
	          result = [];
	
	      while (++index < length) {
	        var value = array[index];
	        if (value) {
	          result[resIndex++] = value;
	        }
	      }
	      return result;
	    }
	
	    /**
	     * Creates a new array concatenating `array` with any additional arrays
	     * and/or values.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to concatenate.
	     * @param {...*} [values] The values to concatenate.
	     * @returns {Array} Returns the new concatenated array.
	     * @example
	     *
	     * var array = [1];
	     * var other = _.concat(array, 2, [3], [[4]]);
	     *
	     * console.log(other);
	     * // => [1, 2, 3, [4]]
	     *
	     * console.log(array);
	     * // => [1]
	     */
	    function concat() {
	      var length = arguments.length;
	      if (!length) {
	        return [];
	      }
	      var args = Array(length - 1),
	          array = arguments[0],
	          index = length;
	
	      while (index--) {
	        args[index - 1] = arguments[index];
	      }
	      return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
	    }
	
	    /**
	     * Creates an array of `array` values not included in the other given arrays
	     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	     * for equality comparisons. The order and references of result values are
	     * determined by the first array.
	     *
	     * **Note:** Unlike `_.pullAll`, this method returns a new array.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {...Array} [values] The values to exclude.
	     * @returns {Array} Returns the new array of filtered values.
	     * @see _.without, _.xor
	     * @example
	     *
	     * _.difference([2, 1], [2, 3]);
	     * // => [1]
	     */
	    var difference = baseRest(function(array, values) {
	      return isArrayLikeObject(array)
	        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
	        : [];
	    });
	
	    /**
	     * This method is like `_.difference` except that it accepts `iteratee` which
	     * is invoked for each element of `array` and `values` to generate the criterion
	     * by which they're compared. The order and references of result values are
	     * determined by the first array. The iteratee is invoked with one argument:
	     * (value).
	     *
	     * **Note:** Unlike `_.pullAllBy`, this method returns a new array.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {...Array} [values] The values to exclude.
	     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
	     * @returns {Array} Returns the new array of filtered values.
	     * @example
	     *
	     * _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
	     * // => [1.2]
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
	     * // => [{ 'x': 2 }]
	     */
	    var differenceBy = baseRest(function(array, values) {
	      var iteratee = last(values);
	      if (isArrayLikeObject(iteratee)) {
	        iteratee = undefined;
	      }
	      return isArrayLikeObject(array)
	        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), getIteratee(iteratee, 2))
	        : [];
	    });
	
	    /**
	     * This method is like `_.difference` except that it accepts `comparator`
	     * which is invoked to compare elements of `array` to `values`. The order and
	     * references of result values are determined by the first array. The comparator
	     * is invoked with two arguments: (arrVal, othVal).
	     *
	     * **Note:** Unlike `_.pullAllWith`, this method returns a new array.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {...Array} [values] The values to exclude.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns the new array of filtered values.
	     * @example
	     *
	     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
	     *
	     * _.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
	     * // => [{ 'x': 2, 'y': 1 }]
	     */
	    var differenceWith = baseRest(function(array, values) {
	      var comparator = last(values);
	      if (isArrayLikeObject(comparator)) {
	        comparator = undefined;
	      }
	      return isArrayLikeObject(array)
	        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), undefined, comparator)
	        : [];
	    });
	
	    /**
	     * Creates a slice of `array` with `n` elements dropped from the beginning.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.5.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {number} [n=1] The number of elements to drop.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.drop([1, 2, 3]);
	     * // => [2, 3]
	     *
	     * _.drop([1, 2, 3], 2);
	     * // => [3]
	     *
	     * _.drop([1, 2, 3], 5);
	     * // => []
	     *
	     * _.drop([1, 2, 3], 0);
	     * // => [1, 2, 3]
	     */
	    function drop(array, n, guard) {
	      var length = array == null ? 0 : array.length;
	      if (!length) {
	        return [];
	      }
	      n = (guard || n === undefined) ? 1 : toInteger(n);
	      return baseSlice(array, n < 0 ? 0 : n, length);
	    }
	
	    /**
	     * Creates a slice of `array` with `n` elements dropped from the end.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {number} [n=1] The number of elements to drop.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.dropRight([1, 2, 3]);
	     * // => [1, 2]
	     *
	     * _.dropRight([1, 2, 3], 2);
	     * // => [1]
	     *
	     * _.dropRight([1, 2, 3], 5);
	     * // => []
	     *
	     * _.dropRight([1, 2, 3], 0);
	     * // => [1, 2, 3]
	     */
	    function dropRight(array, n, guard) {
	      var length = array == null ? 0 : array.length;
	      if (!length) {
	        return [];
	      }
	      n = (guard || n === undefined) ? 1 : toInteger(n);
	      n = length - n;
	      return baseSlice(array, 0, n < 0 ? 0 : n);
	    }
	
	    /**
	     * Creates a slice of `array` excluding elements dropped from the end.
	     * Elements are dropped until `predicate` returns falsey. The predicate is
	     * invoked with three arguments: (value, index, array).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': true },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': false }
	     * ];
	     *
	     * _.dropRightWhile(users, function(o) { return !o.active; });
	     * // => objects for ['barney']
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.dropRightWhile(users, { 'user': 'pebbles', 'active': false });
	     * // => objects for ['barney', 'fred']
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.dropRightWhile(users, ['active', false]);
	     * // => objects for ['barney']
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.dropRightWhile(users, 'active');
	     * // => objects for ['barney', 'fred', 'pebbles']
	     */
	    function dropRightWhile(array, predicate) {
	      return (array && array.length)
	        ? baseWhile(array, getIteratee(predicate, 3), true, true)
	        : [];
	    }
	
	    /**
	     * Creates a slice of `array` excluding elements dropped from the beginning.
	     * Elements are dropped until `predicate` returns falsey. The predicate is
	     * invoked with three arguments: (value, index, array).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': false },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': true }
	     * ];
	     *
	     * _.dropWhile(users, function(o) { return !o.active; });
	     * // => objects for ['pebbles']
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.dropWhile(users, { 'user': 'barney', 'active': false });
	     * // => objects for ['fred', 'pebbles']
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.dropWhile(users, ['active', false]);
	     * // => objects for ['pebbles']
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.dropWhile(users, 'active');
	     * // => objects for ['barney', 'fred', 'pebbles']
	     */
	    function dropWhile(array, predicate) {
	      return (array && array.length)
	        ? baseWhile(array, getIteratee(predicate, 3), true)
	        : [];
	    }
	
	    /**
	     * Fills elements of `array` with `value` from `start` up to, but not
	     * including, `end`.
	     *
	     * **Note:** This method mutates `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.2.0
	     * @category Array
	     * @param {Array} array The array to fill.
	     * @param {*} value The value to fill `array` with.
	     * @param {number} [start=0] The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns `array`.
	     * @example
	     *
	     * var array = [1, 2, 3];
	     *
	     * _.fill(array, 'a');
	     * console.log(array);
	     * // => ['a', 'a', 'a']
	     *
	     * _.fill(Array(3), 2);
	     * // => [2, 2, 2]
	     *
	     * _.fill([4, 6, 8, 10], '*', 1, 3);
	     * // => [4, '*', '*', 10]
	     */
	    function fill(array, value, start, end) {
	      var length = array == null ? 0 : array.length;
	      if (!length) {
	        return [];
	      }
	      if (start && typeof start != 'number' && isIterateeCall(array, value, start)) {
	        start = 0;
	        end = length;
	      }
	      return baseFill(array, value, start, end);
	    }
	
	    /**
	     * This method is like `_.find` except that it returns the index of the first
	     * element `predicate` returns truthy for instead of the element itself.
	     *
	     * @static
	     * @memberOf _
	     * @since 1.1.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @param {number} [fromIndex=0] The index to search from.
	     * @returns {number} Returns the index of the found element, else `-1`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': false },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': true }
	     * ];
	     *
	     * _.findIndex(users, function(o) { return o.user == 'barney'; });
	     * // => 0
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.findIndex(users, { 'user': 'fred', 'active': false });
	     * // => 1
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.findIndex(users, ['active', false]);
	     * // => 0
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.findIndex(users, 'active');
	     * // => 2
	     */
	    function findIndex(array, predicate, fromIndex) {
	      var length = array == null ? 0 : array.length;
	      if (!length) {
	        return -1;
	      }
	      var index = fromIndex == null ? 0 : toInteger(fromIndex);
	      if (index < 0) {
	        index = nativeMax(length + index, 0);
	      }
	      return baseFindIndex(array, getIteratee(predicate, 3), index);
	    }
	
	    /**
	     * This method is like `_.findIndex` except that it iterates over elements
	     * of `collection` from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.0.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @param {number} [fromIndex=array.length-1] The index to search from.
	     * @returns {number} Returns the index of the found element, else `-1`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': true },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': false }
	     * ];
	     *
	     * _.findLastIndex(users, function(o) { return o.user == 'pebbles'; });
	     * // => 2
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.findLastIndex(users, { 'user': 'barney', 'active': true });
	     * // => 0
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.findLastIndex(users, ['active', false]);
	     * // => 2
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.findLastIndex(users, 'active');
	     * // => 0
	     */
	    function findLastIndex(array, predicate, fromIndex) {
	      var length = array == null ? 0 : array.length;
	      if (!length) {
	        return -1;
	      }
	      var index = length - 1;
	      if (fromIndex !== undefined) {
	        index = toInteger(fromIndex);
	        index = fromIndex < 0
	          ? nativeMax(length + index, 0)
	          : nativeMin(index, length - 1);
	      }
	      return baseFindIndex(array, getIteratee(predicate, 3), index, true);
	    }
	
	    /**
	     * Flattens `array` a single level deep.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to flatten.
	     * @returns {Array} Returns the new flattened array.
	     * @example
	     *
	     * _.flatten([1, [2, [3, [4]], 5]]);
	     * // => [1, 2, [3, [4]], 5]
	     */
	    function flatten(array) {
	      var length = array == null ? 0 : array.length;
	      return length ? baseFlatten(array, 1) : [];
	    }
	
	    /**
	     * Recursively flattens `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to flatten.
	     * @returns {Array} Returns the new flattened array.
	     * @example
	     *
	     * _.flattenDeep([1, [2, [3, [4]], 5]]);
	     * // => [1, 2, 3, 4, 5]
	     */
	    function flattenDeep(array) {
	      var length = array == null ? 0 : array.length;
	      return length ? baseFlatten(array, INFINITY) : [];
	    }
	
	    /**
	     * Recursively flatten `array` up to `depth` times.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.4.0
	     * @category Array
	     * @param {Array} array The array to flatten.
	     * @param {number} [depth=1] The maximum recursion depth.
	     * @returns {Array} Returns the new flattened array.
	     * @example
	     *
	     * var array = [1, [2, [3, [4]], 5]];
	     *
	     * _.flattenDepth(array, 1);
	     * // => [1, 2, [3, [4]], 5]
	     *
	     * _.flattenDepth(array, 2);
	     * // => [1, 2, 3, [4], 5]
	     */
	    function flattenDepth(array, depth) {
	      var length = array == null ? 0 : array.length;
	      if (!length) {
	        return [];
	      }
	      depth = depth === undefined ? 1 : toInteger(depth);
	      return baseFlatten(array, depth);
	    }
	
	    /**
	     * The inverse of `_.toPairs`; this method returns an object composed
	     * from key-value `pairs`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} pairs The key-value pairs.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * _.fromPairs([['a', 1], ['b', 2]]);
	     * // => { 'a': 1, 'b': 2 }
	     */
	    function fromPairs(pairs) {
	      var index = -1,
	          length = pairs == null ? 0 : pairs.length,
	          result = {};
	
	      while (++index < length) {
	        var pair = pairs[index];
	        result[pair[0]] = pair[1];
	      }
	      return result;
	    }
	
	    /**
	     * Gets the first element of `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @alias first
	     * @category Array
	     * @param {Array} array The array to query.
	     * @returns {*} Returns the first element of `array`.
	     * @example
	     *
	     * _.head([1, 2, 3]);
	     * // => 1
	     *
	     * _.head([]);
	     * // => undefined
	     */
	    function head(array) {
	      return (array && array.length) ? array[0] : undefined;
	    }
	
	    /**
	     * Gets the index at which the first occurrence of `value` is found in `array`
	     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	     * for equality comparisons. If `fromIndex` is negative, it's used as the
	     * offset from the end of `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {*} value The value to search for.
	     * @param {number} [fromIndex=0] The index to search from.
	     * @returns {number} Returns the index of the matched value, else `-1`.
	     * @example
	     *
	     * _.indexOf([1, 2, 1, 2], 2);
	     * // => 1
	     *
	     * // Search from the `fromIndex`.
	     * _.indexOf([1, 2, 1, 2], 2, 2);
	     * // => 3
	     */
	    function indexOf(array, value, fromIndex) {
	      var length = array == null ? 0 : array.length;
	      if (!length) {
	        return -1;
	      }
	      var index = fromIndex == null ? 0 : toInteger(fromIndex);
	      if (index < 0) {
	        index = nativeMax(length + index, 0);
	      }
	      return baseIndexOf(array, value, index);
	    }
	
	    /**
	     * Gets all but the last element of `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.initial([1, 2, 3]);
	     * // => [1, 2]
	     */
	    function initial(array) {
	      var length = array == null ? 0 : array.length;
	      return length ? baseSlice(array, 0, -1) : [];
	    }
	
	    /**
	     * Creates an array of unique values that are included in all given arrays
	     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	     * for equality comparisons. The order and references of result values are
	     * determined by the first array.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @returns {Array} Returns the new array of intersecting values.
	     * @example
	     *
	     * _.intersection([2, 1], [2, 3]);
	     * // => [2]
	     */
	    var intersection = baseRest(function(arrays) {
	      var mapped = arrayMap(arrays, castArrayLikeObject);
	      return (mapped.length && mapped[0] === arrays[0])
	        ? baseIntersection(mapped)
	        : [];
	    });
	
	    /**
	     * This method is like `_.intersection` except that it accepts `iteratee`
	     * which is invoked for each element of each `arrays` to generate the criterion
	     * by which they're compared. The order and references of result values are
	     * determined by the first array. The iteratee is invoked with one argument:
	     * (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
	     * @returns {Array} Returns the new array of intersecting values.
	     * @example
	     *
	     * _.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
	     * // => [2.1]
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
	     * // => [{ 'x': 1 }]
	     */
	    var intersectionBy = baseRest(function(arrays) {
	      var iteratee = last(arrays),
	          mapped = arrayMap(arrays, castArrayLikeObject);
	
	      if (iteratee === last(mapped)) {
	        iteratee = undefined;
	      } else {
	        mapped.pop();
	      }
	      return (mapped.length && mapped[0] === arrays[0])
	        ? baseIntersection(mapped, getIteratee(iteratee, 2))
	        : [];
	    });
	
	    /**
	     * This method is like `_.intersection` except that it accepts `comparator`
	     * which is invoked to compare elements of `arrays`. The order and references
	     * of result values are determined by the first array. The comparator is
	     * invoked with two arguments: (arrVal, othVal).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns the new array of intersecting values.
	     * @example
	     *
	     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
	     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
	     *
	     * _.intersectionWith(objects, others, _.isEqual);
	     * // => [{ 'x': 1, 'y': 2 }]
	     */
	    var intersectionWith = baseRest(function(arrays) {
	      var comparator = last(arrays),
	          mapped = arrayMap(arrays, castArrayLikeObject);
	
	      comparator = typeof comparator == 'function' ? comparator : undefined;
	      if (comparator) {
	        mapped.pop();
	      }
	      return (mapped.length && mapped[0] === arrays[0])
	        ? baseIntersection(mapped, undefined, comparator)
	        : [];
	    });
	
	    /**
	     * Converts all elements in `array` into a string separated by `separator`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to convert.
	     * @param {string} [separator=','] The element separator.
	     * @returns {string} Returns the joined string.
	     * @example
	     *
	     * _.join(['a', 'b', 'c'], '~');
	     * // => 'a~b~c'
	     */
	    function join(array, separator) {
	      return array == null ? '' : nativeJoin.call(array, separator);
	    }
	
	    /**
	     * Gets the last element of `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @returns {*} Returns the last element of `array`.
	     * @example
	     *
	     * _.last([1, 2, 3]);
	     * // => 3
	     */
	    function last(array) {
	      var length = array == null ? 0 : array.length;
	      return length ? array[length - 1] : undefined;
	    }
	
	    /**
	     * This method is like `_.indexOf` except that it iterates over elements of
	     * `array` from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {*} value The value to search for.
	     * @param {number} [fromIndex=array.length-1] The index to search from.
	     * @returns {number} Returns the index of the matched value, else `-1`.
	     * @example
	     *
	     * _.lastIndexOf([1, 2, 1, 2], 2);
	     * // => 3
	     *
	     * // Search from the `fromIndex`.
	     * _.lastIndexOf([1, 2, 1, 2], 2, 2);
	     * // => 1
	     */
	    function lastIndexOf(array, value, fromIndex) {
	      var length = array == null ? 0 : array.length;
	      if (!length) {
	        return -1;
	      }
	      var index = length;
	      if (fromIndex !== undefined) {
	        index = toInteger(fromIndex);
	        index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
	      }
	      return value === value
	        ? strictLastIndexOf(array, value, index)
	        : baseFindIndex(array, baseIsNaN, index, true);
	    }
	
	    /**
	     * Gets the element at index `n` of `array`. If `n` is negative, the nth
	     * element from the end is returned.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.11.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {number} [n=0] The index of the element to return.
	     * @returns {*} Returns the nth element of `array`.
	     * @example
	     *
	     * var array = ['a', 'b', 'c', 'd'];
	     *
	     * _.nth(array, 1);
	     * // => 'b'
	     *
	     * _.nth(array, -2);
	     * // => 'c';
	     */
	    function nth(array, n) {
	      return (array && array.length) ? baseNth(array, toInteger(n)) : undefined;
	    }
	
	    /**
	     * Removes all given values from `array` using
	     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	     * for equality comparisons.
	     *
	     * **Note:** Unlike `_.without`, this method mutates `array`. Use `_.remove`
	     * to remove elements from an array by predicate.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.0.0
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @param {...*} [values] The values to remove.
	     * @returns {Array} Returns `array`.
	     * @example
	     *
	     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
	     *
	     * _.pull(array, 'a', 'c');
	     * console.log(array);
	     * // => ['b', 'b']
	     */
	    var pull = baseRest(pullAll);
	
	    /**
	     * This method is like `_.pull` except that it accepts an array of values to remove.
	     *
	     * **Note:** Unlike `_.difference`, this method mutates `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @param {Array} values The values to remove.
	     * @returns {Array} Returns `array`.
	     * @example
	     *
	     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
	     *
	     * _.pullAll(array, ['a', 'c']);
	     * console.log(array);
	     * // => ['b', 'b']
	     */
	    function pullAll(array, values) {
	      return (array && array.length && values && values.length)
	        ? basePullAll(array, values)
	        : array;
	    }
	
	    /**
	     * This method is like `_.pullAll` except that it accepts `iteratee` which is
	     * invoked for each element of `array` and `values` to generate the criterion
	     * by which they're compared. The iteratee is invoked with one argument: (value).
	     *
	     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @param {Array} values The values to remove.
	     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
	     * @returns {Array} Returns `array`.
	     * @example
	     *
	     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
	     *
	     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
	     * console.log(array);
	     * // => [{ 'x': 2 }]
	     */
	    function pullAllBy(array, values, iteratee) {
	      return (array && array.length && values && values.length)
	        ? basePullAll(array, values, getIteratee(iteratee, 2))
	        : array;
	    }
	
	    /**
	     * This method is like `_.pullAll` except that it accepts `comparator` which
	     * is invoked to compare elements of `array` to `values`. The comparator is
	     * invoked with two arguments: (arrVal, othVal).
	     *
	     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.6.0
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @param {Array} values The values to remove.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns `array`.
	     * @example
	     *
	     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
	     *
	     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
	     * console.log(array);
	     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
	     */
	    function pullAllWith(array, values, comparator) {
	      return (array && array.length && values && values.length)
	        ? basePullAll(array, values, undefined, comparator)
	        : array;
	    }
	
	    /**
	     * Removes elements from `array` corresponding to `indexes` and returns an
	     * array of removed elements.
	     *
	     * **Note:** Unlike `_.at`, this method mutates `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @param {...(number|number[])} [indexes] The indexes of elements to remove.
	     * @returns {Array} Returns the new array of removed elements.
	     * @example
	     *
	     * var array = ['a', 'b', 'c', 'd'];
	     * var pulled = _.pullAt(array, [1, 3]);
	     *
	     * console.log(array);
	     * // => ['a', 'c']
	     *
	     * console.log(pulled);
	     * // => ['b', 'd']
	     */
	    var pullAt = flatRest(function(array, indexes) {
	      var length = array == null ? 0 : array.length,
	          result = baseAt(array, indexes);
	
	      basePullAt(array, arrayMap(indexes, function(index) {
	        return isIndex(index, length) ? +index : index;
	      }).sort(compareAscending));
	
	      return result;
	    });
	
	    /**
	     * Removes all elements from `array` that `predicate` returns truthy for
	     * and returns an array of the removed elements. The predicate is invoked
	     * with three arguments: (value, index, array).
	     *
	     * **Note:** Unlike `_.filter`, this method mutates `array`. Use `_.pull`
	     * to pull elements from an array by value.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.0.0
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @returns {Array} Returns the new array of removed elements.
	     * @example
	     *
	     * var array = [1, 2, 3, 4];
	     * var evens = _.remove(array, function(n) {
	     *   return n % 2 == 0;
	     * });
	     *
	     * console.log(array);
	     * // => [1, 3]
	     *
	     * console.log(evens);
	     * // => [2, 4]
	     */
	    function remove(array, predicate) {
	      var result = [];
	      if (!(array && array.length)) {
	        return result;
	      }
	      var index = -1,
	          indexes = [],
	          length = array.length;
	
	      predicate = getIteratee(predicate, 3);
	      while (++index < length) {
	        var value = array[index];
	        if (predicate(value, index, array)) {
	          result.push(value);
	          indexes.push(index);
	        }
	      }
	      basePullAt(array, indexes);
	      return result;
	    }
	
	    /**
	     * Reverses `array` so that the first element becomes the last, the second
	     * element becomes the second to last, and so on.
	     *
	     * **Note:** This method mutates `array` and is based on
	     * [`Array#reverse`](https://mdn.io/Array/reverse).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @returns {Array} Returns `array`.
	     * @example
	     *
	     * var array = [1, 2, 3];
	     *
	     * _.reverse(array);
	     * // => [3, 2, 1]
	     *
	     * console.log(array);
	     * // => [3, 2, 1]
	     */
	    function reverse(array) {
	      return array == null ? array : nativeReverse.call(array);
	    }
	
	    /**
	     * Creates a slice of `array` from `start` up to, but not including, `end`.
	     *
	     * **Note:** This method is used instead of
	     * [`Array#slice`](https://mdn.io/Array/slice) to ensure dense arrays are
	     * returned.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to slice.
	     * @param {number} [start=0] The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns the slice of `array`.
	     */
	    function slice(array, start, end) {
	      var length = array == null ? 0 : array.length;
	      if (!length) {
	        return [];
	      }
	      if (end && typeof end != 'number' && isIterateeCall(array, start, end)) {
	        start = 0;
	        end = length;
	      }
	      else {
	        start = start == null ? 0 : toInteger(start);
	        end = end === undefined ? length : toInteger(end);
	      }
	      return baseSlice(array, start, end);
	    }
	
	    /**
	     * Uses a binary search to determine the lowest index at which `value`
	     * should be inserted into `array` in order to maintain its sort order.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     * @example
	     *
	     * _.sortedIndex([30, 50], 40);
	     * // => 1
	     */
	    function sortedIndex(array, value) {
	      return baseSortedIndex(array, value);
	    }
	
	    /**
	     * This method is like `_.sortedIndex` except that it accepts `iteratee`
	     * which is invoked for `value` and each element of `array` to compute their
	     * sort ranking. The iteratee is invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     * @example
	     *
	     * var objects = [{ 'x': 4 }, { 'x': 5 }];
	     *
	     * _.sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
	     * // => 0
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.sortedIndexBy(objects, { 'x': 4 }, 'x');
	     * // => 0
	     */
	    function sortedIndexBy(array, value, iteratee) {
	      return baseSortedIndexBy(array, value, getIteratee(iteratee, 2));
	    }
	
	    /**
	     * This method is like `_.indexOf` except that it performs a binary
	     * search on a sorted `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {*} value The value to search for.
	     * @returns {number} Returns the index of the matched value, else `-1`.
	     * @example
	     *
	     * _.sortedIndexOf([4, 5, 5, 5, 6], 5);
	     * // => 1
	     */
	    function sortedIndexOf(array, value) {
	      var length = array == null ? 0 : array.length;
	      if (length) {
	        var index = baseSortedIndex(array, value);
	        if (index < length && eq(array[index], value)) {
	          return index;
	        }
	      }
	      return -1;
	    }
	
	    /**
	     * This method is like `_.sortedIndex` except that it returns the highest
	     * index at which `value` should be inserted into `array` in order to
	     * maintain its sort order.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     * @example
	     *
	     * _.sortedLastIndex([4, 5, 5, 5, 6], 5);
	     * // => 4
	     */
	    function sortedLastIndex(array, value) {
	      return baseSortedIndex(array, value, true);
	    }
	
	    /**
	     * This method is like `_.sortedLastIndex` except that it accepts `iteratee`
	     * which is invoked for `value` and each element of `array` to compute their
	     * sort ranking. The iteratee is invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     * @example
	     *
	     * var objects = [{ 'x': 4 }, { 'x': 5 }];
	     *
	     * _.sortedLastIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
	     * // => 1
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.sortedLastIndexBy(objects, { 'x': 4 }, 'x');
	     * // => 1
	     */
	    function sortedLastIndexBy(array, value, iteratee) {
	      return baseSortedIndexBy(array, value, getIteratee(iteratee, 2), true);
	    }
	
	    /**
	     * This method is like `_.lastIndexOf` except that it performs a binary
	     * search on a sorted `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {*} value The value to search for.
	     * @returns {number} Returns the index of the matched value, else `-1`.
	     * @example
	     *
	     * _.sortedLastIndexOf([4, 5, 5, 5, 6], 5);
	     * // => 3
	     */
	    function sortedLastIndexOf(array, value) {
	      var length = array == null ? 0 : array.length;
	      if (length) {
	        var index = baseSortedIndex(array, value, true) - 1;
	        if (eq(array[index], value)) {
	          return index;
	        }
	      }
	      return -1;
	    }
	
	    /**
	     * This method is like `_.uniq` except that it's designed and optimized
	     * for sorted arrays.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @returns {Array} Returns the new duplicate free array.
	     * @example
	     *
	     * _.sortedUniq([1, 1, 2]);
	     * // => [1, 2]
	     */
	    function sortedUniq(array) {
	      return (array && array.length)
	        ? baseSortedUniq(array)
	        : [];
	    }
	
	    /**
	     * This method is like `_.uniqBy` except that it's designed and optimized
	     * for sorted arrays.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {Function} [iteratee] The iteratee invoked per element.
	     * @returns {Array} Returns the new duplicate free array.
	     * @example
	     *
	     * _.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
	     * // => [1.1, 2.3]
	     */
	    function sortedUniqBy(array, iteratee) {
	      return (array && array.length)
	        ? baseSortedUniq(array, getIteratee(iteratee, 2))
	        : [];
	    }
	
	    /**
	     * Gets all but the first element of `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.tail([1, 2, 3]);
	     * // => [2, 3]
	     */
	    function tail(array) {
	      var length = array == null ? 0 : array.length;
	      return length ? baseSlice(array, 1, length) : [];
	    }
	
	    /**
	     * Creates a slice of `array` with `n` elements taken from the beginning.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {number} [n=1] The number of elements to take.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.take([1, 2, 3]);
	     * // => [1]
	     *
	     * _.take([1, 2, 3], 2);
	     * // => [1, 2]
	     *
	     * _.take([1, 2, 3], 5);
	     * // => [1, 2, 3]
	     *
	     * _.take([1, 2, 3], 0);
	     * // => []
	     */
	    function take(array, n, guard) {
	      if (!(array && array.length)) {
	        return [];
	      }
	      n = (guard || n === undefined) ? 1 : toInteger(n);
	      return baseSlice(array, 0, n < 0 ? 0 : n);
	    }
	
	    /**
	     * Creates a slice of `array` with `n` elements taken from the end.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {number} [n=1] The number of elements to take.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.takeRight([1, 2, 3]);
	     * // => [3]
	     *
	     * _.takeRight([1, 2, 3], 2);
	     * // => [2, 3]
	     *
	     * _.takeRight([1, 2, 3], 5);
	     * // => [1, 2, 3]
	     *
	     * _.takeRight([1, 2, 3], 0);
	     * // => []
	     */
	    function takeRight(array, n, guard) {
	      var length = array == null ? 0 : array.length;
	      if (!length) {
	        return [];
	      }
	      n = (guard || n === undefined) ? 1 : toInteger(n);
	      n = length - n;
	      return baseSlice(array, n < 0 ? 0 : n, length);
	    }
	
	    /**
	     * Creates a slice of `array` with elements taken from the end. Elements are
	     * taken until `predicate` returns falsey. The predicate is invoked with
	     * three arguments: (value, index, array).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': true },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': false }
	     * ];
	     *
	     * _.takeRightWhile(users, function(o) { return !o.active; });
	     * // => objects for ['fred', 'pebbles']
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.takeRightWhile(users, { 'user': 'pebbles', 'active': false });
	     * // => objects for ['pebbles']
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.takeRightWhile(users, ['active', false]);
	     * // => objects for ['fred', 'pebbles']
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.takeRightWhile(users, 'active');
	     * // => []
	     */
	    function takeRightWhile(array, predicate) {
	      return (array && array.length)
	        ? baseWhile(array, getIteratee(predicate, 3), false, true)
	        : [];
	    }
	
	    /**
	     * Creates a slice of `array` with elements taken from the beginning. Elements
	     * are taken until `predicate` returns falsey. The predicate is invoked with
	     * three arguments: (value, index, array).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': false },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': true }
	     * ];
	     *
	     * _.takeWhile(users, function(o) { return !o.active; });
	     * // => objects for ['barney', 'fred']
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.takeWhile(users, { 'user': 'barney', 'active': false });
	     * // => objects for ['barney']
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.takeWhile(users, ['active', false]);
	     * // => objects for ['barney', 'fred']
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.takeWhile(users, 'active');
	     * // => []
	     */
	    function takeWhile(array, predicate) {
	      return (array && array.length)
	        ? baseWhile(array, getIteratee(predicate, 3))
	        : [];
	    }
	
	    /**
	     * Creates an array of unique values, in order, from all given arrays using
	     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	     * for equality comparisons.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @returns {Array} Returns the new array of combined values.
	     * @example
	     *
	     * _.union([2], [1, 2]);
	     * // => [2, 1]
	     */
	    var union = baseRest(function(arrays) {
	      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
	    });
	
	    /**
	     * This method is like `_.union` except that it accepts `iteratee` which is
	     * invoked for each element of each `arrays` to generate the criterion by
	     * which uniqueness is computed. Result values are chosen from the first
	     * array in which the value occurs. The iteratee is invoked with one argument:
	     * (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
	     * @returns {Array} Returns the new array of combined values.
	     * @example
	     *
	     * _.unionBy([2.1], [1.2, 2.3], Math.floor);
	     * // => [2.1, 1.2]
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
	     * // => [{ 'x': 1 }, { 'x': 2 }]
	     */
	    var unionBy = baseRest(function(arrays) {
	      var iteratee = last(arrays);
	      if (isArrayLikeObject(iteratee)) {
	        iteratee = undefined;
	      }
	      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee, 2));
	    });
	
	    /**
	     * This method is like `_.union` except that it accepts `comparator` which
	     * is invoked to compare elements of `arrays`. Result values are chosen from
	     * the first array in which the value occurs. The comparator is invoked
	     * with two arguments: (arrVal, othVal).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns the new array of combined values.
	     * @example
	     *
	     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
	     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
	     *
	     * _.unionWith(objects, others, _.isEqual);
	     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
	     */
	    var unionWith = baseRest(function(arrays) {
	      var comparator = last(arrays);
	      comparator = typeof comparator == 'function' ? comparator : undefined;
	      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined, comparator);
	    });
	
	    /**
	     * Creates a duplicate-free version of an array, using
	     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	     * for equality comparisons, in which only the first occurrence of each element
	     * is kept. The order of result values is determined by the order they occur
	     * in the array.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @returns {Array} Returns the new duplicate free array.
	     * @example
	     *
	     * _.uniq([2, 1, 2]);
	     * // => [2, 1]
	     */
	    function uniq(array) {
	      return (array && array.length) ? baseUniq(array) : [];
	    }
	
	    /**
	     * This method is like `_.uniq` except that it accepts `iteratee` which is
	     * invoked for each element in `array` to generate the criterion by which
	     * uniqueness is computed. The order of result values is determined by the
	     * order they occur in the array. The iteratee is invoked with one argument:
	     * (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
	     * @returns {Array} Returns the new duplicate free array.
	     * @example
	     *
	     * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
	     * // => [2.1, 1.2]
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
	     * // => [{ 'x': 1 }, { 'x': 2 }]
	     */
	    function uniqBy(array, iteratee) {
	      return (array && array.length) ? baseUniq(array, getIteratee(iteratee, 2)) : [];
	    }
	
	    /**
	     * This method is like `_.uniq` except that it accepts `comparator` which
	     * is invoked to compare elements of `array`. The order of result values is
	     * determined by the order they occur in the array.The comparator is invoked
	     * with two arguments: (arrVal, othVal).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns the new duplicate free array.
	     * @example
	     *
	     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
	     *
	     * _.uniqWith(objects, _.isEqual);
	     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
	     */
	    function uniqWith(array, comparator) {
	      comparator = typeof comparator == 'function' ? comparator : undefined;
	      return (array && array.length) ? baseUniq(array, undefined, comparator) : [];
	    }
	
	    /**
	     * This method is like `_.zip` except that it accepts an array of grouped
	     * elements and creates an array regrouping the elements to their pre-zip
	     * configuration.
	     *
	     * @static
	     * @memberOf _
	     * @since 1.2.0
	     * @category Array
	     * @param {Array} array The array of grouped elements to process.
	     * @returns {Array} Returns the new array of regrouped elements.
	     * @example
	     *
	     * var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
	     * // => [['a', 1, true], ['b', 2, false]]
	     *
	     * _.unzip(zipped);
	     * // => [['a', 'b'], [1, 2], [true, false]]
	     */
	    function unzip(array) {
	      if (!(array && array.length)) {
	        return [];
	      }
	      var length = 0;
	      array = arrayFilter(array, function(group) {
	        if (isArrayLikeObject(group)) {
	          length = nativeMax(group.length, length);
	          return true;
	        }
	      });
	      return baseTimes(length, function(index) {
	        return arrayMap(array, baseProperty(index));
	      });
	    }
	
	    /**
	     * This method is like `_.unzip` except that it accepts `iteratee` to specify
	     * how regrouped values should be combined. The iteratee is invoked with the
	     * elements of each group: (...group).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.8.0
	     * @category Array
	     * @param {Array} array The array of grouped elements to process.
	     * @param {Function} [iteratee=_.identity] The function to combine
	     *  regrouped values.
	     * @returns {Array} Returns the new array of regrouped elements.
	     * @example
	     *
	     * var zipped = _.zip([1, 2], [10, 20], [100, 200]);
	     * // => [[1, 10, 100], [2, 20, 200]]
	     *
	     * _.unzipWith(zipped, _.add);
	     * // => [3, 30, 300]
	     */
	    function unzipWith(array, iteratee) {
	      if (!(array && array.length)) {
	        return [];
	      }
	      var result = unzip(array);
	      if (iteratee == null) {
	        return result;
	      }
	      return arrayMap(result, function(group) {
	        return apply(iteratee, undefined, group);
	      });
	    }
	
	    /**
	     * Creates an array excluding all given values using
	     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	     * for equality comparisons.
	     *
	     * **Note:** Unlike `_.pull`, this method returns a new array.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {...*} [values] The values to exclude.
	     * @returns {Array} Returns the new array of filtered values.
	     * @see _.difference, _.xor
	     * @example
	     *
	     * _.without([2, 1, 2, 3], 1, 2);
	     * // => [3]
	     */
	    var without = baseRest(function(array, values) {
	      return isArrayLikeObject(array)
	        ? baseDifference(array, values)
	        : [];
	    });
	
	    /**
	     * Creates an array of unique values that is the
	     * [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
	     * of the given arrays. The order of result values is determined by the order
	     * they occur in the arrays.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.4.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @returns {Array} Returns the new array of filtered values.
	     * @see _.difference, _.without
	     * @example
	     *
	     * _.xor([2, 1], [2, 3]);
	     * // => [1, 3]
	     */
	    var xor = baseRest(function(arrays) {
	      return baseXor(arrayFilter(arrays, isArrayLikeObject));
	    });
	
	    /**
	     * This method is like `_.xor` except that it accepts `iteratee` which is
	     * invoked for each element of each `arrays` to generate the criterion by
	     * which by which they're compared. The order of result values is determined
	     * by the order they occur in the arrays. The iteratee is invoked with one
	     * argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
	     * @returns {Array} Returns the new array of filtered values.
	     * @example
	     *
	     * _.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor);
	     * // => [1.2, 3.4]
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
	     * // => [{ 'x': 2 }]
	     */
	    var xorBy = baseRest(function(arrays) {
	      var iteratee = last(arrays);
	      if (isArrayLikeObject(iteratee)) {
	        iteratee = undefined;
	      }
	      return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee, 2));
	    });
	
	    /**
	     * This method is like `_.xor` except that it accepts `comparator` which is
	     * invoked to compare elements of `arrays`. The order of result values is
	     * determined by the order they occur in the arrays. The comparator is invoked
	     * with two arguments: (arrVal, othVal).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns the new array of filtered values.
	     * @example
	     *
	     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
	     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
	     *
	     * _.xorWith(objects, others, _.isEqual);
	     * // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
	     */
	    var xorWith = baseRest(function(arrays) {
	      var comparator = last(arrays);
	      comparator = typeof comparator == 'function' ? comparator : undefined;
	      return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined, comparator);
	    });
	
	    /**
	     * Creates an array of grouped elements, the first of which contains the
	     * first elements of the given arrays, the second of which contains the
	     * second elements of the given arrays, and so on.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to process.
	     * @returns {Array} Returns the new array of grouped elements.
	     * @example
	     *
	     * _.zip(['a', 'b'], [1, 2], [true, false]);
	     * // => [['a', 1, true], ['b', 2, false]]
	     */
	    var zip = baseRest(unzip);
	
	    /**
	     * This method is like `_.fromPairs` except that it accepts two arrays,
	     * one of property identifiers and one of corresponding values.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.4.0
	     * @category Array
	     * @param {Array} [props=[]] The property identifiers.
	     * @param {Array} [values=[]] The property values.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * _.zipObject(['a', 'b'], [1, 2]);
	     * // => { 'a': 1, 'b': 2 }
	     */
	    function zipObject(props, values) {
	      return baseZipObject(props || [], values || [], assignValue);
	    }
	
	    /**
	     * This method is like `_.zipObject` except that it supports property paths.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.1.0
	     * @category Array
	     * @param {Array} [props=[]] The property identifiers.
	     * @param {Array} [values=[]] The property values.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * _.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
	     * // => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
	     */
	    function zipObjectDeep(props, values) {
	      return baseZipObject(props || [], values || [], baseSet);
	    }
	
	    /**
	     * This method is like `_.zip` except that it accepts `iteratee` to specify
	     * how grouped values should be combined. The iteratee is invoked with the
	     * elements of each group: (...group).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.8.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to process.
	     * @param {Function} [iteratee=_.identity] The function to combine
	     *  grouped values.
	     * @returns {Array} Returns the new array of grouped elements.
	     * @example
	     *
	     * _.zipWith([1, 2], [10, 20], [100, 200], function(a, b, c) {
	     *   return a + b + c;
	     * });
	     * // => [111, 222]
	     */
	    var zipWith = baseRest(function(arrays) {
	      var length = arrays.length,
	          iteratee = length > 1 ? arrays[length - 1] : undefined;
	
	      iteratee = typeof iteratee == 'function' ? (arrays.pop(), iteratee) : undefined;
	      return unzipWith(arrays, iteratee);
	    });
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * Creates a `lodash` wrapper instance that wraps `value` with explicit method
	     * chain sequences enabled. The result of such sequences must be unwrapped
	     * with `_#value`.
	     *
	     * @static
	     * @memberOf _
	     * @since 1.3.0
	     * @category Seq
	     * @param {*} value The value to wrap.
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'age': 36 },
	     *   { 'user': 'fred',    'age': 40 },
	     *   { 'user': 'pebbles', 'age': 1 }
	     * ];
	     *
	     * var youngest = _
	     *   .chain(users)
	     *   .sortBy('age')
	     *   .map(function(o) {
	     *     return o.user + ' is ' + o.age;
	     *   })
	     *   .head()
	     *   .value();
	     * // => 'pebbles is 1'
	     */
	    function chain(value) {
	      var result = lodash(value);
	      result.__chain__ = true;
	      return result;
	    }
	
	    /**
	     * This method invokes `interceptor` and returns `value`. The interceptor
	     * is invoked with one argument; (value). The purpose of this method is to
	     * "tap into" a method chain sequence in order to modify intermediate results.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Seq
	     * @param {*} value The value to provide to `interceptor`.
	     * @param {Function} interceptor The function to invoke.
	     * @returns {*} Returns `value`.
	     * @example
	     *
	     * _([1, 2, 3])
	     *  .tap(function(array) {
	     *    // Mutate input array.
	     *    array.pop();
	     *  })
	     *  .reverse()
	     *  .value();
	     * // => [2, 1]
	     */
	    function tap(value, interceptor) {
	      interceptor(value);
	      return value;
	    }
	
	    /**
	     * This method is like `_.tap` except that it returns the result of `interceptor`.
	     * The purpose of this method is to "pass thru" values replacing intermediate
	     * results in a method chain sequence.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Seq
	     * @param {*} value The value to provide to `interceptor`.
	     * @param {Function} interceptor The function to invoke.
	     * @returns {*} Returns the result of `interceptor`.
	     * @example
	     *
	     * _('  abc  ')
	     *  .chain()
	     *  .trim()
	     *  .thru(function(value) {
	     *    return [value];
	     *  })
	     *  .value();
	     * // => ['abc']
	     */
	    function thru(value, interceptor) {
	      return interceptor(value);
	    }
	
	    /**
	     * This method is the wrapper version of `_.at`.
	     *
	     * @name at
	     * @memberOf _
	     * @since 1.0.0
	     * @category Seq
	     * @param {...(string|string[])} [paths] The property paths to pick.
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
	     *
	     * _(object).at(['a[0].b.c', 'a[1]']).value();
	     * // => [3, 4]
	     */
	    var wrapperAt = flatRest(function(paths) {
	      var length = paths.length,
	          start = length ? paths[0] : 0,
	          value = this.__wrapped__,
	          interceptor = function(object) { return baseAt(object, paths); };
	
	      if (length > 1 || this.__actions__.length ||
	          !(value instanceof LazyWrapper) || !isIndex(start)) {
	        return this.thru(interceptor);
	      }
	      value = value.slice(start, +start + (length ? 1 : 0));
	      value.__actions__.push({
	        'func': thru,
	        'args': [interceptor],
	        'thisArg': undefined
	      });
	      return new LodashWrapper(value, this.__chain__).thru(function(array) {
	        if (length && !array.length) {
	          array.push(undefined);
	        }
	        return array;
	      });
	    });
	
	    /**
	     * Creates a `lodash` wrapper instance with explicit method chain sequences enabled.
	     *
	     * @name chain
	     * @memberOf _
	     * @since 0.1.0
	     * @category Seq
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36 },
	     *   { 'user': 'fred',   'age': 40 }
	     * ];
	     *
	     * // A sequence without explicit chaining.
	     * _(users).head();
	     * // => { 'user': 'barney', 'age': 36 }
	     *
	     * // A sequence with explicit chaining.
	     * _(users)
	     *   .chain()
	     *   .head()
	     *   .pick('user')
	     *   .value();
	     * // => { 'user': 'barney' }
	     */
	    function wrapperChain() {
	      return chain(this);
	    }
	
	    /**
	     * Executes the chain sequence and returns the wrapped result.
	     *
	     * @name commit
	     * @memberOf _
	     * @since 3.2.0
	     * @category Seq
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var array = [1, 2];
	     * var wrapped = _(array).push(3);
	     *
	     * console.log(array);
	     * // => [1, 2]
	     *
	     * wrapped = wrapped.commit();
	     * console.log(array);
	     * // => [1, 2, 3]
	     *
	     * wrapped.last();
	     * // => 3
	     *
	     * console.log(array);
	     * // => [1, 2, 3]
	     */
	    function wrapperCommit() {
	      return new LodashWrapper(this.value(), this.__chain__);
	    }
	
	    /**
	     * Gets the next value on a wrapped object following the
	     * [iterator protocol](https://mdn.io/iteration_protocols#iterator).
	     *
	     * @name next
	     * @memberOf _
	     * @since 4.0.0
	     * @category Seq
	     * @returns {Object} Returns the next iterator value.
	     * @example
	     *
	     * var wrapped = _([1, 2]);
	     *
	     * wrapped.next();
	     * // => { 'done': false, 'value': 1 }
	     *
	     * wrapped.next();
	     * // => { 'done': false, 'value': 2 }
	     *
	     * wrapped.next();
	     * // => { 'done': true, 'value': undefined }
	     */
	    function wrapperNext() {
	      if (this.__values__ === undefined) {
	        this.__values__ = toArray(this.value());
	      }
	      var done = this.__index__ >= this.__values__.length,
	          value = done ? undefined : this.__values__[this.__index__++];
	
	      return { 'done': done, 'value': value };
	    }
	
	    /**
	     * Enables the wrapper to be iterable.
	     *
	     * @name Symbol.iterator
	     * @memberOf _
	     * @since 4.0.0
	     * @category Seq
	     * @returns {Object} Returns the wrapper object.
	     * @example
	     *
	     * var wrapped = _([1, 2]);
	     *
	     * wrapped[Symbol.iterator]() === wrapped;
	     * // => true
	     *
	     * Array.from(wrapped);
	     * // => [1, 2]
	     */
	    function wrapperToIterator() {
	      return this;
	    }
	
	    /**
	     * Creates a clone of the chain sequence planting `value` as the wrapped value.
	     *
	     * @name plant
	     * @memberOf _
	     * @since 3.2.0
	     * @category Seq
	     * @param {*} value The value to plant.
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * function square(n) {
	     *   return n * n;
	     * }
	     *
	     * var wrapped = _([1, 2]).map(square);
	     * var other = wrapped.plant([3, 4]);
	     *
	     * other.value();
	     * // => [9, 16]
	     *
	     * wrapped.value();
	     * // => [1, 4]
	     */
	    function wrapperPlant(value) {
	      var result,
	          parent = this;
	
	      while (parent instanceof baseLodash) {
	        var clone = wrapperClone(parent);
	        clone.__index__ = 0;
	        clone.__values__ = undefined;
	        if (result) {
	          previous.__wrapped__ = clone;
	        } else {
	          result = clone;
	        }
	        var previous = clone;
	        parent = parent.__wrapped__;
	      }
	      previous.__wrapped__ = value;
	      return result;
	    }
	
	    /**
	     * This method is the wrapper version of `_.reverse`.
	     *
	     * **Note:** This method mutates the wrapped array.
	     *
	     * @name reverse
	     * @memberOf _
	     * @since 0.1.0
	     * @category Seq
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var array = [1, 2, 3];
	     *
	     * _(array).reverse().value()
	     * // => [3, 2, 1]
	     *
	     * console.log(array);
	     * // => [3, 2, 1]
	     */
	    function wrapperReverse() {
	      var value = this.__wrapped__;
	      if (value instanceof LazyWrapper) {
	        var wrapped = value;
	        if (this.__actions__.length) {
	          wrapped = new LazyWrapper(this);
	        }
	        wrapped = wrapped.reverse();
	        wrapped.__actions__.push({
	          'func': thru,
	          'args': [reverse],
	          'thisArg': undefined
	        });
	        return new LodashWrapper(wrapped, this.__chain__);
	      }
	      return this.thru(reverse);
	    }
	
	    /**
	     * Executes the chain sequence to resolve the unwrapped value.
	     *
	     * @name value
	     * @memberOf _
	     * @since 0.1.0
	     * @alias toJSON, valueOf
	     * @category Seq
	     * @returns {*} Returns the resolved unwrapped value.
	     * @example
	     *
	     * _([1, 2, 3]).value();
	     * // => [1, 2, 3]
	     */
	    function wrapperValue() {
	      return baseWrapperValue(this.__wrapped__, this.__actions__);
	    }
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * Creates an object composed of keys generated from the results of running
	     * each element of `collection` thru `iteratee`. The corresponding value of
	     * each key is the number of times the key was returned by `iteratee`. The
	     * iteratee is invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 0.5.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
	     * @returns {Object} Returns the composed aggregate object.
	     * @example
	     *
	     * _.countBy([6.1, 4.2, 6.3], Math.floor);
	     * // => { '4': 1, '6': 2 }
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.countBy(['one', 'two', 'three'], 'length');
	     * // => { '3': 2, '5': 1 }
	     */
	    var countBy = createAggregator(function(result, value, key) {
	      if (hasOwnProperty.call(result, key)) {
	        ++result[key];
	      } else {
	        baseAssignValue(result, key, 1);
	      }
	    });
	
	    /**
	     * Checks if `predicate` returns truthy for **all** elements of `collection`.
	     * Iteration is stopped once `predicate` returns falsey. The predicate is
	     * invoked with three arguments: (value, index|key, collection).
	     *
	     * **Note:** This method returns `true` for
	     * [empty collections](https://en.wikipedia.org/wiki/Empty_set) because
	     * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
	     * elements of empty collections.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {boolean} Returns `true` if all elements pass the predicate check,
	     *  else `false`.
	     * @example
	     *
	     * _.every([true, 1, null, 'yes'], Boolean);
	     * // => false
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36, 'active': false },
	     *   { 'user': 'fred',   'age': 40, 'active': false }
	     * ];
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.every(users, { 'user': 'barney', 'active': false });
	     * // => false
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.every(users, ['active', false]);
	     * // => true
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.every(users, 'active');
	     * // => false
	     */
	    function every(collection, predicate, guard) {
	      var func = isArray(collection) ? arrayEvery : baseEvery;
	      if (guard && isIterateeCall(collection, predicate, guard)) {
	        predicate = undefined;
	      }
	      return func(collection, getIteratee(predicate, 3));
	    }
	
	    /**
	     * Iterates over elements of `collection`, returning an array of all elements
	     * `predicate` returns truthy for. The predicate is invoked with three
	     * arguments: (value, index|key, collection).
	     *
	     * **Note:** Unlike `_.remove`, this method returns a new array.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @returns {Array} Returns the new filtered array.
	     * @see _.reject
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36, 'active': true },
	     *   { 'user': 'fred',   'age': 40, 'active': false }
	     * ];
	     *
	     * _.filter(users, function(o) { return !o.active; });
	     * // => objects for ['fred']
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.filter(users, { 'age': 36, 'active': true });
	     * // => objects for ['barney']
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.filter(users, ['active', false]);
	     * // => objects for ['fred']
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.filter(users, 'active');
	     * // => objects for ['barney']
	     */
	    function filter(collection, predicate) {
	      var func = isArray(collection) ? arrayFilter : baseFilter;
	      return func(collection, getIteratee(predicate, 3));
	    }
	
	    /**
	     * Iterates over elements of `collection`, returning the first element
	     * `predicate` returns truthy for. The predicate is invoked with three
	     * arguments: (value, index|key, collection).
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to inspect.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @param {number} [fromIndex=0] The index to search from.
	     * @returns {*} Returns the matched element, else `undefined`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'age': 36, 'active': true },
	     *   { 'user': 'fred',    'age': 40, 'active': false },
	     *   { 'user': 'pebbles', 'age': 1,  'active': true }
	     * ];
	     *
	     * _.find(users, function(o) { return o.age < 40; });
	     * // => object for 'barney'
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.find(users, { 'age': 1, 'active': true });
	     * // => object for 'pebbles'
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.find(users, ['active', false]);
	     * // => object for 'fred'
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.find(users, 'active');
	     * // => object for 'barney'
	     */
	    var find = createFind(findIndex);
	
	    /**
	     * This method is like `_.find` except that it iterates over elements of
	     * `collection` from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.0.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to inspect.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @param {number} [fromIndex=collection.length-1] The index to search from.
	     * @returns {*} Returns the matched element, else `undefined`.
	     * @example
	     *
	     * _.findLast([1, 2, 3, 4], function(n) {
	     *   return n % 2 == 1;
	     * });
	     * // => 3
	     */
	    var findLast = createFind(findLastIndex);
	
	    /**
	     * Creates a flattened array of values by running each element in `collection`
	     * thru `iteratee` and flattening the mapped results. The iteratee is invoked
	     * with three arguments: (value, index|key, collection).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Array} Returns the new flattened array.
	     * @example
	     *
	     * function duplicate(n) {
	     *   return [n, n];
	     * }
	     *
	     * _.flatMap([1, 2], duplicate);
	     * // => [1, 1, 2, 2]
	     */
	    function flatMap(collection, iteratee) {
	      return baseFlatten(map(collection, iteratee), 1);
	    }
	
	    /**
	     * This method is like `_.flatMap` except that it recursively flattens the
	     * mapped results.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.7.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Array} Returns the new flattened array.
	     * @example
	     *
	     * function duplicate(n) {
	     *   return [[[n, n]]];
	     * }
	     *
	     * _.flatMapDeep([1, 2], duplicate);
	     * // => [1, 1, 2, 2]
	     */
	    function flatMapDeep(collection, iteratee) {
	      return baseFlatten(map(collection, iteratee), INFINITY);
	    }
	
	    /**
	     * This method is like `_.flatMap` except that it recursively flattens the
	     * mapped results up to `depth` times.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.7.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {number} [depth=1] The maximum recursion depth.
	     * @returns {Array} Returns the new flattened array.
	     * @example
	     *
	     * function duplicate(n) {
	     *   return [[[n, n]]];
	     * }
	     *
	     * _.flatMapDepth([1, 2], duplicate, 2);
	     * // => [[1, 1], [2, 2]]
	     */
	    function flatMapDepth(collection, iteratee, depth) {
	      depth = depth === undefined ? 1 : toInteger(depth);
	      return baseFlatten(map(collection, iteratee), depth);
	    }
	
	    /**
	     * Iterates over elements of `collection` and invokes `iteratee` for each element.
	     * The iteratee is invoked with three arguments: (value, index|key, collection).
	     * Iteratee functions may exit iteration early by explicitly returning `false`.
	     *
	     * **Note:** As with other "Collections" methods, objects with a "length"
	     * property are iterated like arrays. To avoid this behavior use `_.forIn`
	     * or `_.forOwn` for object iteration.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @alias each
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Array|Object} Returns `collection`.
	     * @see _.forEachRight
	     * @example
	     *
	     * _.forEach([1, 2], function(value) {
	     *   console.log(value);
	     * });
	     * // => Logs `1` then `2`.
	     *
	     * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
	     *   console.log(key);
	     * });
	     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
	     */
	    function forEach(collection, iteratee) {
	      var func = isArray(collection) ? arrayEach : baseEach;
	      return func(collection, getIteratee(iteratee, 3));
	    }
	
	    /**
	     * This method is like `_.forEach` except that it iterates over elements of
	     * `collection` from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.0.0
	     * @alias eachRight
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Array|Object} Returns `collection`.
	     * @see _.forEach
	     * @example
	     *
	     * _.forEachRight([1, 2], function(value) {
	     *   console.log(value);
	     * });
	     * // => Logs `2` then `1`.
	     */
	    function forEachRight(collection, iteratee) {
	      var func = isArray(collection) ? arrayEachRight : baseEachRight;
	      return func(collection, getIteratee(iteratee, 3));
	    }
	
	    /**
	     * Creates an object composed of keys generated from the results of running
	     * each element of `collection` thru `iteratee`. The order of grouped values
	     * is determined by the order they occur in `collection`. The corresponding
	     * value of each key is an array of elements responsible for generating the
	     * key. The iteratee is invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
	     * @returns {Object} Returns the composed aggregate object.
	     * @example
	     *
	     * _.groupBy([6.1, 4.2, 6.3], Math.floor);
	     * // => { '4': [4.2], '6': [6.1, 6.3] }
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.groupBy(['one', 'two', 'three'], 'length');
	     * // => { '3': ['one', 'two'], '5': ['three'] }
	     */
	    var groupBy = createAggregator(function(result, value, key) {
	      if (hasOwnProperty.call(result, key)) {
	        result[key].push(value);
	      } else {
	        baseAssignValue(result, key, [value]);
	      }
	    });
	
	    /**
	     * Checks if `value` is in `collection`. If `collection` is a string, it's
	     * checked for a substring of `value`, otherwise
	     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	     * is used for equality comparisons. If `fromIndex` is negative, it's used as
	     * the offset from the end of `collection`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to inspect.
	     * @param {*} value The value to search for.
	     * @param {number} [fromIndex=0] The index to search from.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
	     * @returns {boolean} Returns `true` if `value` is found, else `false`.
	     * @example
	     *
	     * _.includes([1, 2, 3], 1);
	     * // => true
	     *
	     * _.includes([1, 2, 3], 1, 2);
	     * // => false
	     *
	     * _.includes({ 'a': 1, 'b': 2 }, 1);
	     * // => true
	     *
	     * _.includes('abcd', 'bc');
	     * // => true
	     */
	    function includes(collection, value, fromIndex, guard) {
	      collection = isArrayLike(collection) ? collection : values(collection);
	      fromIndex = (fromIndex && !guard) ? toInteger(fromIndex) : 0;
	
	      var length = collection.length;
	      if (fromIndex < 0) {
	        fromIndex = nativeMax(length + fromIndex, 0);
	      }
	      return isString(collection)
	        ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1)
	        : (!!length && baseIndexOf(collection, value, fromIndex) > -1);
	    }
	
	    /**
	     * Invokes the method at `path` of each element in `collection`, returning
	     * an array of the results of each invoked method. Any additional arguments
	     * are provided to each invoked method. If `path` is a function, it's invoked
	     * for, and `this` bound to, each element in `collection`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Array|Function|string} path The path of the method to invoke or
	     *  the function invoked per iteration.
	     * @param {...*} [args] The arguments to invoke each method with.
	     * @returns {Array} Returns the array of results.
	     * @example
	     *
	     * _.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort');
	     * // => [[1, 5, 7], [1, 2, 3]]
	     *
	     * _.invokeMap([123, 456], String.prototype.split, '');
	     * // => [['1', '2', '3'], ['4', '5', '6']]
	     */
	    var invokeMap = baseRest(function(collection, path, args) {
	      var index = -1,
	          isFunc = typeof path == 'function',
	          result = isArrayLike(collection) ? Array(collection.length) : [];
	
	      baseEach(collection, function(value) {
	        result[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
	      });
	      return result;
	    });
	
	    /**
	     * Creates an object composed of keys generated from the results of running
	     * each element of `collection` thru `iteratee`. The corresponding value of
	     * each key is the last element responsible for generating the key. The
	     * iteratee is invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
	     * @returns {Object} Returns the composed aggregate object.
	     * @example
	     *
	     * var array = [
	     *   { 'dir': 'left', 'code': 97 },
	     *   { 'dir': 'right', 'code': 100 }
	     * ];
	     *
	     * _.keyBy(array, function(o) {
	     *   return String.fromCharCode(o.code);
	     * });
	     * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
	     *
	     * _.keyBy(array, 'dir');
	     * // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
	     */
	    var keyBy = createAggregator(function(result, value, key) {
	      baseAssignValue(result, key, value);
	    });
	
	    /**
	     * Creates an array of values by running each element in `collection` thru
	     * `iteratee`. The iteratee is invoked with three arguments:
	     * (value, index|key, collection).
	     *
	     * Many lodash methods are guarded to work as iteratees for methods like
	     * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
	     *
	     * The guarded methods are:
	     * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
	     * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
	     * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
	     * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Array} Returns the new mapped array.
	     * @example
	     *
	     * function square(n) {
	     *   return n * n;
	     * }
	     *
	     * _.map([4, 8], square);
	     * // => [16, 64]
	     *
	     * _.map({ 'a': 4, 'b': 8 }, square);
	     * // => [16, 64] (iteration order is not guaranteed)
	     *
	     * var users = [
	     *   { 'user': 'barney' },
	     *   { 'user': 'fred' }
	     * ];
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.map(users, 'user');
	     * // => ['barney', 'fred']
	     */
	    function map(collection, iteratee) {
	      var func = isArray(collection) ? arrayMap : baseMap;
	      return func(collection, getIteratee(iteratee, 3));
	    }
	
	    /**
	     * This method is like `_.sortBy` except that it allows specifying the sort
	     * orders of the iteratees to sort by. If `orders` is unspecified, all values
	     * are sorted in ascending order. Otherwise, specify an order of "desc" for
	     * descending or "asc" for ascending sort order of corresponding values.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Array[]|Function[]|Object[]|string[]} [iteratees=[_.identity]]
	     *  The iteratees to sort by.
	     * @param {string[]} [orders] The sort orders of `iteratees`.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
	     * @returns {Array} Returns the new sorted array.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'fred',   'age': 48 },
	     *   { 'user': 'barney', 'age': 34 },
	     *   { 'user': 'fred',   'age': 40 },
	     *   { 'user': 'barney', 'age': 36 }
	     * ];
	     *
	     * // Sort by `user` in ascending order and by `age` in descending order.
	     * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
	     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
	     */
	    function orderBy(collection, iteratees, orders, guard) {
	      if (collection == null) {
	        return [];
	      }
	      if (!isArray(iteratees)) {
	        iteratees = iteratees == null ? [] : [iteratees];
	      }
	      orders = guard ? undefined : orders;
	      if (!isArray(orders)) {
	        orders = orders == null ? [] : [orders];
	      }
	      return baseOrderBy(collection, iteratees, orders);
	    }
	
	    /**
	     * Creates an array of elements split into two groups, the first of which
	     * contains elements `predicate` returns truthy for, the second of which
	     * contains elements `predicate` returns falsey for. The predicate is
	     * invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @returns {Array} Returns the array of grouped elements.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'age': 36, 'active': false },
	     *   { 'user': 'fred',    'age': 40, 'active': true },
	     *   { 'user': 'pebbles', 'age': 1,  'active': false }
	     * ];
	     *
	     * _.partition(users, function(o) { return o.active; });
	     * // => objects for [['fred'], ['barney', 'pebbles']]
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.partition(users, { 'age': 1, 'active': false });
	     * // => objects for [['pebbles'], ['barney', 'fred']]
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.partition(users, ['active', false]);
	     * // => objects for [['barney', 'pebbles'], ['fred']]
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.partition(users, 'active');
	     * // => objects for [['fred'], ['barney', 'pebbles']]
	     */
	    var partition = createAggregator(function(result, value, key) {
	      result[key ? 0 : 1].push(value);
	    }, function() { return [[], []]; });
	
	    /**
	     * Reduces `collection` to a value which is the accumulated result of running
	     * each element in `collection` thru `iteratee`, where each successive
	     * invocation is supplied the return value of the previous. If `accumulator`
	     * is not given, the first element of `collection` is used as the initial
	     * value. The iteratee is invoked with four arguments:
	     * (accumulator, value, index|key, collection).
	     *
	     * Many lodash methods are guarded to work as iteratees for methods like
	     * `_.reduce`, `_.reduceRight`, and `_.transform`.
	     *
	     * The guarded methods are:
	     * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
	     * and `sortBy`
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [accumulator] The initial value.
	     * @returns {*} Returns the accumulated value.
	     * @see _.reduceRight
	     * @example
	     *
	     * _.reduce([1, 2], function(sum, n) {
	     *   return sum + n;
	     * }, 0);
	     * // => 3
	     *
	     * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
	     *   (result[value] || (result[value] = [])).push(key);
	     *   return result;
	     * }, {});
	     * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
	     */
	    function reduce(collection, iteratee, accumulator) {
	      var func = isArray(collection) ? arrayReduce : baseReduce,
	          initAccum = arguments.length < 3;
	
	      return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEach);
	    }
	
	    /**
	     * This method is like `_.reduce` except that it iterates over elements of
	     * `collection` from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [accumulator] The initial value.
	     * @returns {*} Returns the accumulated value.
	     * @see _.reduce
	     * @example
	     *
	     * var array = [[0, 1], [2, 3], [4, 5]];
	     *
	     * _.reduceRight(array, function(flattened, other) {
	     *   return flattened.concat(other);
	     * }, []);
	     * // => [4, 5, 2, 3, 0, 1]
	     */
	    function reduceRight(collection, iteratee, accumulator) {
	      var func = isArray(collection) ? arrayReduceRight : baseReduce,
	          initAccum = arguments.length < 3;
	
	      return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEachRight);
	    }
	
	    /**
	     * The opposite of `_.filter`; this method returns the elements of `collection`
	     * that `predicate` does **not** return truthy for.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @returns {Array} Returns the new filtered array.
	     * @see _.filter
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36, 'active': false },
	     *   { 'user': 'fred',   'age': 40, 'active': true }
	     * ];
	     *
	     * _.reject(users, function(o) { return !o.active; });
	     * // => objects for ['fred']
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.reject(users, { 'age': 40, 'active': true });
	     * // => objects for ['barney']
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.reject(users, ['active', false]);
	     * // => objects for ['fred']
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.reject(users, 'active');
	     * // => objects for ['barney']
	     */
	    function reject(collection, predicate) {
	      var func = isArray(collection) ? arrayFilter : baseFilter;
	      return func(collection, negate(getIteratee(predicate, 3)));
	    }
	
	    /**
	     * Gets a random element from `collection`.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.0.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to sample.
	     * @returns {*} Returns the random element.
	     * @example
	     *
	     * _.sample([1, 2, 3, 4]);
	     * // => 2
	     */
	    function sample(collection) {
	      var func = isArray(collection) ? arraySample : baseSample;
	      return func(collection);
	    }
	
	    /**
	     * Gets `n` random elements at unique keys from `collection` up to the
	     * size of `collection`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to sample.
	     * @param {number} [n=1] The number of elements to sample.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Array} Returns the random elements.
	     * @example
	     *
	     * _.sampleSize([1, 2, 3], 2);
	     * // => [3, 1]
	     *
	     * _.sampleSize([1, 2, 3], 4);
	     * // => [2, 3, 1]
	     */
	    function sampleSize(collection, n, guard) {
	      if ((guard ? isIterateeCall(collection, n, guard) : n === undefined)) {
	        n = 1;
	      } else {
	        n = toInteger(n);
	      }
	      var func = isArray(collection) ? arraySampleSize : baseSampleSize;
	      return func(collection, n);
	    }
	
	    /**
	     * Creates an array of shuffled values, using a version of the
	     * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to shuffle.
	     * @returns {Array} Returns the new shuffled array.
	     * @example
	     *
	     * _.shuffle([1, 2, 3, 4]);
	     * // => [4, 1, 3, 2]
	     */
	    function shuffle(collection) {
	      var func = isArray(collection) ? arrayShuffle : baseShuffle;
	      return func(collection);
	    }
	
	    /**
	     * Gets the size of `collection` by returning its length for array-like
	     * values or the number of own enumerable string keyed properties for objects.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to inspect.
	     * @returns {number} Returns the collection size.
	     * @example
	     *
	     * _.size([1, 2, 3]);
	     * // => 3
	     *
	     * _.size({ 'a': 1, 'b': 2 });
	     * // => 2
	     *
	     * _.size('pebbles');
	     * // => 7
	     */
	    function size(collection) {
	      if (collection == null) {
	        return 0;
	      }
	      if (isArrayLike(collection)) {
	        return isString(collection) ? stringSize(collection) : collection.length;
	      }
	      var tag = getTag(collection);
	      if (tag == mapTag || tag == setTag) {
	        return collection.size;
	      }
	      return baseKeys(collection).length;
	    }
	
	    /**
	     * Checks if `predicate` returns truthy for **any** element of `collection`.
	     * Iteration is stopped once `predicate` returns truthy. The predicate is
	     * invoked with three arguments: (value, index|key, collection).
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {boolean} Returns `true` if any element passes the predicate check,
	     *  else `false`.
	     * @example
	     *
	     * _.some([null, 0, 'yes', false], Boolean);
	     * // => true
	     *
	     * var users = [
	     *   { 'user': 'barney', 'active': true },
	     *   { 'user': 'fred',   'active': false }
	     * ];
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.some(users, { 'user': 'barney', 'active': false });
	     * // => false
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.some(users, ['active', false]);
	     * // => true
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.some(users, 'active');
	     * // => true
	     */
	    function some(collection, predicate, guard) {
	      var func = isArray(collection) ? arraySome : baseSome;
	      if (guard && isIterateeCall(collection, predicate, guard)) {
	        predicate = undefined;
	      }
	      return func(collection, getIteratee(predicate, 3));
	    }
	
	    /**
	     * Creates an array of elements, sorted in ascending order by the results of
	     * running each element in a collection thru each iteratee. This method
	     * performs a stable sort, that is, it preserves the original sort order of
	     * equal elements. The iteratees are invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {...(Function|Function[])} [iteratees=[_.identity]]
	     *  The iteratees to sort by.
	     * @returns {Array} Returns the new sorted array.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'fred',   'age': 48 },
	     *   { 'user': 'barney', 'age': 36 },
	     *   { 'user': 'fred',   'age': 40 },
	     *   { 'user': 'barney', 'age': 34 }
	     * ];
	     *
	     * _.sortBy(users, [function(o) { return o.user; }]);
	     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
	     *
	     * _.sortBy(users, ['user', 'age']);
	     * // => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]
	     */
	    var sortBy = baseRest(function(collection, iteratees) {
	      if (collection == null) {
	        return [];
	      }
	      var length = iteratees.length;
	      if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
	        iteratees = [];
	      } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
	        iteratees = [iteratees[0]];
	      }
	      return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
	    });
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * Gets the timestamp of the number of milliseconds that have elapsed since
	     * the Unix epoch (1 January 1970 00:00:00 UTC).
	     *
	     * @static
	     * @memberOf _
	     * @since 2.4.0
	     * @category Date
	     * @returns {number} Returns the timestamp.
	     * @example
	     *
	     * _.defer(function(stamp) {
	     *   console.log(_.now() - stamp);
	     * }, _.now());
	     * // => Logs the number of milliseconds it took for the deferred invocation.
	     */
	    var now = ctxNow || function() {
	      return root.Date.now();
	    };
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * The opposite of `_.before`; this method creates a function that invokes
	     * `func` once it's called `n` or more times.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Function
	     * @param {number} n The number of calls before `func` is invoked.
	     * @param {Function} func The function to restrict.
	     * @returns {Function} Returns the new restricted function.
	     * @example
	     *
	     * var saves = ['profile', 'settings'];
	     *
	     * var done = _.after(saves.length, function() {
	     *   console.log('done saving!');
	     * });
	     *
	     * _.forEach(saves, function(type) {
	     *   asyncSave({ 'type': type, 'complete': done });
	     * });
	     * // => Logs 'done saving!' after the two async saves have completed.
	     */
	    function after(n, func) {
	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      n = toInteger(n);
	      return function() {
	        if (--n < 1) {
	          return func.apply(this, arguments);
	        }
	      };
	    }
	
	    /**
	     * Creates a function that invokes `func`, with up to `n` arguments,
	     * ignoring any additional arguments.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Function
	     * @param {Function} func The function to cap arguments for.
	     * @param {number} [n=func.length] The arity cap.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Function} Returns the new capped function.
	     * @example
	     *
	     * _.map(['6', '8', '10'], _.ary(parseInt, 1));
	     * // => [6, 8, 10]
	     */
	    function ary(func, n, guard) {
	      n = guard ? undefined : n;
	      n = (func && n == null) ? func.length : n;
	      return createWrap(func, WRAP_ARY_FLAG, undefined, undefined, undefined, undefined, n);
	    }
	
	    /**
	     * Creates a function that invokes `func`, with the `this` binding and arguments
	     * of the created function, while it's called less than `n` times. Subsequent
	     * calls to the created function return the result of the last `func` invocation.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Function
	     * @param {number} n The number of calls at which `func` is no longer invoked.
	     * @param {Function} func The function to restrict.
	     * @returns {Function} Returns the new restricted function.
	     * @example
	     *
	     * jQuery(element).on('click', _.before(5, addContactToList));
	     * // => Allows adding up to 4 contacts to the list.
	     */
	    function before(n, func) {
	      var result;
	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      n = toInteger(n);
	      return function() {
	        if (--n > 0) {
	          result = func.apply(this, arguments);
	        }
	        if (n <= 1) {
	          func = undefined;
	        }
	        return result;
	      };
	    }
	
	    /**
	     * Creates a function that invokes `func` with the `this` binding of `thisArg`
	     * and `partials` prepended to the arguments it receives.
	     *
	     * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
	     * may be used as a placeholder for partially applied arguments.
	     *
	     * **Note:** Unlike native `Function#bind`, this method doesn't set the "length"
	     * property of bound functions.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Function
	     * @param {Function} func The function to bind.
	     * @param {*} thisArg The `this` binding of `func`.
	     * @param {...*} [partials] The arguments to be partially applied.
	     * @returns {Function} Returns the new bound function.
	     * @example
	     *
	     * function greet(greeting, punctuation) {
	     *   return greeting + ' ' + this.user + punctuation;
	     * }
	     *
	     * var object = { 'user': 'fred' };
	     *
	     * var bound = _.bind(greet, object, 'hi');
	     * bound('!');
	     * // => 'hi fred!'
	     *
	     * // Bound with placeholders.
	     * var bound = _.bind(greet, object, _, '!');
	     * bound('hi');
	     * // => 'hi fred!'
	     */
	    var bind = baseRest(function(func, thisArg, partials) {
	      var bitmask = WRAP_BIND_FLAG;
	      if (partials.length) {
	        var holders = replaceHolders(partials, getHolder(bind));
	        bitmask |= WRAP_PARTIAL_FLAG;
	      }
	      return createWrap(func, bitmask, thisArg, partials, holders);
	    });
	
	    /**
	     * Creates a function that invokes the method at `object[key]` with `partials`
	     * prepended to the arguments it receives.
	     *
	     * This method differs from `_.bind` by allowing bound functions to reference
	     * methods that may be redefined or don't yet exist. See
	     * [Peter Michaux's article](http://peter.michaux.ca/articles/lazy-function-definition-pattern)
	     * for more details.
	     *
	     * The `_.bindKey.placeholder` value, which defaults to `_` in monolithic
	     * builds, may be used as a placeholder for partially applied arguments.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.10.0
	     * @category Function
	     * @param {Object} object The object to invoke the method on.
	     * @param {string} key The key of the method.
	     * @param {...*} [partials] The arguments to be partially applied.
	     * @returns {Function} Returns the new bound function.
	     * @example
	     *
	     * var object = {
	     *   'user': 'fred',
	     *   'greet': function(greeting, punctuation) {
	     *     return greeting + ' ' + this.user + punctuation;
	     *   }
	     * };
	     *
	     * var bound = _.bindKey(object, 'greet', 'hi');
	     * bound('!');
	     * // => 'hi fred!'
	     *
	     * object.greet = function(greeting, punctuation) {
	     *   return greeting + 'ya ' + this.user + punctuation;
	     * };
	     *
	     * bound('!');
	     * // => 'hiya fred!'
	     *
	     * // Bound with placeholders.
	     * var bound = _.bindKey(object, 'greet', _, '!');
	     * bound('hi');
	     * // => 'hiya fred!'
	     */
	    var bindKey = baseRest(function(object, key, partials) {
	      var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
	      if (partials.length) {
	        var holders = replaceHolders(partials, getHolder(bindKey));
	        bitmask |= WRAP_PARTIAL_FLAG;
	      }
	      return createWrap(key, bitmask, object, partials, holders);
	    });
	
	    /**
	     * Creates a function that accepts arguments of `func` and either invokes
	     * `func` returning its result, if at least `arity` number of arguments have
	     * been provided, or returns a function that accepts the remaining `func`
	     * arguments, and so on. The arity of `func` may be specified if `func.length`
	     * is not sufficient.
	     *
	     * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
	     * may be used as a placeholder for provided arguments.
	     *
	     * **Note:** This method doesn't set the "length" property of curried functions.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.0.0
	     * @category Function
	     * @param {Function} func The function to curry.
	     * @param {number} [arity=func.length] The arity of `func`.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Function} Returns the new curried function.
	     * @example
	     *
	     * var abc = function(a, b, c) {
	     *   return [a, b, c];
	     * };
	     *
	     * var curried = _.curry(abc);
	     *
	     * curried(1)(2)(3);
	     * // => [1, 2, 3]
	     *
	     * curried(1, 2)(3);
	     * // => [1, 2, 3]
	     *
	     * curried(1, 2, 3);
	     * // => [1, 2, 3]
	     *
	     * // Curried with placeholders.
	     * curried(1)(_, 3)(2);
	     * // => [1, 2, 3]
	     */
	    function curry(func, arity, guard) {
	      arity = guard ? undefined : arity;
	      var result = createWrap(func, WRAP_CURRY_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
	      result.placeholder = curry.placeholder;
	      return result;
	    }
	
	    /**
	     * This method is like `_.curry` except that arguments are applied to `func`
	     * in the manner of `_.partialRight` instead of `_.partial`.
	     *
	     * The `_.curryRight.placeholder` value, which defaults to `_` in monolithic
	     * builds, may be used as a placeholder for provided arguments.
	     *
	     * **Note:** This method doesn't set the "length" property of curried functions.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Function
	     * @param {Function} func The function to curry.
	     * @param {number} [arity=func.length] The arity of `func`.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Function} Returns the new curried function.
	     * @example
	     *
	     * var abc = function(a, b, c) {
	     *   return [a, b, c];
	     * };
	     *
	     * var curried = _.curryRight(abc);
	     *
	     * curried(3)(2)(1);
	     * // => [1, 2, 3]
	     *
	     * curried(2, 3)(1);
	     * // => [1, 2, 3]
	     *
	     * curried(1, 2, 3);
	     * // => [1, 2, 3]
	     *
	     * // Curried with placeholders.
	     * curried(3)(1, _)(2);
	     * // => [1, 2, 3]
	     */
	    function curryRight(func, arity, guard) {
	      arity = guard ? undefined : arity;
	      var result = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
	      result.placeholder = curryRight.placeholder;
	      return result;
	    }
	
	    /**
	     * Creates a debounced function that delays invoking `func` until after `wait`
	     * milliseconds have elapsed since the last time the debounced function was
	     * invoked. The debounced function comes with a `cancel` method to cancel
	     * delayed `func` invocations and a `flush` method to immediately invoke them.
	     * Provide `options` to indicate whether `func` should be invoked on the
	     * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
	     * with the last arguments provided to the debounced function. Subsequent
	     * calls to the debounced function return the result of the last `func`
	     * invocation.
	     *
	     * **Note:** If `leading` and `trailing` options are `true`, `func` is
	     * invoked on the trailing edge of the timeout only if the debounced function
	     * is invoked more than once during the `wait` timeout.
	     *
	     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	     *
	     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	     * for details over the differences between `_.debounce` and `_.throttle`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Function
	     * @param {Function} func The function to debounce.
	     * @param {number} [wait=0] The number of milliseconds to delay.
	     * @param {Object} [options={}] The options object.
	     * @param {boolean} [options.leading=false]
	     *  Specify invoking on the leading edge of the timeout.
	     * @param {number} [options.maxWait]
	     *  The maximum time `func` is allowed to be delayed before it's invoked.
	     * @param {boolean} [options.trailing=true]
	     *  Specify invoking on the trailing edge of the timeout.
	     * @returns {Function} Returns the new debounced function.
	     * @example
	     *
	     * // Avoid costly calculations while the window size is in flux.
	     * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	     *
	     * // Invoke `sendMail` when clicked, debouncing subsequent calls.
	     * jQuery(element).on('click', _.debounce(sendMail, 300, {
	     *   'leading': true,
	     *   'trailing': false
	     * }));
	     *
	     * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
	     * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
	     * var source = new EventSource('/stream');
	     * jQuery(source).on('message', debounced);
	     *
	     * // Cancel the trailing debounced invocation.
	     * jQuery(window).on('popstate', debounced.cancel);
	     */
	    function debounce(func, wait, options) {
	      var lastArgs,
	          lastThis,
	          maxWait,
	          result,
	          timerId,
	          lastCallTime,
	          lastInvokeTime = 0,
	          leading = false,
	          maxing = false,
	          trailing = true;
	
	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      wait = toNumber(wait) || 0;
	      if (isObject(options)) {
	        leading = !!options.leading;
	        maxing = 'maxWait' in options;
	        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
	        trailing = 'trailing' in options ? !!options.trailing : trailing;
	      }
	
	      function invokeFunc(time) {
	        var args = lastArgs,
	            thisArg = lastThis;
	
	        lastArgs = lastThis = undefined;
	        lastInvokeTime = time;
	        result = func.apply(thisArg, args);
	        return result;
	      }
	
	      function leadingEdge(time) {
	        // Reset any `maxWait` timer.
	        lastInvokeTime = time;
	        // Start the timer for the trailing edge.
	        timerId = setTimeout(timerExpired, wait);
	        // Invoke the leading edge.
	        return leading ? invokeFunc(time) : result;
	      }
	
	      function remainingWait(time) {
	        var timeSinceLastCall = time - lastCallTime,
	            timeSinceLastInvoke = time - lastInvokeTime,
	            result = wait - timeSinceLastCall;
	
	        return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
	      }
	
	      function shouldInvoke(time) {
	        var timeSinceLastCall = time - lastCallTime,
	            timeSinceLastInvoke = time - lastInvokeTime;
	
	        // Either this is the first call, activity has stopped and we're at the
	        // trailing edge, the system time has gone backwards and we're treating
	        // it as the trailing edge, or we've hit the `maxWait` limit.
	        return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
	          (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
	      }
	
	      function timerExpired() {
	        var time = now();
	        if (shouldInvoke(time)) {
	          return trailingEdge(time);
	        }
	        // Restart the timer.
	        timerId = setTimeout(timerExpired, remainingWait(time));
	      }
	
	      function trailingEdge(time) {
	        timerId = undefined;
	
	        // Only invoke if we have `lastArgs` which means `func` has been
	        // debounced at least once.
	        if (trailing && lastArgs) {
	          return invokeFunc(time);
	        }
	        lastArgs = lastThis = undefined;
	        return result;
	      }
	
	      function cancel() {
	        if (timerId !== undefined) {
	          clearTimeout(timerId);
	        }
	        lastInvokeTime = 0;
	        lastArgs = lastCallTime = lastThis = timerId = undefined;
	      }
	
	      function flush() {
	        return timerId === undefined ? result : trailingEdge(now());
	      }
	
	      function debounced() {
	        var time = now(),
	            isInvoking = shouldInvoke(time);
	
	        lastArgs = arguments;
	        lastThis = this;
	        lastCallTime = time;
	
	        if (isInvoking) {
	          if (timerId === undefined) {
	            return leadingEdge(lastCallTime);
	          }
	          if (maxing) {
	            // Handle invocations in a tight loop.
	            timerId = setTimeout(timerExpired, wait);
	            return invokeFunc(lastCallTime);
	          }
	        }
	        if (timerId === undefined) {
	          timerId = setTimeout(timerExpired, wait);
	        }
	        return result;
	      }
	      debounced.cancel = cancel;
	      debounced.flush = flush;
	      return debounced;
	    }
	
	    /**
	     * Defers invoking the `func` until the current call stack has cleared. Any
	     * additional arguments are provided to `func` when it's invoked.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Function
	     * @param {Function} func The function to defer.
	     * @param {...*} [args] The arguments to invoke `func` with.
	     * @returns {number} Returns the timer id.
	     * @example
	     *
	     * _.defer(function(text) {
	     *   console.log(text);
	     * }, 'deferred');
	     * // => Logs 'deferred' after one millisecond.
	     */
	    var defer = baseRest(function(func, args) {
	      return baseDelay(func, 1, args);
	    });
	
	    /**
	     * Invokes `func` after `wait` milliseconds. Any additional arguments are
	     * provided to `func` when it's invoked.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Function
	     * @param {Function} func The function to delay.
	     * @param {number} wait The number of milliseconds to delay invocation.
	     * @param {...*} [args] The arguments to invoke `func` with.
	     * @returns {number} Returns the timer id.
	     * @example
	     *
	     * _.delay(function(text) {
	     *   console.log(text);
	     * }, 1000, 'later');
	     * // => Logs 'later' after one second.
	     */
	    var delay = baseRest(function(func, wait, args) {
	      return baseDelay(func, toNumber(wait) || 0, args);
	    });
	
	    /**
	     * Creates a function that invokes `func` with arguments reversed.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Function
	     * @param {Function} func The function to flip arguments for.
	     * @returns {Function} Returns the new flipped function.
	     * @example
	     *
	     * var flipped = _.flip(function() {
	     *   return _.toArray(arguments);
	     * });
	     *
	     * flipped('a', 'b', 'c', 'd');
	     * // => ['d', 'c', 'b', 'a']
	     */
	    function flip(func) {
	      return createWrap(func, WRAP_FLIP_FLAG);
	    }
	
	    /**
	     * Creates a function that memoizes the result of `func`. If `resolver` is
	     * provided, it determines the cache key for storing the result based on the
	     * arguments provided to the memoized function. By default, the first argument
	     * provided to the memoized function is used as the map cache key. The `func`
	     * is invoked with the `this` binding of the memoized function.
	     *
	     * **Note:** The cache is exposed as the `cache` property on the memoized
	     * function. Its creation may be customized by replacing the `_.memoize.Cache`
	     * constructor with one whose instances implement the
	     * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
	     * method interface of `clear`, `delete`, `get`, `has`, and `set`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Function
	     * @param {Function} func The function to have its output memoized.
	     * @param {Function} [resolver] The function to resolve the cache key.
	     * @returns {Function} Returns the new memoized function.
	     * @example
	     *
	     * var object = { 'a': 1, 'b': 2 };
	     * var other = { 'c': 3, 'd': 4 };
	     *
	     * var values = _.memoize(_.values);
	     * values(object);
	     * // => [1, 2]
	     *
	     * values(other);
	     * // => [3, 4]
	     *
	     * object.a = 2;
	     * values(object);
	     * // => [1, 2]
	     *
	     * // Modify the result cache.
	     * values.cache.set(object, ['a', 'b']);
	     * values(object);
	     * // => ['a', 'b']
	     *
	     * // Replace `_.memoize.Cache`.
	     * _.memoize.Cache = WeakMap;
	     */
	    function memoize(func, resolver) {
	      if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      var memoized = function() {
	        var args = arguments,
	            key = resolver ? resolver.apply(this, args) : args[0],
	            cache = memoized.cache;
	
	        if (cache.has(key)) {
	          return cache.get(key);
	        }
	        var result = func.apply(this, args);
	        memoized.cache = cache.set(key, result) || cache;
	        return result;
	      };
	      memoized.cache = new (memoize.Cache || MapCache);
	      return memoized;
	    }
	
	    // Expose `MapCache`.
	    memoize.Cache = MapCache;
	
	    /**
	     * Creates a function that negates the result of the predicate `func`. The
	     * `func` predicate is invoked with the `this` binding and arguments of the
	     * created function.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Function
	     * @param {Function} predicate The predicate to negate.
	     * @returns {Function} Returns the new negated function.
	     * @example
	     *
	     * function isEven(n) {
	     *   return n % 2 == 0;
	     * }
	     *
	     * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
	     * // => [1, 3, 5]
	     */
	    function negate(predicate) {
	      if (typeof predicate != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      return function() {
	        var args = arguments;
	        switch (args.length) {
	          case 0: return !predicate.call(this);
	          case 1: return !predicate.call(this, args[0]);
	          case 2: return !predicate.call(this, args[0], args[1]);
	          case 3: return !predicate.call(this, args[0], args[1], args[2]);
	        }
	        return !predicate.apply(this, args);
	      };
	    }
	
	    /**
	     * Creates a function that is restricted to invoking `func` once. Repeat calls
	     * to the function return the value of the first invocation. The `func` is
	     * invoked with the `this` binding and arguments of the created function.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Function
	     * @param {Function} func The function to restrict.
	     * @returns {Function} Returns the new restricted function.
	     * @example
	     *
	     * var initialize = _.once(createApplication);
	     * initialize();
	     * initialize();
	     * // => `createApplication` is invoked once
	     */
	    function once(func) {
	      return before(2, func);
	    }
	
	    /**
	     * Creates a function that invokes `func` with its arguments transformed.
	     *
	     * @static
	     * @since 4.0.0
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to wrap.
	     * @param {...(Function|Function[])} [transforms=[_.identity]]
	     *  The argument transforms.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * function doubled(n) {
	     *   return n * 2;
	     * }
	     *
	     * function square(n) {
	     *   return n * n;
	     * }
	     *
	     * var func = _.overArgs(function(x, y) {
	     *   return [x, y];
	     * }, [square, doubled]);
	     *
	     * func(9, 3);
	     * // => [81, 6]
	     *
	     * func(10, 5);
	     * // => [100, 10]
	     */
	    var overArgs = castRest(function(func, transforms) {
	      transforms = (transforms.length == 1 && isArray(transforms[0]))
	        ? arrayMap(transforms[0], baseUnary(getIteratee()))
	        : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));
	
	      var funcsLength = transforms.length;
	      return baseRest(function(args) {
	        var index = -1,
	            length = nativeMin(args.length, funcsLength);
	
	        while (++index < length) {
	          args[index] = transforms[index].call(this, args[index]);
	        }
	        return apply(func, this, args);
	      });
	    });
	
	    /**
	     * Creates a function that invokes `func` with `partials` prepended to the
	     * arguments it receives. This method is like `_.bind` except it does **not**
	     * alter the `this` binding.
	     *
	     * The `_.partial.placeholder` value, which defaults to `_` in monolithic
	     * builds, may be used as a placeholder for partially applied arguments.
	     *
	     * **Note:** This method doesn't set the "length" property of partially
	     * applied functions.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.2.0
	     * @category Function
	     * @param {Function} func The function to partially apply arguments to.
	     * @param {...*} [partials] The arguments to be partially applied.
	     * @returns {Function} Returns the new partially applied function.
	     * @example
	     *
	     * function greet(greeting, name) {
	     *   return greeting + ' ' + name;
	     * }
	     *
	     * var sayHelloTo = _.partial(greet, 'hello');
	     * sayHelloTo('fred');
	     * // => 'hello fred'
	     *
	     * // Partially applied with placeholders.
	     * var greetFred = _.partial(greet, _, 'fred');
	     * greetFred('hi');
	     * // => 'hi fred'
	     */
	    var partial = baseRest(function(func, partials) {
	      var holders = replaceHolders(partials, getHolder(partial));
	      return createWrap(func, WRAP_PARTIAL_FLAG, undefined, partials, holders);
	    });
	
	    /**
	     * This method is like `_.partial` except that partially applied arguments
	     * are appended to the arguments it receives.
	     *
	     * The `_.partialRight.placeholder` value, which defaults to `_` in monolithic
	     * builds, may be used as a placeholder for partially applied arguments.
	     *
	     * **Note:** This method doesn't set the "length" property of partially
	     * applied functions.
	     *
	     * @static
	     * @memberOf _
	     * @since 1.0.0
	     * @category Function
	     * @param {Function} func The function to partially apply arguments to.
	     * @param {...*} [partials] The arguments to be partially applied.
	     * @returns {Function} Returns the new partially applied function.
	     * @example
	     *
	     * function greet(greeting, name) {
	     *   return greeting + ' ' + name;
	     * }
	     *
	     * var greetFred = _.partialRight(greet, 'fred');
	     * greetFred('hi');
	     * // => 'hi fred'
	     *
	     * // Partially applied with placeholders.
	     * var sayHelloTo = _.partialRight(greet, 'hello', _);
	     * sayHelloTo('fred');
	     * // => 'hello fred'
	     */
	    var partialRight = baseRest(function(func, partials) {
	      var holders = replaceHolders(partials, getHolder(partialRight));
	      return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined, partials, holders);
	    });
	
	    /**
	     * Creates a function that invokes `func` with arguments arranged according
	     * to the specified `indexes` where the argument value at the first index is
	     * provided as the first argument, the argument value at the second index is
	     * provided as the second argument, and so on.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Function
	     * @param {Function} func The function to rearrange arguments for.
	     * @param {...(number|number[])} indexes The arranged argument indexes.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var rearged = _.rearg(function(a, b, c) {
	     *   return [a, b, c];
	     * }, [2, 0, 1]);
	     *
	     * rearged('b', 'c', 'a')
	     * // => ['a', 'b', 'c']
	     */
	    var rearg = flatRest(function(func, indexes) {
	      return createWrap(func, WRAP_REARG_FLAG, undefined, undefined, undefined, indexes);
	    });
	
	    /**
	     * Creates a function that invokes `func` with the `this` binding of the
	     * created function and arguments from `start` and beyond provided as
	     * an array.
	     *
	     * **Note:** This method is based on the
	     * [rest parameter](https://mdn.io/rest_parameters).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Function
	     * @param {Function} func The function to apply a rest parameter to.
	     * @param {number} [start=func.length-1] The start position of the rest parameter.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var say = _.rest(function(what, names) {
	     *   return what + ' ' + _.initial(names).join(', ') +
	     *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
	     * });
	     *
	     * say('hello', 'fred', 'barney', 'pebbles');
	     * // => 'hello fred, barney, & pebbles'
	     */
	    function rest(func, start) {
	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      start = start === undefined ? start : toInteger(start);
	      return baseRest(func, start);
	    }
	
	    /**
	     * Creates a function that invokes `func` with the `this` binding of the
	     * create function and an array of arguments much like
	     * [`Function#apply`](http://www.ecma-international.org/ecma-262/7.0/#sec-function.prototype.apply).
	     *
	     * **Note:** This method is based on the
	     * [spread operator](https://mdn.io/spread_operator).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.2.0
	     * @category Function
	     * @param {Function} func The function to spread arguments over.
	     * @param {number} [start=0] The start position of the spread.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var say = _.spread(function(who, what) {
	     *   return who + ' says ' + what;
	     * });
	     *
	     * say(['fred', 'hello']);
	     * // => 'fred says hello'
	     *
	     * var numbers = Promise.all([
	     *   Promise.resolve(40),
	     *   Promise.resolve(36)
	     * ]);
	     *
	     * numbers.then(_.spread(function(x, y) {
	     *   return x + y;
	     * }));
	     * // => a Promise of 76
	     */
	    function spread(func, start) {
	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      start = start == null ? 0 : nativeMax(toInteger(start), 0);
	      return baseRest(function(args) {
	        var array = args[start],
	            otherArgs = castSlice(args, 0, start);
	
	        if (array) {
	          arrayPush(otherArgs, array);
	        }
	        return apply(func, this, otherArgs);
	      });
	    }
	
	    /**
	     * Creates a throttled function that only invokes `func` at most once per
	     * every `wait` milliseconds. The throttled function comes with a `cancel`
	     * method to cancel delayed `func` invocations and a `flush` method to
	     * immediately invoke them. Provide `options` to indicate whether `func`
	     * should be invoked on the leading and/or trailing edge of the `wait`
	     * timeout. The `func` is invoked with the last arguments provided to the
	     * throttled function. Subsequent calls to the throttled function return the
	     * result of the last `func` invocation.
	     *
	     * **Note:** If `leading` and `trailing` options are `true`, `func` is
	     * invoked on the trailing edge of the timeout only if the throttled function
	     * is invoked more than once during the `wait` timeout.
	     *
	     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	     *
	     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	     * for details over the differences between `_.throttle` and `_.debounce`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Function
	     * @param {Function} func The function to throttle.
	     * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
	     * @param {Object} [options={}] The options object.
	     * @param {boolean} [options.leading=true]
	     *  Specify invoking on the leading edge of the timeout.
	     * @param {boolean} [options.trailing=true]
	     *  Specify invoking on the trailing edge of the timeout.
	     * @returns {Function} Returns the new throttled function.
	     * @example
	     *
	     * // Avoid excessively updating the position while scrolling.
	     * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
	     *
	     * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
	     * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
	     * jQuery(element).on('click', throttled);
	     *
	     * // Cancel the trailing throttled invocation.
	     * jQuery(window).on('popstate', throttled.cancel);
	     */
	    function throttle(func, wait, options) {
	      var leading = true,
	          trailing = true;
	
	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      if (isObject(options)) {
	        leading = 'leading' in options ? !!options.leading : leading;
	        trailing = 'trailing' in options ? !!options.trailing : trailing;
	      }
	      return debounce(func, wait, {
	        'leading': leading,
	        'maxWait': wait,
	        'trailing': trailing
	      });
	    }
	
	    /**
	     * Creates a function that accepts up to one argument, ignoring any
	     * additional arguments.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Function
	     * @param {Function} func The function to cap arguments for.
	     * @returns {Function} Returns the new capped function.
	     * @example
	     *
	     * _.map(['6', '8', '10'], _.unary(parseInt));
	     * // => [6, 8, 10]
	     */
	    function unary(func) {
	      return ary(func, 1);
	    }
	
	    /**
	     * Creates a function that provides `value` to `wrapper` as its first
	     * argument. Any additional arguments provided to the function are appended
	     * to those provided to the `wrapper`. The wrapper is invoked with the `this`
	     * binding of the created function.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Function
	     * @param {*} value The value to wrap.
	     * @param {Function} [wrapper=identity] The wrapper function.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var p = _.wrap(_.escape, function(func, text) {
	     *   return '<p>' + func(text) + '</p>';
	     * });
	     *
	     * p('fred, barney, & pebbles');
	     * // => '<p>fred, barney, &amp; pebbles</p>'
	     */
	    function wrap(value, wrapper) {
	      return partial(castFunction(wrapper), value);
	    }
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * Casts `value` as an array if it's not one.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.4.0
	     * @category Lang
	     * @param {*} value The value to inspect.
	     * @returns {Array} Returns the cast array.
	     * @example
	     *
	     * _.castArray(1);
	     * // => [1]
	     *
	     * _.castArray({ 'a': 1 });
	     * // => [{ 'a': 1 }]
	     *
	     * _.castArray('abc');
	     * // => ['abc']
	     *
	     * _.castArray(null);
	     * // => [null]
	     *
	     * _.castArray(undefined);
	     * // => [undefined]
	     *
	     * _.castArray();
	     * // => []
	     *
	     * var array = [1, 2, 3];
	     * console.log(_.castArray(array) === array);
	     * // => true
	     */
	    function castArray() {
	      if (!arguments.length) {
	        return [];
	      }
	      var value = arguments[0];
	      return isArray(value) ? value : [value];
	    }
	
	    /**
	     * Creates a shallow clone of `value`.
	     *
	     * **Note:** This method is loosely based on the
	     * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
	     * and supports cloning arrays, array buffers, booleans, date objects, maps,
	     * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
	     * arrays. The own enumerable properties of `arguments` objects are cloned
	     * as plain objects. An empty object is returned for uncloneable values such
	     * as error objects, functions, DOM nodes, and WeakMaps.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to clone.
	     * @returns {*} Returns the cloned value.
	     * @see _.cloneDeep
	     * @example
	     *
	     * var objects = [{ 'a': 1 }, { 'b': 2 }];
	     *
	     * var shallow = _.clone(objects);
	     * console.log(shallow[0] === objects[0]);
	     * // => true
	     */
	    function clone(value) {
	      return baseClone(value, CLONE_SYMBOLS_FLAG);
	    }
	
	    /**
	     * This method is like `_.clone` except that it accepts `customizer` which
	     * is invoked to produce the cloned value. If `customizer` returns `undefined`,
	     * cloning is handled by the method instead. The `customizer` is invoked with
	     * up to four arguments; (value [, index|key, object, stack]).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to clone.
	     * @param {Function} [customizer] The function to customize cloning.
	     * @returns {*} Returns the cloned value.
	     * @see _.cloneDeepWith
	     * @example
	     *
	     * function customizer(value) {
	     *   if (_.isElement(value)) {
	     *     return value.cloneNode(false);
	     *   }
	     * }
	     *
	     * var el = _.cloneWith(document.body, customizer);
	     *
	     * console.log(el === document.body);
	     * // => false
	     * console.log(el.nodeName);
	     * // => 'BODY'
	     * console.log(el.childNodes.length);
	     * // => 0
	     */
	    function cloneWith(value, customizer) {
	      customizer = typeof customizer == 'function' ? customizer : undefined;
	      return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
	    }
	
	    /**
	     * This method is like `_.clone` except that it recursively clones `value`.
	     *
	     * @static
	     * @memberOf _
	     * @since 1.0.0
	     * @category Lang
	     * @param {*} value The value to recursively clone.
	     * @returns {*} Returns the deep cloned value.
	     * @see _.clone
	     * @example
	     *
	     * var objects = [{ 'a': 1 }, { 'b': 2 }];
	     *
	     * var deep = _.cloneDeep(objects);
	     * console.log(deep[0] === objects[0]);
	     * // => false
	     */
	    function cloneDeep(value) {
	      return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
	    }
	
	    /**
	     * This method is like `_.cloneWith` except that it recursively clones `value`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to recursively clone.
	     * @param {Function} [customizer] The function to customize cloning.
	     * @returns {*} Returns the deep cloned value.
	     * @see _.cloneWith
	     * @example
	     *
	     * function customizer(value) {
	     *   if (_.isElement(value)) {
	     *     return value.cloneNode(true);
	     *   }
	     * }
	     *
	     * var el = _.cloneDeepWith(document.body, customizer);
	     *
	     * console.log(el === document.body);
	     * // => false
	     * console.log(el.nodeName);
	     * // => 'BODY'
	     * console.log(el.childNodes.length);
	     * // => 20
	     */
	    function cloneDeepWith(value, customizer) {
	      customizer = typeof customizer == 'function' ? customizer : undefined;
	      return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
	    }
	
	    /**
	     * Checks if `object` conforms to `source` by invoking the predicate
	     * properties of `source` with the corresponding property values of `object`.
	     *
	     * **Note:** This method is equivalent to `_.conforms` when `source` is
	     * partially applied.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.14.0
	     * @category Lang
	     * @param {Object} object The object to inspect.
	     * @param {Object} source The object of property predicates to conform to.
	     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
	     * @example
	     *
	     * var object = { 'a': 1, 'b': 2 };
	     *
	     * _.conformsTo(object, { 'b': function(n) { return n > 1; } });
	     * // => true
	     *
	     * _.conformsTo(object, { 'b': function(n) { return n > 2; } });
	     * // => false
	     */
	    function conformsTo(object, source) {
	      return source == null || baseConformsTo(object, source, keys(source));
	    }
	
	    /**
	     * Performs a
	     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	     * comparison between two values to determine if they are equivalent.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	     * @example
	     *
	     * var object = { 'a': 1 };
	     * var other = { 'a': 1 };
	     *
	     * _.eq(object, object);
	     * // => true
	     *
	     * _.eq(object, other);
	     * // => false
	     *
	     * _.eq('a', 'a');
	     * // => true
	     *
	     * _.eq('a', Object('a'));
	     * // => false
	     *
	     * _.eq(NaN, NaN);
	     * // => true
	     */
	    function eq(value, other) {
	      return value === other || (value !== value && other !== other);
	    }
	
	    /**
	     * Checks if `value` is greater than `other`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.9.0
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if `value` is greater than `other`,
	     *  else `false`.
	     * @see _.lt
	     * @example
	     *
	     * _.gt(3, 1);
	     * // => true
	     *
	     * _.gt(3, 3);
	     * // => false
	     *
	     * _.gt(1, 3);
	     * // => false
	     */
	    var gt = createRelationalOperation(baseGt);
	
	    /**
	     * Checks if `value` is greater than or equal to `other`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.9.0
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if `value` is greater than or equal to
	     *  `other`, else `false`.
	     * @see _.lte
	     * @example
	     *
	     * _.gte(3, 1);
	     * // => true
	     *
	     * _.gte(3, 3);
	     * // => true
	     *
	     * _.gte(1, 3);
	     * // => false
	     */
	    var gte = createRelationalOperation(function(value, other) {
	      return value >= other;
	    });
	
	    /**
	     * Checks if `value` is likely an `arguments` object.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	     *  else `false`.
	     * @example
	     *
	     * _.isArguments(function() { return arguments; }());
	     * // => true
	     *
	     * _.isArguments([1, 2, 3]);
	     * // => false
	     */
	    var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
	      return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
	        !propertyIsEnumerable.call(value, 'callee');
	    };
	
	    /**
	     * Checks if `value` is classified as an `Array` object.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	     * @example
	     *
	     * _.isArray([1, 2, 3]);
	     * // => true
	     *
	     * _.isArray(document.body.children);
	     * // => false
	     *
	     * _.isArray('abc');
	     * // => false
	     *
	     * _.isArray(_.noop);
	     * // => false
	     */
	    var isArray = Array.isArray;
	
	    /**
	     * Checks if `value` is classified as an `ArrayBuffer` object.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.3.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
	     * @example
	     *
	     * _.isArrayBuffer(new ArrayBuffer(2));
	     * // => true
	     *
	     * _.isArrayBuffer(new Array(2));
	     * // => false
	     */
	    var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;
	
	    /**
	     * Checks if `value` is array-like. A value is considered array-like if it's
	     * not a function and has a `value.length` that's an integer greater than or
	     * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	     * @example
	     *
	     * _.isArrayLike([1, 2, 3]);
	     * // => true
	     *
	     * _.isArrayLike(document.body.children);
	     * // => true
	     *
	     * _.isArrayLike('abc');
	     * // => true
	     *
	     * _.isArrayLike(_.noop);
	     * // => false
	     */
	    function isArrayLike(value) {
	      return value != null && isLength(value.length) && !isFunction(value);
	    }
	
	    /**
	     * This method is like `_.isArrayLike` except that it also checks if `value`
	     * is an object.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an array-like object,
	     *  else `false`.
	     * @example
	     *
	     * _.isArrayLikeObject([1, 2, 3]);
	     * // => true
	     *
	     * _.isArrayLikeObject(document.body.children);
	     * // => true
	     *
	     * _.isArrayLikeObject('abc');
	     * // => false
	     *
	     * _.isArrayLikeObject(_.noop);
	     * // => false
	     */
	    function isArrayLikeObject(value) {
	      return isObjectLike(value) && isArrayLike(value);
	    }
	
	    /**
	     * Checks if `value` is classified as a boolean primitive or object.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
	     * @example
	     *
	     * _.isBoolean(false);
	     * // => true
	     *
	     * _.isBoolean(null);
	     * // => false
	     */
	    function isBoolean(value) {
	      return value === true || value === false ||
	        (isObjectLike(value) && baseGetTag(value) == boolTag);
	    }
	
	    /**
	     * Checks if `value` is a buffer.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.3.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	     * @example
	     *
	     * _.isBuffer(new Buffer(2));
	     * // => true
	     *
	     * _.isBuffer(new Uint8Array(2));
	     * // => false
	     */
	    var isBuffer = nativeIsBuffer || stubFalse;
	
	    /**
	     * Checks if `value` is classified as a `Date` object.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
	     * @example
	     *
	     * _.isDate(new Date);
	     * // => true
	     *
	     * _.isDate('Mon April 23 2012');
	     * // => false
	     */
	    var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;
	
	    /**
	     * Checks if `value` is likely a DOM element.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
	     * @example
	     *
	     * _.isElement(document.body);
	     * // => true
	     *
	     * _.isElement('<body>');
	     * // => false
	     */
	    function isElement(value) {
	      return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
	    }
	
	    /**
	     * Checks if `value` is an empty object, collection, map, or set.
	     *
	     * Objects are considered empty if they have no own enumerable string keyed
	     * properties.
	     *
	     * Array-like values such as `arguments` objects, arrays, buffers, strings, or
	     * jQuery-like collections are considered empty if they have a `length` of `0`.
	     * Similarly, maps and sets are considered empty if they have a `size` of `0`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is empty, else `false`.
	     * @example
	     *
	     * _.isEmpty(null);
	     * // => true
	     *
	     * _.isEmpty(true);
	     * // => true
	     *
	     * _.isEmpty(1);
	     * // => true
	     *
	     * _.isEmpty([1, 2, 3]);
	     * // => false
	     *
	     * _.isEmpty({ 'a': 1 });
	     * // => false
	     */
	    function isEmpty(value) {
	      if (value == null) {
	        return true;
	      }
	      if (isArrayLike(value) &&
	          (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||
	            isBuffer(value) || isTypedArray(value) || isArguments(value))) {
	        return !value.length;
	      }
	      var tag = getTag(value);
	      if (tag == mapTag || tag == setTag) {
	        return !value.size;
	      }
	      if (isPrototype(value)) {
	        return !baseKeys(value).length;
	      }
	      for (var key in value) {
	        if (hasOwnProperty.call(value, key)) {
	          return false;
	        }
	      }
	      return true;
	    }
	
	    /**
	     * Performs a deep comparison between two values to determine if they are
	     * equivalent.
	     *
	     * **Note:** This method supports comparing arrays, array buffers, booleans,
	     * date objects, error objects, maps, numbers, `Object` objects, regexes,
	     * sets, strings, symbols, and typed arrays. `Object` objects are compared
	     * by their own, not inherited, enumerable properties. Functions and DOM
	     * nodes are compared by strict equality, i.e. `===`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	     * @example
	     *
	     * var object = { 'a': 1 };
	     * var other = { 'a': 1 };
	     *
	     * _.isEqual(object, other);
	     * // => true
	     *
	     * object === other;
	     * // => false
	     */
	    function isEqual(value, other) {
	      return baseIsEqual(value, other);
	    }
	
	    /**
	     * This method is like `_.isEqual` except that it accepts `customizer` which
	     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
	     * are handled by the method instead. The `customizer` is invoked with up to
	     * six arguments: (objValue, othValue [, index|key, object, other, stack]).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @param {Function} [customizer] The function to customize comparisons.
	     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	     * @example
	     *
	     * function isGreeting(value) {
	     *   return /^h(?:i|ello)$/.test(value);
	     * }
	     *
	     * function customizer(objValue, othValue) {
	     *   if (isGreeting(objValue) && isGreeting(othValue)) {
	     *     return true;
	     *   }
	     * }
	     *
	     * var array = ['hello', 'goodbye'];
	     * var other = ['hi', 'goodbye'];
	     *
	     * _.isEqualWith(array, other, customizer);
	     * // => true
	     */
	    function isEqualWith(value, other, customizer) {
	      customizer = typeof customizer == 'function' ? customizer : undefined;
	      var result = customizer ? customizer(value, other) : undefined;
	      return result === undefined ? baseIsEqual(value, other, undefined, customizer) : !!result;
	    }
	
	    /**
	     * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
	     * `SyntaxError`, `TypeError`, or `URIError` object.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
	     * @example
	     *
	     * _.isError(new Error);
	     * // => true
	     *
	     * _.isError(Error);
	     * // => false
	     */
	    function isError(value) {
	      if (!isObjectLike(value)) {
	        return false;
	      }
	      var tag = baseGetTag(value);
	      return tag == errorTag || tag == domExcTag ||
	        (typeof value.message == 'string' && typeof value.name == 'string' && !isPlainObject(value));
	    }
	
	    /**
	     * Checks if `value` is a finite primitive number.
	     *
	     * **Note:** This method is based on
	     * [`Number.isFinite`](https://mdn.io/Number/isFinite).
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
	     * @example
	     *
	     * _.isFinite(3);
	     * // => true
	     *
	     * _.isFinite(Number.MIN_VALUE);
	     * // => true
	     *
	     * _.isFinite(Infinity);
	     * // => false
	     *
	     * _.isFinite('3');
	     * // => false
	     */
	    function isFinite(value) {
	      return typeof value == 'number' && nativeIsFinite(value);
	    }
	
	    /**
	     * Checks if `value` is classified as a `Function` object.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	     * @example
	     *
	     * _.isFunction(_);
	     * // => true
	     *
	     * _.isFunction(/abc/);
	     * // => false
	     */
	    function isFunction(value) {
	      if (!isObject(value)) {
	        return false;
	      }
	      // The use of `Object#toString` avoids issues with the `typeof` operator
	      // in Safari 9 which returns 'object' for typed arrays and other constructors.
	      var tag = baseGetTag(value);
	      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	    }
	
	    /**
	     * Checks if `value` is an integer.
	     *
	     * **Note:** This method is based on
	     * [`Number.isInteger`](https://mdn.io/Number/isInteger).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an integer, else `false`.
	     * @example
	     *
	     * _.isInteger(3);
	     * // => true
	     *
	     * _.isInteger(Number.MIN_VALUE);
	     * // => false
	     *
	     * _.isInteger(Infinity);
	     * // => false
	     *
	     * _.isInteger('3');
	     * // => false
	     */
	    function isInteger(value) {
	      return typeof value == 'number' && value == toInteger(value);
	    }
	
	    /**
	     * Checks if `value` is a valid array-like length.
	     *
	     * **Note:** This method is loosely based on
	     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	     * @example
	     *
	     * _.isLength(3);
	     * // => true
	     *
	     * _.isLength(Number.MIN_VALUE);
	     * // => false
	     *
	     * _.isLength(Infinity);
	     * // => false
	     *
	     * _.isLength('3');
	     * // => false
	     */
	    function isLength(value) {
	      return typeof value == 'number' &&
	        value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	    }
	
	    /**
	     * Checks if `value` is the
	     * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	     * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	     * @example
	     *
	     * _.isObject({});
	     * // => true
	     *
	     * _.isObject([1, 2, 3]);
	     * // => true
	     *
	     * _.isObject(_.noop);
	     * // => true
	     *
	     * _.isObject(null);
	     * // => false
	     */
	    function isObject(value) {
	      var type = typeof value;
	      return value != null && (type == 'object' || type == 'function');
	    }
	
	    /**
	     * Checks if `value` is object-like. A value is object-like if it's not `null`
	     * and has a `typeof` result of "object".
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	     * @example
	     *
	     * _.isObjectLike({});
	     * // => true
	     *
	     * _.isObjectLike([1, 2, 3]);
	     * // => true
	     *
	     * _.isObjectLike(_.noop);
	     * // => false
	     *
	     * _.isObjectLike(null);
	     * // => false
	     */
	    function isObjectLike(value) {
	      return value != null && typeof value == 'object';
	    }
	
	    /**
	     * Checks if `value` is classified as a `Map` object.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.3.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
	     * @example
	     *
	     * _.isMap(new Map);
	     * // => true
	     *
	     * _.isMap(new WeakMap);
	     * // => false
	     */
	    var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
	
	    /**
	     * Performs a partial deep comparison between `object` and `source` to
	     * determine if `object` contains equivalent property values.
	     *
	     * **Note:** This method is equivalent to `_.matches` when `source` is
	     * partially applied.
	     *
	     * Partial comparisons will match empty array and empty object `source`
	     * values against any array or object value, respectively. See `_.isEqual`
	     * for a list of supported value comparisons.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Lang
	     * @param {Object} object The object to inspect.
	     * @param {Object} source The object of property values to match.
	     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	     * @example
	     *
	     * var object = { 'a': 1, 'b': 2 };
	     *
	     * _.isMatch(object, { 'b': 2 });
	     * // => true
	     *
	     * _.isMatch(object, { 'b': 1 });
	     * // => false
	     */
	    function isMatch(object, source) {
	      return object === source || baseIsMatch(object, source, getMatchData(source));
	    }
	
	    /**
	     * This method is like `_.isMatch` except that it accepts `customizer` which
	     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
	     * are handled by the method instead. The `customizer` is invoked with five
	     * arguments: (objValue, srcValue, index|key, object, source).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {Object} object The object to inspect.
	     * @param {Object} source The object of property values to match.
	     * @param {Function} [customizer] The function to customize comparisons.
	     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	     * @example
	     *
	     * function isGreeting(value) {
	     *   return /^h(?:i|ello)$/.test(value);
	     * }
	     *
	     * function customizer(objValue, srcValue) {
	     *   if (isGreeting(objValue) && isGreeting(srcValue)) {
	     *     return true;
	     *   }
	     * }
	     *
	     * var object = { 'greeting': 'hello' };
	     * var source = { 'greeting': 'hi' };
	     *
	     * _.isMatchWith(object, source, customizer);
	     * // => true
	     */
	    function isMatchWith(object, source, customizer) {
	      customizer = typeof customizer == 'function' ? customizer : undefined;
	      return baseIsMatch(object, source, getMatchData(source), customizer);
	    }
	
	    /**
	     * Checks if `value` is `NaN`.
	     *
	     * **Note:** This method is based on
	     * [`Number.isNaN`](https://mdn.io/Number/isNaN) and is not the same as
	     * global [`isNaN`](https://mdn.io/isNaN) which returns `true` for
	     * `undefined` and other non-number values.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
	     * @example
	     *
	     * _.isNaN(NaN);
	     * // => true
	     *
	     * _.isNaN(new Number(NaN));
	     * // => true
	     *
	     * isNaN(undefined);
	     * // => true
	     *
	     * _.isNaN(undefined);
	     * // => false
	     */
	    function isNaN(value) {
	      // An `NaN` primitive is the only value that is not equal to itself.
	      // Perform the `toStringTag` check first to avoid errors with some
	      // ActiveX objects in IE.
	      return isNumber(value) && value != +value;
	    }
	
	    /**
	     * Checks if `value` is a pristine native function.
	     *
	     * **Note:** This method can't reliably detect native functions in the presence
	     * of the core-js package because core-js circumvents this kind of detection.
	     * Despite multiple requests, the core-js maintainer has made it clear: any
	     * attempt to fix the detection will be obstructed. As a result, we're left
	     * with little choice but to throw an error. Unfortunately, this also affects
	     * packages, like [babel-polyfill](https://www.npmjs.com/package/babel-polyfill),
	     * which rely on core-js.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a native function,
	     *  else `false`.
	     * @example
	     *
	     * _.isNative(Array.prototype.push);
	     * // => true
	     *
	     * _.isNative(_);
	     * // => false
	     */
	    function isNative(value) {
	      if (isMaskable(value)) {
	        throw new Error(CORE_ERROR_TEXT);
	      }
	      return baseIsNative(value);
	    }
	
	    /**
	     * Checks if `value` is `null`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
	     * @example
	     *
	     * _.isNull(null);
	     * // => true
	     *
	     * _.isNull(void 0);
	     * // => false
	     */
	    function isNull(value) {
	      return value === null;
	    }
	
	    /**
	     * Checks if `value` is `null` or `undefined`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
	     * @example
	     *
	     * _.isNil(null);
	     * // => true
	     *
	     * _.isNil(void 0);
	     * // => true
	     *
	     * _.isNil(NaN);
	     * // => false
	     */
	    function isNil(value) {
	      return value == null;
	    }
	
	    /**
	     * Checks if `value` is classified as a `Number` primitive or object.
	     *
	     * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
	     * classified as numbers, use the `_.isFinite` method.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a number, else `false`.
	     * @example
	     *
	     * _.isNumber(3);
	     * // => true
	     *
	     * _.isNumber(Number.MIN_VALUE);
	     * // => true
	     *
	     * _.isNumber(Infinity);
	     * // => true
	     *
	     * _.isNumber('3');
	     * // => false
	     */
	    function isNumber(value) {
	      return typeof value == 'number' ||
	        (isObjectLike(value) && baseGetTag(value) == numberTag);
	    }
	
	    /**
	     * Checks if `value` is a plain object, that is, an object created by the
	     * `Object` constructor or one with a `[[Prototype]]` of `null`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.8.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     * }
	     *
	     * _.isPlainObject(new Foo);
	     * // => false
	     *
	     * _.isPlainObject([1, 2, 3]);
	     * // => false
	     *
	     * _.isPlainObject({ 'x': 0, 'y': 0 });
	     * // => true
	     *
	     * _.isPlainObject(Object.create(null));
	     * // => true
	     */
	    function isPlainObject(value) {
	      if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
	        return false;
	      }
	      var proto = getPrototype(value);
	      if (proto === null) {
	        return true;
	      }
	      var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	      return typeof Ctor == 'function' && Ctor instanceof Ctor &&
	        funcToString.call(Ctor) == objectCtorString;
	    }
	
	    /**
	     * Checks if `value` is classified as a `RegExp` object.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
	     * @example
	     *
	     * _.isRegExp(/abc/);
	     * // => true
	     *
	     * _.isRegExp('/abc/');
	     * // => false
	     */
	    var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;
	
	    /**
	     * Checks if `value` is a safe integer. An integer is safe if it's an IEEE-754
	     * double precision number which isn't the result of a rounded unsafe integer.
	     *
	     * **Note:** This method is based on
	     * [`Number.isSafeInteger`](https://mdn.io/Number/isSafeInteger).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a safe integer, else `false`.
	     * @example
	     *
	     * _.isSafeInteger(3);
	     * // => true
	     *
	     * _.isSafeInteger(Number.MIN_VALUE);
	     * // => false
	     *
	     * _.isSafeInteger(Infinity);
	     * // => false
	     *
	     * _.isSafeInteger('3');
	     * // => false
	     */
	    function isSafeInteger(value) {
	      return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
	    }
	
	    /**
	     * Checks if `value` is classified as a `Set` object.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.3.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
	     * @example
	     *
	     * _.isSet(new Set);
	     * // => true
	     *
	     * _.isSet(new WeakSet);
	     * // => false
	     */
	    var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
	
	    /**
	     * Checks if `value` is classified as a `String` primitive or object.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a string, else `false`.
	     * @example
	     *
	     * _.isString('abc');
	     * // => true
	     *
	     * _.isString(1);
	     * // => false
	     */
	    function isString(value) {
	      return typeof value == 'string' ||
	        (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
	    }
	
	    /**
	     * Checks if `value` is classified as a `Symbol` primitive or object.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	     * @example
	     *
	     * _.isSymbol(Symbol.iterator);
	     * // => true
	     *
	     * _.isSymbol('abc');
	     * // => false
	     */
	    function isSymbol(value) {
	      return typeof value == 'symbol' ||
	        (isObjectLike(value) && baseGetTag(value) == symbolTag);
	    }
	
	    /**
	     * Checks if `value` is classified as a typed array.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	     * @example
	     *
	     * _.isTypedArray(new Uint8Array);
	     * // => true
	     *
	     * _.isTypedArray([]);
	     * // => false
	     */
	    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
	
	    /**
	     * Checks if `value` is `undefined`.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
	     * @example
	     *
	     * _.isUndefined(void 0);
	     * // => true
	     *
	     * _.isUndefined(null);
	     * // => false
	     */
	    function isUndefined(value) {
	      return value === undefined;
	    }
	
	    /**
	     * Checks if `value` is classified as a `WeakMap` object.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.3.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a weak map, else `false`.
	     * @example
	     *
	     * _.isWeakMap(new WeakMap);
	     * // => true
	     *
	     * _.isWeakMap(new Map);
	     * // => false
	     */
	    function isWeakMap(value) {
	      return isObjectLike(value) && getTag(value) == weakMapTag;
	    }
	
	    /**
	     * Checks if `value` is classified as a `WeakSet` object.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.3.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a weak set, else `false`.
	     * @example
	     *
	     * _.isWeakSet(new WeakSet);
	     * // => true
	     *
	     * _.isWeakSet(new Set);
	     * // => false
	     */
	    function isWeakSet(value) {
	      return isObjectLike(value) && baseGetTag(value) == weakSetTag;
	    }
	
	    /**
	     * Checks if `value` is less than `other`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.9.0
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if `value` is less than `other`,
	     *  else `false`.
	     * @see _.gt
	     * @example
	     *
	     * _.lt(1, 3);
	     * // => true
	     *
	     * _.lt(3, 3);
	     * // => false
	     *
	     * _.lt(3, 1);
	     * // => false
	     */
	    var lt = createRelationalOperation(baseLt);
	
	    /**
	     * Checks if `value` is less than or equal to `other`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.9.0
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if `value` is less than or equal to
	     *  `other`, else `false`.
	     * @see _.gte
	     * @example
	     *
	     * _.lte(1, 3);
	     * // => true
	     *
	     * _.lte(3, 3);
	     * // => true
	     *
	     * _.lte(3, 1);
	     * // => false
	     */
	    var lte = createRelationalOperation(function(value, other) {
	      return value <= other;
	    });
	
	    /**
	     * Converts `value` to an array.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to convert.
	     * @returns {Array} Returns the converted array.
	     * @example
	     *
	     * _.toArray({ 'a': 1, 'b': 2 });
	     * // => [1, 2]
	     *
	     * _.toArray('abc');
	     * // => ['a', 'b', 'c']
	     *
	     * _.toArray(1);
	     * // => []
	     *
	     * _.toArray(null);
	     * // => []
	     */
	    function toArray(value) {
	      if (!value) {
	        return [];
	      }
	      if (isArrayLike(value)) {
	        return isString(value) ? stringToArray(value) : copyArray(value);
	      }
	      if (symIterator && value[symIterator]) {
	        return iteratorToArray(value[symIterator]());
	      }
	      var tag = getTag(value),
	          func = tag == mapTag ? mapToArray : (tag == setTag ? setToArray : values);
	
	      return func(value);
	    }
	
	    /**
	     * Converts `value` to a finite number.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.12.0
	     * @category Lang
	     * @param {*} value The value to convert.
	     * @returns {number} Returns the converted number.
	     * @example
	     *
	     * _.toFinite(3.2);
	     * // => 3.2
	     *
	     * _.toFinite(Number.MIN_VALUE);
	     * // => 5e-324
	     *
	     * _.toFinite(Infinity);
	     * // => 1.7976931348623157e+308
	     *
	     * _.toFinite('3.2');
	     * // => 3.2
	     */
	    function toFinite(value) {
	      if (!value) {
	        return value === 0 ? value : 0;
	      }
	      value = toNumber(value);
	      if (value === INFINITY || value === -INFINITY) {
	        var sign = (value < 0 ? -1 : 1);
	        return sign * MAX_INTEGER;
	      }
	      return value === value ? value : 0;
	    }
	
	    /**
	     * Converts `value` to an integer.
	     *
	     * **Note:** This method is loosely based on
	     * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to convert.
	     * @returns {number} Returns the converted integer.
	     * @example
	     *
	     * _.toInteger(3.2);
	     * // => 3
	     *
	     * _.toInteger(Number.MIN_VALUE);
	     * // => 0
	     *
	     * _.toInteger(Infinity);
	     * // => 1.7976931348623157e+308
	     *
	     * _.toInteger('3.2');
	     * // => 3
	     */
	    function toInteger(value) {
	      var result = toFinite(value),
	          remainder = result % 1;
	
	      return result === result ? (remainder ? result - remainder : result) : 0;
	    }
	
	    /**
	     * Converts `value` to an integer suitable for use as the length of an
	     * array-like object.
	     *
	     * **Note:** This method is based on
	     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to convert.
	     * @returns {number} Returns the converted integer.
	     * @example
	     *
	     * _.toLength(3.2);
	     * // => 3
	     *
	     * _.toLength(Number.MIN_VALUE);
	     * // => 0
	     *
	     * _.toLength(Infinity);
	     * // => 4294967295
	     *
	     * _.toLength('3.2');
	     * // => 3
	     */
	    function toLength(value) {
	      return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
	    }
	
	    /**
	     * Converts `value` to a number.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to process.
	     * @returns {number} Returns the number.
	     * @example
	     *
	     * _.toNumber(3.2);
	     * // => 3.2
	     *
	     * _.toNumber(Number.MIN_VALUE);
	     * // => 5e-324
	     *
	     * _.toNumber(Infinity);
	     * // => Infinity
	     *
	     * _.toNumber('3.2');
	     * // => 3.2
	     */
	    function toNumber(value) {
	      if (typeof value == 'number') {
	        return value;
	      }
	      if (isSymbol(value)) {
	        return NAN;
	      }
	      if (isObject(value)) {
	        var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	        value = isObject(other) ? (other + '') : other;
	      }
	      if (typeof value != 'string') {
	        return value === 0 ? value : +value;
	      }
	      value = value.replace(reTrim, '');
	      var isBinary = reIsBinary.test(value);
	      return (isBinary || reIsOctal.test(value))
	        ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	        : (reIsBadHex.test(value) ? NAN : +value);
	    }
	
	    /**
	     * Converts `value` to a plain object flattening inherited enumerable string
	     * keyed properties of `value` to own properties of the plain object.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Lang
	     * @param {*} value The value to convert.
	     * @returns {Object} Returns the converted plain object.
	     * @example
	     *
	     * function Foo() {
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.assign({ 'a': 1 }, new Foo);
	     * // => { 'a': 1, 'b': 2 }
	     *
	     * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
	     * // => { 'a': 1, 'b': 2, 'c': 3 }
	     */
	    function toPlainObject(value) {
	      return copyObject(value, keysIn(value));
	    }
	
	    /**
	     * Converts `value` to a safe integer. A safe integer can be compared and
	     * represented correctly.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to convert.
	     * @returns {number} Returns the converted integer.
	     * @example
	     *
	     * _.toSafeInteger(3.2);
	     * // => 3
	     *
	     * _.toSafeInteger(Number.MIN_VALUE);
	     * // => 0
	     *
	     * _.toSafeInteger(Infinity);
	     * // => 9007199254740991
	     *
	     * _.toSafeInteger('3.2');
	     * // => 3
	     */
	    function toSafeInteger(value) {
	      return value
	        ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER)
	        : (value === 0 ? value : 0);
	    }
	
	    /**
	     * Converts `value` to a string. An empty string is returned for `null`
	     * and `undefined` values. The sign of `-0` is preserved.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to convert.
	     * @returns {string} Returns the converted string.
	     * @example
	     *
	     * _.toString(null);
	     * // => ''
	     *
	     * _.toString(-0);
	     * // => '-0'
	     *
	     * _.toString([1, 2, 3]);
	     * // => '1,2,3'
	     */
	    function toString(value) {
	      return value == null ? '' : baseToString(value);
	    }
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * Assigns own enumerable string keyed properties of source objects to the
	     * destination object. Source objects are applied from left to right.
	     * Subsequent sources overwrite property assignments of previous sources.
	     *
	     * **Note:** This method mutates `object` and is loosely based on
	     * [`Object.assign`](https://mdn.io/Object/assign).
	     *
	     * @static
	     * @memberOf _
	     * @since 0.10.0
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} [sources] The source objects.
	     * @returns {Object} Returns `object`.
	     * @see _.assignIn
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     * }
	     *
	     * function Bar() {
	     *   this.c = 3;
	     * }
	     *
	     * Foo.prototype.b = 2;
	     * Bar.prototype.d = 4;
	     *
	     * _.assign({ 'a': 0 }, new Foo, new Bar);
	     * // => { 'a': 1, 'c': 3 }
	     */
	    var assign = createAssigner(function(object, source) {
	      if (isPrototype(source) || isArrayLike(source)) {
	        copyObject(source, keys(source), object);
	        return;
	      }
	      for (var key in source) {
	        if (hasOwnProperty.call(source, key)) {
	          assignValue(object, key, source[key]);
	        }
	      }
	    });
	
	    /**
	     * This method is like `_.assign` except that it iterates over own and
	     * inherited source properties.
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @alias extend
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} [sources] The source objects.
	     * @returns {Object} Returns `object`.
	     * @see _.assign
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     * }
	     *
	     * function Bar() {
	     *   this.c = 3;
	     * }
	     *
	     * Foo.prototype.b = 2;
	     * Bar.prototype.d = 4;
	     *
	     * _.assignIn({ 'a': 0 }, new Foo, new Bar);
	     * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
	     */
	    var assignIn = createAssigner(function(object, source) {
	      copyObject(source, keysIn(source), object);
	    });
	
	    /**
	     * This method is like `_.assignIn` except that it accepts `customizer`
	     * which is invoked to produce the assigned values. If `customizer` returns
	     * `undefined`, assignment is handled by the method instead. The `customizer`
	     * is invoked with five arguments: (objValue, srcValue, key, object, source).
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @alias extendWith
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} sources The source objects.
	     * @param {Function} [customizer] The function to customize assigned values.
	     * @returns {Object} Returns `object`.
	     * @see _.assignWith
	     * @example
	     *
	     * function customizer(objValue, srcValue) {
	     *   return _.isUndefined(objValue) ? srcValue : objValue;
	     * }
	     *
	     * var defaults = _.partialRight(_.assignInWith, customizer);
	     *
	     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
	     * // => { 'a': 1, 'b': 2 }
	     */
	    var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
	      copyObject(source, keysIn(source), object, customizer);
	    });
	
	    /**
	     * This method is like `_.assign` except that it accepts `customizer`
	     * which is invoked to produce the assigned values. If `customizer` returns
	     * `undefined`, assignment is handled by the method instead. The `customizer`
	     * is invoked with five arguments: (objValue, srcValue, key, object, source).
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} sources The source objects.
	     * @param {Function} [customizer] The function to customize assigned values.
	     * @returns {Object} Returns `object`.
	     * @see _.assignInWith
	     * @example
	     *
	     * function customizer(objValue, srcValue) {
	     *   return _.isUndefined(objValue) ? srcValue : objValue;
	     * }
	     *
	     * var defaults = _.partialRight(_.assignWith, customizer);
	     *
	     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
	     * // => { 'a': 1, 'b': 2 }
	     */
	    var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
	      copyObject(source, keys(source), object, customizer);
	    });
	
	    /**
	     * Creates an array of values corresponding to `paths` of `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 1.0.0
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {...(string|string[])} [paths] The property paths to pick.
	     * @returns {Array} Returns the picked values.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
	     *
	     * _.at(object, ['a[0].b.c', 'a[1]']);
	     * // => [3, 4]
	     */
	    var at = flatRest(baseAt);
	
	    /**
	     * Creates an object that inherits from the `prototype` object. If a
	     * `properties` object is given, its own enumerable string keyed properties
	     * are assigned to the created object.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.3.0
	     * @category Object
	     * @param {Object} prototype The object to inherit from.
	     * @param {Object} [properties] The properties to assign to the object.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * function Shape() {
	     *   this.x = 0;
	     *   this.y = 0;
	     * }
	     *
	     * function Circle() {
	     *   Shape.call(this);
	     * }
	     *
	     * Circle.prototype = _.create(Shape.prototype, {
	     *   'constructor': Circle
	     * });
	     *
	     * var circle = new Circle;
	     * circle instanceof Circle;
	     * // => true
	     *
	     * circle instanceof Shape;
	     * // => true
	     */
	    function create(prototype, properties) {
	      var result = baseCreate(prototype);
	      return properties == null ? result : baseAssign(result, properties);
	    }
	
	    /**
	     * Assigns own and inherited enumerable string keyed properties of source
	     * objects to the destination object for all destination properties that
	     * resolve to `undefined`. Source objects are applied from left to right.
	     * Once a property is set, additional values of the same property are ignored.
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} [sources] The source objects.
	     * @returns {Object} Returns `object`.
	     * @see _.defaultsDeep
	     * @example
	     *
	     * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
	     * // => { 'a': 1, 'b': 2 }
	     */
	    var defaults = baseRest(function(args) {
	      args.push(undefined, customDefaultsAssignIn);
	      return apply(assignInWith, undefined, args);
	    });
	
	    /**
	     * This method is like `_.defaults` except that it recursively assigns
	     * default properties.
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.10.0
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} [sources] The source objects.
	     * @returns {Object} Returns `object`.
	     * @see _.defaults
	     * @example
	     *
	     * _.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
	     * // => { 'a': { 'b': 2, 'c': 3 } }
	     */
	    var defaultsDeep = baseRest(function(args) {
	      args.push(undefined, customDefaultsMerge);
	      return apply(mergeWith, undefined, args);
	    });
	
	    /**
	     * This method is like `_.find` except that it returns the key of the first
	     * element `predicate` returns truthy for instead of the element itself.
	     *
	     * @static
	     * @memberOf _
	     * @since 1.1.0
	     * @category Object
	     * @param {Object} object The object to inspect.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @returns {string|undefined} Returns the key of the matched element,
	     *  else `undefined`.
	     * @example
	     *
	     * var users = {
	     *   'barney':  { 'age': 36, 'active': true },
	     *   'fred':    { 'age': 40, 'active': false },
	     *   'pebbles': { 'age': 1,  'active': true }
	     * };
	     *
	     * _.findKey(users, function(o) { return o.age < 40; });
	     * // => 'barney' (iteration order is not guaranteed)
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.findKey(users, { 'age': 1, 'active': true });
	     * // => 'pebbles'
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.findKey(users, ['active', false]);
	     * // => 'fred'
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.findKey(users, 'active');
	     * // => 'barney'
	     */
	    function findKey(object, predicate) {
	      return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
	    }
	
	    /**
	     * This method is like `_.findKey` except that it iterates over elements of
	     * a collection in the opposite order.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.0.0
	     * @category Object
	     * @param {Object} object The object to inspect.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @returns {string|undefined} Returns the key of the matched element,
	     *  else `undefined`.
	     * @example
	     *
	     * var users = {
	     *   'barney':  { 'age': 36, 'active': true },
	     *   'fred':    { 'age': 40, 'active': false },
	     *   'pebbles': { 'age': 1,  'active': true }
	     * };
	     *
	     * _.findLastKey(users, function(o) { return o.age < 40; });
	     * // => returns 'pebbles' assuming `_.findKey` returns 'barney'
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.findLastKey(users, { 'age': 36, 'active': true });
	     * // => 'barney'
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.findLastKey(users, ['active', false]);
	     * // => 'fred'
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.findLastKey(users, 'active');
	     * // => 'pebbles'
	     */
	    function findLastKey(object, predicate) {
	      return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
	    }
	
	    /**
	     * Iterates over own and inherited enumerable string keyed properties of an
	     * object and invokes `iteratee` for each property. The iteratee is invoked
	     * with three arguments: (value, key, object). Iteratee functions may exit
	     * iteration early by explicitly returning `false`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.3.0
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Object} Returns `object`.
	     * @see _.forInRight
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.forIn(new Foo, function(value, key) {
	     *   console.log(key);
	     * });
	     * // => Logs 'a', 'b', then 'c' (iteration order is not guaranteed).
	     */
	    function forIn(object, iteratee) {
	      return object == null
	        ? object
	        : baseFor(object, getIteratee(iteratee, 3), keysIn);
	    }
	
	    /**
	     * This method is like `_.forIn` except that it iterates over properties of
	     * `object` in the opposite order.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.0.0
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Object} Returns `object`.
	     * @see _.forIn
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.forInRight(new Foo, function(value, key) {
	     *   console.log(key);
	     * });
	     * // => Logs 'c', 'b', then 'a' assuming `_.forIn` logs 'a', 'b', then 'c'.
	     */
	    function forInRight(object, iteratee) {
	      return object == null
	        ? object
	        : baseForRight(object, getIteratee(iteratee, 3), keysIn);
	    }
	
	    /**
	     * Iterates over own enumerable string keyed properties of an object and
	     * invokes `iteratee` for each property. The iteratee is invoked with three
	     * arguments: (value, key, object). Iteratee functions may exit iteration
	     * early by explicitly returning `false`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.3.0
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Object} Returns `object`.
	     * @see _.forOwnRight
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.forOwn(new Foo, function(value, key) {
	     *   console.log(key);
	     * });
	     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
	     */
	    function forOwn(object, iteratee) {
	      return object && baseForOwn(object, getIteratee(iteratee, 3));
	    }
	
	    /**
	     * This method is like `_.forOwn` except that it iterates over properties of
	     * `object` in the opposite order.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.0.0
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Object} Returns `object`.
	     * @see _.forOwn
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.forOwnRight(new Foo, function(value, key) {
	     *   console.log(key);
	     * });
	     * // => Logs 'b' then 'a' assuming `_.forOwn` logs 'a' then 'b'.
	     */
	    function forOwnRight(object, iteratee) {
	      return object && baseForOwnRight(object, getIteratee(iteratee, 3));
	    }
	
	    /**
	     * Creates an array of function property names from own enumerable properties
	     * of `object`.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to inspect.
	     * @returns {Array} Returns the function names.
	     * @see _.functionsIn
	     * @example
	     *
	     * function Foo() {
	     *   this.a = _.constant('a');
	     *   this.b = _.constant('b');
	     * }
	     *
	     * Foo.prototype.c = _.constant('c');
	     *
	     * _.functions(new Foo);
	     * // => ['a', 'b']
	     */
	    function functions(object) {
	      return object == null ? [] : baseFunctions(object, keys(object));
	    }
	
	    /**
	     * Creates an array of function property names from own and inherited
	     * enumerable properties of `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Object
	     * @param {Object} object The object to inspect.
	     * @returns {Array} Returns the function names.
	     * @see _.functions
	     * @example
	     *
	     * function Foo() {
	     *   this.a = _.constant('a');
	     *   this.b = _.constant('b');
	     * }
	     *
	     * Foo.prototype.c = _.constant('c');
	     *
	     * _.functionsIn(new Foo);
	     * // => ['a', 'b', 'c']
	     */
	    function functionsIn(object) {
	      return object == null ? [] : baseFunctions(object, keysIn(object));
	    }
	
	    /**
	     * Gets the value at `path` of `object`. If the resolved value is
	     * `undefined`, the `defaultValue` is returned in its place.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.7.0
	     * @category Object
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path of the property to get.
	     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	     * @returns {*} Returns the resolved value.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	     *
	     * _.get(object, 'a[0].b.c');
	     * // => 3
	     *
	     * _.get(object, ['a', '0', 'b', 'c']);
	     * // => 3
	     *
	     * _.get(object, 'a.b.c', 'default');
	     * // => 'default'
	     */
	    function get(object, path, defaultValue) {
	      var result = object == null ? undefined : baseGet(object, path);
	      return result === undefined ? defaultValue : result;
	    }
	
	    /**
	     * Checks if `path` is a direct property of `object`.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path to check.
	     * @returns {boolean} Returns `true` if `path` exists, else `false`.
	     * @example
	     *
	     * var object = { 'a': { 'b': 2 } };
	     * var other = _.create({ 'a': _.create({ 'b': 2 }) });
	     *
	     * _.has(object, 'a');
	     * // => true
	     *
	     * _.has(object, 'a.b');
	     * // => true
	     *
	     * _.has(object, ['a', 'b']);
	     * // => true
	     *
	     * _.has(other, 'a');
	     * // => false
	     */
	    function has(object, path) {
	      return object != null && hasPath(object, path, baseHas);
	    }
	
	    /**
	     * Checks if `path` is a direct or inherited property of `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Object
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path to check.
	     * @returns {boolean} Returns `true` if `path` exists, else `false`.
	     * @example
	     *
	     * var object = _.create({ 'a': _.create({ 'b': 2 }) });
	     *
	     * _.hasIn(object, 'a');
	     * // => true
	     *
	     * _.hasIn(object, 'a.b');
	     * // => true
	     *
	     * _.hasIn(object, ['a', 'b']);
	     * // => true
	     *
	     * _.hasIn(object, 'b');
	     * // => false
	     */
	    function hasIn(object, path) {
	      return object != null && hasPath(object, path, baseHasIn);
	    }
	
	    /**
	     * Creates an object composed of the inverted keys and values of `object`.
	     * If `object` contains duplicate values, subsequent values overwrite
	     * property assignments of previous values.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.7.0
	     * @category Object
	     * @param {Object} object The object to invert.
	     * @returns {Object} Returns the new inverted object.
	     * @example
	     *
	     * var object = { 'a': 1, 'b': 2, 'c': 1 };
	     *
	     * _.invert(object);
	     * // => { '1': 'c', '2': 'b' }
	     */
	    var invert = createInverter(function(result, value, key) {
	      result[value] = key;
	    }, constant(identity));
	
	    /**
	     * This method is like `_.invert` except that the inverted object is generated
	     * from the results of running each element of `object` thru `iteratee`. The
	     * corresponding inverted value of each inverted key is an array of keys
	     * responsible for generating the inverted value. The iteratee is invoked
	     * with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.1.0
	     * @category Object
	     * @param {Object} object The object to invert.
	     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
	     * @returns {Object} Returns the new inverted object.
	     * @example
	     *
	     * var object = { 'a': 1, 'b': 2, 'c': 1 };
	     *
	     * _.invertBy(object);
	     * // => { '1': ['a', 'c'], '2': ['b'] }
	     *
	     * _.invertBy(object, function(value) {
	     *   return 'group' + value;
	     * });
	     * // => { 'group1': ['a', 'c'], 'group2': ['b'] }
	     */
	    var invertBy = createInverter(function(result, value, key) {
	      if (hasOwnProperty.call(result, value)) {
	        result[value].push(key);
	      } else {
	        result[value] = [key];
	      }
	    }, getIteratee);
	
	    /**
	     * Invokes the method at `path` of `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Object
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path of the method to invoke.
	     * @param {...*} [args] The arguments to invoke the method with.
	     * @returns {*} Returns the result of the invoked method.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] };
	     *
	     * _.invoke(object, 'a[0].b.c.slice', 1, 3);
	     * // => [2, 3]
	     */
	    var invoke = baseRest(baseInvoke);
	
	    /**
	     * Creates an array of the own enumerable property names of `object`.
	     *
	     * **Note:** Non-object values are coerced to objects. See the
	     * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	     * for more details.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.keys(new Foo);
	     * // => ['a', 'b'] (iteration order is not guaranteed)
	     *
	     * _.keys('hi');
	     * // => ['0', '1']
	     */
	    function keys(object) {
	      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	    }
	
	    /**
	     * Creates an array of the own and inherited enumerable property names of `object`.
	     *
	     * **Note:** Non-object values are coerced to objects.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.keysIn(new Foo);
	     * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	     */
	    function keysIn(object) {
	      return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
	    }
	
	    /**
	     * The opposite of `_.mapValues`; this method creates an object with the
	     * same values as `object` and keys generated by running each own enumerable
	     * string keyed property of `object` thru `iteratee`. The iteratee is invoked
	     * with three arguments: (value, key, object).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.8.0
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Object} Returns the new mapped object.
	     * @see _.mapValues
	     * @example
	     *
	     * _.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
	     *   return key + value;
	     * });
	     * // => { 'a1': 1, 'b2': 2 }
	     */
	    function mapKeys(object, iteratee) {
	      var result = {};
	      iteratee = getIteratee(iteratee, 3);
	
	      baseForOwn(object, function(value, key, object) {
	        baseAssignValue(result, iteratee(value, key, object), value);
	      });
	      return result;
	    }
	
	    /**
	     * Creates an object with the same keys as `object` and values generated
	     * by running each own enumerable string keyed property of `object` thru
	     * `iteratee`. The iteratee is invoked with three arguments:
	     * (value, key, object).
	     *
	     * @static
	     * @memberOf _
	     * @since 2.4.0
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Object} Returns the new mapped object.
	     * @see _.mapKeys
	     * @example
	     *
	     * var users = {
	     *   'fred':    { 'user': 'fred',    'age': 40 },
	     *   'pebbles': { 'user': 'pebbles', 'age': 1 }
	     * };
	     *
	     * _.mapValues(users, function(o) { return o.age; });
	     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.mapValues(users, 'age');
	     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
	     */
	    function mapValues(object, iteratee) {
	      var result = {};
	      iteratee = getIteratee(iteratee, 3);
	
	      baseForOwn(object, function(value, key, object) {
	        baseAssignValue(result, key, iteratee(value, key, object));
	      });
	      return result;
	    }
	
	    /**
	     * This method is like `_.assign` except that it recursively merges own and
	     * inherited enumerable string keyed properties of source objects into the
	     * destination object. Source properties that resolve to `undefined` are
	     * skipped if a destination value exists. Array and plain object properties
	     * are merged recursively. Other objects and value types are overridden by
	     * assignment. Source objects are applied from left to right. Subsequent
	     * sources overwrite property assignments of previous sources.
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.5.0
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} [sources] The source objects.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * var object = {
	     *   'a': [{ 'b': 2 }, { 'd': 4 }]
	     * };
	     *
	     * var other = {
	     *   'a': [{ 'c': 3 }, { 'e': 5 }]
	     * };
	     *
	     * _.merge(object, other);
	     * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
	     */
	    var merge = createAssigner(function(object, source, srcIndex) {
	      baseMerge(object, source, srcIndex);
	    });
	
	    /**
	     * This method is like `_.merge` except that it accepts `customizer` which
	     * is invoked to produce the merged values of the destination and source
	     * properties. If `customizer` returns `undefined`, merging is handled by the
	     * method instead. The `customizer` is invoked with six arguments:
	     * (objValue, srcValue, key, object, source, stack).
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} sources The source objects.
	     * @param {Function} customizer The function to customize assigned values.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * function customizer(objValue, srcValue) {
	     *   if (_.isArray(objValue)) {
	     *     return objValue.concat(srcValue);
	     *   }
	     * }
	     *
	     * var object = { 'a': [1], 'b': [2] };
	     * var other = { 'a': [3], 'b': [4] };
	     *
	     * _.mergeWith(object, other, customizer);
	     * // => { 'a': [1, 3], 'b': [2, 4] }
	     */
	    var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
	      baseMerge(object, source, srcIndex, customizer);
	    });
	
	    /**
	     * The opposite of `_.pick`; this method creates an object composed of the
	     * own and inherited enumerable property paths of `object` that are not omitted.
	     *
	     * **Note:** This method is considerably slower than `_.pick`.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The source object.
	     * @param {...(string|string[])} [paths] The property paths to omit.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * var object = { 'a': 1, 'b': '2', 'c': 3 };
	     *
	     * _.omit(object, ['a', 'c']);
	     * // => { 'b': '2' }
	     */
	    var omit = flatRest(function(object, paths) {
	      var result = {};
	      if (object == null) {
	        return result;
	      }
	      var isDeep = false;
	      paths = arrayMap(paths, function(path) {
	        path = castPath(path, object);
	        isDeep || (isDeep = path.length > 1);
	        return path;
	      });
	      copyObject(object, getAllKeysIn(object), result);
	      if (isDeep) {
	        result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
	      }
	      var length = paths.length;
	      while (length--) {
	        baseUnset(result, paths[length]);
	      }
	      return result;
	    });
	
	    /**
	     * The opposite of `_.pickBy`; this method creates an object composed of
	     * the own and inherited enumerable string keyed properties of `object` that
	     * `predicate` doesn't return truthy for. The predicate is invoked with two
	     * arguments: (value, key).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Object
	     * @param {Object} object The source object.
	     * @param {Function} [predicate=_.identity] The function invoked per property.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * var object = { 'a': 1, 'b': '2', 'c': 3 };
	     *
	     * _.omitBy(object, _.isNumber);
	     * // => { 'b': '2' }
	     */
	    function omitBy(object, predicate) {
	      return pickBy(object, negate(getIteratee(predicate)));
	    }
	
	    /**
	     * Creates an object composed of the picked `object` properties.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The source object.
	     * @param {...(string|string[])} [paths] The property paths to pick.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * var object = { 'a': 1, 'b': '2', 'c': 3 };
	     *
	     * _.pick(object, ['a', 'c']);
	     * // => { 'a': 1, 'c': 3 }
	     */
	    var pick = flatRest(function(object, paths) {
	      return object == null ? {} : basePick(object, paths);
	    });
	
	    /**
	     * Creates an object composed of the `object` properties `predicate` returns
	     * truthy for. The predicate is invoked with two arguments: (value, key).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Object
	     * @param {Object} object The source object.
	     * @param {Function} [predicate=_.identity] The function invoked per property.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * var object = { 'a': 1, 'b': '2', 'c': 3 };
	     *
	     * _.pickBy(object, _.isNumber);
	     * // => { 'a': 1, 'c': 3 }
	     */
	    function pickBy(object, predicate) {
	      if (object == null) {
	        return {};
	      }
	      var props = arrayMap(getAllKeysIn(object), function(prop) {
	        return [prop];
	      });
	      predicate = getIteratee(predicate);
	      return basePickBy(object, props, function(value, path) {
	        return predicate(value, path[0]);
	      });
	    }
	
	    /**
	     * This method is like `_.get` except that if the resolved value is a
	     * function it's invoked with the `this` binding of its parent object and
	     * its result is returned.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path of the property to resolve.
	     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	     * @returns {*} Returns the resolved value.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
	     *
	     * _.result(object, 'a[0].b.c1');
	     * // => 3
	     *
	     * _.result(object, 'a[0].b.c2');
	     * // => 4
	     *
	     * _.result(object, 'a[0].b.c3', 'default');
	     * // => 'default'
	     *
	     * _.result(object, 'a[0].b.c3', _.constant('default'));
	     * // => 'default'
	     */
	    function result(object, path, defaultValue) {
	      path = castPath(path, object);
	
	      var index = -1,
	          length = path.length;
	
	      // Ensure the loop is entered when path is empty.
	      if (!length) {
	        length = 1;
	        object = undefined;
	      }
	      while (++index < length) {
	        var value = object == null ? undefined : object[toKey(path[index])];
	        if (value === undefined) {
	          index = length;
	          value = defaultValue;
	        }
	        object = isFunction(value) ? value.call(object) : value;
	      }
	      return object;
	    }
	
	    /**
	     * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
	     * it's created. Arrays are created for missing index properties while objects
	     * are created for all other missing properties. Use `_.setWith` to customize
	     * `path` creation.
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.7.0
	     * @category Object
	     * @param {Object} object The object to modify.
	     * @param {Array|string} path The path of the property to set.
	     * @param {*} value The value to set.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	     *
	     * _.set(object, 'a[0].b.c', 4);
	     * console.log(object.a[0].b.c);
	     * // => 4
	     *
	     * _.set(object, ['x', '0', 'y', 'z'], 5);
	     * console.log(object.x[0].y.z);
	     * // => 5
	     */
	    function set(object, path, value) {
	      return object == null ? object : baseSet(object, path, value);
	    }
	
	    /**
	     * This method is like `_.set` except that it accepts `customizer` which is
	     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
	     * path creation is handled by the method instead. The `customizer` is invoked
	     * with three arguments: (nsValue, key, nsObject).
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Object
	     * @param {Object} object The object to modify.
	     * @param {Array|string} path The path of the property to set.
	     * @param {*} value The value to set.
	     * @param {Function} [customizer] The function to customize assigned values.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * var object = {};
	     *
	     * _.setWith(object, '[0][1]', 'a', Object);
	     * // => { '0': { '1': 'a' } }
	     */
	    function setWith(object, path, value, customizer) {
	      customizer = typeof customizer == 'function' ? customizer : undefined;
	      return object == null ? object : baseSet(object, path, value, customizer);
	    }
	
	    /**
	     * Creates an array of own enumerable string keyed-value pairs for `object`
	     * which can be consumed by `_.fromPairs`. If `object` is a map or set, its
	     * entries are returned.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @alias entries
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the key-value pairs.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.toPairs(new Foo);
	     * // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
	     */
	    var toPairs = createToPairs(keys);
	
	    /**
	     * Creates an array of own and inherited enumerable string keyed-value pairs
	     * for `object` which can be consumed by `_.fromPairs`. If `object` is a map
	     * or set, its entries are returned.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @alias entriesIn
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the key-value pairs.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.toPairsIn(new Foo);
	     * // => [['a', 1], ['b', 2], ['c', 3]] (iteration order is not guaranteed)
	     */
	    var toPairsIn = createToPairs(keysIn);
	
	    /**
	     * An alternative to `_.reduce`; this method transforms `object` to a new
	     * `accumulator` object which is the result of running each of its own
	     * enumerable string keyed properties thru `iteratee`, with each invocation
	     * potentially mutating the `accumulator` object. If `accumulator` is not
	     * provided, a new object with the same `[[Prototype]]` will be used. The
	     * iteratee is invoked with four arguments: (accumulator, value, key, object).
	     * Iteratee functions may exit iteration early by explicitly returning `false`.
	     *
	     * @static
	     * @memberOf _
	     * @since 1.3.0
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [accumulator] The custom accumulator value.
	     * @returns {*} Returns the accumulated value.
	     * @example
	     *
	     * _.transform([2, 3, 4], function(result, n) {
	     *   result.push(n *= n);
	     *   return n % 2 == 0;
	     * }, []);
	     * // => [4, 9]
	     *
	     * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
	     *   (result[value] || (result[value] = [])).push(key);
	     * }, {});
	     * // => { '1': ['a', 'c'], '2': ['b'] }
	     */
	    function transform(object, iteratee, accumulator) {
	      var isArr = isArray(object),
	          isArrLike = isArr || isBuffer(object) || isTypedArray(object);
	
	      iteratee = getIteratee(iteratee, 4);
	      if (accumulator == null) {
	        var Ctor = object && object.constructor;
	        if (isArrLike) {
	          accumulator = isArr ? new Ctor : [];
	        }
	        else if (isObject(object)) {
	          accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
	        }
	        else {
	          accumulator = {};
	        }
	      }
	      (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object) {
	        return iteratee(accumulator, value, index, object);
	      });
	      return accumulator;
	    }
	
	    /**
	     * Removes the property at `path` of `object`.
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Object
	     * @param {Object} object The object to modify.
	     * @param {Array|string} path The path of the property to unset.
	     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c': 7 } }] };
	     * _.unset(object, 'a[0].b.c');
	     * // => true
	     *
	     * console.log(object);
	     * // => { 'a': [{ 'b': {} }] };
	     *
	     * _.unset(object, ['a', '0', 'b', 'c']);
	     * // => true
	     *
	     * console.log(object);
	     * // => { 'a': [{ 'b': {} }] };
	     */
	    function unset(object, path) {
	      return object == null ? true : baseUnset(object, path);
	    }
	
	    /**
	     * This method is like `_.set` except that accepts `updater` to produce the
	     * value to set. Use `_.updateWith` to customize `path` creation. The `updater`
	     * is invoked with one argument: (value).
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.6.0
	     * @category Object
	     * @param {Object} object The object to modify.
	     * @param {Array|string} path The path of the property to set.
	     * @param {Function} updater The function to produce the updated value.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	     *
	     * _.update(object, 'a[0].b.c', function(n) { return n * n; });
	     * console.log(object.a[0].b.c);
	     * // => 9
	     *
	     * _.update(object, 'x[0].y.z', function(n) { return n ? n + 1 : 0; });
	     * console.log(object.x[0].y.z);
	     * // => 0
	     */
	    function update(object, path, updater) {
	      return object == null ? object : baseUpdate(object, path, castFunction(updater));
	    }
	
	    /**
	     * This method is like `_.update` except that it accepts `customizer` which is
	     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
	     * path creation is handled by the method instead. The `customizer` is invoked
	     * with three arguments: (nsValue, key, nsObject).
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.6.0
	     * @category Object
	     * @param {Object} object The object to modify.
	     * @param {Array|string} path The path of the property to set.
	     * @param {Function} updater The function to produce the updated value.
	     * @param {Function} [customizer] The function to customize assigned values.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * var object = {};
	     *
	     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
	     * // => { '0': { '1': 'a' } }
	     */
	    function updateWith(object, path, updater, customizer) {
	      customizer = typeof customizer == 'function' ? customizer : undefined;
	      return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
	    }
	
	    /**
	     * Creates an array of the own enumerable string keyed property values of `object`.
	     *
	     * **Note:** Non-object values are coerced to objects.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property values.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.values(new Foo);
	     * // => [1, 2] (iteration order is not guaranteed)
	     *
	     * _.values('hi');
	     * // => ['h', 'i']
	     */
	    function values(object) {
	      return object == null ? [] : baseValues(object, keys(object));
	    }
	
	    /**
	     * Creates an array of the own and inherited enumerable string keyed property
	     * values of `object`.
	     *
	     * **Note:** Non-object values are coerced to objects.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property values.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.valuesIn(new Foo);
	     * // => [1, 2, 3] (iteration order is not guaranteed)
	     */
	    function valuesIn(object) {
	      return object == null ? [] : baseValues(object, keysIn(object));
	    }
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * Clamps `number` within the inclusive `lower` and `upper` bounds.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Number
	     * @param {number} number The number to clamp.
	     * @param {number} [lower] The lower bound.
	     * @param {number} upper The upper bound.
	     * @returns {number} Returns the clamped number.
	     * @example
	     *
	     * _.clamp(-10, -5, 5);
	     * // => -5
	     *
	     * _.clamp(10, -5, 5);
	     * // => 5
	     */
	    function clamp(number, lower, upper) {
	      if (upper === undefined) {
	        upper = lower;
	        lower = undefined;
	      }
	      if (upper !== undefined) {
	        upper = toNumber(upper);
	        upper = upper === upper ? upper : 0;
	      }
	      if (lower !== undefined) {
	        lower = toNumber(lower);
	        lower = lower === lower ? lower : 0;
	      }
	      return baseClamp(toNumber(number), lower, upper);
	    }
	
	    /**
	     * Checks if `n` is between `start` and up to, but not including, `end`. If
	     * `end` is not specified, it's set to `start` with `start` then set to `0`.
	     * If `start` is greater than `end` the params are swapped to support
	     * negative ranges.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.3.0
	     * @category Number
	     * @param {number} number The number to check.
	     * @param {number} [start=0] The start of the range.
	     * @param {number} end The end of the range.
	     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
	     * @see _.range, _.rangeRight
	     * @example
	     *
	     * _.inRange(3, 2, 4);
	     * // => true
	     *
	     * _.inRange(4, 8);
	     * // => true
	     *
	     * _.inRange(4, 2);
	     * // => false
	     *
	     * _.inRange(2, 2);
	     * // => false
	     *
	     * _.inRange(1.2, 2);
	     * // => true
	     *
	     * _.inRange(5.2, 4);
	     * // => false
	     *
	     * _.inRange(-3, -2, -6);
	     * // => true
	     */
	    function inRange(number, start, end) {
	      start = toFinite(start);
	      if (end === undefined) {
	        end = start;
	        start = 0;
	      } else {
	        end = toFinite(end);
	      }
	      number = toNumber(number);
	      return baseInRange(number, start, end);
	    }
	
	    /**
	     * Produces a random number between the inclusive `lower` and `upper` bounds.
	     * If only one argument is provided a number between `0` and the given number
	     * is returned. If `floating` is `true`, or either `lower` or `upper` are
	     * floats, a floating-point number is returned instead of an integer.
	     *
	     * **Note:** JavaScript follows the IEEE-754 standard for resolving
	     * floating-point values which can produce unexpected results.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.7.0
	     * @category Number
	     * @param {number} [lower=0] The lower bound.
	     * @param {number} [upper=1] The upper bound.
	     * @param {boolean} [floating] Specify returning a floating-point number.
	     * @returns {number} Returns the random number.
	     * @example
	     *
	     * _.random(0, 5);
	     * // => an integer between 0 and 5
	     *
	     * _.random(5);
	     * // => also an integer between 0 and 5
	     *
	     * _.random(5, true);
	     * // => a floating-point number between 0 and 5
	     *
	     * _.random(1.2, 5.2);
	     * // => a floating-point number between 1.2 and 5.2
	     */
	    function random(lower, upper, floating) {
	      if (floating && typeof floating != 'boolean' && isIterateeCall(lower, upper, floating)) {
	        upper = floating = undefined;
	      }
	      if (floating === undefined) {
	        if (typeof upper == 'boolean') {
	          floating = upper;
	          upper = undefined;
	        }
	        else if (typeof lower == 'boolean') {
	          floating = lower;
	          lower = undefined;
	        }
	      }
	      if (lower === undefined && upper === undefined) {
	        lower = 0;
	        upper = 1;
	      }
	      else {
	        lower = toFinite(lower);
	        if (upper === undefined) {
	          upper = lower;
	          lower = 0;
	        } else {
	          upper = toFinite(upper);
	        }
	      }
	      if (lower > upper) {
	        var temp = lower;
	        lower = upper;
	        upper = temp;
	      }
	      if (floating || lower % 1 || upper % 1) {
	        var rand = nativeRandom();
	        return nativeMin(lower + (rand * (upper - lower + freeParseFloat('1e-' + ((rand + '').length - 1)))), upper);
	      }
	      return baseRandom(lower, upper);
	    }
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the camel cased string.
	     * @example
	     *
	     * _.camelCase('Foo Bar');
	     * // => 'fooBar'
	     *
	     * _.camelCase('--foo-bar--');
	     * // => 'fooBar'
	     *
	     * _.camelCase('__FOO_BAR__');
	     * // => 'fooBar'
	     */
	    var camelCase = createCompounder(function(result, word, index) {
	      word = word.toLowerCase();
	      return result + (index ? capitalize(word) : word);
	    });
	
	    /**
	     * Converts the first character of `string` to upper case and the remaining
	     * to lower case.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to capitalize.
	     * @returns {string} Returns the capitalized string.
	     * @example
	     *
	     * _.capitalize('FRED');
	     * // => 'Fred'
	     */
	    function capitalize(string) {
	      return upperFirst(toString(string).toLowerCase());
	    }
	
	    /**
	     * Deburrs `string` by converting
	     * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
	     * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
	     * letters to basic Latin letters and removing
	     * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to deburr.
	     * @returns {string} Returns the deburred string.
	     * @example
	     *
	     * _.deburr('déjà vu');
	     * // => 'deja vu'
	     */
	    function deburr(string) {
	      string = toString(string);
	      return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
	    }
	
	    /**
	     * Checks if `string` ends with the given target string.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to inspect.
	     * @param {string} [target] The string to search for.
	     * @param {number} [position=string.length] The position to search up to.
	     * @returns {boolean} Returns `true` if `string` ends with `target`,
	     *  else `false`.
	     * @example
	     *
	     * _.endsWith('abc', 'c');
	     * // => true
	     *
	     * _.endsWith('abc', 'b');
	     * // => false
	     *
	     * _.endsWith('abc', 'b', 2);
	     * // => true
	     */
	    function endsWith(string, target, position) {
	      string = toString(string);
	      target = baseToString(target);
	
	      var length = string.length;
	      position = position === undefined
	        ? length
	        : baseClamp(toInteger(position), 0, length);
	
	      var end = position;
	      position -= target.length;
	      return position >= 0 && string.slice(position, end) == target;
	    }
	
	    /**
	     * Converts the characters "&", "<", ">", '"', and "'" in `string` to their
	     * corresponding HTML entities.
	     *
	     * **Note:** No other characters are escaped. To escape additional
	     * characters use a third-party library like [_he_](https://mths.be/he).
	     *
	     * Though the ">" character is escaped for symmetry, characters like
	     * ">" and "/" don't need escaping in HTML and have no special meaning
	     * unless they're part of a tag or unquoted attribute value. See
	     * [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
	     * (under "semi-related fun fact") for more details.
	     *
	     * When working with HTML you should always
	     * [quote attribute values](http://wonko.com/post/html-escaping) to reduce
	     * XSS vectors.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to escape.
	     * @returns {string} Returns the escaped string.
	     * @example
	     *
	     * _.escape('fred, barney, & pebbles');
	     * // => 'fred, barney, &amp; pebbles'
	     */
	    function escape(string) {
	      string = toString(string);
	      return (string && reHasUnescapedHtml.test(string))
	        ? string.replace(reUnescapedHtml, escapeHtmlChar)
	        : string;
	    }
	
	    /**
	     * Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
	     * "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to escape.
	     * @returns {string} Returns the escaped string.
	     * @example
	     *
	     * _.escapeRegExp('[lodash](https://lodash.com/)');
	     * // => '\[lodash\]\(https://lodash\.com/\)'
	     */
	    function escapeRegExp(string) {
	      string = toString(string);
	      return (string && reHasRegExpChar.test(string))
	        ? string.replace(reRegExpChar, '\\$&')
	        : string;
	    }
	
	    /**
	     * Converts `string` to
	     * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the kebab cased string.
	     * @example
	     *
	     * _.kebabCase('Foo Bar');
	     * // => 'foo-bar'
	     *
	     * _.kebabCase('fooBar');
	     * // => 'foo-bar'
	     *
	     * _.kebabCase('__FOO_BAR__');
	     * // => 'foo-bar'
	     */
	    var kebabCase = createCompounder(function(result, word, index) {
	      return result + (index ? '-' : '') + word.toLowerCase();
	    });
	
	    /**
	     * Converts `string`, as space separated words, to lower case.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the lower cased string.
	     * @example
	     *
	     * _.lowerCase('--Foo-Bar--');
	     * // => 'foo bar'
	     *
	     * _.lowerCase('fooBar');
	     * // => 'foo bar'
	     *
	     * _.lowerCase('__FOO_BAR__');
	     * // => 'foo bar'
	     */
	    var lowerCase = createCompounder(function(result, word, index) {
	      return result + (index ? ' ' : '') + word.toLowerCase();
	    });
	
	    /**
	     * Converts the first character of `string` to lower case.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the converted string.
	     * @example
	     *
	     * _.lowerFirst('Fred');
	     * // => 'fred'
	     *
	     * _.lowerFirst('FRED');
	     * // => 'fRED'
	     */
	    var lowerFirst = createCaseFirst('toLowerCase');
	
	    /**
	     * Pads `string` on the left and right sides if it's shorter than `length`.
	     * Padding characters are truncated if they can't be evenly divided by `length`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to pad.
	     * @param {number} [length=0] The padding length.
	     * @param {string} [chars=' '] The string used as padding.
	     * @returns {string} Returns the padded string.
	     * @example
	     *
	     * _.pad('abc', 8);
	     * // => '  abc   '
	     *
	     * _.pad('abc', 8, '_-');
	     * // => '_-abc_-_'
	     *
	     * _.pad('abc', 3);
	     * // => 'abc'
	     */
	    function pad(string, length, chars) {
	      string = toString(string);
	      length = toInteger(length);
	
	      var strLength = length ? stringSize(string) : 0;
	      if (!length || strLength >= length) {
	        return string;
	      }
	      var mid = (length - strLength) / 2;
	      return (
	        createPadding(nativeFloor(mid), chars) +
	        string +
	        createPadding(nativeCeil(mid), chars)
	      );
	    }
	
	    /**
	     * Pads `string` on the right side if it's shorter than `length`. Padding
	     * characters are truncated if they exceed `length`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to pad.
	     * @param {number} [length=0] The padding length.
	     * @param {string} [chars=' '] The string used as padding.
	     * @returns {string} Returns the padded string.
	     * @example
	     *
	     * _.padEnd('abc', 6);
	     * // => 'abc   '
	     *
	     * _.padEnd('abc', 6, '_-');
	     * // => 'abc_-_'
	     *
	     * _.padEnd('abc', 3);
	     * // => 'abc'
	     */
	    function padEnd(string, length, chars) {
	      string = toString(string);
	      length = toInteger(length);
	
	      var strLength = length ? stringSize(string) : 0;
	      return (length && strLength < length)
	        ? (string + createPadding(length - strLength, chars))
	        : string;
	    }
	
	    /**
	     * Pads `string` on the left side if it's shorter than `length`. Padding
	     * characters are truncated if they exceed `length`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to pad.
	     * @param {number} [length=0] The padding length.
	     * @param {string} [chars=' '] The string used as padding.
	     * @returns {string} Returns the padded string.
	     * @example
	     *
	     * _.padStart('abc', 6);
	     * // => '   abc'
	     *
	     * _.padStart('abc', 6, '_-');
	     * // => '_-_abc'
	     *
	     * _.padStart('abc', 3);
	     * // => 'abc'
	     */
	    function padStart(string, length, chars) {
	      string = toString(string);
	      length = toInteger(length);
	
	      var strLength = length ? stringSize(string) : 0;
	      return (length && strLength < length)
	        ? (createPadding(length - strLength, chars) + string)
	        : string;
	    }
	
	    /**
	     * Converts `string` to an integer of the specified radix. If `radix` is
	     * `undefined` or `0`, a `radix` of `10` is used unless `value` is a
	     * hexadecimal, in which case a `radix` of `16` is used.
	     *
	     * **Note:** This method aligns with the
	     * [ES5 implementation](https://es5.github.io/#x15.1.2.2) of `parseInt`.
	     *
	     * @static
	     * @memberOf _
	     * @since 1.1.0
	     * @category String
	     * @param {string} string The string to convert.
	     * @param {number} [radix=10] The radix to interpret `value` by.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {number} Returns the converted integer.
	     * @example
	     *
	     * _.parseInt('08');
	     * // => 8
	     *
	     * _.map(['6', '08', '10'], _.parseInt);
	     * // => [6, 8, 10]
	     */
	    function parseInt(string, radix, guard) {
	      if (guard || radix == null) {
	        radix = 0;
	      } else if (radix) {
	        radix = +radix;
	      }
	      return nativeParseInt(toString(string).replace(reTrimStart, ''), radix || 0);
	    }
	
	    /**
	     * Repeats the given string `n` times.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to repeat.
	     * @param {number} [n=1] The number of times to repeat the string.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {string} Returns the repeated string.
	     * @example
	     *
	     * _.repeat('*', 3);
	     * // => '***'
	     *
	     * _.repeat('abc', 2);
	     * // => 'abcabc'
	     *
	     * _.repeat('abc', 0);
	     * // => ''
	     */
	    function repeat(string, n, guard) {
	      if ((guard ? isIterateeCall(string, n, guard) : n === undefined)) {
	        n = 1;
	      } else {
	        n = toInteger(n);
	      }
	      return baseRepeat(toString(string), n);
	    }
	
	    /**
	     * Replaces matches for `pattern` in `string` with `replacement`.
	     *
	     * **Note:** This method is based on
	     * [`String#replace`](https://mdn.io/String/replace).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to modify.
	     * @param {RegExp|string} pattern The pattern to replace.
	     * @param {Function|string} replacement The match replacement.
	     * @returns {string} Returns the modified string.
	     * @example
	     *
	     * _.replace('Hi Fred', 'Fred', 'Barney');
	     * // => 'Hi Barney'
	     */
	    function replace() {
	      var args = arguments,
	          string = toString(args[0]);
	
	      return args.length < 3 ? string : string.replace(args[1], args[2]);
	    }
	
	    /**
	     * Converts `string` to
	     * [snake case](https://en.wikipedia.org/wiki/Snake_case).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the snake cased string.
	     * @example
	     *
	     * _.snakeCase('Foo Bar');
	     * // => 'foo_bar'
	     *
	     * _.snakeCase('fooBar');
	     * // => 'foo_bar'
	     *
	     * _.snakeCase('--FOO-BAR--');
	     * // => 'foo_bar'
	     */
	    var snakeCase = createCompounder(function(result, word, index) {
	      return result + (index ? '_' : '') + word.toLowerCase();
	    });
	
	    /**
	     * Splits `string` by `separator`.
	     *
	     * **Note:** This method is based on
	     * [`String#split`](https://mdn.io/String/split).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to split.
	     * @param {RegExp|string} separator The separator pattern to split by.
	     * @param {number} [limit] The length to truncate results to.
	     * @returns {Array} Returns the string segments.
	     * @example
	     *
	     * _.split('a-b-c', '-', 2);
	     * // => ['a', 'b']
	     */
	    function split(string, separator, limit) {
	      if (limit && typeof limit != 'number' && isIterateeCall(string, separator, limit)) {
	        separator = limit = undefined;
	      }
	      limit = limit === undefined ? MAX_ARRAY_LENGTH : limit >>> 0;
	      if (!limit) {
	        return [];
	      }
	      string = toString(string);
	      if (string && (
	            typeof separator == 'string' ||
	            (separator != null && !isRegExp(separator))
	          )) {
	        separator = baseToString(separator);
	        if (!separator && hasUnicode(string)) {
	          return castSlice(stringToArray(string), 0, limit);
	        }
	      }
	      return string.split(separator, limit);
	    }
	
	    /**
	     * Converts `string` to
	     * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.1.0
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the start cased string.
	     * @example
	     *
	     * _.startCase('--foo-bar--');
	     * // => 'Foo Bar'
	     *
	     * _.startCase('fooBar');
	     * // => 'Foo Bar'
	     *
	     * _.startCase('__FOO_BAR__');
	     * // => 'FOO BAR'
	     */
	    var startCase = createCompounder(function(result, word, index) {
	      return result + (index ? ' ' : '') + upperFirst(word);
	    });
	
	    /**
	     * Checks if `string` starts with the given target string.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to inspect.
	     * @param {string} [target] The string to search for.
	     * @param {number} [position=0] The position to search from.
	     * @returns {boolean} Returns `true` if `string` starts with `target`,
	     *  else `false`.
	     * @example
	     *
	     * _.startsWith('abc', 'a');
	     * // => true
	     *
	     * _.startsWith('abc', 'b');
	     * // => false
	     *
	     * _.startsWith('abc', 'b', 1);
	     * // => true
	     */
	    function startsWith(string, target, position) {
	      string = toString(string);
	      position = position == null
	        ? 0
	        : baseClamp(toInteger(position), 0, string.length);
	
	      target = baseToString(target);
	      return string.slice(position, position + target.length) == target;
	    }
	
	    /**
	     * Creates a compiled template function that can interpolate data properties
	     * in "interpolate" delimiters, HTML-escape interpolated data properties in
	     * "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data
	     * properties may be accessed as free variables in the template. If a setting
	     * object is given, it takes precedence over `_.templateSettings` values.
	     *
	     * **Note:** In the development build `_.template` utilizes
	     * [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
	     * for easier debugging.
	     *
	     * For more information on precompiling templates see
	     * [lodash's custom builds documentation](https://lodash.com/custom-builds).
	     *
	     * For more information on Chrome extension sandboxes see
	     * [Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The template string.
	     * @param {Object} [options={}] The options object.
	     * @param {RegExp} [options.escape=_.templateSettings.escape]
	     *  The HTML "escape" delimiter.
	     * @param {RegExp} [options.evaluate=_.templateSettings.evaluate]
	     *  The "evaluate" delimiter.
	     * @param {Object} [options.imports=_.templateSettings.imports]
	     *  An object to import into the template as free variables.
	     * @param {RegExp} [options.interpolate=_.templateSettings.interpolate]
	     *  The "interpolate" delimiter.
	     * @param {string} [options.sourceURL='lodash.templateSources[n]']
	     *  The sourceURL of the compiled template.
	     * @param {string} [options.variable='obj']
	     *  The data object variable name.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Function} Returns the compiled template function.
	     * @example
	     *
	     * // Use the "interpolate" delimiter to create a compiled template.
	     * var compiled = _.template('hello <%= user %>!');
	     * compiled({ 'user': 'fred' });
	     * // => 'hello fred!'
	     *
	     * // Use the HTML "escape" delimiter to escape data property values.
	     * var compiled = _.template('<b><%- value %></b>');
	     * compiled({ 'value': '<script>' });
	     * // => '<b>&lt;script&gt;</b>'
	     *
	     * // Use the "evaluate" delimiter to execute JavaScript and generate HTML.
	     * var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
	     * compiled({ 'users': ['fred', 'barney'] });
	     * // => '<li>fred</li><li>barney</li>'
	     *
	     * // Use the internal `print` function in "evaluate" delimiters.
	     * var compiled = _.template('<% print("hello " + user); %>!');
	     * compiled({ 'user': 'barney' });
	     * // => 'hello barney!'
	     *
	     * // Use the ES template literal delimiter as an "interpolate" delimiter.
	     * // Disable support by replacing the "interpolate" delimiter.
	     * var compiled = _.template('hello ${ user }!');
	     * compiled({ 'user': 'pebbles' });
	     * // => 'hello pebbles!'
	     *
	     * // Use backslashes to treat delimiters as plain text.
	     * var compiled = _.template('<%= "\\<%- value %\\>" %>');
	     * compiled({ 'value': 'ignored' });
	     * // => '<%- value %>'
	     *
	     * // Use the `imports` option to import `jQuery` as `jq`.
	     * var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
	     * var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
	     * compiled({ 'users': ['fred', 'barney'] });
	     * // => '<li>fred</li><li>barney</li>'
	     *
	     * // Use the `sourceURL` option to specify a custom sourceURL for the template.
	     * var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
	     * compiled(data);
	     * // => Find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector.
	     *
	     * // Use the `variable` option to ensure a with-statement isn't used in the compiled template.
	     * var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
	     * compiled.source;
	     * // => function(data) {
	     * //   var __t, __p = '';
	     * //   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
	     * //   return __p;
	     * // }
	     *
	     * // Use custom template delimiters.
	     * _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
	     * var compiled = _.template('hello {{ user }}!');
	     * compiled({ 'user': 'mustache' });
	     * // => 'hello mustache!'
	     *
	     * // Use the `source` property to inline compiled templates for meaningful
	     * // line numbers in error messages and stack traces.
	     * fs.writeFileSync(path.join(process.cwd(), 'jst.js'), '\
	     *   var JST = {\
	     *     "main": ' + _.template(mainText).source + '\
	     *   };\
	     * ');
	     */
	    function template(string, options, guard) {
	      // Based on John Resig's `tmpl` implementation
	      // (http://ejohn.org/blog/javascript-micro-templating/)
	      // and Laura Doktorova's doT.js (https://github.com/olado/doT).
	      var settings = lodash.templateSettings;
	
	      if (guard && isIterateeCall(string, options, guard)) {
	        options = undefined;
	      }
	      string = toString(string);
	      options = assignInWith({}, options, settings, customDefaultsAssignIn);
	
	      var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn),
	          importsKeys = keys(imports),
	          importsValues = baseValues(imports, importsKeys);
	
	      var isEscaping,
	          isEvaluating,
	          index = 0,
	          interpolate = options.interpolate || reNoMatch,
	          source = "__p += '";
	
	      // Compile the regexp to match each delimiter.
	      var reDelimiters = RegExp(
	        (options.escape || reNoMatch).source + '|' +
	        interpolate.source + '|' +
	        (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + '|' +
	        (options.evaluate || reNoMatch).source + '|$'
	      , 'g');
	
	      // Use a sourceURL for easier debugging.
	      var sourceURL = '//# sourceURL=' +
	        ('sourceURL' in options
	          ? options.sourceURL
	          : ('lodash.templateSources[' + (++templateCounter) + ']')
	        ) + '\n';
	
	      string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
	        interpolateValue || (interpolateValue = esTemplateValue);
	
	        // Escape characters that can't be included in string literals.
	        source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);
	
	        // Replace delimiters with snippets.
	        if (escapeValue) {
	          isEscaping = true;
	          source += "' +\n__e(" + escapeValue + ") +\n'";
	        }
	        if (evaluateValue) {
	          isEvaluating = true;
	          source += "';\n" + evaluateValue + ";\n__p += '";
	        }
	        if (interpolateValue) {
	          source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
	        }
	        index = offset + match.length;
	
	        // The JS engine embedded in Adobe products needs `match` returned in
	        // order to produce the correct `offset` value.
	        return match;
	      });
	
	      source += "';\n";
	
	      // If `variable` is not specified wrap a with-statement around the generated
	      // code to add the data object to the top of the scope chain.
	      var variable = options.variable;
	      if (!variable) {
	        source = 'with (obj) {\n' + source + '\n}\n';
	      }
	      // Cleanup code by stripping empty strings.
	      source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source)
	        .replace(reEmptyStringMiddle, '$1')
	        .replace(reEmptyStringTrailing, '$1;');
	
	      // Frame code as the function body.
	      source = 'function(' + (variable || 'obj') + ') {\n' +
	        (variable
	          ? ''
	          : 'obj || (obj = {});\n'
	        ) +
	        "var __t, __p = ''" +
	        (isEscaping
	           ? ', __e = _.escape'
	           : ''
	        ) +
	        (isEvaluating
	          ? ', __j = Array.prototype.join;\n' +
	            "function print() { __p += __j.call(arguments, '') }\n"
	          : ';\n'
	        ) +
	        source +
	        'return __p\n}';
	
	      var result = attempt(function() {
	        return Function(importsKeys, sourceURL + 'return ' + source)
	          .apply(undefined, importsValues);
	      });
	
	      // Provide the compiled function's source by its `toString` method or
	      // the `source` property as a convenience for inlining compiled templates.
	      result.source = source;
	      if (isError(result)) {
	        throw result;
	      }
	      return result;
	    }
	
	    /**
	     * Converts `string`, as a whole, to lower case just like
	     * [String#toLowerCase](https://mdn.io/toLowerCase).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the lower cased string.
	     * @example
	     *
	     * _.toLower('--Foo-Bar--');
	     * // => '--foo-bar--'
	     *
	     * _.toLower('fooBar');
	     * // => 'foobar'
	     *
	     * _.toLower('__FOO_BAR__');
	     * // => '__foo_bar__'
	     */
	    function toLower(value) {
	      return toString(value).toLowerCase();
	    }
	
	    /**
	     * Converts `string`, as a whole, to upper case just like
	     * [String#toUpperCase](https://mdn.io/toUpperCase).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the upper cased string.
	     * @example
	     *
	     * _.toUpper('--foo-bar--');
	     * // => '--FOO-BAR--'
	     *
	     * _.toUpper('fooBar');
	     * // => 'FOOBAR'
	     *
	     * _.toUpper('__foo_bar__');
	     * // => '__FOO_BAR__'
	     */
	    function toUpper(value) {
	      return toString(value).toUpperCase();
	    }
	
	    /**
	     * Removes leading and trailing whitespace or specified characters from `string`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to trim.
	     * @param {string} [chars=whitespace] The characters to trim.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {string} Returns the trimmed string.
	     * @example
	     *
	     * _.trim('  abc  ');
	     * // => 'abc'
	     *
	     * _.trim('-_-abc-_-', '_-');
	     * // => 'abc'
	     *
	     * _.map(['  foo  ', '  bar  '], _.trim);
	     * // => ['foo', 'bar']
	     */
	    function trim(string, chars, guard) {
	      string = toString(string);
	      if (string && (guard || chars === undefined)) {
	        return string.replace(reTrim, '');
	      }
	      if (!string || !(chars = baseToString(chars))) {
	        return string;
	      }
	      var strSymbols = stringToArray(string),
	          chrSymbols = stringToArray(chars),
	          start = charsStartIndex(strSymbols, chrSymbols),
	          end = charsEndIndex(strSymbols, chrSymbols) + 1;
	
	      return castSlice(strSymbols, start, end).join('');
	    }
	
	    /**
	     * Removes trailing whitespace or specified characters from `string`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to trim.
	     * @param {string} [chars=whitespace] The characters to trim.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {string} Returns the trimmed string.
	     * @example
	     *
	     * _.trimEnd('  abc  ');
	     * // => '  abc'
	     *
	     * _.trimEnd('-_-abc-_-', '_-');
	     * // => '-_-abc'
	     */
	    function trimEnd(string, chars, guard) {
	      string = toString(string);
	      if (string && (guard || chars === undefined)) {
	        return string.replace(reTrimEnd, '');
	      }
	      if (!string || !(chars = baseToString(chars))) {
	        return string;
	      }
	      var strSymbols = stringToArray(string),
	          end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;
	
	      return castSlice(strSymbols, 0, end).join('');
	    }
	
	    /**
	     * Removes leading whitespace or specified characters from `string`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to trim.
	     * @param {string} [chars=whitespace] The characters to trim.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {string} Returns the trimmed string.
	     * @example
	     *
	     * _.trimStart('  abc  ');
	     * // => 'abc  '
	     *
	     * _.trimStart('-_-abc-_-', '_-');
	     * // => 'abc-_-'
	     */
	    function trimStart(string, chars, guard) {
	      string = toString(string);
	      if (string && (guard || chars === undefined)) {
	        return string.replace(reTrimStart, '');
	      }
	      if (!string || !(chars = baseToString(chars))) {
	        return string;
	      }
	      var strSymbols = stringToArray(string),
	          start = charsStartIndex(strSymbols, stringToArray(chars));
	
	      return castSlice(strSymbols, start).join('');
	    }
	
	    /**
	     * Truncates `string` if it's longer than the given maximum string length.
	     * The last characters of the truncated string are replaced with the omission
	     * string which defaults to "...".
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to truncate.
	     * @param {Object} [options={}] The options object.
	     * @param {number} [options.length=30] The maximum string length.
	     * @param {string} [options.omission='...'] The string to indicate text is omitted.
	     * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
	     * @returns {string} Returns the truncated string.
	     * @example
	     *
	     * _.truncate('hi-diddly-ho there, neighborino');
	     * // => 'hi-diddly-ho there, neighbo...'
	     *
	     * _.truncate('hi-diddly-ho there, neighborino', {
	     *   'length': 24,
	     *   'separator': ' '
	     * });
	     * // => 'hi-diddly-ho there,...'
	     *
	     * _.truncate('hi-diddly-ho there, neighborino', {
	     *   'length': 24,
	     *   'separator': /,? +/
	     * });
	     * // => 'hi-diddly-ho there...'
	     *
	     * _.truncate('hi-diddly-ho there, neighborino', {
	     *   'omission': ' [...]'
	     * });
	     * // => 'hi-diddly-ho there, neig [...]'
	     */
	    function truncate(string, options) {
	      var length = DEFAULT_TRUNC_LENGTH,
	          omission = DEFAULT_TRUNC_OMISSION;
	
	      if (isObject(options)) {
	        var separator = 'separator' in options ? options.separator : separator;
	        length = 'length' in options ? toInteger(options.length) : length;
	        omission = 'omission' in options ? baseToString(options.omission) : omission;
	      }
	      string = toString(string);
	
	      var strLength = string.length;
	      if (hasUnicode(string)) {
	        var strSymbols = stringToArray(string);
	        strLength = strSymbols.length;
	      }
	      if (length >= strLength) {
	        return string;
	      }
	      var end = length - stringSize(omission);
	      if (end < 1) {
	        return omission;
	      }
	      var result = strSymbols
	        ? castSlice(strSymbols, 0, end).join('')
	        : string.slice(0, end);
	
	      if (separator === undefined) {
	        return result + omission;
	      }
	      if (strSymbols) {
	        end += (result.length - end);
	      }
	      if (isRegExp(separator)) {
	        if (string.slice(end).search(separator)) {
	          var match,
	              substring = result;
	
	          if (!separator.global) {
	            separator = RegExp(separator.source, toString(reFlags.exec(separator)) + 'g');
	          }
	          separator.lastIndex = 0;
	          while ((match = separator.exec(substring))) {
	            var newEnd = match.index;
	          }
	          result = result.slice(0, newEnd === undefined ? end : newEnd);
	        }
	      } else if (string.indexOf(baseToString(separator), end) != end) {
	        var index = result.lastIndexOf(separator);
	        if (index > -1) {
	          result = result.slice(0, index);
	        }
	      }
	      return result + omission;
	    }
	
	    /**
	     * The inverse of `_.escape`; this method converts the HTML entities
	     * `&amp;`, `&lt;`, `&gt;`, `&quot;`, and `&#39;` in `string` to
	     * their corresponding characters.
	     *
	     * **Note:** No other HTML entities are unescaped. To unescape additional
	     * HTML entities use a third-party library like [_he_](https://mths.be/he).
	     *
	     * @static
	     * @memberOf _
	     * @since 0.6.0
	     * @category String
	     * @param {string} [string=''] The string to unescape.
	     * @returns {string} Returns the unescaped string.
	     * @example
	     *
	     * _.unescape('fred, barney, &amp; pebbles');
	     * // => 'fred, barney, & pebbles'
	     */
	    function unescape(string) {
	      string = toString(string);
	      return (string && reHasEscapedHtml.test(string))
	        ? string.replace(reEscapedHtml, unescapeHtmlChar)
	        : string;
	    }
	
	    /**
	     * Converts `string`, as space separated words, to upper case.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the upper cased string.
	     * @example
	     *
	     * _.upperCase('--foo-bar');
	     * // => 'FOO BAR'
	     *
	     * _.upperCase('fooBar');
	     * // => 'FOO BAR'
	     *
	     * _.upperCase('__foo_bar__');
	     * // => 'FOO BAR'
	     */
	    var upperCase = createCompounder(function(result, word, index) {
	      return result + (index ? ' ' : '') + word.toUpperCase();
	    });
	
	    /**
	     * Converts the first character of `string` to upper case.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the converted string.
	     * @example
	     *
	     * _.upperFirst('fred');
	     * // => 'Fred'
	     *
	     * _.upperFirst('FRED');
	     * // => 'FRED'
	     */
	    var upperFirst = createCaseFirst('toUpperCase');
	
	    /**
	     * Splits `string` into an array of its words.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to inspect.
	     * @param {RegExp|string} [pattern] The pattern to match words.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Array} Returns the words of `string`.
	     * @example
	     *
	     * _.words('fred, barney, & pebbles');
	     * // => ['fred', 'barney', 'pebbles']
	     *
	     * _.words('fred, barney, & pebbles', /[^, ]+/g);
	     * // => ['fred', 'barney', '&', 'pebbles']
	     */
	    function words(string, pattern, guard) {
	      string = toString(string);
	      pattern = guard ? undefined : pattern;
	
	      if (pattern === undefined) {
	        return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
	      }
	      return string.match(pattern) || [];
	    }
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * Attempts to invoke `func`, returning either the result or the caught error
	     * object. Any additional arguments are provided to `func` when it's invoked.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Util
	     * @param {Function} func The function to attempt.
	     * @param {...*} [args] The arguments to invoke `func` with.
	     * @returns {*} Returns the `func` result or error object.
	     * @example
	     *
	     * // Avoid throwing errors for invalid selectors.
	     * var elements = _.attempt(function(selector) {
	     *   return document.querySelectorAll(selector);
	     * }, '>_>');
	     *
	     * if (_.isError(elements)) {
	     *   elements = [];
	     * }
	     */
	    var attempt = baseRest(function(func, args) {
	      try {
	        return apply(func, undefined, args);
	      } catch (e) {
	        return isError(e) ? e : new Error(e);
	      }
	    });
	
	    /**
	     * Binds methods of an object to the object itself, overwriting the existing
	     * method.
	     *
	     * **Note:** This method doesn't set the "length" property of bound functions.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Util
	     * @param {Object} object The object to bind and assign the bound methods to.
	     * @param {...(string|string[])} methodNames The object method names to bind.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * var view = {
	     *   'label': 'docs',
	     *   'click': function() {
	     *     console.log('clicked ' + this.label);
	     *   }
	     * };
	     *
	     * _.bindAll(view, ['click']);
	     * jQuery(element).on('click', view.click);
	     * // => Logs 'clicked docs' when clicked.
	     */
	    var bindAll = flatRest(function(object, methodNames) {
	      arrayEach(methodNames, function(key) {
	        key = toKey(key);
	        baseAssignValue(object, key, bind(object[key], object));
	      });
	      return object;
	    });
	
	    /**
	     * Creates a function that iterates over `pairs` and invokes the corresponding
	     * function of the first predicate to return truthy. The predicate-function
	     * pairs are invoked with the `this` binding and arguments of the created
	     * function.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Util
	     * @param {Array} pairs The predicate-function pairs.
	     * @returns {Function} Returns the new composite function.
	     * @example
	     *
	     * var func = _.cond([
	     *   [_.matches({ 'a': 1 }),           _.constant('matches A')],
	     *   [_.conforms({ 'b': _.isNumber }), _.constant('matches B')],
	     *   [_.stubTrue,                      _.constant('no match')]
	     * ]);
	     *
	     * func({ 'a': 1, 'b': 2 });
	     * // => 'matches A'
	     *
	     * func({ 'a': 0, 'b': 1 });
	     * // => 'matches B'
	     *
	     * func({ 'a': '1', 'b': '2' });
	     * // => 'no match'
	     */
	    function cond(pairs) {
	      var length = pairs == null ? 0 : pairs.length,
	          toIteratee = getIteratee();
	
	      pairs = !length ? [] : arrayMap(pairs, function(pair) {
	        if (typeof pair[1] != 'function') {
	          throw new TypeError(FUNC_ERROR_TEXT);
	        }
	        return [toIteratee(pair[0]), pair[1]];
	      });
	
	      return baseRest(function(args) {
	        var index = -1;
	        while (++index < length) {
	          var pair = pairs[index];
	          if (apply(pair[0], this, args)) {
	            return apply(pair[1], this, args);
	          }
	        }
	      });
	    }
	
	    /**
	     * Creates a function that invokes the predicate properties of `source` with
	     * the corresponding property values of a given object, returning `true` if
	     * all predicates return truthy, else `false`.
	     *
	     * **Note:** The created function is equivalent to `_.conformsTo` with
	     * `source` partially applied.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Util
	     * @param {Object} source The object of property predicates to conform to.
	     * @returns {Function} Returns the new spec function.
	     * @example
	     *
	     * var objects = [
	     *   { 'a': 2, 'b': 1 },
	     *   { 'a': 1, 'b': 2 }
	     * ];
	     *
	     * _.filter(objects, _.conforms({ 'b': function(n) { return n > 1; } }));
	     * // => [{ 'a': 1, 'b': 2 }]
	     */
	    function conforms(source) {
	      return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
	    }
	
	    /**
	     * Creates a function that returns `value`.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.4.0
	     * @category Util
	     * @param {*} value The value to return from the new function.
	     * @returns {Function} Returns the new constant function.
	     * @example
	     *
	     * var objects = _.times(2, _.constant({ 'a': 1 }));
	     *
	     * console.log(objects);
	     * // => [{ 'a': 1 }, { 'a': 1 }]
	     *
	     * console.log(objects[0] === objects[1]);
	     * // => true
	     */
	    function constant(value) {
	      return function() {
	        return value;
	      };
	    }
	
	    /**
	     * Checks `value` to determine whether a default value should be returned in
	     * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
	     * or `undefined`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.14.0
	     * @category Util
	     * @param {*} value The value to check.
	     * @param {*} defaultValue The default value.
	     * @returns {*} Returns the resolved value.
	     * @example
	     *
	     * _.defaultTo(1, 10);
	     * // => 1
	     *
	     * _.defaultTo(undefined, 10);
	     * // => 10
	     */
	    function defaultTo(value, defaultValue) {
	      return (value == null || value !== value) ? defaultValue : value;
	    }
	
	    /**
	     * Creates a function that returns the result of invoking the given functions
	     * with the `this` binding of the created function, where each successive
	     * invocation is supplied the return value of the previous.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Util
	     * @param {...(Function|Function[])} [funcs] The functions to invoke.
	     * @returns {Function} Returns the new composite function.
	     * @see _.flowRight
	     * @example
	     *
	     * function square(n) {
	     *   return n * n;
	     * }
	     *
	     * var addSquare = _.flow([_.add, square]);
	     * addSquare(1, 2);
	     * // => 9
	     */
	    var flow = createFlow();
	
	    /**
	     * This method is like `_.flow` except that it creates a function that
	     * invokes the given functions from right to left.
	     *
	     * @static
	     * @since 3.0.0
	     * @memberOf _
	     * @category Util
	     * @param {...(Function|Function[])} [funcs] The functions to invoke.
	     * @returns {Function} Returns the new composite function.
	     * @see _.flow
	     * @example
	     *
	     * function square(n) {
	     *   return n * n;
	     * }
	     *
	     * var addSquare = _.flowRight([square, _.add]);
	     * addSquare(1, 2);
	     * // => 9
	     */
	    var flowRight = createFlow(true);
	
	    /**
	     * This method returns the first argument it receives.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Util
	     * @param {*} value Any value.
	     * @returns {*} Returns `value`.
	     * @example
	     *
	     * var object = { 'a': 1 };
	     *
	     * console.log(_.identity(object) === object);
	     * // => true
	     */
	    function identity(value) {
	      return value;
	    }
	
	    /**
	     * Creates a function that invokes `func` with the arguments of the created
	     * function. If `func` is a property name, the created function returns the
	     * property value for a given element. If `func` is an array or object, the
	     * created function returns `true` for elements that contain the equivalent
	     * source properties, otherwise it returns `false`.
	     *
	     * @static
	     * @since 4.0.0
	     * @memberOf _
	     * @category Util
	     * @param {*} [func=_.identity] The value to convert to a callback.
	     * @returns {Function} Returns the callback.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36, 'active': true },
	     *   { 'user': 'fred',   'age': 40, 'active': false }
	     * ];
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.filter(users, _.iteratee({ 'user': 'barney', 'active': true }));
	     * // => [{ 'user': 'barney', 'age': 36, 'active': true }]
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.filter(users, _.iteratee(['user', 'fred']));
	     * // => [{ 'user': 'fred', 'age': 40 }]
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.map(users, _.iteratee('user'));
	     * // => ['barney', 'fred']
	     *
	     * // Create custom iteratee shorthands.
	     * _.iteratee = _.wrap(_.iteratee, function(iteratee, func) {
	     *   return !_.isRegExp(func) ? iteratee(func) : function(string) {
	     *     return func.test(string);
	     *   };
	     * });
	     *
	     * _.filter(['abc', 'def'], /ef/);
	     * // => ['def']
	     */
	    function iteratee(func) {
	      return baseIteratee(typeof func == 'function' ? func : baseClone(func, CLONE_DEEP_FLAG));
	    }
	
	    /**
	     * Creates a function that performs a partial deep comparison between a given
	     * object and `source`, returning `true` if the given object has equivalent
	     * property values, else `false`.
	     *
	     * **Note:** The created function is equivalent to `_.isMatch` with `source`
	     * partially applied.
	     *
	     * Partial comparisons will match empty array and empty object `source`
	     * values against any array or object value, respectively. See `_.isEqual`
	     * for a list of supported value comparisons.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Util
	     * @param {Object} source The object of property values to match.
	     * @returns {Function} Returns the new spec function.
	     * @example
	     *
	     * var objects = [
	     *   { 'a': 1, 'b': 2, 'c': 3 },
	     *   { 'a': 4, 'b': 5, 'c': 6 }
	     * ];
	     *
	     * _.filter(objects, _.matches({ 'a': 4, 'c': 6 }));
	     * // => [{ 'a': 4, 'b': 5, 'c': 6 }]
	     */
	    function matches(source) {
	      return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
	    }
	
	    /**
	     * Creates a function that performs a partial deep comparison between the
	     * value at `path` of a given object to `srcValue`, returning `true` if the
	     * object value is equivalent, else `false`.
	     *
	     * **Note:** Partial comparisons will match empty array and empty object
	     * `srcValue` values against any array or object value, respectively. See
	     * `_.isEqual` for a list of supported value comparisons.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.2.0
	     * @category Util
	     * @param {Array|string} path The path of the property to get.
	     * @param {*} srcValue The value to match.
	     * @returns {Function} Returns the new spec function.
	     * @example
	     *
	     * var objects = [
	     *   { 'a': 1, 'b': 2, 'c': 3 },
	     *   { 'a': 4, 'b': 5, 'c': 6 }
	     * ];
	     *
	     * _.find(objects, _.matchesProperty('a', 4));
	     * // => { 'a': 4, 'b': 5, 'c': 6 }
	     */
	    function matchesProperty(path, srcValue) {
	      return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
	    }
	
	    /**
	     * Creates a function that invokes the method at `path` of a given object.
	     * Any additional arguments are provided to the invoked method.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.7.0
	     * @category Util
	     * @param {Array|string} path The path of the method to invoke.
	     * @param {...*} [args] The arguments to invoke the method with.
	     * @returns {Function} Returns the new invoker function.
	     * @example
	     *
	     * var objects = [
	     *   { 'a': { 'b': _.constant(2) } },
	     *   { 'a': { 'b': _.constant(1) } }
	     * ];
	     *
	     * _.map(objects, _.method('a.b'));
	     * // => [2, 1]
	     *
	     * _.map(objects, _.method(['a', 'b']));
	     * // => [2, 1]
	     */
	    var method = baseRest(function(path, args) {
	      return function(object) {
	        return baseInvoke(object, path, args);
	      };
	    });
	
	    /**
	     * The opposite of `_.method`; this method creates a function that invokes
	     * the method at a given path of `object`. Any additional arguments are
	     * provided to the invoked method.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.7.0
	     * @category Util
	     * @param {Object} object The object to query.
	     * @param {...*} [args] The arguments to invoke the method with.
	     * @returns {Function} Returns the new invoker function.
	     * @example
	     *
	     * var array = _.times(3, _.constant),
	     *     object = { 'a': array, 'b': array, 'c': array };
	     *
	     * _.map(['a[2]', 'c[0]'], _.methodOf(object));
	     * // => [2, 0]
	     *
	     * _.map([['a', '2'], ['c', '0']], _.methodOf(object));
	     * // => [2, 0]
	     */
	    var methodOf = baseRest(function(object, args) {
	      return function(path) {
	        return baseInvoke(object, path, args);
	      };
	    });
	
	    /**
	     * Adds all own enumerable string keyed function properties of a source
	     * object to the destination object. If `object` is a function, then methods
	     * are added to its prototype as well.
	     *
	     * **Note:** Use `_.runInContext` to create a pristine `lodash` function to
	     * avoid conflicts caused by modifying the original.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Util
	     * @param {Function|Object} [object=lodash] The destination object.
	     * @param {Object} source The object of functions to add.
	     * @param {Object} [options={}] The options object.
	     * @param {boolean} [options.chain=true] Specify whether mixins are chainable.
	     * @returns {Function|Object} Returns `object`.
	     * @example
	     *
	     * function vowels(string) {
	     *   return _.filter(string, function(v) {
	     *     return /[aeiou]/i.test(v);
	     *   });
	     * }
	     *
	     * _.mixin({ 'vowels': vowels });
	     * _.vowels('fred');
	     * // => ['e']
	     *
	     * _('fred').vowels().value();
	     * // => ['e']
	     *
	     * _.mixin({ 'vowels': vowels }, { 'chain': false });
	     * _('fred').vowels();
	     * // => ['e']
	     */
	    function mixin(object, source, options) {
	      var props = keys(source),
	          methodNames = baseFunctions(source, props);
	
	      if (options == null &&
	          !(isObject(source) && (methodNames.length || !props.length))) {
	        options = source;
	        source = object;
	        object = this;
	        methodNames = baseFunctions(source, keys(source));
	      }
	      var chain = !(isObject(options) && 'chain' in options) || !!options.chain,
	          isFunc = isFunction(object);
	
	      arrayEach(methodNames, function(methodName) {
	        var func = source[methodName];
	        object[methodName] = func;
	        if (isFunc) {
	          object.prototype[methodName] = function() {
	            var chainAll = this.__chain__;
	            if (chain || chainAll) {
	              var result = object(this.__wrapped__),
	                  actions = result.__actions__ = copyArray(this.__actions__);
	
	              actions.push({ 'func': func, 'args': arguments, 'thisArg': object });
	              result.__chain__ = chainAll;
	              return result;
	            }
	            return func.apply(object, arrayPush([this.value()], arguments));
	          };
	        }
	      });
	
	      return object;
	    }
	
	    /**
	     * Reverts the `_` variable to its previous value and returns a reference to
	     * the `lodash` function.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Util
	     * @returns {Function} Returns the `lodash` function.
	     * @example
	     *
	     * var lodash = _.noConflict();
	     */
	    function noConflict() {
	      if (root._ === this) {
	        root._ = oldDash;
	      }
	      return this;
	    }
	
	    /**
	     * This method returns `undefined`.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.3.0
	     * @category Util
	     * @example
	     *
	     * _.times(2, _.noop);
	     * // => [undefined, undefined]
	     */
	    function noop() {
	      // No operation performed.
	    }
	
	    /**
	     * Creates a function that gets the argument at index `n`. If `n` is negative,
	     * the nth argument from the end is returned.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Util
	     * @param {number} [n=0] The index of the argument to return.
	     * @returns {Function} Returns the new pass-thru function.
	     * @example
	     *
	     * var func = _.nthArg(1);
	     * func('a', 'b', 'c', 'd');
	     * // => 'b'
	     *
	     * var func = _.nthArg(-2);
	     * func('a', 'b', 'c', 'd');
	     * // => 'c'
	     */
	    function nthArg(n) {
	      n = toInteger(n);
	      return baseRest(function(args) {
	        return baseNth(args, n);
	      });
	    }
	
	    /**
	     * Creates a function that invokes `iteratees` with the arguments it receives
	     * and returns their results.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Util
	     * @param {...(Function|Function[])} [iteratees=[_.identity]]
	     *  The iteratees to invoke.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var func = _.over([Math.max, Math.min]);
	     *
	     * func(1, 2, 3, 4);
	     * // => [4, 1]
	     */
	    var over = createOver(arrayMap);
	
	    /**
	     * Creates a function that checks if **all** of the `predicates` return
	     * truthy when invoked with the arguments it receives.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Util
	     * @param {...(Function|Function[])} [predicates=[_.identity]]
	     *  The predicates to check.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var func = _.overEvery([Boolean, isFinite]);
	     *
	     * func('1');
	     * // => true
	     *
	     * func(null);
	     * // => false
	     *
	     * func(NaN);
	     * // => false
	     */
	    var overEvery = createOver(arrayEvery);
	
	    /**
	     * Creates a function that checks if **any** of the `predicates` return
	     * truthy when invoked with the arguments it receives.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Util
	     * @param {...(Function|Function[])} [predicates=[_.identity]]
	     *  The predicates to check.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var func = _.overSome([Boolean, isFinite]);
	     *
	     * func('1');
	     * // => true
	     *
	     * func(null);
	     * // => true
	     *
	     * func(NaN);
	     * // => false
	     */
	    var overSome = createOver(arraySome);
	
	    /**
	     * Creates a function that returns the value at `path` of a given object.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.4.0
	     * @category Util
	     * @param {Array|string} path The path of the property to get.
	     * @returns {Function} Returns the new accessor function.
	     * @example
	     *
	     * var objects = [
	     *   { 'a': { 'b': 2 } },
	     *   { 'a': { 'b': 1 } }
	     * ];
	     *
	     * _.map(objects, _.property('a.b'));
	     * // => [2, 1]
	     *
	     * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
	     * // => [1, 2]
	     */
	    function property(path) {
	      return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
	    }
	
	    /**
	     * The opposite of `_.property`; this method creates a function that returns
	     * the value at a given path of `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Util
	     * @param {Object} object The object to query.
	     * @returns {Function} Returns the new accessor function.
	     * @example
	     *
	     * var array = [0, 1, 2],
	     *     object = { 'a': array, 'b': array, 'c': array };
	     *
	     * _.map(['a[2]', 'c[0]'], _.propertyOf(object));
	     * // => [2, 0]
	     *
	     * _.map([['a', '2'], ['c', '0']], _.propertyOf(object));
	     * // => [2, 0]
	     */
	    function propertyOf(object) {
	      return function(path) {
	        return object == null ? undefined : baseGet(object, path);
	      };
	    }
	
	    /**
	     * Creates an array of numbers (positive and/or negative) progressing from
	     * `start` up to, but not including, `end`. A step of `-1` is used if a negative
	     * `start` is specified without an `end` or `step`. If `end` is not specified,
	     * it's set to `start` with `start` then set to `0`.
	     *
	     * **Note:** JavaScript follows the IEEE-754 standard for resolving
	     * floating-point values which can produce unexpected results.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Util
	     * @param {number} [start=0] The start of the range.
	     * @param {number} end The end of the range.
	     * @param {number} [step=1] The value to increment or decrement by.
	     * @returns {Array} Returns the range of numbers.
	     * @see _.inRange, _.rangeRight
	     * @example
	     *
	     * _.range(4);
	     * // => [0, 1, 2, 3]
	     *
	     * _.range(-4);
	     * // => [0, -1, -2, -3]
	     *
	     * _.range(1, 5);
	     * // => [1, 2, 3, 4]
	     *
	     * _.range(0, 20, 5);
	     * // => [0, 5, 10, 15]
	     *
	     * _.range(0, -4, -1);
	     * // => [0, -1, -2, -3]
	     *
	     * _.range(1, 4, 0);
	     * // => [1, 1, 1]
	     *
	     * _.range(0);
	     * // => []
	     */
	    var range = createRange();
	
	    /**
	     * This method is like `_.range` except that it populates values in
	     * descending order.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Util
	     * @param {number} [start=0] The start of the range.
	     * @param {number} end The end of the range.
	     * @param {number} [step=1] The value to increment or decrement by.
	     * @returns {Array} Returns the range of numbers.
	     * @see _.inRange, _.range
	     * @example
	     *
	     * _.rangeRight(4);
	     * // => [3, 2, 1, 0]
	     *
	     * _.rangeRight(-4);
	     * // => [-3, -2, -1, 0]
	     *
	     * _.rangeRight(1, 5);
	     * // => [4, 3, 2, 1]
	     *
	     * _.rangeRight(0, 20, 5);
	     * // => [15, 10, 5, 0]
	     *
	     * _.rangeRight(0, -4, -1);
	     * // => [-3, -2, -1, 0]
	     *
	     * _.rangeRight(1, 4, 0);
	     * // => [1, 1, 1]
	     *
	     * _.rangeRight(0);
	     * // => []
	     */
	    var rangeRight = createRange(true);
	
	    /**
	     * This method returns a new empty array.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.13.0
	     * @category Util
	     * @returns {Array} Returns the new empty array.
	     * @example
	     *
	     * var arrays = _.times(2, _.stubArray);
	     *
	     * console.log(arrays);
	     * // => [[], []]
	     *
	     * console.log(arrays[0] === arrays[1]);
	     * // => false
	     */
	    function stubArray() {
	      return [];
	    }
	
	    /**
	     * This method returns `false`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.13.0
	     * @category Util
	     * @returns {boolean} Returns `false`.
	     * @example
	     *
	     * _.times(2, _.stubFalse);
	     * // => [false, false]
	     */
	    function stubFalse() {
	      return false;
	    }
	
	    /**
	     * This method returns a new empty object.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.13.0
	     * @category Util
	     * @returns {Object} Returns the new empty object.
	     * @example
	     *
	     * var objects = _.times(2, _.stubObject);
	     *
	     * console.log(objects);
	     * // => [{}, {}]
	     *
	     * console.log(objects[0] === objects[1]);
	     * // => false
	     */
	    function stubObject() {
	      return {};
	    }
	
	    /**
	     * This method returns an empty string.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.13.0
	     * @category Util
	     * @returns {string} Returns the empty string.
	     * @example
	     *
	     * _.times(2, _.stubString);
	     * // => ['', '']
	     */
	    function stubString() {
	      return '';
	    }
	
	    /**
	     * This method returns `true`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.13.0
	     * @category Util
	     * @returns {boolean} Returns `true`.
	     * @example
	     *
	     * _.times(2, _.stubTrue);
	     * // => [true, true]
	     */
	    function stubTrue() {
	      return true;
	    }
	
	    /**
	     * Invokes the iteratee `n` times, returning an array of the results of
	     * each invocation. The iteratee is invoked with one argument; (index).
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Util
	     * @param {number} n The number of times to invoke `iteratee`.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Array} Returns the array of results.
	     * @example
	     *
	     * _.times(3, String);
	     * // => ['0', '1', '2']
	     *
	     *  _.times(4, _.constant(0));
	     * // => [0, 0, 0, 0]
	     */
	    function times(n, iteratee) {
	      n = toInteger(n);
	      if (n < 1 || n > MAX_SAFE_INTEGER) {
	        return [];
	      }
	      var index = MAX_ARRAY_LENGTH,
	          length = nativeMin(n, MAX_ARRAY_LENGTH);
	
	      iteratee = getIteratee(iteratee);
	      n -= MAX_ARRAY_LENGTH;
	
	      var result = baseTimes(length, iteratee);
	      while (++index < n) {
	        iteratee(index);
	      }
	      return result;
	    }
	
	    /**
	     * Converts `value` to a property path array.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Util
	     * @param {*} value The value to convert.
	     * @returns {Array} Returns the new property path array.
	     * @example
	     *
	     * _.toPath('a.b.c');
	     * // => ['a', 'b', 'c']
	     *
	     * _.toPath('a[0].b.c');
	     * // => ['a', '0', 'b', 'c']
	     */
	    function toPath(value) {
	      if (isArray(value)) {
	        return arrayMap(value, toKey);
	      }
	      return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
	    }
	
	    /**
	     * Generates a unique ID. If `prefix` is given, the ID is appended to it.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Util
	     * @param {string} [prefix=''] The value to prefix the ID with.
	     * @returns {string} Returns the unique ID.
	     * @example
	     *
	     * _.uniqueId('contact_');
	     * // => 'contact_104'
	     *
	     * _.uniqueId();
	     * // => '105'
	     */
	    function uniqueId(prefix) {
	      var id = ++idCounter;
	      return toString(prefix) + id;
	    }
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * Adds two numbers.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.4.0
	     * @category Math
	     * @param {number} augend The first number in an addition.
	     * @param {number} addend The second number in an addition.
	     * @returns {number} Returns the total.
	     * @example
	     *
	     * _.add(6, 4);
	     * // => 10
	     */
	    var add = createMathOperation(function(augend, addend) {
	      return augend + addend;
	    }, 0);
	
	    /**
	     * Computes `number` rounded up to `precision`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.10.0
	     * @category Math
	     * @param {number} number The number to round up.
	     * @param {number} [precision=0] The precision to round up to.
	     * @returns {number} Returns the rounded up number.
	     * @example
	     *
	     * _.ceil(4.006);
	     * // => 5
	     *
	     * _.ceil(6.004, 2);
	     * // => 6.01
	     *
	     * _.ceil(6040, -2);
	     * // => 6100
	     */
	    var ceil = createRound('ceil');
	
	    /**
	     * Divide two numbers.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.7.0
	     * @category Math
	     * @param {number} dividend The first number in a division.
	     * @param {number} divisor The second number in a division.
	     * @returns {number} Returns the quotient.
	     * @example
	     *
	     * _.divide(6, 4);
	     * // => 1.5
	     */
	    var divide = createMathOperation(function(dividend, divisor) {
	      return dividend / divisor;
	    }, 1);
	
	    /**
	     * Computes `number` rounded down to `precision`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.10.0
	     * @category Math
	     * @param {number} number The number to round down.
	     * @param {number} [precision=0] The precision to round down to.
	     * @returns {number} Returns the rounded down number.
	     * @example
	     *
	     * _.floor(4.006);
	     * // => 4
	     *
	     * _.floor(0.046, 2);
	     * // => 0.04
	     *
	     * _.floor(4060, -2);
	     * // => 4000
	     */
	    var floor = createRound('floor');
	
	    /**
	     * Computes the maximum value of `array`. If `array` is empty or falsey,
	     * `undefined` is returned.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Math
	     * @param {Array} array The array to iterate over.
	     * @returns {*} Returns the maximum value.
	     * @example
	     *
	     * _.max([4, 2, 8, 6]);
	     * // => 8
	     *
	     * _.max([]);
	     * // => undefined
	     */
	    function max(array) {
	      return (array && array.length)
	        ? baseExtremum(array, identity, baseGt)
	        : undefined;
	    }
	
	    /**
	     * This method is like `_.max` except that it accepts `iteratee` which is
	     * invoked for each element in `array` to generate the criterion by which
	     * the value is ranked. The iteratee is invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Math
	     * @param {Array} array The array to iterate over.
	     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
	     * @returns {*} Returns the maximum value.
	     * @example
	     *
	     * var objects = [{ 'n': 1 }, { 'n': 2 }];
	     *
	     * _.maxBy(objects, function(o) { return o.n; });
	     * // => { 'n': 2 }
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.maxBy(objects, 'n');
	     * // => { 'n': 2 }
	     */
	    function maxBy(array, iteratee) {
	      return (array && array.length)
	        ? baseExtremum(array, getIteratee(iteratee, 2), baseGt)
	        : undefined;
	    }
	
	    /**
	     * Computes the mean of the values in `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Math
	     * @param {Array} array The array to iterate over.
	     * @returns {number} Returns the mean.
	     * @example
	     *
	     * _.mean([4, 2, 8, 6]);
	     * // => 5
	     */
	    function mean(array) {
	      return baseMean(array, identity);
	    }
	
	    /**
	     * This method is like `_.mean` except that it accepts `iteratee` which is
	     * invoked for each element in `array` to generate the value to be averaged.
	     * The iteratee is invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.7.0
	     * @category Math
	     * @param {Array} array The array to iterate over.
	     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
	     * @returns {number} Returns the mean.
	     * @example
	     *
	     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
	     *
	     * _.meanBy(objects, function(o) { return o.n; });
	     * // => 5
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.meanBy(objects, 'n');
	     * // => 5
	     */
	    function meanBy(array, iteratee) {
	      return baseMean(array, getIteratee(iteratee, 2));
	    }
	
	    /**
	     * Computes the minimum value of `array`. If `array` is empty or falsey,
	     * `undefined` is returned.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Math
	     * @param {Array} array The array to iterate over.
	     * @returns {*} Returns the minimum value.
	     * @example
	     *
	     * _.min([4, 2, 8, 6]);
	     * // => 2
	     *
	     * _.min([]);
	     * // => undefined
	     */
	    function min(array) {
	      return (array && array.length)
	        ? baseExtremum(array, identity, baseLt)
	        : undefined;
	    }
	
	    /**
	     * This method is like `_.min` except that it accepts `iteratee` which is
	     * invoked for each element in `array` to generate the criterion by which
	     * the value is ranked. The iteratee is invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Math
	     * @param {Array} array The array to iterate over.
	     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
	     * @returns {*} Returns the minimum value.
	     * @example
	     *
	     * var objects = [{ 'n': 1 }, { 'n': 2 }];
	     *
	     * _.minBy(objects, function(o) { return o.n; });
	     * // => { 'n': 1 }
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.minBy(objects, 'n');
	     * // => { 'n': 1 }
	     */
	    function minBy(array, iteratee) {
	      return (array && array.length)
	        ? baseExtremum(array, getIteratee(iteratee, 2), baseLt)
	        : undefined;
	    }
	
	    /**
	     * Multiply two numbers.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.7.0
	     * @category Math
	     * @param {number} multiplier The first number in a multiplication.
	     * @param {number} multiplicand The second number in a multiplication.
	     * @returns {number} Returns the product.
	     * @example
	     *
	     * _.multiply(6, 4);
	     * // => 24
	     */
	    var multiply = createMathOperation(function(multiplier, multiplicand) {
	      return multiplier * multiplicand;
	    }, 1);
	
	    /**
	     * Computes `number` rounded to `precision`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.10.0
	     * @category Math
	     * @param {number} number The number to round.
	     * @param {number} [precision=0] The precision to round to.
	     * @returns {number} Returns the rounded number.
	     * @example
	     *
	     * _.round(4.006);
	     * // => 4
	     *
	     * _.round(4.006, 2);
	     * // => 4.01
	     *
	     * _.round(4060, -2);
	     * // => 4100
	     */
	    var round = createRound('round');
	
	    /**
	     * Subtract two numbers.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Math
	     * @param {number} minuend The first number in a subtraction.
	     * @param {number} subtrahend The second number in a subtraction.
	     * @returns {number} Returns the difference.
	     * @example
	     *
	     * _.subtract(6, 4);
	     * // => 2
	     */
	    var subtract = createMathOperation(function(minuend, subtrahend) {
	      return minuend - subtrahend;
	    }, 0);
	
	    /**
	     * Computes the sum of the values in `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.4.0
	     * @category Math
	     * @param {Array} array The array to iterate over.
	     * @returns {number} Returns the sum.
	     * @example
	     *
	     * _.sum([4, 2, 8, 6]);
	     * // => 20
	     */
	    function sum(array) {
	      return (array && array.length)
	        ? baseSum(array, identity)
	        : 0;
	    }
	
	    /**
	     * This method is like `_.sum` except that it accepts `iteratee` which is
	     * invoked for each element in `array` to generate the value to be summed.
	     * The iteratee is invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Math
	     * @param {Array} array The array to iterate over.
	     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
	     * @returns {number} Returns the sum.
	     * @example
	     *
	     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
	     *
	     * _.sumBy(objects, function(o) { return o.n; });
	     * // => 20
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.sumBy(objects, 'n');
	     * // => 20
	     */
	    function sumBy(array, iteratee) {
	      return (array && array.length)
	        ? baseSum(array, getIteratee(iteratee, 2))
	        : 0;
	    }
	
	    /*------------------------------------------------------------------------*/
	
	    // Add methods that return wrapped values in chain sequences.
	    lodash.after = after;
	    lodash.ary = ary;
	    lodash.assign = assign;
	    lodash.assignIn = assignIn;
	    lodash.assignInWith = assignInWith;
	    lodash.assignWith = assignWith;
	    lodash.at = at;
	    lodash.before = before;
	    lodash.bind = bind;
	    lodash.bindAll = bindAll;
	    lodash.bindKey = bindKey;
	    lodash.castArray = castArray;
	    lodash.chain = chain;
	    lodash.chunk = chunk;
	    lodash.compact = compact;
	    lodash.concat = concat;
	    lodash.cond = cond;
	    lodash.conforms = conforms;
	    lodash.constant = constant;
	    lodash.countBy = countBy;
	    lodash.create = create;
	    lodash.curry = curry;
	    lodash.curryRight = curryRight;
	    lodash.debounce = debounce;
	    lodash.defaults = defaults;
	    lodash.defaultsDeep = defaultsDeep;
	    lodash.defer = defer;
	    lodash.delay = delay;
	    lodash.difference = difference;
	    lodash.differenceBy = differenceBy;
	    lodash.differenceWith = differenceWith;
	    lodash.drop = drop;
	    lodash.dropRight = dropRight;
	    lodash.dropRightWhile = dropRightWhile;
	    lodash.dropWhile = dropWhile;
	    lodash.fill = fill;
	    lodash.filter = filter;
	    lodash.flatMap = flatMap;
	    lodash.flatMapDeep = flatMapDeep;
	    lodash.flatMapDepth = flatMapDepth;
	    lodash.flatten = flatten;
	    lodash.flattenDeep = flattenDeep;
	    lodash.flattenDepth = flattenDepth;
	    lodash.flip = flip;
	    lodash.flow = flow;
	    lodash.flowRight = flowRight;
	    lodash.fromPairs = fromPairs;
	    lodash.functions = functions;
	    lodash.functionsIn = functionsIn;
	    lodash.groupBy = groupBy;
	    lodash.initial = initial;
	    lodash.intersection = intersection;
	    lodash.intersectionBy = intersectionBy;
	    lodash.intersectionWith = intersectionWith;
	    lodash.invert = invert;
	    lodash.invertBy = invertBy;
	    lodash.invokeMap = invokeMap;
	    lodash.iteratee = iteratee;
	    lodash.keyBy = keyBy;
	    lodash.keys = keys;
	    lodash.keysIn = keysIn;
	    lodash.map = map;
	    lodash.mapKeys = mapKeys;
	    lodash.mapValues = mapValues;
	    lodash.matches = matches;
	    lodash.matchesProperty = matchesProperty;
	    lodash.memoize = memoize;
	    lodash.merge = merge;
	    lodash.mergeWith = mergeWith;
	    lodash.method = method;
	    lodash.methodOf = methodOf;
	    lodash.mixin = mixin;
	    lodash.negate = negate;
	    lodash.nthArg = nthArg;
	    lodash.omit = omit;
	    lodash.omitBy = omitBy;
	    lodash.once = once;
	    lodash.orderBy = orderBy;
	    lodash.over = over;
	    lodash.overArgs = overArgs;
	    lodash.overEvery = overEvery;
	    lodash.overSome = overSome;
	    lodash.partial = partial;
	    lodash.partialRight = partialRight;
	    lodash.partition = partition;
	    lodash.pick = pick;
	    lodash.pickBy = pickBy;
	    lodash.property = property;
	    lodash.propertyOf = propertyOf;
	    lodash.pull = pull;
	    lodash.pullAll = pullAll;
	    lodash.pullAllBy = pullAllBy;
	    lodash.pullAllWith = pullAllWith;
	    lodash.pullAt = pullAt;
	    lodash.range = range;
	    lodash.rangeRight = rangeRight;
	    lodash.rearg = rearg;
	    lodash.reject = reject;
	    lodash.remove = remove;
	    lodash.rest = rest;
	    lodash.reverse = reverse;
	    lodash.sampleSize = sampleSize;
	    lodash.set = set;
	    lodash.setWith = setWith;
	    lodash.shuffle = shuffle;
	    lodash.slice = slice;
	    lodash.sortBy = sortBy;
	    lodash.sortedUniq = sortedUniq;
	    lodash.sortedUniqBy = sortedUniqBy;
	    lodash.split = split;
	    lodash.spread = spread;
	    lodash.tail = tail;
	    lodash.take = take;
	    lodash.takeRight = takeRight;
	    lodash.takeRightWhile = takeRightWhile;
	    lodash.takeWhile = takeWhile;
	    lodash.tap = tap;
	    lodash.throttle = throttle;
	    lodash.thru = thru;
	    lodash.toArray = toArray;
	    lodash.toPairs = toPairs;
	    lodash.toPairsIn = toPairsIn;
	    lodash.toPath = toPath;
	    lodash.toPlainObject = toPlainObject;
	    lodash.transform = transform;
	    lodash.unary = unary;
	    lodash.union = union;
	    lodash.unionBy = unionBy;
	    lodash.unionWith = unionWith;
	    lodash.uniq = uniq;
	    lodash.uniqBy = uniqBy;
	    lodash.uniqWith = uniqWith;
	    lodash.unset = unset;
	    lodash.unzip = unzip;
	    lodash.unzipWith = unzipWith;
	    lodash.update = update;
	    lodash.updateWith = updateWith;
	    lodash.values = values;
	    lodash.valuesIn = valuesIn;
	    lodash.without = without;
	    lodash.words = words;
	    lodash.wrap = wrap;
	    lodash.xor = xor;
	    lodash.xorBy = xorBy;
	    lodash.xorWith = xorWith;
	    lodash.zip = zip;
	    lodash.zipObject = zipObject;
	    lodash.zipObjectDeep = zipObjectDeep;
	    lodash.zipWith = zipWith;
	
	    // Add aliases.
	    lodash.entries = toPairs;
	    lodash.entriesIn = toPairsIn;
	    lodash.extend = assignIn;
	    lodash.extendWith = assignInWith;
	
	    // Add methods to `lodash.prototype`.
	    mixin(lodash, lodash);
	
	    /*------------------------------------------------------------------------*/
	
	    // Add methods that return unwrapped values in chain sequences.
	    lodash.add = add;
	    lodash.attempt = attempt;
	    lodash.camelCase = camelCase;
	    lodash.capitalize = capitalize;
	    lodash.ceil = ceil;
	    lodash.clamp = clamp;
	    lodash.clone = clone;
	    lodash.cloneDeep = cloneDeep;
	    lodash.cloneDeepWith = cloneDeepWith;
	    lodash.cloneWith = cloneWith;
	    lodash.conformsTo = conformsTo;
	    lodash.deburr = deburr;
	    lodash.defaultTo = defaultTo;
	    lodash.divide = divide;
	    lodash.endsWith = endsWith;
	    lodash.eq = eq;
	    lodash.escape = escape;
	    lodash.escapeRegExp = escapeRegExp;
	    lodash.every = every;
	    lodash.find = find;
	    lodash.findIndex = findIndex;
	    lodash.findKey = findKey;
	    lodash.findLast = findLast;
	    lodash.findLastIndex = findLastIndex;
	    lodash.findLastKey = findLastKey;
	    lodash.floor = floor;
	    lodash.forEach = forEach;
	    lodash.forEachRight = forEachRight;
	    lodash.forIn = forIn;
	    lodash.forInRight = forInRight;
	    lodash.forOwn = forOwn;
	    lodash.forOwnRight = forOwnRight;
	    lodash.get = get;
	    lodash.gt = gt;
	    lodash.gte = gte;
	    lodash.has = has;
	    lodash.hasIn = hasIn;
	    lodash.head = head;
	    lodash.identity = identity;
	    lodash.includes = includes;
	    lodash.indexOf = indexOf;
	    lodash.inRange = inRange;
	    lodash.invoke = invoke;
	    lodash.isArguments = isArguments;
	    lodash.isArray = isArray;
	    lodash.isArrayBuffer = isArrayBuffer;
	    lodash.isArrayLike = isArrayLike;
	    lodash.isArrayLikeObject = isArrayLikeObject;
	    lodash.isBoolean = isBoolean;
	    lodash.isBuffer = isBuffer;
	    lodash.isDate = isDate;
	    lodash.isElement = isElement;
	    lodash.isEmpty = isEmpty;
	    lodash.isEqual = isEqual;
	    lodash.isEqualWith = isEqualWith;
	    lodash.isError = isError;
	    lodash.isFinite = isFinite;
	    lodash.isFunction = isFunction;
	    lodash.isInteger = isInteger;
	    lodash.isLength = isLength;
	    lodash.isMap = isMap;
	    lodash.isMatch = isMatch;
	    lodash.isMatchWith = isMatchWith;
	    lodash.isNaN = isNaN;
	    lodash.isNative = isNative;
	    lodash.isNil = isNil;
	    lodash.isNull = isNull;
	    lodash.isNumber = isNumber;
	    lodash.isObject = isObject;
	    lodash.isObjectLike = isObjectLike;
	    lodash.isPlainObject = isPlainObject;
	    lodash.isRegExp = isRegExp;
	    lodash.isSafeInteger = isSafeInteger;
	    lodash.isSet = isSet;
	    lodash.isString = isString;
	    lodash.isSymbol = isSymbol;
	    lodash.isTypedArray = isTypedArray;
	    lodash.isUndefined = isUndefined;
	    lodash.isWeakMap = isWeakMap;
	    lodash.isWeakSet = isWeakSet;
	    lodash.join = join;
	    lodash.kebabCase = kebabCase;
	    lodash.last = last;
	    lodash.lastIndexOf = lastIndexOf;
	    lodash.lowerCase = lowerCase;
	    lodash.lowerFirst = lowerFirst;
	    lodash.lt = lt;
	    lodash.lte = lte;
	    lodash.max = max;
	    lodash.maxBy = maxBy;
	    lodash.mean = mean;
	    lodash.meanBy = meanBy;
	    lodash.min = min;
	    lodash.minBy = minBy;
	    lodash.stubArray = stubArray;
	    lodash.stubFalse = stubFalse;
	    lodash.stubObject = stubObject;
	    lodash.stubString = stubString;
	    lodash.stubTrue = stubTrue;
	    lodash.multiply = multiply;
	    lodash.nth = nth;
	    lodash.noConflict = noConflict;
	    lodash.noop = noop;
	    lodash.now = now;
	    lodash.pad = pad;
	    lodash.padEnd = padEnd;
	    lodash.padStart = padStart;
	    lodash.parseInt = parseInt;
	    lodash.random = random;
	    lodash.reduce = reduce;
	    lodash.reduceRight = reduceRight;
	    lodash.repeat = repeat;
	    lodash.replace = replace;
	    lodash.result = result;
	    lodash.round = round;
	    lodash.runInContext = runInContext;
	    lodash.sample = sample;
	    lodash.size = size;
	    lodash.snakeCase = snakeCase;
	    lodash.some = some;
	    lodash.sortedIndex = sortedIndex;
	    lodash.sortedIndexBy = sortedIndexBy;
	    lodash.sortedIndexOf = sortedIndexOf;
	    lodash.sortedLastIndex = sortedLastIndex;
	    lodash.sortedLastIndexBy = sortedLastIndexBy;
	    lodash.sortedLastIndexOf = sortedLastIndexOf;
	    lodash.startCase = startCase;
	    lodash.startsWith = startsWith;
	    lodash.subtract = subtract;
	    lodash.sum = sum;
	    lodash.sumBy = sumBy;
	    lodash.template = template;
	    lodash.times = times;
	    lodash.toFinite = toFinite;
	    lodash.toInteger = toInteger;
	    lodash.toLength = toLength;
	    lodash.toLower = toLower;
	    lodash.toNumber = toNumber;
	    lodash.toSafeInteger = toSafeInteger;
	    lodash.toString = toString;
	    lodash.toUpper = toUpper;
	    lodash.trim = trim;
	    lodash.trimEnd = trimEnd;
	    lodash.trimStart = trimStart;
	    lodash.truncate = truncate;
	    lodash.unescape = unescape;
	    lodash.uniqueId = uniqueId;
	    lodash.upperCase = upperCase;
	    lodash.upperFirst = upperFirst;
	
	    // Add aliases.
	    lodash.each = forEach;
	    lodash.eachRight = forEachRight;
	    lodash.first = head;
	
	    mixin(lodash, (function() {
	      var source = {};
	      baseForOwn(lodash, function(func, methodName) {
	        if (!hasOwnProperty.call(lodash.prototype, methodName)) {
	          source[methodName] = func;
	        }
	      });
	      return source;
	    }()), { 'chain': false });
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * The semantic version number.
	     *
	     * @static
	     * @memberOf _
	     * @type {string}
	     */
	    lodash.VERSION = VERSION;
	
	    // Assign default placeholders.
	    arrayEach(['bind', 'bindKey', 'curry', 'curryRight', 'partial', 'partialRight'], function(methodName) {
	      lodash[methodName].placeholder = lodash;
	    });
	
	    // Add `LazyWrapper` methods for `_.drop` and `_.take` variants.
	    arrayEach(['drop', 'take'], function(methodName, index) {
	      LazyWrapper.prototype[methodName] = function(n) {
	        n = n === undefined ? 1 : nativeMax(toInteger(n), 0);
	
	        var result = (this.__filtered__ && !index)
	          ? new LazyWrapper(this)
	          : this.clone();
	
	        if (result.__filtered__) {
	          result.__takeCount__ = nativeMin(n, result.__takeCount__);
	        } else {
	          result.__views__.push({
	            'size': nativeMin(n, MAX_ARRAY_LENGTH),
	            'type': methodName + (result.__dir__ < 0 ? 'Right' : '')
	          });
	        }
	        return result;
	      };
	
	      LazyWrapper.prototype[methodName + 'Right'] = function(n) {
	        return this.reverse()[methodName](n).reverse();
	      };
	    });
	
	    // Add `LazyWrapper` methods that accept an `iteratee` value.
	    arrayEach(['filter', 'map', 'takeWhile'], function(methodName, index) {
	      var type = index + 1,
	          isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;
	
	      LazyWrapper.prototype[methodName] = function(iteratee) {
	        var result = this.clone();
	        result.__iteratees__.push({
	          'iteratee': getIteratee(iteratee, 3),
	          'type': type
	        });
	        result.__filtered__ = result.__filtered__ || isFilter;
	        return result;
	      };
	    });
	
	    // Add `LazyWrapper` methods for `_.head` and `_.last`.
	    arrayEach(['head', 'last'], function(methodName, index) {
	      var takeName = 'take' + (index ? 'Right' : '');
	
	      LazyWrapper.prototype[methodName] = function() {
	        return this[takeName](1).value()[0];
	      };
	    });
	
	    // Add `LazyWrapper` methods for `_.initial` and `_.tail`.
	    arrayEach(['initial', 'tail'], function(methodName, index) {
	      var dropName = 'drop' + (index ? '' : 'Right');
	
	      LazyWrapper.prototype[methodName] = function() {
	        return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
	      };
	    });
	
	    LazyWrapper.prototype.compact = function() {
	      return this.filter(identity);
	    };
	
	    LazyWrapper.prototype.find = function(predicate) {
	      return this.filter(predicate).head();
	    };
	
	    LazyWrapper.prototype.findLast = function(predicate) {
	      return this.reverse().find(predicate);
	    };
	
	    LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
	      if (typeof path == 'function') {
	        return new LazyWrapper(this);
	      }
	      return this.map(function(value) {
	        return baseInvoke(value, path, args);
	      });
	    });
	
	    LazyWrapper.prototype.reject = function(predicate) {
	      return this.filter(negate(getIteratee(predicate)));
	    };
	
	    LazyWrapper.prototype.slice = function(start, end) {
	      start = toInteger(start);
	
	      var result = this;
	      if (result.__filtered__ && (start > 0 || end < 0)) {
	        return new LazyWrapper(result);
	      }
	      if (start < 0) {
	        result = result.takeRight(-start);
	      } else if (start) {
	        result = result.drop(start);
	      }
	      if (end !== undefined) {
	        end = toInteger(end);
	        result = end < 0 ? result.dropRight(-end) : result.take(end - start);
	      }
	      return result;
	    };
	
	    LazyWrapper.prototype.takeRightWhile = function(predicate) {
	      return this.reverse().takeWhile(predicate).reverse();
	    };
	
	    LazyWrapper.prototype.toArray = function() {
	      return this.take(MAX_ARRAY_LENGTH);
	    };
	
	    // Add `LazyWrapper` methods to `lodash.prototype`.
	    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
	      var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName),
	          isTaker = /^(?:head|last)$/.test(methodName),
	          lodashFunc = lodash[isTaker ? ('take' + (methodName == 'last' ? 'Right' : '')) : methodName],
	          retUnwrapped = isTaker || /^find/.test(methodName);
	
	      if (!lodashFunc) {
	        return;
	      }
	      lodash.prototype[methodName] = function() {
	        var value = this.__wrapped__,
	            args = isTaker ? [1] : arguments,
	            isLazy = value instanceof LazyWrapper,
	            iteratee = args[0],
	            useLazy = isLazy || isArray(value);
	
	        var interceptor = function(value) {
	          var result = lodashFunc.apply(lodash, arrayPush([value], args));
	          return (isTaker && chainAll) ? result[0] : result;
	        };
	
	        if (useLazy && checkIteratee && typeof iteratee == 'function' && iteratee.length != 1) {
	          // Avoid lazy use if the iteratee has a "length" value other than `1`.
	          isLazy = useLazy = false;
	        }
	        var chainAll = this.__chain__,
	            isHybrid = !!this.__actions__.length,
	            isUnwrapped = retUnwrapped && !chainAll,
	            onlyLazy = isLazy && !isHybrid;
	
	        if (!retUnwrapped && useLazy) {
	          value = onlyLazy ? value : new LazyWrapper(this);
	          var result = func.apply(value, args);
	          result.__actions__.push({ 'func': thru, 'args': [interceptor], 'thisArg': undefined });
	          return new LodashWrapper(result, chainAll);
	        }
	        if (isUnwrapped && onlyLazy) {
	          return func.apply(this, args);
	        }
	        result = this.thru(interceptor);
	        return isUnwrapped ? (isTaker ? result.value()[0] : result.value()) : result;
	      };
	    });
	
	    // Add `Array` methods to `lodash.prototype`.
	    arrayEach(['pop', 'push', 'shift', 'sort', 'splice', 'unshift'], function(methodName) {
	      var func = arrayProto[methodName],
	          chainName = /^(?:push|sort|unshift)$/.test(methodName) ? 'tap' : 'thru',
	          retUnwrapped = /^(?:pop|shift)$/.test(methodName);
	
	      lodash.prototype[methodName] = function() {
	        var args = arguments;
	        if (retUnwrapped && !this.__chain__) {
	          var value = this.value();
	          return func.apply(isArray(value) ? value : [], args);
	        }
	        return this[chainName](function(value) {
	          return func.apply(isArray(value) ? value : [], args);
	        });
	      };
	    });
	
	    // Map minified method names to their real names.
	    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
	      var lodashFunc = lodash[methodName];
	      if (lodashFunc) {
	        var key = (lodashFunc.name + ''),
	            names = realNames[key] || (realNames[key] = []);
	
	        names.push({ 'name': methodName, 'func': lodashFunc });
	      }
	    });
	
	    realNames[createHybrid(undefined, WRAP_BIND_KEY_FLAG).name] = [{
	      'name': 'wrapper',
	      'func': undefined
	    }];
	
	    // Add methods to `LazyWrapper`.
	    LazyWrapper.prototype.clone = lazyClone;
	    LazyWrapper.prototype.reverse = lazyReverse;
	    LazyWrapper.prototype.value = lazyValue;
	
	    // Add chain sequence methods to the `lodash` wrapper.
	    lodash.prototype.at = wrapperAt;
	    lodash.prototype.chain = wrapperChain;
	    lodash.prototype.commit = wrapperCommit;
	    lodash.prototype.next = wrapperNext;
	    lodash.prototype.plant = wrapperPlant;
	    lodash.prototype.reverse = wrapperReverse;
	    lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;
	
	    // Add lazy aliases.
	    lodash.prototype.first = lodash.prototype.head;
	
	    if (symIterator) {
	      lodash.prototype[symIterator] = wrapperToIterator;
	    }
	    return lodash;
	  });
	
	  /*--------------------------------------------------------------------------*/
	
	  // Export lodash.
	  var _ = runInContext();
	
	  // Some AMD build optimizers, like r.js, check for condition patterns like:
	  if (true) {
	    // Expose Lodash on the global object to prevent errors when Lodash is
	    // loaded by a script tag in the presence of an AMD loader.
	    // See http://requirejs.org/docs/errors.html#mismatch for more details.
	    // Use `_.noConflict` to remove Lodash from the global object.
	    root._ = _;
	
	    // Define as an anonymous module so, through path mapping, it can be
	    // referenced as the "underscore" module.
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return _;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }
	  // Check for `exports` after `define` in case a build optimizer adds it.
	  else if (freeModule) {
	    // Export for Node.js.
	    (freeModule.exports = _)._ = _;
	    // Export for CommonJS support.
	    freeExports._ = _;
	  }
	  else {
	    // Export to the global object.
	    root._ = _;
	  }
	}.call(this));
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(20)(module), __webpack_require__(10)))

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = {
	  version: '0.1.0',
	  build: new Date()
	};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Element2 = __webpack_require__(1);
	
	var _Element3 = _interopRequireDefault(_Element2);
	
	var _LabelElement = __webpack_require__(4);
	
	var _LabelElement2 = _interopRequireDefault(_LabelElement);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * constructs a BoxElement instance
	 * @class BoxElement
	 * @classdesc Box Element class, useful to create boxes with a title options (LabelElement)
	 * @extends Element
	 * @param {Object} options the options object to be merged with defaults
	 * @type {BoxElement}
	 * @public
	 */
	var BoxElement = function (_Element) {
	  _inherits(BoxElement, _Element);
	
	  function BoxElement() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    _classCallCheck(this, BoxElement);
	
	    return _possibleConstructorReturn(this, (BoxElement.__proto__ || Object.getPrototypeOf(BoxElement)).call(this, options));
	  }
	
	  /**
	   * Initialize default settings for Box Element
	   * @memberOf BoxElement
	   * @method initDefaults
	   * @instance
	   * @override
	   */
	
	
	  _createClass(BoxElement, [{
	    key: 'initDefaults',
	    value: function initDefaults() {
	      _get(BoxElement.prototype.__proto__ || Object.getPrototypeOf(BoxElement.prototype), 'initDefaults', this).call(this, {
	        title: { // options for a LabelElement
	          text: 'Text Element',
	          font: '50px Arial',
	          color: '#000',
	          padding: 10,
	          lineHeight: 50,
	          maxWidth: false,
	          shadow: false,
	          outline: false,
	          stroke: false,
	          align: 'center top'
	        },
	        content: { // options for a Element
	          fill: 'transparent',
	          align: 'center bottom'
	        }
	      });
	    }
	
	    /**
	     * drawElements method implementation
	     * @memberOf BoxElement
	     * @method drawElements
	     * @instance
	     * @inheritdoc
	     * @override
	     */
	
	  }, {
	    key: 'drawElements',
	    value: function drawElements() {
	      if (!!this.settings.title) {
	        this.titleElement = new _LabelElement2.default(this.settings.title.inherit({
	          parent: this,
	          minWidth: this.settings.size.width
	        }));
	      }
	
	      this.contentElement = new _Element3.default(this.settings.content.inherit({
	        parent: this,
	        size: {
	          width: this.settings.size.width,
	          height: this.settings.size.height - (!!this.settings.title ? this.titleElement.getComputedBounds().height : 0)
	        }
	      }));
	    }
	
	    /**
	     * gets the title LabelElement instance
	     * @memberOf BoxElement
	     * @method getTitleElement
	     * @instance
	     * @return {LabelElement} the instance used to draw the title
	     */
	
	  }, {
	    key: 'getTitleElement',
	    value: function getTitleElement() {
	      return this.titleElement;
	    }
	
	    /**
	     * gets the content Element instance
	     * @memberOf BoxElement
	     * @method getContentElement
	     * @instance
	     * @return {Element} the instance used to draw the content element
	     */
	
	  }, {
	    key: 'getContentElement',
	    value: function getContentElement() {
	      return this.contentElement;
	    }
	  }]);
	
	  return BoxElement;
	}(_Element3.default);
	
	exports.default = BoxElement;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Element2 = __webpack_require__(1);
	
	var _Element3 = _interopRequireDefault(_Element2);
	
	var _ListItemElement = __webpack_require__(7);
	
	var _ListItemElement2 = _interopRequireDefault(_ListItemElement);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * constructs a ListElement instance
	 * @class ListElement
	 * @classdesc the ListElement class allows to create a list of any type of elements
	 * @extend Element
	 * @public
	 * @param {Object} options the options to be merged with defaults settings
	 * @type {ListElement}
	 */
	var ListElement = function (_Element) {
	  _inherits(ListElement, _Element);
	
	  function ListElement() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    _classCallCheck(this, ListElement);
	
	    return _possibleConstructorReturn(this, (ListElement.__proto__ || Object.getPrototypeOf(ListElement)).call(this, options));
	  }
	
	  /**
	   * Initialize default settings for List Element
	   * @memberOf ListElement
	   * @method initDefaults
	   * @instance
	   * @override
	   */
	
	
	  _createClass(ListElement, [{
	    key: 'initDefaults',
	    value: function initDefaults() {
	      _get(ListElement.prototype.__proto__ || Object.getPrototypeOf(ListElement.prototype), 'initDefaults', this).call(this, {
	        items: [],
	        item: { // options for a ListItemElement to use as default listItem options
	          minWidth: '100%',
	          color: '#fff'
	        },
	        itemEvents: { // event handlers to use as default listItem event handlers
	          click: function click() {}
	        },
	        indicator: false, // options for an ImageElement to use as default listItem indicator
	        stroke: {
	          size: 0,
	          radius: 0,
	          color: 'transparent'
	        }
	      });
	    }
	
	    /**
	     * initializes data object for the ListElement instance
	     * @memberOf ListElement
	     * @method initData
	     * @instance
	     * @override
	     */
	
	  }, {
	    key: 'initData',
	    value: function initData() {
	      this.items = [];
	    }
	
	    /**
	     * compute bounds before drawing all graphic elements of ListElement instance
	     * @memberOf ListElement
	     * @method computeBounds
	     * @instance
	     * @override
	     */
	
	  }, {
	    key: 'computeBounds',
	    value: function computeBounds() {
	      if (!!this.settings.minWidth) {
	        if (this.settings.minWidth.isPercentage() && !!this.parent) {
	          this.settings.minWidth = this.parent.getComputedBounds().width * this.settings.minWidth.parsePercentage();
	        }
	
	        if (this.settings.size.width < this.settings.minWidth) {
	          this.settings.size.width = this.settings.minWidth;
	        }
	      }
	    }
	  }, {
	    key: 'preDrawElements',
	    value: function preDrawElements() {
	      this.computeBounds();
	
	      _get(ListElement.prototype.__proto__ || Object.getPrototypeOf(ListElement.prototype), 'preDrawElements', this).call(this);
	    }
	
	    /**
	     * draws all graphic elements of the ListElement instance, cycles the items, draw them and computes positions
	     * @memberOf ListElement
	     * @method drawElements
	     * @instance
	     * @override
	     */
	
	  }, {
	    key: 'drawElements',
	    value: function drawElements() {
	      var _this2 = this;
	
	      _get(ListElement.prototype.__proto__ || Object.getPrototypeOf(ListElement.prototype), 'drawElements', this).call(this);
	
	      this.settings.path('items', []).each(function (item, i) {
	        var listItem = new _ListItemElement2.default(_this2.settings.item.inherit(true, {
	          indicator: _this2.settings.indicator,
	          events: _this2.settings.itemEvents
	        }, item, {
	          parent: _this2,
	          align: 'left top'
	        }));
	
	        _this2.items.push(listItem);
	
	        if (i > 0) {
	          listItem.setPosition({
	            y: _this2.items[i - 1].getComputedBounds().bottom
	          });
	        }
	      });
	    }
	  }]);
	
	  return ListElement;
	}(_Element3.default);
	
	exports.default = ListElement;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _ElementHelpers = __webpack_require__(3);
	
	var _ElementHelpers2 = _interopRequireDefault(_ElementHelpers);
	
	var _Element2 = __webpack_require__(1);
	
	var _Element3 = _interopRequireDefault(_Element2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * constructs an SpriteElement instance
	 * @class SpriteElement
	 * @classdesc SpriteElement class, extending Element
	 * @extends Element
	 * @param {Object} options the options object to be merged with defaults
	 * @type {SpriteElement}
	 * @public
	 */
	var SpriteElement = function (_Element) {
	  _inherits(SpriteElement, _Element);
	
	  function SpriteElement() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    _classCallCheck(this, SpriteElement);
	
	    return _possibleConstructorReturn(this, (SpriteElement.__proto__ || Object.getPrototypeOf(SpriteElement)).call(this, options));
	  }
	
	  /**
	   * Initialize default settings for SpriteElement
	   * @memberOf SpriteElement
	   * @method initDefaults
	   * @instance
	   * @override
	   */
	
	
	  _createClass(SpriteElement, [{
	    key: 'initDefaults',
	    value: function initDefaults() {
	      _get(SpriteElement.prototype.__proto__ || Object.getPrototypeOf(SpriteElement.prototype), 'initDefaults', this).call(this, {
	        spritesheet: null
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
	
	  }, {
	    key: 'setScale',
	    value: function setScale() {
	      var scaleOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	
	      _get(SpriteElement.prototype.__proto__ || Object.getPrototypeOf(SpriteElement.prototype), 'setScale', this).call(this, scaleOptions, force);
	
	      this.sprite.inherit({
	        scaleX: this.scaleX,
	        scaleY: this.scaleY
	      });
	
	      return this;
	    }
	  }, {
	    key: 'preDrawElements',
	    value: function preDrawElements() {
	      this.sprite = _ElementHelpers2.default.createSprite(this.settings.spritesheet);
	      this.spriteBounds = this.sprite.getBounds();
	
	      if (!this.settings.size.force) {
	        this.settings.inherit({
	          size: {
	            width: this.spriteBounds.width,
	            height: this.spriteBounds.height
	          }
	        });
	      }
	
	      _get(SpriteElement.prototype.__proto__ || Object.getPrototypeOf(SpriteElement.prototype), 'preDrawElements', this).call(this);
	    }
	    /**
	     * draws all graphic elements of the SpriteElement instance
	     * @memberOf SpriteElement
	     * @method drawElements
	     * @instance
	     * @override
	     */
	
	  }, {
	    key: 'drawElements',
	    value: function drawElements() {
	      _get(SpriteElement.prototype.__proto__ || Object.getPrototypeOf(SpriteElement.prototype), 'drawElements', this).call(this);
	
	      this.addChild(this.sprite);
	      _ElementHelpers2.default.align(this.sprite, null, 'center middle', true);
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
	
	  }, {
	    key: 'animate',
	    value: function animate() {
	      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	
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
	  }]);
	
	  return SpriteElement;
	}(_Element3.default);
	
	exports.default = SpriteElement;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ElementHelpers = __webpack_require__(3);
	
	var _ElementHelpers2 = _interopRequireDefault(_ElementHelpers);
	
	var _Element = __webpack_require__(1);
	
	var _Element2 = _interopRequireDefault(_Element);
	
	var _TextElement = __webpack_require__(8);
	
	var _TextElement2 = _interopRequireDefault(_TextElement);
	
	var _LabelElement = __webpack_require__(4);
	
	var _LabelElement2 = _interopRequireDefault(_LabelElement);
	
	var _ButtonElement = __webpack_require__(5);
	
	var _ButtonElement2 = _interopRequireDefault(_ButtonElement);
	
	var _ListItemElement = __webpack_require__(7);
	
	var _ListItemElement2 = _interopRequireDefault(_ListItemElement);
	
	var _ListElement = __webpack_require__(13);
	
	var _ListElement2 = _interopRequireDefault(_ListElement);
	
	var _ImageElement = __webpack_require__(6);
	
	var _ImageElement2 = _interopRequireDefault(_ImageElement);
	
	var _SpriteElement = __webpack_require__(14);
	
	var _SpriteElement2 = _interopRequireDefault(_SpriteElement);
	
	var _BoxElement = __webpack_require__(12);
	
	var _BoxElement2 = _interopRequireDefault(_BoxElement);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module Elements
	 * @description The Elements module of CreateJS Core Framework
	 * @property {ElementHelpers} ElementHelpers all the helpers we need to draw the elements
	 * @property {Element} Element
	 * @property {TextElement} TextElement
	 * @property {LabelElement} LabelElement
	 * @property {ButtonElement} ButtonElement
	 * @property {ListItemElement} ListItemElement
	 * @property {ListElement} ListElement
	 * @property {ImageElement} ImageElement
	 * @property {SpriteElement} SpriteElement
	 * @property {BoxElement} BoxElement
	 */
	exports.default = {
	  ElementHelpers: _ElementHelpers2.default,
	  Element: _Element2.default,
	  TextElement: _TextElement2.default,
	  LabelElement: _LabelElement2.default,
	  ButtonElement: _ButtonElement2.default,
	  ListItemElement: _ListItemElement2.default,
	  ListElement: _ListElement2.default,
	  ImageElement: _ImageElement2.default,
	  SpriteElement: _SpriteElement2.default,
	  BoxElement: _BoxElement2.default
	};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _createEs6Js = __webpack_require__(2);
	
	var _SoundElement = __webpack_require__(9);
	
	var _SoundElement2 = _interopRequireDefault(_SoundElement);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var SoundManager = function () {
	  function SoundManager() {
	    _classCallCheck(this, SoundManager);
	
	    console.log('constructor exectued');
	  }
	
	  _createClass(SoundManager, null, [{
	    key: 'play',
	    value: function play(props) {
	      console.log('adding layer ', props);
	      var instance = new _SoundElement2.default(props);
	      SoundManager._instances = [];
	      _createEs6Js.Sound.Sound.Ticker.addEventListener('tick', SoundManager.handleSoundTick);
	      SoundManager.addLayer(instance);
	
	      instance.instance.on('complete', function () {
	        SoundManager.removeLayer(instance);
	      });
	
	      return instance;
	    }
	  }, {
	    key: 'addLayer',
	    value: function addLayer(instance) {
	      SoundManager._instances.push({
	        instance: instance,
	        playing: true
	      });
	    }
	  }, {
	    key: 'removeLayer',
	    value: function removeLayer(instance) {
	      SoundManager._instances.remove(instance);
	    }
	  }, {
	    key: 'handleSoundTick',
	    value: function handleSoundTick() {
	      if (SoundManager._instances.length > 0) {
	        var toFade = SoundManager._instances.findBy(function (o) {
	          return Object.isObject(o.instance.props.fade) && o.instance.props.fade.type;
	        });
	
	        toFade.each(function (i) {
	          if (!!i.instance) {
	            if (i.props.fade.type === 'FADE_IN' || i.props.fade.type === 'FADE_ALL') {
	              if (i.instance.position === 0) {
	                i.instance.volume = 0;
	              } else if (i.instance.position < i.props.fade.duration) {
	                i.instance.volume = 1 / i.props.fade.duration * i.instance.position;
	              }
	            }
	
	            if (i.props.fade.type === 'FADE_OUT' || i.props.fade.type === 'FADE_ALL') {
	              if (i.instance.position > i.instance.duration - i.props.fade.duration) {
	                var fadeOutStart = i.instance.duration - i.props.fade.duration;
	                var backPosition = i.instance.position - fadeOutStart;
	
	                i.instance.volume = 1 - 1 / i.props.fade.duration * backPosition;
	              }
	            }
	          }
	        });
	      }
	    }
	  }, {
	    key: 'mute',
	    value: function mute() {
	      _createEs6Js.Sound.Sound.muted = true;
	    }
	  }, {
	    key: 'unmute',
	    value: function unmute() {
	      _createEs6Js.Sound.Sound.muted = false;
	    }
	  }]);
	
	  return SoundManager;
	}();
	
	exports.default = SoundManager;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _SoundElement = __webpack_require__(9);
	
	var _SoundElement2 = _interopRequireDefault(_SoundElement);
	
	var _SoundManager = __webpack_require__(16);
	
	var _SoundManager2 = _interopRequireDefault(_SoundManager);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  SoundManager: _SoundManager2.default,
	  SoundElement: _SoundElement2.default
	};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _lodash = __webpack_require__(10);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var TranslateUtils = function () {
	  function TranslateUtils() {
	    _classCallCheck(this, TranslateUtils);
	  }
	
	  _createClass(TranslateUtils, null, [{
	    key: 'init',
	
	    /**
	     * Method for initing the Translation Engine
	     * @param translationSource
	     * @param language
	     * @static
	     */
	    value: function init(translationsSource, language) {
	      TranslateUtils._language = language;
	      TranslateUtils.TRANSLATIONS = translationsSource[language];
	    }
	
	    /**
	     * Useful Method for getting property through dot notation
	     * @param propertyName
	     * @param object
	     * @static
	     */
	
	  }, {
	    key: 'getProperty',
	    value: function getProperty(propertyName, object) {
	      var parts = propertyName.split('.');
	      var length = parts.length;
	      var i = void 0;
	      var property = object || this;
	
	      for (i = 0; i < length; i++) {
	        property = property[parts[i]];
	      }
	
	      return property;
	    }
	
	    /**
	     * Method for getting translation, with params management
	     * @param tag
	     * @param params
	     * @static
	     */
	
	  }, {
	    key: '_t',
	    value: function _t(tag) {
	      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	      var p = TranslateUtils.getProperty(tag, TranslateUtils.TRANSLATIONS);
	      var t = _lodash2.default.isUndefined(p) ? tag : p;
	      var paramsMatch = t.match(/\{{([^}}]+)\}}/);
	
	      if (paramsMatch) {
	        var paramEnclosed = paramsMatch[0];
	        var paramKey = paramsMatch[1];
	
	        if (!_lodash2.default.isUndefined(params[paramKey])) {
	          console.log('substituing', paramEnclosed, ' with ', params[paramKey]);
	          t = _lodash2.default.replace(t, new RegExp(paramEnclosed), params[paramKey]);
	        }
	      }
	      return t;
	    }
	  }]);
	
	  return TranslateUtils;
	}();
	
	exports.default = TranslateUtils;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _TranslateUtils = __webpack_require__(18);
	
	var _TranslateUtils2 = _interopRequireDefault(_TranslateUtils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _TranslateUtils2.default;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ })
/******/ ])
});
;
//# sourceMappingURL=evolve.js.map