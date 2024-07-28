document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const messageBox = document.getElementById('message-box');
    const MAILLink = document.getElementById('MAIL-link');
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
function showMessage(message) {
        messageBox.textContent = message;
        messageBox.style.display = 'block';
        setTimeout(() => {
            messageBox.style.display = 'none';
        }, 3000); 
    }
    MAILLink.addEventListener('click', (e) => {
        e.preventDefault(); 
        showMessage('Stepstylestore123@gmail.com');
    });
});