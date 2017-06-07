import { Preload, Sound } from 'create-es6-js';
import Element from '../Elements/Element';
import TextElement from '../Elements/TextElement';

/**
 * constructs the preloader and returns a promise
 * @class Preloader
 * @classdesc the game preload class used for loading content
 * @public
 */
export default class PreloaderElement extends Element {
  /**
   * Initialize default settings for Button Element
   * @memberOf ButtonElement
   * @method initDefaults
   * @instance
   * @override
   */
  initDefaults(defaults) {
    super.initDefaults({
      size: '100%',
      fill: 'lightgreen',
      align: 'center top',
      manifests: {
        preloader: {
          images: [],
          spritesheets: [],
          sounds: [],
        },
        game: {
          images: [],
          spritesheets: [],
          sounds: [],
        },
      },
    }.inherit(defaults));
  }

  initData() {
    super.initData();

    this.data.inherit({
      manifests: {
        preloader: this.getManifest('preloader'),
        game: this.getManifest('game'),
      },
      progress: 0,
    });

    this.assets = {
      preloader: {
        images: {},
        spritesheets: {},
        sounds: {},
      },
      game: {
        images: {},
        spritesheets: {},
        sounds: {},
      },
    };
  }

  onPreloaderAssetFileError(e) {
    console.warn('Preloader Asset File Error ', e.title);
    console.log('Preloader Asset File Error ', e);
  }

  onPreloaderAssetFileLoad(e) {
    // console.log('Preloader Asset File Loaded', e);

    this.assets.preloader[e.item.type + 's'][e.item.id] = e.result;

    if (e.item.type === 'sound') {
      Sound.Sound.registerSound(e.item.src, e.item.id);
    }
  }

  onPreloaderAssetsProgress(e) {
    // console.log('Preloader Assets Progress', e);
  }

  onPreloaderAssetsComplete(e) {
    // console.log('Preloader Assets Complete', e);
  }

  /**
     * sets up game loader. Resolve promise when loading is complete.
     * @memberOf Preloader
     * @method init
     * @instance
     * @param {Function} resolve - resolve function of the constructor Promise
     */
  preInit(options) {
    super.preInit(options);

    this.preloadQueue = new Preload.LoadQueue();
    this.preloadQueue.installPlugin(Sound.Sound);

    this.preloadQueue.on('error', this.onPreloaderAssetFileError.bind(this));
    this.preloadQueue.on('fileload', this.onPreloaderAssetFileLoad.bind(this));
    this.preloadQueue.on('progress', this.onPreloaderAssetsProgress.bind(this));
    this.preloadQueue.on('complete', this.onPreloaderAssetsComplete.bind(this));

    this.preloadQueue.loadManifest(this.data.manifests.preloader);
  }

  drawElements() {
    super.drawElements();

    this.text = new TextElement({
      parent: this,
      text: 'Loading... 0%',
      font: '50px Verdana',
      align: 'center middle',
    });
  }

  onGameAssetFileError(e) {
    console.warn('Game Asset File Error ', e.title);
    console.log('Game Asset File Error ', e);
  }

  onGameAssetFileLoad(e) {
    this.assets.game[e.item.type + 's'][e.item.id] = e.result;

    if (e.item.type === 'sound') {
      console.log('sound registered ', e.item.id);
      Sound.Sound.registerSound(e.item.src, e.item.id);
    }
  }

  onGameAssetsProgress(e) {
    const progress = Math.round(this.loadQueue.progress * 100);

    if (progress <= 100) {
      console.log('Game Assets Progress ' + progress + '%');

      if (this.data.progress < progress && progress <= 100) {
        this.data.progress = progress;
        this.text.setText('Loading... ' + this.data.progress + '%');
      }
    }
  }

  onGameAssetsComplete(e) {
    this.dispatchEvent({
      type: 'preloader.preloaded',
      assets: this.assets.game,
    });
  }

  init() {
    super.init();

    this.loadQueue = new Preload.LoadQueue(false);
    this.loadQueue.installPlugin(Sound.Sound);

    this.loadQueue.on('error', this.onGameAssetFileError.bind(this));
    this.loadQueue.on('fileload', this.onGameAssetFileLoad.bind(this));
    this.loadQueue.on('progress', this.onGameAssetsProgress.bind(this));
    this.loadQueue.on('complete', this.onGameAssetsComplete.bind(this));

    this.loadQueue.loadManifest(this.data.manifests.game);
  }

  postInit() {
  }

  getManifest(type = 'game') {
    return this.settings.manifests[type].images.map((image) => {
      return image.inherit({
        type: 'image',
      });
    }).concat(this.settings.manifests[type].spritesheets.map((spritesheet) => {
      return spritesheet.inherit({
        type: 'spritesheet',
      });
    })).concat(this.settings.manifests[type].sounds.map((sound) => {
      return sound.inherit({
        type: 'sound',
      });
    }));
  }
}
