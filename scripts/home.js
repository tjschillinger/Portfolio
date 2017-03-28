$(".projects-scroll").click(function() {
    $('html, body').animate({
        scrollTop: $(".humankind").offset().top
    }, 1000);
});

$(document).ready(function() {
      $('.delay').hide().delay(3000).fadeIn(2200);
});

$(document).ready(function () {
    $(".popup").hide();
    $(".openpop").click(function (e) {
        e.preventDefault();
        $("iframe").attr("src", $(this).attr('href'));
        $(".links").fadeOut('slow');
        $(".popup").fadeIn('slow');
    });

    $(".close").click(function () {
        $(this).parent().fadeOut("slow");
        $(".links").fadeIn("slow");
    });
});

window.onload=function(){
    $("#popup").on('click', function(){
          $('.popup').bPopup({
            content:'iframe', //'ajax', 'iframe' or 'image'
            contentContainer:'.content',
            modalColor: '#105A6A'
        }); 
    })
    
    $("#contact-popup").on('click', function(){
          $('.popup').bPopup({
            content:'iframe', //'ajax', 'iframe' or 'image'
            contentContainer:'.content',
            modalColor: '#105A6A'
        }); 
    })
}

