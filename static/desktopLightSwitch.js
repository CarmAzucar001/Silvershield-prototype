lightSwitchIcon = document.querySelector('.icon.switch');


lightSwitchIcon.addEventListener('click', function() {
    // Toggle the dark mode class on the body element
    document.body.classList.toggle('dark-mode');
});