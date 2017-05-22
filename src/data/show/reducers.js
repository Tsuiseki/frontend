import {
  SHOW_FETCH_SUCCESS, SHOW_CREATE_SUCCESS, SHOW_EDIT_SUCCESS, SHOW_DELETE_SUCCESS,
} from './actions'

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
    case SHOW_EDIT_SUCCESS:
      return {
        ...state,
        list: [
          ...state.list.filter(show => show._id !== action.id),
          {
            ...state.list.find(show => show._id === action.id),
            ...action.show,
          },
        ],
      }
    case SHOW_DELETE_SUCCESS:
      return {
        ...state,
        list: state.list.filter(show => show._id != action.id),
      }
    default:
      return state
  }
}
