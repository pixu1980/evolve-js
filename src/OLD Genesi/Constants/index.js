import Core from '../Core';

export default {
  HORIZONTAL_MODES: ['left', 'center', 'right'],
  VERTICAL_MODES: ['top', 'middle', 'bottom'],

  // Anchor constants
  TOP_LEFT: 'topleft',
  TOP_RIGHT: 'topright',
  BOTTOM_LEFT: 'bottomleft',
  BOTTOM_RIGHT: 'bottomright',
  TOP: 'top',
  BOTTOM: 'bottom',
  LEFT: 'left',
  RIGHT: 'right',
  CENTER: 'center',
  MIDDLE: 'middle',

  // Axis constants
  HORIZONTAL: 'horizontal',
  VERTICAL: 'vertical',

  // Direction constants
  LEFT_TO_RIGHT: 12,
  RIGHT_TO_LEFT: 13,
  TOP_TO_BOTTOM: 14,
  BOTTOM_TO_TOP: 15,

  // Resizing constants
  STRETCH: 16,
  FIT: 17,
  FILL: 18,
  NOSCALE: 19,

  // Math constants
  DEGREES: 57.2957795,
  RADIANS: 0.0174532925,
  PI2: 6.2831853071,

  // Creatine constants
  DEFAULT_CONFIG: {
    editor: false,
    debug: false,
    canvas: {
      selector: '.game-canvas',
      ar: {
        width: 1920,
        height: 1080,
      },
    },
    ticker: {
      FPS: 60,
      showFPS: true,
      timingMode: Core.Ticker.RAF,
    },
    locale: 'it',
  },
};
