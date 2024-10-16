import React from 'react'
import logo from '../assets/images/logo_ys.png'
import { FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-footer w-full py-20 px-4'>
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start gap-5">
            <div className='w-full lg:w-1/4 flex justify-center lg:justify-start pb-8'>
                <img src={logo} alt="YS Logo" className='w-full max-w-56 lg:max-w-44' />
            </div>
            <div className='w-full lg:w-1/4 flex flex-col justify-start items-center lg:items-start gap-2'>
                <h5 className='text-lg font-bold text-white pb-4 lg:pb-5'>Home</h5>
                <a href="/#discovery-call" className='text-white font-normal'>Discovery</a>
                <a href="/#teachers-training" className='text-white font-normal'>Teacher Trainings</a>
                <a href="/#graduatedHome" className='text-white font-normal'>Testimonials</a>
            </div>
            <div className='w-full lg:w-1/4 flex flex-col justify-start items-center lg:items-start gap-2'>
                <h5 className='text-lg font-bold text-white pb-4 lg:pb-5'>Teacher Trainings</h5>
                <a href="/off-rocket" className='text-white font-normal'>Off-Rocket</a>
                <a href="/50-yin-yoga" className='text-white font-normal'>50H Yin YOga</a>
                <a href="/20-hours-mandala-mastery" className='text-white font-normal'>Mandala Mastery</a>
                <a href="/foundation" className='text-white font-normal'>Foundation</a>
            </div>
            <div className='w-full lg:w-1/4 flex flex-row justify-center lg:justify-end items-center gap-8'>
                <a href="https://www.facebook.com/yogasoulmcr" target='_blank' className='text-white font-normal group'><FaFacebook className='group-hover:opacity-60 transition-all' fill="white" size={22} /></a>
                <a href="https://www.instagram.com/yogasoulmcr/" target='_blank' className='text-white font-normal group'><FaInstagram className='group-hover:opacity-60 transition-all' fill="white" size={22} /></a>
            </div>
        </div>
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center pt-20 gap-5">
            <p className='text-white font-light'>© 2024 Yoga Soul. All rights reserved.</p>
            <a href="/terms-conditions" className='text-white font-light'>Terms & Conditions</a>
        </div>
    </footer>
  )
}

export default Footer