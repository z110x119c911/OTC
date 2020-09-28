"use strict";

$(document).ready(function () {
  // $('a').click(function(e){
  //     event.preventDefault();
  // })
  $('.scroll').click(function () {
    var target = $(this.hash);
    $('html,body').animate({
      scrollTop: target.offset().top
    }, 1000);
  });
  $('.scrollTop').click(function (e) {
    $('html,body').animate({
      scrollTop: 0
    }, 1000);
  });
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
      $('.scrollTop').addClass("show");
    } else {
      $('.scrollTop').removeClass("show");
    }
  }); // $(window).scroll(function () {
  //     var scrollPos = $(window).scrollTop();
  //     var windowHeight = $(window).height();
  //     $('.animate__animated').each(function () {
  //         var thisPos = $(this).offset().top;
  //         console.log(thisPos);
  //         if (windowHeight * 0.7 + scrollPos >= (thisPos)) {
  //             $(this).removeClass('d-none');
  //             $(this).addClass('animate__fadeInUp');
  //         }
  //     });
  // });
});
//# sourceMappingURL=all.js.map
