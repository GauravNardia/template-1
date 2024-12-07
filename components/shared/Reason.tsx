'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Tilt } from 'react-tilt'

const Reason = () => {
  const defaultOptions = {
    reverse: false,
    max: 30,
    perspective: 1000,
    speed: 2,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  };

  return (
    <>
      <div className='mt-20 select-none text-center'>
        <h1 className='text-5xl md:text-7xl bg-gradient-to-br from-purple-600 to-orange-500 font-semibold text-transparent bg-clip-text'>
          8 reasons
        </h1>
        <h2  className='text-3xl md:text-7xl mt-2 font-semibold text-gray-800'>
          You must have a website
        </h2>
      </div>

      <div className=' max-w-5xl px-5 mt-20'>
        <div className="container mx-auto bg-gradient-to-br from-purple-600 to-orange-500 rounded-2xl p-6">
          <p className='text-white font-semibold text-xl'>Reason #1</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left box */}
            <div className="p-6 text-white text-center md:text-left">
              <h3 className='text-3xl md:text-4xl mt-5'>Marketing and Branding.</h3>
              <p className='text-lg text-gray-300 mt-5 md:px-8'>
                Your website serves as a powerful marketing tool, enabling you to promote your brand, products, or services through various channels such as search engines, social media, email campaigns, and more.
              </p>
            </div>

            {/* Right box */}
            <div className="p-6 text-white text-left">
              <div className='space-y-3'>
                {['Brand Awareness', 'Content Marketing', 'SEO', 'Digital Branding'].map((item, index) => (
                  <div key={index} className='flex items-center'>
                    <Image src="/assets/tick.svg" height={28} width={45} alt='tick' />
                    <p className='text-xl md:text-2xl'>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='grid md:grid-cols-2 grid-cols-1 mt-10 gap-8 select-none lg:px-40 px-5'>
    
    <div className="container mx-auto md:mt-40 rounded-2xl shadow-lg border-2 lg:pb-60 pb-20 px-3">
        <p className='text-gray-700 flex justify-start py-10 font-semibold text-xl'> Reason #2</p>
      <div className="mt-10">
              <div className='px-5 text-left font-semibold flex justify-center text-gray-700 md:text-4xl text-3xl flex justify-center items-center '>
                 It gives you online presence.
              </div>
              <div className='text-left text-xl flex justify-center mt-5 px-5 w-full'>
            <p className=' text-lg text-gray-500'>
               It provides a convenient way for customers to find information about your products or services anytime, anywhere.
             </p>
           </div>
        
      </div>
      </div> 


      <div className="container mx-auto md:mt-40 rounded-2xl shadow-lg border-2 lg:pb-60 pb-20 px-3">
        <p className='text-gray-700 flex justify-start py-10 font-semibold text-xl'> Reason #3</p>
      <div className="mt-10">
              <div className='px-5 text-left font-semibold flex justify-center text-gray-700 md:text-4xl text-3xl flex justify-center items-center '>
                Your stunning website builds Credibility and Trust.
              </div>
              <div className='text-left text-xl flex justify-center mt-5 px-5 w-full'>
            <p className=' text-lg text-gray-500'>
            A well-designed website conveys professionalism and establishes trust with potential customers.
             </p>
           </div>
        
      </div>
      </div>
      
      <div className="container mx-auto md:mt-40 rounded-2xl shadow-lg border-2 lg:pb-60 pb-20 px-3">
        <p className='text-gray-700 flex justify-start py-10 font-semibold text-xl'> Reason #4</p>
      <div className="mt-10">
              <div className='px-5 text-left font-semibold flex justify-center text-gray-700 md:text-4xl text-3xl flex justify-center items-center '>
                24/7 availability.
              </div>
              <div className='text-left text-xl flex justify-center mt-5 px-5 w-full'>
            <p className='  text-lg text-gray-500'>
            Unlike physical stores, your website is accessible 24/7, allowing customers to browse, shop, or inquire at their convenience.             </p>
           </div>
        
      </div>
      </div>


      <div className="container mx-auto md:mt-40 rounded-2xl shadow-lg border-2 lg:pb-60 pb-20 px-3">
        <p className='text-gray-700 flex justify-start py-10 font-semibold text-xl'> Reason #5</p>
      <div className="mt-10">
              <div className='px-5 text-left font-semibold flex justify-center text-gray-700 md:text-4xl text-3xl flex justify-center items-center '>
              Helps in customer engagement.
              </div>
              <div className='text-left text-xl flex justify-center mt-5 px-5 w-full'>
            <p className=' text-lg text-gray-500'>
            Customized content and recommendations based on user behavior enhance the user experience and encourage repeat visits.             </p>
           </div>
        
      </div>
      </div>


    <div className="container mx-auto md:mt-40 rounded-2xl shadow-lg border-2 lg:pb-60 pb-20 px-3">
        <p className='text-gray-700 flex justify-start py-10 font-semibold text-xl'> Reason #6</p>
      <div className="mt-10">
              <div className='px-5 text-left font-semibold flex justify-center text-gray-700 md:text-4xl text-3xl flex justify-center items-center '>
                 Gives you competitive advantage.
              </div>
              <div className='text-left text-xl flex justify-center mt-5 px-5 w-full'>
            <p className='text-lg text-gray-500'>
            Having a website sets you apart from competitors who rely solely on offline channels, giving you a competitive edge.             </p>
           </div>
        
      </div>
      </div>


      <div className="container mx-auto md:mt-40 rounded-2xl shadow-lg border-2 lg:pb-60 pb-20 px-3">
        <p className='text-gray-700 flex justify-start py-10 font-semibold text-xl'> Reason #7</p>
      <div className="mt-10">
              <div className='px-5 text-left font-semibold flex justify-center text-gray-700 md:text-4xl text-3xl flex justify-center items-center '>
              Gives you customer's data.
              </div>
              <div className='text-left text-xl flex justify-center mt-5 px-5 w-full'>
            <p className=' text-lg text-gray-500'>
            Website analytics provide valuable insights into visitor behavior, preferences, demographics, and traffic sources.             </p>
           </div>
           <div className='text-left text-xl flex justify-center mt-5 w-full'>
              <Image src="/assets/data.svg" height={55} width={355} alt='avatar' />
           </div>
        
      </div>
      </div> 


      <div className="container mx-auto md:mt-40 rounded-2xl shadow-lg border-2 lg:pb-60 pb-20 px-3">
        <p className='text-gray-700 flex justify-start py-10 font-semibold text-xl'> Reason #8</p>
      <div className="mt-10">
              <div className='px-5 text-left font-semibold flex justify-center text-gray-700 md:text-4xl text-3xl flex justify-center items-center '>
              Cost-effectiveness.
            </div>
              <div className='text-left text-xl flex justify-center mt-5 px-5 w-full'>
            <p className=' text-lg text-gray-500'>
            Compared to traditional marketing channels, maintaining a website is relatively cost-effective, requiring minimal overhead for hosting and maintenance.             </p>
           </div>
        
      </div>
      </div>
     <Link href="/">
      <Tilt options={defaultOptions}>
      <div className="container mx-auto md:mt-40 rounded-2xl shadow-lg border-2  bg-gradient-to-br from-purple-600 to-orange-500">
        <p className='text-white flex justify-start py-10 font-semibold text-xl px-3'>Bonus Reason</p>
      <div className="mt-10">
              <div className='px-5 text-left font-semibold flex justify-center text-white md:text-4xl text-3xl flex justify-center items-center '>
               We might work together soon... 
              </div>
              <div className='text-left text-xl flex justify-center mt-5 px-5 w-full'>
              <Image src="/assets/avatar.webp" height={55} width={355} alt='avatar' />
           </div>
        
      </div>
      </div>
      </Tilt>
      </Link>


    </div>

    </>
  )
}

export default Reason
