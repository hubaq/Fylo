import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { heroLists } from '../constants';

gsap.registerPlugin(ScrollTrigger);

function Features() {
  useEffect(() => {
    // Animation for feature-title
    gsap.fromTo(
      '.feature-title',
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        stagger: 0.3,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '.feature-title',
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
      },
    );

    // Animation for image
    gsap.fromTo(
      '.image',
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        ease: 'bounce.out',
        scrollTrigger: {
          trigger: '.image',
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
      },
    );

    // Animation for details text
    gsap.fromTo(
      '#detail',
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        stagger: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#detail',
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
      },
    );
  }, []);

  return (
    <section id='features' className='w-full'>
      <div className='mx-auto mt-20 w-[70%] flex flex-wrap justify-between items-center'>
        {heroLists.map((hero, i) => (
          <div className='flex flex-col mb-[6rem] items-center gap-5 w-full md:w-[45%]' key={i}>
            <div className='h-24 image translate-y-[20px] opacity-0'>
              <img src={hero.image} alt='' className='w-full h-full' />
            </div>
            <h1 className='text-White text-xl font-semibold feature-title translate-x-[-100px] opacity-0'>
              {hero.title}
            </h1>
            <p
              id='detail'
              className='text-White opacity-0 text-center text-sm sm:max-w-[370px]  max-w-[300px] translate-x-[100px]'
            >
              {hero.details}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
