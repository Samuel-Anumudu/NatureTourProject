const btnText = document.querySelector(".btn-text");
const moveIcon = document.querySelector(".icon");

(function addMouseOver() {
  btnText.addEventListener("mouseover", function () {
    moveIcon.classList.add("icon-move");
    moveIcon.style.transition = "all 0.3s ease";
  });
})();

(function removeMouseOver() {
  btnText.addEventListener("mouseout", function () {
    moveIcon.classList.remove("icon-move");
  });
})();
