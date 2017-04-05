$(document).ready(function () {
  $("li").click(function () {
    $('li > ul').not($(this).children("ul").toggle()).hide();
    $(".highlight").toggleClass("active");
  });
});

$(document).on('click',function (e) {
  footerUl = $('.mobile-tabs ul:first li');
  if (!footerUl.is(e.target) 
      && footerUl.has(e.target).length === 0){
    footerUl.children('ul').hide();
      $(".highlight").removeClass("active"); 
  }
});

