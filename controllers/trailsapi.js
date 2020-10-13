const axios = require('axios');

module.exports = {
  searchTrails, 
  populateTrail
};

function searchTrails(req, res) { 
  axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${req.params.zipcode}&key=${process.env.GOOGLE_KEY}`)
    .then(function (response) {
      // console.log(response);
      let { lat, lng } = response.data.results[0].geometry.location; 
      console.log(lat, lng); 
      res.json(response.data); 
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
};

async function populateTrail() {
  try {
    const response = await axios.get(`https://www.hikingproject.com/data/get-trails?lat=${lat}&lon=${lon}&key=${process.env.BASE_URL}`)
      .then(function (response) { 
        let { lat, lon } = response.data.
      })
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}