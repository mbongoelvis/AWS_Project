const postDiv = document.querySelector(".post-form");
const picture = document.querySelector(".post-pic");
const postText = document.querySelector(".post-text");
const postbtn = document.querySelector(".postbtn");

userNameChange = sessionStorage.getItem("nameValue");
let fileValue = null;
let newText = null;

postText.addEventListener("change", () => {
    newText = postText.value;
});
const creatingPost = async () => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    content: newText,
    author: userNameChange,
    picture: fileValue,
  });
    
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  await fetch("http://localhost:3000/auth/post/", requestOptions);
};

picture.addEventListener("change", () => {
  const reader = new FileReader();
  const files = picture.files;

  reader.onload = () => {
    fileValue = reader.result; // Update the value of fileValue
    console.log(fileValue);
  };

  if (files && files[0]) {
    reader.readAsDataURL(files[0]);
  }
});

postbtn.addEventListener("click", (e) => {
    creatingPost();
});
