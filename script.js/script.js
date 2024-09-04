document.addEventListener("DOMContentLoaded", function() {
    // Contact Form Submission
    document.querySelector('.contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for reaching out! We will get back to you soon.');
        this.reset();
    });

    // Newsletter Signup Form Submission
    document.querySelector('.signup-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('You have successfully subscribed to our newsletter!');
        this.reset();
    });
});
