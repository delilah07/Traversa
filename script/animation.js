//now animate each character into place from 100px above, fading in:
export function loadAnim() {
  const tl = gsap.timeline({ default: { duration: 1 } });
  tl.set('#intro', { visibility: 'visible' })
    .from('body', { autoAlpha: 0 })
    .from(
      'header',
      {
        y: -200,
      },
      '+=0.5'
    )
    .from(
      'header img',
      {
        rotate: -180,
        duration: 1.5,
      },
      '-=0.5'
    )
    .from('.intro__title span', {
      y: 100,
      autoAlpha: 0,
      stagger: 0.5,
    })
    .to('.footer__logo img', { opacity: 0 }, '-=2');
}

export const scrollAnim = () => {
  let mm = gsap.matchMedia(),
    breakPoint = 768;

  mm.add(
    {
      // set up any number of arbitrarily-named conditions. The function below will be called when ANY of them match.
      isDesktop: `(min-width: ${breakPoint + 1}px)`,
      isMobile: `(max-width: ${breakPoint}px)`,
    },
    (context) => {
      // context.conditions has a boolean property for each condition defined above indicating if it's matched or not.
      let { isDesktop, isMobile } = context.conditions;
      gsap.to('.intro__picture', {
        scrollTrigger: {
          scrub: 1,
        },
        y: 500,
        ease: 'none',
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
          delay: 0.1,
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
          delay: 0.5,
        });
      });
      document.querySelectorAll('.section__text').forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: '+=150 bottom',
          },
          opacity: 0,
          delay: isMobile ? 1 : 0.5,
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
        delay: 0.5,
        transformOrigin: 'left',
      });
      gsap.from('.slider__arrow', {
        scrollTrigger: {
          trigger: '.places__slide',
          start: '+=100 bottom',
        },
        scale: 0,
        stagger: 0.5,
        delay: isMobile ? 1 : 2,
      });
      gsap.from('.worldover__picture', {
        scrollTrigger: {
          trigger: '.worldover__picture',
          start: '+=100 bottom',
        },
        x: isMobile ? -500 : -1500,
        delay: isMobile ? 0 : 1,
        duration: isMobile ? 1 : 2,
        delay: 0.5,
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
        delay: 0.5,
      });
      gsap.from('.signup__btn', {
        scrollTrigger: {
          trigger: '.signup__form',
          start: '+=100 bottom',
        },
        opacity: 0,
        delay: 1,
      });
      gsap.from('.signup__btn img', {
        scrollTrigger: {
          trigger: '.signup__form',
          start: '+=100 bottom',
        },
        opacity: 0,
        x: -100,
        delay: 1.2,
        duration: 1.5,
      });
      gsap.from('.signup__btn span', {
        scrollTrigger: {
          trigger: '.signup__form',
          start: '+=100 bottom',
        },
        opacity: 0,
        x: -100,
        delay: 1.2,
        duration: 1.5,
      });

      gsap.from('footer', {
        scrollTrigger: {
          trigger: '.footer__nav',
          start: '+=100 bottom',
        },

        scaleX: 0,
        transformOrigin: 'left',
        duration: 0.5,
      });

      gsap.to('.footer__logo img', {
        scrollTrigger: {
          trigger: '.footer__nav',
          start: '+=100 bottom',
        },
        keyframes: [{ opacity: 1 }, { rotate: 180 }],
        duration: 1.5,
        delay: 0.5,
      });
      gsap.from('.footer__logo span', {
        scrollTrigger: {
          trigger: '.footer__nav',
          start: '+=100 bottom',
        },
        opacity: 0,
        delay: 1,
      });
      gsap.from('.footer__logo-text', {
        scrollTrigger: {
          trigger: '.footer__nav',
          start: '+=100 bottom',
        },
        opacity: 0,
        delay: 1,
      });
      if (!isMobile) {
        gsap.from('.footer__column:not(:first-child)', {
          scrollTrigger: {
            trigger: '.footer__nav',
            start: '+=100 bottom',
          },
          opacity: 0,
          delay: 1,
          stagger: 0.5,
        });
      } else {
        document
          .querySelectorAll('.footer__column:not(:first-child)')
          .forEach((el) => {
            gsap.from(el, {
              scrollTrigger: {
                trigger: el,
                start: '+=100 bottom',
              },
              opacity: 0,
              delay: 0.5,
            });
          });
      }
    }
  );
};
