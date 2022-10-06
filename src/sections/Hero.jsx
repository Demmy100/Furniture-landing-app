import React from 'react'
import Navbar from '../components/Navbar'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const style = {
    background: `bg-[url('./img/hero-bg.png')] w-full min-h-[100vh] bg-no-repeat bg-cover xl:bg-center bg-right 2xl:px-32 px-8 py-10`,
    cointainer: `flex flex-col items-center justify-center mt-[50px] gap-5`,
    heading: `text-[#ffffff] sm:text-[60px] text-3xl sm:leading-[55px] leading-[28px] font-bold text-center my-2`,
    text: `text-[#d9d9d9] text-[20px] font-semibold text-center mt-2 mb-6`,
    button: `px-10 py-2 text-white hover:text-[#23262f] bg-[#e2e2e2] text-[20px] rounded-md mt-2`,
};

const Hero = () => {
  useEffect(() => {
    AOS.init({
      offset: 400,
      duration: 2000,
    });
  }, [])
  return (
    <div className={style.background}>
      <Navbar/>
      <div className={style.cointainer} data-aos="fade-down">
        <h1 className={style.heading}>Creative Home Simplify Your <br/> Furniture</h1>
        <p className={style.text}>Do i have consent to record this meeting gain location roots and- <br/> branch, review, nor gameplan who is the goto.</p>
        <button className={style.button}>Shop Now</button>
      </div>
    </div>
  )
}

export default Hero
