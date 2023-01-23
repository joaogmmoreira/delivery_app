const jwt = require('jsonwebtoken');

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const secret = 'secret_key';

const createToken = (user) => {
  const token = jwt.sign({ data: { email: user.email } }, secret, jwtConfig);
  return token;
};

module.exports = createToken;
