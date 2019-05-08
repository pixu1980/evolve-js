import Core from '../Core';

/**
 * @class AssetsManager
 * @constructor
 */
export default class AssetsManager extends Core.EventDispatcher {
  constructor(assets = { images: {}, spritesheets: {}, sounds: {} }) {
    super();

    this._images = assets.images;
    this._spritesheets = assets.spritesheets;
    this._sounds = assets.sounds;

    this.init();
  }

  get images() {
    return this._images;
  }

  set images(i) {
    this._images = i;
    this.dispatchEvent({
      type: 'imagesChange',
      images: this._images,
    });
  }

  get spritesheets() {
    return this._spritesheets;
  }

  set spritesheets(s) {
    this._spritesheets = s;
    this.dispatchEvent({
      type: 'spritesheetsChange',
      spritesheets: this._spritesheets,
    });
  }

  get sounds() {
    return this._sounds;
  }

  set sounds(s) {
    this._sounds = s;
    this.dispatchEvent({
      type: 'soundsChange',
      sounds: this._sounds,
    });
  }

  getImage(key) {
    return this.images.path(key, null);
  }

  getSpritesheet(key) {
    return this.spritesheets.path(key, null);
  }

  getSound(key) {
    return this.sounds.path(key, null);
  }

  addImage(key, image) {
    this.images[key] = image;

    this.dispatchEvent({
      type: 'imagesChange',
      images: this.images,
    });
  }

  removeImage(key) {
    delete this.images[key];

    this.dispatchEvent({
      type: 'imagesChange',
      images: this.images,
    });
  }

  addSpritesheets(key, spritesheet) {
    this.spritesheets[key] = spritesheet;

    this.dispatchEvent({
      type: 'spritesheetsChange',
      spritesheets: this.spritesheets,
    });
  }

  removeSpritesheet(key) {
    delete this.spritesheets[key];

    this.dispatchEvent({
      type: 'spritesheetsChange',
      spritesheets: this.spritesheets,
    });
  }

  addSound(key, sound) {
    this.sounds[key] = sound;

    this.dispatchEvent({
      type: 'soundsChange',
      sounds: this.sounds,
    });
  }

  removeSound(key) {
    delete this.sounds[key];

    this.dispatchEvent({
      type: 'soundsChange',
      sounds: this.sounds,
    });
  }

  init() {
    this.bindEvents();
  }

  bindEvents() {
    this.on('imagesChange', this.onImagesChange.bind(this));
    this.on('spritesheetsChange', this.onSpritesheetsChange.bind(this));
    this.on('soundsChange', this.onSoundsChange.bind(this));
    this.on('assetsChange', this.onAssetsChange.bind(this));
  }

  onImagesChange(e) {
    console.log('images Changed ' + this.images);
    this.dispatchEvent('assetsChange');
  }

  onSpritesheetsChange(e) {
    console.log('spritesheets Changed ' + this.spritesheets);
    this.dispatchEvent('assetsChange');
  }

  onSoundsChange(e) {
    console.log('sounds Changed ' + this.sounds);
    this.dispatchEvent('assetsChange');
  }

  onAssetsChange(e) {
    console.log('assets Changed ' + this.toJS());
    this.dispatchEvent({
      type: 'assetsChanged',
      assets: this.toJS(),
    });
  }

  toJS() {
    return {
      images: this.images,
      spritesheets: this.spritesheets,
      sounds: this.sounds,
    };
  }

  toJSON() {
    return JSON.stringify(this.toJS());
  }
}
