const Review = require('../../models/review');

module.exports = {
  index,
  show,
  create,
  delete: deleteOne,
  update
};

async function index(req, res) {
  const reviews = await Review.find({});
  res.status(200).json(reviews);
}

async function show(req, res) {
  const review = await Review.findById(req.params.id);
  res.status(200).json(review);
}

async function create(req, res) {
    req.body.trailId = req.params.id; 
  const review = await Review.create(req.body);
  res.status(201).json(review);
}

async function deleteOne(req, res) {
  const deletedReview = await Review.findByIdAndRemove(req.params.id);
  res.status(200).json(deletedReview);
}

async function update(req, res) {
  const updatedReview = await Review.findByIdAndUpdate(req.params.id, req.body, {new: true});
  res.status(200).json(updatedReview);
}