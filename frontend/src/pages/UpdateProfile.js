import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateProfile = () => {
  const [name, setName] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/api/user/profile', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setName(response.data.name);
      } catch (err) {
        console.error('Failed to fetch profile', err);
      }
    };

    fetchProfile();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError('Mật khẩu không trùng khớp!');
      return;
    }
    try {
      const token = localStorage.getItem('token');
      await axios.put(
        '/api/user/profile',
        { name, oldPassword, newPassword },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setSuccess('Cập nhật hồ sơ thành công');
      setError('');
    } catch (err) {
      setError('Cập nhật hồ sơ thất bại');
      setSuccess('');
    }
  };

  return (
    <section className="form-container">
      <form onSubmit={handleSubmit}>
        <h3>Cập nhật hồ sơ</h3>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
        <input
          type="text"
          name="name"
          value={name}
          required
          placeholder="Nhập tên người dùng"
          className="box"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="password"
          name="oldPassword"
          placeholder="Nhập mật khẩu cũ"
          className="box"
          onChange={(e) => setOldPassword(e.target.value)}
        />
        <input
          type="password"
          name="newPassword"
          placeholder="Nhập mật khẩu mới"
          className="box"
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Xác nhận lại mật khẩu"
          className="box"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <input type="submit" value="Cập nhật" className="btn" />
      </form>
    </section>
  );
};

export default UpdateProfile;
