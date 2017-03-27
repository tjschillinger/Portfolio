$(window).scroll(
    {
        previousTop: 0
    }, 
    function () {
    var currentTop = $(window).scrollTop();
    if (currentTop < this.previousTop) {
        $(".nav-tabs").show(1000);
    } else {
        $(".nav-tabs").hide(1000);
    }
    this.previousTop = currentTop;
});
