const registerForm = document.getElementById('registerForm');

registerForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const user = {
        username: username,
        email: email,
        password: password
    };

    let users = JSON.parse(localStorage.getItem('users')) || [];

    const existingUser = users.find(u => u.username === username || u.email === email);
    if (existingUser) {
        
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Username or email already exists!',
        });
        return;
    }

    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));

    
    Swal.fire({
        icon: 'success',
        title: 'Registration Successful!',
        showConfirmButton: false,
        timer: 1500
    }).then(() => {
        window.location.href = 'login.html'; 
    });

    
    this.reset();
});
w