import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/user/login', { email, password });
      localStorage.setItem('token', response.data.token);
      history.push('/user-dashboard');
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <section className="form-container">
      <form onSubmit={handleSubmit}>
        <h3>Đăng nhập</h3>
        {error && <p className="error">{error}</p>}
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
        <input type="submit" value="Đăng nhập" className="btn" />
      </form>
    </section>
  );
};

export default UserLogin;
