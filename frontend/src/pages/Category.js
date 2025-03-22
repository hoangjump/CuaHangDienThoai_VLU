import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Category = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`/api/products?category=${category}`);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="products">
      <h1 className="heading">Tính năng</h1>
      <div className="box-container">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product._id} className="box">
              <img src={product.image_01} alt={product.name} />
              <div className="name">{product.name}</div>
              <div className="price">{product.price} VND</div>
              <button className="btn">Thêm vào giỏ hàng</button>
            </div>
          ))
        ) : (
          <p className="empty">Không tìm thấy sản phẩm!</p>
        )}
      </div>
    </section>
  );
};

export default Category;
