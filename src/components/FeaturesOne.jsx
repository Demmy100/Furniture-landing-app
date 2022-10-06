import React from 'react'
import { IoIosCheckmarkCircle } from 'react-icons/io'
import FeatureImage from '../img/features-1.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const FeaturesOne = () => {
  useEffect(() => {
    AOS.init({
      offset: 400,
      duration: 1000,
    });
  }, [])
  return (
    <div className='w-[100%] 2xl:px-32 px-8 md:py-10 py-0 flex xl:flex-row gap-10 flex-col-reverse' data-aos="fade-up">
      <div className='flex-1 sm:mt-0 mt-8'>
        <img src={FeatureImage} alt="" className='rounded-md'/>
      </div>
      <div className='flex flex-1 flex-col gap-6 items-start justify-center sm:mt-6 mt-0'>
        <h1 className='sm:text-[40px] text-2xl sm:leading-10 leading-7 text-[#23262f] font-bold'>We Create Your Home <br/> More Aesthic</h1>
        <p className='text-[#23262f] font-normal text-[18px]'>Furniture power is a software as services for multipurpose <br/> business management system.</p>
        <div className='flex gap-2 items-start'>
            <IoIosCheckmarkCircle style={{fontSize: '1.5rem'}}/>
            <div>
                <h3 className='text-[#23262f] font-bold text-[20px]'>Valuation Services</h3>
                <p className='text-[#23262f] font-normal text-[18px]'>Sometimes future require a short description. This can be detailed <br/> description.</p>
            </div>
        </div>
        <div className='flex gap-2 items-start'>
        <IoIosCheckmarkCircle style={{fontSize: '1.5rem'}}/>
            <div>
                <h3 className='text-[#23262f] font-bold text-[20px]'>Development of Furniture Models</h3>
                <p className='text-[#23262f] font-normal text-[18px]'>Sometimes future require a short description. This can be detailed <br/> description.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturesOne
