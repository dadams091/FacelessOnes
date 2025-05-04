bodyNode = document.querySelector('body');
accessDeniedText = document.querySelector('#access-denied');
accessGrantedText = document.querySelector('#access-granted');
mainContentDiv = document.querySelector('#main-content');


bodyNode.addEventListener('click', () => {
    accessDeniedText.style.display = 'none';
    accessGrantedText.style.display = 'block';

    setTimeout(() => {
        mainContentDiv.style.display = 'block';
        accessGrantedText.style.display = 'none';
    }, 2500)
}, {once: true});