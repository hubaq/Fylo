import { contacts, footerLinks, socialMedia, footer } from '../constants';
import Logo from './Logo';
function Footer() {
  return (
    <footer className='bg-footerDark w-full md:pt-36 md:pb-10 md:px-16 pt-10 pb-10 px-4'>
      <div className='w-[90%] mx-auto'>
        <Logo />
        <div className='flex items-start flex-col gap-8 md:flex-row w-full justify-between mt-8'>
          <div className='flex flex-col md:flex-row items-start gap-2'>
            <div>
              {' '}
              <img src='icon-location.svg' alt='' />
            </div>
            <p className='text-White text-sm md:translate-y-[-5px] md:max-w-[300px]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <div className='flex flex-col gap-4'>
            {contacts.map((contact, i) => (
              <div className='flex items-center gap-4' key={i}>
                <img src={contact.icon} alt='' />
                <p className='text-White mt-1 translate-y-[-5px]'>{contact.contact}</p>
              </div>
            ))}
          </div>
          <nav>
            {footerLinks.map((link, i) => (
              <div className='flex flex-col  h-8' key={i}>
                <div className='text-White hover:text-cyan cursor-pointer transition-all'>
                  {link}
                </div>
              </div>
            ))}
          </nav>
          <nav>
            {footer.map((link, i) => (
              <div className='flex flex-col h-9 ' key={i}>
                <div className='text-White hover:text-cyan transition-all cursor-pointer'>
                  {link}
                </div>
              </div>
            ))}
          </nav>
          <div className='flex items-center self-center md:mt-0 md:self-auto mt-12 md:items-start gap-6 '>
            {socialMedia.map((social, i) => (
              <img
                className='w-8 p-1 cursor-pointer border border-White rounded-full hover:border-cyan hover:fill-cyan transition-all'
                key={i}
                src={social}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
