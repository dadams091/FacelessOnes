const accessGranted = document.querySelector('#access-granted');

document.body.addEventListener('click', () => {
    document.querySelector('#access-denied').style.display = 'none';
    accessGranted.style.display = 'block';

    setTimeout(() => {
        document.querySelector('#main-content').style.display = 'block';
        accessGranted.style.display = 'none';
    }, 2500)
}, {once: true});