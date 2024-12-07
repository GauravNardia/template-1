import Frequently from '@/components/shared/Frequently';
import Image from 'next/image';
import React from 'react';

const Benefit = () => {
  return (
    <>
      <section data-aos="fade-up" className="w-full bg-gradient-to-b from-gray-900 via-purple-900 via-50% to-gray-900 pb-20 flex flex-col justify-center items-center">
        <div className="flex justify-center pt-20">
          <h1 className="text-4xl lg:text-6xl font-medium mb-5 text-white text-center">
            Your ultimate web partner.
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center lg:px-20 px-3 min-h-screen md:-mt-40 lg:mt-2">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 w-full lg:w-2/4 gap-3 md:px-5">
            {[
              { title: '2 years', subtitle: 'experience' },
              { title: '100%', subtitle: 'passion' },
              { title: '10+', subtitle: 'happy clients' },
              { title: '100%', subtitle: 'efficient' },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-900 flex justify-center items-center h-40 md:h-[200px] rounded-xl border-2 border-gray-600 hover:border-gray-300 transition duration-300 ease-in-out"
              >
                <h1 className="text-white text-3xl md:text-4xl lg:text-5xl px-5">
                  {item.title}
                  <div className="text-gray-500 text-xl lg:text-2xl md:text-3xl">{item.subtitle}</div>
                </h1>
              </div>
            ))}
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-2/4 mt-6 lg:mt-0 px-1">
            <div className="bg-gray-900 rounded-xl border-2 border-gray-600 hover:border-gray-300 transition duration-300 ease-in-out">
              <div className="lg:p-20 p-5">
                <h1 className="text-white text-2xl lg:text-4xl">
                  Working at the intersection of design and code.
                </h1>
                <p className="text-gray-500 text-xl lg:text-lg mt-3">
                  With years of experience in web design, I live and breathe good design and value the details that matter.
                  Say goodbye to the stressful back and forth with developers who don’t have an eye for design and rely on
                  someone who has the skills, experience, and enthusiasm to bring your visions to life the way they were
                  intended.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="w-full px-6 mt-5 lg:-mt-20 md:-mt-5 lg:px-20">
          <div className="bg-gray-900 rounded-xl border-2 border-gray-600 hover:border-gray-300 transition duration-300 ease-in-out">
            <div className="lg:p-20 p-5 md:p-10">
              <h1 className="text-white text-2xl lg:text-4xl">Stunning animations.</h1>
              <p className="text-gray-500 text-xl lg:text-lg mt-3 max-w-md">
                From subtle micro-interactions to complex "WOW" animations. I transform ideas into delightful experiences.
              </p>
            </div>
            <div className="flex justify-end lg:-mt-40">
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="rounded-md border-4 border-black lg:w-[700px] w-[300px] md:w-[400px]"
              >
                <source src="/assets/video1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <div className='grid md:grid-cols-2 grid-cols-1 gap-5 lg:px-20 px-5 py-10 bg-gradient-to-r from-black via-red-500 to-black select-none '>
      <div className='bg-gray-900 text-white md:p-10 p-5 rounded-xl border-gray-600 border-2 hover:border-gray-300 transition duration-500 ease-in-out'>
      <h1 className='text-white text-2xl lg:text-4xl text-left'>
        Clean, efficient code.
       </h1>
       <div className='mt-10 bg-gray-800 rounded-xl flex justify-end '>
        <Image src="/assets/cleancode.png" height={55} width={600} alt='clean code' />
       </div>
      </div>
      <div>
      <div className='bg-gray-900 text-white md:p-10 p-5 rounded-xl border-gray-600 border-2 hover:border-gray-300 transition duration-500 ease-in-out'>
      <h1 className='text-white text-2xl lg:text-4xl text-left'>
      Fast turnaround times.
       </h1>
       <div className='mt-10 bg-gray-800 rounded-xl text-center grid gap-5 py-20 '>
         <div className='text-5xl line-through text-gray-500 font-semibold'>Months</div>
         <div className='text-5xl bg-gradient-to-br from-purple-600 to-blue-500 font-semibold inline-block text-transparent bg-clip-text'>Weeks</div>
       </div>
      </div>
      </div>
      <div>
      <div className='bg-gray-900 text-white  rounded-xl border-gray-600 border-2 hover:border-gray-300 transition duration-500 ease-in-out'>
      <h1 className='text-white text-2xl lg:text-4xl text-left p-7'>
      Responsive development.
       </h1>
       <p className='text-gray-500 text-xl text-left lg:text-lg max-w-sm px-10'>
        Should be standard nowadays, yet often not treated with car
        </p>
       <div className=' flex justify-end h-60 p-1 md:p-0'>
        <Image src="/assets/responsive1.webp" height={255} width={300} alt='clean code' />
       </div>
      </div>
      </div>
      <div className='bg-gray-900 text-white rounded-xl border-gray-600 border-2 hover:border-gray-300 transition duration-500 ease-in-out'>

      <h1 className='text-white text-2xl lg:text-4xl md:text-right text-left p-7'>
      Lightning-fast loading times.
       </h1>
 
       <div className='flex justify-end'>
       <p className='text-gray-500 text-xl md:text-right text-left lg:text-lg max-w-sm md:px-10 px-5'>
       All my builds put extra emphasis on performance and efficiency.


        </p>
       </div>
       <div className=' flex justify-start h-60'>
        <Image src="/assets/responsive2.webp" height={255} width={300} alt='clean code' />
       </div>
      </div>
     </div>
     <section>
      <Frequently/>
     </section>
    </>
  );
};

export default Benefit;
