const modal = document.querySelector("#simpleModal");
const modalBtn = document.querySelector("#modalBtn");
const closeBtn = document.querySelector(".closeBtn");

modalBtn.addEventListener("click", openModal);
// closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", outsideClick);

function openModal() {
  modal.style.display = "grid";
}
// function closeModal() {
//   modal.style.display = "none";
// }
function outsideClick(e) {
  console.log(e.target);
  if (e.target == modal) {
    modal.style.display = "none";
  }
}
