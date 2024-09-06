import React, { useState, useRef } from 'react'
import LayoutDark from './layout/LayoutDark.jsx'
import logo from './assets/images/iso_ys.png'
import samuel from './assets/images/samuel.png'
import { IoIosCheckmark } from "react-icons/io";
import emailjs from '@emailjs/browser'

import { ScheduleMeeting } from 'react-schedule-meeting';

const DiscoveryCall = () => {

  const [selected, setSelected] = useState(0);

  const [staff, setStaff] = useState("");
  const [date, setDate] = useState("");
  const [training, setTraining] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const nameSelected = (value) => {
    setName(value);
  }

  const surnameSelected = (value) => {
    setSurname(value);
  }

  const emailSelected = (value) => {
    setEmail(value);
  }

  const phoneSelected = (value) => {
    setPhone(value);
  }

  const changeSelected = (value) => {
    setSelected(value);
  }

  const trainingSelected = (value) => {
    setTraining(value);
    console.log(value);
  }
  
  const staffSelected = (value) => {
    setStaff(value);
    console.log(value);
  }
  
  const dateSelected = (value) => {
    setDate(value);
    console.log(value);
  }

  return (
    <LayoutDark>
        <section className='w-full min-h-screen py-32 lg:py-20 px-4 flex justify-center items-center'>
          <div className='w-full max-w-5xl flex flex-col lg:flex-row justify-start lg:justify-center items-start h-full lg:min-h-[600px] bg-white gap-0 overflow-hidden' style={{ boxShadow: "rgba(112, 119, 125, 0.25) 0px 5px 40px 5px"}}>
            <div className="flex flex-col h-full lg:min-h-[600px] w-full lg:w-60 bg-dark relative justify-start items-center p-5">
              <img src={logo} alt="YS Iso" className='w-full max-w-[100px] mb-4 lg:mb-10' />
              <div className="flex flex-row lg:flex-col justify-center lg:justify-start items-start w-full gap-5 lg:gap-0">
                {
                  selected === 0 ?
                  <div className='lg:w-full flex justify-center lg:justify-start items-center gap-2 py-1 lg:py-4'>
                    <div className='size-6 rounded-full bg-white flex justify-center items-center text-white font-bold text-sm leading-none'>
                      <IoIosCheckmark fill='black' size={20} opacity={1} />
                    </div>
                    <p className='text-white font-medium text-base leading-none mt-1 opacity-100 hidden lg:block uppercase'>Training</p>
                  </div>:
                  <div className='lg:w-full flex justify-center lg:justify-start items-center gap-2 py-1 lg:py-4'>
                    <div className='size-6 rounded-full bg-callPurple flex justify-center items-center text-white font-bold text-sm leading-none'>
                      <IoIosCheckmark fill='white' size={20} opacity={1} />
                    </div>
                    <p className='text-white font-medium text-base leading-none mt-1 opacity-100 hidden lg:block uppercase'>Training</p>
                  </div>
                }
                {
                  selected === 1 ?
                  <div className='lg:w-full flex justify-center lg:justify-start items-center gap-2 py-1 lg:py-4'>
                    <div className='size-6 rounded-full bg-white flex justify-center items-center text-white font-bold text-sm leading-none'>
                      <IoIosCheckmark fill='black' size={20} opacity={1} />
                    </div>
                    <p className='text-white font-medium text-base leading-none mt-1 opacity-100 hidden lg:block uppercase'>Staff</p>
                  </div>:
                  selected > 1 ?
                  <div className='lg:w-full flex justify-center lg:justify-start items-center gap-2 py-1 lg:py-4'>
                    <div className='size-6 rounded-full bg-callPurple flex justify-center items-center text-white font-bold text-sm leading-none'>
                      <IoIosCheckmark fill='white' size={20} opacity={1} />
                    </div>
                    <p className='text-white font-medium text-base leading-none mt-1 opacity-100 hidden lg:block uppercase'>Staff</p>
                  </div>:
                  <div className='lg:w-full flex justify-center lg:justify-start items-center gap-2 py-1 lg:py-4'>
                    <div className='size-6 rounded-full bg-white/20 flex justify-center items-center text-white font-bold text-sm leading-none'>
                      <IoIosCheckmark fill='white' size={20} opacity={0.5} />
                    </div>
                    <p className='text-white font-medium text-base leading-none mt-1 opacity-50 hidden lg:block uppercase'>Staff</p>
                  </div>
                }
                {
                  selected === 2 ?
                  <div className='lg:w-full flex justify-center lg:justify-start items-center gap-2 py-1 lg:py-4'>
                    <div className='size-6 rounded-full bg-white flex justify-center items-center text-white font-bold text-sm leading-none'>
                      <IoIosCheckmark fill='black' size={20} opacity={1} />
                    </div>
                    <p className='text-white font-medium text-base leading-none mt-1 opacity-100 hidden lg:block uppercase'>Date & Time</p>
                  </div>:
                  selected > 2 ?
                  <div className='lg:w-full flex justify-center lg:justify-start items-center gap-2 py-1 lg:py-4'>
                    <div className='size-6 rounded-full bg-callPurple flex justify-center items-center text-white font-bold text-sm leading-none'>
                      <IoIosCheckmark fill='white' size={20} opacity={1} />
                    </div>
                    <p className='text-white font-medium text-base leading-none mt-1 opacity-100 hidden lg:block uppercase'>Date & Time</p>
                  </div>:
                  <div className='lg:w-full flex justify-center lg:justify-start items-center gap-2 py-1 lg:py-4'>
                    <div className='size-6 rounded-full bg-white/20 flex justify-center items-center text-white font-bold text-sm leading-none'>
                      <IoIosCheckmark fill='white' size={20} opacity={0.5} />
                    </div>
                    <p className='text-white font-medium text-base leading-none mt-1 opacity-50 hidden lg:block uppercase'>Date & Time</p>
                  </div>
                }
                {
                  selected === 3 ?
                  <div className='lg:w-full flex justify-center lg:justify-start items-center gap-2 py-1 lg:py-4'>
                    <div className='size-6 rounded-full bg-white flex justify-center items-center text-white font-bold text-sm leading-none'>
                      <IoIosCheckmark fill='black' size={20} opacity={1} />
                    </div>
                    <p className='text-white font-medium text-base leading-none mt-1 opacity-100 hidden lg:block uppercase'>Information</p>
                  </div>:
                  selected > 3 ?
                  <div className='lg:w-full flex justify-center lg:justify-start items-center gap-2 py-1 lg:py-4'>
                    <div className='size-6 rounded-full bg-callPurple flex justify-center items-center text-white font-bold text-sm leading-none'>
                      <IoIosCheckmark fill='white' size={20} opacity={1} />
                    </div>
                    <p className='text-white font-medium text-base leading-none mt-1 opacity-100 hidden lg:block uppercase'>Information</p>
                  </div>:
                  <div className='lg:w-full flex justify-center lg:justify-start items-center gap-2 py-1 lg:py-4'>
                    <div className='size-6 rounded-full bg-white/20 flex justify-center items-center text-white font-bold text-sm leading-none'>
                      <IoIosCheckmark fill='white' size={20} opacity={0.5} />
                    </div>
                    <p className='text-white font-medium text-base leading-none mt-1 opacity-50 hidden lg:block uppercase'>Information</p>
                  </div>
                }
                {
                  selected === 4 ?
                  <div className='lg:w-full flex justify-center lg:justify-start items-center gap-2 py-1 lg:py-4'>
                    <div className='size-6 rounded-full bg-white flex justify-center items-center text-white font-bold text-sm leading-none'>
                      <IoIosCheckmark fill='black' size={20} opacity={1} />
                    </div>
                    <p className='text-white font-medium text-base leading-none mt-1 opacity-100 hidden lg:block uppercase'>Confirmation</p>
                  </div>:
                  selected > 4 ?
                  <div className='lg:w-full flex justify-center lg:justify-start items-center gap-2 py-1 lg:py-4'>
                    <div className='size-6 rounded-full bg-callPurple flex justify-center items-center text-white font-bold text-sm leading-none'>
                      <IoIosCheckmark fill='white' size={20} opacity={1} />
                    </div>
                    <p className='text-white font-medium text-base leading-none mt-1 opacity-100 hidden lg:block uppercase'>Confirmation</p>
                  </div>:
                  <div className='lg:w-full flex justify-center lg:justify-start items-center gap-2 py-1 lg:py-4'>
                    <div className='size-6 rounded-full bg-white/20 flex justify-center items-center text-white font-bold text-sm leading-none'>
                      <IoIosCheckmark fill='white' size={20} opacity={0.5} />
                    </div>
                    <p className='text-white font-medium text-base leading-none mt-1 opacity-50 hidden lg:block uppercase'>Confirmation</p>
                  </div>
                }
              </div>
            </div>
            {
              selected === 0 ? <ServiceBlock changeSelected={changeSelected} trainingSelected={trainingSelected} /> :
              selected === 1 ? <StaffBlock changeSelected={changeSelected} staffSelected={staffSelected} /> :
              selected === 2 ? <DateTimeBlock changeSelected={changeSelected} dateSelected={dateSelected} /> :
              selected === 3 ? <InformationBlock changeSelected={changeSelected} nameSelected={nameSelected} surnameSelected={surnameSelected} emailSelected={emailSelected} phoneSelected={phoneSelected} /> :
              selected === 4 ? <ConfirmationBlock changeSelected={changeSelected} date={date} staff={staff} training={training} nameSelected={name} surnameSelected={surname} emailSelected={email} phoneSelected={phone} /> :
              selected === 5 ? <SuccessBlock /> : null
            }
          </div>
        </section>
    </LayoutDark>
  )
}

export default DiscoveryCall

const ServiceBlock = ({changeSelected, trainingSelected}) => {

  const [trainingSel, changeTrainingSel] = useState("");

  const handleSelected = (value, training) => {
    changeSelected(value);
    trainingSelected(training);
    changeTrainingSel(training);
  }

  return (
    <div className='w-full lg:w-[calc(100%-240px)] bg-gray-100 h-full lg:min-h-[600px] flex flex-col justify-start items-start gap-0'>
      <div className='w-full px-5 h-16 flex justify-center lg:justify-start items-center border-b border-b-gray-300 bg-white'>
        <h3 className='text-lg font-bold -mb-2 uppercase'>Select service</h3>
      </div>
      <div className='w-full px-5 py-8 h-full lg:h-[472px] flex flex-col justify-start items-start gap-2 border-b border-b-gray-300'>
        <h3 className='text-base font-bold -mb-2 text-callPurple uppercase pb-6'>Trainings</h3>
        <div className="flex bg-white w-full p-5 flex-row justify-start items-center gap-5 shadow cursor-pointer border-2 border-white hover:border-green-500 transition-all rounded" onClick={() => handleSelected(1, "Foundation")}>
          <div className='size-12 rounded-full bg-[url("/images/foundation.jpg")] bg-cover bg-center'></div>
          <div className="flex flex-col justify-start items-start gap-0">
            <h5 className='text-sm font-regular'>Foundation</h5>
            <span className='text-xs bg-primary text-dark py-0.5 px-1.5 rounded-full'>30m</span>
          </div>
        </div>
        <div className="flex bg-white w-full p-5 flex-row justify-start items-center gap-5 shadow cursor-pointer border-2 border-white hover:border-green-500 transition-all rounded" onClick={() => handleSelected(1, "Tripsichore Immersion")}>
          <div className='size-12 rounded-full bg-[url("/images/mandala.jpg")] bg-cover bg-center'></div>
          <div className="flex flex-col justify-start items-start gap-0">
            <h5 className='text-sm font-regular'>Tripsichore Immersion</h5>
          </div>
        </div>
      </div>
      <div className='w-full px-5 h-16 flex justify-between items-center border-b border-b-gray-300 bg-white'>
        <button className='bg-gray-200 text-gray-500 text-center font-bold text-xs py-2 px-3.5 pb-1.5 border border-gray-300 rounded opacity-30' disabled>BACK</button>
        <button className='bg-callPurple text-white text-center font-bold text-xs py-3 px-3.5 pb-2.5 border border-callPurple rounded transition-all cursor-pointer' disabled={ trainingSel === "" ? true : false } onClick={() => handleSelected(1)}>NEXT STEP</button>
      </div>
    </div>
  )
}

const StaffBlock = ({changeSelected, staffSelected}) => {

  const [staffSel, changeStaffSel] = useState("");

  const handleClick = (value) => {
    staffSelected(value);
    changeStaffSel(value);
    document.getElementById("samDiv").classList.add("border-green-500");
    document.getElementById("samDiv").classList.remove("border-white");
  }

  const handleSelected = (value) => {
    changeSelected(value);
  }

  return (
    <div className='w-full lg:w-[calc(100%-240px)] bg-gray-100 h-full lg:min-h-[600px] flex flex-col justify-start items-start gap-0'>
      <div className='w-full px-5 h-16 flex justify-center lg:justify-start items-center border-b border-b-gray-300 bg-white'>
        <h3 className='text-lg font-bold -mb-2 uppercase'>Select staff</h3>
      </div>
      <div className='w-full px-8 py-8 h-full lg:h-[472px] flex flex-wrap flex-row justify-center lg:justify-start items-start gap-5 border-b border-b-gray-300'>
        <div id="samDiv" className="flex flex-col justify-start items-center p-5 bg-white size-52 border-2 border-white hover:border-green-500 transition-all rounded cursor-pointer relative staffCard w-full lg:w-fit" onClick={() => handleClick("Samuel Nwokeka")} style={{ boxShadow: "0 0 30px 0 rgba(0,0,0,0.05)" }}>
          <img src={samuel} alt="" className='size-20 rounded-full object-cover object-center mb-8' />
          <h5 className='font-bold uppercase text-center text-sm'>Samuel Nwokeka</h5>
          <p className='text-xs text-center text-dark/50'>hello@yogasoulmcr.co.uk</p>
        </div>
      </div>
      <div className='w-full px-5 h-16 flex justify-between items-center border-b border-b-gray-300 bg-white'>
        <button className='bg-gray-200 text-gray-500 text-center font-bold text-xs py-2 px-3.5 pb-1.5 border border-gray-300 rounded cursor-pointer' onClick={() => handleSelected(0)}>BACK</button>
        <button className='bg-callPurple text-white text-center font-bold text-xs py-3 px-3.5 pb-2.5 border border-callPurple rounded transition-all cursor-pointer' disabled={staffSel === "" ? true : false} onClick={() => handleSelected(2)}>NEXT STEP</button>
      </div>
    </div>
  )
}

const DateTimeBlock = ({changeSelected, dateSelected}) => {

  const [dateSel, changeDateSel] = useState("");

  const availableTimeslots = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((id) => {
    return {
      id,
      startTime: new Date(new Date(new Date().setDate(new Date().getDate() + id)).setHours(9, 0, 0, 0)),
      endTime: new Date(new Date(new Date().setDate(new Date().getDate() + id)).setHours(18, 0, 0, 0)),
    };
  });

  const handleSelected = (value) => {
    changeSelected(value);
  }

  const handleDate = (value) => {
    const optionsDate = { year: 'numeric', month: 'long', day: '2-digit' };
    const optionsTime = { hour: '2-digit', minute: '2-digit' };
    
    const formattedDate = value.toLocaleDateString('en-US', optionsDate);
    const formattedTime = value.toLocaleTimeString('en-US', optionsTime);
    
    dateSelected(`${formattedDate}. ${formattedTime}`);
    changeDateSel(`${formattedDate}. ${formattedTime}`);
    console.log(`${formattedDate}. ${formattedTime}`);
  }

  return (
    <div className='w-full lg:w-[calc(100%-240px)] bg-gray-100 h-full lg:min-h-[600px] flex flex-col justify-start items-start gap-0'>
      <div className='w-full px-5 h-16 flex justify-center lg:justify-start items-center border-b border-b-gray-300 bg-white'>
        <h3 className='text-lg font-bold -mb-2 uppercase'>Select Date & Time</h3>
      </div>
      <div className='w-full px-2 py-2 h-full lg:h-[472px] flex flex-wrap flex-row justify-center items-center gap-5 border-b border-b-gray-300' id="scheduler">
        <ScheduleMeeting
          borderRadius={10}
          primaryColor="#6c70dc"
          eventDurationInMinutes={30}
          availableTimeslots={availableTimeslots}
          onStartTimeSelect={({ startTime }) => handleDate(startTime)}
          startTimeListStyle="scroll-list"
        />
      </div>
      <div className='w-full px-5 h-16 flex justify-between items-center border-b border-b-gray-300 bg-white'>
        <button className='bg-gray-200 text-gray-500 text-center font-bold text-xs py-2 px-3.5 pb-1.5 border border-gray-300 rounded cursor-pointer' onClick={() => handleSelected(1)}>BACK</button>
        <button className='bg-callPurple text-white text-center font-bold text-xs py-3 px-3.5 pb-2.5 border border-callPurple rounded transition-all cursor-pointer' disabled={dateSel === "" ? true : false} onClick={() => handleSelected(3)}>NEXT STEP</button>
      </div>
    </div>
  )
}

const InformationBlock = ({changeSelected, nameSelected, surnameSelected, emailSelected, phoneSelected}) => {

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSelected = (value) => {
    changeSelected(value);
  }

  return (
    <div className='w-full lg:w-[calc(100%-240px)] bg-gray-100 h-full lg:min-h-[600px] flex flex-col justify-start items-start gap-0'>
      <div className='w-full px-5 h-16 flex justify-center lg:justify-start items-center border-b border-b-gray-300 bg-white'>
        <h3 className='text-lg font-bold -mb-2 uppercase'>Fill information</h3>
      </div>
      <div className='w-full px-8 py-8 h-full lg:h-[472px] flex flex-col justify-start items-start gap-2 border-b border-b-gray-300' id="scheduler">
        <div className="flex flex-col lg:flex-row justify-start items-center gap-5 w-full">
          <div className="flex flex-col justify-start items-start gap-2 w-full lg:w-5/12">
            <label>Name *</label>
            <input type="text" onChange={(e) => setName(e.target.value)} value={name} className='w-full p-3 border border-gray-300 focus:border-gray-400 mb-2'/>
          </div>
          <div className="flex flex-col justify-start items-start gap-2 w-full lg:w-5/12">
            <label>Surname *</label>
            <input type="text" onChange={(e) => setSurname(e.target.value)} value={surname} className='w-full p-3 border border-gray-300 focus:border-gray-400 mb-2'/>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-start items-center gap-5 w-full">
          <div className="flex flex-col justify-start items-start gap-2 w-full lg:w-5/12">
            <label>Email *</label>
            <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} className='w-full p-3 border border-gray-300 focus:border-gray-400 mb-2'/>
          </div>
          <div className="flex flex-col justify-start items-start gap-2 w-full lg:w-5/12">
            <label>Phone</label>
            <input type="text" onChange={(e) => setPhone(e.target.value)} value={phone} className='w-full p-3 border border-gray-300 focus:border-gray-400 mb-2'/>
          </div>
        </div>
      </div>
      <div className='w-full px-5 h-16 flex justify-between items-center border-b border-b-gray-300 bg-white'>
        <button className='bg-gray-200 text-gray-500 text-center font-bold text-xs py-2 px-3.5 pb-1.5 border border-gray-300 rounded cursor-pointer' onClick={() => handleSelected(2)}>BACK</button>
        <button className='bg-callPurple text-white text-center font-bold text-xs py-3 px-3.5 pb-2.5 border border-callPurple rounded transition-all cursor-pointer' disabled={
          name === "" || surname === "" || email === "" ? true : false
        } onClick={() => {
          handleSelected(4)
          nameSelected(name);
          surnameSelected(surname);
          emailSelected(email);
          phoneSelected(phone);
        }} 
        >NEXT STEP</button>
      </div>
    </div>
  )
}

const ConfirmationBlock = ({changeSelected, date, staff, training, nameSelected, surnameSelected, emailSelected, phoneSelected}) => {

  const handleSelected = (value) => {
    changeSelected(value);
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zgticu4', 'template_m5n4q33', form.current, 'q6wt88T_5i6oPlYkD')
      .then((result) => {
            console.log(result.text);
            handleSelected(5)
      }, (error) => {
          console.log(error.text);
    });
  }

  return (
    <form method='post' ref={form} onSubmit={sendEmail}  className='w-full lg:w-[calc(100%-240px)] bg-gray-100 h-full lg:min-h-[600px] flex flex-col justify-start items-start gap-0'>
      <div className='w-full px-5 h-16 flex justify-center lg:justify-start items-center border-b border-b-gray-300 bg-white'>
        <h3 className='text-lg font-bold -mb-2 uppercase'>Confirm Details</h3>
      </div>
      <div className='w-full px-8 py-8 h-full lg:h-[472px] flex flex-col justify-start items-start gap-2 border-b border-b-gray-300' id="scheduler">
        <div className="bg-white p-5 flex flex-row flex-wrap justify-center lg:justify-start items-center lg:items-start gap-0 w-full" style={{ boxShadow: "0 0 30px 0 rgba(0,0,0,0.05)" }}>
          <p className='w-full lg:w-6/12 p-1 text-sm text-center lg:text-left'><b className='font-bold text-callPurple uppercase'>Date & Time: <br className='block lg:hidden' /></b>{date}</p>
          <p className='w-full lg:w-6/12 p-1 text-sm text-center lg:text-left'><b className='font-bold text-callPurple uppercase'>Staff: <br className='block lg:hidden' /></b>{staff}</p>
          <p className='w-full lg:w-6/12 p-1 text-sm text-center lg:text-left'><b className='font-bold text-callPurple uppercase'>Location: <br className='block lg:hidden' /></b>Video Call - Yoga Soul</p>
          <p className='w-full lg:w-6/12 p-1 text-sm text-center lg:text-left'><b className='font-bold text-callPurple uppercase'>Training: <br className='block lg:hidden' /></b>{training}</p>
        </div>
      </div>
      <input type="hidden" name="name" value={nameSelected} />
      <input type="hidden" name="surname" value={surnameSelected} />
      <input type="hidden" name="email" value={emailSelected} />
      <input type="hidden" name="phone" value={phoneSelected} />
      <input type="hidden" name="date" value={date} />
      <input type="hidden" name="staff" value={staff} />
      <input type="hidden" name="training" value={training} />
      <div className='w-full px-5 h-16 flex justify-between items-center border-b border-b-gray-300 bg-white'>
        <button className='bg-gray-200 text-gray-500 text-center font-bold text-xs py-2 px-3.5 pb-1.5 border border-gray-300 rounded cursor-pointer' onClick={() => handleSelected(3)}>BACK</button>
        <button className='bg-callPurple text-white text-center font-bold text-xs py-3 px-3.5 pb-2.5 border border-callPurple rounded transition-all cursor-pointer' type='submit'>CONFIRM BOOKING</button>
      </div>
    </form>
  )
}

const SuccessBlock = () => {

  return (
    <div className='w-full lg:w-[calc(100%-240px)] bg-gray-100 h-full lg:min-h-[600px] flex flex-col justify-start items-start gap-0'>
      <div className='w-full px-5 h-16 flex justify-center lg:justify-start items-center border-b border-b-gray-300 bg-white'>
        <h3 className='text-lg font-bold -mb-2 uppercase'>Confirm Details</h3>
      </div>
      <div className='w-full px-8 py-8 h-full lg:h-[472px] flex flex-col justify-center items-center gap-2 border-b border-b-gray-300'>
        <h5 className='font-bold uppercase text-callPurple text-xl text-center'>Your call has been scheduled!</h5>
        <p>You will receive a confirmation mail.</p>
      </div>
      <div className='w-full px-5 h-16 flex justify-between items-center border-b border-b-gray-300 bg-white'>
        <a href="/" className='bg-callPurple text-white text-center font-bold text-xs py-3 px-3.5 pb-2.5 border border-callPurple rounded transition-all cursor-pointer w-full lg:w-fit'
        >GO TO HOMEPAGE</a>
      </div>
    </div>
  )
}