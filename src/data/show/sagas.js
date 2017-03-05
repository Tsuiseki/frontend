import { call, put, takeLatest } from 'redux-saga/effects'
import api from 'data/api'
import {
  receiveShows, failReceiveShows, SHOW_FETCH_REQUEST,
  receiveShow, failReceiveShow, SHOW_CREATE_REQUEST,
} from './actions'

const SHOW_ENTRYPOINT = 'show'

function* fetchShows() {
  try {
    const shows = yield call(api.fetch, SHOW_ENTRYPOINT)
    yield put(receiveShows(shows))
  } catch(e) {
    yield put(failReceiveShows(e.message))
  }
}

function* createShow(action) {
  try {
    const show = yield call(api.create, SHOW_ENTRYPOINT, action.show)
    yield put(receiveShow(show))
  } catch(e) {
    yield put(failReceiveShow(e.message))
  }
}

function* showSaga() {
  yield [
    takeLatest(SHOW_FETCH_REQUEST, fetchShows),
    takeLatest(SHOW_CREATE_REQUEST, createShow),
  ]
}

export default showSaga
