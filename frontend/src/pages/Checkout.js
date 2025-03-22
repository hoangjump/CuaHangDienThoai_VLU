import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [grandTotal, setGrandTotal] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    method: 'cash on delivery',
    flat: '',
    city: ''
  });
  const history = useHistory();

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const orderData = {
        ...formData,
        total_products: cartItems.map(item => `${item.name} (${item.price} x ${item.quantity})`).join(' - '),
        total_price: grandTotal
      };
      await axios.post('/api/orders', orderData);
      await axios.delete('/api/cart');
      history.push('/orders');
    } catch (error) {
      console.error('Error placing order:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="checkout-orders">
      <form onSubmit={handleSubmit}>
        <h3>Giỏ hàng</h3>
        <div className="display-orders">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <p key={item.id}>
                {item.name} <span>({item.price.toLocaleString()} x {item.quantity}) VND</span>
              </p>
            ))
          ) : (
            <p className="empty">Giỏ hàng của bạn đang trống!</p>
          )}
          <div className="grand-total">Tổng tiền: <span>{grandTotal.toLocaleString()} VND</span></div>
        </div>
        <h3>Nơi đặt hàng</h3>
        <div className="flex">
          <div className="inputBox">
            <span>Tên khách hàng:</span>
            <input
              type="text"
              name="name"
              placeholder="Nhập tên của bạn"
              className="box"
              maxLength="20"
              required
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="inputBox">
            <span>Số điện thoại:</span>
            <input
              type="number"
              name="number"
              placeholder="Số điện thoại của bạn"
              className="box"
              min="0"
              max="9999999999"
              required
              value={formData.number}
              onChange={handleInputChange}
            />
          </div>
          <div className="inputBox">
            <span>Email:</span>
            <input
              type="email"
              name="email"
              placeholder="Nhập email của bạn"
              className="box"
              maxLength="50"
              required
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="inputBox">
            <span>Phương thức thanh toán:</span>
            <select
              name="method"
              className="box"
              required
              value={formData.method}
              onChange={handleInputChange}
            >
              <option value="cash on delivery">Tiền mặt</option>
              <option value="credit card">Credit card</option>
              <option value="paytm">Paytm</option>
              <option value="paypal">Paypal</option>
            </select>
          </div>
          <div className="inputBox">
            <span>Địa chỉ:</span>
            <input
              type="text"
              name="flat"
              placeholder="Địa chỉ của bạn"
              className="box"
              maxLength="50"
              required
              value={formData.flat}
              onChange={handleInputChange}
            />
          </div>
          <div className="inputBox">
            <span>Thành phố:</span>
            <input
              type="text"
              name="city"
              placeholder="Thành phố"
              className="box"
              maxLength="50"
              required
              value={formData.city}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <button type="submit" className="btn" disabled={cartItems.length === 0}>Hoàn thành đơn hàng</button>
      </form>
    </section>
  );
};

export default Checkout;
