const app = require('./app');
const { logger } = require('./utils/logger');
const { NODE_ENV } = process.env;

const port = process.env.PORT || 5000;
app.listen(port, () => {
  logger.info(`Listening: http://localhost:${port}/api/v1`);
  if (NODE_ENV === 'development') {
    logger.info(`Documentation on: http://localhost:${port}/api-docs`);
  }
});
