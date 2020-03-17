$(".menu-collapsed").click(function() {
    $(this).toggleClass("menu-expanded");
});

/*
$(document).ready(function() {
    var scrollTop = $("#scrollBtn");

    $(window).scroll(function() {
        var top = $(this).scrollTop();

        if (top > 100) {
            $(scrollTop).css("opacity", "1");
        } else {
            $(scrollTop).css("opacity", "0");
        }
    });

    $(scrollTop).click(function() {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });
});
 */

$(document).ready(function() {
    var scrollButton = $("#scrollBtn");

    $(window).scroll(function () {
        if ($(window).scrollTop() >300 ) {
            scrollButton.addClass("show");
        } else {
            scrollButton.removeClass("show");
        }
    });

    scrollButton.click(function(e) {
        e.preventDefault();
        $("html, body").animate({scrollTop:0}, '300');
    });
});
