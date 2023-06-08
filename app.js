const menu = document.querySelector(".menuIcon");
const close = document.querySelector(".closeIcon");

const mobilePopUpMenu = document.querySelector(".mobilePopUpMenu");
const mobilePopUpBg = document.querySelector(".mobilePopUpBg");

function closeMenu() {
  menu.style.display = "block";
  close.style.display = "none";

  mobilePopUpMenu.style.display = "none";
  mobilePopUpBg.style.display = "none";
}

function openMenu() {
  menu.style.display = "none";
  close.style.display = "block";

  mobilePopUpMenu.style.display = "block";
  mobilePopUpBg.style.display = "block";
}

// Open Menu
menu.addEventListener("click", function () {
  openMenu();
});

// Close Menu
close.addEventListener("click", function () {
  closeMenu();
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeMenu();
  }
});

window.addEventListener("click", function (event) {
  if (event.target == mobilePopUpBg) {
    closeMenu();
  }
});
