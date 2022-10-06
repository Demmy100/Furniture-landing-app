import React from 'react'
import { stores } from '../constants'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';

const StoresSlider = () => {
  return (
    <Swiper
    grabCursor={true}
    breakpoints={{
        320: {
            slidesPerView: 2,
            spaceBetween: 18,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    }}
    className='mySwiper'
    >
        {stores.map((store) => {
            return (
                <SwiperSlide key={store.id} className='max-w-[250px]'>
                    <div className='relative'>
                        <img src={store.img} alt="" />
                        <div className='absolute top-50% bottom-8 sm:left-24 left-[40px] text-white font-bold text-[24px] m-auto'>
                            <p>{store.text}</p>
                        </div>
                    </div>
                </SwiperSlide>
            )
        })}
    </Swiper>
  )
}

export default StoresSlider
