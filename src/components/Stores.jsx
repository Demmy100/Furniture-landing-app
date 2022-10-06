import React from "react";
import { BsArrowRight } from "react-icons/bs";
import StoresSlider from "./StoresSlider";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Stores = () => {
  useEffect(() => {
    AOS.init({
      offset: 400,
      duration: 1000,
    });
  }, [])
  return (
    <div className="w-[100%] 2xl:px-32 px-8 py-10" data-aos="fade-up">
      <div className="flex xl:flex-row flex-col gap-10">
        <div className="flex flex-col gap-8 items-start justify-center flex-1">
          <div className="flex md:flex-col flex-row md:items-start items-center md:gap-8 gap-16">
            <h1 className="sm:text-[40px] text-2xl sm:leading-10 leading-7 text-[#23262f] font-bold">
              New In <br className="sm:flex hidden"/> Store Now
            </h1>
            <p className="text-[#23262f] font-normal text-[18px]">
              Get the lastest items immediately <br className='sm:flex hidden'/> with promo prices
            </p>
          </div>
          <div className="md:flex hidden items-center gap-1">
            <button className="underline">Check</button>
            <BsArrowRight />
          </div>
        </div>
        <div className="flex-1">
          <StoresSlider />
        </div>
      </div>
    </div>
  );
};

export default Stores;
