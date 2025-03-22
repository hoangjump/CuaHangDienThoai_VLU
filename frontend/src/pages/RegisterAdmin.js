import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const RegisterAdmin = () => {
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');
  const [cpass, setCpass] = useState('');
  const [message, setMessage] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (pass !== cpass) {
      setMessage('Mật khẩu xác nhận không khớp!');
      return;
    }
    try {
      const response = await axios.post('/api/admin/register', { name, pass });
      if (response.data.adminId) {
        setMessage('Đăng ký admin mới thành công!');
        history.push('/admin-accounts');
      } else {
        setMessage('Tên người dùng đã tồn tại!');
      }
    } catch (error) {
      setMessage('Đăng ký admin mới thất bại!');
    }
  };

  return (
    <section className="form-container">
      <form onSubmit={handleSubmit}>
        <h3>Đăng ký ngay</h3>
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
        <input
          type="password"
          name="cpass"
          required
          placeholder="Xác nhận mật khẩu"
          maxLength="20"
          className="box"
          value={cpass}
          onChange={(e) => setCpass(e.target.value)}
        />
        <input type="submit" value="Đăng ký ngay" className="btn" />
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

export default RegisterAdmin;
