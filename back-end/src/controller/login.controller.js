const { loginService } = require('../services');

const validateLogin = async (req, res) => {
  const { email, password } = req.body;

  const { type, message } = await loginService.login({ email, password });

  if (type) {
    return res.status(type).json({ message });
  }
  return res.status(200).json({ user: message });
};

const registerUser = async (req, res) => {
  const data = req.body;

  const { type, message } = await loginService.registerUser(data);

  if (type) {
    return res.status(type).json({ message })
  }
  return res.status(201).json({ user: message });
}

module.exports = {
  validateLogin,
  registerUser,
};
