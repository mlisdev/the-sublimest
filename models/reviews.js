const mongoose = require('mongoose');

const reviewsSchema = new mongoose.Schema({
    review: String, 
    rating: { type: Number, min: 1, max: 5, default: 5 }, 
    updates: String, 
    covid: String, 
    trails: { type: Schema.Types.ObjectId, ref: 'Trails' }, 
}, {
  timestamps: true
});


module.exports = mongoose.model('Reviews', reviewsSchema);