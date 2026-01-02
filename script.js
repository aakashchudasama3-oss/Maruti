// Mobile Menu Toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close menu when clicking on a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const offsetTop = target.offsetTop - 70;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});

// Form Submission (UI Only)
document.querySelector(".submit-button").addEventListener("click", (e) => {
  e.preventDefault();
  alert("This is a demo form. In production, this would send your message.");
});

// Navbar scroll effect
let lastScroll = 0;
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  const currentScroll = window.pageYOffset;
    debugger
  if (currentScroll > 100) {
    nav.style.padding = "0.5rem 5%";
  } else {
    nav.style.padding = "1rem 5%";
  }

  lastScroll = currentScroll;
});
