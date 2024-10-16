import { useState } from 'react';
import Layout from './layout/Layout';

import tt from './assets/images/tt.png';
import ttBanner from './assets/images/tt_3-2048x816.png';

import tf_1 from './assets/images/tf_1.png';
import tf_2 from './assets/images/tf_2.png';
import tf_3 from './assets/images/tf_3.png';
import tf_4 from './assets/images/tf_4.png';
import tf_5 from './assets/images/tf_5.png';
import tf_6 from './assets/images/tf_6.png';
import tf_7 from './assets/images/tf_7.png';
import tf_8 from './assets/images/tf_8.png';
import tf_9 from './assets/images/tf_9.png';
import tf_10 from './assets/images/tf_10.png';

import banner_center from './assets/images/banner_center.png';

import thumbnail1 from './assets/images/thumbnail1.png';
import thumbnail2 from './assets/images/thumbnail2.png';
import thumbnail3 from './assets/images/thumbnail3.png';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import { URLHash } from '@splidejs/splide-extension-url-hash';
import '@splidejs/react-splide/css';

import { GoPlay } from "react-icons/go";

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

const heroSlide = [
  {
    title: "50 Hours Off-rocket",
    description: "A 5 Day Advanced teacher training for those eager teachers looking to expand their practice, and teaching knowledge and confidence whilst learning all about the Rocket.",
    image: "/images/offrocket.jpg",
    hash: "off-rocket"
  },
  {
    title: "50H YIN YOGA",
    description: "You will learn to teach Yin Yoga in a way that is safe, accessible, and enjoyable for all students. Join us for a journey of transformation and healing.",
    image: "/images/yinyoga.png",
    hash: "50-yin-yoga"
  },
  // {
  //   title: "TRIPSICHORE WEEKEND INTENSIVE",
  //   description: "Join the creator of this practice, Edward Clark, a practice that has been around since 1979 and borne some of the worlds top teachers yet goes mainly unknown.",
  //   image: "/images/sutra.jpg",
  //   hash: "tripsichore-immersion"
  // },
  {
    title: "20 HOURS MANDALA MASTERY",
    description: "The first advanced Mandala TT, Level up your Mandala by understanding Elemental interactions and new creative ways of sequencing with Dulce.",
    image: "/images/mandala.jpg",
    hash: "20-hours-mandala-mastery"
  },
  {
    title: "FOUNDATION",
    description: "This teacher training is for, students who are looking to develop their understanding of the yoga practice, continue their spiritual journey.",
    image: "/images/foundation.jpg",
    hash: "foundation"
  }
]

function Home() {

  return (
    <Layout>
      <Hero />
      <DiscoveryCall />
      <Trainings />
      <Graduated />
      <Connect />
      <BePart />
    </Layout>
  )
}

export default Home

const Hero = () => {

  const [slideDesc, setSlideDesc] = useState(0);

  return (
    <section className="w-full h-svh relative flex justify-center items-center">
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10"></div>
      <div className="z-0 w-full h-full absolute top-0 left-0">
        <Splide options={{
          perPage: 1,
          perMove: 1,
          pagination: false,
          type: 'loop',
          arrows: false,
          autoplay: false,
        }} extensions={{ URLHash }}>
          {
            heroSlide.map((slide, index) => (
              <SplideSlide data-splide-hash={slide.hash} key={index}>
                <img src={slide.image} alt="slide 1" className="w-full h-svh object-cover object-center" />
              </SplideSlide>
            ))
          }
        </Splide>
      </div>
      <div className='container mx-auto flex flex-col lg:flex-row justify-between items-center relative z-20 gap-10 lg:gap-28'>
        <div className="flex flex-col justify-center items-center lg:justify-start lg:items-end gap-2 w-full lg:w-1/2">
          <h2 className='text-white font-semibold text-xl mb-10'>WHAT INSPIRES YOU?</h2>
          {
            heroSlide.map((slide, index) => (
              <button onMouseEnter={() => {
                window.location.hash = slide.hash;
                setSlideDesc(index);
              }} className={slideDesc == index ? 'text-sm uppercase px-5 py-3 text-center transition-all bg-white text-dark font-medium lg:-mr-5' : 'text-white text-sm uppercase px-5 py-3 text-center transition-all hover:bg-white hover:text-dark font-medium lg:-mr-5'}>{slide.title}</button>
            ))
          }
        </div>
        <div className="flex flex-col-reverse lg:flex-col justify-center items-center lg:justify-start lg:items-start gap-2 w-full lg:w-1/2 px-4">
          <a href={`/${heroSlide[slideDesc].hash}`} className='bg-primary w-64 text-center text-dark uppercase py-3 px-7 font-bold text-sm mb-4'>MORE INFO</a>
          <p className='text-white drop-shadow-md font-light w-full max-w-96 text-center lg:text-left'>{heroSlide[slideDesc].description}</p>
        </div>
      </div>
    </section>
  )
}

const DiscoveryCall = () => {
  return (
    <section id="discovery-call" className='w-full h-dvh flex justify-center items-center bg-[url("/images/book_banner.png")] bg-cover bg-center'>
      <div className="container px-4">
        <h2 className=' font-sans font-bold text-3xl lg:text-5xl text-white'>BOOK A DISCOVERY CALL</h2>
        <p className='text-white font-sans lg:text-xl pb-10'>Solve any doubts directly with your future teacher.</p>
        <a href="/discovery-call" className='bg-secondary text-white text-center py-3 px-16 font-bold w-full lg:w-fit block'>BOOK</a>
      </div>
    </section>
  )
}

const Trainings = () => {

  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <section id="teachers-training" className='container mx-auto pt-20 px-4'>
        <h2 className='mx-auto text-center font-fjalla text-4xl lg:text-5xl font-medium'>TEACHER TRAININGS</h2>
        <div className='flex flex-col lg:flex-row justify-center items-start gap-5 pt-8 w-full'>
          <div className="w-full lg:w-4/12">
            <Accordion className={open === 1 ? 'px-4 py-2 bg-light rounded-xl' : 'px-4 py-2 rounded-xl'} open={open === 1} icon={<Icon id={1} open={open} />}>
              <AccordionHeader className='border-b-0 text-lg' onClick={() => handleOpen(1)}>50 Hours Off-rocket</AccordionHeader>
              <AccordionBody>
                <p className='font-normal pb-5'>A 5 Day Advanced teacher training for those eager teachers looking to expand their practice, and teaching knowledge and confidence whilst learning all about the Rocket.</p>
                <a href="/off-rocket" className='bg-secondary text-white text-center py-2 px-12 font-medium w-full lg:w-fit block'>APPLY</a>
              </AccordionBody>
            </Accordion>
            <Accordion className={open === 2 ? 'px-4 py-2 bg-light rounded-xl' : 'px-4 py-2 rounded-xl'} open={open === 2} icon={<Icon id={2} open={open} />}>
              <AccordionHeader className='border-b-0 text-lg' onClick={() => handleOpen(2)}>
              Yin Yoga Teacher Training - 50 Hours
              </AccordionHeader>
              <AccordionBody>
                <p className='font-normal pb-5'>You will learn to teach Yin Yoga in a way that is safe, accessible, and enjoyable for all students. Join us for a journey of transformation and healing.</p>
                <a href="/50-yin-yoga" className='bg-secondary text-white text-center py-2 px-12 font-medium w-full lg:w-fit block'>APPLY</a>
              </AccordionBody>
            </Accordion>
            <Accordion className={open === 3 ? 'px-4 py-2 bg-light rounded-xl' : 'px-4 py-2 rounded-xl'} open={open === 3} icon={<Icon id={3} open={open} />}>
              <AccordionHeader className='border-b-0 text-lg' onClick={() => handleOpen(3)}>
              Foundation - 250 hours
              </AccordionHeader>
              <AccordionBody>
                <p className='font-normal pb-5'>This 250hr training will provide you with the tools and knowledge to be a confident and authentic yoga teacher, or simply to delve into the depths of your own practice.</p>
                <a href="/foundation" className='bg-secondary text-white text-center py-2 px-12 font-medium w-full lg:w-fit block'>APPLY</a>
              </AccordionBody>
            </Accordion>
          </div>
          <img src={tt} alt="Teachers Trainings Carrousel" className='w-full lg:w-6/12' />
        </div>
      </section>
      <img src={ttBanner} alt="Teachers Trainings Banner" className='w-full object-cover' />
    </>
  )
}

const Graduated = () => {

  return (
    <>
      <section className='container mx-auto pb-20 px-4 pt-5' id="graduatedHome">
        <h2 className='mx-auto text-center font-fjalla text-4xl lg:text-5xl font-medium pb-5'>PREVIOUS GRADUATES</h2>
        <p className='lg:text-lg mx-auto w-full max-w-[630px] text-center pb-4 lg:pb-10'>Get to know some students that have been part of previous teacher training editions (even more than once). Better to hear it from them.</p>
        <Splide options={{
          perPage: 2,
          perMove: 1,
          pagination: true,
          type: 'loop',
          arrows: false,
          gap: '2rem',
          breakpoints: {
            768: {
              perPage: 1,
            },
          }
        }}>
          <SplideSlide>
            <a href="/videos/testimonial_1.mp4" target='_blank' className='w-full h-fit flex justify-center items-center relative cursor-pointer'>
              <img src={thumbnail1} alt="" className='w-full aspect-video relative z-10' />
              <GoPlay className='absolute fill-white text-8xl z-20' />
            </a>
          </SplideSlide>
          <SplideSlide>
            <a href="/videos/testimonial_2.mp4" target='_blank' className='w-full h-fit flex justify-center items-center relative cursor-pointer'>
              <img src={thumbnail2} alt="" className='w-full aspect-video relative z-10' />
              <GoPlay className='absolute fill-white text-8xl z-20' />
            </a>
          </SplideSlide>
          <SplideSlide>
            <a href="/videos/testimonial_3.mp4" target='_blank' className='w-full h-fit flex justify-center items-center relative cursor-pointer'>
              <img src={thumbnail3} alt="" className='w-full aspect-video relative z-10' />
              <GoPlay className='absolute fill-white text-8xl z-20' />
            </a>
          </SplideSlide>
        </Splide>
      </section>
    </>
  )
}

const Connect = () => {
  return (
    <section className="w-full py-10 lg:py-20 bggradient">
      <div className='container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center gap-5'>
        <div className="w-full lg:w-3/12">
          <h2 className='text-center lg:text-left font-fjalla text-3xl lg:text-5xl font-medium pb-5'>Connect with your teachers</h2>
          <p className='text-center lg:text-left lg:text-lg'>We are a collective with the sole purpose of guiding you. Feel free to book a discovery call and reach any of us!</p>
        </div>
        <div className="w-full lg:w-9/12 grid grid-cols-5 grid-rows-2 lg:gap-5">
          <img src={tf_1} alt="" className='grayscale hover:grayscale-0 transition-all' />
          <img src={tf_3} alt="" className='grayscale hover:grayscale-0 transition-all' />
          <img src={tf_7} alt="" className='grayscale hover:grayscale-0 transition-all' />
          <img src={tf_5} alt="" className='grayscale hover:grayscale-0 transition-all' />
          <img src={tf_9} alt="" className='grayscale hover:grayscale-0 transition-all' />
          <img src={tf_2} alt="" className='grayscale hover:grayscale-0 transition-all' />
          <img src={tf_4} alt="" className='grayscale hover:grayscale-0 transition-all' />
          <img src={tf_8} alt="" className='grayscale hover:grayscale-0 transition-all' />
          <img src={tf_6} alt="" className='grayscale hover:grayscale-0 transition-all' />
          <img src={tf_10} alt="" className='grayscale hover:grayscale-0 transition-all' />
        </div>
      </div>
    </section>
  )
}

const BePart = () => {
  
  return (
    <section className="w-full pt-10 lg:pt-20">
      <div className='container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center gap-5'>
        <div className="w-full lg:w-3/12">
          <h2 className='text-center lg:text-left font-fjalla text-3xl lg:text-5xl font-medium pb-5'>Make yoga part of your life</h2>
          <p className='text-center lg:text-left lg:text-lg pb-4 lg:pb-10'>Sharing the love of yoga to create positive change in the world</p>
          <a href="#" className='bg-secondary text-white text-center py-3 px-16 font-bold w-full lg:w-fit block'>APPLY</a>
        </div>
        <div className="w-full lg:w-9/12 flex justify-center items-end">
          <img className='w-full lg:w-7/12' src={banner_center} alt="" />
        </div>
      </div>
    </section>
  )
}