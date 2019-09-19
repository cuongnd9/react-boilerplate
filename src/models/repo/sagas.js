import { all, call, put, takeEvery } from 'redux-saga/effects';
import { fetch } from './services';
import { FETCH } from './constants';
import { fetchSuccessAction, fetchErrorAction } from './actions';

function* fetchAsync({ payload: name }) {
  try {
    const { data: repo } = yield call(fetch, name);
    yield put(fetchSuccessAction(repo));
  } catch (error) {
    yield put(fetchErrorAction(error));
  }
}

function* watchFetchAsync() {
  yield takeEvery(FETCH, fetchAsync);
}

export default function* sagas() {
  yield all([call(watchFetchAsync)]);
}
