import { Elements } from 'evolve-js';

import Core from '../Core';

/**
 * Manager used to detect the device support and specification. It is created
 * by the game and can be accessed using `game.device`.
 * 
 * This class is based on phaser Device and System classes.
 * 
 * @class CanvasManager
 * @param {object} the data option
 * @param {object} the canvas option
 * @constructor
 */

export default class DisplayManager extends Core.EventDispatcher {
  constructor(
    canvas = {
      selector: '.game-canvas',
      width: 1280,
      height: 720,
    },
    options = {
      smoothing: false,
      crisp: false,
      bicubic: false,
      userSelect: false,
      touch: true,
      // background: false,
      fullscreen: false,
    },
  ) {
    super();

    this._data = {
      canvas,
      options,
    };

    this.init();

    // if (!!canvas) {
    // } else {
    //   throw new Core.Exception('Data', 'No game class instance found');
    // }
  }

  get(path) {
    return this._data.path(path, null);
  }

  set(path, value, merge = false) {
    let pathFound = this.get(path);

    if (pathFound) {
      if (merge) {
        pathFound.inherit(value);
      } else {
        pathFound = value;
      }
    }

    this.dispatchEvent({
      type: 'dataChange',
      data: this._data,
    });
  }

  get data() {
    return this._data;
  }

  set data(value) {
    this._data = value;

    this.dispatchEvent({
      type: 'dataChange',
      data: this._data,
    });
  }

  initCanvas() {
    this._canvas = document.querySelector(this.get('canvas.selector', '.game-canvas'));
    this._context = this._canvas.getContext('2d');

    this.setSmoothing();
    this.setCrisp(true);
    this.setBicubic();
    this.setUserSelect();
    this.setTouch();
  }

  initFullscreen() {
    this._fullscreenRequest = this._canvas.requestFullcreen || this._canvas.webkitRequestFullscreen || this._canvas.msRequestFullscreen || this._canvas.mozRequestFullScreen;
    this._fullscreenCancel = document.cancelFullScreen || document.exitFullscreen || document.webkitCancelFullScreen || document.webkitExitFullscreen || document.msCancelFullScreen || document.msExitFullscreen || document.mozCancelFullScreen || document.mozExitFullscreen;
  }

  /**
   * Sets the Image Smoothing property on the given context. Set to false to 
   * disable image smoothing. By default browsers have image smoothing 
   * enabled, which isn't always what you visually want, especially when 
   * using pixel art in a game. Note that this sets the property on the 
   * context itself, so that any image drawn to the context will be affected.
   * This sets the property across all current browsers but support is patchy
   * on earlier browsers, especially on mobile.
   *
   * @method setSmoothing
   * @param {boolean} value - If set to true it will enable image smoothing, false will disable it.
  **/
  setSmoothing(smoothing = false) {
    if (smoothing === undefined) {
      smoothing = this.get('options.smoothing');
    }

    this._context.imageSmoothingEnabled = smoothing;
    this._context.mozImageSmoothingEnabled = smoothing;
    this._context.oImageSmoothingEnabled = smoothing;
    this._context.webkitImageSmoothingEnabled = smoothing;
    this._context.msImageSmoothingEnabled = smoothing;
  }

  /**
   * Sets the CSS image-rendering property on the given canvas to be 'crisp' 
   * (aka 'optimize contrast on webkit'). Note that if this doesn't given the
   * desired result then see the setSmoothingEnabled.
   *
   * @method setCrisp
   * @param {HTMLCanvasElement} canvas The canvas to set image-rendering 
   *        crisp on.
  **/
  setCrisp(crisp = false) {
    if (crisp === undefined) {
      crisp = this.get('options.crisp');
    }

    if (!!crisp) {
      this._canvas.style['image-rendering'] = 'optimizeSpeed';
      this._canvas.style['image-rendering'] = 'crisp-edges';
      this._canvas.style['image-rendering'] = '-moz-crisp-edges';
      this._canvas.style['image-rendering'] = '-webkit-optimize-contrast';
      this._canvas.style['image-rendering'] = 'optimize-contrast';
      this._canvas.style.msInterpolationMode = 'nearest-neighbor';
    }
  }

  /**
   * Sets the CSS image-rendering property on the given canvas to be 
   * 'bicubic' (aka 'auto'). Note that if this doesn't given the desired 
   * result then see the setSmoothingEnabled method.
   *
   * @method setBicubic
  **/
  setBicubic(bicubic = false) {
    if (bicubic === undefined) {
      bicubic = this.get('options.bicubic');
    }

    if (!!bicubic) {
      this._canvas.style['image-rendering'] = 'auto';
      this._canvas.style.msInterpolationMode = 'bicubic';
    }
  }

  /**
   * Sets the user-select property on the canvas style. Can be used to 
   * disable default browser selection actions.
   *
   * @method setUserSelect
   * @param {String} value The touch action to set. Defaults to 'none'.
  **/
  setUserSelect(userSelect = 'none') {
    if (userSelect === undefined) {
      userSelect = this.get('options.userSelect');
    }

    this._canvas.style['-webkit-touch-callout'] = userSelect;
    this._canvas.style['-webkit-user-select'] = userSelect;
    this._canvas.style['-khtml-user-select'] = userSelect;
    this._canvas.style['-moz-user-select'] = userSelect;
    this._canvas.style['-ms-user-select'] = userSelect;
    this._canvas.style['user-select'] = userSelect;
    this._canvas.style['-webkit-tap-highlight-color'] = 'rgba(0, 0, 0, 0)';
  }

  /**
   * Sets the touch-action property on the canvas style. Can be used to 
   * disable default browser touch actions.
   *
   * @method setTouch
   * @param {String} value The touch action to set. Defaults to 'none'.
  **/
  setTouch(touch = 'none') {
    if (touch === undefined) {
      touch = this.get('options.touch');
    }

    this._canvas.style.msTouchAction = touch;
    this._canvas.style['ms-touch-action'] = touch;
    this._canvas.style['touch-action'] = touch;
  }

  // /**
  //  * Sets the background color behind the canvas. This changes the canvas 
  //  * style property.
  //  *
  //  * @method setBackgroundColor
  //  * @param {String} color The color to set. Can be in the format 
  //  *        'rgb(r,g,b)', or '#RRGGBB' or any valid CSS color.
  // **/
  // setBackgroundColor(color) {
  //   color = color || 'rgb(0,0,0)';
  //   canvas.style.backgroundColor = color;
  // }

  // /**
  //  * Sets the background image behind the canvas. This changes the canvas 
  //  * style property.
  //  *
  //  * @method setBackgroundImage
  //  * @param {String} image The image path.
  // **/
  // setBackgroundImage(image) {
  //   image = image || 'none';
  //   canvas.style.backgroundImage = image;
  // }

  init() {
    this.initCanvas();
    this.initFullscreen();

    this.update();
    this.bindEvents();
  }

  updateSize() {
    const scale = Math.min(window.innerWidth / this._data.canvas.ar.width, window.innerHeight / this._data.canvas.ar.height);

    this.set('canvas', {
      scale,
      scaledWidth: this._data.canvas.ar.width * scale,
      scaledHeight: this._data.canvas.ar.height * scale,
    }, true);

    Elements.Helpers.setBoxSize(this._canvas, this.get('canvas.scaledWidth'), this.get('canvas.scaledHeight'), true);
  }

  updateOrientation() {
    this.orientation = 0;

    // CHECK ORIENTATION
    if (window.orientation) {
      this.orientation = window.orientation;
    } else if (window.outerWidth > window.outerHeight) {
      this.orientation = 90;
    }
  }

  getOrientation() {
    return this.isPortrait() ? 'portrait' : 'landscape';
  }

  update() {
    this.updateSize();
    this.updateOrientation();
  }

  bindEvents() {
    this.on('dataChange', this.onDataChange.bind(this));

    window.addEventListener('resize', this.onResize.bind(this), false);
    window.addEventListener('orientationchange', this.onOrientationChange.bind(this), false);
    document.addEventListener('webkitfullscreenchange', this.onFullscreenChange.bind(this), false);
    document.addEventListener('mozfullscreenchange', this.onFullscreenChange.bind(this), false);
    document.addEventListener('fullscreenchange', this.onFullscreenChange.bind(this), false);
  }

  onDataChange(e) {
    console.log('Data Changed ' + e.data);

    this.dispatchEvent({
      type: 'dataChanged',
      data: e.data,
    });
  }

  onResize(e) {
    this.updateSize();

    this.dispatchEvent({
      type: 'resized',
    });
  }

  onOrientationChange(e) {
    this.updateOrientation();

    this.dispatchEvent({
      type: 'orientationChanged',
      orientation: this.getOrientation(),
    });
  }

  onFullscreenChange(e) {
    this.dispatchEvent({
      type: 'fullscreenChanged',
      fullscreen: this.isFullscreen(),
    });
  }

  /**
   * Returns true if the browser dimensions match a portrait display.
   * @method isPortrait
   * @returns {Boolean}
  **/
  isPortrait() {
    return [0, 180].contains(this.orientation);
  }

  /**
   * Returns true if the browser dimensions match a landscape display.
   * @method isLandscape
   * @returns {Boolean}
  **/
  isLandscape() {
    return [90, -90].contains(this.orientation);
  }

  /**
   * Returns true if the browser is in full screen mode, otherwise false.
   * @method isFullScreen
   * @returns {Boolean}
  **/
  isFullscreen() {
    return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
  }

  /**
   * Tries to enter the browser into full screen mode.
   * Please note that this needs to be supported by the web browser and 
   * isn't the same thing as setting your game to fill the browser.
   * 
   * @method startFullscreen
  **/
  startFullscreen() {
    if (!this._fullscreenRequest || this.isFullscreen()) {
      return;
    }

    if (window.Element && window.Element.ALLOW_KEYBOARD_INPUT) {
      this._fullscreenRequest(window.Element.ALLOW_KEYBOARD_INPUT);
    } else {
      this._fullscreenRequest();
    }
  }

  /**
   * Stops full screen mode if the browser is in it.
   * @method stopFullScreen
  **/
  stopFullscreen() {
    if (!this._fullscreenCancel || !this.isFullscreen()) {
      return;
    }

    this._fullscreenCancel();
  }

  toJS() {
    return this._data;
  }

  toJSON() {
    return JSON.stringify(this.toJS());
  }
}
