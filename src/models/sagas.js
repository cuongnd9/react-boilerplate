import { all, fork } from 'redux-saga/effects';
import repos from './repos/sagas';
import repo from './repo/sagas';

export default function* rootSaga() {
  yield all([fork(repos), fork(repo)]);
}
