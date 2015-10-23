'use strict';

var url = require('url');


var Default = require('./DefaultService');


module.exports.outagesAvcGet = function outagesAvcGet (req, res, next) {
  var avc = req.swagger.params['avc'].value;
  var contentType = req.swagger.params['content_type'].value;
  var callback = req.swagger.params['callback'].value;
  

  var result = Default.outagesAvcGet(avc, contentType, callback);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.outagesFnnGet = function outagesFnnGet (req, res, next) {
  var fnn = req.swagger.params['fnn'].value;
  var contentType = req.swagger.params['content_type'].value;
  var callback = req.swagger.params['callback'].value;
  

  var result = Default.outagesFnnGet(fnn, contentType, callback);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.outagesMacGet = function outagesMacGet (req, res, next) {
  var mac = req.swagger.params['mac'].value;
  var contentType = req.swagger.params['content_type'].value;
  var callback = req.swagger.params['callback'].value;
  

  var result = Default.outagesMacGet(mac, contentType, callback);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.outagesStreetAddressGet = function outagesStreetAddressGet (req, res, next) {
  var contentType = req.swagger.params['content_type'].value;
  var number = req.swagger.params['number'].value;
  var street = req.swagger.params['street'].value;
  var locality = req.swagger.params['locality'].value;
  var state = req.swagger.params['state'].value;
  var lat = req.swagger.params['lat'].value;
  var lpm = req.swagger.params['lpm'].value;
  var callback = req.swagger.params['callback'].value;
  

  var result = Default.outagesStreetAddressGet(contentType, number, street, locality, state, lat, lpm, callback);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.outagesWifiGet = function outagesWifiGet (req, res, next) {
  var wifi = req.swagger.params['wifi'].value;
  var contentType = req.swagger.params['content_type'].value;
  var callback = req.swagger.params['callback'].value;
  

  var result = Default.outagesWifiGet(wifi, contentType, callback);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};
