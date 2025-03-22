import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <section className="flex">
        <div className="box">
          <h3>Fstore</h3>
          <p>Địa chỉ: 123 Đường ABC, Quận 1, TP.HCM</p>
          <p>Điện thoại: 0123 456 789</p>
          <p>Email: info@fstore.com</p>
        </div>
        <div className="box">
          <h3>Liên kết nhanh</h3>
          <Link to="/">Trang chủ</Link>
          <Link to="/about">Chúng tôi</Link>
          <Link to="/shop">Cửa hàng</Link>
          <Link to="/contact">Liên hệ</Link>
        </div>
        <div className="box">
          <h3>Theo dõi chúng tôi</h3>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
