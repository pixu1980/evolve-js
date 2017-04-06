import createjs from 'createjs-browserify';

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
  return {
    AbstractLoader: createjs.AbstractLoader,
    AbstractMediaLoader: createjs.AbstractMediaLoader,
    AbstractRequest: createjs.AbstractRequest,
    BinaryLoader: createjs.BinaryLoader,
    CSSLoader: createjs.CSSLoader,
    DataUtils: createjs.DataUtils,
    DomUtils: createjs.DomUtils,
    ErrorEvent: createjs.ErrorEvent,
    Event: createjs.Event,
    EventDispatcher: createjs.EventDispatcher,
    ImageLoader: createjs.ImageLoader,
    JavaScriptLoader: createjs.JavaScriptLoader,
    JSONLoader: createjs.JSONLoader,
    JSONPLoader: createjs.JSONPLoader,
    LoadItem: createjs.LoadItem,
    LoadQueue: createjs.LoadQueue,
    ManifestLoader: createjs.ManifestLoader,
    MediaTagRequest: createjs.MediaTagRequest,
    ProgressEvent: createjs.ProgressEvent,
    RequestUtils: createjs.ProgressEvent,
    SamplePlugin: createjs.SamplePlugin,
    SoundLoader: createjs.SoundLoader,
    SpriteSheetLoader: createjs.SpriteSheetLoader,
    SVGLoader: createjs.SVGLoader,
    TagRequest: createjs.TagRequest,
    TextLoader: createjs.TextLoader,
    VideoLoader: createjs.VideoLoader,
    XHRRequest: createjs.XHRRequest,
    XMLLoader: createjs.XMLLoader,
    extend: createjs.extend,
    indexOf: createjs.indexOf,
    promote: createjs.promote,
    buildDate: createjs.PreloadJS.buildDate,
    version: createjs.PreloadJS.version,
  };
});
