import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const UserRegister = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Mật khẩu xác nhận không khớp');
      return;
    }
    try {
      await axios.post('/api/user/register', { name, email, password });
      history.push('/user-login');
    } catch (err) {
      setError('Đăng ký thất bại');
    }
  };

  return (
    <section className="form-container">
      <form onSubmit={handleSubmit}>
        <h3>Đăng ký</h3>
        {error && <p className="error">{error}</p>}
        <input
          type="text"
          name="name"
          required
          placeholder="Nhập tên"
          className="box"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Nhập email"
          className="box"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          required
          placeholder="Nhập mật khẩu"
          className="box"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          name="confirmPassword"
          required
          placeholder="Xác nhận mật khẩu"
          className="box"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <input type="submit" value="Đăng ký" className="btn" />
      </form>
    </section>
  );
};

export default UserRegister;
