$(".menu-collapsed").click(function() {
    $(this).toggleClass("menu-expanded");
});

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