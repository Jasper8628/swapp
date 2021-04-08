import { takeEvery, put, select, all } from 'redux-saga/effects';
import axios from 'axios';
import { url } from '../../constants/constants';
import { TAB, PAGE, DETAILS } from './types';
import { selectTable, selectTab, selectPageCount } from './selectors';
import { sagaChangeDetails, sagaChangePage, sagaChangeTab, sagaError } from './actions';
import formatData from './helper';

function* pageChange({ payload }) {
  try {
    const pageCount = yield select(selectPageCount);
    const tab = yield select(selectTab);
    const response = yield axios.get(`${url}${tab}/?page=${pageCount + payload}`);
    // removing underscores, cherry-picking data fields to reduce size
    const table = yield formatData(response.data.results, tab);
    yield put(sagaChangePage({
      pageCount: pageCount + payload,
      table: table,
    }));
  } catch (error) {
    yield put(sagaError(error));
  }
};

function* tabChange({ payload }) {
  try {
    const response = yield axios.get(`${url}${payload}/`);
    const table = yield formatData(response.data.results, payload);
    yield put(sagaChangeTab({
      pageNum: Math.ceil(response.data.count / 10),
      table: table,
      tab: payload,
    }));
  } catch (error) {
    yield put(sagaError(error));
  }
};

function* detailChange({ payload }) {
  try {
    const query = [];
    const filmNames = [];
    const table = yield select(selectTable);
    const details = yield table[payload];
    // requires details.Films to be an array of film urls
    if (typeof (details.Films) === 'object') {
      // a more performant way is just to store all movie titles in an array
      // then retrieve them by the last digit of each film url
      yield details.Films.forEach(film => query.push(axios.get(film.replace('http', 'https'))));
      const response = yield all(query);
      yield response.forEach(item => filmNames.push(item.data.title));
      details.Films = yield filmNames.join(' , ');
    }
    yield put(sagaChangeDetails(details));
  } catch (error) {
    yield put(sagaError(error));
  }
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