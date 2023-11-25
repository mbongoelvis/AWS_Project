import { newEmail, newPassword } from "./login/userAndComapnanySignUp";

const fullName = document.querySelector(".fullName");
const userNumber = document.querySelector(".phone-umber");
const submitForm = document.querySelector(".submit-form");

if (newEmail.dataset.Signup == "user") {
  var raw = JSON.stringify({
    password: newPassword.value,
    email: newEmail.value,
    fullName: fullName.value,
    phoneNumber: userNumber.value,
  });
}

const registerUser = async () => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://13.246.40.149:3000/auth/intern/", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};

submitForm.addEventListener("submit", (e) => {
  e.preventDefault();
  registerUser();
});

// Call registerUser() outside the event listener if needed
