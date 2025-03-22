import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateUser = () => {
  const [user, setUser] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/api/user/profile', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(response.data);
        setName(response.data.name);
        setEmail(response.data.email);
      } catch (err) {
        console.error('Failed to fetch user data', err);
      }
    };

    fetchUserData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Mật khẩu xác nhận không khớp');
      return;
    }
    try {
      const token = localStorage.getItem('token');
      await axios.put(
        '/api/user/profile',
        { name, email, password },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setSuccess('Cập nhật thông tin thành công');
    } catch (err) {
      setError('Cập nhật thông tin thất bại');
    }
  };

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <section className="form-container">
      <form onSubmit={handleSubmit}>
        <h3>Cập nhật thông tin</h3>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
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
          placeholder="Nhập mật khẩu mới"
          className="box"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Xác nhận mật khẩu mới"
          className="box"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <input type="submit" value="Cập nhật" className="btn" />
      </form>
    </section>
  );
};

export default UpdateUser;
