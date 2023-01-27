const jwt = require('jsonwebtoken');
const fs = require('fs');

const secret = fs.readFileSync('jwt.evaluation.key', { encoding: 'utf-8' });

const validateAdmin = async (req, res, next) => {
  try {
    if (!req.headers.authorization) return res.status(409).json({ message: 'not authorization' });
    const { authorization } = req.headers;
    console.log('authorization na validateAdmRole', authorization);
    const { role } = jwt.verify(authorization, secret);
    if (!role || role !== 'administrator') return res.status(409).json({ message: 'No adm user' });
    next();
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

module.exports = {
  validateAdmin,
};