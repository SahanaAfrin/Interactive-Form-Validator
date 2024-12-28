document.addEventListener('DOMContentLoaded', () => {
    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const passwordInput = document.getElementById('password');
    const submitBtn = document.getElementById('submitBtn');

    const firstNameError = document.getElementById('firstNameError');
    const lastNameError = document.getElementById('lastNameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const passwordError = document.getElementById('passwordError');

    const isNameValid = name => /^[A-Za-z]+$/.test(name.trim());
    const isEmailValid = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPhoneValid = phone => /^\d{10}$/.test(phone);
    const isPasswordValid = password =>
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

    const toggleSubmitButton = () => {
      submitBtn.disabled = !(
        isNameValid(firstNameInput.value) &&
        isEmailValid(emailInput.value) &&
        isPhoneValid(phoneInput.value) &&
        isPasswordValid(passwordInput.value)
      );
    };

    firstNameInput.addEventListener('input', () => {
      firstNameError.style.display = isNameValid(firstNameInput.value) ? 'none' : 'block';
      toggleSubmitButton();
    });

    lastNameInput.addEventListener('input', () => {
      lastNameError.style.display = isNameValid(lastNameInput.value) ? 'none' : 'block';
      toggleSubmitButton();
    });

    emailInput.addEventListener('input', () => {
      emailError.style.display = isEmailValid(emailInput.value) ? 'none' : 'block';
      toggleSubmitButton();
    });

    phoneInput.addEventListener('input', () => {
      phoneError.style.display = isPhoneValid(phoneInput.value) ? 'none' : 'block';
      toggleSubmitButton();
    });

    passwordInput.addEventListener('input', () => {
      passwordError.style.display = isPasswordValid(passwordInput.value) ? 'none' : 'block';
      toggleSubmitButton();
    });

    document.getElementById('registrationForm').addEventListener('submit', e => {
      e.preventDefault();
      alert('Registration Successful!');
    });
  });