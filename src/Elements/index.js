import ElementHelpers from './ElementHelpers';
import Element from './Element';
import TextElement from './TextElement';
import LabelElement from './LabelElement';
import ButtonElement from './ButtonElement';
import ListItemElement from './ListItemElement';
import ListElement from './ListElement';
import ImageElement from './ImageElement';
import SpriteElement from './SpriteElement';
import BoxElement from './BoxElement';

/**
 * @module Elements
 * @description The Elements module of CreateJS Core Framework
 * @property {ElementHelpers} ElementHelpers all the helpers we need to draw the elements
 * @property {Element} Element
 * @property {TextElement} TextElement
 * @property {LabelElement} LabelElement
 * @property {ButtonElement} ButtonElement
 * @property {ListItemElement} ListItemElement
 * @property {ListElement} ListElement
 * @property {ImageElement} ImageElement
 * @property {SpriteElement} SpriteElement
 * @property {BoxElement} BoxElement
 */
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
    ElementHelpers,
    Element,
    TextElement,
    LabelElement,
    ButtonElement,
    ListItemElement,
    ListElement,
    ImageElement,
    SpriteElement,
    BoxElement,
  };
});
