document.addEventListener("DOMContentLoaded", () => {
  const profileImg = document.getElementById("about-img");
  const nav = document.getElementById("desktop-nav");
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.querySelector(".nav-links");
  const projectCards = document.querySelectorAll(".project-card"); // Select all project cards

  // --- Profile Image Click Message ---
  if (profileImg) {
    profileImg.style.cursor = "pointer";
    profileImg.title = "Click to say Hi!";
    profileImg.addEventListener("click", () => {
      const messages = [
        "Hi there! 👋 Thanks for checking out my profile.",
        "Hope you're having a great day! ☀️",
        "I'm currently open to new opportunities — let's connect! 🤝",
      ];
      alert(messages[Math.floor(Math.random() * messages.length)]);
    });
  }

  // --- Scroll Navbar Background Change ---
  if (nav) {
    window.addEventListener("scroll", () => {
      nav.style.transition = "background-color 0.3s ease";
      nav.style.backgroundColor = window.scrollY > 50 ? "#f0fdf4" : "#ffffff";
    });
  }

  // --- Hamburger Menu Toggle ---
  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  // --- Skill Card Expansion (assuming this is for a different section) ---
  // Ensure that 'window.toggleSkill' is used correctly if it's meant to be called from HTML.
  // If it's for an internal JS behavior, it should probably be `const toggleSkill = ...`
  // and called directly or attached to elements within this scope.
  // For now, keeping it as is based on your original code.
  window.toggleSkill = function (card) {
    card.classList.toggle("active");
  };

  // --- Project Card Click for Description Toggle ---
  projectCards.forEach((card) => {
    card.addEventListener("click", () => {
      // Toggle the 'is-expanded' class on the clicked project card
      card.classList.toggle("is-expanded");
    });
  });
});

// --- Modal Toggle Logic (global scope) ---
function toggleModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = modal.style.display === "none" ? "block" : "none";
  }
}

// --- Close Modal on Outside Click ---
window.onclick = function (event) {
  const modal = document.getElementById("internshipModal"); // Assuming you only have one modal with this ID
  if (modal && event.target === modal) {
    modal.style.display = "none";
  }
};