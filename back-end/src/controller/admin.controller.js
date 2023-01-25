const { adminService } = require('../services');

const registerNewUser = async (req, res) => {
  const data = req.body;

  const { type, message } = await adminService.registerNewUser(data);

  if (type) {
    return res.status(type).json({ message });
  }
  return res.status(201).json({ user: message });
};

module.exports = { registerNewUser };
