import Create from 'create-es6-js';

import Elements from './Elements';
import Sounds from './Sounds';

import release from '../release';

const status = {
  initialized: true,
  version: release.version,
  build: release.build,
};

console.log('EvolveJS initialized', status);

const evolve = {
  Create,
  Elements,
  Sounds,
  status,
};

export default evolve;

export {
  Create,
  Elements,
  Sounds,
};
