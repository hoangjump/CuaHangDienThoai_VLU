const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100
  },
  price: {
    type: Number,
    required: true,
    min: 0,
    max: 9999999999
  },
  details: {
    type: String,
    required: true,
    trim: true,
    maxlength: 500
  },
  image_01: {
    type: String,
    required: true,
    trim: true
  },
  image_02: {
    type: String,
    required: true,
    trim: true
  },
  image_03: {
    type: String,
    required: true,
    trim: true
  }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
