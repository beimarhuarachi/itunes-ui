import { all } from "redux-saga/effects";
import appInfoSaga from "./sagas/appInfo.sagas";

export default function* rootSaga() {
  yield all([
    appInfoSaga,
  ]);
}