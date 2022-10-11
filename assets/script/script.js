const header = document.querySelector(".header");

function modifyHeader() {
  if (window.scrollY > 70) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
}

document.addEventListener("scroll", modifyHeader);

function removeModifyHeader() {
  if (window.innerWidth <= 760) {
    document.removeEventListener("scroll", modifyHeader);
  }
}

removeModifyHeader();

// MENU MOBILE

const btnMobile = document.querySelector(".btn-mobile");
const navBar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".mobile");

function menuMobile() {
  navBar.classList.toggle("active");
}

btnMobile.addEventListener("click", menuMobile);

navLinks.forEach(function (itemMenu) {
  itemMenu.addEventListener("click", menuMobile);
});
