$(window).on('load', function(){

    // solution slider
    var welSlider = $('.solution-slider');
    var intro = {
        items: 2,
        dots: 1,
        loop: 0,
        nav: 0,
        autoplay: 0,
        margin: 10,
        responsive: {
            768: {
                items: 3,
            },
        }
    }
    slidrerOnlyMobile(welSlider, 1200, intro);

    // pdf slider
    var welSlider = $('.pdf-slider');
    var intro = {
        items: 1,
        dots: 1,
        loop: 0,
        nav: 0,
        stagePadding: 20,
        autoplay: 0,
        margin: 10,
        responsive: {
            768: {
                items: 2,
            },
        }
    }
    slidrerOnlyMobile(welSlider, 1200, intro);

    // video slider
    $(".test-video-slider").owlCarousel({
        loop: 0,
        margin: 7,
        nav: 0,
        dots: 1,
        stagePadding: 20,
        items: 1,
        autoplay: 0,
        responsive: {
            768: {
                items: 2,
                nav: 0,
            },
            1200: {
                loop: 1,
                autoplay: 1,
                items: 3,
                stagePadding: 0,
                margin: 20,
                dots: 0,
                nav: 1,
                navText: [
                    '<svg aria-hidden="true" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">' +
                        '<path d="m9.41427 16 8.99993-8.99997-1.4142-1.41421-9 8.99998v-7.5858h-2v11h11v-2z"/>' +
                    '</svg>',

                    '<svg aria-hidden="true" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">' +
                        '<path d="m18 6h-11v2h7.5858l-8.99998 9 1.41421 1.4142 8.99997-8.99993v7.58573h2z"/>' +
                    '</svg>'
                ],
            },
        },
    });

    // Youtube slider
    $(".yt-slider").owlCarousel({
        loop: 0,
        margin: 7,
        nav: 0,
        dots: 1,
        stagePadding: 20,
        items: 1,
        autoplay: 0,
        responsive: {
            768: {
                items: 2,
                nav: 0,
            },
            1200: {
                loop: 1,
                autoplay: 1,
                items: 3,
                stagePadding: 0,
                margin: 20,
                dots: 0,
                nav: 1,
                navText: [
                    '<svg aria-hidden="true" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">' +
                        '<path d="m9.41427 16 8.99993-8.99997-1.4142-1.41421-9 8.99998v-7.5858h-2v11h11v-2z"/>' +
                    '</svg>',

                    '<svg aria-hidden="true" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">' +
                        '<path d="m18 6h-11v2h7.5858l-8.99998 9 1.41421 1.4142 8.99997-8.99993v7.58573h2z"/>' +
                    '</svg>'
                ],
            },
        },
    });

    // Clinets Slider
    $(".clientele").owlCarousel({
        loop: 1,
        margin: 42,
        nav: 0,
        dots: 0,
        items: 2,
        smartSpeed: 5000,
        slideTransition: "linear",
        autoplay: 1,
        mouseDrag: 0,
        touchDrag: 0,
        autoplayHoverPause: 0,
        responsive: {
            768: {
                items: 5,
            },

            1200: {
                items: 8,
                margin: 60,
            },
        },
    });

    // Accordion slider
    $(".pdfacc-slider").owlCarousel({
        loop: 0,
        margin: 7,
        nav: 0,
        dots: 1,
        stagePadding: 20,
        items: 1,
        autoplay: 0,
        responsive: {
            768: {
                items: 2,
                nav: 0,
            },
            1200: {
                items: 4,
                stagePadding: 0,
                margin: 20,
                dots: 0,
                nav: 1,
                navText: [
                    '<svg aria-hidden="true" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">' +
                        '<path d="m9.41427 16 8.99993-8.99997-1.4142-1.41421-9 8.99998v-7.5858h-2v11h11v-2z"/>' +
                    '</svg>',

                    '<svg aria-hidden="true" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">' +
                        '<path d="m18 6h-11v2h7.5858l-8.99998 9 1.41421 1.4142 8.99997-8.99993v7.58573h2z"/>' +
                    '</svg>'
                ],
            },
        },
    });

    // product slider
    $(".content-items").owlCarousel({
        loop: 0,
        margin: 20,
        nav: 0,
        dots: 1,
        stagePadding: 30,
        items: 1,
        autoplay: 0,
        responsive: {
            768: {
                items: 2,
                nav: 0,
            },
            1200: {
                items: 1,
                stagePadding: 0,
                margin: 5,
                dots: 0,
                nav: 1,
                navText: [
                    '<svg aria-hidden="true" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">' +
                        '<path d="m9.41427 16 8.99993-8.99997-1.4142-1.41421-9 8.99998v-7.5858h-2v11h11v-2z"/>' +
                    '</svg>',

                    '<svg aria-hidden="true" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">' +
                        '<path d="m18 6h-11v2h7.5858l-8.99998 9 1.41421 1.4142 8.99997-8.99993v7.58573h2z"/>' +
                    '</svg>'
                ],
            },
        },
    });

});

jQuery(document).ready(function($) {
    // Product Tabs
    $(".product-range .content-items").hide(); 
    $(".product-range .content-items").first().show();

    $(".product-range .tab-item").click(function () {
        var category = $(this).data("category");

        $(".product-range .tab-item").removeClass("active");
        $(this).addClass("active");

        $(".product-range .content-items").hide();
        $(".product-range .content-items[data-tab='" + category + "']").show();
    });

    // Capability Tabs
    $('.cap-tabs .tab-item').on('click', function() {
        var index = $(this).index();
        
        $('.cap-tabs .tab-item').removeClass('active');
        $(this).addClass('active');
        
        $('.cap-points .points').removeClass('active').hide();
        $('.cap-points .points').eq(index).fadeIn(200).addClass('active');
    });
    
    $('.cap-points .points').eq(0).addClass('active').show();

    // Accordion toggle
    $('.accordion .title').on('click', function() {
        var parent = $(this).closest('.accc-item');

        $('.accordion .accc-item').not(parent).removeClass('active').find('.content').slideUp(300);

        parent.toggleClass('active');
        parent.find('.content').slideToggle(300);
    });

    // Tabs inside first accordion
    $('.acc-tabs .tab-item').on('click', function() {
        var index = $(this).index();
        var tabContainer = $(this).closest('.content');

        tabContainer.find('.tab-item').removeClass('active');
        $(this).addClass('active');

        tabContainer.find('.pdfacc-slider').removeClass('active').hide();
        tabContainer.find('.pdfacc-slider').eq(index).fadeIn(200).addClass('active');
    });
    
    $('.accordion .accc-item').first().addClass('active').find('.content').show();
    $('.accordion .accc-item').first().find('.pdfacc-slider').first().addClass('active').show();
});

function slidrerOnlyMobile(elem, breakpoint, args) {
	
    if ($(elem)[0]) {
        var s = $(elem);
        
        if (window.innerWidth < breakpoint) {
            s.owlCarousel(args)
		} else s.addClass("off"); 
		
        $(window).resize(function (e) {
            if (window.innerWidth < breakpoint) {
                if ($(elem).hasClass("off")) {
                    s.owlCarousel(args);
                    s.removeClass("off")
                }
            } else $(elem).hasClass("off") || (s.addClass("off").trigger("destroy.owl.carousel"), s.find(".owl-stage-outer").children(":eq(0)").unwrap())
        })
    }
}