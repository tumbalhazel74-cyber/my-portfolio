
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


(function () {
  const root = document.documentElement;
  const btn = document.getElementById("themeToggle");

  
  const stored = localStorage.getItem("theme");
  const prefersDark = window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initial = stored ? stored : (prefersDark ? "dark" : "light");
  setTheme(initial);

  if (btn) {
    btn.addEventListener("click", function () {
      const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      setTheme(next);
    });
  }

  function setTheme(theme) {
    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);

    if (btn) {
      btn.innerHTML = theme === "dark"
        ? '<i class="fas fa-sun"></i>'
        : '<i class="fas fa-moon"></i>';
      btn.setAttribute("aria-pressed", theme === "dark");
    }
  }
})();


document.addEventListener("DOMContentLoaded", () => {
  const fills = document.querySelectorAll(".bar-fill");

  function animateBars() {
    fills.forEach(fill => {
      const value = fill.getAttribute("data-fill") || 50;
      fill.style.width = value + "%";
    });
  }

  
  setTimeout(animateBars, 300);
});