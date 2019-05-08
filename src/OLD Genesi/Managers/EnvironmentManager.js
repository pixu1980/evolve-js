import detector from 'detector-js';

import Core from '../Core';

/**
 * Manager used to detect the device support and specification. It is created
 * by the game and can be accessed using `game.device`.
 * 
 * This class is based on phaser Device and System classes.
 * 
 * @class EnvironmentManager
 * @constructor
 */
export default class EnvironmentManager extends Core.EventDispatcher {
  constructor() {
    super();

    this._data = detector;

    this.init();
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

  init() {
    this.bindEvents();
  }

  bindEvents() {
    this.on('dataChange', this.onDataChange.bind(this));
  }

  onDataChange(e) {
    console.log('Data Changed ' + e.data);
    
    this.dispatchEvent({
      type: 'dataChanged',
      data: e.data,
    });
  }

  toJS() {
    return this._data;
  }

  toJSON() {
    return JSON.stringify(this.toJS());
  }
}
