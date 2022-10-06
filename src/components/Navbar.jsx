import React, { useState } from 'react'
import Logo from '../img/logo.svg'
import { navMenu } from '../constants';
import Close from '../img/icon-close.svg'
import Menu from '../img/icon-hamburger.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    AOS.init({
      offset: 400,
      duration: 1000,
    });
  }, [])
  return (
    <nav className='flex justify-between items-center relative' data-aos="fade-down">
        <img src={Logo} alt="" className='w-[120px]'/>
        <ul className='list-none md:flex hidden gap-12'>
            {navMenu.map((menu) => {
             return   <li key={menu.id} className='text-[#d9d9d9] text-[20px] font-semibold cursor-pointer hover:border-b-4'>{menu.name}</li>
            })}
        </ul>

        <div className='md:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? Close : Menu} alt="menu" onClick={() => setToggle((prev) => !prev)} className='w-[20px] h-[20px] object-cover cursor-pointer'/>
          <div className={`${toggle ? 'flex' : 'hidden'} absolute mt-3 bg-[#ffffff] z-[1] top-10 right-0 p-4 rounded-md max-w-[100%] min-h-[100%]`}>
          <ul className='list-none flex-1 gap-4 justify-start flex-col items-start flex'>
            {navMenu.map((menu) => {
             return   <li key={menu.id} className='text-[#d9d9d9] text-[20px] font-semibold cursor-pointer hover:border-b-4'>{menu.name}</li>
            })}
        </ul>
          </div>
        </div>
    </nav>
  )
}

export default Navbar
