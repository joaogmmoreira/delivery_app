const crypto = require('crypto');
const { User } = require('../database/models');
const createToken = require('../utils/jwtConfig');

const login = async ({ email, password }) => {
  //  referencia https://stackoverflow.com/questions/5878682/node-js-hash-string
  const hash = crypto.createHash('md5').update(password).digest('hex');
  const user = await User.findOne({ where: { email } });

  if (!user || user.password !== hash) {
    return { type: 404, message: 'Invalid fields' };
  }

  const { name, id, role } = user.dataValues;

  const token = createToken(user);
  
  return { type: null, message: { name, email, id, role, token } };
};

const registerUser = async (data) => {
  const { email, password, name } = data;

  const verifyUser = await User.findOne({ where: { email } });

  if (verifyUser) {
    return { type: 409, message: 'User already exists' };  
  }

  const hash = crypto.createHash('md5').update(password).digest('hex');

  const registeredUser = await User.create({ name, email, password: hash, role: 'customer' });

  const { role } = registeredUser.dataValues;
  
  const token = createToken(registeredUser);

  return { type: null, message: { name, email, role, token } };
};

module.exports = {
  login,
  registerUser,
};
