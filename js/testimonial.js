/*------------------------
    Owl Carousel
    --------------------------*/
    $(".owl-carousel").each(function () {
        var $carousel = $(this);
        $carousel.owlCarousel({
          items: $carousel.data("items"),
          loop: $carousel.data("loop"),
          margin: $carousel.data("margin"),
          nav: $carousel.data("nav"),
          dots: $carousel.data("dots"),
          autoplay: $carousel.data("autoplay"),
          autoplayTimeout: $carousel.data("autoplay-timeout"),
          navText: [
            '<i class="fa fa-angle-left fa-2x"></i>',
            '<i class="fa fa-angle-right fa-2x"></i>',
          ],
          responsiveClass: true,
          responsive: {
            // breakpoint from 0 up
            0: {
              items: $carousel.data("items-mobile-sm"),
            },
            // breakpoint from 480 up
            480: {
              items: $carousel.data("items-mobile"),
            },
            // breakpoint from 786 up
            786: {
              items: $carousel.data("items-tab"),
            },
            // breakpoint from 1023 up
            1023: {
              items: $carousel.data("items-laptop"),
            },
            1199: {
              items: $carousel.data("items"),
            },
          },
        });
      });