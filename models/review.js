const mongoose = require('mongoose');

const reviewsSchema = new mongoose.Schema({
    review: String, 
    rating: { type: Number, min: 1, max: 5, default: 5 }, 
    updates: String, 
    covid: String, 
    trailId: { type: mongoose.Schema.Types.ObjectId, ref: 'Trails' }, 
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
}, {
  timestamps: true
});


module.exports = mongoose.model('Reviews', reviewsSchema);