import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import appReducers from './reducers'
import appSagas from './sagas'


export function configureStore(history, initialState = {}) {
  // initialize middlewares
  const sagaMiddleware = createSagaMiddleware()
  const routerMiddlewareInit = routerMiddleware(history)


  // create store
  const store = createStore(
    connectRouter(history)(appReducers),
    initialState,
    compose(
      applyMiddleware(
        sagaMiddleware,
        routerMiddlewareInit,
      )
    )
  )

  // apply sagas
  sagaMiddleware.run(appSagas)

  return store
}
