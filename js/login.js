const emailRegex = RegExp(/^\S+@\S+\.\S+$/);
const loginForm = document.querySelector('.login-form');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const alert = document.querySelector('.warning');

loginForm.addEventListener('submit', (e) => {
  const eResult = emailRegex.test(emailInput.value);
  if (!eResult || passwordInput.value.length < 6) {
    e.preventDefault();
    alert.innerHTML =
      'Email address must be valid and password must contain at least 6 characters';
  }
});
