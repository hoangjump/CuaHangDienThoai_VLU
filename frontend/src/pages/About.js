import React from 'react';

const About = () => {
  return (
    <section className="about">
      <div className="row">
        <div className="image">
          <img src="images/about-img.svg" alt="About Us" />
        </div>
        <div className="content">
          <h3>Tại sao nên chọn chúng tôi</h3>
          <p>
            Đập hộp dễ dàng chỉ cần trả trước 30%
            🔥 Thủ tục trả góp đơn giản, nhanh chóng
            Bạn chỉ cần thích, còn lại chúng tôi đã lo toàn bộ.<br />
            📲HỖ TRỢ TRẢ GÓP LÃI SUẤT THẤP: <br />
            💵1. Home Credit + Mcredit 
            – Trả trước chỉ từ: 20%
            – Xét duyệt: 10-15p <br />
            💳2. TRẢ GÓP 0% bằng thẻ TÍN DỤNG
            – TRẢ TRƯỚC 0 ĐỒNG
            – KHÔNG CẦN XÉT DUYỆT HỒ SƠ!
            – NHẬN MÁY NGAY!
          </p>
          <a href="contact.php" className="btn">Liên hệ ngay</a>
        </div>
      </div>
    </section>
  );
};

export default About;
