/* eslint-disable react/prop-types */
import Logo from './Logo';
import { navLists } from '../constants/index';
function Header({ setOpenSidebar }) {
  function handleShowSidebar() {
    setOpenSidebar(true);
  }
  return (
    <header className='w-full  flex py-6 px-6 md:py-8 md:px-10 justify-between items-center'>
      <Logo />
      <nav className='hidden md:block'>
        <ul className='flex items-center gap-4'>
          {navLists.map((nav, i) => (
            <li
              className='text-gray-400  duration-100 transition-all cursor-pointer hover:text-White hover:border-b hover:border-White'
              key={i}
            >
              {nav}
            </li>
          ))}
        </ul>
      </nav>
      <div className='block md:hidden'>
        <img onClick={handleShowSidebar} src='menu.svg' alt='' className='cursor-pointer' />
      </div>
    </header>
  );
}

export default Header;
