let hamburger = document.getElementById("hamburger");
let navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  const isActive = navLinks.classList.toggle("active");
  hamburger.setAttribute("aria-expanded", isActive ? "true" : "false");
  navLinks.setAttribute("aria-hidden", isActive ? "false" : "true");

  const links = navLinks.querySelectorAll("a");
  links.forEach((link) => {
    if (isActive) {
      link.removeAttribute("tabindex");
    } else {
      link.setAttribute("tabindex", "-1");
    }
  });
});
