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
 * @class MoveOut
 * @constructor
 * @param {Function} [ease=createjs.Ease.linear] An easing function from 
 *                   `createjs.Ease` (provided by TweenJS).
 * @param {Number} [duration=400] The transition time in milliseconds.
**/
export default class MoveOut extends Transition {
  constructor(options = { ease: Anim.Ease.linear, duration: 400, direction: 'top left' }) {
    super(options);
  }

  init() {
    super.init();

    if (this.valid) {
      this.directions = this._settings.direction.split(' ');
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
      this.endOutOptions = this.startOutOptions = {
        x: this.out.x,
        y: this.out.y,
      };

      if(Constants.HORIZONTAL_MODES.contains(this.directions)) {
        if(this.directions.contains(Constants.LEFT)) {
          this.endOutOptions.x = -this.parentBounds.width;
        } else if(this.directions.contains(Constants.RIGHT)) {
          this.endOutOptions.x = this.parentBounds.width;
        }
      }

      if(Constants.VERTICAL_MODES.contains(this.directions)) {
        if(this.directions.contains(Constants.TOP)) {
          this.endOutOptions.y = -this.parentBounds.height;
        } else if(this.directions.contains(Constants.BOTTOM)) {
          this.endOutOptions.y = this.parentBounds.height;
        }
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
