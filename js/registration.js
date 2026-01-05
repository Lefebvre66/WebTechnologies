document.addEventListener('DOMContentLoaded', () => {
  const registerButton = document.querySelector('.blue-button');
  if (registerButton && localStorage.getItem('loggedIn') === 'true') {
    registerButton.textContent = 'YOU ARE LOGGED IN';
    registerButton.style.backgroundColor = '#28a745';
    registerButton.style.borderColor = '#28a745';
    registerButton.style.cursor = 'default';
    registerButton.addEventListener('click', (event) => event.preventDefault());
  }
});