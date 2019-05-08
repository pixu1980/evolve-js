import Core from '../Core';

/**
 * @class StatusManager
 * @constructor
 */
export default class StatusManager extends Core.EventDispatcher {
  constructor(status = 'unknown', phase = 'unknown') {
    super();

    this._status = status;
    this._phase = phase;

    this.init();
  }

  get status() {
    return this._status;
  }

  set status(s) {
    this._status = s;
    this.dispatchEvent({
      type: 'statusChange',
      status: this.toJS(),
    });
  }

  get phase() {
    return this._phase;
  }

  set phase(p) {
    this._phase = p;
    this.dispatchEvent({
      type: 'statusChange',
      status: this.toJS(),
    });
  }

  update(status = 'unknown', phase = 'unknown') {
    this._status = status;
    this._phase = phase;

    this.dispatchEvent({
      type: 'statusChange',
      status: this.toJS(),
    });
  }

  init() {
    this.bindEvents();
  }

  bindEvents() {
    this.on('statusChange', this.onStatusChange.bind(this));
  }

  onStatusChange(e) {
    console.log('Status Changed ' + e.status);
    this.dispatchEvent({
      type: 'statusChanged',
      status: e.status,
    });
  }

  toJS() {
    return {
      status: this._status,
      phase: this._phase,
    };
  }

  toJSON() {
    return JSON.stringify(this.toJS());
  }
}
