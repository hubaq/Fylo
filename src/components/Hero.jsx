import { useEffect } from 'react';
import gsap from 'gsap';

function Hero() {
  useEffect(() => {
    const heroRect = document.querySelector('.hero-rect');
    const heroText = document.querySelector('.hero-text');
    const heroPara = document.querySelector('.hero-para');
    const callToAction = document.querySelector('.call-to-action');

    // Create the IntersectionObserver for heroText
    const heroTextObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // When .hero-text is in view, animate the rect
            gsap.fromTo(
              heroRect,
              { width: '100%' },
              {
                width: '0%',
                duration: 1.5,
                ease: 'power4.out',
              },
            );
          } else {
            gsap.to(heroRect, {
              width: '100%',
              duration: 1.5,
              ease: 'power4.out',
            });
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is in view
      },
    );

    // Create the IntersectionObserver for heroPara
    const heroParaObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Animate the hero-para when it comes into view
            gsap.to(heroPara, {
              opacity: 1,
              y: 0,
              duration: 1.2,
              ease: 'power4.out',
            });
          } else {
            gsap.to(heroPara, {
              opacity: 0,
              y: 20,
              duration: 1.2,
              ease: 'power4.out',
            });
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is in view
      },
    );

    // Create the IntersectionObserver for callToAction
    const callToActionObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Animate the call-to-action when it comes into view
            gsap.to(callToAction, {
              opacity: 1,
              y: 0,
              duration: 1.2,
              delay: 0.2,
              ease: 'power4.out',
            });
          } else {
            gsap.to(callToAction, {
              opacity: 0,
              y: 20,
              duration: 1.2,
              delay: 0.2,
              ease: 'power4.out',
            });
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is in view
      },
    );

    // Start observing the elements
    if (heroText) heroTextObserver.observe(heroText);
    if (heroPara) heroParaObserver.observe(heroPara);
    if (callToAction) callToActionObserver.observe(callToAction);

    // Cleanup the observers when the component is unmounted
    return () => {
      if (heroText) heroTextObserver.unobserve(heroText);
      if (heroPara) heroParaObserver.unobserve(heroPara);
      if (callToAction) callToActionObserver.unobserve(callToAction);
    };
  }, []);

  return (
    <section className='w-screen relative gap-6 flex flex-col py-14 px-6 items-center justify-center'>
      <img src='illustration-intro.png' className='hero-intro' alt='intro-illustration' />
      <div className='flex flex-col w-full items-center justify-center gap-5 bgMobile md:bgDesktop bg-cover bg-center bg-no-repeat'>
        <div className='relative w-full flex justify-center'>
          <h1 className='hero-text text-White mt-20 md:mt-0 w-full md:max-w-[500px] text-center font-bold text-2xl  tracking-wider'>
            All your files in one secure location, accessible anywhere.
            <div className='hero-rect absolute top-0 right-0 bg-cyan h-full z-10'></div>
          </h1>
        </div>

        {/* Paragraph and Call-to-Action Elements */}
        <p className='text-White translate-y-11 opacity-0 hero-para w-full text-center text-sm md:max-w-[410px] max-w-[300px]'>
          Fylo stores all your most important files in one secure location. Access them wherever you
          need, share and collaborate with friends, family, and co-workers.
        </p>

        <a
          href='#'
          className='bg-cyan translate-y-11 call-to-action opacity-0 hover:opacity-90 text-White font-semibold py-3 text-center w-48 rounded-3xl'
        >
          Get Started
        </a>
      </div>
    </section>
  );
}

export default Hero;
