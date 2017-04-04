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
  console.log('EaselJS v' + createjs.EaselJS.version + ' - build ' + createjs.EaselJS.buildDate);

  return {
    AlphaMapFilter: createjs.AlphaMapFilter,
    AlphaMaskFilter: createjs.AlphaMaskFilter,
    Bitmap: createjs.Bitmap,
    BitmapText: createjs.BitmapText,
    BlurFilter: createjs.BlurFilter,
    ButtonHelper: createjs.ButtonHelper,
    ColorFilter: createjs.ColorFilter,
    ColorMatrix: createjs.ColorMatrix,
    ColorMatrixFilter: createjs.ColorMatrixFilter,
    Container: createjs.Container,
    DisplayObject: createjs.DisplayObject,
    DisplayProps: createjs.DisplayProps,
    DOMElement: createjs.DOMElement,
    EventDispatcher: createjs.EventDispatcher,
    Filter: createjs.Filter,
    Graphics: createjs.Graphics,
    Matrix2D: createjs.Matrix2D,
    MouseEvent: createjs.MouseEvent,
    MovieClip: createjs.MovieClip,
    MovieClipPlugin: createjs.MovieClipPlugin,
    Point: createjs.Point,
    Rectangle: createjs.Rectangle,
    Shadow: createjs.Shadow,
    Shape: createjs.Shape,
    Sprite: createjs.Sprite,
    SpriteContainer: createjs.SpriteContainer,
    SpriteSheet: createjs.SpriteSheet,
    SpriteSheetBuilder: createjs.SpriteSheetBuilder,
    SpriteSheetUtils: createjs.SpriteSheetUtils,
    SpriteStage: createjs.SpriteStage,
    Stage: createjs.Stage,
    Text: createjs.Text,
    Ticker: createjs.Ticker,
    Touch: createjs.Touch,
    UID: createjs.UID,
    extend: createjs.extend,
    indexOf: createjs.indexOf,
    promote: createjs.promote,
    buildDate: createjs.EaselJS.buildDate,
    version: createjs.EaselJS.version,
  };
});
