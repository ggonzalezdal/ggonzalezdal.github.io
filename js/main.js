(function () {
  const THEME_KEY = "gg-site-theme";
  const body = document.body;
  const toggleButton = document.getElementById("theme-toggle");

  function applyStoredTheme() {
    const stored = window.localStorage.getItem(THEME_KEY);
    if (stored === "dark") {
      body.classList.add("dark-theme");
    } else if (stored === "light") {
      body.classList.remove("dark-theme");
    }
  }

  function toggleTheme() {
    const isDark = body.classList.toggle("dark-theme");
    window.localStorage.setItem(THEME_KEY, isDark ? "dark" : "light");
  }

  if (toggleButton) {
    applyStoredTheme();
    toggleButton.addEventListener("click", toggleTheme);
  }
})();
