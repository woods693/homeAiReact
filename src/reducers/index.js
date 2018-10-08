import { combineReducers } from 'redux';
import DevicesReducer from './reducer_devices.js';
import FloorsReducer from './reducer_floors.js';

const rootReducer = combineReducers({
  devices: DevicesReducer,
  floors: FloorsReducer
});

export default rootReducer;
