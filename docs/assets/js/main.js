(function () {
  const root = document.documentElement;
  const btn = document.getElementById("themeToggle");

  // default: dark (A)
  const saved = localStorage.getItem("theme");
  if (saved === "light") root.setAttribute("data-theme", "light");
  else root.setAttribute("data-theme", "dark");

  function setLabel() {
    const isLight = root.getAttribute("data-theme") === "light";
    if (btn) btn.textContent = isLight ? "Light Mode" : "Dark Mode";
  }

  setLabel();

  if (btn) {
    btn.addEventListener("click", () => {
      const isLight = root.getAttribute("data-theme") === "light";
      root.setAttribute("data-theme", isLight ? "dark" : "light");
      localStorage.setItem("theme", isLight ? "dark" : "light");
      setLabel();
    });
  }
})();

// Page load fade/slide
window.addEventListener("load", () => {
  document.body.classList.add("is-loaded");

  // Optional: stagger reveal any elements with .reveal
  document.querySelectorAll(".reveal").forEach((el, i) => {
    setTimeout(() => el.classList.add("show"), 120 * i);
  });
});
