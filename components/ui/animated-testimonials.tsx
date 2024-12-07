"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);
  const [isClient, setIsClient] = useState(false);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => index === active;

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => (!isClient ? 0 : Math.floor(Math.random() * 21) - 10);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-16">
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        {/* Image Section */}
        <div className="relative h-64 sm:h-80 lg:h-96 w-full">
          <AnimatePresence>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.src}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  rotate: randomRotateY(),
                }}
                animate={{
                  opacity: isActive(index) ? 1 : 0.7,
                  scale: isActive(index) ? 1 : 0.95,
                  rotate: isActive(index) ? 0 : randomRotateY(),
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  rotate: randomRotateY(),
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                }}
                className={`absolute inset-0 transition-all ${
                  isActive(index) ? "z-20" : "z-10"
                }`}
              >
                <Image
                  src={testimonial.src}
                  alt={testimonial.name}
                  width={500}
                  height={500}
                  draggable={false}
                  className="h-full w-full rounded-xl object-cover"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-between">
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">
              {testimonials[active].name}
            </h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-neutral-400">
              {testimonials[active].designation}
            </p>
            <motion.p className="text-base sm:text-lg mt-6 text-gray-700 dark:text-neutral-300">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="h-8 w-8 rounded-full bg-gray-200 dark:bg-neutral-800 flex items-center justify-center group"
            >
              <IconArrowLeft className="h-5 w-5 text-gray-600 dark:text-neutral-400 group-hover:scale-110 transition-transform" />
            </button>
            <button
              onClick={handleNext}
              className="h-8 w-8 rounded-full bg-gray-200 dark:bg-neutral-800 flex items-center justify-center group"
            >
              <IconArrowRight className="h-5 w-5 text-gray-600 dark:text-neutral-400 group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
