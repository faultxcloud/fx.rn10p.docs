window.addEventListener("DOMContentLoaded", function () {
  const toggleDarkMode = document.getElementById("theme-toggle");

  if (localStorage.getItem("theme") === "dark") {
    setTheme("dark");
  } else {
    setTheme("light");
  }

  jtd.addEvent(toggleDarkMode, "click", function () {
    const currentTheme = getTheme();
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    const fader = document.getElementById("theme-fader");

    if (fader) {
      // Fade in overlay
      fader.classList.add("active");

      // Tunggu sedikit, baru ganti tema
      setTimeout(function () {
        localStorage.setItem("theme", newTheme);
        setTheme(newTheme);
        jtd.setTheme(newTheme);

        // Setelah tema diganti, fade out overlay
        setTimeout(function () {
          fader.classList.remove("active");
        }, 300);
      }, 200);
    } else {
      // Fallback kalau #theme-fader nggak ada
      localStorage.setItem("theme", newTheme);
      setTheme(newTheme);
      jtd.setTheme(newTheme);
    }
  });

  function getTheme() {
    return document.documentElement.classList.contains("dark-mode")
      ? "dark"
      : "light";
  }

  function setTheme(theme) {
    if (theme === "dark") {
      toggleDarkMode.innerHTML =
        `<svg width='18px' height='18px'><use href="#svg-moon"></use></svg>`;
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
    } else {
      toggleDarkMode.innerHTML =
        `<svg width='18px' height='18px'><use href="#svg-sun"></use></svg>`;
      document.documentElement.classList.add("light-mode");
      document.documentElement.classList.remove("dark-mode");
    }
  }
});
