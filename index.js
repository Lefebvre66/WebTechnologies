// DESLIZADOR DE IMAGENES

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (slides.length === 0 || dots.length === 0) return;
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}


//PREVENT TO REDIRECT TO REGISTER WHEN YOU ARE ALREADY LOGGED IN

document.addEventListener('DOMContentLoaded', () => {
  const registerButton = document.querySelector('.blue-button');
  if (registerButton && localStorage.getItem('loggedIn') === 'true') {
    registerButton.textContent = 'YOU ARE LOGGED IN';
    registerButton.style.backgroundColor = '#28a745';
    registerButton.style.borderColor = '#28a745';
    registerButton.style.cursor = 'default';
    registerButton.addEventListener('click', (event) => event.preventDefault());
  }


  //REGISTRATION CODE
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
});