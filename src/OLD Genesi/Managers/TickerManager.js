import Core from '../Core';

/**
 * The time manager is a helper to handle the createjs global Ticker. It is 
 * created by the game and can be accessed with `game.time`. 
 *
 * The main function of this class is to store the delta time since last 
 * tick. For example:
 *
 *     var game = new tine.Game(null, {
 *       update: function() {
 *         console.log(game.time.delta); // in milliseconds
 *         console.log(game.time.fdelta); // in seconds
 *       }
 *     })
 * 
 * @class TickerManager
 * @constructor
 */
export default class TickerManager extends Core.EventDispatcher {
  constructor(options) {
    super();

    this.defaults = {
      FPS: 30,
      showFPS: false,
      timingMode: Core.Ticker.RAF,
    };

    this.settings = this.defaults.inherit(true, options);

    this._FPS = this.settings.FPS;
    this._showFPS = this.settings.showFPS;
    this._timingMode = Core.Ticker[this.settings.timingMode];
    this._delta = 0;

    this.init();
  }

  get FPS() {
    return this._FPS;
  }

  set FPS(value) {
    this._FPS = value;
  }

  get showFPS() {
    return this._showFPS;
  }

  set showFPS(value) {
    this._showFPS = value;
  }

  get timingMode() {
    return this._timingMode;
  }

  set timingMode(value) {
    this._timingMode = value;
  }

  get delta() {
    return this._delta;
  }

  set delta(value) {
    this._delta = value;
  }

  get deltaSecs() {
    return this._delta / 1000.0;
  }

  init() {
    Core.Ticker.framerate = this._FPS;
    Core.Ticker.timingMode = this._timingMode;

    this.bindEvents();
  }

  bindEvents() {
    Core.Ticker.on('tick', this.onTick.bind(this));
  }

  onTick(e) {
    this._delta = e.delta;
    this.dispatchEvent({type: 'ticker'}.inherit(this.toJS()));
  }

  toJS() {
    return {
      FPS: this._FPS,
      showFPS: this._showFPS,
      measuredFPS: Core.Ticker.getMeasuredFPS(),
      timingMode: this._timingMode,
      time: Core.Ticker.getTime(),
      eventTime: Core.Ticker.getEventTime(),
      measuredTickTime: Core.Ticker.getMeasuredTickTime(),
      ticks: Core.Ticker.getTicks(),
      delta: this._delta,
      deltaSecs: this.deltaSecs,
    };
  }

  toJSON() {
    return JSON.stringify(this.toJS());
  }
}
