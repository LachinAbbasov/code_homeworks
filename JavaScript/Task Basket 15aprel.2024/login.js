const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  
  const users = JSON.parse(localStorage.getItem('users')) || [];


  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    Swal.fire({
        icon: 'success',
        title: 'Login Successful!',
        showConfirmButton: false,
        timer: 2000
      }).then(() => {
        window.location.href = 'loginindex.html'; 
      });
  } else {
    
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Invalid username or password!',
    });
  }
});
