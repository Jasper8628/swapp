import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Pagination() {
  const dispatch = useDispatch();
  const pageCount = useSelector(state => state.pageCount);
  const pageNum = useSelector(state => state.pageNum);
  return (
    <div className='buttonContainer'>
      <button
        onClick={() => dispatch({ type: 'PAGE', payload: -1 })}
        disabled={pageCount - 1 <= 0 ? true : false} >Page {pageCount - 1}</button>
      <span>Page {pageCount}/{pageNum} </span>
      <button
        onClick={() => dispatch({ type: 'PAGE', payload: 1 })}
        disabled={pageCount + 1 > pageNum ? true : false} >Page {pageCount + 1}</button>
    </div>
  )
}

export default Pagination
