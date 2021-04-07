import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

function Tabs({ selectTab, tabs, changeTab }) {
  const dispatch = useDispatch();
  const tabName = useSelector(selectTab);

  return (
    <div className='tabs'>
      {tabs.map(tab => (
        <button
          className={tab.toLowerCase() === tabName ? 'tab tabActive' : 'tab'}
          style={{ 'margin': '10px' }} key={tab}
          onClick={() => dispatch(changeTab(tab.toLowerCase()))}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}

export default Tabs
