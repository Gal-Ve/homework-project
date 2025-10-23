const trigger = document.querySelector("#hamburger");
const sidenav = document.querySelector(".sidenav");
const close = document.querySelector(".close")
const galleryButton = document.querySelector("#view")
const galleryView = document.querySelector(".gallery-frame");

const displaySide = () => {
  sidenav.classList.remove("hide")
  sidenav.classList.add("show")
}

trigger.addEventListener("click", displaySide);

close.addEventListener('click', ()=>{
  sidenav.classList.remove("show");
  sidenav.classList.add("hide");
})

view.addEventListener('click', ()=>{
  sidenav.classList.remove("show");
  sidenav.classList.add("hide");
  galleryView.classList.remove("hide");
  galleryView.classList.add("show");
})