const express = require('express');
const router = express.Router();
const trailsCtrl = require('../../controllers/trailsapi');

/*---------- Public Routes ----------*/
router.get('/search/:zipcode', trailsCtrl.searchTrails);
// router.post('/', trailsCtrl.);


/*---------- Protected Routes ----------*/




module.exports = router;