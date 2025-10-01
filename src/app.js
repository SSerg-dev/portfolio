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
        video.classList.add('is-active');
    }
    
})