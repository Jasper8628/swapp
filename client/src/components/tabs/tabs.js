import React, { useEffect } from 'react'
import { tabs } from '../../constants/constants';
import { useDispatch } from 'react-redux';


function Tabs() {
  const dispatch = useDispatch();
  console.log('logging tabs')
  dispatch({ type: 'TAB', payload: 'people' });

  return (
    <div className='tabs'>
      {tabs.map(tab => (
        <button style={{ 'margin': '10px' }} key={tab} onClick={() => dispatch({ type: 'TAB', payload: tab })} > {tab} </button>
      ))}
    </div>
  )
}

export default Tabs
