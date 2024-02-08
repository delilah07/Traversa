//now animate each character into place from 100px above, fading in:
export function loadAnim() {
  const tl = gsap.timeline({ default: { duration: 1 } });
  tl.to('body', { opacity: 1 })
    .from(
      '.intro__picture',
      {
        opacity: 0,
      },
      0.5
    )
    .from(
      'header',
      {
        y: -200,
      },
      '+=1'
    )
    .from(
      'header img',
      {
        rotate: -180,
        duration: 1.5,
      },
      '-=0.5'
    )
    .from(
      '.intro__title span',
      {
        y: 100,
        opacity: 0,
        stagger: 0.5,
      },
      '+=1'
    )
    .to('.footer__logo img', { opacity: 0 }, '-2');
}

export const scrollAnim = () => {
  gsap.to('.intro__picture', {
    scrollTrigger: {
      scrub: 1,
    },
    y: 500,
    scale: 1.4,
    opacity: 1,
  });
  gsap.from('.intro__btn', {
    scrollTrigger: {
      trigger: '.intro__btn',
      start: '+=100 bottom',
    },
    scale: 0,
  });

  document.querySelectorAll('.section__title').forEach((el) => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: '+=100 bottom',
      },
      y: 100,
      opacity: 0,
    });
  });
  document.querySelectorAll('.section__suptitle').forEach((el) => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: '+=100 bottom',
      },
      y: -50,
      opacity: 0,
    });
  });
  document.querySelectorAll('.section__text').forEach((el) => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: '+=150 bottom',
      },
      opacity: 0,
      delay: 0.5,
    });
  });
  document.querySelectorAll('.with-gradient').forEach((el) => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: '+=100 bottom',
      },
      scaleY: 0,
      transformOrigin: 'top',
    });
  });
  gsap.from('.places__slide', {
    scrollTrigger: {
      trigger: '.places__slide',
      start: '+=100 bottom',
    },
    scaleX: 0,
    stagger: 0.5,
  });
  gsap.from('.slider__arrow', {
    scrollTrigger: {
      trigger: '.places__slide',
      start: '+=100 bottom',
    },
    scale: 0,
    stagger: 0.5,
    delay: 2,
  });
  gsap.from('.worldover__picture', {
    scrollTrigger: {
      trigger: '.worldover__picture',
      start: '+=100 bottom',
    },
    x: -1500,
    delay: 1,
    duration: 2,
  });
  gsap.from('.number__column', {
    scrollTrigger: {
      trigger: '.number__column',
      start: '+=200 bottom',
    },
    opacity: 0,
    stagger: 0.5,
  });
  gsap.from('.number__num span', {
    scrollTrigger: {
      trigger: '.number__column',
      start: '+=200 bottom',
    },
    opacity: 0,
    stagger: 0.5,
    snap: { textContent: 1 },
    textContent: 0,
    ease: Power1.easeIn,
  });
  gsap.from('.signup__form', {
    scrollTrigger: {
      trigger: '.signup__form',
      start: '+=100 bottom',
    },
    scaleY: 0,
    delay: 2,
  });
  gsap.from('.signup__btn', {
    scrollTrigger: {
      trigger: '.signup__form',
      start: '+=100 bottom',
    },
    opacity: 0,
    delay: 2.5,
  });
  gsap.from('.signup__btn img', {
    scrollTrigger: {
      trigger: '.signup__form',
      start: '+=100 bottom',
    },
    opacity: 0,
    x: -100,
    delay: 3,
    duration: 1.5,
  });
  gsap.from('.signup__btn span', {
    scrollTrigger: {
      trigger: '.signup__form',
      start: '+=100 bottom',
    },
    opacity: 0,
    x: -100,
    delay: 3,
    duration: 1.5,
  });

  gsap.from('footer', {
    scrollTrigger: {
      trigger: '.footer__nav',
      start: '+=100 bottom',
    },

    scaleX: 0,
    transformOrigin: 'left',
    duration: 1.5,
  });

  gsap.to('.footer__logo img', {
    scrollTrigger: {
      trigger: '.footer__nav',
      start: '+=100 bottom',
    },
    keyframes: [{ opacity: 1 }, { rotate: 180 }],
    duration: 1.5,
    delay: 1.5,
  });
  gsap.from('.footer__logo span', {
    scrollTrigger: {
      trigger: '.footer__nav',
      start: '+=100 bottom',
    },
    opacity: 0,
    delay: 2,
  });
  gsap.from('.footer__logo-text', {
    scrollTrigger: {
      trigger: '.footer__nav',
      start: '+=100 bottom',
    },
    opacity: 0,
    delay: 2,
  });
  gsap.from('.footer__column:not(:first-child)', {
    scrollTrigger: {
      trigger: '.footer__nav',
      start: '+=100 bottom',
    },
    opacity: 0,
    delay: 2.5,
    stagger: 0.5,
  });
};