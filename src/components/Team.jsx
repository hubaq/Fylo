import { quoteLists } from '../constants';
import gsap from 'gsap';
import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import EarlyAccess from './EarlyAccess';

gsap.registerPlugin(ScrollTrigger);

function Team() {
  useEffect(() => {
    // Animation for testimonials
    gsap.fromTo(
      '.testimonial',
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.4,
        ease: 'bounce',
        scrollTrigger: {
          trigger: '.testimonial',
          start: 'top 80%', // Starts the animation when the testimonial is 80% into the viewport
          toggleActions: 'play none none reverse',
        },
      },
    );
  }, []);

  return (
    <section className='w-full relative pt-10 pb-10 md:pb-44 flex flex-col items-center'>
      <img
        src='bg-quotes.png'
        alt='quotes'
        className='absolute top-[73px] w-12 md:w-auto left-12 md:top-[76px] md:left-[4.5rem]'
      />
      <div className='w-[87%] mx-auto my-16 flex gap-8 items-center flex-wrap justify-between'>
        {quoteLists.map((quote, i) => (
          <div
            className='flex w-full md:w-[30%] translate-y-[20px] opacity-0 testimonial gap-3 flex-col bg-testimonialDark px-4 py-6 rounded-md cursor-pointer'
            key={i}
          >
            <p className='text-White text-sm'>{quote.quote}</p>
            <div className='flex items-start gap-2'>
              <div className='w-7'>
                <img src={quote.avatar} className='w-full rounded-full' alt='' />
              </div>
              <div className='flex flex-col justify-center'>
                <p className='text-xs font-bold text-White'>{quote.name}</p>
                <p className='text-xs text-gray-400'>{quote.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <EarlyAccess />
    </section>
  );
}

export default Team;
