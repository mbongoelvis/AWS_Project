const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


//============= popup for edit profile class===========
const openpop1 = document.querySelector(".edit")
const openedit1 = document.querySelectorAll(".openedit1")
const card = document.querySelector(".card-container")
const closeedit1 = document.querySelector(".close-edit1")
const inputfields = document.querySelectorAll(".fields1")
const notificationcard = document.querySelector(".notification-card1")
const btnurs = document.querySelectorAll(".btnurs")
const message = document.querySelector(".message")

let userNameChange = sessionStorage.getItem("nameValue");
let username = document.querySelector(".username");
if (username) {
  username.textContent = userNameChange;
}

openedit1.forEach(btn => {
  btn.addEventListener("click", () => {
    if (openpop1.classList.contains("hidden")) {
      openpop1.classList.remove("hidden");
      openpop1.classList.add("flex");
    }
  });
})
closeedit1.addEventListener("click", () => { 
  openpop1.classList.add("hidden");
  inputfields.forEach(field => {
    field.value = "";
  })
})





// ======== remove active class from all navigations ======
const removeActiveClass = () => {
  btnurs.forEach((items) => {
    items.classList.remove("active");
  });
};
btnurs.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    removeActiveClass();
    btn.classList.add("active");
    if (e.target.classList.contains("light")) {
      message.classList.add("dropshadow");
      setTimeout(() => {
        message.classList.remove("dropshadow");
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

// === feting the data from the fake backend and displaying them ==
try {
  async function fetching() {
    const data = await fetch("http://107.20.63.132:3000/post")
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
                  <div class="rounded-xl bg-primary p-3 mt-4">
              <!-- card profile -->
              <div class="flex justify-between w-full">
                <div class="flex gap-3">
                  <div class="w-[50px] h-[50px] rounded-[500px] overflow-hidden">
                    <img loading="lazy" src="${post.userImage}" class="object-cover w-full h-full">
                  </div>
                  <div>
                    <p class="text-white">${post.author}</p>
                    <p class="text-gray-500">${post.createdAt}</p>
                  </div>
                </div>
                <span class="material-symbols-outlined cursor-pointer text-white">
                    more_horiz
                </span>
              </div>
              <!-- post caption -->
              <div class="mt-3">
                <p class="text-white">${post.content}</p>
              </div>
              <!-- post image -->
              <div class="max-h-[20rem] lg:max-h-[30rem] overflow-hidden rounded-lg my-5">
              <img src="${post.picture}" class="w-full h-full object-cover">
              </div>
              <!-- likes, share and comment -->
              <div class="flex">
                <!-- likes -->
                <div class="w-full flex justify-center cursor-pointer hover:bg-gray-800 h-12 items-center gap-2 transition-all ease-linear rounded-md">
                  <span class="material-symbols-outlined text-white">
                      thumb_up
                  </span>
                  <span class="text-white">0</span>
                </div>
                <!-- share -->
                <div class="w-full flex justify-center cursor-pointer h-12 items-center gap-2 transition-all ease-linear hover:bg-gray-800 rounded-md">
                  <span class="material-symbols-outlined text-white">
                      share
                  </span>
                  <span class="text-white">0</span>
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
