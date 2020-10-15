import tokenService from './tokenService'; 
const BASE_URL = '/api/trail-api'; 

export default { 
  index, 
  create, 
  search
}

function index() {
  return fetch(BASE_URL).then(res => res.json());
}

function create(searchTrail) {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken()
    },
    body: JSON.stringify(searchTrail)
  };
  return fetch(BASE_URL, options).then(res => res.json());
}

function search(zipcode) { 
  return fetch(BASE_URL + "/search/" + zipcode).then(res => res.json()); 
}

