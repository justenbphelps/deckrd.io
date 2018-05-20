$(document).ready(function () {

    var scrollLink = $('.scroll');

    // Smooth scrolling
    scrollLink.click(function (e) {
        e.preventDefault();
        console.log(linkHref)

        var linkHref = $(this).attr('href')
        $('body,html').animate({
            scrollTop: $(linkHref).offset().top
        }, 850);
    });
})