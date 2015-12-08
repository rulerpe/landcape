'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ServiceSchema = new Schema({
  name: String,
  title:String,
  timeSpent: Number,
  date: Date,
  property: { type: mongoose.Schema.Types.ObjectId, ref:'Property'}
  
});

module.exports = mongoose.model('Service', ServiceSchema);