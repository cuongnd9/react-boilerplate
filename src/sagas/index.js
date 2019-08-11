import { all, fork } from 'redux-saga/effects';
import reposSaga from './reposSaga';
import repoSaga from './repoSaga';

export default function* rootSaga() {
  yield all([fork(reposSaga), fork(repoSaga)]);
}
