import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import showsReducers from './shows/reducers'

// Combine all reducers into one root reducer
export default combineReducers({
  routing: routerReducer,
  shows: showsReducers,
})
