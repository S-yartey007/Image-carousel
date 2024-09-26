const container = document.querySelector(".container");
const innerContainer = container.querySelector(".inner-container");
const previous = container.querySelector(".backward");
const forward = container.querySelector(".forward");
const images = innerContainer.querySelectorAll("img");

let counter = 0;
const size = images[0].clientWidth;

previous.addEventListener("click", () => {
  if (counter <= 0) return;
  counter--;
  innerContainer.style.transition = " transform 1s ease-in-out";
  innerContainer.style.transform = `translateX(${-size * counter}px)`;
});

forward.addEventListener("click", () => {
  if (counter > images.length - 3) return;
  counter++;
  innerContainer.style.transition = "transform 1s ease-in-out";
  innerContainer.style.transform = `translateX(${-size * counter}px)`;
});

setInterval(() => {
  if (counter > images.length - 3) return;
  counter++;
  innerContainer.style.transition = "transform 1s ease-in-out";
  innerContainer.style.transform = `translateX(${-size * counter}px)`;
}, 5000);
