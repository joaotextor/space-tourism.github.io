/*
~ -----------------
~ NAVIGATION
~ -----------------
*/

const navToggle = document.querySelector('.mobile-nav-toggle')
const nav = document.querySelector('.primary-navigation')

navToggle.addEventListener('click', () => {
    const visibility = nav.getAttribute('data-visible')
    if (visibility === 'false') {
        nav.style.transform = 'translateX(0%)'
        navToggle.style.backgroundImage = "url('./assets/shared/icon-close.svg')"
        nav.setAttribute('data-visible', true)
        navToggle.firstChild.setAttribute('aria-expanded', 'true')
    } else {
        nav.style.transform = 'translateX(100%)'
        navToggle.style.backgroundImage = "url('./assets/shared/icon-hamburger.svg')"
        nav.setAttribute('data-visible', false)
        navToggle.firstChild.setAttribute('aria-expanded', 'false')
    }

})