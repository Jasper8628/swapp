
import { PAGE_CHANGE, TAB_CHANGE, DETAILS_CHANGE } from "./types";

const initialState = {
  pageCount: 1,
  pageNum: 5,
  table: [],
  details: {},
  tab: 'people',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PAGE_CHANGE:
      return {
        ...state,
        pageCount: action.payload.pageCount,
        table: action.payload.table,
      };
    case TAB_CHANGE:
      return {
        ...state,
        pageCount: 1,
        pageNum: action.payload.pageNum,
        table: action.payload.table,
        tab: action.payload.tab,
      };
    case DETAILS_CHANGE:
      return {
        ...state,
        details: state.table[action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
