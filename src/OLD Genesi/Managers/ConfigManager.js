import Constants from '../Constants';
import Core from '../Core';

export default class ConfigManager extends Core.EventDispatcher {
  constructor(config = {}) {
    super();

    this._config = {}.inherit(Constants.DEFAULT_CONFIG, config, {
      canvas: {
        ar: {
          width: (!Number.isNumber(config.canvas.width) ? Constants.DEFAULT_CONFIG.canvas.width : config.canvas.width),
          height: (!Number.isNumber(config.canvas.height) ? Constants.DEFAULT_CONFIG.canvas.height : config.canvas.height),
        },
      },
      ticker: {
        FPS: (!Number.isNumber(config.ticker.FPS) ? Constants.DEFAULT_CONFIG.ticker.FPS : config.ticker.FPS),
      },
    });

    this.init();
  }

  get(path) {
    return this._config.path(path, null);
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
      type: 'configChange',
      config: this.toJS(),
    });
  }

  get config() {
    return this._config;
  }

  set config(l) {
    this._config = l;
    this.dispatchEvent({
      type: 'configChange',
      config: this._config,
    });
  }


  init() {
    this.bindEvents();
  }

  bindEvents() {
    this.on('configChange', this.onConfigChange.bind(this));
  }

  onConfigChange(e) {
    console.log('Config Changed ' + e.config);
    this.dispatchEvent({
      type: 'configChanged',
      config: e.config,
    });
  }

  toJS() {
    return this._config;
  }

  toJSON() {
    return JSON.stringify(this.toJS());
  }
}
