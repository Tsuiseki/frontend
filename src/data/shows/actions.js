export const SHOW_FETCH_REQUEST = 'SHOWS_FETCH_REQUEST'
export const SHOW_FETCH_SUCCESS = 'SHOWS_FETCH_SUCCESS'
export const SHOW_FETCH_FAILURE = 'SHOWS_FETCH_FAILURE'

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
}
