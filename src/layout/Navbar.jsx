import React, { useState } from 'react'
import logo from '../assets/images/logo_ys.png'

import { IoIosArrowDown } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";

import { IoMenu } from "react-icons/io5";

import data from '../data/hero.json'

const Navbar = () => {

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
    document.body.style.overflow = open ? 'auto' : 'hidden';
  }

  return (
    <nav className='w-full px-[4vw] absolute z-50 top-0 py-5 flex justify-between items-center gap-5'>
        <a href="/"><img src={logo} alt="YS Logo" className='lg:w-44 w-32 opacity-100 hover:opacity-70 transition-all' /></a>
        <div className="lg:flex justify-end items-center gap-10 relative hidden">
            <a href="/#teachers-training" className='text-sm font-bold text-white hover:text-primary transition-all leading-none pb-0 -mb-1'>TEACHER TRAININGS</a>
            <a href="/discovery-call" className='text-sm font-bold text-white hover:text-primary transition-all leading-none pb-0 -mb-1'>DISCOVERY CALL</a>
            <a href="/#graduatedHome" className='text-sm font-bold text-white hover:text-primary transition-all leading-none pb-0 -mb-1'>TESTIMONIALS</a>
            <a href="https://yogasoulmcr.co.uk/" target='_blank' className='text-sm font-bold text-white hover:text-primary transition-all leading-none pb-0 -mb-1'>ABOUT US</a>
            <a href="https://www.instagram.com/yogasoulmcr/" target='_blank' className='group'><FaInstagram className='fill-white group-hover:fill-primary transition-all' size={20} /></a>
            <p onMouseEnter={() => {
              document.getElementById('menuApply').classList.toggle('lg:flex');
              document.getElementById('menuApply').classList.toggle('lg:hidden');
            }} className='cursor-pointer text-sm font-bold text-dark bg-primary py-3 pb-2 px-6 transition-all flex justify-center items-center gap-2'>APPLY <IoIosArrowDown fill='#3A393A' className='-mt-1' size={14} /></p>
            <div onMouseLeave={() => {
              document.getElementById('menuApply').classList.remove('lg:flex');
              document.getElementById('menuApply').classList.add('lg:hidden');
            }} id="menuApply" className='bg-white hidden lg:hidden flex-col justify-start items-start p-3 absolute top-10 right-0 origin-top-right gap-0'>
              {
                data.map((item, index) => (
                  <a href={"/" + item.hash} key={index} className='text-sm font-bold text-dark py-2'>{item.nav}</a>
                ))
              }
            </div>
        </div>
        <button onClick={() => handleOpen()} className='flex lg:hidden justify-end items-center gap-2 text-white'><IoMenu size={24} stroke='white' />Menu</button>
        <div className={`lg:hidden flex-col gap-0 absolute top-0 right-0 bg-white h-dvh p-5 flex transition-all w-[70vw] ${open ? 'left-0' : '-left-[100vw]'}`}>
          <a href="/#teachers-training" onClick={() => handleOpen()} className=' py-5 border-b border-b-gray-300'>TEACHER TRAININGS</a>
          <a href="/#discovery-call" onClick={() => handleOpen()} className=' py-5 border-b border-b-gray-300'>DISCOVERY CALL</a>
          <a href="/#graduatedHome" onClick={() => handleOpen()} className=' py-5 border-b border-b-gray-300'>TESTIMONIALS</a>
          <a href="https://yogasoulmcr.co.uk/" target='_blank' onClick={() => handleOpen()} className=' py-5 border-b border-b-gray-300'>ABOUT US</a>
          <a href="https://www.instagram.com/yogasoulmcr/" target='_blank' onClick={() => handleOpen()} className='flex justify-start items-center py-5 border-b border-b-gray-300 gap-2'><FaInstagram fill="#3A393A" size={20} /> INSTAGRAM</a>
        </div>
    </nav>
  )
}

export default Navbar