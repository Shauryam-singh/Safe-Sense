document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('light-mode-toggle');
    const modeIcon = document.getElementById('mode-icon');
    const body = document.body;
    const navbarToggler = document.querySelector('.navbar-toggler');

    // Check if light mode is stored in localStorage and apply it
    if (localStorage.getItem('light-mode') === 'enabled') {
        body.classList.add('light-mode');
        toggleButton.classList.remove('btn-outline-light');
        toggleButton.classList.add('btn-outline-dark');
        modeIcon.classList.remove('bi-sun');
        modeIcon.classList.add('bi-moon');
        navbarToggler.classList.remove('navbar-dark');
        navbarToggler.classList.add('navbar-light');
    }

    // Toggle the mode
    toggleButton.addEventListener('click', function() {
        body.classList.toggle('light-mode');

        // Toggle the button's classes and icon based on the mode
        if (body.classList.contains('light-mode')) {
            toggleButton.classList.remove('btn-outline-light');
            toggleButton.classList.add('btn-outline-dark');
            modeIcon.classList.remove('bi-sun');
            modeIcon.classList.add('bi-moon');
            navbarToggler.classList.remove('navbar-dark');
            navbarToggler.classList.add('navbar-light');
            localStorage.setItem('light-mode', 'enabled');
        } else {
            toggleButton.classList.remove('btn-outline-dark');
            toggleButton.classList.add('btn-outline-light');
            modeIcon.classList.remove('bi-moon');
            modeIcon.classList.add('bi-sun');
            navbarToggler.classList.remove('navbar-light');
            navbarToggler.classList.add('navbar-dark');
            localStorage.setItem('light-mode', 'disabled');
        }
    });
});

document.getElementById("scroll-icon").addEventListener("click", function() {
    document.getElementById("features").scrollIntoView({ behavior: "smooth" });
});