import { takeEvery, put, select, all, fork } from 'redux-saga/effects';
import axios from 'axios';
import { url } from '../constants/constants';
import { PAGE_CHANGE, TAB_CHANGE, DETAILS_CHANGE, TAB, PAGE, DETAILS } from './types';
import formatData from './helper';

function* pageChange({ payload }) {
  const selectPageCount = (state) => state.pageCount;
  const selectTab = (state) => state.tab;
  const pageCount = yield select(selectPageCount);
  const tab = yield select(selectTab);
  const response = yield axios.get(`${url}${tab}/?page=${pageCount + payload}`);
  const table = yield formatData(response.data.results, tab);
  yield put({
    type: PAGE_CHANGE,
    payload: {
      pageCount: pageCount + payload,
      table: table,
    }
  })
};

function* tabChange({ payload }) {
  const response = yield axios.get(`${url}${payload}/`);
  const table = yield formatData(response.data.results, payload);
  yield put({
    type: TAB_CHANGE,
    payload: {
      pageNum: Math.ceil(response.data.count / 10),
      table: table,
      tab: payload,
    }
  });
};

function* detailChange({ payload }) {
  const selectDetails = (state) => state.table[payload];
  const query = [];
  const filmNames = [];
  const details = yield select(selectDetails);
  if (typeof (details.Films) === 'object') {
    // a more performant way is just to store all movie titles in an array
    // then retrieve them by the last digit of each film url
    yield details.Films.forEach(film => query.push(axios.get(film)));
    const response = yield all(query);
    yield response.forEach(item => filmNames.push(item.data.title));
    details.Films = yield filmNames.join(' , ');
  }
  yield put({
    type: DETAILS_CHANGE,
    payload: details,
  });
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