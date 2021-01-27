import { all } from "redux-saga/effects";
import appInfoSaga from "./sagas/appInfo.sagas";
import itunesItemsSaga from "./sagas/itunesItems.sagas";

export default function* rootSaga() {
  yield all([
    appInfoSaga(),
    itunesItemsSaga(),
  ]);
}