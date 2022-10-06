import React from 'react'
import featureImage from '../img/features-2.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const FeatureTwo = () => {
  useEffect(() => {
    AOS.init({
      offset: 400,
      duration: 1000,
    });
  }, [])
  return (
    <div className='w-[100%] 2xl:px-32 px-8 py-10' data-aos="fade-up">
      <div className='flex xl:flex-row flex-col'>
        <div className='flex flex-1 flex-col gap-4 items-start justify-center'>
            <h1  className='md:text-[40px] text-2xl md:leading-10 leading-7 text-[#23262f] font-bold'>The Best Furniture <br/> Manufacturer Of Your Choice</h1>
            <p className='text-[#23262f] font-normal text-[18px] max-w-[470px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, fuga iusto modi eveniet recusandae accusantium architecto maiores doloremque mollitia adipisci a illo blanditiis reiciendis possimus commodi voluptatem ipsum hic aut.</p>
        </div>
        <div className='flex-1 sm:mt-0 mt-6'>
            <img src={featureImage} alt="" />
        </div>
      </div>
    </div>
  )
}

export default FeatureTwo
