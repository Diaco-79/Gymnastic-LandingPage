const menuToggle = document.querySelector(".menu");
const lines = document.querySelectorAll(".line");
const headerRight = document.querySelector(".header__right");

menuToggle.addEventListener("click", function () {
  if (lines[1].classList.contains("active")) {
    lines.forEach(function (item) {
      item.classList.toggle("initial");
      item.classList.toggle("active");
      headerRight.style.transform = "translateX(100%)";
    });
  } else if (lines[1].classList.contains("initial")) {
    lines.forEach(function (item) {
      item.classList.toggle("initial");
      item.classList.toggle("active");
      headerRight.style.transform = "translateX(0)";
    });
  } else {
    lines.forEach(function (item) {
      item.classList.toggle("active");
      headerRight.style.transform = "translateX(0)";
    });
  }
});
