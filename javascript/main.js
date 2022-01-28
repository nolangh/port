const card = document.querySelectorAll(".card");

function flipCard() {
  this.classList.toggle("flipCard");
}

card.forEach((card) => card.addEventListener("click", flipCard));
