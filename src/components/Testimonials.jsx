import React, { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { testimonials } from "../constants";
import testiBg from "../img/testimonial.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Testimonials = () => {
  useEffect(() => {
    AOS.init({
      offset: 400,
      duration: 1000,
    });
  }, [])
  const [index, setIndex] = useState(0);
  const { img, title, subheading, content } = testimonials[index];

  const handleNext = () => {
    setIndex((prev) => prev + 1);

    if(index >= testimonials.length - 1) {
        setIndex(0);
    }
  }

  const handlePrev = () => {
    setIndex((prev) => prev - 1);

    if(index <= 0) {
        setIndex(testimonials.length - 1);
    }
  }
  return (
    <div className="w-[100%] 2xl:px-32 px-8 py-10" data-aos="fade-up">
      <div className="flex gap-10 xl:flex-row flex-col">
        <div className="flex flex-1 flex-col items-start justify-center gap-6">
          <h1 className='sm:text-[40px] text-2xl sm:leading-10 leading-7 text-[#23262f] font-bold'>What They Are Saying About Us</h1>
          <div className="flex gap-4 items-center">
            <img src={img} alt="" />
            <div>
              <h3 className='text-[#23262f] font-bold text-[20px]'>{title}</h3>
              <small className="text-[#d9d9d9]">{subheading}</small>
            </div>
          </div>
          <div>
            <p className='text-[#23262f] font-normal text-[18px] max-w-[450px]'>{content}</p>
          </div>
          <div className="flex gap-4 sm:mx-0 mx-auto">
            <button className="w-[50px] h-[50px] rounded-[50%] flex items-center justify-center bg-white shadow-lg" onClick={handlePrev}>
              <AiOutlineArrowLeft className="hover:fill-[#d9d9d9]"/>
            </button>
            <button className="w-[50px] h-[50px] rounded-[50%] flex items-center justify-center bg-white shadow-lg" onClick={handleNext}>
              <AiOutlineArrowRight className="hover:fill-[#d9d9d9]"/>
            </button>
          </div>
        </div>
        <div>
          <img src={testiBg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
