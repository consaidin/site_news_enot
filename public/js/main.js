$(document).ready(function () {

    $(".search-icon").click(function () {
        $(".search").fadeIn(300);
        $(".search-wrapper").addClass("fadeInUp animated");
    });
    $(".close, button").click(function () {
        $(".search").fadeOut(300);
        $(".search-wrapper").removeClass("fadeInUp animated");
    });

    $("#top-menu ul li a").click(function () {
        $("#top-menu ul li a").removeClass("active");
        $(this).addClass("active");
    });

    $(".toggle_menu").click(function () {
        $(".burger").toggleClass("burger_active");
        if ($(".menu-active").is(":visible")) {
            $(".menu-active").fadeOut(300);
            $(".menu-active ul li a").removeClass("fadeInUp animated");

        } else {
            $(".menu-active").fadeIn(300);
            $(".menu-active ul li a").addClass("fadeInUp animated");
        };
    });

    $(".menu-active ul li a").click(function () {
        $(".menu-active").fadeOut(300);
        $(".burger").toggleClass("burger_active");
    });

    $(".video-icon").click(function () {
        $(".video-icon").addClass("video-icon__active");
    });
});