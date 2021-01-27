import { takeEvery } from 'redux-saga/effects';
import { UPDATE_APP_INFO } from '../actions/appInfo.actions';

function* logAppInfo(action) {
  console.log('ACTION:', JSON.stringify(action, null, 2));
}

function* appInfoSaga() {
  yield takeEvery(UPDATE_APP_INFO, logAppInfo);
}

export default appInfoSaga;
