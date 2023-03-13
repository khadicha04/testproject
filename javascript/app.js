const Form = document.querySelector(".login-form");
const elPassword = document.querySelector(".password");
const ErrorMsg = document.querySelector(".form-errortext");
const body = document.querySelector("body");
const regexPattern = /^{\w}{8,10}$/;

let popup = document.querySelector(".popup");

function openPopUp() {
  popup.classList.add("open-popup");
}
function closePopUp() {
  popup.classList.remove("open-popup");
}

Form.addEventListener("submit", (e) => {
  e.preventDefault();
  const isValid = regexPattern.test(e.target.value);
  if (isValid) {
    ErrorMsg.style.display = "none";
    Form.classList.add("popup");
  } else {
    ErrorMsg.style.display = "block";
    Form.classList.remove("popup");
  }
});
