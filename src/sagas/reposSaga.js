import { all, call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_REPOS } from '../constants/actionTypes';
import { fetchReposSucceededAction, fetchReposFaildedAction } from '../actions';
import { fetchRepos } from '../services';

function* fetchReposAsync() {
  try {
    const repos = yield call(fetchRepos);
    yield put(fetchReposSucceededAction(repos));
  } catch (error) {
    yield put(fetchReposFaildedAction(error));
  }
}

function* watchFetchReposAsync() {
  yield takeLatest(FETCH_REPOS, fetchReposAsync);
}

export default function* reposSaga() {
  yield all([call(watchFetchReposAsync)]);
}
