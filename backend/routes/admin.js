const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const authMiddleware = require('../middleware/auth');

router.post('/login', adminController.login);
router.post('/register', authMiddleware.isAdmin, adminController.register);
router.get('/accounts', authMiddleware.isAdmin, adminController.getAccounts);
router.delete('/accounts/:id', authMiddleware.isAdmin, adminController.deleteAccount);
router.post('/products', authMiddleware.isAdmin, adminController.addProduct);
router.put('/products/:id', authMiddleware.isAdmin, adminController.updateProduct);
router.delete('/products/:id', authMiddleware.isAdmin, adminController.deleteProduct);
router.get('/messages', authMiddleware.isAdmin, adminController.getMessages);
router.delete('/messages/:id', authMiddleware.isAdmin, adminController.deleteMessage);
router.get('/orders', authMiddleware.isAdmin, adminController.getOrders);
router.put('/orders/:id', authMiddleware.isAdmin, adminController.updateOrderStatus);
router.delete('/orders/:id', authMiddleware.isAdmin, adminController.deleteOrder);

module.exports = router;
