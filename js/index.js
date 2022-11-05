const button = document.querySelector('.mobile-nav-toggle')
const nav = document.querySelector('#primary-navigation')

button.addEventListener('click', () => {
    if (nav.style.transform == 'translateX(100%)') {
        nav.style.transform = 'translateX(0%)'
        button.style.backgroundImage = "url('../assets/shared/icon-close.svg')"
    } else {
        nav.style.transform = 'translateX(100%)'
        button.style.backgroundImage = "url('../assets/shared/icon-hamburger.svg')"
    }

})