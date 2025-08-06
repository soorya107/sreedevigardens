(function($) {
  'use strict';

  // Document ready
  $(document).ready(function() {
    
    // Menu Toggle Functionality
    $('.site-menu-toggle').on('click', function(){
      var $this = $(this);
      var $body = $('body');
      if ($body.hasClass('offcanvas-menu')) {
        $this.removeClass('open');
        $body.removeClass('offcanvas-menu');
      } else {
        $this.addClass('open');
        $body.addClass('offcanvas-menu');
      }
    });

    // Close menu when a link is clicked
    $('.site-navbar nav a').on('click', function() {
      $('body').removeClass('offcanvas-menu');
      $('.site-menu-toggle').removeClass('open');
    });

    // Dropdown Hover Functionality
    $('nav .dropdown').hover(function(){
      var $this = $(this);
      $this.addClass('show');
      $this.find('> a').attr('aria-expanded', true);
      $this.find('.dropdown-menu').addClass('show');
    }, function(){
      var $this = $(this);
      $this.removeClass('show');
      $this.find('> a').attr('aria-expanded', false);
      $this.find('.dropdown-menu').removeClass('show');
    });

    // Header Scroll Effect
    $(window).scroll(function() {
      var scrollTop = $(window).scrollTop();
      $('.js-site-header').toggleClass('scrolled', scrollTop > 200);
      $('.js-top').toggleClass('active', scrollTop > 200);
    });

    // Smooth Scrolling
    $('a.smoothscroll[href^="#"]').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
      }, 500);
      return false;
    });

    // Go to Top Button
    $('.js-gotop').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: 0 }, 500, 'easeInOutExpo');
    });

    // Date and Time Pickers
    $('#m_date').datepicker({
      'format': 'm/d/yyyy',
      'autoclose': true
    });
    
    $('#checkin_date, #checkout_date').datepicker({
      'format': 'd MM, yyyy',
      'autoclose': true
    });
    
    $('#m_time').timepicker();

    // Initialize AOS
    if (typeof AOS !== 'undefined') {
      AOS.init({ duration: 1000 });
    }

    // Initialize Owl Carousels
    $('.home-slider').owlCarousel({
      loop: true,
      autoplay: true,
      margin: 10,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      nav: true,
      autoplayHoverPause: true,
      items: 1,
      autoHeight: true,
      navText: ["<span class='ion-chevron-left'></span>","<span class='ion-chevron-right'></span>"],
      responsive: {
        0: { items: 1, nav: false },
        600: { items: 1, nav: false },
        1000: { items: 1, nav: true }
      }
    });

    $('.js-carousel-1').owlCarousel({
      loop: true,
      autoplay: true,
      stagePadding: 7,
      margin: 20,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      nav: true,
      autoplayHoverPause: true,
      items: 3,
      navText: ["<span class='ion-chevron-left'></span>","<span class='ion-chevron-right'></span>"],
      responsive: {
        0: { items: 1, nav: false },
        600: { items: 2, nav: false },
        1000: { items: 3, nav: true, loop: false }
      }
    });

    $('.js-carousel-2').owlCarousel({
      loop: true,
      autoplay: true,
      stagePadding: 7,
      margin: 20,
      nav: true,
      autoplayHoverPause: true,
      autoHeight: true,
      items: 3,
      navText: ["<span class='ion-chevron-left'></span>","<span class='ion-chevron-right'></span>"],
      responsive: {
        0: { items: 1, nav: false },
        600: { items: 2, nav: false },
        1000: { items: 3, dots: true, nav: true, loop: false }
      }
    });

    // Stellar.js Initialization (if needed)
    if (typeof $.stellar !== 'undefined') {
      $(window).stellar({
        responsive: false,
        parallaxBackgrounds: true,
        parallaxElements: true,
        horizontalScrolling: false,
        hideDistantElements: false,
        scrollProperty: 'scroll'
      });
    }
  });

})(jQuery);