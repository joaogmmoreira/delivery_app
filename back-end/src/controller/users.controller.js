const usersService = require('../services/users.service');

const getAllUsers = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await usersService.getAllUsers(id);

  if (!type) {
    return res.status(200).json({ message });
  }

  res.status(200).json({ message });
};

module.exports = {
  getAllUsers,
};
