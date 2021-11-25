$(function() {

    $('.burger, .header__li-link').on('click', function(e) {
        $('.burger__button, .header').toggleClass('active');
        $('.small-header').toggleClass('hide');
        $('body').toggleClass('lock');
    });

    $('.ourwork__item-trigger').on('click', function()  {
        $(this).next('.ourwork__item-content').slideToggle(400)
        let imgWrapper = $(this).children( ".ourwork__item-img-wrapper" ).toggleClass('active')
        let iconText = $(this).find('.ourwork__icon-text')
        let eyeHref = $(this).find( ".ourwork__icon-href" )
        if (imgWrapper.hasClass( "active" )) {
            eyeHref.attr('href', './img/sprite.svg#see-less')
            iconText.html('click to see less • click to see less •')
        } else {
            eyeHref.attr('href', './img/sprite.svg#see-more')
            iconText.html('click to see more • click to see more •')
        }
    })

    window.onresize = function(event) {
        let circleText = $('.circle-text')
        if (window.innerWidth < 770) {
            circleText.html('Scroll down • Scroll down • ')
        } else {
            circleText.html('Scroll sideways to navigate •')
        }
    }

    let star = document.querySelector('.services__icon4')
    window.addEventListener("scroll", function() {
        star.style.transform = "rotate("+window.pageYOffset/2+"deg)";
    });

    window.onscroll = function showHeader () {
        let header = document.querySelector('.small-header')
        let whatsapp = document.querySelector('.whatsapp__pinned')
        let burger = document.querySelector('.burger__fixed')
        if(window.pageYOffset > 100) {
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
