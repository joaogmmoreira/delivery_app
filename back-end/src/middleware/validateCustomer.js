const jwt = require('jsonwebtoken');
const fs = require('fs');

const secret = fs.readFileSync('jwt.evaluation.key', { encoding: 'utf-8' });

const validateCustomer = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).json({ message: 'not authorization' });
    console.log('my token here', authorization)
    const { role } = jwt.verify(authorization, secret);
    if (!role || role !== 'customer') return res.status(409).json({ message: 'User has to be a customer' });
    next();
  } catch (err) {
    console.log('Caiu aqui')
    return res.status(500).json({ message: err });
  }
};

module.exports = {
  validateCustomer
}
