const boom = require('@hapi/boom');
const { config } = require('../../config');
const debug = require('debug')('app:error');

// middleware de ayuda para agregar el stack o no.
function withErrorStack(error, stack) {
  if (config.dev) {
    return { ...error, stack };
  }

  return error;
}

function logErrors(err, req, res, next) {
  debug(err);
  next(err);
}

// 3er middleware, se convertiran los errores a boom.
function wrapErrors(err, req, res, next) {
  // sí el error no es boom
  if(!err.isBoom) {
    next(boom.badImplementation(err));
  }

  next(err);
}

// Middleware
function errorHandler(err, req, res, next) { // eslint-disable-line
  const { output: { statusCode, payload } } = err;

  res.status(statusCode); // 500 server error por defecto
  res.json(withErrorStack(payload, err.stack));
}

module.exports = {
  logErrors,
  wrapErrors,
  errorHandler
}