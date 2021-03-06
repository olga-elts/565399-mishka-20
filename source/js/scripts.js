var mainNav = document.querySelector(".page-header__main-nav");
var userNav = document.querySelector(".page-header__user-nav");
var navBurger = document.querySelector(".page-header__burger");

var menuToggle = function() {
  navBurger.classList.toggle("page-header__burger--open");
  navBurger.classList.toggle("page-header__burger--close");
  mainNav.classList.toggle("nav--closed");
  userNav.classList.toggle("nav--closed");
};

var menuClose = function() {
  navBurger.classList.add("page-header__burger--open");
  mainNav.classList.add("nav--closed");
  userNav.classList.add("nav--closed");
};

window.addEventListener("resize", () => {
  if (window.innerWidth < 768) {
    menuClose();
  };
});

if (window.screen.width < 768) {
  menuClose();
};

navBurger.addEventListener("click", function() {
  menuToggle();
});

var orderBtns = document.querySelectorAll(".js-modal");
var page = document.querySelector(".page");
var modal = document.querySelector(".modal");

var closeModal = function() {
  modal.classList.remove("modal--show");
  page.classList.remove("page--overlayed");
};

if (orderBtns) {
  orderBtns.forEach(item => {
    item.addEventListener("click", function (evt) {
      evt.preventDefault();
      modal.classList.add("modal--show");
      page.classList.add("page--overlayed");
    });
  });

  window.addEventListener('click', function(evt) {
    if (modal.classList.contains("modal--show")) {
      if (!modal.contains(evt.target) && (!evt.target.classList.contains("js-modal"))) {
        console.log("true");
        closeModal();
      };
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (modal.classList.contains("modal--show")) {
        evt.preventDefault();
        closeModal();
      }
    }
  });
}
