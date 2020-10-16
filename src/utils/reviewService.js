import tokenService from './tokenService'; 
const BASE_URL = '/api/reviews';

export default {
  getAll,
  create, 
  update, 
  delete: deleteOne
};

function getAll(id) {
  return fetch(BASE_URL + '/' + id)
  .then(res => res.json());
}

function create(review) {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken()
    },
    body: JSON.stringify(review)
  };
  return fetch(BASE_URL, options).then(res => res.json());
}

function update(review) {
  return fetch(`${BASE_URL}/${review._id}`, {
    method: 'PUT',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(review)
  }).then(res => res.json());
}

function deleteOne(id) {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE'
  }).then(res => res.json());
}