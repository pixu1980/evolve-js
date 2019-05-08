import {Draw, Anim, Preload, Sound, Elements, Components} from 'evolve-js';

import Core from './Core';
import Constants from './Constants';
import Helpers from './Helpers';
import Managers from './Managers';
import Engine from './Engine';
import release from '../release';

const status = {
  initialized: true,
  version: release.version,
  build: release.build,
};

console.log('Genesi JS initialized', status);

const genesi = {
  Core,
  Draw,
  Anim,
  Preload,
  Sound,
  Elements,
  Components,
  Constants,
  Helpers,
  Managers,
  Engine,
  status,
};

export default genesi;

export {
  Core,
  Draw,
  Anim,
  Preload,
  Sound,
  Elements,
  Components,
  Constants,
  Helpers,
  Managers,
  Engine,
};
