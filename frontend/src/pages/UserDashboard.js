import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserDashboard = () => {
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/api/user/dashboard', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(response.data.user);
        setOrders(response.data.orders);
        setWishlist(response.data.wishlist);
        setCart(response.data.cart);
      } catch (err) {
        console.error('Failed to fetch user data', err);
      }
    };

    fetchUserData();
  }, []);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <section className="user-dashboard">
      <h2>Welcome, {user.name}</h2>
      <div className="dashboard-section">
        <h3>Your Orders</h3>
        {orders.length > 0 ? (
          <ul>
            {orders.map((order) => (
              <li key={order.id}>
                <p>Order ID: {order.id}</p>
                <p>Total: {order.total}</p>
                <p>Status: {order.status}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No orders found</p>
        )}
      </div>
      <div className="dashboard-section">
        <h3>Your Wishlist</h3>
        {wishlist.length > 0 ? (
          <ul>
            {wishlist.map((item) => (
              <li key={item.id}>
                <p>{item.name}</p>
                <p>{item.price}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No items in wishlist</p>
        )}
      </div>
      <div className="dashboard-section">
        <h3>Your Cart</h3>
        {cart.length > 0 ? (
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No items in cart</p>
        )}
      </div>
    </section>
  );
};

export default UserDashboard;
