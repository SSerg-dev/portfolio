import Swiper from 'swiper';
import { Pagination, A11y } from 'swiper';
Swiper.use([Pagination, A11y]);

document.addEventListener('DOMContentLoaded', () => {

    // menu
    const menuButton = document.querySelector('.js-menu-toggle')
    menuButton.onclick = function () {
        if (menuButton.classList.contains('menu__toggle--active')) {
            menuButton.classList.remove('menu__toggle--active')
            menuButton.setAttribute('aria-expanded', 'false')
        } else {
            menuButton.classList.add('menu__toggle--active')
            menuButton.setAttribute('aria-expanded', 'true')
        }
    }

    // video
    const videoButton = document.querySelector('.js-video-play');
    videoButton.onclick = function () {
        const video = videoButton.parentElement;
        const videoIframe = video.querySelector('iframe')
        const options = {
            event: 'command',
            func: 'playVideo'
        }
        videoIframe.contentWindow.postMessage(JSON.stringify(options), '*')
        video.classList.add('is-active');
    }

    // Testimonials
    const swiper = new Swiper('.js-testimonials-slider', {
        modules: [Pagination, A11y],
        direction: 'horizontal',
        loop: true,
        speed: 600,
        autoHeight: true,
        spaceBetween: 20,
        slidesPerView: 1,
        a11y: true,
        pagination: {
            el: '.testimonials-slider__pagination',
            bulletElement: 'button',
            bulletClass: 'testimonials-slider__pagination-bullet',
            bulletActiveClass: 'testimonials-slider__pagination-bullet--active',
            clickable: true,
        },
        breakpoints: {
            // when windows width is >= 769px
            769: {
                slidesPerView: 'auto',
                centeredSlides: true,
                spaceBetween: 0,
                slideToClickedSlide: true,
            }
        }
    })
})