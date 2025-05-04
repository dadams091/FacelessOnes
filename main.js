bodyNode = document.querySelector('body');
accessDeniedText = document.querySelector('#access-denied');
accessGrantedText = document.querySelector('#access-granted');


bodyNode.addEventListener('click', () => {
    console.log('hello');
    accessDeniedText.style.display = 'none';
    accessGrantedText.style.display = 'block';
});