import { all, call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_REPO } from 'constants/actionTypes';
import { fetchRepoSucceededAction, fetchRepoFaildedAction } from 'actions';
import { fetchRepo } from 'services';

function* fetchRepoAsync({ payload: name }) {
  try {
    const { data: repo } = yield call(fetchRepo, name);
    yield put(fetchRepoSucceededAction(repo));
  } catch (error) {
    yield put(fetchRepoFaildedAction(error));
  }
}

function* watchFetchRepoAsync() {
  yield takeEvery(FETCH_REPO, fetchRepoAsync);
}

export default function* repoSaga() {
  yield all([call(watchFetchRepoAsync)]);
}
