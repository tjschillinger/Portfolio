$(".survey-scroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#survey").offset().top -140
    }, 1000);
});

$(".SWOT-scroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#SWOT").offset().top -140
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
    var survey_top = $('#survey').position().top -500;
    var SWOT_top = $('#SWOT').position().top -500;
    var branding_top = $('#mockups').position().top -500;
    var result_top = $('#conclusion').position().top -500;
    var footer_top = $('.footer').position().top -900;
/*survey*/
    if(scroll_top > survey_top && scroll_top < SWOT_top) {
        $('.survey-scroll').removeClass('default');
        $('.survey-scroll a').addClass('side-nav-highlight');
    } else if( scroll_top > SWOT_top < survey_top ) {
       $('.survey-scroll a').removeClass('side-nav-highlight');
       $('.survey-scroll').addClass('default');
    }
/*SWOT*/    
    if(scroll_top > SWOT_top && scroll_top < branding_top) {
        $('.SWOT-scroll').removeClass('default');
        $('.SWOT-scroll a').addClass('side-nav-highlight');
    } else if( scroll_top > branding_top < SWOT_top ) {
       $('.SWOT-scroll a').removeClass('side-nav-highlight');
       $('.SWOT-scroll').addClass('default');
    }
    
    if(scroll_top > branding_top && scroll_top < result_top) {
        $('.mockups-scroll').removeClass('default');
        $('.mockups-scroll a').addClass('side-nav-highlight');
    } else if( scroll_top > result_top < branding_top ) {
       $('.mockups-scroll a').removeClass('side-nav-highlight');
       $('.mockups-scroll').addClass('default');
    }
    
/*conclusion*/     
    if(scroll_top > result_top && scroll_top < footer_top) {
        $('.conclusion-scroll').removeClass('default');
        $('.conclusion-scroll a').addClass('side-nav-highlight');
    } else if( scroll_top > footer_top < result_top ) {
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