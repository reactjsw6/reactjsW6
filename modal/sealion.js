const mongoose = require('mongoose');

var sealionSchema = new mongoose.Schema({
  name: String,
  food: {type: String, default: 'fish'}
});

module.exports = exports = mongoose.model('sealion', sealionSchema);
