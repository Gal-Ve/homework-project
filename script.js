const trigger = document.querySelector("#hamburger");
const sidenav = document.querySelector(".sidenav");
const close = document.querySelector(".close")
const galleryButton = document.querySelector("#view")
const galleryView = document.querySelector(".gallery-frame");
const galleryClose = document.querySelector(".gallery-close");
const images = document.querySelectorAll(".carousel-image");
const thumbnails = document.querySelectorAll(".thumbnail");
const prevBtn = document.querySelector(".carousel-nav.prev");
const nextBtn = document.querySelector(".carousel-nav.next");

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

galleryClose.addEventListener('click', ()=>{
  galleryView.classList.remove("show");
  galleryView.classList.add("hide");
})

let currentIndex = 0;

const loadedImages = new Set([0]);

function showImage(index) {
 if (index >= images.length) {
  currentIndex = 0;
 } else if (index < 0) {
  currentIndex = images.length - 1;
 } else {
  currentIndex = index;
 }

 if (loadedImages.has(currentIndex)) {
  images.forEach((img, i) => {
   img.classList.toggle("active", i === currentIndex);
  });
 } else {
  const img = images[currentIndex];
  if (img.complete) {
   loadedImages.add(currentIndex);
   images.forEach((image, i) => {
    image.classList.toggle("active", i === currentIndex);
   });
  }
 }

 thumbnails.forEach((thumb, i) => {
  thumb.classList.toggle("active", i === currentIndex);
 });
}

images.forEach((img, index) => {
 img.addEventListener("load", () => {
  loadedImages.add(index);
 });
 img.addEventListener("error", () => {
  console.error(`Failed to load image ${index}`);
  loadedImages.add(index);
 });
});


prevBtn.addEventListener("click", () => showImage(currentIndex - 1));
nextBtn.addEventListener("click", () => showImage(currentIndex + 1));

thumbnails.forEach((thumbnail) => {
 thumbnail.addEventListener("click", () => {
  const index = parseInt(thumbnail.dataset.index);
  showImage(index);
 });
});