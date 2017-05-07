import { Sound } from 'create-es6-js';

import SoundElement from './SoundElement';

const sound = {
  AbstractSoundInstance: Sound.AbstractSoundInstance,
  CordovaAudioSoundInstance: Sound.CordovaAudioSoundInstance,
  DefaultSoundInstance: Sound.DefaultSoundInstance,
  FlashAudioSoundInstance: Sound.FlashAudioSoundInstance,
  HTMLAudioSoundInstance: Sound.HTMLAudioSoundInstance,
  WebAudioSoundInstance: Sound.WebAudioSoundInstance,
  AbstractPlugin: Sound.AbstractPlugin,
  CordovaAudioPlugin: Sound.CordovaAudioPlugin,
  FlashAudioPlugin: Sound.FlashAudioPlugin,
  HTMLAudioPlugin: Sound.HTMLAudioPlugin,
  WebAudioPlugin: Sound.WebAudioPlugin,
  AudioSprite: Sound.AudioSprite,
  PlayPropsConfig: Sound.PlayPropsConfig,
  Sound: Sound.Sound,
  SoundElement,
};

export default sound;

