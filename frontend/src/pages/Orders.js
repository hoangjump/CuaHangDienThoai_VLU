import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('/api/orders');
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <section className="orders">
      <h1 className="heading">Đặt hàng</h1>
      <div className="box-container">
        {orders.length > 0 ? (
          orders.map((order) => (
            <div className="box" key={order._id}>
              <p>Đặt trên: <span>{order.placed_on}</span></p>
              <p>Tên khách hàng: <span>{order.name}</span></p>
              <p>Số điện thoại: <span>{order.number}</span></p>
              <p>Địa chỉ: <span>{order.address}</span></p>
              <p>Tổng sản phẩm: <span>{order.total_products}</span></p>
              <p>Tổng tiền: <span>{order.total_price} VND</span></p>
              <p>Phương thức thanh toán: <span>{order.method}</span></p>
              <p>Trạng thái thanh toán: <span>{order.payment_status}</span></p>
            </div>
          ))
        ) : (
          <p className="empty">Chưa có sản phẩm nào được đặt!</p>
        )}
      </div>
    </section>
  );
};

export default Orders;
