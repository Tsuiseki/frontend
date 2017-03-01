import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import showReducers from './show/reducers'

// Combine all reducers into one root reducer
export default combineReducers({
  routing: routerReducer,
  shows: showReducers,
})
