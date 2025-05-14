const accessDenied = document.querySelector('#access-denied');
const accessGranted = document.querySelector('#access-granted');
const mainContent = document.querySelector('main');
const hamburgerMenu = document.querySelector('header button');
const hamburgerSidebar = document.querySelector("nav")
const closeButton = document.querySelector("#close")

// page load sequence
document.body.addEventListener('click', () => {
    accessDenied.style.display = 'none';
    accessGranted.style.display = 'block';

    setTimeout(() => {
        accessGranted.style.display = 'none';
        mainContent.style.display = 'flex';
    }, 1500)
}, {once: true});

hamburgerMenu.addEventListener('click', () => {
    hamburgerSidebar.style.display = 'flex';
});

closeButton.addEventListener('click', () => {
    hamburgerSidebar.style.display = 'none';
})