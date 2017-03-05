export const SHOW_FETCH_REQUEST = 'SHOWS_FETCH_REQUEST'
export const SHOW_FETCH_SUCCESS = 'SHOWS_FETCH_SUCCESS'
export const SHOW_FETCH_FAILURE = 'SHOWS_FETCH_FAILURE'
export const SHOW_CREATE_REQUEST = 'SHOW_CREATE_REQUEST'
export const SHOW_CREATE_SUCCESS = 'SHOW_CREATE_SUCCESS'
export const SHOW_CREATE_FAILURE = 'SHOW_CREATE_FAILURE'
export const SHOW_DELETE_REQUEST = 'SHOW_DELETE_REQUEST'
export const SHOW_DELETE_SUCCESS = 'SHOW_DELETE_SUCCESS'
export const SHOW_DELETE_FAILURE = 'SHOW_DELETE_FAILURE'

export function fetchShows() {
  return {
    type: SHOW_FETCH_REQUEST,
  }
}

export function receiveShows(shows) {
  return {
    type: SHOW_FETCH_SUCCESS,
    shows,
  }
}

export function failReceiveShows() {
  return {
    type: SHOW_FETCH_FAILURE,
  }
}

export function createShow(show) {
  return {
    type: SHOW_CREATE_REQUEST,
    show,
  }
}

export function receiveShow(show) {
  return {
    type: SHOW_CREATE_SUCCESS,
    show,
  }
}

export function failReceiveShow() {
  return {
    type: SHOW_CREATE_FAILURE,
  }
}

export function deleteShow(id) {
  return {
    type: SHOW_DELETE_REQUEST,
    id,
  }
}

export function removeShow(id) {
  return {
    type: SHOW_DELETE_SUCCESS,
    id,
  }
}

export function failRemoveShow() {
  return {
    type: SHOW_DELETE_FAILURE,
  }
}
