import { all } from 'redux-saga/effects';
import authSaga from './authSaga';
import dataSaga from './dataSaga';

function* rootSaga() {
  yield all([authSaga(), dataSaga()]);
}

export default rootSaga;