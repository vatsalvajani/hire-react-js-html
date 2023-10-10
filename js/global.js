$(document).ready(function () {


    //sticky header
    window.onscroll = function () { myFunction() };

    var header = document.getElementById("headerfile");
    var sticky = header.offsetTop;

    function myFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }

    //blog post back button click
    $(".back-btn").click(function () {
        history.back()
    });
});


// responsive menu
function mobilemenu() {
    var element = document.getElementById("shortmenu");
    element.classList.toggle("active-menu");
}


//Match title height
function MatchHeight() {
  $('.hire-content')
    .matchHeight({})
  ;
}

$(document).ready(function () {
    $('.toolbar .btn').click(function () {
        $(this).addClass("active-btn");
        $(this).siblings().removeClass("active-btn");
    });
    $('.select-flag').click(function () {
        $('.country-list').toggleClass('hide');
    });
    $(".country").hover(function () {
        $(this).toggleClass("highlight");
    });
});





$(document).ready(function () {
    //animation

    if (matchMedia("(max-width: 500px)").matches) {
        $('.ani-left').waypoint(function () {
            $(this.element).addClass("left-box-animate");
        }, { offset: "2400px" });

    }
    else {
        $('.ani-left').waypoint(function () {
            $(this.element).addClass("left-box-animate");
        }, { offset: "800px" });
    }
    ///////


    if (matchMedia("(max-width: 500px)").matches) {
        $('.ani-right,.work-technologies-right ul').waypoint(function () {
            $(this.element).addClass("right-box-animate");
        }, { offset: "2400px" });

    }
    else {
        $('.ani-right,.work-technologies-right ul').waypoint(function () {
            $(this.element).addClass("right-box-animate");
        }, { offset: "800px" });
    }
    ///////


    if (matchMedia("(max-width: 500px)").matches) {
        $('.ani-bottom,.regular,.regular1,.development-list,#service-banner img').waypoint(function () {
            $(this.element).addClass("bottom-box-animate");
        }, { offset: "2400px" });

    }
    else {
        $('.ani-bottom,.regular,.regular1,.development-list,#service-banner img').waypoint(function () {
            $(this.element).addClass("bottom-box-animate");
        }, { offset: "800px" });
    }
    ///////


    if (matchMedia("(max-width: 500px)").matches) {
        $('.ani-top,.regular').waypoint(function () {
            $(this.element).addClass("top-box-animate");
        }, { offset: "2400px" });

    }
    else {
        $('.ani-top').waypoint(function () {
            $(this.element).addClass("top-box-animate");
        }, { offset: "800px" });
    }
    ///////



});






//Start of Tawk.to Script (0.7.2)

var Tawk_API = Tawk_API || {};
Tawk_API.visitor = JSON.parse("{\"name\":\"\",\"email\":\"\"}");
var Tawk_LoadStart = new Date();
(function () {
    var s1 = document.createElement('script'), s0 = document.getElementsByTagName('script')[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/606c1654f7ce182709377750/1f2j3eera';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
})();

//End of Tawk.to Script (0.7.2)


//hire page - vatsal
$(document).ready(function () {

    //tabbing js
    tabControl();

    var resizeTimer;
    $(window).on('resize', function (e) {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
            tabControl();
        }, 250);
    });

    function tabControl() {
        var tabs = $('.tabbed-content').find('.tabs');
        if (tabs.is(':visible')) {
            tabs.find('a').on('click', function (event) {
                event.preventDefault();
                var target = $(this).attr('href'),
                    tabs = $(this).parents('.tabs'),
                    buttons = tabs.find('a'),
                    item = tabs.parents('.tabbed-content').find('.item');
                buttons.removeClass('active');
                item.removeClass('active');
                $(this).addClass('active');
                $(target).addClass('active');
            });
        } else {
            $('.item').on('click', function () {
                var container = $(this).parents('.tabbed-content'),
                    currId = $(this).attr('id'),
                    items = container.find('.item');
                container.find('.tabs a').removeClass('active');
                items.removeClass('active');
                $(this).addClass('active');
                container.find('.tabs a[href$="#' + currId + '"]').addClass('active');
            });
        }
    }

    if ($(window).width() > 767) {

        //accordion js
        $(function () {

            'use strict';

            // Give Active Class

            $('.work-item').first().addClass('active');

            // Show First Info

            $('.info').first().show().css('display', 'flex').animate({ width: '65%' });

            // Show Info On Click

            $('.work-item').click(function () {

                $(this).addClass("active").siblings('.work-item').removeClass('active');

                $(this).next().show().css('display', 'flex').animate({ width: '65%' }).siblings('.info').animate({ width: 0 }, function () {

                    $(this).hide();

                });

            });

        });
    }

    if ($(window).width() <= 767) {
        $('.work-item').click(function (e) {
            e.preventDefault();
            if (!$(this).hasClass('active')) {
                $('.work-item').removeClass('active');
                $('.info').slideUp(500);
                $(this).addClass('active');
                $(this).next('.info').slideDown(500);
            }
            else if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $(this).next('.info').slideUp(500);
            }
        });
    }

    MatchHeight();
});