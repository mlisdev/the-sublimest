const express = require('express');
const router = express.Router();
const trailsCtrl = require('../../controllers/trailsapi');

/*---------- Public Routes ----------*/
router.get('/search/:zipcode', trailsCtrl.searchTrails);
// router.post('/', trailsCtrl.);
router.get('/details/:id', trailsCtrl.getOne);


/*---------- Protected Routes ----------*/
module.exports = router;