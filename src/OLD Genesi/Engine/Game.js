import { Anim, Draw, Preload, Sound, Elements } from 'evolve-js';

import Core from '../Core';
import Constants from '../Constants';
import Managers from '../Managers';

/**
 * Main class representing game
 * @class Game
 * @public
 */

// export default class Game extends Engine.Game {
export default class Game extends Core.EventDispatcher {
  /**
   * Init the world, create main loader promise.
   * @memberOf Game
   * @method constructor
   * @instance
   * @return {Promise.<TResult>}
   */
  constructor(config, manifests = null, locales = null) {
    super();

    let _uniqueID = 0;

    /**
     * Generates a new sequential identifier, starting from `1`.
     *
     * @class newId
     * @constructor
     * @returns A sequential integer.
     */
    this.getNewID = () => {
      return ++_uniqueID;
    };

    this.init(config, manifests, locales);
  }

  initDisplay() {
    this.DISPLAY = new Managers.Display(this.CONFIG.get('canvas'));

    return new Promise((resolve, reject) => {
      this.CANVAS = document.querySelector(this.CONFIG.get('canvas.selector'));

      this.STAGE = new Elements.StageElement(this.CANVAS, {
        size: {
          width: this.DISPLAY.get('canvas.ar.width', 1280),
          height: this.DISPLAY.get('canvas.ar.height', 720),
        },
      });

      Function.isFunction(resolve) && resolve();
    });
  }

  initTicker() {
    return new Promise((resolve, reject) => {
      this.TICKER = new Managers.Ticker(this.CONFIG.get('ticker'));
      this.TICKER.on('ticker', this.onTicker.bind(this));

      Function.isFunction(resolve) && resolve();
    });
  }

  addChild(name = '', Class = null, options = {}) {
    if (!!name && !!Class) {
      this[name] = new Class(options.inherit({ parent: this.STAGE }));
      return this[name];
    }

    return null;
  }

  removeChild(child) {
    if (String.isString(child)) {
      this.STAGE.removeChild(this[child]);
      this[child] = null;
    } else if (child instanceof Elements.Element) {
      this.STAGE.removeChild(child);
      child = null;
    }
  }

  preload(manifests) {
    return new Promise((resolve, reject) => {
      this.addChild('preloaderElement', Preload.PreloaderElement, {
        size: '100%',
        align: 'center middle',
        manifests,
      }).on('preloader.preloaded', (e) => {
        this.ASSETS = new Managers.Assets(e.assets);
        //     Game.SOUNDS = new Managers.Sounds(Game.ASSETS.sounds);
        //     Game.DISPLAY = new Managers.Display();
        //     Game.CONTROLS = new Managers.Controls();

        // createjs.Touch.enable(this.stage);
        // createjs.Sound.initializeDefaultPlugins();

        // // Managers
        // this.device = new creatine.DeviceManager(this);
        // this.create = new creatine.FactoryManager(this);
        // this.director = new creatine.SceneManager(this);
        // this.storage = new creatine.StorageManager(this);
        // this.sound = new creatine.SoundManager(this);
        // this.keyboard = new creatine.KeyboardManager(this);
        // this.mouse = new creatine.MouseManager(this);
        // this.gamepad = new creatine.GamepadManager(this);
        // this.touch = new creatine.TouchManager(this);
        // this.plugins = new creatine.PluginManager(this);
        Anim.Tween.get(this.preloaderElement).to({
          alpha: 0,
        }, 350, Anim.Ease.linear).call(() => {
          this.removeChild('preloaderElement');

          if (this.CONFIG.get('ticker.showFPS')) {
            this.addChild('showFPSText', Elements.TextElement, {
              text: 'FPS',
              font: '25px Verdana',
              align: 'top right',
              textAlign: 'right',
            });
          }

          Function.isFunction(resolve) && resolve(e.assets);
        });
      });
    });
  }

  /**
   * Initialized entire game world & global objects
   * @memberOf Game
   * @method init
   * @param resolve
   * @instance
   */
  init(config, manifests = null, locales = null) {
    this.STATUS = new Managers.Status('init', 'initializing');
    this.ENVIRONMENT = new Managers.Environment();
    this.CONFIG = new Managers.Config(config);
    this.LOCALES = new Managers.Locales(locales);

    this.initDisplay().then(() => {
      return this.initTicker();
    }).then(() => {
      this.onResize();

      this.bindEvents();

      return this.preload(manifests);
    }).then((assets) => {
      this.postInit(assets);
    });
  }

  /**
   * Ticker function - updating stage with each tick.
   * @memberOf Game
   * @method onTicker
   * @instance
   */
  onTicker(e) {
    if (this.CONFIG.get('ticker.showFPS')) {
      if (this.showFPSText) {
        this.showFPSText.setText(e.measuredFPS.toFixed(3) + ' FPS');
      }
    }

    this.STAGE.update();
  }

  /**
   * onResize handler updates canvas and stage depending on window dimensions.
   * @memberOf Game
   * @method onResize
   * @instance
   */
  onResize() {
    if (!this.CANVAS) {
      return;
    }

    this.DISPLAY.update();

    if (!this.STAGE) {
      return;
    }

    Elements.Helpers.scale(this.STAGE, this.DISPLAY.get('canvas.scale'));

    this.STAGE.update();
  }

  /**
 * Game world events binder
 * @memberOf Game
 * @method bindEvents
 * @instance
 */
  bindEvents() {
    this.DISPLAY.on('resized', this.onResize.proxy(this));
  }

  postInit(assets) {
    console.log('post init');
  }
}
