const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const messageDiv = document.getElementById('message');

        const users = JSON.parse(localStorage.getItem('users')) || [];

        if (users.find(user => user.email === email)) {
            messageDiv.textContent = 'This email is already registered';
            messageDiv.className = 'message error';
            messageDiv.style.display = 'block';
            return;
        }

        users.push({ email, password });
        localStorage.setItem('users', JSON.stringify(users));

        messageDiv.textContent = 'Successful registration. Redirecting...';
        messageDiv.className = 'message success';
        messageDiv.style.display = 'block';

        setTimeout(() => {
            window.location.href = 'login.html';
        }, 1500);
    });
}