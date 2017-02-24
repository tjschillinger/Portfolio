$(".interests").on("click", function() {
        $(".interests-right").removeClass("hidden");
        $(".attribute-right").addClass("hidden");
        $(".story-right").addClass("hidden");
});

$(".story").on("click", function() {
        $(".interests-right").addClass("hidden");
        $(".attribute-right").addClass("hidden");
        $(".story-right").removeClass("hidden");
});

$(".attributes").on("click", function() {
        $(".interests-right").addClass("hidden");
        $(".attribute-right").removeClass("hidden");
        $(".story-right").addClass("hidden");
});

$("#traks").on("click", function() {
        $(".humankind-right").addClass("hidden");
        $(".traks-right").removeClass("hidden");
        $(".blocjams-right").addClass("hidden");
});

$("#blocjams").on("click", function() {
        $(".humankind-right").addClass("hidden");
        $(".traks-right").addClass("hidden");
        $(".blocjams-right").removeClass("hidden");
});

$("#humankind").on("click", function() {
        $(".humankind-right").removeClass("hidden");
        $(".traks-right").addClass("hidden");
        $(".blocjams-right").addClass("hidden");
});

$(".text-one").on("click", function() {
        $(".icon-right").removeClass("hidden");
        $(".wallpaper-right").addClass("hidden");
}); 

$(".text-two").on("click", function() {
        $(".icon-right").addClass("hidden");
        $(".wallpaper-right").removeClass("hidden");
}); 

$(document).ready(function() {
     $(".attribute-right").toggleClass("hidden");
     $(".traks-right").toggleClass("hidden");
    $(".icon-right").toggleClass("hidden");
});