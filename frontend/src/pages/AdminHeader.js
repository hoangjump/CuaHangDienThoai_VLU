import React from 'react';
import { Link } from 'react-router-dom';

const AdminHeader = () => {
  return (
    <header className="header">
      <section className="flex">
        <Link to="/admin-dashboard" className="logo">Admin<span></span></Link>
        <nav className="navbar">
          <Link to="/admin-dashboard">Trang chủ</Link>
          <Link to="/products">Sản phẩm</Link>
          <Link to="/placed-orders">Đặt hàng</Link>
          <Link to="/admin-accounts">Admin</Link>
          <Link to="/user-accounts">Khách hàng</Link>
          <Link to="/messages">Lời nhắn</Link>
        </nav>
        <div className="icons">
          <div id="menu-btn" className="fas fa-bars"></div>
          <div id="user-btn" className="fas fa-user"></div>
        </div>
        <div className="profile">
          <p>Admin Name</p>
          <Link to="/update-profile" className="btn">Cập nhật thông tin</Link>
          <div className="flex-btn">
            <Link to="/register-admin" className="option-btn">Đăng ký</Link>
            <Link to="/admin-login" className="option-btn">Đăng nhập</Link>
          </div>
          <Link to="/admin-logout" className="delete-btn" onClick={() => confirm('logout from the website?')}>logout</Link>
        </div>
      </section>
    </header>
  );
};

export default AdminHeader;
