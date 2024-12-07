import React from 'react';
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardHeader } from "@/components/ui/card";
import Link from 'next/link';
import Footer from './Footer';

const About = () => {
  return (
    <>
    <div className='mt-[70px] grid md:grid-cols-2 grid-cols-1 gap-5 lg:px-20 px-5 w-full'>
      {/* Link to Why Website */}
      <Link href="why-website">
        <CardHeader className='flex border-2 rounded-2xl shadow-lg'>
          <div className='lg:w-80 w-40 lg:mt-10'>
            <h1 className='flex justify-start lg:px-10 md:text-2xl text-xl'>Why website</h1>
            <p className='flex justify-start lg:px-10 lg:text-xl text-md md:text-lg text-gray-600'>
              8 reasons why you must have a website
            </p>
          </div>
          <div className='flex justify-end items-center rounded-2xl'>
            <div className='text-9xl -mt-[100px] px-5 text-gray-700 pb-6'>8</div>
          </div>
        </CardHeader>
      </Link>

      {/* About Gaurav */}
      <Dialog>
        <DialogTrigger asChild className='cursor-pointer' >
          <Card className="py-5 rounded-xl shadow-lg">
            <CardHeader className='flex'>
              <div className='lg:w-80 w-40 lg:mt-10'>
                <h1 className='flex justify-start lg:px-10 md:text-2xl text-xl'>About Gaurav</h1>
                <h2 className='flex justify-start lg:px-10 lg:text-xl text-md md:text-lg text-gray-600'>
                  Learn more about Gaurav
                </h2>
              </div>
              <div className='flex justify-end items-center'>
                <Image
                  className="lg:h-[160px] h-[100px] lg:w-[150px] w-[100px] lg:-mt-[120px] -mt-[100px] rounded-2xl"
                  src="/assets/gaurav.png"
                  width={150}
                  height={150}
                  alt="Profile"
                  priority
                />
              </div>
            </CardHeader>
          </Card>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[500px] max-w-[390px] mt-2 rounded-2xl">
  <DialogHeader>
    <DialogTitle className="sm:text-3xl text-xl text-center mb-5">About Gaurav</DialogTitle>
    <div className="mt-2 w-full flex flex-col items-center justify-center">
      <div className="w-[120px] h-[120px] lg:w-[120px] lg:h-[160px] sm:h-[110px] sm:h-[100px] rounded-full">
        <Image
          className="inline-block lg:h-[140px] lg:w-[140px] h-[120px] w-[120px] rounded-2xl ring-2 ring-white"
          src="/assets/gaurav.png"
          width={150}
          height={150}
          alt="Profile"
        />
      </div>
    </div>
    <DialogDescription className="text-center text-lg mt-2 px-5">
    My name is Gaurav Nardia, and I hail from the vibrant land of India. I am a passionate individual deeply immersed in the realms of web design and full-stack development. Coding is not just a skill for me, it's my true passion and a medium through which I express my creativity and innovation.
    For the past 2 years, I've been working full-time as an independent web developer with clients I could only dream of a while ago. I deeply care about honesty and transparency; it’s at the center of everything I do. My passion is building remarkable things with companies and teams who share the same care and commitment as I do.    </DialogDescription>
  </DialogHeader>
  </DialogContent>

      </Dialog>

    </div>
        <Footer/>
    </>
  );
}

export default About;
