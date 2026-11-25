const themeToggleBtn = document.getElementById("themeToggle");

if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
}


const greetingEl = document.getElementById("greetingMsg");

if (greetingEl) {
  greetingEl.textContent = "Welcome to my portfolio!";
}