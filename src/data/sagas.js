import { fork } from 'redux-saga/effects'
import showSagas from './shows/sagas.js'

const sagas = [
  showSagas,
]

export default function* rootSaga() {
  yield sagas.map(saga => fork(saga))
}
