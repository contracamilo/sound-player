import { combineReducers } from 'redux';
import artistReducer from './artistReducer';
import controlReducer from './controlReducer';

const rootReducer = combineReducers({
  artists: artistReducer,
  controls: controlReducer,
});

export default rootReducer;
