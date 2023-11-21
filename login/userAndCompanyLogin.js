const switchBtn = document.querySelectorAll(".switch");

// Getting labels
const emailLabel = document.querySelector(".emailLabel");
const passwordLabel = document.querySelector(".passwordLabel");

// Change data entries for email and password
const emailInput = document.querySelector(".user-email");
const passwordInput = document.querySelector(".user-password");

// Email matching regular expression
const regex = /@gmail\.com$/;

// getting from
const form = document.querySelector(".loginform");

// Removing the active class
const removeActive = () => {
  switchBtn.forEach((individualBtn) => {
    if (individualBtn.classList.contains("active")) {
      individualBtn.classList.remove("active");
    }
  });
};

// Adding event listeners for the buttons
switchBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    removeActive();
    btn.classList.add("active");
    if (btn.classList.contains("individual")) {
      console.log("The client button was clicked");
      emailLabel.textContent = "Enter email";
      passwordLabel.textContent = "Enter password";
      emailInput.value = "";
      passwordInput.value = "";
      emailInput.dataset.userType = "user";
      passwordInput.dataset.userType = "user";
    } else if (btn.classList.contains("company")) {
      console.log("The company button was clicked");
      emailLabel.textContent = "Company email";
      passwordLabel.textContent = "Company password";
      emailInput.value = "";
      passwordInput.value = "";
      emailInput.dataset.userType = "company";
      passwordInput.dataset.userType = "company";
    }
  });
});

// Event handlers for email and password inputs
emailInput.addEventListener("input", () => {
  const userType = emailInput.dataset.userType;
  console.log(`User type: ${userType}`);
  if (!regex.test(emailInput.value)) {
    emailInput.style.border = "1px solid red";
  } else {
    emailInput.style.border = "none";
    emailInput.style.borderBottom = "1px solid rgba(128, 128, 128, 0.82)";
  }
});

passwordInput.addEventListener("input", () => {
  const userType = passwordInput.dataset.userType;
  console.log(`User type: ${userType}`);
  if (passwordInput.value.length < 6) {
    passwordInput.style.border = "1px solid red";
  } else {
    passwordInput.style.border = "none";
    passwordInput.style.borderBottom = "1px solid rgba(128, 128, 128, 0.82)";
  }
});

// submitting the form
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    emailInput.dataset.userType == "company" &&
    passwordInput.dataset.userType == "company"
  ) {
    
    window.location = "../userAndCompanies/companyPage.html";
  }
  if (
    emailInput.dataset.userType == "user" &&
    passwordInput.dataset.userType == "user"
  ) {
    window.location = "../userAndCompanies/usersPage.html";
  }
});
