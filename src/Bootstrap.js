import React from 'react';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux'
import { Router, Route, browserHistory } from 'react-router'
import { configureStore } from './store';
import routes from './routes';

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

const Bootstrap = () => (
  <Provider store={store}>
    <Router history={history}>
      {routes}
    </Router>
  </Provider>
);

export default Bootstrap;
