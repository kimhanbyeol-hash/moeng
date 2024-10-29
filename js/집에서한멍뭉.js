// <!-- Initialize Swiper -->
var mainSwiper = new Swiper(".mainSwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".mainSwiper .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".mainSwiper .swiper-button-next",
      prevEl: ".mainSwiper .swiper-button-prev",
    },
  });
  


  //  Initialize Swiper
        var pushSwiper = new Swiper(".pushSwiper", {
            slidesPerView: 1.3, //처음 보여지는 슬라이드 갯수, 초기값은 모바일
            spaceBetween: 30,   //슬라이드 마진
            pagination: {
                el: ".pushSwiper .swiper-pagination",
                clickable: true,
            },
            breakpoints: {
            768: {
                slidesPerView: 2.2,  //브라우저가 768보다 클 때
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 
                4.9,  //브라우저가 1024보다 클 때
                spaceBetween: 20,
            },
            },
            navigation: {
        nextEl: ".pushSwiper .swiper-button-next",
        prevEl: ".pushSwiper .swiper-button-prev",
      },
        });