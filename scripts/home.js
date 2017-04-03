$(document).ready(function() {
      $('.delay').hide().delay(3000).fadeIn(2200);
});

$(".projects-scroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#humankind").offset().top
    }, 1000);
});

$(".dropdown").click(function(){
    $(".dropdown-content").toggleClass("hidden");
    $(".dropbtn").toggleClass("active");
    $(".fa.fa-navicon").toggleClass("selected");
});