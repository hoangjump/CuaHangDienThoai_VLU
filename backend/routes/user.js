const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/login', userController.login);
router.post('/register', userController.register);
router.post('/logout', userController.logout);
router.get('/orders', userController.getOrders);
router.post('/order', userController.placeOrder);
router.get('/wishlist', userController.getWishlist);
router.post('/wishlist', userController.addToWishlist);
router.delete('/wishlist/:id', userController.removeFromWishlist);
router.get('/cart', userController.getCart);
router.post('/cart', userController.addToCart);
router.put('/cart/:id', userController.updateCart);
router.delete('/cart/:id', userController.removeFromCart);
router.get('/profile', userController.getProfile);
router.put('/profile', userController.updateProfile);

module.exports = router;
