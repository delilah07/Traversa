import { loadAnim, scrollAnim } from './animation.js';
import { handleFormSubmit } from './form.js';

// slider
const sliderArrows = document.querySelectorAll('[data-slideBtn]');
const sliderContainer = document.querySelector('.places__slider');
const slides = [...document.querySelectorAll('.places__slide')];

let currentSliderIndex = 0;
let isMoving = false;
let transformUnit = slides.length;

const removeDisabledAttribute = (els) =>
  els.forEach((el) => el.removeAttribute('disabled'));
export const addDisabledAttribute = (els) =>
  els.forEach((el) => el.setAttribute('disabled', 'true'));

sliderArrows.forEach((btn) =>
  btn.addEventListener('click', handleSlideBtnClick)
);
sliderContainer.addEventListener('sliderMove', () => {
  if (isMoving) return;
  isMoving = true;
  sliderObserver.observe(slides[slides.length - 1]);
  console.log(currentSliderIndex, transformUnit);
  sliderContainer.style.transform = `translateX(-${
    currentSliderIndex < transformUnit
      ? currentSliderIndex * (slides[0].clientWidth + 20)
      : transformUnit * (slides[0].clientWidth + 20)
  }px)`;
  removeDisabledAttribute(sliderArrows);
  currentSliderIndex === 0 && addDisabledAttribute([sliderArrows[0]]);
  currentSliderIndex === slides.length - 1 &&
    addDisabledAttribute([sliderArrows[1]]);
});

//transition end event
sliderContainer.addEventListener('transitionend', () => (isMoving = false));

//disable image drag events
document
  .querySelectorAll('.places__slide img')
  .forEach((img) => (img.ondragstart = () => false));

// intersection observer for slider
const sliderObserver = new IntersectionObserver(
  (slide) => {
    if (slide[0].isIntersecting) {
      transformUnit = currentSliderIndex;
    }
  },
  { threshold: 1 }
);
// sliderObserver.observe(slides[slides.length - 1]);

function handleSlideBtnClick(e) {
  if (isMoving) return;
  slides[currentSliderIndex].classList.remove('active');

  e.currentTarget.id === 'slider__arrow-prev'
    ? currentSliderIndex--
    : currentSliderIndex++;
  slides[currentSliderIndex].classList.add('active');
  sliderContainer.dispatchEvent(new Event('sliderMove'));
}

// form
const signupForm = document.querySelector('.signup__form');
signupForm.addEventListener('submit', handleFormSubmit);

// load animation
window.addEventListener('load', loadAnim);

// scrolling
gsap.registerPlugin(ScrollTrigger);
scrollAnim();
