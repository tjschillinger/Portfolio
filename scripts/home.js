$(".interests").on("click", function() {
        $(".interests-right").removeClass("hidden");
        $(".attribute-right").addClass("hidden");
        $(".story-right").addClass("hidden");
        $("#selector-one").removeClass("selector-one");
        $("#selector-two").addClass("selector-two");
        $("#selector-three").removeClass("selector-three");
        $(".interests").css("font-weight","bold");
        $(".story").css("font-weight","lighter");
        $(".attributes").css("font-weight","lighter");
});

$(".story").on("click", function() {
        $(".interests-right").addClass("hidden");
        $(".attribute-right").addClass("hidden");
        $(".story-right").removeClass("hidden");
        $("#selector-one").removeClass("selector-one");
        $("#selector-two").removeClass("selector-two");
        $("#selector-three").addClass("selector-three");
        $(".story").css("font-weight","bold");
        $(".interests").css("font-weight","lighter");
        $(".attributes").css("font-weight","lighter");
});

$(".attributes").on("click", function() {
        $(".interests-right").addClass("hidden");
        $(".attribute-right").removeClass("hidden");
        $(".story-right").addClass("hidden");
        $("#selector-one").addClass("selector-one");
        $("#selector-two").removeClass("selector-two");
        $("#selector-three").removeClass("selector-three");
        $(".attributes").css("font-weight","bold");
        $(".interests").css("font-weight","lighter");
        $(".story").css("font-weight","lighter");
});

$("#traks").on("click", function() {
        $(".humankind-right").addClass("hidden");
        $(".traks-right").removeClass("hidden");
        $(".blocjams-right").addClass("hidden");
        $("#traks").css("font-weight","900");
        $("#blocjams").css("font-weight","lighter");
        $("#humankind").css("font-weight","lighter");
        $("#traks").css("text-decoration","none");
        $("#blocjams").css("text-decoration","underline");
        $("#humankind").css("text-decoration","underline");
});

$("#blocjams").on("click", function() {
        $(".humankind-right").addClass("hidden");
        $(".traks-right").addClass("hidden");
        $(".blocjams-right").removeClass("hidden");
        $("#blocjams").css("font-weight","900");
        $("#humankind").css("font-weight","lighter");
        $("#traks").css("font-weight","lighter");
        $("#traks").css("text-decoration","underline");
        $("#blocjams").css("text-decoration","none");
        $("#humankind").css("text-decoration","underline");
});

$("#humankind").on("click", function() {
        $(".humankind-right").removeClass("hidden");
        $(".traks-right").addClass("hidden");
        $(".blocjams-right").addClass("hidden");
        $("#humankind").css("font-weight","900");
        $("#blocjams").css("font-weight","lighter");
        $("#traks").css("font-weight","lighter");
        $("#traks").css("text-decoration","underline");
        $("#blocjams").css("text-decoration","underline");
        $("#humankind").css("text-decoration","none");
});

$(".text-one").on("click", function() {
        $(".icon-right").removeClass("hidden");
        $(".wallpaper-right").addClass("hidden");
}); 

$(".text-two").on("click", function() {
        $(".icon-right").addClass("hidden");
        $(".wallpaper-right").removeClass("hidden");
}); 

$(".icon-select").on("click", function() {
    $("#selector-four").addClass("selector-four");
    $("#selector-five").removeClass("selector-five");
    $("#gallery-text").css("text-decoration", "underline");
    $("#icon-text").css("text-decoration", "none");
    $(".text-one").css("font-weight","normal");
    $(".text-two").css("font-weight","lighter");
});

$(".gallery-select").on("click", function() {
    $("#selector-five").addClass("selector-five");
    $("#selector-four").removeClass("selector-four");
    $("#gallery-text").css("text-decoration", "none");
    $("#icon-text").css("text-decoration", "underline");
    $(".text-one").css("font-weight","lighter");
    $(".text-two").css("font-weight","normal");
    
});

$(".about-scroll").click(function() {
    $('html, body').animate({
        scrollTop: $(".about").offset().top
    }, 1000);
});

$(".projects-scroll").click(function() {
    $('html, body').animate({
        scrollTop: $(".projects-nav").offset().top
    }, 800);
});

$(".gallery-scroll").click(function() {
    $('html, body').animate({
        scrollTop: $(".gallery-left").offset().top
    }, 1000);
});

$(".contact-scroll").click(function() {
    $('html, body').animate({
        scrollTop: $(".contact-left").offset().top
    }, 1000);
});


$(document).ready(function() {
     $(".attribute-right").toggleClass("hidden");
     $("#selector-one").addClass("selector-one");
     $(".attributes").css("font-weight","bold");
     $(".traks-right").toggleClass("hidden");
     $(".icon-right").toggleClass("hidden");
     $("#traks").css("font-weight","900");
     $("#traks").css("text-decoration","none");
     $("#selector-four").addClass("selector-four");
     $("#icon-text").css("text-decoration", "none");
     $(".text-one").css("font-weight","normal");
});