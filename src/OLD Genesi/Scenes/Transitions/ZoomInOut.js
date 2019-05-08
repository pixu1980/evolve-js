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
 * @class ZoomInOut
 * @constructor
 * @param {Function} [ease=createjs.Ease.linear] An easing function from 
 *                   `createjs.Ease` (provided by TweenJS).
 * @param {Number} [duration=400] The transition time in milliseconds.
**/
export default class ZoomInOut extends Transition {
  startTransitionSwap() {
    // sample fadein transition, OVERRIDE HERE
    if (!(this.idxOut === -1 || this.idxIn === -1 || this.idxOut >= this.idxIn)) {
      this.parent.removeChild(this.out);
      this.parent.addChildAt(this.out, this.idxIn);
    }
  }

  startTransition(resolve) {
    return new Promise((resolve, reject) => {
      const halfDuration = this.duration * 0.5;

      this.endOutOptions = this.startInOptions = {
        scaleX: 0,
        scaleY: 0,
      }

      this.endInOptions = {
        scaleX: this.in.scaleX,
        scaleY: this.in.scaleY,
      }

      this.startOutOptions = {
        scaleX: this.out.scaleX,
        scaleY: this.out.scaleY,
      }

      this.in.inherit(this.startInOptions).animate({ override: true, delay: halfDuration }, this.endInOptions, halfDuration, this.ease).then(() => {
        resolve();
      });

      this.out.inherit(this.startOutOptions).animate({ override: true },this.endOutOptions, halfDuration, this.ease);
    });
  }

  endTransitionSwap() {
    // sample fadein transition, OVERRIDE HERE
    if (!(this.idxOut === -1 || this.idxIn === -1 || this.idxIn >= this.idxOut)) {
      this.parent.removeChild(this.in);
      this.parent.addChildAt(this.in, this.idxOut);
    }
  }

  endTransition() {
    return new Promise((resolve, reject) => {
      this.in.inherit(this.endInOptions);
      this.out.inherit(this.startOutOptions);

      resolve();
    });
  }
}
