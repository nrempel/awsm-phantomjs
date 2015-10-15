'use strict';

var phantomJS = require('awsm-phantomjs').screenCapture;

exports.run = function(event, context, cb) {
  
  if (!event.url) {
    return cb(new Error('Missing url parameter'));
  }

  phantomJS.screenCapture(event.url).then(function (imageBuffer) {
    return cb(null, imageBuffer);
  }).catch(function (e) {
    return cb(e);
  });
};
