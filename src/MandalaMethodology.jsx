import React, { useState, useRef } from 'react'
import Layout from './layout/Layout'
import emailjs from '@emailjs/browser'
import { Toaster, toast } from 'sonner'

const MandalaMethodology = () => {

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
        <section className='w-full h-[60svh] bg-[url("/images/mandalamethodology.jpeg")] bg-cover bg-center relative flex justify-center items-center'>
            <div className="w-full h-full absolute top-0 left-0 bg-black/50 z-10"></div>
            <div className="container relative z-20 px-4">
                <h1 className='text-white text-4xl lg:text-6xl font-bold uppercase'>Mandala Methodology</h1>
                <h2 className='text-lg lg:text-2xl text-white font-light pt-2'>25-hour Teacher training</h2>
            </div>
        </section>
        <section className='container mx-auto py-10 lg:py-20 px-4 flex flex-col lg:flex-row justify-between items-start gap-5'>
          <div className="flex flex-col justify-start items-start gap-4 w-full lg:w-8/12">
            <h2 className='text-3xl font-bold text-dark border-b-2 border-b-primary'>Mandala Methodology</h2>
            <p className='text-lg'>Reignite your practice + Get the keys to create & teach Mandala
Practice with Dulce and learn the methodology behind Mandala, a creative form of vinyasa flow.
</p>
<p className='text-lg'>•	Certified by Yoga soul & Yoga Alliance</p>
<p className='text-lg'>•	Location: yoga soul, Levenshulme, M19 3PN</p>
<p className='text-lg'>•	Faculty: Dulce Mandala, Nicholas Menard & Carlos Mundalah</p>
<p className='text-lg'>•	Investment: £400 Regular price or £350 Early bird (Available until 30th April)</p>
<p className='text-lg'>•	At completion with full attendance you earn a 25-hour Yoga Alliance Certificate</p>
            <p className='text-lg'>Welcome to the vortex of Mandala Vinyasa by Dulce. The Method consists of 4 routines. Each represents an Element and it's specific muscular/energetic activation.
You will learn the methodology behind Mandala Vinyasa, an introspective creative form of vinyasa flow. Journeying into Mandala Vinyasa & the 4 classical elements, we move 360°, breathing and flowing through asanas, inversions & introspection. Connect to nature and the elements within you through seamless transitions as you discover a deep inner state by synchronizing movement and breath.
</p>
            <p className='text-lg'>In this course we present the Mandala Practice as a moving meditation. We will use our body as the vehicle (Earth) to connect with the subtle realm of breath (Air), flowing in perfect synchronization (Water) all enhanced with the power of strong intention (Fire).
Expect a deep connection with yourself, calming of the mind and lightness for the heart.
</p>
            <br />
            <h2 className='text-3xl font-bold text-dark border-b-2 border-b-primary'>What you get</h2>
            <ul className='list-disc list-inside text-lg'>
                <li>We will dive in into Mandala Vinyasa and Breathwork.</li>
                <li>We will explore the magic realm of the breath and its infinite benefits.</li>
                <li>Sequencing Mandala Classes using the solid foundation of Ashtanga Vinyasa</li>
                <li>Sequence Mandala Routines based in Chakras, Peak Pose, Target Area & Emotions.</li>
                <li>Using Yin Yoga we will learn a Yin/Yang approach to balance our Mandala practice.</li>
                <li>Urban ceremonies to enhance the power of intention & roots of Mandala.</li>
                <li>Live music to accompany all practices.</li>
            </ul>
            <br />
            <h2 className='text-3xl font-bold text-dark border-b-2 border-b-primary'>Who would benefit from this training:</h2>
            <ul className='list-disc list-inside text-lg'>
                <li>This course offers a solid and practical understanding of the Mandala method, and will provide the theory and methodology for teaching Mandala skillfully directly from it’s creator.</li>
                <li>Teachers wishing to add some creativity and depth to their classes</li>
                <li>Practitioners who want to deepen their current practice</li>
                <li>Please be aware this is a physically demanding practice, variations will be accessible</li>
                <li>Bring an empty mind an an open heart. Humanity is created through authenticity and individuality to make us whole. Take what you need from this course, and be ready to get plenty of inspiration.</li>
            </ul>
            <br />
            <h2 className='text-3xl font-bold text-dark border-b-2 border-b-primary'>Dulce Mandala</h2>
            <ul className='list-inside text-lg'>
                <li>Dulce has hosted 100+ courses worldwide training over 3000 students in different modalities. She has designed several Yoga courses with a twist on Psychology and Shamanism.</li>
                <li>She has been following a path of yoga, self-inquiry and shamanic tradition for almost 20 years. Her path includes Shamanic practices and influences from Rocket, Prana flow, Tripsichore & Yin Yoga. Her intention is to live in harmony leading to a freer experience with herself and others. Her approach encourages self-responsibility in the path of following your heart.</li>
                <li>Dulce created the Mandala Vinyasa Method based on the 4 Elements. The system is a blend of the Yoga styles she practiced with Shamanism and attention to intention.</li>
                <li>By feeling the Element in the physical self, awareness in the emotional and psychological realms transpires. This creates integration.</li>
            </ul>
            <br />
            <h2 className='text-3xl font-bold text-dark border-b-2 border-b-primary'>Nicholas Menard</h2>
            <ul className='list-inside text-lg'>
                <li>Nicholas is here to have a positive impact on the world and create magic in every interaction. He has been diving into various healing modalities for the past decade seeking ways to reconnect, heal and create harmony in a world that seems to breed more and more disconnection and dis-ease. His mission is to discover and provide tools for each individual to uncover the answers to that riddle.</li>
                <li>His passion for Breathwork dates back to a session that led him to cry for the first time since his father passed away 13 years prior. He experienced its deep effect on the mental, emotional, spiritual and physical level. He now seeks to lead and share the breath with all those who are looking to explore its wide ranging, impactful powers.</li>
                <li>He deploys a variety of breathwork techniques and practices to create an experience with intention to meet the breather where they are at. Each breath is perfect, depending on the effect one is seeking. We will be directing the breath to the element and energy of the day to supercharge our practice and awaken parts of us that have been dormant. Let’s get ready to explore, play and get curious on our breath journey. </li>
            </ul>
            <br />
            <h2 className='text-3xl font-bold text-dark border-b-2 border-b-primary'>Carlos Mundalah</h2>
            <ul className='list-inside text-lg'>
                <li>Carlos is a medicine musician, multi-instrumentalist, singer, DJ, producer and sound therapist. He is passionate about Shamanism, ritual, voice healing, ancient traditions and philosophies, cacao, dance, dreams, plant medicines, and sustainability. Carlos has dedicated his life to make a connection between the past and present, the mind and the heart.</li>
                <li>He studied Biomedical Engineering while practicing Herbal and Mexican Traditional Medicine and devotes himself to the ritual practices of ancient Mexico. He co-founded a Holistic Center in 2010, and since has learned from many different teachers in a wide array of disciplines including Nada Yoga, Pragmatic Meditation, Tantra, Movement therapy, Reiki, Permaculture, Chinese Traditional Medicine and more.</li>
                <li>As a musician he has produced over 100 tracks ranging from meditation, reggae, cumbia, rap, native american, salsa, mantras reggaeton, electronica and more. Fusion is his thing.</li>
                <li>He founded "Nido Encantado”, a retreat place for healing work, bringing together sustainable lifestyle of a food forest and authentic expression through Art and medicine plants. He has facilitated more than 150 ceremonies. He is a certified Sound Therapist and has been working with sound for 10 years. He has been a DJ for 15 years and has played in many festivals and events around the world.</li>
            </ul>
          </div>
          <form method='post' ref={form} onSubmit={sendEmail}  className="flex flex-col justify-start items-start gap-4 w-full lg:w-4/12">
            <h2 className='text-3xl font-bold text-dark border-b-2 border-b-primary'>A Mandala Day</h2>
            <ul className='list-disc list-inside text-lg'>
                <li>Friday 25th - 27th July</li>
                <li>9.30 - 10:00     Breathwork</li>
                <li>10:00 - 11:30     Mandala Practice based on an Element</li>
                <li>11.45 - 13:30     Mandala Methodology</li>
                <li>14:30 - 15:30     Shamanism & Moving Meditations</li>
                <li>15:30 - 16:30     Breathwork Fundamentals </li>
                <li>16:30 - 17:30     Practicum</li>
                <li>17:30 - 18:30     How to teach Mandala efficiently in 1 hour</li>
            </ul>
            <br />
            <h2 className='text-3xl font-bold text-dark border-b-2 border-b-primary mb-5'>Application Form</h2>
            <input type="hidden" name="form_name" value="Mandala Methodology" />
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

export default MandalaMethodology