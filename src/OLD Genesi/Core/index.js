import { Core } from 'evolve-js';
import Exception from './Exception';

const core = {
  EventDispatcher: Core.EventDispatcher,
  Event: Core.Event,
  ErrorEvent: Core.ErrorEvent,
  MouseEvent: Core.MouseEvent,
  ProgressEvent: Core.ProgressEvent,
  BrowserDetect: Core.BrowserDetect,
  Ticker: Core.Ticker,
  Exception,
  Touch: Core.Touch,
  UID: Core.UID,
};

export default core;

