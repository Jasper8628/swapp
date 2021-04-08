import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

function Tabs({ selectTab, tabs, changeTab }) {
  const dispatch = useDispatch();
  const tabName = useSelector(selectTab);

  useEffect(() => {
    dispatch(changeTab(tabs[0].toLowerCase()));
  }, []);

  return (
    <div className='tabs'>
      {tabs.map(tab => (
        <button
          className={tab.toLowerCase() === tabName ? 'tab tabActive' : 'tab'}
          onClick={() => dispatch(changeTab(tab.toLowerCase()))}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}

export default Tabs
