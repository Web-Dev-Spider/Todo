const signupForm = document.getElementById("signupForm");
const errName = document.getElementById("errName");
const name = document.getElementById("name");
const email = document.getElementById("email");
const errEmail = document.getElementById("errEmail");
const passwordEl = document.getElementById("password");
const errPassword = document.getElementById("errPassword");
const errConfirmPass = document.getElementById("errConfirmPass");
const confirmPassEl = document.getElementById("confirmPass");
let isValid = true;

//Name validation
function validateName() {
  const name = signupForm.name.value.trim();
  if (name == "" || name.length < 4) {
    errName.innerText = "Minimum 4 characters needed";
    isValid = false;
  }
}
name.addEventListener("focus", () => {
  errName.innerText = "";
});

//Email validation
function validateEmail() {
  const emailId = email.value.trim();
  const emailRegx = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/;
  if (!emailId.match(emailRegx)) {
    errEmail.innerText = "Not a valid email";
    isValid = false;
  }
}

email.addEventListener("focus", () => {
  errEmail.innerText = "";
});

//Validate password
function validatePassword() {
  const pass = passwordEl.value.trim();
  const confirmPass = confirmPassEl.value.trim();
  const passRegx =
    /(?=^.{6,10}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$/;
  if (!pass.match(passRegx)) {
    errPassword.innerText =
      "Password must be at least 6 characters long, contain at least one uppercase letter, one number, and one special character";
    isValid = false;
  }

  console.log(pass, confirmPass);
  if (pass !== confirmPass) {
    errConfirmPass.innerText = "Passwords does not match";
    isValid = false;
  } else {
    errConfirmPass.innerText = "";
  }
}
passwordEl.addEventListener("focus", () => {
  errPassword.innerText = "";
});

confirmPassEl.addEventListener("focus", () => {
  errConfirmPass.innerText = "";
});

signupForm.addEventListener("submit", (event) => {
  event.preventDefault();
  isValid = true;
  validateName();
  validateEmail();
  validatePassword();
  if (isValid) {
    console.log("Submitting form");
    signupForm.submit();
  }
});
let showHideStatus = true;
const showHideEl = document.getElementById("showHideIcon");
showHideEl.addEventListener("click", () => {
  showHideStatus = !showHideStatus;
  showHideEl.innerHTML = showHideStatus
    ? '<i class="bi bi-eye-slash form-label"></i>'
    : '<i class="bi bi-eye form-label"></i>';
  passwordEl.type = showHideStatus ? "password" : "text";
});
const showHideConfirmPassEl = document.getElementById(
  "showHideIconConfirmPass"
);
showHideConfirmPassEl.addEventListener("click", () => {
  showHideStatus = !showHideStatus;
  showHideConfirmPassEl.innerHTML = showHideStatus
    ? '<i class="bi bi-eye-slash form-label"></i>'
    : '<i class="bi bi-eye form-label"></i>';
  confirmPassEl.type = showHideStatus ? "password" : "text";
});
