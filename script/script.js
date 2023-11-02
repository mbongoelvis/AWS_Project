const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
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

// remove active class from all navigations
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
  });
});

// feting the data from the fake backend and displaying them
try {
  async function fetching() {
    const data = await fetch("/data.json")
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
                  <div class="rounded-lg bg-primary p-3 mt-4">
              <!-- card profile -->
              <div class="flex justify-between w-full">
                <div class="flex gap-3">
                  <img loading="lazy" src="${post.userImage}" width="50px" alt="" class="rounded-[50%]">
                  <div>
                    <p>${post.username}</p>
                    <p class="text-gray-500">${post.postTime}</p>
                  </div>
                </div>
                <span class="material-symbols-outlined cursor-pointer">
                    more_horiz
                </span>
              </div>
              <!-- post caption -->
              <div class="mt-3">
                <p>${post.caption}</p>
              </div>
              <!-- post image -->
              <div class="min-h-[5rem] my-5">
               <img loading="lazy" src="${post.postImage}" alt="posts" class="rounded-lg w-full h-[80%]">
              </div>
              <!-- likes, share and comment -->
              <div class="flex">
                <!-- likes -->
                <div class="w-full flex justify-center cursor-pointer hover:bg-gray-800 h-12 items-center gap-2 transition-all ease-linear">
                  <span class="material-symbols-outlined">
                      thumb_up
                  </span>
                  <span>${post.likes}</span>
                </div>
                <!-- comment -->
                <div class="w-full flex justify-center cursor-pointer items-center gap-2 transition-all ease-linear hover:bg-gray-800 h-12">
                  <span class="material-symbols-outlined">
                    chat_bubble
                  </span>
                  <span>${post.comments}</span>
                </div>
                <!-- share -->
                <div class="w-full flex justify-center cursor-pointer h-12 items-center gap-2 transition-all ease-linear hover:bg-gray-800">
                  <span class="material-symbols-outlined">
                      share
                  </span>
                  <span>${post.shares}</span>
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
