import { Anim, Draw, Preload, Sound, Elements } from 'evolve-js';

import Core from '../Core';

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
 * @class Transition
 * @constructor
 * @param {Function} [ease=createjs.Ease.linear] An easing function from 
 *                   `createjs.Ease` (provided by TweenJS).
 * @param {Number} [duration=400] The transition time in milliseconds.
**/
export default class Transition extends Core.EventDispatcher {
  constructor(options = { ease: Anim.Ease.linear, duration: 400 }) {
    this._defaults = {
      in: null,
      out: null,
      ease: Anim.Ease.linear,
      duration: 400,
    };

    this._settings = this._defaults.inherit(true, options);

    this.init();
  }

  init() {
    this.valid = this._settings.in instanceof Elements.Element && this._settings.out instanceof Elements.Element && this._settings.in.parent === this._settings.out.parent

    if (this.valid) {
      this.parent = this._settings.in.parent;
      this.parentBounds = this.parent.getComputedBounds();

      this.in = this._settings.in;
      this.idxIn = this.parent.getChildIndex(this.in);

      this.out = this._settings.out;
      this.idxOut = this.parent.getChildIndex(this.out);

      this.ease = this._settings.ease;
      this.duration = this._settings.duration;
    }
  }

  startTransitionSwap() {
    // sample fadein transition, OVERRIDE HERE
    if (!(this.idxOut === -1 || this.idxIn === -1 || this.idxIn >= this.idxOut)) {
      this.parent.removeChild(this.in);
      this.parent.addChildAt(this.in, this.idxOut);
    }
  }

  startTransition(resolve) {
    // sample fadein transition, OVERRIDE HERE, must be a promise
    return new Promise((resolve, reject) => {
      this.startInOptions = {
        alpha: this.in.alpha,
      };

      this.endInOptions = {
        alpha: 0
      };

      this.in.inherit(this.startInOptions).animate({ override: true }, this.endInOptions, this.duration, this.ease).then(() => {
        resolve();
      });
    });
  }

  _startTransition() {
    return new Promise((resolve, reject) => {
      this.startTransitionSwap();

      this.startTransition().then(() => {
        this._endTransition().then(() => {
          resolve();
        });
      });
    });
  }

  _endTransition() {
    return new Promise((resolve, reject) => {
      this.endTransition().then(() => {
        this.endTransitionSwap();
        resolve();
      });
    });
  }

  endTransitionSwap() {
    // sample fadein transition, OVERRIDE HERE
    if (!(this.idxOut === -1 || this.idxIn === -1 || this.idxIn >= this.idxOut)) {
      this.parent.removeChild(this.in);
      this.parent.addChildAt(this.in, this.idxOut);
    }
  }

  /**
   * Finalize the transition (called by the director).
   * @method _endTransition
   * @protected
  **/
  endTransition() {
    // sample fadein transition, OVERRIDE HERE, must be a promise
    return new Promise((resolve, reject) => {
      this.in.inherit(this.endInOptions);

      resolve();
    });
  }

  /**
   * Initialize the transition (called by the director).
   * @method execute
   * @param {Director} director The Director instance.
   * @param {Scene} outScene The active scene.
   * @param {Scene} inScene The incoming scene.
   * @param {Function} callback The callback function called when the 
   *                   transition is done.
   * @protected
  **/
  execute() {
    return new Promise((resolve, reject) => {
      if (this.valid) {
        return this._startTransition();
      } else {
        resolve();
      }
    });
  }
}
