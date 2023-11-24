const switchBtn2 = document.querySelectorAll(".switchbtn");

// Getting labels
const emailLabel = document.querySelector(".emailLabel2");
const passwordLabel = document.querySelector(".passwordLabel2");

// Change data entries for email and password
const emailInput = document.querySelector(".email2");
const passwordInput = document.querySelector(".password2");

// register button
const register = document.querySelector(".register");

// Email matching regular expression
const regex = /@gmail\.com$/;

// getting users information from the DOM
const fullName = document.querySelector(".fullname");
const phoneNumber = document.querySelector(".phone-number")
const submitInfo = document.querySelector(".submit-btn")


// Removing the active class
const removeActive = () => {
  switchBtn2.forEach((individualBtn) => {
    if (individualBtn.classList.contains("active")) {
      individualBtn.classList.remove("active");
    }
  });
};

// Adding event listeners for the buttons
switchBtn2.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    removeActive();
    btn.classList.add("active");
    if (btn.classList.contains("individual2")) {
      console.log("The client button was clicked");
      emailLabel.textContent = "Enter email";
      passwordLabel.textContent = "Enter password";
      emailInput.value = "";
      passwordInput.value = "";
      emailInput.dataset.Signup = "user";
      passwordInput.dataset.Signup = "user";
    } else if (btn.classList.contains("company")) {
      console.log("The company button was clicked");
      emailLabel.textContent = "Company email";
      passwordLabel.textContent = "Company password";
      emailInput.value = "";
      passwordInput.value = "";
      emailInput.dataset.Signup = "company";
      passwordInput.dataset.Signup = "company";
    }
  });
});

// Event handlers for email and password inputs
emailInput.addEventListener("input", () => {
  const userType = emailInput.dataset.Signup
  console.log(`User type: ${userType}`);
  console.log(emailInput.value);
  if (!regex.test(emailInput.value)) {
    emailInput.style.border = "1px solid red";
  } else {
    emailInput.style.border = "none";
    emailInput.style.borderBottom = "1px solid rgba(128, 128, 128, 0.82)";
  }
});

passwordInput.addEventListener("input", () => {
  const userType = passwordInput.dataset.Signup;
  console.log(`User type: ${userType}`);
  console.log(passwordInput.value);
  if (passwordInput.value.length < 6) {
    passwordInput.style.border = "1px solid red";
  } else {
    passwordInput.style.border = "none";
    passwordInput.style.borderBottom = "1px solid rgba(128, 128, 128, 0.82)";
  }
});

register.addEventListener("submit", (e) => {
  e.preventDefault();
  if (emailInput.dataset.Signup == "company") {
    window.location = "../routes/company-profile.html";
  }
  if (emailInput.dataset.Signup == "user") {
    window.location = "../routes/employee-profile.html";
  }
});
