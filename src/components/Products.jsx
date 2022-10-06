import React from 'react'
import ProductImage from './ProductImage'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Products = () => {
  useEffect(() => {
    AOS.init({
      offset: 400,
      duration: 1000,
    });
  }, [])
  return (
    <div className='w-[100%] 2xl:px-32 px-8 py-10' data-aos="fade-up">
        <h1 className='text-center sm:text-[40px] text-2xl sm:leading-10 leading-7 font-bold text-[#23262f] mb-4'>All Product</h1>
        <p className='text-[18px] font-normal text-center text-[#23262f]'>The products we provide for you as our services are selected from the<br className='sm:flex hidden'/> bests products withnumber one quality in the world.</p>
      <div>
        <ProductImage/>
      </div>
    </div>
  )
}

export default Products
