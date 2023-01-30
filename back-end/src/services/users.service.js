const { User } = require('../database/models')

const getAllUsers = async (id) => {
  const allUsers = await User.findAll({
    where: {
      id,
    },
  });

  return { type: null, message: allUsers };
};

module.exports = {
  getAllUsers
}
