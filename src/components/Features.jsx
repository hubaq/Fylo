import { motion } from 'framer-motion';
import { heroLists } from '../constants';

function Features() {
  // Define animation variants for scrolling effects
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id='features' className='w-full'>
      <motion.div
        className='mx-auto mt-20 w-[70%] flex flex-wrap justify-between items-center'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {heroLists.map((hero, i) => (
          <motion.div
            className='flex flex-col mb-[6rem] items-center gap-5 w-full md:w-[45%]'
            key={i}
            variants={itemVariants}
          >
            <div className='h-24'>
              <img src={hero.image} alt='' className='w-full h-full' />
            </div>

            <h1 className='text-White text-xl font-semibold'>{hero.title}</h1>

            <p className='text-White text-center text-sm sm:max-w-[370px] max-w-[300px]'>
              {hero.details}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Features;
