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
 * @class FadeOut
 * @constructor
 * @param {Function} [ease=createjs.Ease.linear] An easing function from 
 *                   `createjs.Ease` (provided by TweenJS).
 * @param {Number} [duration=400] The transition time in milliseconds.
**/
export default class FadeOut extends Transition {
  startTransitionSwap() {
    // sample fadein transition, OVERRIDE HERE
    if (!(this.idxOut === -1 || this.idxIn === -1 || this.idxOut >= this.idxIn)) {
      this.parent.removeChild(this.out);
      this.parent.addChildAt(this.out, this.idxIn);
    }
  }

  startTransition() {
    return new Promise((resolve, reject) => {
      this.startOutOptions = {
        alpha: this.out.alpha,
      };

      this.endOutOptions = {
        alpha: 0,
      }

      this.out.inherit(this.startOutOptions).animate({ override: true }, this.endOutOptions, this.duration, this.ease).then(() => {
        resolve();
      });
    });
  }

  endTransition() {
    return new Promise((resolve, reject) => {
      this.out.inherit(this.startOutOptions);

      resolve();
    });
  }
}
