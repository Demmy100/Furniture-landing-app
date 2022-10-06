import React from "react";
import { stats } from "../constants";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import './Stats.css'

const Stats = () => {
  useEffect(() => {
    AOS.init({
      offset: 400,
      duration: 1000,
    });
  }, [])
  return (
    <div className="2xl:px-32 px-8 w-[100%]" data-aos="fade-up">
      <div className="bg-[#286f6c] w-[100%] md:h-40 h-[300px] rounded-2xl translate-y-[-50%]" >
        <div className="p-6 grid md:grid-cols-4 grid-cols-2 md:gap-0 gap-6 items-center justify-center w-full stat">
          {stats.map((stat) => {
            return <div key={stat.id} className='flex flex-col items-center border-r last:border-r-0'>
                <h3 className="text-white text-[32px] font-bold">{stat.fig}</h3>
                <p className="text-[#d9d9d9] text-[20px] font-semibold max-w-[110px] text-center">{stat.text}</p>
            </div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Stats;
