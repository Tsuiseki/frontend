import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import appReducers from './reducers'
import appSagas from './sagas'


export function configureStore(initialState = {}) {
  // initialize middlewares
  const sagaMiddleware = createSagaMiddleware()

  const middlewares = [
    applyMiddleware(sagaMiddleware),
  ]

  // create store
  const store = createStore(appReducers, initialState, compose(...middlewares))

  // apply sagas
  sagaMiddleware.run(appSagas)

  return store
}
