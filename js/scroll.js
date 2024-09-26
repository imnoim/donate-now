// script.js
window.addEventListener('scroll', function() {
    const header = document.getElementById('features-button');
    if (window.scrollY > 40) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
