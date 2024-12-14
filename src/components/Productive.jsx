import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Productive() {
  useEffect(() => {
    // Animation for image
    gsap.fromTo(
      'img',
      { opacity: 0 },
      {
        opacity: 1,
        delay: 1,
        scrollTrigger: {
          trigger: 'img',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      },
    );

    // Animation for the title
    gsap.fromTo(
      'h1',
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        delay: 1,
        scrollTrigger: {
          trigger: 'h1',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      },
    );

    // Animation for p1 (first paragraph)
    gsap.fromTo(
      '.p1',
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        delay: 2,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.p1',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      },
    );

    // Animation for p2 (second paragraph)
    gsap.fromTo(
      '.p2',
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        delay: 2.5,
        scrollTrigger: {
          trigger: '.p2',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      },
    );

    // Animation for the call to action
    gsap.fromTo(
      '.items-center',
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        delay: 3,
        ease: 'bounce',
        scrollTrigger: {
          trigger: '.items-center',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      },
    );
  }, []);

  return (
    <section className='w-full'>
      <div className='w-[87%] mx-auto mt-10 flex gap-12 items-center flex-wrap'>
        <div className='w-full md:w-[45%]'>
          <img
            src='illustration-stay-productive.png'
            alt='Illustration of staying productive'
            className='opacity-0'
          />
        </div>
        <div className='w-full md:w-[45%] flex flex-col items-start gap-5'>
          <h1 className='text-White text-xl opacity-0 translate-x-[-100px] font-semibold'>
            Stay productive, wherever you are
          </h1>
          <p className='text-White p1 text-sm opacity-0 translate-x-[100px]'>
            Never let location be an issue when accessing your files. Fylo has you covered for all
            of your file storage needs.
          </p>
          <p className='text-White p2 text-sm opacity-0 translate-x-[-100px] '>
            Securely share files and folders with friends, family, and colleagues for live
            collaboration. No email attachments required.
          </p>
          <div className='flex transition-all hover:border-White hover:text-White items-center gap-2 text-cyan mb-2 border-b font-semibold cursor-pointer border-cyan opacity-0 translate-y-[15px]'>
            <p>See how Fylo works</p>
            <span>
              <img src='icon-arrow.svg' alt='Arrow icon' />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Productive;
