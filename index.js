let modal = document.querySelector(".modal");
let circles = document.querySelectorAll(".circle");
let trigger = document.querySelector(".trigger");
let closeButton = document.querySelector(".close-button");
let bookmarkButton = document.querySelector("#bookmark-button");
let bookmarkImg = document.querySelector(".grey-button-img circle");
let bookmarkImgInner = document.querySelector(".grey-button-img path");

const toggleModal = () => {
  modal.classList.toggle("show-modal");
}

const toggleSelection = (event) => {
  if (!event.target.classList.contains("disabled")) {
    event.target.classList.toggle("circle");
    event.target.classList.toggle("filled-circle");
  }
  circles.forEach(circle => {
    if (circle.id === event.target.id) {
      return;
    } else {
      circle.className = "circle";
    }
  });
}

const windowOnClick = (event) => {
  if (event.target === modal) {
    toggleModal();
  }
}

const toggleBookmarked = () => {
  bookmarkButton.classList.toggle("bookmarked");
  if (bookmarkImg.getAttribute("fill") === "#2F2F2F") {
    bookmarkImg.setAttribute("fill", "hsl(176, 50%, 47%)");
    bookmarkImgInner.setAttribute('fill', "#fff");
  } else {
    bookmarkImg.setAttribute("fill", "#2F2F2F");
    bookmarkImgInner.setAttribute('fill', "#B1B1B1");
  }
    
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
circles.forEach(circle => circle.addEventListener("click", toggleSelection));
bookmarkButton.addEventListener("click", toggleBookmarked);