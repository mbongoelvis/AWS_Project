
const EmployeesAccounts = [
  {
    owner: "Jonas Schmedtmann",
    email: "jonasschedtman@gmail.com",
    password: 1111,
  },

  {
    owner: "Jessica Davis",
    email: "jessicadavis@gmail.com",
    password: 2222,
  },
];

const CompaniesAccounts = [
  {
    owner: "Steven Thomas Williams",
    email: "stevwilliam@gmail.com",
    password: 3333,
  },

  {
    owner: "Sarah Smith",
    email: "sarahsmith@gmail.com",
    password: 4444,
  },
];


const containerLogin =document.querySelector(".login-container");
const containerLoginForm =document.querySelector(".login-form");

const btnEmployee = document.querySelector(".employer-btn");
const btnCompany = document.querySelector(".company-btn");
const btnSignIn = document.querySelector(".sign-in-link");
const signInBox = document.querySelector(".sign-in-box");
const signInCategoryBox = document.querySelector(".sign-in-categories");
const btnLogin = document.querySelector(".login-btn");

const anim = document.querySelector(".anim");
const forms = document.querySelectorAll(".fm");

const labelSignIn = document.querySelector(".sign-in-text");
const labels = document.querySelectorAll("label");

const loginform1 = document.querySelector(".log-in-form-1");
const loginform2 = document.querySelector(".log-in-form-2");
const signInform1 = document.querySelector(".sign-in-form-3");
const signInform2 = document.querySelector(".sign-in-form-4");
const inputs = document.querySelectorAll("input");
const imgLoginForm = document.querySelector(".login-img");

const individualsPofile = document.querySelector(".profile1");
const companiesPofile = document.querySelector(".profile2");

const popup = document.getElementById("popup");

function animRemoveImage() {
  imgLoginForm.classList.remove("animate");
}

// function openPopup(){
//   popup.classList.add("open-popup");
// }



// function closePopup(){
//   popup.classList.remove("open-popup");
// }

const hideCurrentForm = function() {
  // containerLoginForm.classList.add("hidden");
  containerLogin.style.alignItems = "start"
}

function animDisplayForms(elem) {
  let i = 0;
  forms.forEach((form) => {
    form.classList.remove("animate");
    form.classList.add("hidden");
  });

  elem.classList.add("animate");
  elem.classList.remove("hidden");
  // imgLoginForm.classList.add("animate");

  const labelNameChild = elem.querySelector(".name-error");
  const labelEmailChild = elem.querySelector(".email-error");
  const labelPaswordChild = elem.querySelector(".pass-error");
  const labelLoginHeaderChild = elem.querySelector(".login-header");

  labelEmailChild.textContent = labelPaswordChild.textContent = "";

  const inputNameChild = elem.querySelector('input[type="text"]');
  const inputEmailChild = elem.querySelector('input[type="email"]');
  const inputPaswordChild = elem.querySelector('input[type="password"]');

  const btnLoginChild = elem.querySelector(".login-btn");

  const clearField = () => {
    // inputNameChild.value = '';
    inputEmailChild.value = '';
    inputPaswordChild.value = '';
  }

  function emailErrorBackground(){
    labelEmailChild.style.backgroundColor = "#eee";
    labelEmailChild.style.padding = "1.2rem 3.2rem";
  }

  function passwordErrorBackground(){
    labelPaswordChild.style.backgroundColor = "#eee";
    labelPaswordChild.style.padding = "1.2rem 3.2rem";
  }

  btnLoginChild.addEventListener("click", function () {
    const currentAccount = btnEmployee.classList.contains("active-btn")
      ? EmployeesAccounts.find((acc) => acc.email === inputEmailChild.value)
      : CompaniesAccounts.find((acc) => acc.email === inputEmailChild.value);

    if (elem.classList.contains("employee")) {
      // Employees login form
      if (elem.classList.contains("log-in-form")) {
        // console.log(inputEmailChild.value);
        // console.log(inputPaswordChild.value);

        console.log(currentAccount);
        if (currentAccount) {
          if (currentAccount.password === Number(inputPaswordChild.value)) {
            console.log(`This is ${currentAccount.owner}'s account`);
            // labelLoginHeaderChild.textContent = "Login Successful";
            // hideCurrentForm()
            window.location = "userAndCompanies/usersPage.html";
          } else {
            console.log("Incorrect password");
            labelPaswordChild.textContent = "Incorrect password";
            labelPaswordChild.style.color = "#B30000";
          }
        } else {
          console.log("Incorrect email");
          labelEmailChild.textContent = "Incorrect email";
          labelEmailChild.style.color = "#B30000";
        }
      }
      // Employees sign up form
      else if (elem.classList.contains("sign-up-form")) {
        if (currentAccount?.email !== inputEmailChild.value) {
          if (currentAccount?.password !== Number(inputPaswordChild.value)) {
            console.log(`${inputNameChild.value} registation is successfull`);
            labelLoginHeaderChild.textContent = "registation is successfull";
            EmployeesAccounts.push({
              owner: `${inputNameChild.value}`,
              email: `${inputEmailChild.value}`,
              password: Number(inputPaswordChild.value),
            });
            console.log(EmployeesAccounts);
            changeSignUpMessage();
            signInBox.style.display = 'none';
            signInCategoryBox.style.display = 'none';
            window.location = "login/employee-profile.html";
          } else {
            console.log("This password already exist");
            labelPaswordChild.textContent = "This password already exist";
            labelPaswordChild.style.color = "#B30000";
          }
        } else {
          console.log("This account already exist");
          labelEmailChild.textContent = "This account already exist";
          labelEmailChild.style.color = "#B30000";
        }
        inputNameChild.value = '';
      }
    }
    if (elem.classList.contains("company")) {
      // Company's login form
      // console.log(currentAccount);
      if (elem.classList.contains("log-in-form")) {
        if (currentAccount) {
          if (currentAccount.password === Number(inputPaswordChild.value)) {
            console.log(`This is ${currentAccount.owner}'s account`);
            // labelLoginHeaderChild.textContent = "Login Successful";
            // hideCurrentForm();
            window.location = "userAndCompanies/companyPage.html";          } else {
            console.log("Incorrect password");
            labelPaswordChild.textContent = "Incorrect password";
            labelPaswordChild.style.color = "#B30000";
          }
        } else {
          console.log("Incorrect email");
          labelEmailChild.textContent = "Incorrect email";
          labelEmailChild.style.color = "#B30000";
        }
      }
      // Company's sign up form
      else if (elem.classList.contains("sign-up-form")) {
        if (currentAccount?.email !== inputEmailChild.value) {
          if (currentAccount?.password !== Number(inputPaswordChild.value)) {
            // console.log(`${inputNameChild.value} registation is successfull`);
            labelLoginHeaderChild.textContent = "registation is successfull";
            CompaniesAccounts.push({
              owner: `${inputNameChild.value}`,
              email: `${inputEmailChild.value}`,
              password: Number(inputPaswordChild.value),
            });
            console.log(CompaniesAccounts);
            window.location = "login/company-profile.html";
            changeSignUpMessage();
            signInBox.style.display = 'none';
          } else {
            // console.log("This password already exist");
            labelPaswordChild.textContent = "This password already exist";
            labelPaswordChild.style.color = "#B30000";
          }
        } else {
          // console.log("This account already exist");
          labelEmailChild.textContent = "This account already exist";
          labelEmailChild.style.color = "#B30000";
        }
        inputNameChild.value = '';
      }
    }
    // clearField();
  });
  clearField();
}

animDisplayForms(loginform1);

// btnEmployee.removeEventListener("click", toggleActive);
// btnCompany.removeEventListener("click", toggleActive);

btnEmployee.addEventListener("click", toggleActive);
btnCompany.addEventListener("click", toggleActive);


function toggleActive() {
  if (this !== btnEmployee && this !== btnCompany) {
    return;
  }

  btnEmployee.classList.remove("active-btn");
  btnCompany.classList.remove("active-btn");
  this.classList.add("active-btn");

  // console.log(this);
  if (this.classList.contains("employer-btn")) {
    if (btnSignIn.textContent === "Sign up") {
      animDisplayForms(loginform1);
    } else {
      animDisplayForms(signInform1);
    }
  } else if (this.classList.contains("company-btn")) {
    if (btnSignIn.textContent === "Sign up") {
      animDisplayForms(loginform2);
    } else {
      animDisplayForms(signInform2);
    }
  }
}

const changeSignUpMessage = function() {
  if (btnSignIn.textContent === "Sign up") {
    labelSignIn.textContent = "Already have an account?";
    btnSignIn.textContent = "Log in";
    imgLoginForm.classList.add("animate");
    imgLoginForm.src = "images/prince-akachi-LWkFHEGpleE-unsplash-removebg-preview.png";

    if (btnEmployee.classList.contains("active-btn") == true) {
      animDisplayForms(signInform1);
    } else {
      animDisplayForms(signInform2);
    }
  } else {
    labelSignIn.textContent = "Don't have an account?";
    btnSignIn.textContent = "Sign up";
    imgLoginForm.classList.add("animate");
    imgLoginForm.src = "images/alexis-chloe-TYDkKEgc0Fg-unsplash-removebg-preview.png";

    if (btnEmployee.classList.contains("active-btn") == true) {
      animDisplayForms(loginform1);
    } else {
      animDisplayForms(loginform2);
    }
  }
}

btnSignIn.addEventListener("click", function (e) {
  e.preventDefault();

  changeSignUpMessage()
  // imgLoginForm.classList.remove("animate");
  // console.log(btnSignIn.textContent);
  // console.log(signInform1.classList);
});
