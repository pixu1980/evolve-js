import {Easel, Tween, Preload, Sound} from 'create-es6-js';

import Elements from './Elements';
import Translations from './Translations';
import Sounds from './Sounds';

import release from '../release';

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
  const status = {
    initialized: true,
    version: release.version,
    build: release.build,
  };

  console.log('EvolveJS initialized', status);

  return {
    Easel,
    Preload,
    Sound,
    Tween,
    Elements,
    Translations,
    Sounds,
    status,
  };
});
