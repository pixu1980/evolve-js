import Core from '../Core';
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
        enableDOMEvents: false,
        enableMouseOverEvents: true,
        enableTouchEvents: true,
        enableSnapToPixel: true,
        size: {
          width: 0,
          height: 0,
        },
      },
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

    if (!!this.settings.enableDOMEvents) {
      this.enableDOMEvents();
    }

    if (!!this.settings.enableMouseOverEvents) {
      this.enableMouseOver();
    }

    if (!!this.settings.enableTouchEvents) {
      Core.Touch.enable(this);
    }

    if (!!this.settings.enableSnapToPixel) {
      this.snapToPixelEnabled = true;
    }
  }

  getComputedBounds() {
    return this.getBounds();
  }

  screenshot(backgroundColor = 'transparent', mimeType = 'image/png') {
    return this.toDataURL(backgroundColor, mimeType);
  }
}
