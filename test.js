// distructuring the email and password value
const SignUpData = {
  email: "moribindaka@gmail.com",
  password: "moribindaka",
  fullName: "na me",
  phoneNumber: "12345678",
};

// sending the data to the database
const registerUser = async () => {
  try {
    await fetch("http://13.246.227.90:3000/auth/", {
      method: "POST",
      body: JSON.stringify(SignUpData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((user) => {
      alert("Account created Successfull");
    });
  } catch (err) {
    alert("Can't register Try again");
  }
};

registerUser()