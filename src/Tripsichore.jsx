import React, { useState, useRef } from 'react'
import Layout from './layout/Layout'
import emailjs from '@emailjs/browser'

const Tripsichore = () => {

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
        <section className='w-full h-[60svh] bg-[url("/images/ED-148-hi-res-copy-scaled.jpg")] bg-cover bg-center relative flex justify-center items-center'>
            <div className="w-full h-full absolute top-0 left-0 bg-black/50 z-10"></div>
            <div className="container relative z-20 px-4">
                <h1 className='text-white text-4xl lg:text-6xl font-bold uppercase'>TRIPSICHORE 3 DAY INTENSIVE</h1>
                <h2 className='text-lg lg:text-2xl text-white font-light pt-2'>A challenging practice – Accessible to Everyone</h2>
            </div>
        </section>
        <section className='container mx-auto py-10 lg:py-20 px-4 flex flex-col lg:flex-row justify-between items-start gap-5'>
          <div className="flex flex-col justify-start items-start gap-4 w-full lg:w-8/12">
            <h2 className='text-3xl font-bold text-dark border-b-2 border-b-primary'>Tripsichore</h2>
            <p className='text-lg'>In this Intensive Course, Edward Clark (creator of Tripsichore) will expertly guide participants through the intricacies of Tripsichore’s technique.</p>
            <p className='text-lg'>This 3 day course is meant for anyone who wants to intelligently move their yoga practice forward.  Regardless of your current level, this Intensive Course will impart the techniques that will show you how to knowledgeably approach yoga.  The Course will have you trying – and accomplishing – material that often appears to be difficult.</p>
            <br />
            <h2 className='text-3xl font-bold text-dark border-b-2 border-b-primary'>What to expect</h2>
            <p className='text-lg'>It will be hard work, but almost everyone who already practises yoga can do it.  Each day, the Intensive will start with the kind of class that Tripsichore has done daily for over 40 years – followed by a breakdown of the various components of the class.  Participants will learn how to do inversions, unusual balances, back bends and twists and, as well, they will gain a deep understanding of how and why sequences are constructed in a certain order.</p>
            <p className='text-lg'>Our linking of unusual postures is innovative, but our methods are respectful of orthodox traditions.  The technique used in our yoga practice focuses on the importance of uniting the mind and the body through the use of breath.  In this Intensive, we will explain our techniques used to achieve some of the “spectacular” postures, which we believe to be the same approach as for some of the apparently “simple” postures.</p>
            <br />
            <h2 className='text-3xl font-bold text-dark border-b-2 border-b-primary'>Course Overview</h2>
            <p className='text-lg'>This course is for both Teachers and Interested Practitioners</p>
            <p className='text-lg'>Dates & Timings</p>
            <p className='text-lg'>Friday     20th     September       6.30pm – 8.30pm</p>
            <p className='text-lg'>Saturday 21st       September        10am – 4pm </p>
            <p className='text-lg'>Sunday   22nd     September        10am – 4pm</p>
            <p className='text-lg'>Venue:</p>
            <p className='text-lg'>yoga soul, Levenshulme, 823a Stockport Road, M19 3PN</p>
            <p className='text-lg'>For teachers completing yoga soul training hours or wanting CPD certificate – 10 hour certificate can be provid</p>
            <br />
            <h2 className='text-3xl font-bold text-dark border-b-2 border-b-primary'>Your Teacher - Edward Clark</h2>
            <p className='text-lg'>Edward Clark is the creator of Tripsichore, the London-based yoga performance group that has delighted audiences around the world. The performance company was created to explore the possibilities of a form of theater that would celebrate Yogic philosophy and extraordinary physical prowess. Edward began studying yoga in 1979. Notable among his teachers are Narayani and Giris Rabinovitch, but he also admires Ashtanga vinyasa, Sivananda, Iyengar, and viniyoga practices. The Tripsichore group has practiced daily for the past 40 years, devising and refining its techniques for asana, pranayama, pratayahara, dharana, and dhyana. Edward fuses his keen artistic vision with a deep understanding of the essential pursuit of yoga practice. His classes are entertaining, demanding, and exhilarating.</p>
          </div>
          <form method='post' ref={form} onSubmit={sendEmail}  className="flex flex-col justify-start items-start gap-4 w-full lg:w-4/12">
            <h2 className='text-3xl font-bold text-dark border-b-2 border-b-primary'>Prices & Booking</h2>
            <p className='text-lg'>Full Weekend £250</p>
            <p className='text-lg'>Saturday & Sunday only £200</p>
            <p className='text-lg'>1 Day £100</p>
            <p className='text-lg'>It is highly recomended to get the most out of the intensive to come for all times above, but should for whatever reason that not be possible then there is the varying options.</p>
            <p className='text-lg'>Price includes:</p>
            <p className='text-lg'>Tuition<br />Materials</p>
            <p className='text-lg'>Not Included:</p>
            <p className='text-lg'>Food<br />Accommodation<br />Travel</p>
            <p className='text-lg'>Please read our T&C’s on refund policy.</p>
            <br />
            <h2 className='text-3xl font-bold text-dark border-b-2 border-b-primary mb-5'>Application Form</h2>
            <input type="hidden" name="form_name" value="Tripsichore" />
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

export default Tripsichore