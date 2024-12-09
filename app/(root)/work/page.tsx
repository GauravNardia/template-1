"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { projects, testimonials } from "@/constants";
import Benefit from "../benefit/page";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Work = () => {
  const [displayProjects, setDisplayProjects] = useState(4);
  const projectsToShow = projects.slice(0, displayProjects);

  return (
    <>
    <section data-aos="fade-up"  className="w-full flex flex-col items-center py-8 mt-12 mb-20">
      <h1 className="sm:text-4xl text-3xl text-center">
        Work That Feels Like a Warm Hug
      </h1>
      <p className='sm:text-xl text-center sm:block text-sm px-4 text-gray-600 mt-3 paragraph'>every project is designed to comfort, uplift, and inspire</p>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-5 w-full max-w-6xl p-2 rounded-xl">
         
      {projectsToShow.map((project, index) => (
  <div
    key={index}
    className="rounded-2xl flex flex-col gap-5 p-5 shadow-lg bg-white transition-transform duration-300 hover:scale-105 hover:shadow-xl"
  >
<Link href={project.url} target="_blank" className="w-full">
  <div className="relative"> {/* Fixed container height */}
    <Image
      src={`/assets/${project.img}`}
      alt="project thumbnail"
      width={500}        // Fixed width
      height={300}       // Fixed height
      className="rounded-2xl object-cover" // Keeps the image rounded corners
    />
  </div>
 </Link>


    <div className="flex flex-wrap gap-2 mt-3">
      {project.badges1 && (
        <Badge variant="secondary" className="bg-blue-100 text-blue-600">
          {project.badges1}
        </Badge>
      )}
      {project.badges2 && (
        <Badge variant="secondary" className="bg-green-100 text-green-600">
          {project.badges2}
        </Badge>
      )}
      {project.badges3 && (
        <Badge variant="secondary" className="bg-purple-100 text-purple-600">
          {project.badges3}
        </Badge>
      )}
    </div>
    <h1 className="text-gray-800 text-lg mt-2">{project.heading}</h1>
  </div>
))}

</div>

      {projects.length > displayProjects && (
        <Button
        variant="secondary"
          className="mt-6 px-6 py-2 text-2xl text-blue-500 font-medium bg-white hover:bg-gray-100"
          onClick={() => setDisplayProjects(displayProjects + 4)}
        >
          Load More +
        </Button>
      )}
    </section>

    <section data-aos="fade-up" className="mt-20">
    <h1 className="sm:text-4xl text-3xl text-center p-3">
        People Who Already Felt The Digital Hug
      </h1>
      <div className="mt-10 flex items-center justify-center">
      <AnimatedTestimonials  testimonials={testimonials} />
      </div>
    </section>
      <Benefit/>
    </>
  );
};

export default Work;
