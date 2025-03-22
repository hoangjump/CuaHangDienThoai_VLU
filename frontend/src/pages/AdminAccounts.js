import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AdminAccounts = () => {
  const [admins, setAdmins] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const response = await axios.get('/api/admin/accounts');
        setAdmins(response.data);
      } catch (error) {
        console.error('Error fetching admin accounts:', error);
      }
    };

    fetchAdmins();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('delete this account?')) {
      try {
        await axios.delete(`/api/admin/accounts/${id}`);
        setAdmins(admins.filter(admin => admin.id !== id));
        setMessage('Admin account deleted successfully!');
      } catch (error) {
        console.error('Error deleting admin account:', error);
        setMessage('Failed to delete admin account.');
      }
    }
  };

  return (
    <section className="accounts">
      <h1 className="heading">Tài khoản admin</h1>
      <div className="box-container">
        <div className="box">
          <p>Thêm admin</p>
          <Link to="/register-admin" className="option-btn">Đăng kí admin</Link>
        </div>
        {admins.length > 0 ? (
          admins.map(admin => (
            <div className="box" key={admin.id}>
              <p> ID admin : <span>{admin.id}</span> </p>
              <p> Tên admin : <span>{admin.name}</span> </p>
              <div className="flex-btn">
                <button onClick={() => handleDelete(admin.id)} className="delete-btn">Xóa</button>
                {admin.id === parseInt(localStorage.getItem('admin_id')) && (
                  <Link to="/update-profile" className="option-btn">Cập nhật</Link>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="empty">Chưa có tài khoản admin nào!</p>
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

export default AdminAccounts;
