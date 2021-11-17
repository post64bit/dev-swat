$(function() {

    $('.burger, .header__li-link').on('click', function(e) {
        $('.burger__button, .header').toggleClass('active');
        $('.small-header__nav').toggleClass('hide');
        $('body').toggleClass('lock');
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
    window.addEventListener('mousemove', function(e) {
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;
        bg1.style.transform = 'translate(-' + x * 80 + 'px, -' + y * 80 + 'px)';
    });
    let bg2 = document.querySelector('.about__figures-various');
    window.addEventListener('mousemove', function(e) {
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;
        bg2.style.transform = 'translate(-' + x * 20 + 'px, -' + y * 20 + 'px)';
    });
    let bg3 = document.querySelector('.about__figures-vector');
    window.addEventListener('mousemove', function(e) {
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;
        bg3.style.transform = 'translate(-' + x * 40 + 'px, -' + y * 40 + 'px)';
    });
    let bg4 = document.querySelector('.about__figures-long-vector');
    window.addEventListener('mousemove', function(e) {
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;
        bg4.style.transform = 'translate(-' + x * 30 + 'px, -' + y * 30 + 'px)';
    });
    let bg5 = document.querySelector('.services__vector-arrow');
    window.addEventListener('mousemove', function(e) {
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;
        bg5.style.transform = 'translate(-' + x * 60 + 'px, -' + y * 60 + 'px)';
    });
    let bg6 = document.querySelector('.services__vector');
    window.addEventListener('mousemove', function(e) {
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;
        bg6.style.transform = 'translate(-' + x * 30 + 'px, -' + y * 30 + 'px)';
    });
});
