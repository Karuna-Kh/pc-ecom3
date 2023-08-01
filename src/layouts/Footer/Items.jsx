import React from 'react';

const Items = ({Links, title}) => {
  return (
    <ul>
        <h1 className='mb-1 font-semibold'>{title}</h1>
        {
            Links.map((link) => (
                <li key={link.name}>
                    <a className='text-gray-400 hover:text-orange-400 duration-300
                    text-sm cursor-pointer leading-8' href={link.link}>{link.name}</a>
                </li>
            ))
        }
    </ul>
  )
}

export default Items