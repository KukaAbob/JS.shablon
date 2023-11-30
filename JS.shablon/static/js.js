document.getElementById('registerForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  console.log('Регистрация:');
  console.log('Имя:', username);
  console.log('Эл. почта:', email);
  console.log('Пароль:', password);
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const loginUsername = document.getElementById('loginUsername').value;
  const loginPassword = document.getElementById('loginPassword').value;
  
  console.log('Вход:');
  console.log('Эл. почта или телефон:', loginUsername);
  console.log('Пароль:', loginPassword);
});
