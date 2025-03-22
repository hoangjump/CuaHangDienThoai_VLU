import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    msg: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="contact">
      <form onSubmit={handleSubmit}>
        <h3>Thông tin liên hệ</h3>
        <input
          type="text"
          name="name"
          placeholder="Nhập tên của bạn"
          required
          maxLength="20"
          className="box"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Nhập email của bạn"
          required
          maxLength="50"
          className="box"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="number"
          name="number"
          min="0"
          max="9999999999"
          placeholder="Số điện thoại"
          required
          onKeyPress={(e) => {
            if (e.target.value.length === 10) e.preventDefault();
          }}
          className="box"
          value={formData.number}
          onChange={handleChange}
        />
        <textarea
          name="msg"
          className="box"
          placeholder="Để lại lời nhắn cho chúng tôi"
          cols="30"
          rows="10"
          value={formData.msg}
          onChange={handleChange}
        ></textarea>
        <input type="submit" value="Gửi" className="btn" />
        <p>Bằng sự tận tâm chăm sóc khách hàng, chúng tôi sẽ liên hệ cho bạn sớm nhất có thể!</p>
      </form>
    </section>
  );
};

export default Contact;
