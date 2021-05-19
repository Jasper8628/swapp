import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Tabs from './components/tabs';
import Table from './components/table';
import Pagination from './components/pagination';
import Details from './components/details';
import { tableSize, tabs } from './constants/constants';
import { changeDetails, changePage, changeTab } from './redux/starWars/actions';
import { selectPageNum, selectPageCount, selectTable, selectTab, selectDetails } from './redux/starWars/selectors';
import { useState } from 'react';

function App() {
  const [display, setDisplay] = useState('none');
  const [hover, setHover] = useState(false);
  const handler1 = (e) => {
    setDisplay('block')
  }
  const handler2 = () => {
    if (!hover) {
      setDisplay('none')
    }
    setHover(false)
  }
  return (
    // <Provider store={store}>
    //   <div className="App">
    //     <Tabs tabs={tabs} selectTab={selectTab} changeTab={changeTab} />
    //     <Table selectTable={selectTable} tableSize={tableSize} changeDetails={changeDetails} />
    //     <Pagination selectPageCount={selectPageCount} selectPageNum={selectPageNum} changePage={changePage} />
    //     <Details selectDetails={selectDetails} />
    //   </div>
    // </Provider>
    <div style={{ border: '1px white solid', width: '400px', height: '100%' }}>
      <input onFocus={handler1} onBlur={handler2} placeholder='test' />
      <div onClick={handler2} onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)} className='suggestion' style={{ display: display, background: 'white', height: '300px', width: '300px' }}></div>
    </div>
  );
}

export default App;
