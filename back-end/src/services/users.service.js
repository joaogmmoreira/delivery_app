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

const serviceDeleteById = async (id) => {
  const deleteUser = await User.findByPk(id);
  await deleteUser.destroy()

  return { type: null, message: deleteUser }
}

module.exports = {
  getUserById,
  getAllUsers,
  serviceDeleteById,
};
