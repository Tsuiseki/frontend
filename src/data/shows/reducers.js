import { SHOW_FETCH_SUCCESS } from './actions'

export default function showsReducer(state = [], action) {
  switch(action.type) {
    case SHOW_FETCH_SUCCESS:
      return action.shows
    default:
      return state
  }
}
