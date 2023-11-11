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
  
  const labelSignIn = document.querySelector(".sign-in-text");
  const btnEmployee = document.querySelector(".employer-btn");
  const btnCompany = document.querySelector(".company-btn");
  const btnSignIn = document.querySelector(".sign-in-link");
  const btnLogin = document.querySelector(".login-btn");
  const forms = document.querySelectorAll(".fm");
  
  const loginform1 = document.querySelector(".log-in-form-1");
  const loginform2 = document.querySelector(".log-in-form-2");
  const signInform1 = document.querySelector(".sign-in-form-3");
  const signInform2 = document.querySelector(".sign-in-form-4");
  const inputs = document.querySelectorAll("input");
  const labels = document.querySelectorAll("label");
  
  function animDisplayForms(elem) {
    forms.forEach((form) => {
      form.classList.remove("animate");
      form.classList.add("hidden");
    });
  
    elem.classList.add("animate");
    elem.classList.remove("hidden");
  
    const labelNameChild = elem.querySelector(".name-error");
    const labelEmailChild = elem.querySelector(".email-error");
    const labelPaswordChild = elem.querySelector(".pass-error");
    const labelLoginHeaderChild = elem.querySelector(".login-header");
  
    labelEmailChild.textContent = labelPaswordChild.textContent = "";
  
    const inputNameChild = elem.querySelector('input[type="text"]');
    const inputEmailChild = elem.querySelector('input[type="email"]');
    const inputPaswordChild = elem.querySelector('input[type="password"]');
  
    const btnLoginChild = elem.querySelector(".login-btn");
  
    btnLoginChild.addEventListener("click", function () {
      const currentAccount =
        btnEmployee.classList.contains("active-btn") === true
          ? EmployeesAccounts.find((acc) => acc.email === inputEmailChild.value)
          : CompaniesAccounts.find((acc) => acc.email === inputEmailChild.value);
  
      if (currentAccount) {
        if (currentAccount.password === Number(inputPaswordChild.value)) {
          console.log(`This is ${currentAccount.owner}'s account`);
          labelLoginHeaderChild.textContent = "Login Successful";
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
  
      inputEmailChild.value = inputPaswordChild.value = "";
    });
  }
  
  animDisplayForms(loginform1);
  
  btnEmployee.addEventListener("click", toggleActive);
  btnCompany.addEventListener("click", toggleActive);
  
  function toggleActive() {
    btnEmployee.classList.remove("active-btn");
    btnCompany.classList.remove("active-btn");
    this.classList.add("active-btn");
  
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
  
  btnSignIn.addEventListener("click", function (e) {
    e.preventDefault();
  
    if (btnSignIn.textContent === "Sign up") {
      labelSignIn.textContent = "Already have an account?";
      btnSignIn.textContent = "Log in";
  
      if (btnEmployee.classList.contains("active-btn")) {
        animDisplayForms(signInform1);
      } else {
        animDisplayForms(signInform2);
      }
    } else {
      labelSignIn.textContent = "Don't have an account?";
      btnSignIn.textContent = "Sign up";
  
      if (btnEmployee.classList.contains("active-btn")) {
        animDisplayForms(loginform1);
      } else {
        animDisplayForms(loginform2);
      }
    }
  });