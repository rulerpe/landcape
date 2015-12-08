'use strict';

var _ = require('lodash');
var Service = require('./service.model');
var Property = require('../property/property.model');

// Get list of services
exports.index = function(req, res) {
  Property.findById(req.query.id, function(err,property){
    if(err){return handelError(res, err)}
    Service.find({'_id': { $in: property.services}},function (err, services) {
      if(err) { return handleError(res, err); }
      services.property = "property.address";
      return res.status(200).json(services);
    });

  })
  
};

// Get a single service
exports.show = function(req, res) {
  Property.findById(req.params.id, function(err,property){
    if(err){return handelError(res, err)}
    Service.find({'_id': { $not: { $in: property.services}}},function (err, services) {
      if(err) { return handleError(res, err); }
      return res.status(200).json(services);
    });
  })
};

// Creates a new service in the DB.
exports.create = function(req, res) {
 /* Service.create(req.body, function(err, service) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(service);
  });*/
  var service = new Service();
  service.name = req.body.name;
  service.title = req.body.title;
  service.timeSpent = req.body.timeSpent;
  service.date = req.body.date;
  Property.findById(req.body.propertyId, function(err, property){
    if(err) { return handleError(res, err); }
    if(!property) { return res.status(404).send('Not Found'); }
    service.property = property;
    property.services.push(service)
    property.save(function(err){
      if(err){return handleError(res,err);}
      service.save(function(err){
        if(err) return handleError(res,err);
        return res.json(service)           
      })
    })
  })
};

// Updates an existing service in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Service.findById(req.params.id, function (err, service) {
    if (err) { return handleError(res, err); }
    if(!service) { return res.status(404).send('Not Found'); }
    var updated = _.merge(service, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(service);
    });
  });
};

// Deletes a service from the DB.
exports.destroy = function(req, res) {
  Service.findById(req.params.id, function (err, service) {
    if(err) { return handleError(res, err); }
    if(!service) { return res.status(404).send('Not Found'); }
    service.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}