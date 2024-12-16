import { motion } from 'framer-motion';
import { quoteLists } from '../constants';
import EarlyAccess from './EarlyAccess';

function Team() {
  const testimonialVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { ease: 'easeOut', duration: 1, staggerChildren: 0.4 },
    },
  };

  const quoteVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <section className='w-full relative pt-10 pb-10 md:pb-44 flex flex-col items-center'>
      <img
        src='bg-quotes.png'
        alt='quotes'
        className='absolute top-[73px] w-12 md:w-auto left-12 md:top-[76px] md:left-[4.5rem]'
      />
      <motion.div
        className='w-[87%] mx-auto my-16 flex gap-8 items-center flex-wrap justify-between'
        variants={testimonialVariant}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.5 }}
      >
        {quoteLists.map((quote, i) => (
          <motion.div
            className='flex z-50 w-full md:w-[30%] translate-y-[20px] opacity-0 testimonial gap-3 flex-col bg-testimonialDark px-4 py-6 rounded-md cursor-pointer'
            key={i}
            variants={quoteVariant}
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
          </motion.div>
        ))}
      </motion.div>
      <EarlyAccess />
    </section>
  );
}

export default Team;
