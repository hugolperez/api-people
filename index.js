const express = require('express');
const app = express();
const debug = require('debug')('app:server');

const { config } = require('./config/index');
const peopleApi = require('./routes/people');
const { logErrors, wrapErrors, errorHandler } = require('./utils/middleware/errorHandlers');
const notFoundHandler = require('./utils/middleware/notFoundHandler');

// middleware body parser
app.use(express.json());

// routes
peopleApi(app);

// 404 middleware
app.use(notFoundHandler);

// Error middleware
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, function () {
  debug(`Listening http://localhost:${config.port}`);
});
