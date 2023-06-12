const swaggerAutogen = require('swagger-autogen')();
const { options } = require('./utils/swaggerOptions');

const outputFile = './swagger_output.json';
const endpointsFiles = ['./src/routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, options);
