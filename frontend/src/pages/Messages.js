import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Messages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get('/api/admin/messages');
        setMessages(response.data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();
  }, []);

  const deleteMessage = async (id) => {
    try {
      await axios.delete(`/api/admin/messages/${id}`);
      setMessages(messages.filter((message) => message._id !== id));
    } catch (error) {
      console.error('Error deleting message:', error);
    }
  };

  return (
    <section className="messages">
      <h1 className="heading">Lời nhắn</h1>
      <div className="box-container">
        {messages.length > 0 ? (
          messages.map((message) => (
            <div className="box" key={message._id}>
              <p>Id người dùng: <span>{message.user_id}</span></p>
              <p>Tên khách hàng: <span>{message.name}</span></p>
              <p>Email: <span>{message.email}</span></p>
              <p>Số điện thoại: <span>{message.number}</span></p>
              <p>Lời nhắn: <span>{message.message}</span></p>
              <button className="delete-btn" onClick={() => deleteMessage(message._id)}>Xóa</button>
            </div>
          ))
        ) : (
          <p className="empty">Chưa có lời nhắn nào</p>
        )}
      </div>
    </section>
  );
};

export default Messages;
