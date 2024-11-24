const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const emailEl = loginForm["username"];
  const passwordEl = loginForm["password"];
  const emailErrMsgEl = document.getElementById("emailErrMsg");
  const passErrMsgEl = document.getElementById("passErrMsg");

  let isValid = true;

  const email = emailEl.value.trim();
  const emailRegx = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/;
  if (!email.match(emailRegx)) {
    isValid = false;
    emailErrMsgEl.innerText = "Not a valid email";
  }

  //Password checking  done...just to confirm whether it is a strong password
  const password = passwordEl.value.trim();
  const passwordRegx =
    /(?=^.{6,10}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$/;
  if (!password.match(passwordRegx)) {
    isValid = false;
    passErrMsgEl.innerText = "Incorrect Password";
  }
  if (isValid) {
    alert("submiting form");
    loginForm.submit();
  }
});
