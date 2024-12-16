import { useEffect } from 'react';
import { motion } from 'framer-motion';

function Productive() {
  useEffect(() => {
    // Add any effect logic if necessary
  }, []);

  // Animation variants
  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: 'easeOut' } },
  };

  return (
    <section className='w-full'>
      <motion.div
        className='w-[87%] mx-auto mt-10 flex gap-12 items-center flex-wrap'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
        }}
      >
        <motion.div className='w-full md:w-[45%]' variants={fadeInVariant}>
          <img
            src='illustration-stay-productive.png'
            alt='Illustration of staying productive'
            className='w-full h-auto'
          />
        </motion.div>
        <motion.div
          className='w-full md:w-[45%] flex flex-col items-start gap-5'
          variants={fadeInVariant}
        >
          <motion.h1 className='text-White text-xl font-semibold' variants={fadeInVariant}>
            Stay productive, wherever you are
          </motion.h1>
          <motion.p className='text-White text-sm' variants={fadeInVariant}>
            Never let location be an issue when accessing your files. Fylo has you covered for all
            of your file storage needs.
          </motion.p>
          <motion.p className='text-White text-sm' variants={fadeInVariant}>
            Securely share files and folders with friends, family, and colleagues for live
            collaboration. No email attachments required.
          </motion.p>
          <motion.div
            className='flex transition-all hover:border-White hover:text-White items-center gap-2 text-cyan mb-2 border-b font-semibold cursor-pointer border-cyan'
            variants={fadeInVariant}
          >
            <p>See how Fylo works</p>
            <span>
              <img src='icon-arrow.svg' alt='Arrow icon' />
            </span>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Productive;
