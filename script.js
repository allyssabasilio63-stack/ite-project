// Allyssa Clemente's ITE 1 portfolio interactions.
document.addEventListener("DOMContentLoaded", () => {
  // Current year in the footer.
  document.querySelectorAll(".current-year").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  // Mobile navigation.
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("nav-open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.textContent = isOpen ? "✕" : "☰";
    });
  }

  // Dark/light mode with saved preference where browser storage is available.
  const themeButtons = document.querySelectorAll(".theme-toggle");
  const savedTheme = localStorage.getItem("allyssa-portfolio-theme");
  if (savedTheme === "dark") document.body.classList.add("dark-mode");
  updateThemeButtons();
  themeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      localStorage.setItem("allyssa-portfolio-theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
      updateThemeButtons();
    });
  });
  function updateThemeButtons() {
    themeButtons.forEach((button) => {
      button.textContent = document.body.classList.contains("dark-mode") ? "☀" : "☾";
      button.setAttribute("aria-label", document.body.classList.contains("dark-mode") ? "Switch to light mode" : "Switch to dark mode");
    });
  }

  // Welcome message interaction on the home page.
  const welcomeButton = document.getElementById("welcome-button");
  const welcomeMessage = document.getElementById("welcome-message");
  if (welcomeButton && welcomeMessage) {
    welcomeButton.addEventListener("click", () => {
      welcomeMessage.textContent = "Thanks for visiting my portfolio! I hope you enjoy exploring my work.";
      welcomeButton.textContent = "Hello to you too ✓";
      welcomeButton.classList.add("button-success");
    });
  }

  // Show/hide extra information on the About page.
  const readMoreButton = document.getElementById("read-more-button");
  const extraAbout = document.getElementById("extra-about");
  if (readMoreButton && extraAbout) {
    readMoreButton.addEventListener("click", () => {
      const expanded = readMoreButton.getAttribute("aria-expanded") === "true";
      readMoreButton.setAttribute("aria-expanded", String(!expanded));
      extraAbout.hidden = expanded;
      readMoreButton.innerHTML = expanded ? 'Read More <span aria-hidden="true">＋</span>' : 'Read Less <span aria-hidden="true">−</span>';
    });
  }

  // Project placeholder cards show a helpful alert rather than opening a nonexistent link.
  document.querySelectorAll(".project-alert").forEach((button) => {
    button.addEventListener("click", () => {
      alert(button.dataset.project + " is a placeholder. Replace it with a real class activity and link when ready.");
    });
  });

  // Contact form: client-side validation demo only; it does not send messages.
  const contactForm = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");
  if (contactForm && formStatus) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
      }
      formStatus.textContent = "Your fields look complete. This demo form does not send a message; use the email link above to contact Allyssa.";
      formStatus.classList.add("status-visible");
      contactForm.reset();
    });
  }

  // Back-to-top button.
  document.querySelectorAll(".back-top").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
});