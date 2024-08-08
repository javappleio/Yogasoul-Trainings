import React from 'react'
import Layout from './layout/Layout'

const TermnsConditions = () => {
  return (
    <Layout>
        <section className='w-full h-[60svh] bg-[url("/images/book_banner.png")] bg-cover bg-center relative flex justify-center items-center'>
            <div className="w-full h-full absolute top-0 left-0 bg-black/50 z-10"></div>
            <div className="container relative z-20 px-4">
                <h1 className='text-white text-4xl lg:text-6xl font-bold uppercase'>Terms & Conditions</h1>
            </div>
        </section>
        <section className='py-10 lg:py-20 container mx-auto px-4'>
            <p className='text-sm text-gray-600 pb-5 leading-[2.2]'>Teacher Training T&C’s</p>
            <p className='text-sm text-gray-600 pb-5 leading-[2.2]'>Refund policy</p>
            <p className='text-sm text-gray-600 pb-5 leading-[2.2]'>Only successful applicants will be invited to pay a deposit of £600 to secure their place on the course.<br />All deposits are non-refundable.<br />Full payment is due 2 months before the start of the course<br />Notice of Cancellation</p>
            <p className='text-sm text-gray-600 pb-5 leading-[2.2]'>In the event that yoga soul cancels the training, all money paid will be refunded.<br />If a student wishes to cancel their place they must give yoga soul written notice via email: <a href="mailto:hello@yogasoulmcr.co.uk">hello@yogasoulmcr.co.uk</a><br />If applicant cancels less than 2 months before the start date, 100% of the deposit will be retained by yoga soul and however it is at their discretion in regards to other moneys paid as to whether and refunds are available or money is transferrable to another course.<br />If the applicant cancels more than 2 months before the start date it yoga soul reserves the right to keep 100% of deposit, however it is at their discretion that if a replacement is found a refund of 50% of the deposit would be available. All other money paid will be refunded.<br />The program will not give any refunds or credits after the training starts.</p>
            <p className='text-sm text-gray-600 pb-5 leading-[2.2]'>Bad conduct</p>
            <p className='text-sm text-gray-600 pb-5 leading-[2.2]'>If a student is asked to leave due to violation of the code of conduct, harassment, bullying or any other behaviour that is inappropriate or disruptive to the welfare of the program or to fellow students no refunds will be given.</p>
        </section>
    </Layout>
  )
}

export default TermnsConditions