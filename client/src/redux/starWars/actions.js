import * as types from './types';
export const changePage = (payload) => {
  return { type: types.PAGE, payload: payload }
};
export const changeTab = (payload) => {
  return { type: types.TAB, payload: payload }
};
export const changeDetails = (payload) => {
  return { type: types.DETAILS, payload: payload }
};

export const sagaChangePage = (payload) => {
  return { type: types.PAGE_CHANGE, payload: payload }
};
export const sagaChangeTab = (payload) => {
  return { type: types.TAB_CHANGE, payload: payload }
};
export const sagaChangeDetails = (payload) => {
  return { type: types.DETAILS_CHANGE, payload: payload }
};
export const sagaError = (payload) => {
  return { type: types.ERROR, payload: payload }
};