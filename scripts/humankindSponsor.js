$(".button-one").on("click", function() {
        $(".testimony-one").removeClass("hidden");
        $(".testimony-two").addClass("hidden");
        $(".testimony-three").addClass("hidden");
    
        $(".button-one").addClass("selected");
        $(".button-two").removeClass('selected');
        $(".button-three").removeClass("selected");
});

$(".button-two").on("click", function() {
        $(".testimony-one").addClass("hidden");
        $(".testimony-two").removeClass("hidden");
        $(".testimony-three").addClass("hidden");
    
        $(".button-one").removeClass("selected");
        $(".button-two").addClass('selected');
        $(".button-three").removeClass("selected");
});

$(".button-three").on("click", function() {
        $(".testimony-one").addClass("hidden");
        $(".testimony-two").addClass("hidden");
        $(".testimony-three").removeClass("hidden");
    
        $(".button-one").removeClass("selected");
        $(".button-two").removeClass('selected');
        $(".button-three").addClass("selected");
});






/*function checkWidth() {
  if ($(window).width() < 740) {
      $('.trak-right-arrow').removeClass('hidden');
      $('.blocjams-right-arrow').removeClass('hidden');
      $('.humankind-right-arrow').removeClass('hidden');
      $('.open-hand-right-arrow').removeClass('hidden');

      $('.blocjams-left-arrow').removeClass('hidden');
      $('.traks-left-arrow').removeClass('hidden');
      $('.open-hand-left-arrow').removeClass('hidden');
      $('.collabormate-left-arrow').removeClass('hidden');
  } else {
      $('.trak-right-arrow').addClass('hidden');
      $('.blocjams-right-arrow').addClass('hidden');
      $('.humankind-right-arrow').addClass('hidden');
      $('.open-hand-right-arrow').addClass('hidden');

      $('.blocjams-left-arrow').addClass('hidden');
      $('.traks-left-arrow').addClass('hidden');
      $('.open-hand-left-arrow').addClass('hidden');
      $('.collabormate-left-arrow').addClass('hidden');
  }
}

function mobileWidth() {
  if ($(window).width() < 740) {
      $('.trak-right-arrow').removeClass('hidden');
      $('.blocjams-right-arrow').removeClass('hidden');
      $('.humankind-right-arrow').removeClass('hidden');
      $('.open-hand-right-arrow').removeClass('hidden');

      $('.blocjams-left-arrow').removeClass('hidden');
      $('.traks-left-arrow').removeClass('hidden');
      $('.open-hand-left-arrow').removeClass('hidden');
      $('.collabormate-left-arrow').removeClass('hidden');
  } else {
      $('.trak-right-arrow').addClass('hidden');
      $('.blocjams-right-arrow').addClass('hidden');
      $('.humankind-right-arrow').addClass('hidden');
      $('.open-hand-right-arrow').addClass('hidden');

      $('.blocjams-left-arrow').addClass('hidden');
      $('.traks-left-arrow').addClass('hidden');
      $('.open-hand-left-arrow').addClass('hidden');
      $('.collabormate-left-arrow').addClass('hidden');
  }
}

$(window).resize(checkWidth);

$(window).width(mobileWidth);*/


$(document).ready(function() {
        $(".testimony-one").removeClass("hidden");
        $(".testimony-two").addClass("hidden");
        $(".testimony-three").addClass("hidden");
    
        $(".button-one").addClass("selected");
        $(".button-two").removeClass('selected');
        $(".button-three").removeClass("selected");
});
