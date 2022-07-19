"use strict";

const shareIcon = document.querySelector(".share-icon-box");
const shareContainer = document.querySelector(".share-container");

shareIcon.addEventListener("click", function () {
  shareContainer.classList.toggle("hidden");
});
