import { call, put, takeLatest } from 'redux-saga/effects'
import api from 'data/api'
import {
  receiveShows, failReceiveShows, SHOW_FETCH_REQUEST,
  receiveShow, failReceiveShow, SHOW_CREATE_REQUEST,
  updateShow, failUpdateShow, SHOW_EDIT_REQUEST,
  removeShow, failRemoveShow, SHOW_DELETE_REQUEST,
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

    if (action.image != null) {
      yield* uploadShowImage(show._id, action.image)
    }
  } catch(e) {
    yield put(failReceiveShow(e.message))
  }
}

function* editShow(action) {
  try {
    const show = yield call(api.update, SHOW_ENTRYPOINT, action.id, action.show)
    yield put(updateShow(action.id, show))

    if (action.image != null) {
      yield* uploadShowImage(show._id, action.image)
    }
  } catch(e) {
    yield put(failUpdateShow(e.message))
  }
}

function* uploadShowImage(id, image) {
  const imageUploadEntrypoint = `${SHOW_ENTRYPOINT}/${id}/image`

  try {
    const response = yield call(api.upload, imageUploadEntrypoint, image)
    yield put(updateShow(id, { image: response.image }))
  } catch(e) {
    yield put(failUpdateShow(e.message))
  }
}

function* deleteShow(action) {
  try {
    const ok = yield call(api.delete, SHOW_ENTRYPOINT, action.id)

    if (ok) {
      yield put(removeShow(action.id))
    } else {
      yield put(failRemoveShow(`Failed to delete show ${action.id}`))
    }
  } catch(e) {
      yield put(failRemoveShow(e.message))
  }
}

function* showSaga() {
  yield [
    takeLatest(SHOW_FETCH_REQUEST, fetchShows),
    takeLatest(SHOW_CREATE_REQUEST, createShow),
    takeLatest(SHOW_EDIT_REQUEST, editShow),
    takeLatest(SHOW_DELETE_REQUEST, deleteShow),
  ]
}

export default showSaga
