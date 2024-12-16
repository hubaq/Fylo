import { useState } from 'react';
import { motion } from 'framer-motion';

function EarlyAccess() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  function getStarted(e) {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      setError(false);
      console.log(email);
      setEmail('');
    } else {
      setError(true);
      setErrorMessage('Please enter a valid email address');
    }
  }

  function handleInputChange(e) {
    setEmail(e.target.value);

    if (error) {
      setError(false);
      setErrorMessage('');
    }
  }

  // Framer Motion Variants
  const containerVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: 'easeOut' },
    },
  };

  const inputVariant = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
  };

  const buttonVariant = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut', delay: 0.2 } },
  };

  return (
    <motion.div
      className='bg-introDark w-[90%] md:absolute top-[21rem] rounded-md md:w-[60%] mx-auto flex flex-col gap-8 items-center px-4 py-4 md:py-12'
      variants={containerVariant}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.5 }}
    >
      <h1 className='text-White text-xl'>Get early access today</h1>
      <p className='text-White text-sm text-center max-w-[280px] md:max-w-[620px]'>
        It only takes a minute to sign up, and our free starter tier is extremely generous. If you
        have any questions, our support team would be happy to help you.
      </p>
      <div className='w-full flex items-start gap-8 md:gap-4 justify-center flex-col md:flex-row'>
        <motion.div
          className='flex flex-col items-start gap-1 w-full md:w-auto relative'
          variants={inputVariant}
        >
          <input
            type='email'
            className='md:w-96 w-full py-3 px-4 rounded-3xl outline-none border-0'
            placeholder='email@example.com'
            value={email}
            onChange={e => handleInputChange(e)}
          />
          {error && (
            <p className='text-sm text-lightRed font-semibold absolute top-[110%] left-6'>
              {errorMessage}
            </p>
          )}
        </motion.div>
        <motion.a
          href='#'
          className='bg-cyan hover:opacity-90 text-White font-semibold py-3 text-center md:w-48 w-full rounded-3xl px-7'
          onClick={e => getStarted(e)}
          variants={buttonVariant}
        >
          Get Started For Free
        </motion.a>
      </div>
    </motion.div>
  );
}

export default EarlyAccess;
