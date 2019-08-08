import { all, call } from 'redux-saga/effects';
import reposSaga from './reposSaga';
import repoSaga from './repoSaga';

export default function* rootSaga() {
  yield all([call(reposSaga), call(repoSaga)]);
}
