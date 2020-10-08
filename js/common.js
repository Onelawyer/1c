$(document).ready(function() {

    $('#functionsCarousel, #caseCarousel, #presentCarousel').carousel({
        interval: false
    });

    $('#functionsCarousel, #caseCarousel, #presentCarousel').bcSwipe({ threshold: 50 });

    $('.fixedbar-tab').click(function() {
        $('.fixedbar-content').fadeToggle(500, "linear");
    });


    $('.popup span').click(function() {
        $('.promo').fadeToggle(5, "linear");
        $('.popup').toggleClass("heightpopup");
    });


    var contentTop = $('.advantage').offset().top;
    $(window).bind('scroll', function() {
        var windowTop = $(this).scrollTop();
           // console.log(windowTop);
        if (windowTop > contentTop) {
            $('.fixedbar').css('position', 'fixed')
            $('.fixedbar-line').css('position', 'fixed')
            // $(window).unbind('scroll')
        } else{
            $('.fixedbar').css('position', 'unset')
            $('.fixedbar-line').css('position', 'unset')
        }
    });


$(window).load(function() {

    //animate-css.js Plugin. Animate Elements on Scroll
    //Example: $(".element").animated("zoomInUp", "zoomOutDown");
    // $(".main-screen__logo").animated("bounceIn", "fadeOut");
    $(".relation h2, .thirtyday-desc").animated("fadeIn", "fadeOut");
    $(".timeline-block, .unf-block").animated("fadeInUp", "fadeOut");

});



        WindowWidth();

        $(window).resize(function() {
            /**
             * При изменении ширины окна
             */
            WindowWidth();
        });

        window.onorientationchange = function() {
            /**
             * При смене ориентации с портретной на пейзажную или обратно
             */
            WindowWidth();
        };

        function WindowWidth() {

        function getWindowWidth() {
                return window.innerWidth || document.body.clientWidth;
            }

             if (getWindowWidth() <= 768) {
             //Перемещение элементов при <= 768
                $('.functions-content').each(function(){
                    $(".carousel-inner>.item")
                    .css({
                        position:   'absolute',
                        visibility: 'hidden',
                        display:    'block'
                    });

                    var height = $(this).height();
                    var heightimg = $(this).parent().prev().children().height();
                    // console.log("img:" + heightimg);
                    // console.log("div:" + height);
                    $(".carousel-inner>.item").attr('style', '');

                    if (height > heightimg) {

                       $(this).parent().prev().css('height', height);
                       $(this).parent().prev().addClass('1');
                    } else {
                        $(this).parent().prev().css('height', height + heightimg - 130);
                        $(this).css('height', height + heightimg - 330);
                    }
                });

            }


             if (getWindowWidth() > 769) {

                    //Перемещение элементов при > 769
                $('.functions-content').each(function(){
                    $(".carousel-inner>.item")
                    .css({
                        position:   'absolute',
                        visibility: 'hidden',
                        display:    'block'
                    });

                    var height = $(this).height();
                    var heightimg = $(this).parent().prev().children().height();
                    // console.log("img:" + heightimg);
                    // console.log("div:" + height);
                    $(".carousel-inner>.item").attr('style', '');

                    if (height > heightimg) {

                       $(this).parent().prev().css('height', height);
                       $(this).parent().prev().addClass('1');
                    } else {
                        $(this).parent().prev().css('height', height + heightimg - 130);
                        $(this).css('height', height + heightimg - 130);
                    }
                });

            }
        }





    //Chrome Smooth Scroll
    try {
        $.browserSelector();
        if ($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch (err) {

    };

});

/*! Bootstrap Carousel Swipe jQuery plugin v1.1 | https://github.com/maaaaark/bcSwipe | MIT License */
!function(t){t.fn.bcSwipe=function(e){var n={threshold:50};return e&&t.extend(n,e),this.each(function(){function e(t){1==t.touches.length&&(u=t.touches[0].pageX,c=!0,this.addEventListener("touchmove",o,!1))}function o(e){if(c){var o=e.touches[0].pageX,i=u-o;Math.abs(i)>=n.threshold&&(h(),t(this).carousel(i>0?"next":"prev"))}}function h(){this.removeEventListener("touchmove",o),u=null,c=!1}var u,c=!1;"ontouchstart"in document.documentElement&&this.addEventListener("touchstart",e,!1)}),this}}(jQuery);


