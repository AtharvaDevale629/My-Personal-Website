// Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Form Submission
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const feedback = document.getElementById('form-feedback');
    feedback.textContent = 'Thank you! Your message has been sent.';
    feedback.style.color = 'green';
    this.reset();
});
