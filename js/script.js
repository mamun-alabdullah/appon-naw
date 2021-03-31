// banner slider
$('.banner-slider').slick({
  dots: true,
  arrows:false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
   autoplay: true,
});

//images slider part

$('.img-slide').slick({
  dots: true,
  arrows:false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
   autoplay: true,
});
//venobox js....
  $('.venobox').venobox();

//featuer-text slider

$('.featuer-text').slick({
  dots: false,
  arrows:false,
  infinite: true,
  speed: 200,
  slidesToShow: 1,
  slidesToScroll: 1,
   autoplay: true,
   asNavFor:".featuer-image",
});

//featuer-image slider


$('.featuer-image').slick({
  dots: true,
  arrows:false,
  infinite: true,
  speed: 200,
  slidesToShow: 3,
  slidesToScroll: 1,
   autoplay: true,
   asNavFor:".featuer-text",
   centerMode:true,
    centerPadding: "0",
});
