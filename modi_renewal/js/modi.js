// codi.html > swiper

var swiper = new Swiper(".main_swiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});

// index-swiper
var youtube_swiper = new Swiper(".youtube_mySwiper", {
  navigation: {
    nextEl: ".youtube-swiper-button-next",
    prevEl: ".youtube-swiper-button-prev",
  },
  loop: true,
  // autoplay: { // 자동 슬라이드 설정 , 비 활성화 시 false
  //   delay: 5000, // 시간 설정
  //   disableOnInteraction: true, // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
  // },
});

var review_swiper = new Swiper(".review_swiper", {
  pagination: {
    el: ".review-swiper-pagination",
  }
});

var features_swiper = new Swiper(".features_swiper", {
  pagination: {
    el: ".features-swiper-pagination",
  },
  loop: true,
});

// codi-swiper
var codi_review_swiper = new Swiper(".codi_review_swiper", {
  pagination: {
    el: ".codi-review-swiper-pagination",
  }
});
