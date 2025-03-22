const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const Admin = require('../models/adminModel');

exports.isAuthenticated = async (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, 'your_secret_key');
    req.user = await User.findById(decoded.userId);
    next();
  } catch (error) {
    res.status(400).json({ message: 'Invalid token.' });
  }
};

exports.isAdmin = async (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, 'your_secret_key');
    const admin = await Admin.findById(decoded.userId);
    if (!admin) {
      return res.status(403).json({ message: 'Access denied. Admins only.' });
    }
    req.admin = admin;
    next();
  } catch (error) {
    res.status(400).json({ message: 'Invalid token.' });
  }
};
