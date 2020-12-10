// Scroll down for fixed nav bar:

window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  nav.classList.toggle("sticky", window.scrollY > 0);
});

// Navigation menu for 768px viewport:
const navSlide = (() => {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  // Change hamburger to document to enable toggle click anywhere on screen
  hamburger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    // Fade in Links:
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.3s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });

    // Hamburger Animation:
    hamburger.classList.toggle("toggle");
  });
})();

// document.addEventListener("click", () => {
//   const nav = document.querySelector(".nav-links");
//   nav.classList.remove("nav-active");
// });
