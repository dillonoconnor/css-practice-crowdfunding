let modal = document.querySelector(".modal");
let circles = document.querySelectorAll(".circle")
let trigger = document.querySelector(".trigger");
let closeButton = document.querySelector(".close-button")

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

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
circles.forEach(circle => circle.addEventListener("click", toggleSelection));