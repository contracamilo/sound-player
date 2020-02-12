import { combineReducers } from 'redux';
import artistReducer from './artistReducer';
import controlReducer from './controlReducer';
import trackReducer from './trackReducer';
import refReducer from './refReducer';

const rootReducer = combineReducers({
  artists: artistReducer,
  controls: controlReducer,
  track: trackReducer,
  reference: refReducer
});

export default rootReducer;
