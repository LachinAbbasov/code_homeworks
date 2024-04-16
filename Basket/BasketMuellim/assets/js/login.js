console.log("HEY LOGIN");
import data from "./data.js";

const loginForm = document.querySelector("#login-form");
const userNameInp = document.querySelector("#user-name");
const passwordInp = document.querySelector("#user-password");
const rememberMe = document.querySelector("#remember-me");

window.addEventListener("load", () => {
  const rememberedUsername = localStorage.getItem("rememberedUsername");
  const rememberedPassword = localStorage.getItem("rememberedPassword");
  if (rememberedUsername && rememberedPassword) {
    userNameInp.value = rememberedUsername;
    passwordInp.value = rememberedPassword;
    rememberMe.checked = true;
  }
});

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const localUsers = JSON.parse(localStorage.getItem("users")) || [];
  const enteredUsername = userNameInp.value;
  const enteredPassword = passwordInp.value;

  const check = localUsers.find(
    (x) => x.username == enteredUsername && x.password == enteredPassword
  );

  if (check) {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "User Signed In successfully",
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      check.isLogged = true;
      localStorage.setItem("users", JSON.stringify(localUsers));

      if (rememberMe.checked) {
        localStorage.setItem("rememberedUsername", enteredUsername);
        localStorage.setItem("rememberedPassword", enteredPassword);
      } else {
        sessionStorage.setItem("rememberedUsername", enteredUsername);
        sessionStorage.setItem("rememberedPassword", enteredPassword);
      }

      window.location.replace('index.html');
    });
  } else {
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "Username or password is incorrect!",
      showConfirmButton: false,
      timer: 1500,
    })
  }
});

// göz iconun funksiyası

document.addEventListener('DOMContentLoaded', function () {
  const passwordField = document.getElementById('user-password');
  const showPasswordButton = document.getElementById('show-password');

  showPasswordButton.addEventListener('click', function () {
      const fieldType = passwordField.getAttribute('type');
      if (fieldType === 'password') {
          passwordField.setAttribute('type', 'text');
      } else {
          passwordField.setAttribute('type', 'password');
      }
  });
});
