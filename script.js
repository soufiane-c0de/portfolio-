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