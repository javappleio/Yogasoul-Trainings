import React, { useState, useRef } from 'react'
import Layout from './layout/Layout'
import emailjs from '@emailjs/browser'
import { Toaster, toast } from 'sonner'

const AdjustmentsWeekend = () => {

  const [inputType, setInputType] = useState('text');
  const [foundationTraining, setFoundationTraining] = useState('');

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zgticu4', 'template_b4w2koh', form.current, 'q6wt88T_5i6oPlYkD')
    .then(() => {
          toast.success('Application Form sent successfully')
          form.current.reset();
    }, () => {
        toast.error('Application Form failed to send. Please try again later')
  });
  }

  return (
    <Layout>
      <Toaster position="top-right" closeButton richColors />
        <section className='w-full h-[60svh] bg-[url("/images/adjustments_weekend.jpg")] bg-cover bg-center relative flex justify-center items-center'>
            <div className="w-full h-full absolute top-0 left-0 bg-black/50 z-10"></div>
            <div className="container relative z-20 px-4">
                <h1 className='text-white text-4xl lg:text-6xl font-bold uppercase'>ADJUSTMENTS WEEKEND</h1>
                <h2 className='text-lg lg:text-2xl text-white font-light pt-2'>Hands on adjustments are a dying art, I call them an art because it is a skill.</h2>
            </div>
        </section>
        <section className='container mx-auto py-10 lg:py-20 px-4 flex flex-col lg:flex-row justify-between items-start gap-5'>
          <div className="flex flex-col justify-start items-start gap-4 w-full lg:w-8/12">
            <h2 className='text-3xl font-bold text-dark border-b-2 border-b-primary'>Adjustments Weekend</h2>
            <p className='text-lg'>Hands on adjustments are a dying art, I call them an art because it is a skill. One, like any other skill you have to work on consistently or perhaps you may lose some confidence, get out of the swing of it and find yourself again wondering, how to adjust ?</p>
            <br />
            <h2 className='text-3xl font-bold text-dark border-b-2 border-b-primary'>What to expect</h2>
            <p className='text-lg'>This weekend is to provide you with insights into how to make adjustments work for you in your unique way, allowing you to explore different aspects, types, and methodology of adjustments that will help you if you are:</p>
            <ul className='list-disc list-inside text-lg'>
                <li>Wanting to learn more about them</li>
                <li>Need confidence in building them into your classes</li>
                <li>A Newer teacher with lots to think about so adjustments were at the back of the list but now they are creeping up on the list</li>
                <li>Any teacher interested in learning, exploring, upskilling in the area of adjustments</li>
            </ul>
            <br />
            <h2 className='text-3xl font-bold text-dark border-b-2 border-b-primary'>Course Overview</h2>
            <p className='text-lg'>Facilitator: Samuel Nwokeka</p>
            <p className='text-lg'>Requirements:</p>
            <ul className='list-disc list-inside text-lg'>
                <li>Actively teaching yoga </li>
                <li>Foundation (200) hour course</li>
            </ul>
          </div>
          <form method='post' ref={form} onSubmit={sendEmail}  className="flex flex-col justify-start items-start gap-4 w-full lg:w-4/12">
            <h2 className='text-3xl font-bold text-dark border-b-2 border-b-primary'>Prices & Booking</h2>
            <p className='text-lg'>Regular Price £200</p>
            <p className='text-lg'>Early Bird price: £150</p>
            <p className='text-lg'>Price does not include: travel, accommodation or food</p>
            <p className='text-lg'>Date: 19th & 20th Of April 2025</p>
            <p className='text-lg'>Location: yoga soul, Levenshulme, 823a Stockport Road, M193PN</p>
            <br />
            <h2 className='text-3xl font-bold text-dark border-b-2 border-b-primary mb-5'>Application Form</h2>
            <input type="hidden" name="form_name" value="Adjustments Weekend" />
            <input type="text" placeholder='Name *' name='name' className='w-full p-3 border border-gray-300 focus:border-gray-400 mb-2' required />
            <input type="tel" placeholder='Phone' name='phone' className='w-full p-3 border border-gray-300 focus:border-gray-400 mb-2' />
            <input type="mail" placeholder='Email *' name='email' className='w-full p-3 border border-gray-300 focus:border-gray-400 mb-2' required />
            <input type={inputType} placeholder='Date of birth *' name='date_birth' onFocus={() => setInputType('date')} className='w-full p-3 border border-gray-300 focus:border-gray-400 mb-2' required />
            <input type="text" placeholder='Intention of applying for the course *' name='intention' className='w-full p-3 border border-gray-300 focus:border-gray-400 mb-2' required />
            <input type="text" placeholder='Injuries we should know about' name='injuries' className='w-full p-3 border border-gray-300 focus:border-gray-400 mb-2' />
            <p className='text-lg'>Have you completed a foundation training? *</p>
            <input type="hidden" name='completed_foundation' value={foundationTraining} required />
            <div className="flex gap-2">
              <input type="radio" name="foundationTrainingRadio" onChange={(e) => setFoundationTraining(e.target.value)} value="Yes" />
              <span>Yes</span>
            </div>
            <div className="flex gap-2">
              <input type="radio" name="foundationTrainingRadio" onChange={(e) => setFoundationTraining(e.target.value)} value="No" />
              <span>No</span>
            </div>
            <p className='text-lg'>Years of experience *</p>
            <select className='w-full p-3 border border-gray-300 focus:border-gray-400 mb-2' name='experience' required>
              <option value="No Experience">No Experience</option>
              <option value="1-3">1-3</option>
              <option value="3-5">3-5</option>
              <option value="5+">5+</option>
            </select>
            <p className='text-lg'>Any other information relevant to the application</p>
            <textarea className='w-full p-3 border border-gray-300 focus:border-gray-400 mb-2 resize-none' name="info" rows={6}></textarea>
            <button type='submit' className='py-3 px-8 bg-dark text-white text-center font-bold w-full lg:w-fit'>SUBMIT</button>
          </form>
        </section>
    </Layout>
  )
}

export default AdjustmentsWeekend