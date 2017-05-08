$(document).ready(function() {
      $('.delay').hide().delay(3000).fadeIn(2200);
});

$(".projects-scroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#dailywalk").offset().top -140
    }, 1000);
});