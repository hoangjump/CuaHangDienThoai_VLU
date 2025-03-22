import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const UserAccounts = () => {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('/api/admin/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching user accounts:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Xóa người dùng này ? Tất cả thông tin của khách hàng sẽ mất!')) {
      try {
        await axios.delete(`/api/admin/users/${id}`);
        setUsers(users.filter(user => user.id !== id));
        setMessage('User account deleted successfully!');
      } catch (error) {
        console.error('Error deleting user account:', error);
        setMessage('Failed to delete user account.');
      }
    }
  };

  return (
    <section className="accounts">
      <h1 className="heading">Người dùng tài khoản</h1>
      <div className="box-container">
        {users.length > 0 ? (
          users.map(user => (
            <div className="box" key={user.id}>
              <p> ID người dùng: <span>{user.id}</span> </p>
              <p> Tên người dùng: <span>{user.name}</span> </p>
              <p> Email : <span>{user.email}</span> </p>
              <button onClick={() => handleDelete(user.id)} className="delete-btn">Xóa</button>
            </div>
          ))
        ) : (
          <p className="empty">Chưa có tài khoản người dùng nào</p>
        )}
      </div>
      {message && (
        <div className="message">
          <span>{message}</span>
          <i className="fas fa-times" onClick={() => setMessage('')}></i>
        </div>
      )}
    </section>
  );
};

export default UserAccounts;
