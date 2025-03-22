import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

const UpdateProduct = () => {
  const { id } = useParams();
  const history = useHistory();
  const [product, setProduct] = useState({
    name: '',
    price: '',
    details: '',
    image_01: '',
    image_02: '',
    image_03: ''
  });
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/api/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: files[0]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', product.name);
    formData.append('price', product.price);
    formData.append('details', product.details);
    formData.append('image_01', product.image_01);
    formData.append('image_02', product.image_02);
    formData.append('image_03', product.image_03);

    try {
      await axios.put(`/api/products/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setMessage('Product updated successfully!');
      history.push('/products');
    } catch (error) {
      console.error('Error updating product:', error);
      setMessage('Failed to update product.');
    }
  };

  return (
    <section className="update-product">
      <h1 className="heading">Cập nhật sản phẩm</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="image-container">
          <div className="main-image">
            <img src={product.image_01} alt={product.name} />
          </div>
          <div className="sub-image">
            <img src={product.image_01} alt={product.name} />
            <img src={product.image_02} alt={product.name} />
            <img src={product.image_03} alt={product.name} />
          </div>
        </div>
        <span>Cập nhật sản phẩm</span>
        <input
          type="text"
          name="name"
          required
          className="box"
          maxLength="100"
          placeholder="Nhập tên sản phẩm"
          value={product.name}
          onChange={handleChange}
        />
        <span>Cập nhập giá</span>
        <input
          type="number"
          name="price"
          required
          className="box"
          min="0"
          max="9999999999"
          placeholder="Nhập giá sản phẩm"
          value={product.price}
          onChange={handleChange}
        />
        <span>Cập nhật chi tiết</span>
        <textarea
          name="details"
          className="box"
          required
          cols="30"
          rows="10"
          value={product.details}
          onChange={handleChange}
        ></textarea>
        <span>Cập nhật hình 01</span>
        <input
          type="file"
          name="image_01"
          accept="image/jpg, image/jpeg, image/png, image/webp"
          className="box"
          onChange={handleFileChange}
        />
        <span>Cập nhật hình 02</span>
        <input
          type="file"
          name="image_02"
          accept="image/jpg, image.jpeg, image/png, image/webp"
          className="box"
          onChange={handleFileChange}
        />
        <span>Cập nhật hình 03</span>
        <input
          type="file"
          name="image_03"
          accept="image/jpg, image.jpeg, image/png, image/webp"
          className="box"
          onChange={handleFileChange}
        />
        <div className="flex-btn">
          <input type="submit" className="btn" value="update" />
          <button type="button" className="option-btn" onClick={() => history.push('/products')}>
            Quay lại
          </button>
        </div>
      </form>
      {message && <p>{message}</p>}
    </section>
  );
};

export default UpdateProduct;
