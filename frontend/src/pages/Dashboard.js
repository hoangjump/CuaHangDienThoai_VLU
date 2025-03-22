import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [admin, setAdmin] = useState(null);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const response = await axios.get('/api/admin/accounts');
        setAdmin(response.data);
      } catch (error) {
        console.error('Error fetching admin data:', error);
      }
    };

    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/admin/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    const fetchOrders = async () => {
      try {
        const response = await axios.get('/api/admin/orders');
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    const fetchMessages = async () => {
      try {
        const response = await axios.get('/api/admin/messages');
        setMessages(response.data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchAdminData();
    fetchProducts();
    fetchOrders();
    fetchMessages();
  }, []);

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      {admin && (
        <div className="admin-info">
          <h2>Welcome, {admin.name}</h2>
          <Link to="/update-profile" className="btn">Update Profile</Link>
        </div>
      )}
      <div className="dashboard-section">
        <h2>Products</h2>
        <Link to="/products" className="btn">Manage Products</Link>
        <ul>
          {products.map(product => (
            <li key={product._id}>{product.name} - {product.price} VND</li>
          ))}
        </ul>
      </div>
      <div className="dashboard-section">
        <h2>Orders</h2>
        <Link to="/placed-orders" className="btn">Manage Orders</Link>
        <ul>
          {orders.map(order => (
            <li key={order._id}>{order.name} - {order.total_price} VND</li>
          ))}
        </ul>
      </div>
      <div className="dashboard-section">
        <h2>Messages</h2>
        <Link to="/messages" className="btn">Manage Messages</Link>
        <ul>
          {messages.map(message => (
            <li key={message._id}>{message.name} - {message.message}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
