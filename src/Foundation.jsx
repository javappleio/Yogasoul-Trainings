import React, { useState, useRef } from 'react'
import Layout from './layout/Layout'
import emailjs from '@emailjs/browser'
import { Toaster, toast } from 'sonner'

const Foundation = () => {

  const [inputType, setInputType] = useState('text');

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
        <section className='w-full h-[60svh] bg-[url("/images/chakra_mandala-scaled.jpg")] bg-cover bg-center relative flex justify-center items-center'>
            <div className="w-full h-full absolute top-0 left-0 bg-black/50 z-10"></div>
            <div className="container relative z-20 px-4">
                <h1 className='text-white text-4xl lg:text-6xl font-bold uppercase'>FOUNDATION</h1>
                <h2 className='text-lg lg:text-2xl text-white font-light pt-2'>Are you ready to step into the teachers shoes?</h2>
            </div>
        </section>
        <section className='container mx-auto py-10 lg:py-20 px-4 flex flex-col lg:flex-row justify-between items-start gap-5'>
          <div className="flex flex-col justify-start items-start gap-4 w-full lg:w-8/12">
            <h2 className='text-3xl font-bold text-dark border-b-2 border-b-primary'>Is this your journey?</h2>
            <p className='text-lg'>This teacher training is for, students who are looking to develop their understanding of the yoga practice, continue their spiritual journey. This 250hr training will provide you with the tools and knowledge to be a confident and authentic yoga teacher, or simply to delve into the depths of your own practice.</p>
            <p className='text-lg'>As a foundational course the aim of the syllabus is to cover all aspects of yoga philosophy, with a strong physical focus and the introduction of applied anatomy. As well as an exploration of the subtleties of the practice to include the energetic body, chakras, pranayama and meditation.</p>
            <br />
            <h2 className='text-3xl font-bold text-dark border-b-2 border-b-primary'>Dates & Location</h2>
            <p className='text-lg font-bold'>2 week Immersion In Tenerife, Spain</p>
            <p className='text-lg'>Saturday 25th January 6.30am –</p>
            <p className='text-lg'>Friday 7th February 6pm</p>
            <p className='text-lg'>Suggested arrival Friday 26th January</p>
            <p className='text-lg'>Suggested Departure – Saturday 8th February</p>
            <p className='text-lg font-bold'>4 Manchester Weekends: </p>
            <p className='text-lg font-bold'>21- 23rd February</p>
            <p className='text-lg font-bold'>7-9th March</p>
            <p className='text-lg font-bold'>21-23rd March</p>
            <p className='text-lg font-bold'>4-6 April – Final Teaching weekend</p>
            <p className='text-lg'>Timings of the weekends:</p>
            <p className='text-lg'>Fridays 5-9pm</p>
            <p className='text-lg'>Saturday & Sunday 9am – 6pm</p>
            <br />
            <h2 className='text-3xl font-bold text-dark border-b-2 border-b-primary'>Prices</h2>
            <p className='text-lg'>£2800 Super Early bird (Deposit received by 30th June 2024)</p>
            <p className='text-lg'>£3100 Early bird (Deposit received by 30th September 2024)</p>
            <p className='text-lg'>£3300 Regular Price (after 1st October 2024)</p>
            <p className='text-lg'>£600 non-refundable deposit</p>
            <p className='text-lg'>Prices include Course materials, tuition, Exclusive use of the shala, Buffet style Breakfast, lunch & Dinners.</p>
            <p className='text-lg'>Not included: Travel, Accommodation</p>
            <p className='text-lg'>Accomodation Prices:</p>
            <p className='text-lg'>800EUR Based on sharing 3 person room, each room has private bathroom.</p>
            <p className='text-lg'>Other facilities:</p>
            <p className='text-lg'>Sauna</p>
            <p className='text-lg'>pool</p>
            <p className='text-lg'>Hot Tub</p>
            <br />
            <h2 className='text-3xl font-bold text-dark border-b-2 border-b-primary'>Full course information</h2>
            <p className='text-lg'>Watch our FREE pre-recorded open evening with Lead Teachers Sammy and Sophie and they go more in depth on what you can expect:</p>
            <a href="https://www.canva.com/design/DAEreK1BWAk/VVdFeOzQIt0fhNVsqTQr3g/view" target='_blank' className='py-3 px-8 bg-primary text-dark text-center font-bold w-full lg:w-fit'>CLICK HERE</a>
            <p className='text-lg'>To download the full prospectus for all course information</p>
            <a href="https://www.canva.com/design/DAEreK1BWAk/VVdFeOzQIt0fhNVsqTQr3g/view" target='_blank' className='py-3 px-8 bg-primary text-dark text-center font-bold w-full lg:w-fit'>CLICK HERE</a>
            <p className='text-lg'>Please read Terms and Conditions carefully</p>
            <p className='text-lg'>If you have any questions please reach out to us, or look out for our Free online open evenings</p>
          </div>
          <form method='post' ref={form} onSubmit={sendEmail} className="flex flex-col justify-start items-start gap-4 w-full lg:w-4/12">
            <h2 className='text-3xl font-bold text-dark border-b-2 border-b-primary mb-5'>Application Form</h2>
            <input type="hidden" name="form_name" value="Foundation" />
            <input type="text" placeholder='Name *' name='name' className='w-full p-3 border border-gray-300 focus:border-gray-400 mb-2' required />
            <input type="tel" placeholder='Phone' name='phone' className='w-full p-3 border border-gray-300 focus:border-gray-400 mb-2' />
            <input type="mail" placeholder='Email *' name='email' className='w-full p-3 border border-gray-300 focus:border-gray-400 mb-2' required />
            <input type={inputType} placeholder='Date of birth *' name='date_birth' onFocus={() => setInputType('date')} className='w-full p-3 border border-gray-300 focus:border-gray-400 mb-2' required />
            <input type="text" placeholder='Intention of applying for the course *' name='intention' className='w-full p-3 border border-gray-300 focus:border-gray-400 mb-2' required />
            <input type="text" placeholder='Injuries we should know about' name='injuries' className='w-full p-3 border border-gray-300 focus:border-gray-400 mb-2' />
            {/* <p className='text-lg'>Have you completed a foundation training? *</p> */}
            <input type="hidden" name='completed_foundation' value="No" required />
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

export default Foundation