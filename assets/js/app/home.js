$(document).ready(function(){
    var ai_boards_carousel = $("#ai_boards_slider");

    ai_boards_carousel.owlCarousel({
    items: 4,
    loop: false,
    dots: false,
    nav: true,
    margin: 10,
    autoplay: true,
    rewind: false,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: {
        items: 1
        },
        600: {
        items: 1
        },
        1000: {
        items: 1
        }
    }
    });
});
