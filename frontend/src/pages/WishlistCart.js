import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const WishlistCart = () => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWishlistItems = async () => {
      try {
        const response = await axios.get('/api/wishlist');
        setWishlistItems(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching wishlist items:', error);
        setLoading(false);
      }
    };

    fetchWishlistItems();
  }, []);

  const handleAddToCart = async (item) => {
    try {
      await axios.post('/api/cart', {
        user_id: item.user_id,
        pid: item.pid,
        name: item.name,
        price: item.price,
        quantity: 1,
        image: item.image,
      });
      setWishlistItems(wishlistItems.filter((wishlistItem) => wishlistItem._id !== item._id));
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="wishlist-cart">
      <h1 className="heading">Danh sách yêu thích</h1>
      <div className="box-container">
        {wishlistItems.length > 0 ? (
          wishlistItems.map((item) => (
            <div key={item._id} className="box">
              <Link to={`/product-details/${item._id}`} className="fas fa-eye"></Link>
              <img src={item.image} alt={item.name} />
              <div className="name">{item.name}</div>
              <div className="price">{item.price} VND</div>
              <button className="btn" onClick={() => handleAddToCart(item)}>Thêm vào giỏ hàng</button>
            </div>
          ))
        ) : (
          <p className="empty">Danh sách yêu thích của bạn đang trống!</p>
        )}
      </div>
    </section>
  );
};

export default WishlistCart;
