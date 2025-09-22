const heroGreetObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("hero__animate_greet");
      } else {
        entry.target.classList.remove("hero__animate_greet");
      }
    });
  },
  {
    threshold: 0.6,
  }
);

const greetBox = document.querySelector(".p__greet-box");
const hireBtn = document.querySelector(".hire-me");
heroGreetObserver.observe(greetBox);
heroGreetObserver.observe(hireBtn);
