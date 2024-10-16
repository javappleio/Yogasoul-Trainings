import React, { useState, useRef } from 'react'
import Layout from './layout/Layout'
import emailjs from '@emailjs/browser'
import { Toaster, toast } from 'sonner'

const YinYoga = () => {

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
        <section className='w-full h-[60svh] bg-[url("/images/yinyoga.png")] bg-cover bg-center relative flex justify-center items-center'>
            <div className="w-full h-full absolute top-0 left-0 bg-black/50 z-10"></div>
            <div className="container relative z-20 px-4">
                <h1 className='text-white text-4xl lg:text-6xl font-bold uppercase'>50h Yin
Teacher
Training</h1>
                <h2 className='text-lg lg:text-2xl text-white font-light pt-2'>Join us for a journey of
                transformation and healing.</h2>
            </div>
        </section>
        <section className='container mx-auto py-10 lg:py-20 px-4 flex flex-col lg:flex-row justify-between items-start gap-5'>
          <div className="flex flex-col justify-start items-start gap-4 w-full lg:w-8/12">
            <h2 className='text-3xl font-bold text-dark border-b-2 border-b-primary'>50H Yin Teacher Training</h2>
            <p className='text-lg'>Yin Yoga is a deep and powerful practice rooted in Chinese meridian theory.</p>
            <p className='text-lg'>To understand yin yoga we must first understand the relationship between yin and yang and how it is that yin can support and hold our yang - both in the practice and in life. </p>
            <p className='text-lg'>Yin is the soft and subtle part of the practice, yet can have some of the most powerful and profound releases in both the mind and the body, It supports the yang in this way and also in supporting the physical body by given the soft connective tissue time to stretch release and repair. We will be diving deeply into the anatomy and well as into the structural skeletal system.

This part of the training will provide you with a clear overview of the practice of yin. </p>
            <br />
            <h2 className='text-3xl font-bold text-dark border-b-2 border-b-primary'>Benefits of the course</h2>
            <p className='text-lg'>Confidence in how to theme, sequence and deliver a yin yoga class with harmony of poses, intention and anatomy</p>
            <p className='text-lg'>Confidence in holding space gently for more delicate experiences and the softer and more nurturing practice of yin</p>
            <p className='text-lg'>A increase in understanding of structural anatomy in yoga, alongside attaining knowledge on the connective tissue and the fascia</p>
            <p className='text-lg'>A deeper sense of understanding to your own practice, language of the body and subtleties of Self.</p>
            <p className='text-lg'>A brief overview of yin yoga philosophy, the Chinese meridian theory and elemental practice </p>
            <p className='text-lg'>Knowledge of how to adapt poses to enable them to be accessible, using variations and prop supports</p>
            <p className='text-lg'>A shift in language, facilitation and cueing to support students to dive into self enquiry and stillness</p>
            <p className='text-lg'>A better overview of the emotional and energetic release that students may experience in their yoga practice and how to facilitate this. </p>

            <br />
            <h2 className='text-3xl font-bold text-dark border-b-2 border-b-primary'>Course Overview</h2>
            <p className='text-lg'>The 5 day training will take place at </p>
            <p className='text-lg'>yoga soul Manchester – Levenshulme studio – M19 3PN</p>
            <p className='text-lg'>15- 19th of FEBRUARY</p>
            <p className='text-lg'>Accommodation, travel, food are not included within the price</p>
            <br />
            <h2 className='text-3xl font-bold text-dark border-b-2 border-b-primary'>Your Teacher - Sophie-Rae</h2>
            <p className='text-lg'>Sophie-Rae began her yoga
journey studying Jivamukti
Yoga - a dynamic vinyasa
practice that has a  strong
focus on yoga philosophy,
as a way to bring the
practice off of the mat and
into everyday life. </p>
<p className='text-lg'>
Yoga, for Sophie-Rae is a
practice of self exploration,
inviting us to dive deeply
into all parts of our human
experience and to be able
to feel and sense all
landscapes of our being.
Physical, emotional,
energetic, intellectual and
spiritual.  For Sophie-Rae,
the body is the gateway
and unlocks so much space
to be with what is there
beneath the skin. Allowing
us to become calmer,
clearer, more rounded &
compassionate in our
human experience. 
</p>
            <br />
            <h2 className='text-3xl font-bold text-dark border-b-2 border-b-primary'>Your Teacher - Samuel Nwokeka</h2>
            <p className='text-lg'>Samuel's love for the Rocket
stems back to his first every yoga
class, it just so happened to be a
45 minute Rocket yoga class in
2015 and since then it has been a
constant in his life. </p>



<p className='text-lg'>Soon after his first class he
travelled to India to train as a
teaching in an Ashtanga &
Rocket Teacher Training led by
The Yoga People (two of Larry
Schultz' students). </p>

<p className='text-lg'>Samuel has since trained with
more of Larrys students who are
still carrying the Rocket legacy to
this day, David Kyle and Jamie
Clarke.</p>

          </div>
          <form method='post' ref={form} onSubmit={sendEmail}  className="flex flex-col justify-start items-start gap-4 w-full lg:w-4/12">
            <h2 className='text-3xl font-bold text-dark border-b-2 border-b-primary'>Prices & Booking</h2>
            <p className='text-lg'>TRAINING DATES: 15-19th February</p>
            <p className='text-lg'>TRAINING COST: £500 </p>
            <p className='text-lg'>The 5 day training will take place at 
yoga soul Manchester – Levenshulme studio – M19 3PN0</p>
            <p className='text-lg'>It is highly recomended to get the most out of the intensive to come for all times above, but should for whatever reason that not be possible then there is the varying options.</p>
            <p className='text-lg'>Not Included:</p>
            <p className='text-lg'>Food<br />Accommodation<br />Travel</p>
            <p className='text-lg'>Please read our T&C’s on refund policy.</p>
            <br />
            <h2 className='text-3xl font-bold text-dark border-b-2 border-b-primary mb-5'>Application Form</h2>
            <input type="hidden" name="form_name" value="50H Yin Yoga" />
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

export default YinYoga