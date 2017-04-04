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
  console.log('SoundJS v' + createjs.SoundJS.version + ' - build ' + createjs.SoundJS.buildDate);

  return {
    AbstractPlugin: createjs.AbstractPlugin,
    AbstractSoundInstance: createjs.AbstractSoundInstance,
    AudioSprite: createjs.AudioSprite,
    CordovaAudioLoader: createjs.CordovaAudioLoader,
    CordovaAudioPlugin: createjs.CordovaAudioPlugin,
    CordovaAudioSoundInstance: createjs.CordovaAudioSoundInstance,
    ErrorEvent: createjs.ErrorEvent,
    Event: createjs.Event,
    EventDispatcher: createjs.EventDispatcher,
    FlashAudioLoader: createjs.FlashAudioLoader,
    FlashAudioPlugin: createjs.FlashAudioPlugin,
    FlashAudioSoundInstance: createjs.FlashAudioSoundInstance,
    HTMLAudioPlugin: createjs.HTMLAudioPlugin,
    HTMLAudioSoundInstance: createjs.HTMLAudioSoundInstance,
    HTMLAudioTagPool: createjs.HTMLAudioTagPool,
    PlayPropsConfig: createjs.PlayPropsConfig,
    Sound: createjs.Sound,
    WebAudioLoader: createjs.WebAudioLoader,
    WebAudioPlugin: createjs.WebAudioPlugin,
    WebAudioSoundInstance: createjs.WebAudioSoundInstance,
    extend: createjs.extend,
    indexOf: createjs.indexOf,
    promote: createjs.promote,
    buildDate: createjs.SoundJS.buildDate,
    version: createjs.SoundJS.version,
  };
});
