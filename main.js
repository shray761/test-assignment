function handleNavigation() {
  let activeNav = "cards-today";

  const toggleNav = function () {
    document.querySelector(".nav .nav-active").classList.remove("nav-active");
    this.classList.add("nav-active");

    document.getElementById(activeNav).classList.remove("cards-view-active");
    activeNav = this.getAttribute("data-nav");
    document.getElementById(activeNav).classList.add("cards-view-active");
  };

  const navs = document.querySelectorAll(".nav a");
  for (const nav of navs) {
    nav.addEventListener("click", toggleNav);
  }
}

(function () {
  handleNavigation();
})();