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

// PRICING PAGE
// PRICING PAGE
// PRICING PAGE
const toggleSwitch = document.querySelector(".toggleSwitch");
const toggleMonth = document.querySelector(".toggleMonth");
const toggleYear = document.querySelector(".toggleYear");

const planDate = document.querySelectorAll(".planDate");
const basicPlanPrice = document.querySelector(".basicPlanPrice");
const proPlanPrice = document.querySelector(".proPlanPrice");
const businessPlanPrice = document.querySelector(".businessPlanPrice");

function perYear() {
  planDate.forEach(function (span) {
    span.textContent = "per year";
  });
}

function perMonth() {
  planDate.forEach(function (span) {
    span.textContent = "per month";
  });
}

function monthPrices() {
  basicPlanPrice.textContent = "$19.00";
  proPlanPrice.textContent = "$39.00";
  businessPlanPrice.textContent = "$99.00";
}

function yearPrices() {
  basicPlanPrice.textContent = "$190.00";
  proPlanPrice.textContent = "$390.00";
  businessPlanPrice.textContent = "$990.00";
}

function toYearly() {
  toggleYear.style.opacity = "100%";
  toggleMonth.style.opacity = "50%";

  perYear();
  yearPrices();
}
function toMonthly() {
  toggleMonth.style.opacity = "100%";
  toggleYear.style.opacity = "50%";

  perMonth();
  monthPrices();
}

function changeToggleSwitch() {
  if (toggleSwitch.checked) {
    toYearly();
  } else {
    toMonthly();
  }
}

toggleSwitch.addEventListener("change", function () {
  changeToggleSwitch();
});
