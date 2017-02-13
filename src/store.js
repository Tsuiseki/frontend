import { createStore } from 'redux';
import appReducers from './reducers';


export function configureStore(initialState = {}) {
  const store = createStore(appReducers, initialState);

  return store;
}
