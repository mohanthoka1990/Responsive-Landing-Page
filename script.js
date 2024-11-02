let navbar = document.getElementById("navbar");

document.onscroll = function () {
  if (document.documentElement.scrollTop > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
};
