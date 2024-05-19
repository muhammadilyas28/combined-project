
document.getElementById('hamburger-btn').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    if (navLinks.classList.contains('hidden')) {
        navLinks.classList.remove('hidden');
    } else {
        navLinks.classList.add('hidden');
    }
});




