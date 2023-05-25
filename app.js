const navToggle = document.querySelector(".open-menu");
const navList = document.querySelector(".nav-list");
let isMenuOpen = false;

const handleMenuVisibility = () => {
  const viewportWidth = window.innerWidth;

  if (viewportWidth >= 901) {
    navList.style.display = "flex";
    navToggle.style.display = "none";
    isMenuOpen = true;
  } else {
    navList.style.display = "none";
    navToggle.style.display = "block";
    isMenuOpen = false;
  }
};

// Initial check on page load
handleMenuVisibility();

// Listen for window resize events
window.addEventListener("resize", handleMenuVisibility);

navToggle.addEventListener("click", () => {
  if (isMenuOpen) {
    navList.style.display = "none";
    isMenuOpen = false;
  } else {
    navList.style.display = "flex";
    isMenuOpen = true;
  }
});
