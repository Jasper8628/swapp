import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Tabs from './components/tabs/tabs';
import Table from './components/table/table';
import Pagination from './components/pagination/pagination';
import Details from './components/details/details';
import { tableSize, tabs } from './constants/constants';
import { changeDetails, changePage, changeTab } from './redux/starWars/actions';
import { selectPageNum, selectPageCount, selectTable, selectTab, selectDetails } from './redux/starWars/selectors';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Tabs tabs={tabs} selectTab={selectTab} changeTab={changeTab} />
        <Table selectTable={selectTable} tableSize={tableSize} changeDetails={changeDetails} />
        <Pagination selectPageCount={selectPageCount} selectPageNum={selectPageNum} changePage={changePage} />
        <Details selectDetails={selectDetails} />
      </div>
    </Provider>
  );
}

export default App;
