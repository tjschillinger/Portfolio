 /* Table Of Content 1. Preloader 2. Smooth Scroll 3. Scroll Naviagation Background Change with Sticky Navigation 4. Mobile Navigation Hide or Collapse on Click 5. Scroll To Top 6. Typed.js 7. Parallax Background 8. Portfolio Filtering 9. Magnific Popup 10. Testimonial Carousel/Slider 11. Statistics Counter 12. Google Map */(function ($){'use strict'; jQuery(document).ready(function (){/* Preloader */ $(window).on('load', function(){$('body').addClass('loaded');}); /* Smooth Scroll */ $('a.smoth-scroll').on("click", function (e){var anchor=$(this); $('html, body').stop().animate({scrollTop: $(anchor.attr('href')).offset().top - 50}, 1000); e.preventDefault();}); /* Scroll Naviagation Background Change with Sticky Navigation */ $(window).on('scroll', function (){if ($(window).scrollTop() > 100){$('.header-top-area').addClass('navigation-background');}else{$('.header-top-area').removeClass('navigation-background');}}); /* Mobile Navigation Hide or Collapse on Click */ $(document).on('click', '.navbar-collapse.in', function (e){if ($(e.target).is('a') && $(e.target).attr('class') !='dropdown-toggle'){$(this).collapse('hide');}}); $('body').scrollspy({target: '.navbar-collapse', offset: 195}); /* Scroll To Top */ $(window).scroll(function(){if ($(this).scrollTop() >=500){$('.scroll-to-top').fadeIn();}else{$('.scroll-to-top').fadeOut();}}); $('.scroll-to-top').click(function(){$('html, body').animate({scrollTop : 0},800); return false;}); /* Typed.js */ $(window).load(function(){$(".typing").typed({strings: ["I Live in Colorado.", "I Provide Solutions.", "I am a Product Designer."], /* You can change the home section typing text from here and do not use "&" use "and" */ typeSpeed: 50});}); /* Parallax Background */ $(window).stellar({responsive: true, horizontalScrolling: false, hideDistantElements: false, horizontalOffset: 0, verticalOffset: 0,}); /* Portfolio Filtering */ $('.portfolio-inner').mixItUp(); /* Magnific Popup */ $('.portfolio-popup').magnificPopup({type: 'image', gallery:{enabled: true},zoom:{enabled: true, duration: 500}, image:{markup: '<div class="mfp-figure portfolio-pop-up">'+ '<div class="mfp-close"></div>'+ '<div class="mfp-img"></div>'+ '<div class="mfp-bottom-bar portfolio_title">'+ '<div class="mfp-title"></div>'+ '<div class="mfp-counter"></div>'+ '</div>'+ '</div>', titleSrc:function(item){return item.el.attr('title');}}}); /* Testimonial Carousel/Slider */ $(".testimonial-carousel-list").owlCarousel({items: 1, autoPlay: true, stopOnHover: false, navigation: true, navigationText: ["<i class='fa fa-long-arrow-left fa-2x owl-navi'></i>", "<i class='fa fa-long-arrow-right fa-2x owl-navi'></i>"], itemsDesktop: [1199, 1], itemsDesktopSmall: [980, 1], itemsTablet: [768, 1], itemsTabletSmall: false, itemsMobile: [479, 1], autoHeight: true, pagination: false, transitionStyle : "backSlide"}); /* Statistics Counter */ $('.statistics').appear(function(){var counter=$(this).find('.statistics-count'); var toCount=counter.data('count'); $(counter).countTo({from: 0, to: toCount, speed: 5000, refreshInterval: 50})}); /* Google Map */ $('#my-address').gMap({zoom: 5, scrollwheel: true, maptype: 'ROADMAP', markers:[{address: "Colorado", /* You can change your address from here */ html: "<b>Address</b>: <br>Denver, CO 80205", /* You can change display address text from here */ popup: true}]});});})(jQuery);


$(document).scroll(function() {
    var scroll_top = $(document).scrollTop();
    var portfolio_top = $('#portfolio').position().top -500;
    var services_top = $('#services').position().top -500;
    var about_top = $('#about').position().top -500;
    var contact_top = $('#contact').position().top -500;
        var footer_top = $('.footer-section').position().top -500;
/*survey*/
    if(scroll_top > portfolio_top && scroll_top < services_top) {
        $('.portfolio-nav').removeClass('home-default');
        $('.portfolio-nav').addClass('active-nav-item');
    } else if( scroll_top > services_top < portfolio_top ) {
       $('.portfolio-nav').removeClass('active-nav-item');
       $('portfolio-nav').addClass('home-default');
    }
/*SWOT*/    
    if(scroll_top > services_top && scroll_top < about_top) {
        $('.services-nav').removeClass('home-default');
        $('.services-nav').addClass('active-nav-item');
    } else if( scroll_top > about_top < services_top ) {
       $('.services-nav').removeClass('active-nav-item');
       $('.services-nav').addClass('home-default');
    }
/*Branding*/     
    if(scroll_top > about_top && scroll_top < contact_top) {
        $('.about-nav').removeClass('home-default');
        $('.about-nav').addClass('active-nav-item');
    } else if( scroll_top > contact_top < about_top ) {
       $('.about-nav').removeClass('active-nav-item');
       $('.about-nav').addClass('home-default');
    }
    
    
    
    
/*mockups*/     
    if(scroll_top > contact_top && scroll_top < footer_top) {
        $('.conact-nav').removeClass('home-default');
        $('.contact-nav').addClass('active-nav-item');
    } else if( scroll_top > footer_top < contact_top ) {
       $('.contact-nav').removeClass('active-nav-item');
       $('.contact-nav').addClass('home-default');
    }
});