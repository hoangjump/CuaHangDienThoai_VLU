import React from 'react';

const Home = () => {
  return (
    <div>
      <header>
        <h1>Welcome to Fstore</h1>
        <p>Your one-stop shop for all your needs</p>
      </header>
      <section className="products">
        <h2>Featured Products</h2>
        <div className="product-list">
          <div className="product-item">
            <img src="images/product1.jpg" alt="Product 1" />
            <h3>Product 1</h3>
            <p>$10.00</p>
          </div>
          <div className="product-item">
            <img src="images/product2.jpg" alt="Product 2" />
            <h3>Product 2</h3>
            <p>$20.00</p>
          </div>
          <div className="product-item">
            <img src="images/product3.jpg" alt="Product 3" />
            <h3>Product 3</h3>
            <p>$30.00</p>
          </div>
        </div>
      </section>
      <section className="about">
        <h2>About Us</h2>
        <p>We are a leading online store providing a wide range of products to meet all your needs. Our mission is to offer high-quality products at affordable prices, with excellent customer service.</p>
      </section>
      <section className="contact">
        <h2>Contact Us</h2>
        <p>If you have any questions or need assistance, please feel free to contact us at info@fstore.com or call us at 0123 456 789.</p>
      </section>
    </div>
  );
};

export default Home;
