const navbarItems = document.querySelectorAll(".navbar-item a");
const themeBtn = document.querySelector(".theme-btn");

const myProjectContainer = document.querySelectorAll(".my-projects");
const myProjectTextBox = document.querySelectorAll(".project-text-box");

myProjectContainer.forEach((el, idx) => {
  if (idx % 2 === 0) {
    el.classList.add("left-container");
  } else {
    el.classList.add("right-container");
  }
});

myProjectTextBox.forEach((el, idx) => {
  const span = document.createElement("span");
  el.appendChild(span);

  if (idx % 2 === 0) {
    span.classList.add("left-container-arrow");
  } else {
    span.classList.add("right-container-arrow");
  }
});

function removeClassList(item) {
  item.forEach((i) => {
    i.classList.remove("active");
  });
}

navbarItems.forEach((item) => {
  item.addEventListener("click", () => {
    removeClassList(navbarItems);
    item.classList.add("active");
  });
});

themeBtn.addEventListener("click", () => {
  document.querySelector("html").classList.toggle("dark");
});

// Swiper JS
const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  speed: 5000, // bigger = slower, smoother scroll
  autoplay: {
    delay: 0, // no pause between transitions
    disableOnInteraction: false,
    pauseOnMouseEnter: false,
  },
  slidesPerView: "auto", // each slide takes its natural width
  spaceBetween: 30, // adjust spacing between logos
  freeMode: {
    enabled: true,
    momentum: false,
  },

  // Optional: remove pagination/navigation if not needed
  pagination: false,
  navigation: false,
  scrollbar: false,
});
