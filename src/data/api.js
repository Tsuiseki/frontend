import _fetch from 'isomorphic-fetch'

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

async function upload(entrypoint, file) {
  const form = new FormData()
  form.append('file', file)

  const response = await _fetch(
    buildPath(entrypoint),
    {
      method: 'PUT',
      body: form,
    }
  )
  return response.json()
}

async function _delete(entrypoint, id) {
  const response = await _fetch(
    buildPath(`${entrypoint}/${id}`),
    {
      method: 'DELETE',
    }
  )
  return response.ok
}

export const API_PREFIX = 'api/v1'
export default {
  fetch,
  create,
  upload,
  delete: _delete,
}

