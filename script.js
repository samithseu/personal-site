const eachBtns = document.querySelectorAll(".card");
eachBtns.forEach((e, i) => {
  e.style.opacity = 0;
  e.classList.add("animate__fadeInDown");
  e.style.animationDelay = `${(0 + i) / 15}s`;
  e.style.opacity = 1;
});
