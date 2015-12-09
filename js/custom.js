$.noConflict();

jQuery(document).ready(function ($) {

    $("#carousel").owlCarousel({
        items: 4,
        autoplay: true,
        autoplayTimeout: 2000,
        dots: false,
        loop: true,
        lazyLoad: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3,
                margin: 30
            },
            992: {
                items: 4,
                margin: 30
            }
        }
    });

    $('body').fitVids();

    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    $('.popup-image').magnificPopup({
        type: 'image'
    });


    wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: false,
        live: true
    })
    wow.init();


    $(".background-img").each(function () {
        var bgImg = ('url(' + $(this).data("background-img") + ')');
        if ($(this).data("background-img")) {
            $(this).css('background-image', function () {
                return bgImg;
            });
        }

    });



    var windowHeight = $(window).height();
    $('.full-banner').css({
        "height": windowHeight
    });

    $(window).on("load resize", function (e) {
        var windowHeight = $(window).height();
        $('.full-banner').css({
            "height": windowHeight
        });
    });


    $('.owl-review').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        autoplay: false,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            }
        }
    });

    $('.owl-review-v2').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: [
            "<span class='ti-arrow-left'></span>",
            "<span class='ti-arrow-right'></span>"
        ],
        dots: false,
        autoplay: false,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            }
        }
    });


    $.fn.animateNumbers = function (stop, commas, duration, ease) {
        return this.each(function () {
            var $this = $(this);
            var start = parseInt($this.text().replace(/,/g, ""));
            commas = (commas === undefined) ? true : commas;
            $({
                value: start
            }).animate({
                value: stop
            }, {
                duration: duration == undefined ? 500 : duration,
                easing: ease == undefined ? "swing" : ease,
                step: function () {
                    $this.text(Math.floor(this.value));
                    if (commas) {
                        $this.text($this.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
                    }
                },
                complete: function () {
                    if (parseInt($this.text()) !== stop) {
                        $this.text(stop);
                        if (commas) {
                            $this.text($this.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
                        }
                    }
                }
            });
        });
    };


    $('.page-nav .nav').onePageNav({
        scrollOffset: 80,
        currentClass: 'current',
        changeHash: false,
        scrollSpeed: 750,
        scrollThreshold: 0.5,
        filter: ':not(.external)',
        easing: 'swing'
    });

    $('.page-nav .nav li a').on('click', function () {
        $('.navbar-toggle').trigger('click');
    });


    $(".main-nav").autofix_anything({
        customOffset: false,
        manual: false
    });

    $('.scroll-down').on('click', function () {
        var dataTar = $(this).data('target');
        $(window).scrollTo($(dataTar), 800, {
            offset: -80
        });

    });

    $('.price-table').appear();
    $('.company-facts').appear();
    $('.event-stats').appear();
    $(document.body).on('appear', '.price-table', function () {
        $('.number-animation').each(function () {
            $(this).animateNumbers($(this).attr("data-value"), true, parseInt($(this).attr("data-animation-duration")));
        });
    });
    $(document.body).on('appear', '.company-facts', function () {
        $('.number-animation').each(function () {
            $(this).animateNumbers($(this).attr("data-value"), true, parseInt($(this).attr("data-animation-duration")));
        });
    });
    $(document.body).on('appear', '.event-stats', function () {
        $('.number-animation').each(function () {
            $(this).animateNumbers($(this).attr("data-value"), true, parseInt($(this).attr("data-animation-duration")));
        });
    });


});
