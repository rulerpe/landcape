'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PropertySchema = new Schema({
  address: String,
  services: [{ type: mongoose.Schema.Types.ObjectId, ref:'Service'}],
});

module.exports = mongoose.model('Property', PropertySchema);