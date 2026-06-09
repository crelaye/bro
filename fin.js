// SOCIAL SECTION

const socialCards =
document.querySelectorAll(
  ".social-card"
);

socialCards.forEach(card => {

  card.addEventListener(
    "mouseenter",
    () => {

      card.style.transition =
      "0.3s ease";

    }
  );

});

console.log(
  "Social media section loaded"
);