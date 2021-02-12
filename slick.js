
$(document).ready(function() { 

jQuery('.team-container').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    appendDots:'.team-slick__pagination',
    dots: false,
    responsive: [
        {
          breakpoint: 1240,
          settings: {
            arrows: false,
            centerMode: false,
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: true,
          }
        },
        {
            breakpoint: 500,
            settings: {
              arrows: false,
              centerMode: false,
              slidesToShow: 2,
              slidesToScroll: 2,
              dots: true,
            }
          },
      ]
  });
});