const { User } = require('../database/models');

const getUserById = async (id) => {
  const user = await User.findOne({
    where: {
      id,
    },
  });

  return { type: null, message: user };
};

const getAllUsers = async () => {
  const allUsers = await User.findAll();

  return { type: null, message: allUsers };
};

module.exports = {
  getUserById,
  getAllUsers,
};
