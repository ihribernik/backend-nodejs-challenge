const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
require('dotenv').config();
const { notFound, errorHandler } = require('./middlewares/error');
const api = require('./routes');

const app = express();
const { NODE_ENV } = process.env;

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

if (NODE_ENV === 'development') {
  const swaggerFile = require('../swagger_output.json');
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

  app.get('/', (req, res) => {
    res.redirect('/api-docs');
  });
}

app.use('/api/v1', api);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
