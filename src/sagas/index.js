import { all, call } from 'redux-saga/effects';
import reposSaga from './reposSaga';

export default function* rootSaga() {
  yield all([call(reposSaga)]);
}
