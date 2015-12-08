'use strict';

var _ = require('lodash');
var Property = require('./property.model');
var Service = require('../service/service.model');

// Get list of propertys
exports.index = function(req, res) {
  Property.find(function (err, propertys) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(propertys);
  });
};

// Get a single property
exports.show = function(req, res) {
  Property.findById(req.params.id, function (err, property) {
    if(err) { return handleError(res, err); }
    if(!property) { return res.status(404).send('Not Found'); }
    return res.json(property);
  });
};

// Creates a new property in the DB.
exports.create = function(req, res) {
  console.log(req.body)
  Property.create(req.body, function(err, property) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(property);
  });
};

// Updates an existing property in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Property.findById(req.params.id, function (err, property) {
    if (err) { return handleError(res, err); }
    if(!property) { return res.status(404).send('Not Found'); }
    var updated = _.merge(property, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(property);
    });
  });
};

// Deletes a property from the DB.
exports.destroy = function(req, res) {
  Property.findById(req.params.id, function (err, property) {
    if(err) { return handleError(res, err); }
    if(!property) { return res.status(404).send('Not Found'); }
    property.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}