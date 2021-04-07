import { all, fork } from 'redux-saga/effects';
import { changeDetails, changeTab, changePage } from './starWars/saga';

export default function* rootSaga() {
  yield all([
    fork(changePage),
    fork(changeTab),
    fork(changeDetails)
  ]);
};