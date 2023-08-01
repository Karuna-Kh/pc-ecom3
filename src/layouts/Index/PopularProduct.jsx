import React from 'react'
import { POPULARPRODUCTS } from '../../products';

const PopularProduct = () => {
  return (
    <div>

        <div className='bg-gray-300 w-full h-24 relative shadow-md 
      font-[Poppins] font-bold text-3xl text-white px-6 py-7 mt-4 mb-4
      md:h-48 md:py-16 md:text-4xl md:pl-36'>
          <h4>
            Popular Products
          </h4>
      </div>

      <div className='bg-white flex flex-wrap justify-center'> 
        
        {        
          POPULARPRODUCTS.map((pro) => (        
          <div className='flex flex-col w-44 mx-2 my-2 px-2 pb-2 items-center
              rounded-md bg-gray-300 shadow-lg shadow-gray-500
              md:w-80 cursor-pointer hover:bg-gray-400 md:duration-500
              md:mx-4 md:my-4 '
          >
            <div className='relative w-84 h-84 pt-4 pb-2 rounded-t-2xl'>
                  <img src={pro.img} alt='Product images' className='object-contain' />      
            </div>
            
            <div className='flex flex-col text-black font-[Poppins]'>
              <div>
                <h4 className='text-center text-xl font-medium'>
                   {pro.title} 
                </h4>             
                <p className='text-start text-lg font-extralight'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>  
              </div>              
            </div>

          </div> 
          ))
        }
      
      </div>
    </div>
  )
}

export default PopularProduct