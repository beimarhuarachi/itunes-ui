import { combineReducers } from 'redux';
import { appInfoReducer } from './reducers/appInfo.reducer';

const rootReducer = combineReducers({
  appInfo: appInfoReducer,
});

export default rootReducer;
