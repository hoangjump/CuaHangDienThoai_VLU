const Admin = require('../models/adminModel');
const Product = require('../models/productModel');
const Order = require('../models/orderModel');
const Message = require('../models/messageModel');

exports.login = async (req, res) => {
  const { name, password } = req.body;
  const admin = await Admin.findOne({ name, password });
  if (admin) {
    req.session.adminId = admin._id;
    res.status(200).json({ message: 'Login successful', adminId: admin._id });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
};

exports.register = async (req, res) => {
  const { name, password } = req.body;
  const existingAdmin = await Admin.findOne({ name });
  if (existingAdmin) {
    res.status(409).json({ message: 'Admin already exists' });
  } else {
    const newAdmin = new Admin({ name, password });
    await newAdmin.save();
    res.status(201).json({ message: 'Admin registered successfully', adminId: newAdmin._id });
  }
};

exports.getAccounts = async (req, res) => {
  const admins = await Admin.find();
  res.status(200).json(admins);
};

exports.deleteAccount = async (req, res) => {
  const { id } = req.params;
  await Admin.findByIdAndDelete(id);
  res.status(200).json({ message: 'Admin account deleted successfully' });
};

exports.addProduct = async (req, res) => {
  const { name, price, details, image_01, image_02, image_03 } = req.body;
  const newProduct = new Product({ name, price, details, image_01, image_02, image_03 });
  await newProduct.save();
  res.status(201).json({ message: 'Product added successfully', productId: newProduct._id });
};

exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, details, image_01, image_02, image_03 } = req.body;
  await Product.findByIdAndUpdate(id, { name, price, details, image_01, image_02, image_03 });
  res.status(200).json({ message: 'Product updated successfully' });
};

exports.deleteProduct = async (req, res) => {
  const { id } = req.params;
  await Product.findByIdAndDelete(id);
  res.status(200).json({ message: 'Product deleted successfully' });
};

exports.getMessages = async (req, res) => {
  const messages = await Message.find();
  res.status(200).json(messages);
};

exports.deleteMessage = async (req, res) => {
  const { id } = req.params;
  await Message.findByIdAndDelete(id);
  res.status(200).json({ message: 'Message deleted successfully' });
};

exports.getOrders = async (req, res) => {
  const orders = await Order.find();
  res.status(200).json(orders);
};

exports.updateOrderStatus = async (req, res) => {
  const { id } = req.params;
  const { payment_status } = req.body;
  await Order.findByIdAndUpdate(id, { payment_status });
  res.status(200).json({ message: 'Order status updated successfully' });
};

exports.deleteOrder = async (req, res) => {
  const { id } = req.params;
  await Order.findByIdAndDelete(id);
  res.status(200).json({ message: 'Order deleted successfully' });
};
