import React from 'react'
import { tabs } from '../../constants/constants';
import { useDispatch, useSelector } from 'react-redux';


function Tabs() {
  const dispatch = useDispatch();
  const tabName = useSelector(state => state.tab);

  return (
    <div className='tabs'>
      {tabs.map(tab => (
        <button className={tab.toLowerCase() === tabName ? 'tab tabActive' : 'tab'} style={{ 'margin': '10px' }} key={tab}
          onClick={() => dispatch({ type: 'TAB', payload: tab.toLowerCase() })} > {tab} </button>
      ))}
    </div>
  )
}

export default Tabs
