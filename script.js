/* Part 1: Event Handling - Theme Toggle */
document.getElementById('theme-toggle').addEventListener('click', function() {
  // Toggle the 'dark-mode' class on the body element
  document.body.classList.toggle('dark-mode');
  // Update button text based on mode
  this.textContent = document.body.classList.contains('dark-mode') 
    ? 'Switch to Light Mode' 
    : 'Toggle Light/Dark Mode';
});

/* Part 2: Interactive Feature - Collapsible FAQ Section */
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(question => {
  question.addEventListener('click', function() {
    // Toggle the 'active' class to show/hide the answer
    const answer = this.nextElementSibling;
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
  });
});

/* Part 3: Form Validation */
const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const formSuccess = document.getElementById('form-success');

// Validate name (at least 2 characters)
function validateName(name) {
  if (name.length < 2) {
    nameError.textContent = 'Name must be at least 2 characters long';
    return false;
  }
  nameError.textContent = '';
  return true;
}

// Validate email (basic regex for email format)
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    emailError.textContent = 'Please enter a valid email address';
    return false;
  }
  emailError.textContent = '';
  return true;
}

// Validate password (at least 8 characters, including a number and a special character)
function validatePassword(password) {
  const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
  if (!passwordRegex.test(password)) {
    passwordError.textContent = 'Password must be 8+ characters, with a number and special character';
    return false;
  }
  passwordError.textContent = '';
  return true;
}

// Real-time validation on input
nameInput.addEventListener('input', () => validateName(nameInput.value));
emailInput.addEventListener('input', () => validateEmail(emailInput.value));
passwordInput.addEventListener('input', () => validatePassword(passwordInput.value));

// Form submission handling
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent page reload
  const isNameValid = validateName(nameInput.value);
  const isEmailValid = validateEmail(emailInput.value);
  const isPasswordValid = validatePassword(passwordInput.value);

  if (isNameValid && isEmailValid && isPasswordValid) {
    formSuccess.textContent = 'Form submitted successfully!';
    form.reset(); // Clear form
    setTimeout(() => {
      formSuccess.textContent = ''; // Clear success message after 3 seconds
    }, 3000);
  } else {
    formSuccess.textContent = '';
  }
});
