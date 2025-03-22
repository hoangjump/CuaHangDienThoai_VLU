import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.get(`/api/search?q=${query}`);
      setResults(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching search results:', error);
      setLoading(false);
    }
  };

  return (
    <section className="search">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Tìm kiếm sản phẩm..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="box"
        />
        <button type="submit" className="btn">Tìm kiếm</button>
      </form>

      {loading && <div>Loading...</div>}

      <div className="box-container">
        {results.length > 0 ? (
          results.map((product) => (
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

export default Search;
