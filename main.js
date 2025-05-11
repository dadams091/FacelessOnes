const accessGranted = document.querySelector('#access-granted');

// page load sequence
document.body.addEventListener('click', () => {
    document.querySelector('#access-denied').style.display = 'none';
    accessGranted.style.display = 'block';

    setTimeout(() => {
        document.querySelector('main').style.display = 'flex';
        accessGranted.style.display = 'none';
    }, 2500)
}, {once: true});

document.querySelector("#hamburger-menu").addEventListener('click', () => {
    document.querySelector("#hamburger-sidebar").style.display = 'flex';
});