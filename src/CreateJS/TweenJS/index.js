import createjs from 'createjs-browserify';

((global, factory) => {
  if(typeof module === 'object' && typeof module.exports === 'object') {
    // For CommonJS and CommonJS-like environments where a proper `window`
    // is present, execute the factory and get ElementsJS.
    // For environments that do not have a `window` with a `document`
    // (such as Node.js), expose a factory as module.exports.
    // This accentuates the need for the creation of a real `window`.
    module.exports = global.document ?
      factory(global, true) :
      (w) => {
        if(!w.document) {
          throw new Error('ElementsJS requires a window with a document');
        }
        return factory(w);
      };
  } else {
    factory(global);
  }
  // Pass this if window is not defined yet
})(typeof window !== 'undefined' ? window : this, (window) => {
  return {
    CSSPlugin: createjs.CSSPlugin,
    Ease: createjs.Ease,
    Event: createjs.Event,
    EventDispatcher: createjs.EventDispatcher,
    MotionGuidePlugin: createjs.MotionGuidePlugin,
    SamplePlugin: createjs.SamplePlugin,
    Ticker: createjs.Ticker,
    Timeline: createjs.Timeline,
    Tween: createjs.Tween,
    extend: createjs.extend,
    indexOf: createjs.indexOf,
    promote: createjs.promote,
    buildDate: createjs.TweenJS.buildDate,
    version: createjs.TweenJS.version,
  };
});
