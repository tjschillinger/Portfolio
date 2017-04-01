$(".projects-scroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#humankind").offset().top
    }, 1000);
});

$(document).ready(function() {
      $('.delay').hide().delay(3000).fadeIn(2200);
});

