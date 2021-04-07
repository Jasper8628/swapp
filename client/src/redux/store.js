import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducer';
import rootSaga from './saga';
const sageMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sageMiddleware));
sageMiddleware.run(rootSaga);
export default store;