document.addEventListener("DOMContentLoaded", () => {
  const profileImg = document.getElementById("about-img");
  const nav = document.getElementById("desktop-nav");

  // Click interaction on profile image
  if (profileImg) {
    profileImg.style.cursor = "pointer";
    profileImg.title = "Click to say Hi!";

    profileImg.addEventListener("click", () => {
      const messages = [
        "Hi there! 👋 Thanks for checking out my profile.",
        "Hope you're having a great day! ☀️",
        "I'm currently open to new opportunities — let's connect! 🤝"
      ];
      const randomMsg = messages[Math.floor(Math.random() * messages.length)];
      alert(randomMsg);
    });
  }

  // Scroll-based navbar background transition
  window.addEventListener("scroll", () => {
    if (nav) {
      nav.style.transition = "background-color 0.3s ease";
      nav.style.backgroundColor = window.scrollY > 50 ? "#f0fdf4" : "#ffffff";
    }
  });

  // Toggle skill card expansion
  window.toggleSkill = function (card) {
    card.classList.toggle("active");
  };
});
