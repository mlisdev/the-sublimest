const mongoose = require('mongoose');

const trailSchema = new mongoose.Schema({
    trailID: api_id, 
    trails: { type: Schema.Types.ObjectId, ref: 'Trails' }, 
}, {
  timestamps: true
});


module.exports = mongoose.model('Trail', trailSchema);