import { useState } from 'react';

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

  return (
    <div className='bg-introDark w-[90%] md:absolute  top-[21rem] rounded-md md:w-[60%] mx-auto flex flex-col gap-8 items-center px-4 py-4 md:py-12'>
      <h1 className='text-White text-xl'>Get early access today</h1>
      <p className='text-White text-sm text-center max-w-[280px] md:max-w-[620px]'>
        It only takes a minute to sign up, and our free starter tier is extremely generous. If you
        have any questions, our support team would be happy to help you.
      </p>
      <div className='w-full flex items-start gap-8 md:gap-4 justify-center flex-col md:flex-row'>
        <div className='flex flex-col items-start gap-1 w-full md:w-auto relative'>
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
        </div>
        <a
          href='#'
          className='bg-cyan hover:opacity-90 text-White font-semibold py-3 text-center md:w-48 w-full rounded-3xl px-7'
          onClick={e => getStarted(e)}
        >
          Get Started For Free
        </a>
      </div>
    </div>
  );
}

export default EarlyAccess;
