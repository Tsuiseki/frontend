import _fetch from 'isomorphic-fetch'
const API_PREFIX = 'api/v1'

async function fetch(entrypoint) {
  const response = await _fetch(`${API_PREFIX}/${entrypoint}`)
  return response.json()
}

export default {
  fetch,
}
