import { all, call, put, takeLatest } from 'redux-saga/effects';
import { FETCH } from './constants';
import { fetchSuccessAction, fetchErrorAction } from './actions';
import { fetch } from './services';

function* fetchAsync() {
  try {
    const { data: repos } = yield call(fetch);
    yield put(fetchSuccessAction(repos));
  } catch (error) {
    yield put(fetchErrorAction(error));
  }
}

function* watchFetchAsync() {
  yield takeLatest(FETCH, fetchAsync);
}

export default function* sagas() {
  yield all([call(watchFetchAsync)]);
}
