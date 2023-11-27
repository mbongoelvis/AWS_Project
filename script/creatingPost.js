const postDiv = document.querySelector(".post-form");
const picture = document.querySelector(".post-pic");
const postText = document.querySelector(".post-text");


// getting the file selected
picture.addEventListener("change", () => {
    const reader = new FileReader();
    reader.readAsDataURL(this.file[0])
    const fileValue = reader.result;
})

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
    content: postText.value,
    author: "mbongoelvis",
    picture: fileValue 
});

var requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow",
};

const creatingPost = async () => {
    await fetch("http://13.246.40.149:3000/auth/post/", requestOptions);
}

postDiv.addEventListener("submit", (e) => { 
    e.preventDefault()
    creatingPost()
})
