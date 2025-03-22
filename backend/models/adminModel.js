const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    maxlength: 20
  },
  password: {
    type: String,
    required: true,
    trim: true,
    maxlength: 20
  }
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
