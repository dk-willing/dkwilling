const myProjectContainer = document.querySelectorAll(".my-projects");
const myProjectTextBox = document.querySelectorAll(".project-text-box");
const navLinks = document.querySelectorAll(".navbar a");
const sections = document.querySelectorAll("section[id]");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuItems = document.querySelector(".mobile-nav-items");
const allMobileNavItems = document.querySelectorAll(".mobile-nav-item");
const mobileNavLinks = document.querySelectorAll(".mobile-nav-item a");

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
  speed: 800,
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

function clearActive() {
  navLinks.forEach((link) => link.classList.remove("active"));
}

navLinks.forEach((el) => {
  el.addEventListener("click", () => {
    clearActive();
    el.classList.add("active");
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
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
    threshold: 0.3,
  }
);
sections.forEach((section) => {
  observer.observe(section);
});

allMobileNavItems.forEach((item) => {
  item.addEventListener("click", () => {
    mobileMenuItems.classList.remove("open");
  });
});

function clearActiveLinks() {
  mobileNavLinks.forEach((el) => el.classList.remove("active"));
}

const observer2 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        mobileNavLinks.forEach((el) => {
          if (
            el.getAttribute("href") === `#${entry.target.getAttribute("id")}`
          ) {
            clearActiveLinks();
            el.classList.add("active");
          }
        });
      }
    });
  },
  {
    threshold: 0.3,
  }
);

sections.forEach((item) => {
  observer2.observe(item);
});

mobileMenu.addEventListener("click", () => {
  mobileMenuItems.classList.toggle("open");
});
