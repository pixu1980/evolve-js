import {Element} from '../Elements';

export default class Component extends Element.Element {
  constructor(options = {}) {
    super(options);
  }

  initDefaults(defaults) {
    super.initDefaults({
    }.inherit(defaults));
  }

  drawElements() {
    super.drawElements();
  }
}
