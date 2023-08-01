import React from 'react'

const Search = () => {
  return (  
    <div className='relative pt-0 pb-1
    sm:mx4 sm:max-w-lg sm:px-2 ml-32 mr-2 md:mr-20'>
        <div className=''>
            <form action="" className="relative mx-auto w-max">
                <input type="search" className="text-white peer cursor-pointer relative z-10 h-8 w-10
                   bg-transparent pl-12 outline-none focus:w-full focus:cursor-text
                  focus:border-amber-500 focus:pl-17 focus:pr-5 duration-500  " placeholder='Search products'/>
                <div className='absolute inset-y-0 my-auto h-5 w-10 border-r border-transparent text-white
                text-xl md:text-2xl px-3.5 peer-focus:border-amber-500 peer-focus:text-amber-500'>
                    <ion-icon name="search-outline"></ion-icon>
                </div>       
            </form>
        </div>
    </div>  
  )
}

export default Search