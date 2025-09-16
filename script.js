const myProjectContainer = document.querySelectorAll(".my-projects");
const myProjectTextBox = document.querySelectorAll(".project-text-box");

myProjectContainer.forEach((el, idx) => {
  el.classList.add(idx % 2 === 0 ? "left-container" : "right-container");
});

myProjectTextBox.forEach((el, idx) => {
  const span = document.createElement("span");
  span.classList.add(
    idx % 2 === 0 ? "left-container-arrow" : "right-container-arrow"
  );
  el.appendChild(span);
});

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  speed: 5000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    pauseOnMouseEnter: false,
  },
  slidesPerView: "auto",
  spaceBetween: 30,
  freeMode: {
    enabled: true,
    momentum: false,
  },
  pagination: false,
  navigation: false,
  scrollbar: false,
});

const navLinks = document.querySelectorAll(".navbar a");

function clearActive() {
  navLinks.forEach((link) => link.classList.remove("active"));
}

navLinks.forEach((el) => {
  el.addEventListener("click", () => {
    clearActive();
    el.classList.add("active");
  });
});

const sections = document.querySelectorAll("section[id]");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log(entry);
        navLinks.forEach((el) => {
          if (
            el.getAttribute("href") === `#${entry.target.getAttribute("id")}`
          ) {
            clearActive();
            el.classList.add("active");
          }
        });
      }
    });
  },
  {
    threshold: 0.2,
  }
);

sections.forEach((section) => {
  observer.observe(section);
});
