import { loadAnim, scrollAnim } from './animation.js';
import { handleFormSubmit } from './form.js';
import { handleSlideBtnClick } from './slider.js';

// slider
const sliderArrows = document.querySelectorAll('[data-slideBtn]');
sliderArrows.forEach((btn) =>
  btn.addEventListener('click', handleSlideBtnClick)
);

// form
const signupForm = document.querySelector('.signup__form');
signupForm.addEventListener('submit', handleFormSubmit);

// load animation
window.addEventListener('load', loadAnim);

// scrolling
gsap.registerPlugin(ScrollTrigger);
scrollAnim();
