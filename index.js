let modal = document.querySelector(".modal");
let optionsModal = document.querySelector("#options-modal");
let thanksModal = document.querySelector("#thanks-modal");
let circles = document.querySelectorAll(".circle");
let backingOptions = document.querySelectorAll("[id^=backing-option]");
let trigger = document.querySelector(".trigger");
let closeButton = document.querySelector(".close-button");
let bookmarkButton = document.querySelector("#bookmark-button");
let bookmarkText = document.querySelector("#bookmarkText");
let bookmarkImg = document.querySelector(".grey-button-img circle");
let bookmarkImgInner = document.querySelector(".grey-button-img path");
let pledgeBoxes = document.querySelectorAll("div[id^=pledge-box]");
let pledgeBox1 = document.querySelector("#pledge-box-1");
let pledgeBox2 = document.querySelector("#pledge-box-2");
let continueButtons = document.querySelectorAll("a[data='continue']");
let okayButton = document.querySelector("#okay");

const toggleModal = () => {
  modal.classList.toggle("show-modal");
  if (optionsModal.classList.contains("hidden")) {
    optionsModal.classList.remove("hidden");
    thanksModal.classList.add("hidden");
  };
}

const toggleSelection = (event) => {
  if (!event.target.classList.contains("disabled")) {
    event.target.classList.toggle("circle");
    event.target.classList.toggle("filled-circle");
    event.target.parentNode.parentNode.classList.toggle("thick-cyan-border");

    backingOptions.forEach(option => {
      if (option.id === event.target.id || option.classList.contains("disabled")) {
        return;
      } else {
        option.className = "circle";
        option.parentNode.parentNode.classList.remove("thick-cyan-border");
      }
    });

    switch (event.target.id) {
      case "backing-option-1":
        pledgeBoxes.forEach(box => {
          box.classList.add("hidden");
        });
        break;
      case "backing-option-2":
        pledgeBox1.classList.toggle("hidden");
        if (!pledgeBox2.classList.contains("hidden")) {
          pledgeBox2.classList.toggle("hidden");
        }
        break;
      case "backing-option-3":
        pledgeBox2.classList.toggle("hidden");
        if (!pledgeBox1.classList.contains("hidden")) {
          pledgeBox1.classList.toggle("hidden");
        }
        break;
    }
  }
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

const toggleThankYou = () => {
  optionsModal.classList.toggle("hidden");
  thanksModal.classList.toggle("hidden");
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
circles.forEach(circle => circle.addEventListener("click", toggleSelection));
bookmarkButton.addEventListener("click", toggleBookmarked);
continueButtons.forEach(button => button.addEventListener("click", toggleThankYou));
okayButton.addEventListener("click", toggleModal);