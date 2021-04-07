import { takeEvery, put, select, all, fork } from 'redux-saga/effects';
import axios from 'axios';
import { url } from '../constants/constants';
import { PAGE_CHANGE, TAB_CHANGE, DETAILS_CHANGE, TAB, PAGE, DETAILS } from './types';

function* pageChange({ payload }) {
  const selectPageCount = (state) => state.pageCount;
  const selectTab = (state) => state.tab;
  const pageCount = yield select(selectPageCount);
  const tab = yield select(selectTab);
  const response = yield axios.get(`${url}${tab}/?page=${pageCount + payload}`);
  yield put({
    type: PAGE_CHANGE,
    payload: {
      pageCount: pageCount + payload,
      table: response.data.results,
    }
  })
};

function* tabChange({ payload }) {
  const response = yield axios.get(`${url}${payload}/`);
  yield put({
    type: TAB_CHANGE,
    payload: {
      pageNum: Math.ceil(response.data.count / 10),
      table: response.data.results,
      tab: payload,
    }
  });
};

function* detailChange({ payload }) {
  const selectFilms = (state) => state.table[payload].films;
  const query = [];
  const filmNames = [];
  const films = yield select(selectFilms);
  yield films.forEach(film => query.push(axios.get(film)));
  const response = yield all(query);
  yield response.forEach(item => filmNames.push(item.data.title));
  const filmNamesStr = yield filmNames.join(' , ');
  yield console.log(filmNamesStr);
  yield put({
    type: DETAILS_CHANGE,
    payload: payload,
  })
};

export function* changePage() {
  yield takeEvery(PAGE, pageChange)
}
export function* changeTab() {
  yield takeEvery(TAB, tabChange)
}
export function* changeDetails() {
  yield takeEvery(DETAILS, detailChange)
}
export default function* rootSaga() {
  yield all([
    fork(changePage),
    fork(changeTab),
    fork(changeDetails)
  ]);
}