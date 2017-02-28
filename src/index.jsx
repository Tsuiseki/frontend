/* globals document, module */
import React from 'react'
import { render } from 'react-dom'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'
import { AppContainer } from 'react-hot-loader'
import { configureStore } from 'data/store'
import Bootstrap from './Bootstrap'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

const startUpApp = (Component) => {
  render(
    <AppContainer>
      <Component store={store} history={history} />
    </AppContainer>,
    document.getElementById('root')
  )
}

startUpApp(Bootstrap)

if (module.hot) {
  module.hot.accept('./Bootstrap', () => startUpApp(Bootstrap))
}
