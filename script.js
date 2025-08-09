const navbarItems = document.querySelectorAll(".navbar-item");
const themeBtn = document.querySelector(".theme-btn");

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
