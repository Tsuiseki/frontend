import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './App'
import ShowGallery from './ShowGallery'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ShowGallery} />
  </Route>
)
