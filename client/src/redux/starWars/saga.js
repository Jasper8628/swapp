import { takeEvery, put, select, all } from 'redux-saga/effects';
import axios from 'axios';
import { url } from '../../constants/constants';
import { TAB, PAGE, DETAILS } from './types';
import { selectTable, selectTab, selectPageCount } from './selectors';
import { sagaChangeDetails, sagaChangePage, sagaChangeTab } from './actions';
import formatData from './helper';

function* pageChange({ payload }) {
  const pageCount = yield select(selectPageCount);
  const tab = yield select(selectTab);
  const response = yield axios.get(`${url}${tab}/?page=${pageCount + payload}`);
  const table = yield formatData(response.data.results, tab);
  yield put(sagaChangePage({
    pageCount: pageCount + payload,
    table: table,
  }));
};

function* tabChange({ payload }) {
  const response = yield axios.get(`${url}${payload}/`);
  const table = yield formatData(response.data.results, payload);
  yield put(sagaChangeTab({
    pageNum: Math.ceil(response.data.count / 10),
    table: table,
    tab: payload,
  }));
};

function* detailChange({ payload }) {
  const query = [];
  const filmNames = [];
  const table = yield select(selectTable);
  const details = yield table[payload];
  // requires details.Films to be an array of film urls
  if (typeof (details.Films) === 'object') {
    // a more performant way is just to store all movie titles in an array
    // then retrieve them by the last digit of each film url
    yield details.Films.forEach(film => query.push(axios.get(film)));
    const response = yield all(query);
    yield response.forEach(item => filmNames.push(item.data.title));
    details.Films = yield filmNames.join(' , ');
  }
  yield put(sagaChangeDetails(details));
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