// Initialize EmailJS with your public key
(function() {
    // Check if initialization is successful
    try {
        emailjs.init("YOUR_PUBLIC_KEY"); // Make sure you replaced this with your actual public key
        console.log("EmailJS initialized successfully");
    } catch (error) {
        console.error("EmailJS initialization error:", error);
    }
})();

// Add this function to handle form submission
function sendEmail(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Check for empty fields
    if (name === '') {
        alert('Please enter your name');
        return;
    }
    
    if (email === '') {
        alert('Please enter your email');
        return;
    }
    
    // Basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    if (message === '') {
        alert('Please enter your message');
        return;
    }
    
    // If all validations pass, send the email
    const formData = new FormData(this);
    
    fetch('https://formsubmit.co/soufiane.boughezroun@gmail.com', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        // Clear the form
        this.reset();
        // Show success message
        alert('Message sent successfully! Thank you for contacting us.');
    })
    .catch(error => {
        alert('There was an error sending your message. Please try again.');
        console.error('Error:', error);
    });
}

// Add event listener to your form
document.getElementById('contactForm').addEventListener('submit', sendEmail);

// Mobile Menu Functionality
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector('.close-menu');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
});

closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = 'auto'; // Re-enable scrolling
});

// Close menu when clicking a link
const mobileLinks = document.querySelectorAll('.mobile-menu-links a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// Essential mobile menu functions
function openNav() {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Force solid background
    mobileMenu.style.backgroundColor = '#000000';
    mobileMenu.style.opacity = '1';
}

function closeNav() {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Fix for mobile menu transparency
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.querySelector('.mobile-menu');
    
    // Force opacity when scrolling (especially near projects section)
    window.addEventListener('scroll', function() {
        if (mobileMenu.classList.contains('active')) {
            mobileMenu.style.backgroundColor = '#000000';
            mobileMenu.style.opacity = '1';
        }
    });
    
    // Ensure menu is opaque when hamburger is clicked
    document.querySelector('.hamburger')?.addEventListener('click', function() {
        setTimeout(function() {
            mobileMenu.style.backgroundColor = '#000000';
            mobileMenu.style.opacity = '1';
        }, 10);
    });
});