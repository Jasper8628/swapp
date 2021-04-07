import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Pagination({ selectPageCount, selectPageNum, changePage }) {
  const dispatch = useDispatch();
  const pageCount = useSelector(selectPageCount);
  const pageNum = useSelector(selectPageNum);
  return (
    <div className='buttonContainer'>
      <button
        onClick={() => dispatch(changePage(-1))}
        disabled={pageCount - 1 <= 0 ? true : false} >Page {pageCount - 1}</button>
      <span>Page {pageCount}/{pageNum} </span>
      <button
        onClick={() => dispatch(changePage(1))}
        disabled={pageCount + 1 > pageNum ? true : false} >Page {pageCount + 1}</button>
    </div>
  )
}

export default Pagination
