/* globals module */
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import appReducers from './reducers'
import appSagas from './sagas'

function generateReducer(history) {
  return connectRouter(history)(appReducers)
}

function runSagas(middleware) {
  return middleware.run(appSagas)
}

export function configureStore(history, initialState = {}) {
  // initialize middlewares
  const routerMiddlewareInit = routerMiddleware(history)
  const sagaMiddleware = createSagaMiddleware()

  // create store
  const store = createStore(
    generateReducer(history),
    initialState,
    compose(
      applyMiddleware(
        sagaMiddleware,
        routerMiddlewareInit,
      )
    )
  )

  // apply sagas
  let currentSagas = runSagas(sagaMiddleware)

  // hot reload
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(generateReducer(history))
    })

    module.hot.accept('./sagas', async () => {
      currentSagas.cancel()
      await currentSagas.done
      currentSagas = runSagas(sagaMiddleware)
    })
  }

  return store
}
