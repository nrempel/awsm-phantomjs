'use strict'

var Promise = require('bluebird');
var page = require('webpage').create();

/**
 * Renders an image of a website
 *
 * @param url
 * @returns Image buffer
 */
exports.screenCapture = function (url) {

  page.viewportSize = {
    width: 200,
    height: 200
  };

  var promise = new Promise(function (resolve, reject) {
    
    page.open(url, function (status) {

      if (status !== 'success') {
        Promise.reject(new Error('Unable to open url ' + url));
        return;
      }

      var base64Image = page.renderBase64('PNG');
      var decodedImage = new Buffer(base64Image, 'base64');
      phantom.exit();

      Promise.resolve(decodedImage);

    });
  });

  return promise;

};