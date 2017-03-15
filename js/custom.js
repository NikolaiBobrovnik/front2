$(document).ready(function () {

    $('.single-item').slick({
        infinite: true,
        dots: false,
        arrows: false,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 2000
    })

    $('.header-mobile__btn').on('click', function() {
        // Toggles a class on the menu button to transform the burger menu into a cross
        $( ".btn .btn__line:nth-of-type(1)" ).toggleClass( "mobile-nav-button__line_1");
        $( ".btn .btn__line:nth-of-type(2)" ).toggleClass( "mobile-nav-button__line_2");
        $( ".btn .btn__line:nth-of-type(3)" ).toggleClass( "mobile-nav-button__line_3");

        // Toggles a class that slides the menu into view on the screen
        //$('.header-mobile__nav').toggleClass('header-mobile__nav_visible');
        $('.header__mobile-nav').slideToggle();
        return false;
    });


});
