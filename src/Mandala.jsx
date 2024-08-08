import React, { useState } from 'react'
import Layout from './layout/Layout'

const Mandala = () => {

  const [inputType, setInputType] = useState('text');

  return (
    <Layout>
        <section className='w-full h-[60svh] bg-[url("/images/GP_2798_JG_S_FACE.jpg")] bg-cover bg-center relative flex justify-center items-center'>
            <div className="w-full h-full absolute top-0 left-0 bg-black/50 z-10"></div>
            <div className="container relative z-20 px-4">
                <h1 className='text-white text-4xl lg:text-6xl font-bold uppercase'>MANDALA MASTERY</h1>
                <h2 className='text-lg lg:text-2xl text-white font-light pt-2'>Level up your Mandala offerings with the first edition of this training for current Mandala Teachers</h2>
            </div>
        </section>
        <section className='container mx-auto py-10 lg:py-20 px-4 flex flex-col lg:flex-row justify-between items-start gap-5'>
          <div className="flex flex-col justify-start items-start gap-4 w-full lg:w-8/12">
            <h2 className='text-3xl font-bold text-dark border-b-2 border-b-primary'>Mandala Mastery TTC</h2>
            <p className='text-lg'>A 20 hour Advanced Teacher Training Course, intended for Mandala teachers to level up by understanding Elemental interactions and new creative ways of sequencing with Dulce.</p>
            <br />
            <h2 className='text-3xl font-bold text-dark border-b-2 border-b-primary'>Dates / Location & Prices</h2>
            <p className='text-lg'>Course Dates – November 22-24th 2024 </p>
            <p className='text-lg'>Start time: 9.30am<br />Finish time: 6pm</p>
            <p className='text-lg'>Early Bird (Availably until 31st August): £350<br />Regular Price: £450</p>
            <p className='text-lg'>Cant do in person? join online for £300</p>
            <p className='text-lg'>Location & Accommodation</p>
            <p className='text-lg'>The 3 day training will take place at Space at the Mill, Manchester, Castlefield, M3 4NF</p>
            <p className='text-lg'>Accommodation, travel, food are not included within the price</p>
            <br />
            <h2 className='text-3xl font-bold text-dark border-b-2 border-b-primary'>Full course information</h2>
            <p className='text-lg'>This course is for those who already have a clear understanding of Mandala Vinyasa, Elements and its corresponding muscular activation. We will create Elemental interactions to achieve a particular intention in different levels of awareness.</p>
            <p className='text-lg'>Also we will dive deep into the Standing and Seated series of the Mandala practices with templates to create a constant 360° rotation.</p>
            <p className='text-lg'>Prepare to elevate your Mandala teachings and advance your practice</p>
            <br />
            <h2 className='text-3xl font-bold text-dark border-b-2 border-b-primary'>Requirements</h2>
            <p className='text-lg'>To have attended and completed a Mandala Course with Dulce.</p>
            <p className='text-lg'>If you haven’t already please visit the link below for different live & online options.</p>
            <p className='text-lg'><a href="https://www.mandalavinyasa.com/" target='_blank'>https://www.mandalavinyasa.com/</a></p>
          </div>
          <div className="flex flex-col justify-start items-start gap-4 w-full lg:w-4/12">
            <h2 className='text-3xl font-bold text-dark border-b-2 border-b-primary mb-5'>Application Form</h2>
            <input type="text" placeholder='Name *' className='w-full p-3 border border-gray-300 focus:border-gray-400 mb-2' />
            <input type="tel" placeholder='Phone' className='w-full p-3 border border-gray-300 focus:border-gray-400 mb-2' />
            <input type="mail" placeholder='Email *' className='w-full p-3 border border-gray-300 focus:border-gray-400 mb-2' />
            <input type={inputType} placeholder='Date of birth *' onFocus={() => setInputType('date')} className='w-full p-3 border border-gray-300 focus:border-gray-400 mb-2' />
            <input type="text" placeholder='Intention of applying for the course *' className='w-full p-3 border border-gray-300 focus:border-gray-400 mb-2' />
            <input type="text" placeholder='Injuries we should know about' className='w-full p-3 border border-gray-300 focus:border-gray-400 mb-2' />
            <p className='text-lg'>Have you completed a foundation training? *</p>
            <div className="flex gap-2">
              <input type="radio" name="foundationTrainingRadio" value="Yes" />
              <span>Yes</span>
            </div>
            <div className="flex gap-2">
              <input type="radio" name="foundationTrainingRadio" value="No" />
              <span>No</span>
            </div>
            <p className='text-lg'>Years of experience *</p>
            <select className='w-full p-3 border border-gray-300 focus:border-gray-400 mb-2'>
              <option value="No Experience">No Experience</option>
              <option value="1-3">1-3</option>
              <option value="3-5">3-5</option>
              <option value="5+">5+</option>
            </select>
            <p className='text-lg'>Any other information relevant to the application</p>
            <textarea className='w-full p-3 border border-gray-300 focus:border-gray-400 mb-2 resize-none' name="" id="" rows={6}></textarea>
            <button className='py-3 px-8 bg-dark text-white text-center font-bold w-full lg:w-fit'>SUBMIT</button>
          </div>
        </section>
    </Layout>
  )
}

export default Mandala