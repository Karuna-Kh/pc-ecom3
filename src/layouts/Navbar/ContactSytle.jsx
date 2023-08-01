import React from 'react'
import { Link } from 'react-router-dom';
import { CONTACTLINKS } from '../../products';
import Contact from './Contact';

const ContactStyle = () => {
  return (
    <div className='bg-gray-500 flex items-center justify-start 
    pt-4 pb-6 text-white navbar'>
     
      {
        // Logo Contacts
        CONTACTLINKS.map((cont) => (
          <div className='flex text-xl md:text-2xl cursor-pointer items-center 
          hover:text-amber-500 duration-500 px-2'
          > 
            <Link to={cont.link} className='flex items-center'> {cont.logo} </Link>
          </div>
        ))
      }
        
       {/* <Search />    */}
      <Contact />
    </div>
  )
}

export default ContactStyle