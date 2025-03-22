import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <section className="flex">
        <div className="box">
          <h3>Fstore</h3>
          <p>Your one-stop shop for all your needs</p>
        </div>
        <div className="box">
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/shop">Shop</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="box">
          <h3>Contact Us</h3>
          <p>Email: info@fstore.com</p>
          <p>Phone: 0123 456 789</p>
        </div>
        <div className="box">
          <h3>Follow Us</h3>
          <a href="https://www.facebook.com">Facebook</a>
          <a href="https://www.twitter.com">Twitter</a>
          <a href="https://www.instagram.com">Instagram</a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
