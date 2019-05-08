export default class Exception {
  constructor(module = 'Core', description = 'Generic Exception', data = {}) {
    this._module = module;
    this._description = description;
    this._data = data;

    console.error(this.message, this._data);
  }

  get module() {
    return this._module;
  }

  set module(value) {
    this._module = value;
  }

  get description() {
    return this._description;
  }

  set description(value) {
    this._description = value;
  }

  get message() {
    return 'GenesiJS Exception: ' + this._module + ' - ' + this._description;
  }
}
