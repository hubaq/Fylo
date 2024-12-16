/* eslint-disable react/prop-types */
import { navLists, socialMedia } from '../constants';
import Logo from './Logo';
import { motion, AnimatePresence } from 'framer-motion';

function Sidebar({ openSidebar, setOpenSidebar }) {
  return (
    <AnimatePresence>
      {openSidebar && (
        <motion.aside
          initial={{ x: '-100%' }} // Sidebar starts off-screen to the left
          animate={{ x: 0 }} // Slide in to the visible position
          exit={{ x: '-100%', opacity: 0 }} // Slide out back to the left with fade effect
          transition={{
            x: { type: 'spring', stiffness: 100, damping: 20 }, // Spring animation for smooth entry/exit
            opacity: { duration: 0.5, ease: 'easeInOut' }, // Smooth fade effect
          }}
          className='w-full left-0 inset-0 z-50 fixed top-0 md:hidden py-5 px-5 h-screen bg-footerDark overflow-y-auto'
        >
          <div className='mx-auto h-full w-full flex flex-col gap-4'>
            <div className='flex justify-between'>
              <Logo />
              <div>
                <img
                  src='close.svg'
                  alt='Close Sidebar'
                  width='30px'
                  className='cursor-pointer'
                  onClick={() => setOpenSidebar(false)}
                />
              </div>
            </div>

            <nav className='mt-4 w-full'>
              <ul className='flex flex-col w-full items-center gap-3'>
                {navLists.map((nav, i) => (
                  <li
                    className='text-White text-sm cursor-pointer hover:text-cyan transition-all'
                    key={i}
                  >
                    {nav}
                  </li>
                ))}
              </ul>
            </nav>

            <div className='flex items-center self-center mt-72 gap-6'>
              {socialMedia.map((social, i) => (
                <img
                  className='w-8 max-w-full max-h-full p-1 cursor-pointer border border-White rounded-full hover:border-cyan hover:fill-cyan transition-all'
                  key={i}
                  src={social}
                  alt={`Social Media ${i}`}
                />
              ))}
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}

export default Sidebar;
