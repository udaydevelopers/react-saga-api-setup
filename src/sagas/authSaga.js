import { call, put, takeEvery } from 'redux-saga/effects';
import { LOGIN_REQUEST } from '../actions/types';
import { loginApi } from '../api/authApi';

function* loginSaga(action) {
  try {
    const { username, password } = action.payload;
    const token = yield call(loginApi, username, password);
    // Store token in localStorage or Redux state
    localStorage.setItem('token', token);
  } catch (error) {
    // Handle login error
  }
}

function* authSaga() {
  yield takeEvery(LOGIN_REQUEST, loginSaga);
}

export default authSaga;