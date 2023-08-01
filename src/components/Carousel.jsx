import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';

const Carousel = ({ 
    children: SLIDES, 
    autoSlide = false, 
    autoSlideInterval = 3000 
}) => {
    const [curr, setCurr] = useState(0);
    
    const prev = () => setCurr((curr) => (curr === 0 ? SLIDES.length
        - 1 : curr - 1));

    const next = () => setCurr((curr) => (curr === SLIDES.length
        - 1 ? 0 : curr + 1));

    useEffect(() => {
        if (!autoSlide) return
        const slideInterval = setInterval(next, autoSlideInterval)
        return () => clearInterval(slideInterval)
    }, [])
        
    return (
        <div className='overflow-hidden relative w-full'>
            <div className=' transition-transform   
            ease-out duration-500 w-screen h-[500px] flex ' 
            style={{ transform: `translateX(-${curr * 100}%)` }}
            >
                {SLIDES}
            </div>
            <div className='absolute inset-0 flex items-center justify-between text-gray-500 p-4'>
                <button onClick={prev} className='hover:text-gray-700
                duration-300'>
                    <ChevronLeft size={60} />
                </button>
                <button onClick={next} className='hover:text-gray-700
                duration-300'>
                    <ChevronRight size={60} />
                </button>
            </div>

            <div className='absolute bottom-4 right-0 left-0'>
                <div className='flex items-center justify-center gaps-2'>
                    {
                        SLIDES.map((_, i) => (
                            <div 
                                className={`
                                transition-all w-3 h-3 bg-gray-400 rounded-full mx-1 
                                ${curr === i ? 'p-2': 'bg-opacity-50'
                            }`} 
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Carousel 