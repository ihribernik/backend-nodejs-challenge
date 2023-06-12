const options = {
  // openapi: '3.0.0',
  info: {
    title: 'Development Challenge for Node.js',
    version: '0.1.0',
    description:
      'This challenge aims to evaluate basic skills in Node.js development, and a bit of data/entity modeling. The idea is to build an HTTP REST API.',
    license: {
      name: 'MIT',
      url: 'https://spdx.org/licenses/MIT.html',
    },
    contact: {
      name: 'claudio ivan hribernik',
      url: 'github.com/ihribernik/backend-nodejs-challenge',
      email: 'cihribernik@gmail.com',
    },
  },
  host: 'localhost:5000/api/v1',
};

module.exports = { options };
