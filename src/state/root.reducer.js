import { combineReducers } from 'redux';
import { appInfoReducer } from './reducers/appInfo.reducer';
import { itunesItemsReducer } from './reducers/itunesItems.reducer';

const rootReducer = combineReducers({
  appInfo: appInfoReducer,
  itunesItems: itunesItemsReducer,
});

export default rootReducer;
