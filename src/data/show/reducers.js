import { CREATION } from 'data/show/states'
import {
  SHOW_FETCH_SUCCESS, SHOW_CREATE_REQUEST, SHOW_CREATE_SUCCESS, SHOW_CREATE_FAILURE,
  SHOW_EDIT_SUCCESS, SHOW_DELETE_SUCCESS,
} from './actions'

const defaultState = {
  creationState: CREATION.PRISTINE,
  list: [],
}

export default function showsReducer(state = defaultState, action) {
  switch(action.type) {
    case SHOW_FETCH_SUCCESS:
      return {
        ...state,
        list: action.shows,
      }
    case SHOW_CREATE_REQUEST:
      return {
        ...state,
        creationState: CREATION.IN_PROGRESS,
      }
    case SHOW_CREATE_SUCCESS:
      return {
        ...state,
        creationState: CREATION.SUCCEEDED,
        list: [
          ...state.list,
          {
            ...action.show,
          },
        ],
      }
    case SHOW_CREATE_FAILURE:
      return {
        ...state,
        creationState: CREATION.FAILED,
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
