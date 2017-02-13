import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

// Combine all reducers into one root reducer
export default combineReducers({
  routing: routerReducer,
});
