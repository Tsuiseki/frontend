import _fetch from 'isomorphic-fetch'
const API_PREFIX = 'api/v1'

function buildPath(entrypoint) {
  return `${API_PREFIX}/${entrypoint}`
}

async function fetch(entrypoint) {
  const response = await _fetch(buildPath(entrypoint))
  return response.json()
}

async function create(entrypoint, data) {
  const response = await _fetch(
    buildPath(entrypoint),
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
  )
  return response.json()
}

export default {
  fetch,
  create,
}
