import _fetch from 'isomorphic-fetch'
const API_PREFIX = 'api/v1'

function fetch(entrypoint) {
  return _fetch(`${API_PREFIX}/${entrypoint}`)
    .then(response => response.json())
}

export default {
  fetch,
}
