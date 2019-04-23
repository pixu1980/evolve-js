import Core from './Core';
import Draw from './Draw';
import Anim from './Anim';
import Elements from './Elements';
import Components from './Components';
import Preload from './Preload';
import Sound from './Sound';
import release from '../release';

const status = {
  initialized: true,
  version: release.version,
  build: release.build,
};

console.log('Evolve JS initialized', status);

const evolve = {
  Core,
  Draw,
  Anim,
  Preload,
  Sound,
  Elements,
  Components,
  status,
};

export default evolve;

export {
  Core,
  Draw,
  Anim,
  Preload,
  Sound,
  Elements,
  Components,
};
