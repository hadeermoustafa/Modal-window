"use strict";
//Define The variables to select the clases
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const showModal = document.querySelectorAll(".show-modal");

//Define the Open modal function
const open = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

//Define the Close modal function
const close = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

//Trigerring opening the class each time a button is clicked
for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener("click", open);
}

//Close the Modal on X click or on the overlay
btnCloseModal.addEventListener("click", close);
overlay.addEventListener("click", close);
