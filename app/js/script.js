$(function() {

    $('.burger, .header__li-link').on('click', function(e) {
        $('.burger__button, .header').toggleClass('active');
        $('.small-header__nav').toggleClass('hide');
        $('body').toggleClass('lock');
    });

    $('.ourwork__item-trigger').on('click', function()  {
        $(this).next('.ourwork__item-content').slideToggle(400)
        let imgWrapper = $(this).children( ".ourwork__item-img-wrapper" ).toggleClass('active')
        let eyeHref = $(this).children( ".ourwork__item-circle" )
            .children('.ourwork__view')
            .children('.ourwork__icon')
            .children('.ourwork__icon-href')
        if (imgWrapper.hasClass( "active" )) {
            eyeHref.attr('href', './img/sprite.svg#see-less')
        } else {
            eyeHref.attr('href', './img/sprite.svg#see-more')
        }
    })

    let star = document.querySelector('.services__icon4')
    window.addEventListener("scroll", function() {
        star.style.transform = "rotate("+window.pageYOffset/2+"deg)";
    });

    window.onscroll = function showHeader () {
        let header = document.querySelector('.small-header')
        if(window.pageYOffset > 1000) {
            header.classList.add('active')
        } else {
            header.classList.remove('active')
        }
    }

    let bg1 = document.querySelector('.about__figures-circle')
    let bg2 = document.querySelector('.about__figures-various');
    let bg3 = document.querySelector('.about__figures-vector');
    let bg4 = document.querySelector('.about__figures-long-vector');
    let bg5 = document.querySelector('.services__vector-arrow');
    let bg6 = document.querySelector('.services__vector');
    let bg7 = document.querySelector('.whyus__decor-line-big');
    let bg8 = document.querySelector('.whyus__circle');

    window.addEventListener('mousemove', function(e) {
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
});
