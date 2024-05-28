import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_DATA_REQUEST } from '../actions/types';
import { fetchDataApi } from '../api/dataApi';
import { fetchDataSuccess, fetchDataError } from '../actions/dataActions';

function* fetchDataSaga() {
  try {
    const data = yield call(fetchDataApi);
    yield put(fetchDataSuccess(data));
  } catch (error) {
    yield put(fetchDataError(error));
  }
}

function* dataSaga() {
  yield takeEvery(FETCH_DATA_REQUEST, fetchDataSaga);
}

export default dataSaga;