import { SHOW_FETCH_SUCCESS } from './actions'

export default function showsReducer(state = { list: [] }, action) {
  switch(action.type) {
    case SHOW_FETCH_SUCCESS:
      return {
        ...state,
        list: action.shows,
      }
    default:
      return state
  }
}
