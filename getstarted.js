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

// Image preview function
function previewImage() {
    const fileInput = document.getElementById('blueprint');
    const previewContainer = document.getElementById('image-preview');
    const previewImage = document.getElementById('preview-img');
    const clearButtonContainer = document.getElementById('clear-button-container');

    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function(event) {
            previewImage.src = event.target.result;
            previewContainer.style.display = 'block';
            clearButtonContainer.style.display = 'block';
        };

        reader.readAsDataURL(file);
    }
}

// Clear image function
function clearImage() {
    const fileInput = document.getElementById('blueprint');
    const previewContainer = document.getElementById('image-preview');
    const previewImage = document.getElementById('preview-img');
    const clearButtonContainer = document.getElementById('clear-button-container');

    fileInput.value = '';
    previewImage.src = '';
    previewContainer.style.display = 'none';
    clearButtonContainer.style.display = 'none';
}
