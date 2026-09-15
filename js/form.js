// Form Handling with Formspree Integration
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value;
            });
            
            // Show loading state
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.innerHTML;
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitButton.disabled = true;
            
            // Submit to Formspree (you'll need to replace with your actual Formspree endpoint)
            fetch('https://formspree.io/f/your-form-id', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formObject)
            })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Network response was not ok');
            })
            .then(data => {
                // Show success message
                showFormMessage('Message sent successfully! Thank you for reaching out.', 'success');
                contactForm.reset();
            })
            .catch(error => {
                // Show error message
                showFormMessage('Failed to send message. Please try again later.', 'error');
                console.error('Form submission error:', error);
            })
            .finally(() => {
                // Reset button state
                submitButton.innerHTML = originalButtonText;
                submitButton.disabled = false;
            });
        });
    }
    
    function showFormMessage(message, type) {
        // Remove any existing messages
        const existingMessage = contactForm.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        // Create message element
        const messageDiv = document.createElement('div');
        messageDiv.className = `form-message ${type}`;
        messageDiv.textContent = message;
        
        // Style the message
        messageDiv.style.padding = '1rem';
        messageDiv.style.borderRadius = 'var(--radius-md)';
        messageDiv.style.marginTop = '1rem';
        messageDiv.style.textAlign = 'center';
        messageDiv.style.fontWeight = '600';
        
        if (type === 'success') {
            messageDiv.style.backgroundColor = 'var(--dark-accent)';
            messageDiv.style.color = 'var(--dark-bg)';
        } else {
            messageDiv.style.backgroundColor = 'rgba(255, 0, 0, 0.1)';
            messageDiv.style.color = '#ff6b6b';
            messageDiv.style.border = '1px solid rgba(255, 0, 0, 0.2)';
        }
        
        // Insert message after form
        contactForm.appendChild(messageDiv);
        
        // Remove message after 5 seconds
        setTimeout(() => {
            messageDiv.remove();
        }, 5000);
    }
    
    // Add input validation and visual feedback
    const inputs = contactForm.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            if (this.value.trim() !== '') {
                this.classList.add('has-value');
            } else {
                this.classList.remove('has-value');
            }
        });
        
        // Initialize state
        if (input.value.trim() !== '') {
            input.classList.add('has-value');
        }
    });
});