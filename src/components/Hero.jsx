import { motion } from 'framer-motion';

function Hero() {
  return (
    <section className='w-full relative gap-6 flex flex-col py-14 px-6 items-center justify-center'>
      <motion.img
        src='illustration-intro.png'
        className='hero-intro'
        alt='intro-illustration'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      />
      <motion.div
        className='flex flex-col w-full items-center justify-center gap-5 bgMobile md:bgDesktop bg-cover bg-center bg-no-repeat'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
        }}
      >
        <motion.h1
          className='hero-text text-White mt-20 md:mt-0 w-full md:max-w-[500px] text-center font-bold text-2xl tracking-wider'
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: 'easeOut' } },
          }}
        >
          All your files in one secure location, accessible anywhere.
        </motion.h1>

        <motion.p
          className='text-White hero-para w-full text-center text-sm md:max-w-[410px] max-w-[300px]'
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: 'easeOut' } },
          }}
        >
          Fylo stores all your most important files in one secure location. Access them wherever you
          need, share and collaborate with friends, family, and co-workers.
        </motion.p>

        <motion.a
          href='#'
          className='bg-cyan call-to-action hover:opacity-90 text-White font-semibold py-3 text-center w-48 rounded-3xl'
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 1.2, ease: 'easeOut', delay: 0.2 },
            },
          }}
        >
          Get Started
        </motion.a>
      </motion.div>
    </section>
  );
}

export default Hero;
