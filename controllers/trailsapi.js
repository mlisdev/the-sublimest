const axios = require('axios');

module.exports = {
  searchTrails, 
};

function searchTrails(req, res) { 
  axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${req.params.zipcode}&key=${process.env.GOOGLE_KEY}`)
    .then(function (response) {
      // console.log(response);
      let { lat, lng } = response.data.results[0].geometry.location; 
      axios.get(`https://www.hikingproject.com/data/get-trails?lat=${lat}&lon=${lng}&key=${process.env.HIKE_KEY}`)
      .then(function (response) { 
        res.json(response.data)
      })
        .catch(function (error) {
              // handle error
          console.log(error);
            })
          console.log(lat, lng); 
          // res.json(response.data); 
          })
        .catch(function (error) {
            // handle error
          console.log(error);
          })
        };
