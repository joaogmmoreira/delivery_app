const crypto = require('crypto');
const { User } = require('../database/models');
const createToken = require('../utils/jwtConfig');

const registerNewUser = async (data) => {
  const { email, password, name } = data;

  const verifyUser = await User.findOne({ where: { email } });

  if (verifyUser) {
    return { type: 409, message: 'User already exists' };
  }

  const hash = crypto.createHash('md5').update(password).digest('hex');

  const registeredUser = await User.create({
    name,
    email,
    password: hash,
    role,
  });
  console.log('oi', registeredUser);
  const { role } = registeredUser.dataValues;

  const token = createToken(registeredUser);

  return { type: null, message: { name, email, role, token } };
};

module.exports = {
  registerNewUser,
};
