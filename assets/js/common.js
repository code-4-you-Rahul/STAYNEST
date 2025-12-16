// Highlight active nav link based on current filename
document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href === path || (path === "" && href === "landing.html")) {
      link.classList.add("active");
    }
  });
});
