const crypto = require('crypto');
const { User } = require('../database/models');
const createToken = require('../utils/jwtConfig');

const registerNewUser = async (data) => {
  const { email, password, name, role } = data;

  const verifyEmailUser = await User.findOne({ where: { email } });
  const verifyNameUser = await User.findOne({ where: { name } });

  if (!verifyEmailUser || !verifyNameUser) {
    
  }
  return { type: 409, message: 'User already exists' };

  const hash = crypto.createHash('md5').update(password).digest('hex');

  const registeredUser = await User.create({
    name,
    email,
    password: hash,
    role,
  });
  const obj = {
    name,
    email,
    password: hash,
    role,
  };
  const token = createToken(obj);

  return { type: null, message: { name, email, role, token } };
};

module.exports = {
  registerNewUser,
};
