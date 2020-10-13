const BASE_URL = '/api/reviews';

export function getAll() {
  return fetch(BASE_URL)
  .then(res => res.json());
}

export function create(review) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(review)
  }).then(res => res.json());
}

export function update(review) {
  return fetch(`${BASE_URL}/${review._id}`, {
    method: 'PUT',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(review)
  }).then(res => res.json());
}

export function deleteOne(id) {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE'
  }).then(res => res.json());
}