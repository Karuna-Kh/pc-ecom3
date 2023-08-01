import ItemContainer from './ItemContainer';
import SocialCons from './SocialCons';
import { Icons } from './Menus';

const Footer = () => {
  return (
    <footer className='bg-gray-500 text-white mt-4'>
      <div className='md:flex md:justify-between md:items-center sm:px-12 px px-4 bg-[#ffffff19]
      py-7'>
        <h1 className='lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
        md:w-2/5'
        >
          <span className='text-orange-400'>Free </span>
          until you're ready to launch
        </h1>
        <div>
          <input type='text' placeholder='Enter Your Phone Number' className='text-gray-800
          sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none'
          />
          <button className='bg-orange-400 hover:bg-orange-500 duration-300 px-5 py-2.5 font-[Poppins]
            rounded-md text-white md:w-auto w-full'
            >
              Request Code
          </button>
        </div>
      </div>
      <ItemContainer />
      
      <div
      className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center
      pt-2 text-gray-400 text-sm pb-8'
      >
        <span>© 2023, NTC Computer. All rights reserved.</span>
        <span>Term . Privacy Policy</span>
        <SocialCons Icons={Icons} />

      </div>
    </footer>
  )
}

export default Footer   
