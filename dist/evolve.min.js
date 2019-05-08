(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.Evolve = factory());
}(this, function () { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
    var timeout = window.setTimeout(function () {
      callback();
      window.clearTimeout(timeout);
    }, 1000 / 60);
  };

  /**
   * constructs Evolve class
   * @class Evolve
   * @classdesc Evolve description
   * @public
   */

  var Evolve =
  /*#__PURE__*/
  function () {
    function Evolve() {
      var wrapperSelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var canvasSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

      _classCallCheck(this, Evolve);

      this.init(wrapperSelector, canvasSelector);
    }

    _createClass(Evolve, [{
      key: "initWrapper",
      value: function initWrapper() {
        var wrapperSelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        this._wrapper = document.querySelector(wrapperSelector);
        this._wrapper.style.width = '100%';
        this._wrapper.style.height = '100%';
      }
    }, {
      key: "updateCanvasSizing",
      value: function updateCanvasSizing() {
        this._canvas.setAttribute('width', window.innerWidth);

        this._canvas.setAttribute('height', window.innerHeight);

        this._canvas.defaultWidth = this._canvas.width;
        this._canvas.defaultHeight = this._canvas.height;
      }
    }, {
      key: "initCanvas",
      value: function initCanvas() {
        var canvasSelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        this._canvas = document.querySelector(canvasSelector);
        this.updateCanvasSizing();
      }
    }, {
      key: "initContext",
      value: function initContext() {
        this._context = this._canvas.getContext('2d');

        if (!this._context) {
          throw new Error('Your browser doesn\'t supports HTML5 Canvas ExtensionScriptApis, please update yourself!!!');
        }
      }
    }, {
      key: "initEnvironment",
      value: function initEnvironment() {
        this._pause = true;
      }
    }, {
      key: "initDOMEvents",
      value: function initDOMEvents() {
        var _this = this;

        window.addEventListener('click', function (e) {
          _this.pause = !_this.pause;
        }, true);
        window.addEventListener('load', function (e) {
          _this.start();

          console.warn('EvolveJS Engine started');
        }, true);
        window.addEventListener('resize', function (e) {
          _this.updateCanvasSizing();
        }, true);
      }
    }, {
      key: "initEvents",
      value: function initEvents() {
        this.initDOMEvents();
      }
      /**
       * initialize all
       * @memberOf Evolve
       * @method init
       * @instance
       */

    }, {
      key: "init",
      value: function init() {
        var wrapperSelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var canvasSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
        this.initWrapper(wrapperSelector);
        this.initCanvas(canvasSelector);
        this.initContext();
        this.initEnvironment();
        this.initEvents();
        console.warn('EvolveJS Engine initialized');
      }
    }, {
      key: "loop",
      value: function loop() {
        var _this2 = this;

        // updates all the objects
        this.update(); // draws actual scene on the screen

        this.draw();
        window.requestAnimationFrame(function () {
          // recursive call to requestAnimationFrame that ignites the loop
          _this2.loop();
        });
      }
    }, {
      key: "start",
      value: function start() {
        this.pause = false;
        this.loop();
      }
    }, {
      key: "update",
      value: function update() {
        if (!this._pause) {
          console.log('update called');
        }
      }
    }, {
      key: "draw",
      value: function draw() {
        if (!this._pause) {
          console.log('draw called');
        }
      }
      /**
       * @returns {any}
       */

    }, {
      key: "wrapper",
      get: function get() {
        return this._wrapper;
      }
      /**
       * @returns {any}
       */

    }, {
      key: "canvas",
      get: function get() {
        return this._canvas;
      }
      /**
       * @returns {any}
       */

    }, {
      key: "context",
      get: function get() {
        return this._context;
      }
    }, {
      key: "pause",
      get: function get() {
        return this._pause;
      },
      set: function set() {
        var pause = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        this._pause = pause;
      }
    }]);

    return Evolve;
  }();

  /*global Window*/

  return Evolve;

}));
