import React from 'react'
import { Link } from 'react-router-dom';

const SocialCons = ({Icons}) => {
  return (
    <div className='text-white'>
        {
            Icons.map((icon) => (
              <Link to={icon.link}>
                <span key={icon.name}
                    className='p-2 cursor-pointer inline-flex items-center 
                    rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 
                    hover:bg-orange-400 duration-300'>            
                    <ion-icon name={icon.name}></ion-icon>                 
                </span>
              </Link>
            ))
        }
    </div>
  )
}

export default SocialCons;