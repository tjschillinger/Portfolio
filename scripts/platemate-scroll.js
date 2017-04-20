$(".intro-scroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#intro").offset().top -140
    }, 1000);
});

$(".mockups-scroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#mockups").offset().top -140
    }, 1000);
});

$(".conclusion-scroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#conclusion").offset().top -140
    }, 1000);
});

$(document).scroll(function() {
    var scroll_top = $(document).scrollTop();
    var survey_top = $('#intro').position().top -500;
    var SWOT_top = $('#mockups').position().top -500;
    var branding_top = $('#conclusion').position().top -500;
    var footer_top = $('.footer').position().top -900;
/*survey*/
    if(scroll_top > survey_top && scroll_top < SWOT_top) {
        $('.intro-scroll').removeClass('default');
        $('.intro-scroll a').addClass('side-nav-highlight');
    } else if( scroll_top > SWOT_top < survey_top ) {
       $('.intro-scroll a').removeClass('side-nav-highlight');
       $('.intro-scroll').addClass('default');
    }
/*SWOT*/    
    if(scroll_top > SWOT_top && scroll_top < branding_top) {
        $('.mockups-scroll').removeClass('default');
        $('.mockups-scroll a').addClass('side-nav-highlight');
    } else if( scroll_top > branding_top < SWOT_top ) {
       $('.mockups-scroll a').removeClass('side-nav-highlight');
       $('.mockups-scroll').addClass('default');
    }   
    
/*conclusion*/     
    if(scroll_top > branding_top && scroll_top < footer_top) {
        $('.conclusion-scroll').removeClass('default');
        $('.conclusion-scroll a').addClass('side-nav-highlight');
    } else if( scroll_top > footer_top < branding_top ) {
       $('.conclusion-scroll a').removeClass('side-nav-highlight');
       $('.conclusion-scroll').addClass('default');
    }
 /*conclusion*/    
    if(scroll_top > footer_top) {
        $('.side-nav').hide();
    } else if( scroll_top < footer_top ) {
       $('.side-nav').show();
    }
});