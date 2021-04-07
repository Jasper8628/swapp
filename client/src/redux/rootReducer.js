import { combineReducers } from 'redux';
import swReducer from './starWars/reducer'
const rootReducer = combineReducers({
  swReducer: swReducer,
});
export default rootReducer;