import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';
const sageMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sageMiddleware));
sageMiddleware.run(rootSaga);
export default store;