const hamburgerButton = document.querySelector('.hamburger');
const navlist = document.querySelector('.nav-list');

hamburgerButton.addEventListener('click', () => {
    const expanded = hamburgerButton.getAttribute('aria-expanded') === 'true' || false;

    hamburgerButton.classList.toggle('active');
    navlist.classList.toggle('active');

    hamburgerButton.setAttribute('aria-expanded', !expanded);
});
