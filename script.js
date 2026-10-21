// Interaction 1: Dark / Light Mode Toggle
const themeToggleBtn = document.getElementById('theme-toggle');
const bodyElement = document.body;
const themeIcon = themeToggleBtn.querySelector('i');

themeToggleBtn.addEventListener('click', () => {
    bodyElement.classList.toggle('light-mode');
    
    // Switch icon class based on mode
    if (bodyElement.classList.contains('light-mode')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
});

// Interaction 2: Show / Hide More Information (Read More Button)
const readMoreBtn = document.getElementById('read-more-btn');
const extraBio = document.getElementById('extra-bio');

readMoreBtn.addEventListener('click', () => {
    if (extraBio.style.display === 'none') {
        extraBio.style.display = 'block';
        readMoreBtn.textContent = 'Read Less';
    } else {
        extraBio.style.display = 'none';
        readMoreBtn.textContent = 'Read More';
    }
});