import React from 'react'
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className='bg-gray-300 flex items-center justify-end  
    pt-4 pb-4 text-white navbar px-10 border-b-2 border-white'> 

          <div className='flex text-xl gap-1 md:text-2xl cursor-pointer 
          hover:text-amber-500 duration-300 px-3'
          > 
            <Link to='/contact' className='flex items-center'>
                <ion-icon name="call-outline"></ion-icon>
                097-406-3744
            </Link>
          </div>       
    </div>
  )
}

export default Contact