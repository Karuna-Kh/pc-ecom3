import React from 'react';
import NewProduct from './NewProduct';
import PopularProduct from './PopularProduct';
import HotSaleProduct from './HotSaleProduct';
import Carousel from '../../components/Carousel';
import { SLIDES } from './Slides';

const Index = () => {
  return (
    <div className='w-full'>   
      <main className='Index w-full'>
        <div className='w-full'>
          <Carousel autoSlide={true}>
            {
              SLIDES.map((s) => (
                <span className='relative min-w-[100vw] h-full'>
                  <img src={s} alt=""
                    className='w-full h-full absolute top-0 left-0 object-contain'
                  />
                </span>
              ))
            }
          </Carousel>
        </div>
      </main>

      <NewProduct />
      <PopularProduct />
      <HotSaleProduct />
      {/* <Footer /> */}
      
    </div>
  )
}

export default Index