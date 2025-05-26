document.addEventListener("DOMContentLoaded", () => {
  const menuItems = document.querySelector("#menu-items");
  const menuButton = document.querySelector("#menu-btn");
  const closeNav = document.querySelector("#menu-close");

  menuButton.addEventListener("click", () => {
    menuItems.classList.remove("hidden");
  });

  closeNav.addEventListener("click", () => {
    menuItems.classList.add("hidden");
  });
});
