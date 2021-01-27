import { call, put, takeLatest } from "redux-saga/effects";
import { searchItunesItems } from "../../api/itunes.api";
import { ITUNES_ITEMS_REQUESTED, searchItunesItemsSucceeded, searchItunesItemsFailed } from "../actions/itunesItems.action";

function* fetchItemsRequest({ payload }) {
  try {
    const result = yield call(searchItunesItems, payload.searchParams.term);
    yield put(searchItunesItemsSucceeded(result.data));
  } catch (error) {
    yield put(searchItunesItemsFailed(error));
  }
}

function* watchFetchItunesRequest() {
  yield takeLatest(ITUNES_ITEMS_REQUESTED, fetchItemsRequest);
}

export default watchFetchItunesRequest;
