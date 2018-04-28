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
    });
    $(".toggle_menu").click(function () {
        if ($(".menu_active").is(":visible")) {
            $(".menu_active").fadeOut(300);
        } else {
            $(".menu_active").fadeIn(300);
        };

    });


});