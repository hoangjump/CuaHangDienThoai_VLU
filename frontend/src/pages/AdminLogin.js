import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const AdminLogin = () => {
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');
  const [message, setMessage] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/admin/login', { name, pass });
      if (response.data.adminId) {
        history.push('/admin-dashboard');
      } else {
        setMessage('Tên đăng nhập hoặc mật khẩu không đúng!');
      }
    } catch (error) {
      setMessage('Tên đăng nhập hoặc mật khẩu không đúng!');
    }
  };

  return (
    <section className="form-container">
      <form onSubmit={handleSubmit}>
        <h3>Đăng nhập</h3>
        <p>Tên đăng nhập mặc định = <span>admin</span> & mật khẩu mặc định = <span>111</span></p>
        <input
          type="text"
          name="name"
          required
          placeholder="Nhập tên đăng nhập"
          maxLength="20"
          className="box"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="password"
          name="pass"
          required
          placeholder="Nhập mật khẩu"
          maxLength="20"
          className="box"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <input type="submit" value="Đăng nhập" className="btn" />
        {message && (
          <div className="message">
            <span>{message}</span>
            <i className="fas fa-times" onClick={() => setMessage('')}></i>
          </div>
        )}
      </form>
    </section>
  );
};

export default AdminLogin;
