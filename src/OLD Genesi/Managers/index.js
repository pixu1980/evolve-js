import AssetsManager from './AssetsManager';
import ConfigManager from './ConfigManager';
import DisplayManager from './DisplayManager';
import EnvironmentManager from './EnvironmentManager';
import LocalesManager from './LocalesManager';
import SoundsManager from './SoundsManager';
import StatusManager from './StatusManager';
import TickerManager from './TickerManager';

const managers = {
  Assets: AssetsManager,
  Config: ConfigManager,
  Display: DisplayManager,
  Environment: EnvironmentManager,
  Locales: LocalesManager,
  Sounds: SoundsManager,
  Status: StatusManager,
  Ticker: TickerManager,
};

export default managers;

export {
  AssetsManager,
  ConfigManager,
  DisplayManager,
  EnvironmentManager,
  LocalesManager,
  SoundsManager,
  StatusManager,
  TickerManager,
};
