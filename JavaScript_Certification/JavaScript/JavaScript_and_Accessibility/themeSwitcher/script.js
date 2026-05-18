const themes = [
  { name: "light", message: "Light mode activated" },
  { name: "dark", message: "Dark mode activated" },
];

const themeSwitcherButton = document.getElementById("theme-switcher-button");
const themeDropdown = document.getElementById("theme-dropdown");

function toggleDropdown() {
  const isExpanded =
    themeSwitcherButton.getAttribute("aria-expanded") === "true";
  if (isExpanded) {
    themeDropdown.hidden = true;
    themeSwitcherButton.setAttribute("aria-expanded", "false");
  } else {
    themeDropdown.hidden = false;
    themeSwitcherButton.setAttribute("aria-expanded", "true");
  }
}

if (themeSwitcherButton && themeDropdown) {
  themeSwitcherButton.addEventListener("click", toggleDropdown);

  const menuItems = themeDropdown.querySelectorAll('[role="menuitem"]');
  const liveRegion = document.querySelector('[aria-live="polite"]');

  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      const id = item.id || "";
      const name = id.startsWith("theme-")
        ? id.slice("theme-".length)
        : item.textContent.trim().toLowerCase();
      const theme = themes.find(
        (t) => t.name.toLowerCase() === name.toLowerCase(),
      );
      if (theme) {
        const body = document.body;
        themes.forEach((t) => body.classList.remove(`theme-${t.name}`));
        body.classList.add(`theme-${theme.name}`);
        if (liveRegion) liveRegion.textContent = theme.message;
      }
      themeDropdown.hidden = true;
      themeSwitcherButton.setAttribute("aria-expanded", "false");
    });
  });
}
