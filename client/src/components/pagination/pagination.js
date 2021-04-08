import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Pagination({ selectPageCount, selectPageNum, changePage }) {
  const dispatch = useDispatch();
  const pageCount = useSelector(selectPageCount);
  const pageNum = useSelector(selectPageNum);
  return (
    <div className='buttonContainer'>
      <button
        className='fas fa-angle-double-left'
        onClick={() => dispatch(changePage(-1))}
        disabled={pageCount - 1 <= 0 ? true : false} ></button>
      <span> Page {pageCount}/{pageNum} </span>
      <button
        className='fas fa-angle-double-right'
        onClick={() => dispatch(changePage(1))}
        disabled={pageCount + 1 > pageNum ? true : false} ></button>
    </div>
  )
}

export default Pagination
