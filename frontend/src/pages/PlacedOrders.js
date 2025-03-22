import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PlacedOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('/api/admin/orders');
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  const updatePaymentStatus = async (orderId, paymentStatus) => {
    try {
      await axios.put(`/api/admin/orders/${orderId}`, { payment_status: paymentStatus });
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order._id === orderId ? { ...order, payment_status: paymentStatus } : order
        )
      );
    } catch (error) {
      console.error('Error updating payment status:', error);
    }
  };

  const deleteOrder = async (orderId) => {
    try {
      await axios.delete(`/api/admin/orders/${orderId}`);
      setOrders((prevOrders) => prevOrders.filter((order) => order._id !== orderId));
    } catch (error) {
      console.error('Error deleting order:', error);
    }
  };

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
              <select
                value={order.payment_status}
                onChange={(e) => updatePaymentStatus(order._id, e.target.value)}
                className="select"
              >
                <option value="Đang Chờ">Đang Chờ</option>
                <option value="Hoàn Thành">Hoàn Thành</option>
              </select>
              <div className="flex-btn">
                <button
                  className="option-btn"
                  onClick={() => updatePaymentStatus(order._id, order.payment_status)}
                >
                  Cập Nhật
                </button>
                <button
                  className="delete-btn"
                  onClick={() => deleteOrder(order._id)}
                >
                  Xóa
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="empty">Chưa có sản phẩm nào được đặt!</p>
        )}
      </div>
    </section>
  );
};

export default PlacedOrders;
