import Core from '../Core';

/**
 * @class LocalesManager
 * @constructor
 */
export default class LocalesManager extends Core.EventDispatcher {
  constructor(locales) {
    super();

    this._locales = locales;

    this.init();
  }

  get(path) {
    return this._locales.path(path, null);
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
      type: 'localesChange',
      locales: this._locales,
    });
  }

  get locales() {
    return this._locales;
  }

  set locales(l) {
    this._locales = l;
    this.dispatchEvent({
      type: 'localesChange',
      locales: this._locales,
    });
  }

  init() {
    this.bindEvents();
  }

  bindEvents() {
    this.on('localesChange', this.onLocalesChange.bind(this));
  }

  onLocalesChange(e) {
    console.log('Locales Changed ' + e.locales);
    this.dispatchEvent({
      type: 'localesChanged',
      locales: e.locales,
    });
  }

  toJS() {
    return {
      locales: this._locales,
    };
  }

  toJSON() {
    return JSON.stringify(this.toJS());
  }
}
