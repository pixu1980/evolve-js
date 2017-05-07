import {Sound} from 'create-es6-js';

export default class SoundElement {

  constructor(props) {
    this.defaults = {
      interrupt: Sound.Sound.INTERRUPT_ANY,
      loop: 0,
      delay: 0,
      offset: 0,
      volume: 1,
      pan: 0,
    };
    this.props = props;
    this.playSound();
  }

  playSound() {
    const filteredProps = Object.assign({}, this.props);
    delete filteredProps.sound;
    delete filteredProps.fadeIn;
    delete filteredProps.fadeOut;
    delete filteredProps.events;
    const soundProps = Object.assign({}, this.defaults, filteredProps);

    if (Object.isObject(this.props.fade) && (this.props.fade.type === 'FADE_IN' || this.props.fade.type === 'FADE_ALL')) {
      soundProps.volume = 0;
    }

    this.instance = Sound.Sound.play(this.props.sound, soundProps);

    const eventsDefined = !!this.props.events;

    if (eventsDefined) {
      this.props.events.each((value, key) => {
        if (Function.isFunction(value)) {
          this.instance.on(key, value);
        }
      });
    }

    return this.instance;
  }

}
