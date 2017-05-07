import {Sound} from 'create-es6-js';
import SoundElement from './SoundElement';

export default class SoundManager {

  constructor() {
    console.log('constructor exectued');
  }

  static play(props) {
    console.log('adding layer ', props);
    const instance = new SoundElement(props);
    SoundManager._instances = [];
    Sound.Sound.Ticker.addEventListener('tick', SoundManager.handleSoundTick);
    SoundManager.addLayer(instance);

    instance.instance.on('complete', () => {
      SoundManager.removeLayer(instance);
    });

    return instance;
  }

  static addLayer(instance) {
    SoundManager._instances.push({
      instance,
      playing: true,
    });
  }

  static removeLayer(instance) {
    SoundManager._instances.remove(instance);
  }

  static handleSoundTick() {
    if(SoundManager._instances.length > 0) {
      const toFade = SoundManager._instances.findBy((o) => {
        return (Object.isObject(o.instance.props.fade) && o.instance.props.fade.type);
      });

      toFade.each((i) => {
        if(!!i.instance) {
          if((i.props.fade.type === 'FADE_IN' || i.props.fade.type === 'FADE_ALL')) {
            if(i.instance.position === 0) {
              i.instance.volume = 0;
            } else if(i.instance.position < i.props.fade.duration) {
              i.instance.volume = (1 / i.props.fade.duration) * i.instance.position;
            }
          }

          if((i.props.fade.type === 'FADE_OUT' || i.props.fade.type === 'FADE_ALL')) {
            if(i.instance.position > i.instance.duration - i.props.fade.duration) {
              const fadeOutStart = (i.instance.duration - i.props.fade.duration);
              const backPosition = (i.instance.position - fadeOutStart);

              i.instance.volume = 1 - ((1 / i.props.fade.duration) * backPosition);
            }
          }
        }
      });
    }
  }

  static mute() {
    Sound.Sound.muted = true;
  }

  static unmute() {
    Sound.Sound.muted = false;
  }
}
