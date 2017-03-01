import { call, put, takeLatest } from 'redux-saga/effects'
import api from 'data/api'
import { receiveShows, failReceiveShows, SHOW_FETCH_REQUEST } from './actions'

function* fetchShows() {
  try {
    const shows = yield call(api.fetch, 'show')
    yield put(receiveShows(shows))
  } catch (e) {
    yield put(failReceiveShows(e.message))
  }
}

function* showsSaga() {
  yield takeLatest(SHOW_FETCH_REQUEST, fetchShows)
}

export default showsSaga
