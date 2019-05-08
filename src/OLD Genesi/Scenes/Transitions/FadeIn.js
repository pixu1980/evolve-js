import { Anim, Draw, Preload, Sound, Elements } from 'evolve-js';

import Core from '../Core';
import Transition from '../Transition';

/**
 * A transition effect to fade-in the new scene.
 *
 * ## Usage example
 *
 *     var game = new tine.Game(null, {
 *       create: function() {
 *         var transition = new tine.transitions.FadeIn(null, 1000);
 *         game.replace(new MyScene(), transition);
 *       }
 *     });
 *
 * @class FadeIn
 * @constructor
 * @param {Function} [ease=createjs.Ease.linear] An easing function from 
 *                   `createjs.Ease` (provided by TweenJS).
 * @param {Number} [duration=400] The transition time in milliseconds.
**/
export default class FadeIn extends Transition {
  startTransition() {
    return new Promise((resolve, reject) => {
      this.startInOptions = {
        alpha: 0,
      };

      this.endInOptions = {
        alpha: this.in.alpha,
      };

      this.in.inherit(this.startInOptions).animate({ override: true }, this.endInOptions, this.duration, this.ease).then(() => {
        resolve();
      });
    });
  }

  endTransition() {
    return new Promise((resolve, reject) => {
      this.in.inherit(this.endInOptions);

      resolve();
    });
  }
}
