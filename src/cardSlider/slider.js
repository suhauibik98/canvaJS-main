const slides = document.querySelectorAll(".slide");
const buttonLeft = document.querySelector(".button-left");
const buttonRight = document.querySelector(".button-right");
const container = document.querySelector(".container");
let count = 0;
let x1 = null;
let x2 = null;
let time;
let interval;

slides.forEach((slide, i) => {
  slide.addEventListener("click", () => {
    clearActiveClases();

    count = i;
    showSlides(count);

    clearInterval(interval);
    startInterval();
  });
});

function showSlides(count) {
  clearActiveClases();
  slides[count].classList.add("active");
}
showSlides(0);

function clearActiveClases() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
}

function startInterval() {
  interval = setInterval(() => {
    if (count < slides.length - 1) {
      clearActiveClases();
      showSlides(++count);
    } else {
      clearActiveClases();
      showSlides((count = 0));
    }
  }, 5000);
}
startInterval();

buttonLeft.addEventListener("click", () => {
  clearTimeout(time);
  if (count > 0) {
    count -= 1;
  } else count = slides.length - 1;

  time = setTimeout(() => {
    showSlides(count);
  }, 150);
  clearInterval(interval);
  startInterval();
});
buttonRight.addEventListener("click", () => {
  clearTimeout(time);
  if (count < slides.length - 1) {
    count += 1;
  } else count = 0;
  time = setTimeout(() => {
    showSlides(count);
  }, 150);
  clearInterval(interval);
  startInterval();
});

container.addEventListener("touchstart", handleTouchStart, false);
container.addEventListener("touchmove", handleTouchMove, false);

function handleTouchStart(event) {
  const firstTouch = event.touches[0];

  x1 = firstTouch.clientX;
  y1 = firstTouch.clientY;
}

function handleTouchMove(event) {
  if (!x1 || !y1) {
    return false;
  }

  let x2 = event.touches[0].clientX;
  let y2 = event.touches[0].clientY;

  let xDiff = x2 - x1;
  let yDiff = y2 - y1;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    //r - l

    if (xDiff > 0) {
      if (count > 0) {
        count -= 1;
      } else count = slides.length - 1;
    } else {
      if (count < slides.length - 1) {
        count += 1;
      } else count = 0;
    }
    showSlides(count);
    clearInterval(interval);
    startInterval();
  }
  // else {
  // 	//t - b
  // 	if (yDiff > 0) {

  // 	} else {

  // 	}

  // }

  x1 = null;
  y1 = null;
}
