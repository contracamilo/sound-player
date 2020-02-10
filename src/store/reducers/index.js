import { combineReducers } from 'redux';
import artistReducer from './artistReducer';
import controlReducer from './controlReducer';
import trackReducer from './trackReducer';

const rootReducer = combineReducers({
  artists: artistReducer,
  controls: controlReducer,
  track: trackReducer,
});

export default rootReducer;
