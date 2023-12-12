<?php

include 'components/connect.php';

session_start();

if(isset($_SESSION['user_id'])){
   $user_id = $_SESSION['user_id'];
}else{
   $user_id = '';
};

?>

<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Chúng tôi</title>

   <link rel="stylesheet" href="https://unpkg.com/swiper@8/swiper-bundle.min.css" />
   
   <!-- font awesome cdn link  -->
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">

   <!-- custom css file link  -->
   <link rel="stylesheet" href="css/style.css">

</head>
<body>
   
<?php include 'components/user_header.php'; ?>

<section class="about">

   <div class="row">

      <div class="image">
         <img src="images/about-img.svg" alt="">
      </div>

      <div class="content">
         <h3> Tại sao nên chọn chúng tôi</h3>
         <p>Đập hộp dễ dàng chỉ cần trả trước 30%
🔥 Thủ tục trả góp đơn giản, nhanh chóng

Bạn chỉ cần thích, còn lại chúng tôi đã lo toàn bộ.<br>

📲HỖ TRỢ TRẢ GÓP LÃI SUẤT THẤP: <br>
💵1. Home Credit + Mcredit 
– Trả trước chỉ từ: 20%
– Xét duyệt: 10-15p <br>
💳2. TRẢ GÓP 0% bằng thẻ TÍN DỤNG
– TRẢ TRƯỚC 0 ĐỒNG
– KHÔNG CẦN XÉT DUYỆT HỒ SƠ!
– NHẬN MÁY NGAY!</p>
         <a href="contact.php" class="btn">Liên hệ ngay</a>
      </div>

   </div>

</section>

<section class="reviews">
   
   <h1 class="heading">Đánh giá của khách hàng</h1>

   <div class="swiper reviews-slider">

   <div class="swiper-wrapper">

      <div class="swiper-slide slide">
         <img src="images/pic-1.jpg" alt="">
         <p>Mình đã mua ở rất nhiều nơi rồi, shop này có thể là điểm đến cuối cùng của mình, bán toàn đồ chất lượng.</p>
         <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
         </div>
         <h3>Anh Huy</h3>
      </div>

      <div class="swiper-slide slide">
         <img src="images/pic-2.jpg" alt="">
         <p>Sản phẩm tốt, ổn áp trong tầm giá như vậy, mình đã mua ở rất nhiều nơi rồi mà không nơi nào làm mình hài lòng như nơi này cả.</p>
         <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
         </div>
         <h3>Chị Thảo</h3>
      </div>

      <div class="swiper-slide slide">
         <img src="images/pic-3.png" alt="">
         <p>Dịch vụ chăm sóc khách hàng ở shop này rất tốt luôn mọi người ạ, sản phẩm lại còn ổn áp nữa chứ.</p>
         <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
         </div>
         <h3>Anh Tuấn</h3>
      </div>

      <div class="swiper-slide slide">
         <img src="images/pic-4.jpg" alt="">
         <p>Sản phẩm ổn áp trong tầm giá như vậy, không thể đòi hỏi được gì hơn nữa, quá tuyệt vời ạ.</p>
         <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
         </div>
         <h3>Chị Trân</h3>
      </div>

      <div class="swiper-slide slide">
         <img src="images/pic-5.jpg" alt="">
         <p>Cũng may biết đến shop này bán hàng chất lượng giá còn tốt nữa chứ, mấy shop kia thì mình không biết sao nhưng giá lại vô cùng cao nên cũng khá quan ngại.</p>
         <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
         </div>
         <h3>Anh Huy</h3>
      </div>

      <div class="swiper-slide slide">
         <img src="images/pic-6.jpg" alt="">
         <p>Quy trình mua hàng công nhận là dễ dàng thật, vừa mới đặt hàng và đã nhận được hàng rồi này.</p>
         <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
         </div>
         <h3>Chị Thảo</h3>
      </div>

   </div>

   <div class="swiper-pagination"></div>

   </div>

</section>









<?php include 'components/footer.php'; ?>

<script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></script>

<script src="js/script.js"></script>

<script>

var swiper = new Swiper(".reviews-slider", {
   loop:true,
   spaceBetween: 20,
   pagination: {
      el: ".swiper-pagination",
      clickable:true,
   },
   breakpoints: {
      0: {
        slidesPerView:1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
   },
});

</script>

</body>
</html>