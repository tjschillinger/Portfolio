$(document).ready(function() {
      $('.delay').hide().delay(3000).fadeIn(2200);
});

$(".projects-scroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#humankind").offset().top
    }, 1000);
});

$(".dropdown").click(function(e){
    $(".dropdown-content").show();
    $(".dropbtn").toggleClass("active");
    $(".fa.fa-navicon").toggleClass("selected");
     e.stopPropagation();
});

$(".dropdown").click(function(e){
    e.stopPropagation();
});

$(document).click(function(){
    $(".dropdown-content").hide();
    $(".dropbtn").removeClass("active");
    $(".fa.fa-navicon").removeClass("selected");
});