const { User } = require('../database/models');
const createToken = require('../utils/jwtConfig');
const crypto = require('crypto');

const login = async ({ email, password }) => {
  //  referencia https://stackoverflow.com/questions/5878682/node-js-hash-string
  const hash = crypto.createHash('md5').update(password).digest('hex');
  const user = await User.findOne({ where: { email } });

  if (!user || user.password !== hash) {
    return { type: 'INVALID_FIELDS', message: 'Invalid fields' };
  }

  const { dataValues } = user;

  const { password: _, ...payload } = dataValues;

  const token = createToken(payload);
  const { id, name, role } = payload;
  return { type: null, message: { name, email, id, role, token } };
};

module.exports = {
  login,
};
