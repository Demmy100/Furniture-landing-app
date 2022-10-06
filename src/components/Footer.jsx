import React from "react";
import Logo from "../img/logo.svg";
import {
  IoLogoYoutube,
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoInstagram,
} from "react-icons/io";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Footer = () => {
  useEffect(() => {
    AOS.init({
      offset: 400,
      duration: 1000,
    });
  }, [])
  return (
    <div className="w-[100%] 2xl:px-32 px-8 py-16 bg-[#23262f]"  data-aos="fade-up">
      <div className="flex flex-col">
        <div className="flex justify-between mb-4 sm:flex-row flex-col">
          <img src={Logo} alt="" className="w-[150px]"/>
          <div className="flex gap-4 sm:mt-0 mt-4">
            <span className="w-[35px] h-[35px] rounded-[50%] bg-[#6d5dd3] p-2 flex items-center justify-center cursor-pointer">
              <IoLogoInstagram />
            </span>
            <span className="w-[35px] h-[35px] rounded-[50%] bg-[#6d5dd3] p-2 flex items-center justify-center cursor-pointer">
              <IoLogoFacebook />
            </span>
            <span className="w-[35px] h-[35px] rounded-[50%] bg-[#6d5dd3] p-2 flex items-center justify-center cursor-pointer">
              {" "}
              <IoLogoYoutube />
            </span>
            <span className="w-[35px] h-[35px] rounded-[50%] bg-[#6d5dd3] p-2 flex items-center justify-center cursor-pointer">
              <IoLogoGithub />
            </span>
          </div>
        </div>
        <hr className="sm:flex hidden"/>
        <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-col-3 sm:grid-cols-2 items-start mt-10">
          <div className="flex flex-col gap-2">
            <h3 className="text-[20px] text-[#eaeef3] font-normal">
              Our Products
            </h3>
            <li className="list-none text-[#eaeef3]">The Support Suite</li>
            <li className="list-none text-[#eaeef3]">The Sale Suite</li>
            <li className="list-none text-[#eaeef3]">Support</li>
            <li className="list-none text-[#eaeef3]">Guide</li>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-[20px] text-[#eaeef3] font-normal">
              Top Features
            </h3>
            <li className="list-none text-[#eaeef3]">The Support Suite</li>
            <li className="list-none text-[#eaeef3]">The Sale Suite</li>
            <li className="list-none text-[#eaeef3]">Support</li>
            <li className="list-none text-[#eaeef3]">Guide</li>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-[20px] text-[#eaeef3] font-normal">Resoures</h3>
            <li className="list-none text-[#eaeef3]">Product Support</li>
            <li className="list-none text-[#eaeef3]">Request Demo</li>
            <li className="list-none text-[#eaeef3]">Library</li>
            <li className="list-none text-[#eaeef3]">PeoplePower Blog</li>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-[20px] text-[#eaeef3] font-normal">Company</h3>
            <li className="list-none text-[#eaeef3]">About Us</li>
            <li className="list-none text-[#eaeef3]">Press</li>
            <li className="list-none text-[#eaeef3]">Investors</li>
            <li className="list-none text-[#eaeef3]">Events</li>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-[20px] text-[#eaeef3] font-normal">
              Favourite Things
            </h3>
            <li className="list-none text-[#eaeef3]">For Enterprise</li>
            <li className="list-none text-[#eaeef3]">For Startups</li>
            <li className="list-none text-[#eaeef3]">For Benchmark</li>
            <li className="list-none text-[#eaeef3]">For Small Business</li>
          </div>
        </div>
      </div>
      <p className="text-center text-[#eaeef3] mt-6">
        &copy; FurniShop 2022 - All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
