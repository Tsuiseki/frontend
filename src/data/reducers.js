import { combineReducers } from 'redux'
import showReducers from './show/reducers'

// Combine all reducers into one root reducer
export default combineReducers({
  shows: showReducers,
})
