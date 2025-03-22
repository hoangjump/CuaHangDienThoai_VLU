import React from 'react';
import { Link } from 'react-router-dom';

const UserHeader = ({ user }) => {
  return (
    <header className="header">
      <section className="flex">
        <Link to="/" className="logo">Fstore<span></span></Link>
        <nav className="navbar">
          <Link to="/">Trang chủ</Link>
          <Link to="/about">Chúng tôi</Link>
          <Link to="/orders">Đặt hàng</Link>
          <Link to="/shop">Cửa hàng</Link>
          <Link to="/contact">Liên hệ</Link>
        </nav>
        <div className="icons">
          <div id="menu-btn" className="fas fa-bars"></div>
          <Link to="/search"><i className="fas fa-search"></i></Link>
          <Link to="/wishlist"><i className="fas fa-heart"></i><span>(0)</span></Link>
          <Link to="/cart"><i className="fas fa-shopping-cart"></i><span>(0)</span></Link>
          <div id="user-btn" className="fas fa-user"></div>
        </div>
        <div className="profile">
          {user ? (
            <>
              <p>{user.name}</p>
              <Link to="/update-user" className="btn">Cập nhật thông tin</Link>
              <div className="flex-btn">
                <Link to="/user-register" className="option-btn">Đăng ký</Link>
                <Link to="/user-login" className="option-btn">Đăng nhập</Link>
              </div>
              <Link to="/user-logout" className="delete-btn" onClick={() => confirm('logout from the website?')}>logout</Link>
            </>
          ) : (
            <>
              <p>Vui lòng đăng ký hoặc đăng nhập đầu tiên!</p>
              <div className="flex-btn">
                <Link to="/user-register" className="option-btn">Đăng kí</Link>
                <Link to="/user-login" className="option-btn">Đăng nhập</Link>
              </div>
            </>
          )}
        </div>
      </section>
    </header>
  );
};

export default UserHeader;
