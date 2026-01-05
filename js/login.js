//SIGN IN CODE
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const messageDiv = document.getElementById('message');
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
            messageDiv.textContent = 'Successful login.';
            messageDiv.className = 'message success';
            messageDiv.style.display = 'block';
            setTimeout(() => {
                window.location.href = 'registration.html';
            }, 1500);
            localStorage.setItem('loggedIn', 'true');
        } else {
            messageDiv.textContent = 'Wrong credentials.';
            messageDiv.className = 'message error';
            messageDiv.style.display = 'block';
        }
    });
}
