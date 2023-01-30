const jwt = require('jsonwebtoken');
const fs = require('fs');

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const secret = fs.readFileSync('jwt.evaluation.key', { encoding: 'utf-8' });

const createToken = (payload) => {
  const token = jwt.sign(payload, secret, jwtConfig);
  return token;
};

module.exports = createToken;
