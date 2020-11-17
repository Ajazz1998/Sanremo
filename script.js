//-------- This code is for slide show


const testimonialCarouselContainer = document.querySelectorAll('.sale-testimonial-item');
const carouselSwitch = document.querySelectorAll('.sale-testimonial-switch');

let carouselCounter = 1;
showContainer(carouselCounter);

function currentContainer(n) {
  showContainer(carouselCounter = n);
}


function showContainer(n) {

  for (let i = 0; i < testimonialCarouselContainer.length; i++) {
    testimonialCarouselContainer[i].style.display = 'none';
    testimonialCarouselContainer[i].classList.remove('fast-fade-in-left');
    carouselSwitch[i].classList.remove('active-carousel-switch');
  }

  if (carouselCounter > testimonialCarouselContainer.length) {
    carouselCounter = 1;
  }

  testimonialCarouselContainer[carouselCounter - 1].style.display = 'flex';
  testimonialCarouselContainer[carouselCounter - 1].classList.add('fast-fade-in-left');
  carouselSwitch[carouselCounter - 1].classList.add('active-carousel-switch');

  carouselCounter++;
  setTimeout(showContainer, 300000);

}

carouselSwitch.forEach((button, i) => {
  button.addEventListener('click', () => {
    currentContainer(i + 1);
  });
});


const gap = 16;

const carousel = document.getElementById("carousel"),
  content = document.getElementById("content"),
  next = document.getElementById("next"),
  prev = document.getElementById("prev");

next.addEventListener("click", e => {
  carousel.scrollBy(width + gap, 0);
  if (carousel.scrollWidth !== 0) {
    prev.style.display = "flex";
  }
  if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "none";
  }
});
prev.addEventListener("click", e => {
  carousel.scrollBy(-(width + gap), 0);
  if (carousel.scrollLeft - width - gap <= 0) {
    prev.style.display = "none";
  }
  if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "flex";
  }
});





// Second testimonial



const testimonialCarouselContainers = document.querySelectorAll('.client-testimonial-item');
const carouselSwitchs = document.querySelectorAll('.client-testimonial-switch');

let carouselCounters = 1;
showContainers(carouselCounters);

function currentContainers(n) {
  showContainers(carouselCounters = n);
}


function showContainers(n) {

  for (let i = 0; i < testimonialCarouselContainers.length; i++) {
    testimonialCarouselContainers[i].style.display = 'none';
    testimonialCarouselContainers[i].classList.remove('fast-fade-in-left');
    carouselSwitchs[i].classList.remove('active-carousel-switch');
  }

  if (carouselCounters > testimonialCarouselContainers.length) {
    carouselCounters = 1;
  }

  testimonialCarouselContainers[carouselCounters - 1].style.display = 'block';
  testimonialCarouselContainers[carouselCounters - 1].classList.add('fast-fade-in-left');
  carouselSwitchs[carouselCounters - 1].classList.add('active-carousel-switch');

  carouselCounters++;
  setTimeout(showContainers, 30000);

}

carouselSwitchs.forEach((button, i) => {
  button.addEventListener('click', () => {
    currentContainers(i + 1);
  });
});


let width = carousel.offsetWidth;
window.addEventListener("resize", e => (width = carousel.offsetWidth));






