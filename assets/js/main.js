/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* Menu show */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* Menu hidden */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

document.querySelectorAll('[class*="-picker"]').forEach((picker) => {
  const buttons = picker.querySelectorAll('[class*="-btn"]');

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      buttons.forEach((btn) => btn.classList.remove("active"));

      this.classList.add("active");

      console.log("Sélectionné:", this.textContent.trim());
    });
  });
});

// Projects
const filterButtons = document.querySelectorAll(".floating-btn");
const projectCards = document.querySelectorAll(".professional-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.getAttribute("data-brand");

    projectCards.forEach((card) => {
      const category = card
        .querySelector(".project-category, .project-category-2")
        ?.textContent.trim();

      if (filter === "all") {
        card.parentElement.style.display = "block";
      } else if (
        (filter === "formation" && category === "En formation") ||
        (filter === "entreprise" && category === "En entreprise")
      ) {
        card.parentElement.style.display = "block";
      } else {
        card.parentElement.style.display = "none";
      }
    });
  });
});