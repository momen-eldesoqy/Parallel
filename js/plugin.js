$(function () {

    // start the page after the navbar dynamically
    var navHeight = $(".navbar").innerHeight();
    $("body").css("padding-top", navHeight)

    //replace active between navbar items
    $(".navbar-nav a").on("click", function (e) {
        e.preventDefault();
        $(this).addClass("active").siblings().removeClass("active");

        $("html, body").animate({
            scrollTop: $("#" + $(this).data("scroll")).offset().top - 60
        }, 1000)
    })

    $(window).on("scroll", function () {
        $(".block").each(function () {
            if ($(window).scrollTop() > $(this).offset().top) {
                var blockID = $(this).attr("id");
                $(".navbar-nav a[data-scroll='" + blockID + "']").addClass("active").siblings().removeClass("active");
            }
        })
        if ($(window).scrollTop() > 1000) {
            if ($(".icon").is(":hidden")) {
                $(".icon").fadeIn(500);
            }
        } else {
            $(".icon").fadeOut(500);
        }
    })
    // click icon to scroll to top 
    $(".icon").on("click", function (e) {
        e.preventDefault();
        $("html,body").animate({
            scrollTop: 0
        }, 1000)
    })




    //start slider 
    $('.carousel').carousel("pause");

    // start potfolio
    $(".tabs li").on("click", function () {
        $(this).addClass("active").siblings().removeClass("active");
        let itmes = $(this).data("class");

        $("." + itmes).css("opacity", 1).siblings().css("opacity", .3)

    })

    $(".progresss").each(function () {

        var $bar = $(this).find(".bar");
        var $val = $(this).find("span");
        var perc = parseInt($val.text(), 10);

        $({ p: 0 }).animate({ p: perc }, {
            duration: 3000,
            easing: "swing",
            step: function (p) {
                $bar.css({
                    transform: "rotate(" + (45 + (p * 1.8)) + "deg)", // 100%=180° so: ° = % * 1.8
                    // 45 is to add the needed rotation to have the green borders at the bottom
                });
                $val.text(p | 0);
            }
        });
    });

})


