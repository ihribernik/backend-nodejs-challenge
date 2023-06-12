const jwt = require('jsonwebtoken');

function encodeToken(user, expireTimeInMinutes, secret) {
  const { id, ...userData } = user;

  const payload = {
    sub: id,
    ...userData,
  };

  return jwt.sign(payload, secret, {
    algorithm: 'HS256',
    expiresIn: expireTimeInMinutes * 60,
  });
}

function decodeToken(token, secret) {
  if (!token) return null;

  return jwt.verify(token, secret);
}

module.exports = {
  encodeToken,
  decodeToken,
};
