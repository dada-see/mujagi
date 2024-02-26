

// 헤더 bg
$('.hBg_list').slick({
  arrows : false,
  autoplay : true,
  autoplaySpeed : 5000,
  speed : 400,
});


// * 본문3
$('.m3_list').slick({
    arrows : false,
    mobileFirst : true,
    responsive: [
        {
          breakpoint: 1023,
          settings: "unslick"
        }
    ],
    autoplay : true,
    autoplaySpeed : 3000,
    speed : 400,
});

// * 본문4 
$('.m4_list').slick({
    arrows : false,
    mobileFirst : true,
    responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1
          }
        },
        {
          breakpoint: 1023,
          settings: {
            slidesToShow: 4
          }
        }
    ],
    infinite: false,
});