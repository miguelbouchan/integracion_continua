'use strict';

module.exports.handler = function(event, context, cb) {
  return cb(null, {
    message: 'ejemplo de prueba'
  });
};
