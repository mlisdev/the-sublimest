const Trails = require('../../models/trails');

module.exports = {
  index,
  show,
  create,
  delete: deleteOne,
  update
};

async function index(req, res) {
  const trails = await Puppy.find({});
  res.status(200).json(trails);
}

async function show(req, res) {
  const trail = await Trail.findById(req.params.id);
  res.status(200).json(trail);
}

async function create(req, res) {
  const trail = await Trail.create(req.body);
  res.status(201).json(trail);
}

async function deleteOne(req, res) {
  const deletedTrail = await Trail.findByIdAndRemove(req.params.id);
  res.status(200).json(deletedTrail);
}

async function update(req, res) {
  const updatedTrail = await Trail.findByIdAndUpdate(req.params.id, req.body, {new: true});
  res.status(200).json(updatedPuppy);
}