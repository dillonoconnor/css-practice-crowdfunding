let modal = document.querySelector(".modal");
let circles = document.querySelectorAll(".circle");
let trigger = document.querySelector(".trigger");
let closeButton = document.querySelector(".close-button");
let bookmarkButton = document.querySelector("#bookmark-button");
let bookmarkText = document.querySelector("#bookmarkText");
let bookmarkImg = document.querySelector(".grey-button-img circle");
let bookmarkImgInner = document.querySelector(".grey-button-img path");
let pledgeBoxes = document.querySelectorAll("div[id^=pledge-box]");
let pledgeBox1 = document.querySelector("#pledge-box-1");
let pledgeBox2 = document.querySelector("#pledge-box-2");

const toggleModal = () => {
  modal.classList.toggle("show-modal");
}

const toggleSelection = (event) => {
  if (!event.target.classList.contains("disabled")) {
    event.target.classList.toggle("circle");
    event.target.classList.toggle("filled-circle");
    event.target.parentNode.parentNode.classList.toggle("thick-cyan-border");
    switch (event.target.id) {
      case "backing-option-1":
        pledgeBoxes.forEach(box => {
          if (!box.classList.contains("hidden")) {
            box.classList.add("hidden");
          }
        });
      case "backing-option-2":
        pledgeBox1.classList.toggle("hidden");
        if (!pledgeBox2.hasClass("hidden")) {
          pledgeBox2.classList.toggle("hidden");
        }
        break;
      case "backing-option-3":
        pledgeBox2.classList.toggle("hidden");
        if (!pledgeBox1.hasClass("hidden")) {
          pledgeBox1.classList.toggle("hidden");
        }
        break;
    }
  }
  circles.forEach(circle => {
    if (circle.id === event.target.id) {
      return;
    } else {
      circle.className = "circle";
      circle.parentNode.parentNode.classList.remove("thick-cyan-border");
      circle.classList.remove("filled-circle");
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
    bookmarkText.innerText = "Bookmarked";
  } else {
    bookmarkImg.setAttribute("fill", "#2F2F2F");
    bookmarkImgInner.setAttribute('fill', "#B1B1B1");
    bookmarkText.innerText = "Bookmark";
  }
    
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
circles.forEach(circle => circle.addEventListener("click", toggleSelection));
bookmarkButton.addEventListener("click", toggleBookmarked);