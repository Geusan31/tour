// Hamburger Menu
const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("navbar");
const windowWidth = window.innerWidth;

// Toggle Navbar
hamburger.addEventListener("click", () => {
  navbar.classList.toggle("show");
});

// Hapus class show ketika window resize
window.addEventListener("resize", () => {
  if (windowWidth > 525) {
    if (navbar.classList.contains("show")) {
      navbar.classList.remove("show");
    }
  }
});

// Tambahkan class active ketika scroll melebihi 250
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  const scrollTop = window.scrollY;
  if (scrollTop > 250) {
    navbar.classList.add("active");
  } else {
    navbar.classList.remove("active");
  }
});

// Show more
const showMoreBtn = document.getElementById("show-more");

showMoreBtn.addEventListener("click", () => {
  window.scrollBy({
    top: 250,
    behavior: "smooth",
  });
});