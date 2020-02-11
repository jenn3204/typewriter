"use strict";

window.addEventListener("DOMContentLoaded", start);

const text = document.querySelector(".typewritten").textContent;
let counter = 1;

function start() {
  document.querySelector(".typewritten").textContent = "";
  document.querySelector(".typewritten").textContent = text.substring(0, counter);
  counter++;

  setTimeout(showLetters, 300);
}

function showLetters() {
  if (text.length >= counter) {
    start();
  }
}
