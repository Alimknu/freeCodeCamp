document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".favorite-icon");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.classList.contains("filled")) {
        btn.innerHTML = "&#9825;";
        btn.classList.remove("filled");
      } else {
        btn.innerHTML = "&#10084;";
        btn.classList.add("filled");
      }
    });
  });
});
