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
  
  const anim = document.querySelector(".anim");
  const forms = document.querySelectorAll(".fm");
  
  const loginform1 = document.querySelector(".log-in-form-1");
  const loginform2 = document.querySelector(".log-in-form-2");
  const signInform1 = document.querySelector(".sign-in-form-3");
  const signInform2 = document.querySelector(".sign-in-form-4");
  const inputs = document.querySelectorAll("input");
  const labels = document.querySelectorAll("label");
  
  let activeButton = btnEmployee;
  
  btnEmployee.removeEventListener("click", employeeButtonClick);
  btnCompany.removeEventListener("click", companyButtonClick);
  
  btnEmployee.addEventListener("click", employeeButtonClick);
  btnCompany.addEventListener("click", companyButtonClick);
  
  function animDisplayForms(elem) {
    let i = 0;
    while (i < forms.length) {
      forms[i].classList.remove("animate");
      forms[i].classList.add("hidden");
      i++;
    }
    elem.classList.add("animate");
    elem.classList.remove("hidden");
    const labelNameChild = elem.querySelector('label[for="name"]');
    const labelEmailChild = elem.querySelector('label[for="email"]');
    const labelPaswordChild = elem.querySelector('label[for="password"]');
  
    const inputNameChild = elem.querySelector('input[type="text"]');
    const inputEmailChild = elem.querySelector('input[type="email"]');
    const inputPaswordChild = elem.querySelector('input[type="password"]');
  
    const btnLoginChild = elem.querySelector('.login-btn');
  
    btnLoginChild.addEventListener("click", function () {
      const currentAccount = btnEmployee.classList.contains("active-btn")
        ? EmployeesAccounts.find((acc) => acc.email === inputEmailChild.value)
        : CompaniesAccounts.find((acc) => acc.email === inputEmailChild.value);
  
      if (elem.classList.contains("employee")) {
        // Employees login form
        if (elem.classList.contains("log-in-form")) {
          if (currentAccount?.email === inputEmailChild.value) {
            if (currentAccount.password === Number(inputPaswordChild.value)) {
              console.log(`This is ${currentAccount.owner}'s account`);
            } else {
              console.log("Incorrect password");
            }
          } else {
            console.log("Incorrect email");
          }
        }
        // Employees sign up form
        else if (elem.classList.contains("sign-up-form")) {
          if (currentAccount?.email !== inputEmailChild.value) {
            if (currentAccount?.password !== Number(inputPaswordChild.value)) {
              console.log(`${inputNameChild.value} registration is successful`);
            } else {
              console.log("This password already exists");
            }
          } else {
            console.log("This account already exists");
          }
        }
      }
      if (elem.classList.contains("company")) {
        // Company's login form
        if (elem.classList.contains("log-in-form")) {
          if (currentAccount?.email === inputEmailChild.value) {
            if (currentAccount.password === Number(inputPaswordChild.value)) {
              console.log(`This is ${currentAccount.owner}'s account`);
            } else {
              console.log("Incorrect password");
            }
          } else {
            console.log("Incorrect email");
          }
        }
        // Company's sign up form
        else if (elem.classList.contains("sign-up-form")) {
          if (currentAccount?.email !== inputEmailChild.value) {
            if (currentAccount?.password !== Number(inputPaswordChild.value)) {
              console.log(`${inputNameChild.value} registration is successful`);
            } else {
              console.log("This password already exists");
            }
          } else {
            console.log("This account already exists");
          }
        }
      }
      inputEmailChild.value = inputPaswordChild.value = '';
    });
  }
  
  animDisplayForms(loginform1);
  
  function employeeButtonClick(e) {
    e.preventDefault();
    if (
      activeButton !== btnEmployee &&
      loginform1.classList.contains("hidden")
    ) {
      activeButton = btnEmployee;
      btnEmployee.classList.add("active-btn");
      btnCompany.classList.remove("active-btn");
  
      if (btnSignIn.textContent === "Sign up") {
        animDisplayForms(loginform1);
      } else {
        animDisplayForms(signInform1);
      }
    }
  }
  
  function companyButtonClick(e) {
    e.preventDefault();
    if (
      activeButton !== btnCompany &&
      loginform2.classList.contains("hidden")
    ) {
      activeButton = btnCompany;
      btnCompany.classList.add("active-btn");
      btnEmployee.classList.remove("active-btn");
  
      if (btnSignIn.textContent === "Sign up") {
        animDisplayForms(loginform2);
      } else {
        animDisplayForms(signInform2);
      }
    }
  }