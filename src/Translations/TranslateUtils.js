/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
import _ from 'lodash';
/* eslint-enable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */

export default class TranslateUtils {
  /**
   * Method for initing the Translation Engine
   * @param translationSource
   * @param language
   * @static
   */
  static init(translationsSource, language) {
    TranslateUtils._language = language;
    TranslateUtils.TRANSLATIONS = translationsSource[language];
  }

  /**
   * Useful Method for getting property through dot notation
   * @param propertyName
   * @param object
   * @static
   */
  static getProperty(propertyName, object) {
    const parts = propertyName.split('.');
    const length = parts.length;
    let i;
    let property = object || this;

    for(i = 0; i < length; i++) {
      property = property[parts[i]];
    }

    return property;
  }

  /**
   * Method for getting translation, with params management
   * @param tag
   * @param params
   * @static
   */
  static _t(tag, params = {}) {
    const p = TranslateUtils.getProperty(tag, TranslateUtils.TRANSLATIONS);
    let t = _.isUndefined(p) ? tag : p;
    const paramsMatch = t.match(/\{{([^}}]+)\}}/);

    if(paramsMatch) {
      const paramEnclosed = paramsMatch[0];
      const paramKey = paramsMatch[1];

      if(!_.isUndefined(params[paramKey])) {
        console.log('substituing', paramEnclosed, ' with ', params[paramKey]);
        t = _.replace(t, new RegExp(paramEnclosed), params[paramKey]);
      }
    }
    return t;
  }

}
