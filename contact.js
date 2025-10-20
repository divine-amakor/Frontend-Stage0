document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');
  const successMessage = document.getElementById('successMessage');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const fullName = document.getElementById('fullName');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');
    
    let isValid = true;
    
    // Clear previous errors
    clearErrors();
    
    // Validate full name
    if (!fullName.value.trim()) {
      showError('nameError', 'Full name is required');
      isValid = false;
    }
    
    // Validate email
    if (!email.value.trim()) {
      showError('emailError', 'Email is required');
      isValid = false;
    } else if (!isValidEmail(email.value)) {
      showError('emailError', 'Please enter a valid email address');
      isValid = false;
    }
    
    // Validate subject
    if (!subject.value.trim()) {
      showError('subjectError', 'Subject is required');
      isValid = false;
    }
    
    // Validate message
    if (!message.value.trim()) {
      showError('messageError', 'Message is required');
      isValid = false;
    } else if (message.value.trim().length < 10) {
      showError('messageError', 'Message must be at least 10 characters long');
      isValid = false;
    }
    
    if (isValid) {
      successMessage.textContent = 'Thank you! Your message has been sent successfully.';
      successMessage.style.display = 'block';
      form.reset();
    }
  });
  
  function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.style.display = 'block';
  }
  
  function clearErrors() {
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(element => {
      element.textContent = '';
      element.style.display = 'none';
    });
    successMessage.textContent = '';
    successMessage.style.display = 'none';
  }
  
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});