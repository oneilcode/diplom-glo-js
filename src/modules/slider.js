const slider = () => {
   var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      navigation: {
         nextEl: ".arrow-left",
         prevEl: ".arrow-right",
      },
      breakpoints: {
         768: {
            slidesPerView: 2,
         },
         1200: {
            slidesPerView: 3,
         },
      },
   });
};

export default slider;