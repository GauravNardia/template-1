"use client";

import Video from "@/components/shared/Video";
import { MoveUpRight } from "lucide-react";
import Link from "next/link";
import Intro from "@/components/shared/Intro";
import Work from "./work/page";
import About from "@/components/shared/About";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Home = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Animation easing
      once: false, // Whether animation should happen only once
    });
  }, []);

  return (
    <section className="mt-20 sm:mt-32 flex flex-col justify-center items-center w-full">
      <div className="text-3xl flex flex-col justify-center w-full sm:text-5xl text-center">
        <h1 data-aos="fade-up" data-aos-delay="100" className="text-transparent sm:h-14 bg-gradient-to-r from-blue-900 to-sky-600 bg-clip-text">
          What Will They Think
        </h1>
        <h1 data-aos="fade-up" data-aos-delay="200" className="mt-2 sm:h-14 h-15 text-transparent bg-gradient-to-t from-black to-blue-900 bg-clip-text">
          When They See Your Website?
        </h1>
        <p data-aos="fade-up" data-aos-delay="300" className="sm:text-xl hidden sm:block text-sm px-4 text-gray-600 paragraph">
          First impressions are everything. Design that sparks curiosity <br />{" "}
          and a platform that delivers.
        </p>
        <p
          data-aos="fade-up" data-aos-delay="300"
          className="sm:text-xl sm:hidden text-sm px-4 text-gray-600 mt-1 paragraph"
        >
          First impressions are everything. Design that sparks curiosity and a
          platform that delivers.
        </p>
      </div>

      <div data-aos="fade-up" data-aos-delay="350" className="mt-6">
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSdKHR7eFRucYj7QqzezKOWCxyfkALlxAeaQ-YrGVhVJnLkP4g/viewform?usp=dialog"
          target="_blank"
          className="flex gap-2 items-center text-blue-500 text-xl hover:text-blue-300 hover:underline"
        >
          Start Project Request <MoveUpRight size={20} />
        </Link>
      </div>

      <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="3500"
     data-aos-once="false"
     className="rounded-2xl p-3 flex justify-center mt-20">
        <Video
          src="/assets/video1.mp4"
          className="w-full max-w-5xl rounded-2xl"
        />
      </div>

      <Intro />
      <Work />
      <About/>
    </section>
  );
};

export default Home;
