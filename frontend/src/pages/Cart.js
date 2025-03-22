import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [grandTotal, setGrandTotal] = useState(0);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get('/api/cart');
        setCartItems(response.data);
        calculateGrandTotal(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching cart items:', error);
        setLoading(false);
      }
    };

    fetchCartItems();
  }, []);

  const calculateGrandTotal = (items) => {
    const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setGrandTotal(total);
  };

  const handleUpdateQty = async (cartId, qty) => {
    try {
      await axios.put(`/api/cart/${cartId}`, { quantity: qty });
      const updatedCartItems = cartItems.map((item) =>
        item.id === cartId ? { ...item, quantity: qty } : item
      );
      setCartItems(updatedCartItems);
      calculateGrandTotal(updatedCartItems);
    } catch (error) {
      console.error('Error updating cart quantity:', error);
    }
  };

  const handleDeleteItem = async (cartId) => {
    try {
      await axios.delete(`/api/cart/${cartId}`);
      const updatedCartItems = cartItems.filter((item) => item.id !== cartId);
      setCartItems(updatedCartItems);
      calculateGrandTotal(updatedCartItems);
    } catch (error) {
      console.error('Error deleting cart item:', error);
    }
  };

  const handleDeleteAll = async () => {
    try {
      await axios.delete('/api/cart');
      setCartItems([]);
      setGrandTotal(0);
    } catch (error) {
      console.error('Error deleting all cart items:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="products shopping-cart">
      <h3 className="heading">Giỏ hàng</h3>
      <div className="box-container">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <form key={item.id} className="box">
              <Link to={`/quick-view/${item.pid}`} className="fas fa-eye"></Link>
              <img src={item.image} alt={item.name} />
              <div className="name">{item.name}</div>
              <div className="flex">
                <div className="price"><span>{item.price.toLocaleString()} VND</span></div>
                <input
                  type="number"
                  className="qty"
                  min="1"
                  max="99"
                  value={item.quantity}
                  onChange={(e) => handleUpdateQty(item.id, e.target.value)}
                />
                <button type="button" className="fas fa-edit" onClick={() => handleUpdateQty(item.id, item.quantity)}></button>
              </div>
              <div className="sub-total">sub total: <span>{(item.price * item.quantity).toLocaleString()} VND</span></div>
              <button type="button" className="delete-btn" onClick={() => handleDeleteItem(item.id)}>Xóa sản phẩm</button>
            </form>
          ))
        ) : (
          <p className="empty">Giỏ hàng của bạn đang trống</p>
        )}
      </div>
      <div className="cart-total">
        <p>Tổng tiền: <span>{grandTotal.toLocaleString()} VND</span></p>
        <Link to="/shop" className="option-btn">Tiếp tục mua sắm</Link>
        <button type="button" className="delete-btn" onClick={handleDeleteAll} disabled={cartItems.length === 0}>Xóa giỏ hàng</button>
        <Link to="/checkout" className="btn" disabled={cartItems.length === 0}>Tiến hành thanh toán</Link>
      </div>
    </section>
  );
};

export default Cart;
