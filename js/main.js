var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 60,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const goTopBtn = document.querySelector(".subir");

window.addEventListener("scroll", checkHeight);

function checkHeight() {
  if (window.scrollY > 800) {
    goTopBtn.style.display = "flex"
  } else {
    goTopBtn.style.display = "none"
  }
}

goTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});