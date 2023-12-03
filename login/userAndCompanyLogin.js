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

let companyName;
 let userName;
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
  if (emailInput.dataset.userType == "company") {
    // creating user to the database
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      password: passwordInput.value,
      email: emailInput.value,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://107.20.63.132:3000/auth/company/login", requestOptions)
      .then((response) => {
        if (response.ok) {
          return response.json();
          // Parse the response as JSON
        } else {
          throw new Error("Invalid credentials");
        }
      })
      .then((data) => {
        console.log(data);
        if (!data.error && data.email === emailInput.value) {
          console.log("Redirecting...");
          companyName = data.name;
          console.log(companyName);
          sessionStorage.setItem("nameValue", companyName);
          window.location = "../userAndCompanies/companyPage.html";
        } else {
          console.log("Account not found. Redirect not performed.");
          alert("Account not found, try again");
        }
      })
      .catch((error) => {
        console.log(error.message);
        // Handle the error and prevent the redirect
      });
  }
  if (emailInput.dataset.userType == "user") {
    // creating user to the database
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      password: passwordInput.value,
      email: emailInput.value,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://107.20.63.132:3000/auth/login", requestOptions)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Invalid credentials");
        }
      })
      .then((result) => {
        console.log(result);
        if (!result.error && result.email === emailInput.value) {
          userName = result.name;
          console.log(userName);
          sessionStorage.setItem("nameValue", userName);
          window.location = "../userAndCompanies/usersPage.html";
        } else {
          alert("Account not found, try again");
        }
      })
      .catch((error) => {
        console.log(error.message);
        // Handle the error and prevent the redirect
      });
  }
});
