/*
Vizion - Al/ML - Chatbot Responsive HTML5 Template
Author: softshirtthemes.in
Version: 1.0
Design and Developed by: softshirtthemes.in
*/
/*----------------------------------------------
Index Of Script
------------------------------------------------
 1 Page Loader
 2 Back To Top
 3 Tooltip
 4 Hide Menu
 5 Accordion
 6 Header
 7 About Menu
 8 Magnific Popup
 9 Countdown
10 Progress Bar
11 widget
12 counter
13 Wow Animation
14 Owl Carousel
15 Contact From
16 On Scroll
17 Cookie
------------------------------------------------
Index Of Script
----------------------------------------------*/

"use strict";
$(document).ready(function () {
  /*------------------------
    Page Loader
    --------------------------*/
  // jQuery("#load").fadeOut();
  // jQuery("#loading").delay(0).fadeOut("slow");

  /*------------------------
    Back To Top
    --------------------------*/
  $("#back-to-top").fadeOut();
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 250) {
      $("#back-to-top").fadeIn(1400);
    } else {
      $("#back-to-top").fadeOut(400);
    }
  });
  // scroll body to 0px on click
  $("#top").on("click", function () {
    $("top").tooltip("hide");
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      800
    );
    return false;
  });

  /*------------------------
    Hide Menu
    --------------------------*/
  $(".navbar a").on("click", function (event) {
    if (!$(event.target).closest(".nav-item.dropdown").length) {
      $(".navbar-collapse").collapse("hide");
    }
  });

  /*------------------------
    Accordion
    --------------------------*/
  $(".iq-accordion .iq-ad-block .ad-details").hide();
  $(".iq-accordion .iq-ad-block:first")
    .addClass("ad-active")
    .children()
    .slideDown("slow");
  $(".iq-accordion .iq-ad-block").on("click", function () {
    if ($(this).children("div").is(":hidden")) {
      $(".iq-accordion .iq-ad-block")
        .removeClass("ad-active")
        .children("div")
        .slideUp("slow");
      $(this).toggleClass("ad-active").children("div").slideDown("slow");
    }
  });

  /*------------------------
    Header
    --------------------------*/
  $(".navbar-nav li a").on("click", function (e) {
    var anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(anchor.attr("href")).offset().top - 0,
        },
        1500
      );
    e.preventDefault();
  });
  $(".about-manu li a").on("click", function (e) {
    var anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(anchor.attr("href")).offset().top - 170,
        },
        1500
      );
    e.preventDefault();
  });
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 100) {
      $("header").addClass("menu-sticky");
    } else {
      $("header").removeClass("menu-sticky");
    }
  });

  /*------------------------
    About menu
    --------------------------*/
  $(window).on("scroll", function () {
    var window_top = $(window).scrollTop();
    var footer_top = $("footer").offset().top - 200;
    var div_top = $(".breadcrumbs").outerHeight();
    var div_height = $(".about-manu").height();
    if (window_top + div_height > footer_top)
      $(".about-manu").removeClass("menu-sticky");
    else if (window_top > div_top) {
      $(".about-manu").addClass("menu-sticky");
    } else {
      $(".about-manu").removeClass("menu-sticky");
    }
  });

  /*------------------------
    Magnific Popup
    --------------------------*/
  $(".popup-gallery").magnificPopup({
    delegate: "a.popup-img",
    tLoading: "Loading image #%curr%...",
    type: "image",
    mainClass: "mfp-img-mobile",
    gallery: {
      navigateByImgClick: true,
      enabled: true,
      preload: [0, 1],
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
    },
  });
  $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
    type: "iframe",
    disableOn: 700,
    mainClass: "mfp-fade",
    preloader: false,
    removalDelay: 160,
    fixedContentPos: false,
  });

  /*------------------------
    Countdown
    --------------------------*/
  $("#countdown").countdown({
    date: "10/01/2019 23:59:59",
    day: "Day",
    days: "Days",
  });

  /*------------------------
   2 Isotope
   --------------------------*/
  /* $('.isotope').isotope({
        itemSelector: '.iq-grid-item',
    });

    // filter items on button click
    $('.isotope-filters').on('click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $('.isotope').isotope({
            resizable: true,
            filter: filterValue
        });
        $('.isotope-filters button').removeClass('active');
        $(this).addClass('active');
    });*/

  /*------------------------
    3 Masonry
    --------------------------*/

  /*   var $msnry = $('.iq-masonry-block .iq-masonry');
       if ($msnry) {
           var $filter = $('.iq-masonry-block .isotope-filters');
           $msnry.isotope({
               percentPosition: true,
               resizable: true,
               itemSelector: '.iq-masonry-block .iq-masonry-item',
               masonry: {
                   gutterWidth: 0
               }
           });
           // bind filter button click
           $filter.on('click', 'button', function() {
               var filterValue = $(this).attr('data-filter');
               $msnry.isotope({
                   filter: filterValue
               });
           });

           $filter.each(function(i, buttonGroup) {
               var $buttonGroup = $(buttonGroup);
               $buttonGroup.on('click', 'button', function() {
                   $buttonGroup.find('.active').removeClass('active');
                   $(this).addClass('active');
               });
           });
       }
*/

  /*------------------------
    Progress Bar
    --------------------------*/
  /*   $('.iq-progress-bar > span').each(function() {
           var $this = $(this);
           var width = $(this).data('percent');
           $this.css({
               'transition': 'width 2s'
           });
           setTimeout(function() {
               $this.appear(function() {
                   $this.css('width', width + '%');
               });
           }, 500);
       });*/

  /*--------------------------
    bootstrap menu index-12
    ---------------------------*/

  $(window).on("scroll", function (e) {
    if ($("#how-it-works").length && $("#great-screenshots").length) {
      if ($(this).scrollTop() >= $("#how-it-works").offset().top - 2000) {
        $("#great-screenshots ul li")
          .children("a[aria-selected=true]")
          .addClass("active");
        e.preventDefault();
      }
    }
  });

  /*------------------------
 Screenshots silder
 --------------------------*/
  var slide = $(".slider-single");
  var slideTotal = slide.length - 1;
  var slideCurrent = -1;

  function slideInitial() {
    slide.addClass("proactivede");
    setTimeout(function () {
      autoplay: true;
      slideRight();
    }, 500);
  }

  function slideRight() {
    if (slideCurrent < slideTotal) {
      slideCurrent++;
    } else {
      slideCurrent = 0;
    }

    if (slideCurrent > 0) {
      var preactiveSlide = slide.eq(slideCurrent - 1);
    } else {
      var preactiveSlide = slide.eq(slideTotal);
    }
    var activeSlide = slide.eq(slideCurrent);
    if (slideCurrent < slideTotal) {
      var proactiveSlide = slide.eq(slideCurrent + 1);
    } else {
      var proactiveSlide = slide.eq(0);
    }

    slide.each(function () {
      var thisSlide = $(this);
      if (thisSlide.hasClass("preactivede")) {
        thisSlide
          .removeClass("preactivede preactive active proactive")
          .addClass("proactivede");
      }
      if (thisSlide.hasClass("preactive")) {
        thisSlide
          .removeClass("preactive active proactive proactivede")
          .addClass("preactivede");
      }
    });
    preactiveSlide
      .removeClass("preactivede active proactive proactivede")
      .addClass("preactive");
    activeSlide
      .removeClass("preactivede preactive proactive proactivede")
      .addClass("active");
    proactiveSlide
      .removeClass("preactivede preactive active proactivede")
      .addClass("proactive");
  }

  function slideLeft() {
    if (slideCurrent > 0) {
      slideCurrent--;
    } else {
      slideCurrent = slideTotal;
    }

    if (slideCurrent < slideTotal) {
      var proactiveSlide = slide.eq(slideCurrent + 1);
    } else {
      var proactiveSlide = slide.eq(0);
    }
    var activeSlide = slide.eq(slideCurrent);
    if (slideCurrent > 0) {
      var preactiveSlide = slide.eq(slideCurrent - 1);
    } else {
      var preactiveSlide = slide.eq(slideTotal);
    }
    slide.each(function () {
      var thisSlide = $(this);
      if (thisSlide.hasClass("proactivede")) {
        thisSlide
          .removeClass("preactive active proactive proactivede")
          .addClass("preactivede");
      }
      if (thisSlide.hasClass("proactive")) {
        thisSlide
          .removeClass("preactivede preactive active proactive")
          .addClass("proactivede");
      }
    });
    preactiveSlide
      .removeClass("preactivede active proactive proactivede")
      .addClass("preactive");
    activeSlide
      .removeClass("preactivede preactive proactive proactivede")
      .addClass("active");
    proactiveSlide
      .removeClass("preactivede preactive active proactivede")
      .addClass("proactive");
  }

  var left = $(".slider-left");
  var right = $(".slider-right");
  left.on("click", function () {
    slideLeft();
  });
  right.on("click", function () {
    slideRight();
  });
  slideInitial();

  /*------------------------
    counter
    --------------------------*/
  $(".timer").countTo();

  /*------------------------
    Wow Animation
    --------------------------*/
  var wow = new WOW({
    boxClass: "wow",
    animateClass: "animated",
    offset: 0,
    mobile: false,
    live: true,
  });
  wow.init();



  /*------------------------
    Accordion
    --------------------------*/
  $(".iq-accordion .iq-accordion-block .iq-accordion-details").hide();
  // $(".iq-accordion .iq-accordion-block:first")
  //   .addClass("iq-accordion-active")
  //   .children()
  //   .slideDown("slow");
  $(".iq-accordion .iq-accordion-block").on("click", function () {
    if ($(this).children("div").is(":hidden")) {
      $(".iq-accordion .iq-accordion-block")
        .removeClass("iq-accordion-active")
        .children("div")
        .slideUp("slow");
      $(this)
        .toggleClass("iq-accordion-active")
        .children("div")
        .slideDown("slow");
    }
    else{
      $(this)
        .removeClass("iq-accordion-active")
        .children("div")
        .slideUp("slow");
    }
  });
});


jQuery(document).ready(function () {
  jQuery(".erp_slider_main.owl-carousel")
    .owlCarousel({
      items: 1,
      autoplay: !1,
      dots: !1,
      nav: !1,
      loop: !1,
      autoplayHoverPause: !0,
      responsiveClass: !0,
      animateIn: "fadeIn",
    })
    .on("changed.owl.carousel", function (event) {
      var current = event.item.index;
      var hash = jQuery(event.target)
        .find(".owl-item")
        .eq(current)
        .find(".item")
        .attr("data-item");
      jQuery("." + hash).addClass("active");
    })
    .on("change.owl.carousel", function (event) {
      var current = event.item.index;
      var hash = jQuery(event.target)
        .find(".owl-item")
        .eq(current)
        .find(".item")
        .attr("data-item");
      jQuery("." + hash).removeClass("active");
    });
  jQuery(".erp_slider_tab_bx").on("click", function () {
    jQuery(".erp_slider_tab_bx").removeClass("active");
    jQuery(this).addClass("active");
    var index = jQuery(".erp_slider_tab_bx").index(this);
    jQuery(".erp_slider_main.owl-carousel").trigger("to.owl.carousel", [
      index,
      500,
      !0,
    ]);
  });
});