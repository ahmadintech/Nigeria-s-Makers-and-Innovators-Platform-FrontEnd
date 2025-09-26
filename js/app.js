

$(document).ready(function () {
    //Owl
    $('.hero-slider').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        navText: ['PREV', 'NEXT'],
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 7000,
        responsive: {
            0: {
                nav: false,
            },
            768: {
                nav: true,
            }
        }
    })

    $('#projects-slider').owlCarousel({
        loop: true,
        nav: false,
        items: 2,
        dots: true,
        smartSpeed: 600,
        center: true,
        autoplay: true,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2,
                margin: 8,
            }
        }
    })

    $('.reviews-slider').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        smartSpeed: 900,
        items: 1,
        margin: 24,
        autoplay: true,
        autoplayTimeout: 4000,
    })


      $('.logo-carousel').owlCarousel({
        loop: true,
        margin: 30,
        dots: false,
        nav: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        smartSpeed: 600,
        responsive: {
            0:   { items: 2 },
            576: { items: 3 },
            768: { items: 4 },
            992: { items: 5 }
        }
    });

$(".innovators-carousel").owlCarousel({
                loop: true,
                margin: 0,
                center: true,
                items: 3,
                nav: false,
                dots: true,
                autoplay: true,
                autoplayTimeout: 4000,
                smartSpeed: 800,
                responsive: {
                    0: { 
                        items: 1, 
                        center: false,
                        margin: 10
                    },
                    480: { 
                        items: 3, 
                        center: true,
                        margin: 0
                    }
                }
            });
            
            // Add classes for prev/next items to handle overlapping
            $(".innovators-carousel").on('changed.owl.carousel', function(event) {
                // Remove previous classes
                $(".innovators-carousel .owl-item").removeClass('prev next');
                
                // Get current center item
                var centerItem = $(".innovators-carousel .owl-item.center");
                
                // Add classes to adjacent items
                centerItem.prev().addClass('prev');
                centerItem.next().addClass('next');
            });
            
            // Trigger the change event on init
            $(".innovators-carousel").trigger('changed.owl.carousel');
        



});
