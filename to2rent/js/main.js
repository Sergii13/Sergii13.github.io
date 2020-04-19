$(function(){
    $('.slider').slick({
nextArrow:'<button class="slick-arrow slick-next"> <img src="images/slider-next.svg" alt="next arrow"/></button>',
prevArrow:'<button class="slick-arrow slick-prew"> <img src="images/slider-prew.svg" alt="prew arrow"/></button>',
 fade: true,
 responsive: [
    {
      breakpoint: 441,
      settings: {
arrows:false
      }
    }
  ]

});
});
  
    