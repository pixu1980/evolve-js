import { Anim, Draw, Preload, Sound, Elements } from 'evolve-js';

import Core from '../Core';
import Constants from '../Constants';
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
 * @class MoveInOut
 * @constructor
 * @param {Function} [ease=createjs.Ease.linear] An easing function from 
 *                   `createjs.Ease` (provided by TweenJS).
 * @param {Number} [duration=400] The transition time in milliseconds.
**/
export default class MoveInOut extends Transition {
  constructor(options = { ease: Anim.Ease.linear, duration: 400, direction: Constants.LEFT }) {
    super(options);
  }

  init() {
    super.init();

    if (this.valid) {
      this.direction = this._settings.direction;
    }
  }

  startTransitionSwap() {
    // sample fadein transition, OVERRIDE HERE
    if (!(this.idxOut === -1 || this.idxIn === -1 || this.idxOut >= this.idxIn)) {
      this.parent.removeChild(this.out);
      this.parent.addChildAt(this.out, this.idxIn);
    }
  }

  startTransition() {
    return new Promise((resolve, reject) => {
      this.endInOptions = this.startInOptions = {
        x: this.in.x,
        y: this.in.y,
      };

      this.endOutOptions = this.startOutOptions = {
        x: this.out.x,
        y: this.out.y,
      };

      if (this.direction === Constants.TOP) {
        this.startInOptions.y = -this.parentBounds.height;
        this.endOutOptions.y = this.parentBounds.height;
      } else if (this.direction === Constants.RIGHT) {
        this.startInOptions.x = this.parentBounds.width;
        this.endOutOptions.x = -this.parentBounds.width;
      } else if (this.direction === Constants.BOTTOM) {
        this.startInOptions.y = this.parentBounds.height;
        this.endOutOptions.y = -this.parentBounds.height;
      } else if (this.direction === Constants.LEFT) {
        this.startInOptions.x = -this.parentBounds.width;
        this.endOutOptions.x = this.parentBounds.width;
      }

      this.in.inherit(this.startInOptions).animate({ override: true }, this.endInOptions, this.duration, this.ease).then(() => {
        resolve();
      });

      this.out.inherit(this.startOutOptions).animate({ override: true }, this.endOutOptions, this.duration, this.ease);
    });
  }

  endTransition() {
    return new Promise((resolve, reject) => {
      this.in.inherit(this.endInOptions);
      this.out.inherit(this.endOutOptions);

      resolve();
    });
  }
}
