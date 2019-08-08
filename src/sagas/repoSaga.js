import { all, call, put, takeLatest, take } from 'redux-saga/effects';
import { FETCH_REPO } from '../constants/actionTypes';
import { fetchRepoSucceededAction, fetchRepoFaildedAction } from '../actions';
import { fetchRepo } from '../services';

function* fetchRepoAsync(name) {
  try {
    const { data: repo } = yield call(fetchRepo, name);
    yield put(fetchRepoSucceededAction(repo));
  } catch (error) {
    yield put(fetchRepoFaildedAction(error));
  }
}

function* watchFetchRepoAsync() {
  while (true) {
    const { payload } = yield take(FETCH_REPO);
    yield takeLatest(FETCH_REPO, fetchRepoAsync, payload);
  }
}

export default function* repoSaga() {
  yield all([call(watchFetchRepoAsync)]);
}
