import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/products');
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="products">
      <h1 className="heading">Cửa hàng</h1>
      <div className="box-container">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product._id} className="box">
              <Link to={`/product-details/${product._id}`} className="fas fa-eye"></Link>
              <img src={product.image_01} alt={product.name} />
              <div className="name">{product.name}</div>
              <div className="price">{product.price} VND</div>
              <Link to={`/cart`} className="btn">Thêm vào giỏ hàng</Link>
            </div>
          ))
        ) : (
          <p className="empty">Không tìm thấy sản phẩm!</p>
        )}
      </div>
    </section>
  );
};

export default Shop;
