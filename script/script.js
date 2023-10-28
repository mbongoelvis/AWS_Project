const btn = document.querySelectorAll(".btn")
const createpost = document.querySelectorAll(".post-btn")
const post = document.querySelectorAll(".creat-post");

// remove active class from all navigations
const removeActiveClass = () => {
    btn.forEach(items => {
        items.classList.remove("active")
    })
}
btn.forEach(btn => {
    btn.addEventListener("click", (e) => { 
        removeActiveClass()
        btn.classList.add("active")
    })
})