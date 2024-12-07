import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { ChevronRight } from "lucide-react";
import { Button } from '../ui/button';


const Intro = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row bg-gradient-to-t sm:bg-gradient-to-b from-white via-blue-200 to-white radial select-none min-h-screen">
      {/* Text Section */}
      <div data-aos="fade-up" data-aos-delay="800" className="w-full flex flex-col justify-center items-center px-6 lg:px-12 py-12 lg:py-0 text-center lg:text-left">
        <h1 className="text-gray-800 text-4xl lg:text-5xl leading-snug">
          They call me the <span className="text-blue-600">web expert.</span>
        </h1>
        <p className="text-gray-600 text-center text-lg lg:text-xl mt-4">
          Gaurav Nardia turns your dream ideas into<br/> design and code in the real world.
        </p>
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdKHR7eFRucYj7QqzezKOWCxyfkALlxAeaQ-YrGVhVJnLkP4g/viewform?usp=dialog" target='_blank' className='mt-5' >
        <Button variant="link" className='flex text-blue-500 text-lg hover:gap-3 rounded-lg'>
          Let's connect<ChevronRight/>
        </Button>
        </Link>
      </div>

      {/* Image Section */}
      <div className="w-full flex justify-center items-center relative mt-10 lg:mt-0">
        <div data-aos="zoom-in-up" className="relative w-64 h-64 lg:w-96 lg:h-96">
          <Image
            src="/assets/gaurav.png"
            width={384} // Optimized for the container size
            height={384}
            alt="Photo"
            className="rounded-2xl shadow-lg object-cover"
            priority // Ensures the image loads faster
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
