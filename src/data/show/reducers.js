import { SHOW_FETCH_SUCCESS, SHOW_CREATE_SUCCESS } from './actions'

const defaultState = {
  list: [],
}

export default function showsReducer(state = defaultState, action) {
  switch(action.type) {
    case SHOW_FETCH_SUCCESS:
      return {
        ...state,
        list: action.shows,
      }
    case SHOW_CREATE_SUCCESS:
      return {
        ...state,
        list: [
          ...state.list,
          {
            ...action.show,
          },
        ],
      }
    default:
      return state
  }
}
