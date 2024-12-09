"use client";
import Video from "@/components/shared/Video";
import { MoveUpRight } from "lucide-react";
import Link from "next/link";
import Intro from "@/components/shared/Intro";
import Work from "./work/page";
import About from "@/components/shared/About";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";
import { formatTime } from "@/lib/utils";

const Home = () => {
  const TEN_HOURS = 10 * 60 * 60; // 10 hours in seconds
  const [timeLeft, setTimeLeft] = useState(TEN_HOURS);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Animation easing
      once: false, // Whether animation should happen only once
    });


    // Retrieve the previous timer state from localStorage
    const savedTime = localStorage.getItem("countdownStartTime");
    const currentTime = Date.now();

    if (savedTime) {
      const elapsedTime = Math.floor((currentTime - parseInt(savedTime)) / 1000);
      const remainingTime = TEN_HOURS - elapsedTime;

      if (remainingTime > 0) {
        setTimeLeft(remainingTime);
      } else {
        setTimeLeft(TEN_HOURS); // Restart timer if 10 hours have passed
        localStorage.setItem("countdownStartTime", currentTime.toString());
      }
    } else {
      localStorage.setItem("countdownStartTime", currentTime.toString());
    }

    // Timer logic
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev > 1) {
          return prev - 1;
        } else {
          // Reset timer when it reaches zero
          localStorage.setItem("countdownStartTime", Date.now().toString());
          return TEN_HOURS;
        }
      });
    }, 1000);

    return () => clearInterval(timer); // Cleanup timer on component unmount
  }, []);

  return (
    <>
 <section className="w-full flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-sky-500 mt-8 p-3  shadow-md">
  <h1 className="text-white font-regular">
    20% Discount Coming To An End, Hurry Up : {formatTime(timeLeft)}
  </h1>
</section>

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
          href="https://docs.google.com/forms/d/e/1FAIpQLSeEba1UP7XHu6ixYcxGKSDSmOjZq1aCeRN57psw8CPvbHQ4cg/viewform?usp=dialog"
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
    </>
  );
};

export default Home;
