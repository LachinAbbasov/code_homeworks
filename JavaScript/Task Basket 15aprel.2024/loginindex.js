const userLoggedIn = true; 
if (userLoggedIn) {
    const loginState = document.getElementById('loginState');
    const username = "lacin"; 

    loginState.innerHTML = `${username} <button id="logoutBtn">Logout</button>`;
    loginState.removeAttribute('href');
}

const logoutBtns = document.querySelectorAll('#logoutBtn');
logoutBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        
        Swal.fire({
            title: "DƏQİQ?",
            text: "Çıxsan Birdə Gəlmə!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yessss"
          }).then((result) => {
            if (result.isConfirmed) {window.location.href = 'login.html'; 
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          });
        
    });
});
