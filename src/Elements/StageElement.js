import Draw from '../Draw';
import Helpers from './Helpers';

export default class StageElement extends Draw.Stage {
  constructor(canvas = null, options = {}) {
    super(canvas);

    this.initDefaults();
    this.initSettings(options);

    this.init();
  }

  initDefaults() {
    this.inherit({
      defaults: {
        domEvents: false,
        mouseOverEvents: true,
        size: {
          width: 0,
          height: 0,
        },
      }.inherit(defaults),
    });
  }

  initSettings(options) {
    this.inherit({
      settings: this.defaults.inherit(true, options),
    });
  }

  init() {
    if (!!this.settings.size) {
      this.setBounds(0, 0, this.settings.size.width, this.settings.size.height);
    }

    if (!!this.settings.domEvents) {
      this.enableDOmEvents();
    }

    if (!!this.settings.mouseOverEvents) {
      this.enableMouseOver();
    }
  }

  getComputedBounds() {
    return this.getBounds();
  }

  screenshot(backgroundColor = 'transparent', mimeType = 'image/png') {
    return this.toDataURL(backgroundColor, mimeType);
  }
}
