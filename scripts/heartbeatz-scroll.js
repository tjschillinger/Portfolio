$(".dev-scroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#dev").offset().top -140
    }, 1000);
});

$(".dev-results-scroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#dev-results").offset().top -140
    }, 1000);
});

$(".branding-scroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#branding").offset().top -140
    }, 1000);
});

$(".results-scroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#conclusion").offset().top -140
    }, 1000);
});

$(document).scroll(function() {
    var scroll_top = $(document).scrollTop();
    var survey_top = $('#dev').position().top -500;
    var SWOT_top = $('#dev-results').position().top -500;
    var branding_top = $('#branding').position().top -500;
    var conclusion_top = $('#conclusion').position().top -500;
    var footer_top = $('.footer').position().top -900;
/*survey*/
    if(scroll_top > survey_top && scroll_top < SWOT_top) {
        $('.dev-scroll').removeClass('default');
        $('.dev-scroll a').addClass('side-nav-highlight');
    } else if( scroll_top > SWOT_top < survey_top ) {
       $('.dev-scroll a').removeClass('side-nav-highlight');
       $('.dev-scroll').addClass('default');
    }
/*SWOT*/    
    if(scroll_top > SWOT_top && scroll_top < branding_top) {
        $('.dev-results-scroll').removeClass('default');
        $('.dev-results-scroll a').addClass('side-nav-highlight');
    } else if( scroll_top > branding_top < SWOT_top ) {
       $('.dev-results-scroll a').removeClass('side-nav-highlight');
       $('.dev-results-scroll').addClass('default');
    }
/*Branding*/     
    if(scroll_top > branding_top && scroll_top < conclusion_top) {
        $('.branding-scroll').removeClass('default');
        $('.branding-scroll a').addClass('side-nav-highlight');
    } else if( scroll_top > conclusion_top < branding_top ) {
       $('.branding-scroll a').removeClass('side-nav-highlight');
       $('.branding-scroll').addClass('default');
    }
    
/*mockups*/     
    
/*conclusion*/     
    if(scroll_top > conclusion_top && scroll_top < footer_top) {
        $('.results-scroll').removeClass('default');
        $('.results-scroll a').addClass('side-nav-highlight');
    } else if( scroll_top > footer_top < conclusion_top ) {
       $('.results-scroll a').removeClass('side-nav-highlight');
       $('.results-scroll').addClass('default');
    }
 /*conclusion*/    
    if(scroll_top > footer_top) {
        $('.side-nav').hide();
    } else if( scroll_top < footer_top ) {
       $('.side-nav').show();
    }
});