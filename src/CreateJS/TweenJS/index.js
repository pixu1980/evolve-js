/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
import createjs from 'createjs-browserify';
/* eslint-enable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */

((global, factory) => {
  if(typeof module === 'object' && typeof module.exports === 'object') {
    // For CommonJS and CommonJS-like environments where a proper `window`
    // is present, execute the factory and get CreateJS-Elements.
    // For environments that do not have a `window` with a `document`
    // (such as Node.js), expose a factory as module.exports.
    // This accentuates the need for the creation of a real `window`.
    module.exports = global.document ?
      factory(global, true) :
      (w) => {
        if(!w.document) {
          throw new Error('CreateJS-Elements requires a window with a document');
        }
        return factory(w);
      };
  } else {
    factory(global);
  }
  // Pass this if window is not defined yet
})(typeof window !== 'undefined' ? window : this, (window) => {
  console.log('TweenJS v' + createjs.TweenJS.version + ' - build ' + createjs.TweenJS.buildDate);

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
