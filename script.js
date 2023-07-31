// script.js
const slider = document.querySelector('.banner-slider');
const slideWidth = slider.clientWidth;
let counter = 0;

function slide() {
  slider.style.transition = 'transform 1s ease-in-out';
  slider.style.transform = `translateX(-${slideWidth * counter}px)`;
  counter++;

  if (counter >= slider.children.length) {
    counter = 0;
    setTimeout(() => {
      slider.style.transition = 'none';
      slider.style.transform = `translateX(0)`;
    }, 1000);
  }

  setTimeout(slide, 5000); // Change slide every 5 seconds
}

slider.addEventListener('click', () => {
  const activeSlide = counter === 0 ? slider.children.length - 1 : counter - 1;
  const link = slider.children[activeSlide].firstElementChild.href;
  window.location.href = link;
});

slide();
