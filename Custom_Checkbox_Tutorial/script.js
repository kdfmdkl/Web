const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const usernameError = document.getElementById("usernameError");
const passwordError = document.getElementById("passwordError");

// Validate và submit form
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Clear errors
  usernameError.textContent = "";
  passwordError.textContent = "";

  let isValid = true;

  // Validate username
  if (usernameInput.value.trim() === "") {
    usernameError.textContent = "Username or email is required";
    isValid = false;
  } else if (usernameInput.value.trim().length < 3) {
    usernameError.textContent = "Username must be at least 3 characters";
    isValid = false;
  }

  // Validate password
  if (passwordInput.value === "") {
    passwordError.textContent = "Password is required";
    isValid = false;
  } else if (passwordInput.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters";
    isValid = false;
  }

  if (isValid) {
    console.log("Form submitted:", {
      username: usernameInput.value,
      password: passwordInput.value,
      rememberMe: document.getElementById("rememberMe").checked,
    });
    // Gửi dữ liệu tới server ở đây
    alert("Login successful! (Demo)");
  }
});

// Real-time validation
usernameInput.addEventListener("blur", () => {
  if (
    usernameInput.value.trim() !== "" &&
    usernameInput.value.trim().length < 3
  ) {
    usernameError.textContent = "Username must be at least 3 characters";
  } else {
    usernameError.textContent = "";
  }
});

passwordInput.addEventListener("blur", () => {
  if (passwordInput.value !== "" && passwordInput.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters";
  } else {
    passwordError.textContent = "";
  }
});
