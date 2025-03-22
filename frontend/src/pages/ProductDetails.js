import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/api/products/${id}`);
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product:', error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <section className="product-details">
      <div className="image-container">
        <img src={product.image_01} alt={product.name} />
        <div className="sub-images">
          <img src={product.image_01} alt={product.name} />
          <img src={product.image_02} alt={product.name} />
          <img src={product.image_03} alt={product.name} />
        </div>
      </div>
      <div className="content">
        <h3>{product.name}</h3>
        <div className="price">{product.price} VND</div>
        <p>{product.details}</p>
        <button className="btn">Thêm vào giỏ hàng</button>
      </div>
    </section>
  );
};

export default ProductDetails;
