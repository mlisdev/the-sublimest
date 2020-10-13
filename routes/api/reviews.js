var express = require('express');
var router = express.Router();
var reviewsCtrl = require('../../controllers/api/reviews');

/* GET /api/puppies */
router.get('/', reviewsCtrl.index);
router.post('/', reviewsCtrl.create);
router.delete('/:id', reviewsCtrl.delete);
router.put('/:id', reviewsCtrl.update);

module.exports = router;