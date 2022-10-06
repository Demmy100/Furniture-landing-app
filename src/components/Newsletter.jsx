import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Newsletter = () => {
  useEffect(() => {
    AOS.init({
      offset: 400,
      duration: 1000,
    });
  }, [])
  return (
    <div className='w-[100%] h-[490px] px-32 py-10 bg-[url("./img/newsletter.png")] bg-no-repeat bg-cover bg-center relative' data-aos="fade-up">
      <div className='absolute sm:top-[150px] top-[100px] sm:right-[30%] right-[50px]'>
        <h1 className='sm:text-[40px] text-2xl sm:leading-10 leading-7 text-white font-bold'>Get more discount<br/> off your order</h1>
        <p className='text-[#d9d9d9] text-[18px] font-normal my-4'>Join our mailing list</p>
        <form className='flex gap-4'>
            <input type="email" placeholder='Your email address' className='border-none outline-none sm:w-[100%] w-[10rem] indent-2 px-4 py-2 rounded-md'/>
            <button className='sm:w-[10rem] w-[7rem] px-4 py-2 bg-[#23262f] text-white rounded-md'>Shop Now</button>
        </form>
      </div>
    </div>
  )
}

export default Newsletter
