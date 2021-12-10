$(function () {

    $('.burger, .header__li-link').on('click', function (e) {
        $('.burger__button, .header').toggleClass('active');
        $('.small-header').toggleClass('hide');
        $('body').toggleClass('lock');
    });

    $('.ourwork__item-trigger').on('click', function () {
        $(this).next('.ourwork__item-content').slideToggle(400)
        let imgWrapper = $(this).children(".ourwork__item-img-wrapper").toggleClass('active')
        let iconText = $(this).find('.ourwork__icon-text')
        let eyeHref = $(this).find(".ourwork__icon-href")
        if (imgWrapper.hasClass("active")) {
            eyeHref.attr('href', './img/sprite.svg#see-less')
            iconText.html('click to see less • click to see less •')
        } else {
            eyeHref.attr('href', './img/sprite.svg#see-more')
            iconText.html('click to see more • click to see more •')
        }
    })

    window.onresize = function (event) {
        let circleText = $('.circle-text')
        if (window.innerWidth < 770) {
            circleText.html('Scroll down • Scroll down • ')
        } else {
            circleText.html('Scroll sideways to navigate •')
        }
    }

    let star = document.querySelector('.services__icon4')
    window.addEventListener("scroll", function () {
        star.style.transform = "rotate(" + window.pageYOffset / 2 + "deg)";
    });

    window.onscroll = function showHeader() {
        let header = document.querySelector('.small-header')
        let whatsapp = document.querySelector('.whatsapp__pinned')
        let burger = document.querySelector('.burger__fixed')
        if (window.pageYOffset > 100) {
            header.classList.add('active')
            whatsapp.classList.add('active')
            burger.classList.add('active')
        } else {
            header.classList.remove('active')
            whatsapp.classList.remove('active')
            burger.classList.remove('active')
        }
    }

    let bg1 = document.querySelector('.about__figures-circle')
    let bg2 = document.querySelector('.about__figures-various');
    let bg3 = document.querySelector('.about__figures-vector');
    let bg4 = document.querySelector('.about__long-vector');
    let bg5 = document.querySelector('.services__vector-arrow');
    let bg6 = document.querySelector('.services__vector');
    let bg7 = document.querySelector('.whyus__decor-line-big');
    let bg8 = document.querySelector('.whyus__circle');

    window.addEventListener('mousemove', function (e) {
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;
        bg1.style.transform = 'translate(-' + x * 80 + 'px, -' + y * 80 + 'px)';
        bg2.style.transform = 'translate(-' + x * 20 + 'px, -' + y * 20 + 'px)';
        bg3.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
        bg4.style.transform = 'translate(-' + x * 30 + 'px, -' + y * 30 + 'px)';
        bg5.style.transform = 'translate(-' + x * 90 + 'px, -' + y * 90 + 'px)';
        bg6.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
        bg7.style.transform = 'translate(-' + x * 40 + 'px, -' + y * 40 + 'px)';
        bg8.style.transform = 'translate(-' + x * 70 + 'px, -' + y * 70 + 'px)';
    });

    $(document).scroll(function () {
        var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
        if (scrollBottom > 200 && scrollBottom < 1700) {
            $('.address__arrow').css('opacity', '1');
        } else {
            $('.address__arrow').css('opacity', '0');
        }
    });

    function getBrowser() {
        var aKeys = ["MSIE", "Firefox", "Safari", "Chrome", "Opera"],
            nIdx = aKeys.length - 1;
        for (nIdx; nIdx > -1 && navigator.userAgent.indexOf(aKeys[nIdx]) === -1; nIdx--) ;
        return aKeys[nIdx]
    }

    if(getBrowser() !== 'Safari') {
        $(".address__arrow-top").on("click", function () {
            $(window).scrollTop($(window).scrollTop() - 170)
        });

        $(".address__arrow-bottom").on("click", function () {
            $(window).scrollTop($(window).scrollTop() + 170)
        });
    }

    if (getBrowser() === 'Safari') {

        var scrolled = 0
        var timer;
        $(".address__arrow-top, .address__arrow-bottom").on("click", function(e) {
            if(e.target.className === 'address__arrow-top') scrollToTop();
            if(e.target.className === 'address__arrow-bottom') scrollToBottom();
        });
        function scrollToTop() {
            if (scrolled < 170) {
                $(window).scrollTop($(window).scrollTop() - 10)
                scrolled = scrolled + 10; //100 - скорость прокрутки
                timer = setTimeout(scrollToTop, 10);
            } else {
                clearTimeout(timer);
                scrolled = 0
            }
        }
        function scrollToBottom() {
            if (scrolled < 170) {
                $(window).scrollTop($(window).scrollTop() + 10)
                scrolled = scrolled + 10; //100 - скорость прокрутки
                timer = setTimeout(scrollToBottom, 10);
            } else {
                clearTimeout(timer);
                scrolled = 0
            }
        }


        (function ($) {
            $.fn.SmoothAnchors = function () {
                function scrollBodyTo(destination, hash) {
                    // Change the hash first, then do the scrolling. This retains the standard functionality of the back/forward buttons.
                    var scrollmem = $(document).scrollTop();
                    window.location.hash = hash;
                    $(document).scrollTop(scrollmem);
                    $("html,body").animate({
                        scrollTop: destination
                    }, 800);
                }

                if (typeof $().on == "function") {
                    $(document).on('click', 'a[href^="#"]', function () {
                        var href = $(this).attr("href");
                        if ($(href).length == 0) {
                            var nameSelector = "[name=" + href.replace("#", "") + "]";

                            if (href == "#") {
                                scrollBodyTo(0, href);
                            } else if ($(nameSelector).length != 0) {
                                scrollBodyTo($(nameSelector).offset().top, href);
                            } else {
                                // fine, we'll just follow the original link. gosh.
                                window.location = href;
                            }
                        } else {
                            scrollBodyTo($(href).offset().top, href);
                        }
                        return false;
                    });
                } else {
                    $('a[href^="#"]').click(function () {
                        var href = $(this).attr("href");

                        if ($(href).length == 0) {

                            var nameSelector = "[name=" + href.replace("#", "") + "]";

                            if (href == "#") {
                                scrollBodyTo(0, href);
                            } else if ($(nameSelector).length != 0) {
                                scrollBodyTo($(nameSelector).offset().top, href);
                            } else {
                                // fine, we'll just follow the original link. gosh.
                                window.location = href;
                            }
                        } else {
                            scrollBodyTo($(href).offset().top, href);
                        }
                        return false;
                    });
                }
            };
        })(jQuery);
        $().SmoothAnchors();
    }

});
