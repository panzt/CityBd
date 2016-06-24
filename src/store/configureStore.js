import thunkMiddleware from 'redux-thunk'
import { createStore,combineReducers,applyMiddleware } from 'redux';
import { syncHistoryWithStore,routerReducer } from 'react-router-redux';
import rootReducer from '../reducers';

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware, // 允许我们 dispatch() 函数
)(createStore)

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState)

  return store
}
