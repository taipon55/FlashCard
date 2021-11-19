"use strict";
var words = [
  { en: "read", ja: "読む" },
  { en: "write", ja: "書く" },
  { en: "eat", ja: "食べる" },
  { en: "run", ja: "走る" },
  { en: "walk", ja: "歩く" },
];

let card = document.getElementById("card");
let cardFront = document.getElementById("card-front");
let cardBack = document.getElementById("card-back");
let btn = document.getElementById("btn");

card.addEventListener("click", function () {
  flip();
});

btn.addEventListener("click", function () {
  next();
});

function next() {
  if (card.className === "open") {
    card.addEventListener("transitionend", setCard);
    flip();
  } else {
    setCard();
  }
}

function setCard() {
  let num = Math.floor(Math.random() * words.length);
  cardFront.innerHTML = words[num]["en"];
  cardBack.innerHTML = words[num]["ja"];
  card.removeEventListener("transitionend", setCard);
}

setCard();

window.addEventListener("keyup", function (e) {
  if (e.keyCode === 70) {
    flip();
  } else if (e.keyCode === 78) {
    next();
  }
});

function flip() {
  card.className = card.className === "" ? "open" : "";
}
