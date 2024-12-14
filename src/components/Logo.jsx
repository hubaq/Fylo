import { logo } from '../constants';

function Logo() {
  return (
    <div>
      <img className='w-28 cursor-pointer' src={logo} alt='logo' />
    </div>
  );
}

export default Logo;
