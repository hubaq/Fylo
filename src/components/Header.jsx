import Logo from './Logo';
import { navLists } from '../constants/index';
function Header() {
  return (
    <header className='w-screen flex py-6 px-6 md:py-8 md:px-10 justify-between items-center'>
      <Logo />
      <nav>
        <ul className='flex items-center gap-4'>
          {navLists.map((nav, i) => (
            <li
              className='text-gray-400 duration-100 transition-all cursor-pointer hover:text-White hover:border-b hover:border-White'
              key={i}
            >
              {nav}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
