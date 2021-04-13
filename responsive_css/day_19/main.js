// init variables with dom tag objects
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

// variable object(navToggle) with click event listener 
// variable object(nav) toggles(exchanges) class in dom tag object
navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav--visible');
})