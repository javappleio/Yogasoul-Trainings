import React, { useState, useRef } from 'react'
import Layout from './layout/Layout'
import emailjs from '@emailjs/browser'

const OffRocket = () => {

  const [inputType, setInputType] = useState('text');
  const [foundationTraining, setFoundationTraining] = useState('');

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zgticu4', 'template_b4w2koh', form.current, 'q6wt88T_5i6oPlYkD')
      .then((result) => {
            console.log(result.text);
            
      }, (error) => {
          console.log(error.text);
    });
  }

  return (
    <Layout>
        <section className='w-full h-[60svh] bg-[url("/images/MG_0669-scaled.jpg")] bg-cover bg-center relative flex justify-center items-center'>
            <div className="w-full h-full absolute top-0 left-0 bg-black/50 z-10"></div>
            <div className="container relative z-20 px-4">
                <h1 className='text-white text-4xl lg:text-6xl font-bold uppercase'>OFF ROCKET</h1>
                <h2 className='text-lg lg:text-2xl text-white font-light pt-2'>Jump on the Rocket ship with this 50 hour advanced teacher training</h2>
            </div>
        </section>
        <section className='container mx-auto py-10 lg:py-20 px-4 flex flex-col lg:flex-row justify-between items-start gap-5'>
          <div className="flex flex-col justify-start items-start gap-4 w-full lg:w-8/12">
            <h2 className='text-3xl font-bold text-dark border-b-2 border-b-primary'>50HR ROCKET TTC</h2>
            <p className='text-lg'>An advanced teacher training designed to give you the intelligence and tools not only to learn the Rocket but also improve your teaching and facilitation skills.</p>
            <br />
            <h2 className='text-3xl font-bold text-dark border-b-2 border-b-primary'>Course Description</h2>
            <p className='text-lg'>5 days of Rocket whereby the end you will be comfortable with the essence of the Rocket 1 and Rocket 2 practices, and have experienced the rollercoaster that is Rocket 3.</p>
            <p className='text-lg'>This course is built with the lineage of the practice close to the heart of it. With the creativity to find your voice and room for you as a Rocket teacher. </p>
            <p className='text-lg'>It is for those who have completed a 200 hour certificate and looking to expand into the FUNdamentals of the Rocket practice, how to safely guide, sequence assist and facilitate with the essence of the practice.</p>
            <p className='text-lg'>Upon completion you will be awarded a 50 hour Yoga Alliance certificate which can count as CPD or toward yoga souls 300 hour Teacher Training Program.</p>
            <br />
            <h2 className='text-3xl font-bold text-dark border-b-2 border-b-primary'>Prices, Dates & Location</h2>
            <p className='text-lg'>Dates: Wednesday 16th Oct – Sunday 20th Oct</p>
            <p className='text-lg'>Times: 8.45am – 5.30pm</p>
            <p className='text-lg'>Location: yoga soul, 823a Stockport Road, Levenshulme M19 3PN</p>
            <p className='text-lg'>Regular Price: £600</p>
            <p className='text-lg'>Early Bird: £500 – If full payment is received by 31st August 2024</p>
            <p className='text-lg'>Includes:</p>
            <p className='text-lg'>Tuition<br />Materials</p>
            <p className='text-lg'>Not Included:</p>
            <p className='text-lg'>Accommodation<br />Meal</p>
            <br />
            <h2 className='text-3xl font-bold text-dark border-b-2 border-b-primary'>Full Brochure</h2>
            <p className='text-lg underline hover:text-primary'><a href="https://www.canva.com/design/DAEnz3waSHY/qd39Q5Wo-0yFWLP0vyxAQA/view?utm_content=DAEnz3waSHY&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink#1" target='_blank'>Click here to find full details</a></p>
          </div>
          <form method='post' ref={form} onSubmit={sendEmail} className="flex flex-col justify-start items-start gap-4 w-full lg:w-4/12">
            <h2 className='text-3xl font-bold text-dark border-b-2 border-b-primary mb-5'>Application Form</h2>
            <input type="hidden" name="form_name" value="Off-Rocket" />
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

export default OffRocket