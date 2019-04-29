import Core from './Core/index';
import { AssetsManager } from './Managers/index';

/**
 * constructs Evolve class
 * @class Evolve
 * @classdesc Evolve description
 * @public
 */
export default class Evolve {
  constructor(wrapperSelector = '', canvasSelector = '', assets = []) {
    this.init(wrapperSelector, canvasSelector);
  }

  initWrapper(wrapperSelector = '') {
    this._wrapper = document.querySelector(wrapperSelector);
    this._wrapper.style.width = '100%';
    this._wrapper.style.height = '100%';
  }

  updateCanvasSizing() {
    this._canvas.setAttribute('width', window.innerWidth);
    this._canvas.setAttribute('height', window.innerHeight);
    this._canvas.defaultWidth = this._canvas.width;
    this._canvas.defaultHeight = this._canvas.height;
  }

  initCanvas(canvasSelector = '') {
    this._canvas = document.querySelector(canvasSelector);
    this.updateCanvasSizing();
  }

  initContext() {
    this._context = this._canvas.getContext('2d');

    if (!this._context) {
      throw new Error('Your browser doesn\'t supports HTML5 Canvas ExtensionScriptApis, please update yourself!!!');
    }
  }

  initEnvironment() {
    this._pause = true;
  }

  initDOMEvents() {
    window.addEventListener('click', (e) => {
      this.pause = !this.pause;
    }, true);

    window.addEventListener('load', (e) => {
      this.start();
      console.warn('EvolveJS Engine started');
    }, true);

    window.addEventListener('resize', (e) => {
      this.updateCanvasSizing();
    }, true);
  }

  initEvents() {
    this.initDOMEvents();
  }

  /**
   * initialize all
   * @memberOf Evolve
   * @method init
   * @instance
   */
  init(wrapperSelector = '', canvasSelector = '') {
    this.initWrapper(wrapperSelector);
    this.initCanvas(canvasSelector);
    this.initContext();

    this.initEnvironment();

    this.initEvents();

    console.warn('EvolveJS Engine initialized');
  }

  loop() {
    // updates all the objects
    this.update();

    // draws actual scene on the screen
    this.draw();

    window.requestAnimationFrame(() => {
      // recursive call to requestAnimationFrame that ignites the loop
      this.loop();
    });
  }

  start() {
    this.pause = false;

    this.loop();
  }

  update() {
    if (!this._pause) {
      console.log('update called');
    }
  }

  draw() {
    if (!this._pause) {
      console.log('draw called');
    }
  }

  /**
   * @returns {any}
   */
  get wrapper() {
    return this._wrapper;
  }

  /**
   * @returns {any}
   */
  get canvas() {
    return this._canvas;
  }

  /**
   * @returns {any}
   */
  get context() {
    return this._context;
  }

  get pause() {
    return this._pause;
  }

  set pause(pause = false) {
    this._pause = pause;
  }
}
