import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Tabs from './components/tabs/tabs';
import Table from './components/table/table';
import Pagination from './components/pagination/pagination';
import Details from './components/details/details';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Tabs />
        <Table />
        <Pagination />
        <Details />
      </div>
    </Provider>
  );
}

export default App;
