const switchBtn2 = document.querySelectorAll(".switchbtn");

// Getting labels
const emailLabel = document.querySelector(".emailLabel2");
const passwordLabel = document.querySelector(".passwordLabel2");
const nameLabel = document.querySelector(".nameLabel")
const numberLabel = document.querySelector(".numberLabel")

// Change data entries for email and password
const emailInput = document.querySelector(".email2");
const passwordInput = document.querySelector(".password2");
const fullName = document.querySelector(".fullName");
const phoneNumber = document.querySelector(".phoneNumber");
const submitInfo = document.querySelector(".submit-btn");

// register button
const register = document.querySelector(".register");

// Email matching regular expression
const regex = /@gmail\.com$/;



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
      nameLabel.textContent = "Enter your full name";
      numberLabel.textContent = "Enter your number";
      emailInput.value = "";
      passwordInput.value = "";
      phoneNumber.value = "";
      fullName.value = "";
      emailInput.dataset.Signup = "user";
      passwordInput.dataset.Signup = "user";
      phoneNumber.dataset.Signup = "user";
      fullName.dataset.Signup = "user";
    } else if (btn.classList.contains("company")) {
      console.log("The company button was clicked");
      emailLabel.textContent = "Company email";
      passwordLabel.textContent = "Company password";
      nameLabel.textContent = "Enter Company name";
      numberLabel.textContent = "Enter Company number";
      emailInput.value = "";
      passwordInput.value = "";
      phoneNumber.value = "";
      fullName.value = "";
      emailInput.dataset.Signup = "company";
      passwordInput.dataset.Signup = "company";
      phoneNumber.dataset.Signup = "company";
      fullName.dataset.Signup = "company";
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
    // creating user to the database
    var raw = JSON.stringify({
      password: passwordInput.value,
      email: emailInput.value,
      isVerified: false,
      companyName: fullName.value,
    });

    const registerUser = async () => {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch("http://107.20.63.132:3000/company/", requestOptions)
        .then((response) => response.text())
        .then((result) => {
          alert("Company Account created successfully! Login now");
        })
        .catch((error) =>
          alert("Account creation failed maybe account already exists")
        );
    };
    registerUser();
  }
  if (emailInput.dataset.Signup == "user") {
    // creating user to the database
    var raw = JSON.stringify({
      password: passwordInput.value,
      email: emailInput.value,
      fullName: fullName.value,
      phoneNumber: phoneNumber.value,
    });

    const registerUser = async () => {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch("http://107.20.63.132:3000/auth/intern/", requestOptions)
        .then((response) => response.text())
        .then((result) => {
          alert("Student Account created successfully");
        })
        .catch((error) =>
          alert("Account creation failed maybe account already exists")
        );
    };
    registerUser()

  }
});
