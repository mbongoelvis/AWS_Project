const lenis = new Lenis();

lenis.on("scroll", (e) => {
  // console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


// collecting variables
const btn = document.querySelectorAll(".btn");
const createpost = document.querySelectorAll(".post-btn");
const post = document.querySelectorAll(".creat-post");
const mess = document.querySelector(".message");
const card = document.querySelector(".card-container");

//============= popup for edit profile class===========
const openpop1 = document.querySelector(".edit")
const openedit = document.querySelectorAll(".openedit")
const closeedit = document.querySelector(".close-edit")
const inputfields = document.querySelectorAll(".fields")
const notificationcard = document.querySelector(".notification-card")

// =========== create post =================
const createPost = document.querySelector(".create-ps")
const postdiv = document.querySelector(".create-post")
const closepost = document.querySelector(".close-post")
const postform = document.querySelector(".post-form")


let userNameChange = sessionStorage.getItem("nameValue");
// getting user infromation from the DOM
let Companyname = document.querySelector(".companyname")
  if (Companyname) {
  Companyname.textContent = userNameChange;
  }

createPost.addEventListener("click", () => {
  if (postdiv.classList.contains("hidden")) {
    postdiv.classList.remove("hidden");
    postdiv.classList.add("flex");
    postform.addEventListener("submit", (e) => {
      e.preventDefault();
    });
  }
});
closepost.addEventListener("click", (e) => { 
  if (!postdiv.classList.contains("hidden")) {
      postdiv.classList.remove("flex");
    postdiv.classList.add("hidden");
    postform.addEventListener("submit", (e) => {
      e.preventDefault();
    });
  }
})


openedit.forEach(btn => {
  btn.addEventListener("click", () => {
    if (openpop1.classList.contains("hidden")) {
      openpop1.classList.remove("hidden");
      openpop1.classList.add("flex");
    }
    // body.addEventListener("scroll", function (event) {
    //   event.preventDefault();
    // });
  });
})
closeedit.addEventListener("click", () => { 
  openpop1.classList.add("hidden");
  inputfields.forEach(field => {
    field.value = "";
  })
})





// ======== remove active class from all navigations ======
const removeActiveClass = () => {
  btn.forEach((items) => {
    items.classList.remove("active");
  });
};
btn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    removeActiveClass();
    btn.classList.add("active");
    if (e.target.classList.contains("light")) {
      mess.classList.add("dropshadow");
      setTimeout(() => {
        mess.classList.remove("dropshadow");
      }, 2000);
    }

    // chacking for notifications button to be click
    if (e.target.classList.contains("noti")) {
      if (notificationcard.classList.contains("hidden")) {
        notificationcard.classList.remove("hidden");
        notificationcard.classList.add("flex");
      }
    }
    else if (!e.target.classList.contains("noti")) {
      notificationcard.classList.add("hidden");
      notificationcard.classList.remove("flex");
    }
  });
});

// === feting the data from the fake backend and displaying them
try {
  async function fetching() {
    const data = await fetch("http://localhost:3000/post")
      .then((datas) => {
        return datas;
      })
      .then((finaldata) => {
        return finaldata.json();
      })
      .then((totaldata) => {
        let dataCombine = "";
        totaldata.forEach((post) => {
          dataCombine += `
                  <div class="rounded-xl bg-primary p-3 my-4">
              <!-- card profile -->
              <div class="flex justify-between w-full">
                <div class="flex gap-3">
                  <div class="w-[50px] h-[50px] rounded-[500px] overflow-hidden">
                    <img loading="lazy" src="${post.userImage}" class="object-cover w-full h-full">
                  </div>
                  <div>
                    <p>${post.author}</p>
                    <p class="text-gray-500">${post.createdAt}</p>
                  </div>
                </div>
                <span class="material-symbols-outlined cursor-pointer">
                    more_horiz
                </span>
              </div>
              <!-- post caption -->
              <div class="mt-3">
                <p>${post.content}</p>
              </div>
              <!-- post image -->
              <div class="max-h-[20rem] lg:max-h-[30rem] overflow-hidden rounded-lg my-5">
              <img src="${post.picture}" class="w-full h-full object-cover">
              </div>
              <!-- likes, share and comment -->
              <div class="flex">
                <!-- likes -->
                <div class="w-full flex justify-center cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-800 h-12 items-center gap-2 transition-all ease-linear rounded-md hover:text-white">
                  <span class="material-symbols-outlined">
                      thumb_up
                  </span>
                  <span>0</span>
                </div>
                <!-- share -->
                <div class="w-full flex justify-center cursor-pointer h-12 items-center gap-2 transition-all ease-linear hover:bg-gray-300 dark:hover:bg-gray-800 rounded-md">
                  <span class="material-symbols-outlined">
                      share
                  </span>
                  <span>0</span>
                </div>
              </div>
            </div>
                 `;
        });
        card.innerHTML = dataCombine;
      });
  }
  fetching();
} catch (err) {
  console.log(err);
}

