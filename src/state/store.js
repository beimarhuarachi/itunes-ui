import { applyMiddleware, createStore } from "redux";
import rootReducer from "./root.reducer";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./rootSaga";

import watchFetchItunesRequest from './sagas/itunesItems.sagas';

export function configureStore(initialState = {}) {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(sagaMiddleware),
  );

  sagaMiddleware.run(rootSaga);

  return store;
}
