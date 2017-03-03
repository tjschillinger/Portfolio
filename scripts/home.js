

$(".interests").on("click", function() {
        $(".interests-right").removeClass("hidden");
        $(".attribute-right").addClass("hidden");
        $(".story-right").addClass("hidden");
        $("#attributes-selector").removeClass('selected');
        $("#interests-selector").addClass("selected");
        $("#story-selector").removeClass('selected');
        $(".interests").css("font-weight","bold");
        $(".story").css("font-weight","lighter");
        $(".attributes").css("font-weight","lighter");
});

$(".story").on("click", function() {
        $(".interests-right").addClass("hidden");
        $(".attribute-right").addClass("hidden");
        $(".story-right").removeClass("hidden");
        $("#attributes-selector").removeClass('selected');
        $("#interests-selector").removeClass("selected");
        $("#story-selector").addClass("selected");
        $(".story").css("font-weight","bold");
        $(".interests").css("font-weight","lighter");
        $(".attributes").css("font-weight","lighter");
});

$(".attributes").on("click", function() {
        $(".interests-right").addClass("hidden");
        $(".attribute-right").removeClass("hidden");
        $(".story-right").addClass("hidden");
        $("#attributes-selector").addClass("selected");
        $("#interests-selector").removeClass("selected");
        $("#story-selector").removeClass('selected');
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

$(".icon-category").on("click", function() {
        $(".icon-right").removeClass("hidden");
        $(".wallpaper-right").addClass("hidden");
});

$(".wallpaper-category").on("click", function() {
        $(".icon-right").addClass("hidden");
        $(".wallpaper-right").removeClass("hidden");
});

$(".icon-category").on("click", function() {
    $("#icon-selector").addClass("selected");
    $("#wallpaper-selector").removeClass("selected");
    $("#wallpaper-text").css("text-decoration", "underline");
    $("#icon-text").css("text-decoration", "none");
    $("#icon-text").css("font-weight","normal");
    $("#wallpaper-text").css("font-weight","lighter");
});

$(".wallpaper-category").on("click", function() {
    $("#wallpaper-selector").addClass("selected");
    $("#icon-selector").removeClass("selected");
    
    $("#wallpaper-text").css("text-decoration", "none");
    $("#icon-text").css("text-decoration", "underline");
    $("#icon-text").css("font-weight","lighter");
    $("#wallpaper-text").css("font-weight","normal");

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

$(function(){
    $(".flip").flip({
        trigger: 'hover'
    });
});

$(document).ready(function() {
     $(".attribute-right").toggleClass("hidden");
     $("#attributes-selector").addClass("selected");
     $(".attributes").css("font-weight","bold");
    
     $(".traks-right").toggleClass("hidden");
     $(".icon-right").toggleClass("hidden");
     $("#traks").css("font-weight","900");
     $("#traks").css("text-decoration","none");
    
     $("#icon-selector").addClass("selected");
    
     $("#icon-text").css("text-decoration", "none");
     $("#icon-text").css("font-weight","normal");
    var wheel = new wheelnav("divWheel");
    wheel.createWheel(["0", "1", "2", "3"]);
    
});


