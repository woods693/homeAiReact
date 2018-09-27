import { combineReducers } from 'redux';
import DevicesReducer from './reducer_devices.js'

const rootReducer = combineReducers({
  devices: DevicesReducer,
});

export default rootReducer;
