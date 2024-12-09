import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Image from 'next/image';

const Frequently = () => {
  return (
    <main className="bg-white p-5 sm:p-10 lg:p-20 rounded-2xl z-2">
      <section className="mt-20">
        <h1 className="text-4xl text-center">Frequently Asked Questions</h1>
      </section>

      {/* Accordion Section */}
      <section className="mt-20 w-full max-w-6xl lg:px-96 md:px-10 px-1">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl sm:text-2xl text-left hover:no-underline">What services do you offer?</AccordionTrigger>
            <AccordionContent className="text-lg sm:text-xl text-gray-500 text-left">
              Our focus is to provide you the best web design and web development. Additionally, I offer consulting services during your design phase.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-xl sm:text-2xl text-left hover:no-underline">Do you require finalized designs?</AccordionTrigger>
            <AccordionContent className="text-lg sm:text-xl text-gray-500 text-left">
              No. I like to get involved early in the process to ensure a smooth workflow between design & development and to identify potential difficulties from the dev-end.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-xl sm:text-2xl text-left hover:no-underline">How much does a project cost?</AccordionTrigger>
            <AccordionContent className="text-lg sm:text-xl text-gray-500 text-left">
              Most of my projects range between $1,000 and $3,000. My minimum engagement fee is $1,000.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-xl sm:text-2xl text-left hover:no-underline">Do you work internationally?</AccordionTrigger>
            <AccordionContent className="text-lg sm:text-xl text-gray-500 text-left">
              Yes. I'm based in India and serve clients worldwide.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-xl sm:text-2xl text-left hover:no-underline">What are the payment terms?</AccordionTrigger>
            <AccordionContent className="text-lg sm:text-xl text-gray-500 text-left">
              50% upfront and 50% after launch. This can be adjusted based on the project size.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger className="text-xl sm:text-2xl text-left hover:no-underline">How long does a project take?</AccordionTrigger>
            <AccordionContent className="text-lg sm:text-xl text-gray-500 text-left">
              Most of my projects take between 2 weeks and 2 months.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger className="text-xl sm:text-2xl text-left hover:no-underline">Do you take small hourly work?</AccordionTrigger>
            <AccordionContent className="text-lg sm:text-xl text-gray-500 text-left">
              No, I only do fixed-fee projects with a minimum size of one page.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Background Image & Call to Action */}
      <section className="relative mt-20 rounded-xl">
       <Image
    src="/assets/bg2.jpg"
    width={700}
    height={700}
    alt="Background"
    className="object-cover w-full h-40 md:h-80 rounded-2xl hover:brightness-100 transition duration-300 ease-in brightness-50"
  />
  <div className="absolute inset-0 flex flex-col items-center justify-center">
    <h1 className="text-3xl font-medium text-white text-center">
      Interested in working together?
    </h1>
    <div className="mt-5">
    <Dialog>
  <DialogTrigger asChild>
    <Button className="text-white sm:text-3xl text-xl bg-transparent hover:bg-transparent underline">
      Start a project request
    </Button>
  </DialogTrigger>
  <DialogContent className="sm:max-w-[500px] max-w-[390px] mt-2 rounded-2xl">
  <DialogHeader>
    <DialogTitle className="sm:text-3xl text-xl text-center mb-5">Request Form</DialogTitle>
    <div className="mt-2 w-full flex flex-col items-center justify-center">
      <div className="w-[120px] h-[120px] lg:w-[120px] lg:h-[160px] sm:h-[110px] sm:h-[100px] rounded-full">
        <Image
          className="inline-block lg:h-[140px] lg:w-[140px] h-[120px] w-[120px] rounded-full ring-2 ring-white"
          src="/assets/gaurav.png"
          width={150}
          height={150}
          alt="Profile"
        />
      </div>
    </div>
    <DialogDescription className="text-center flex flex-col mt-2 px-5 w-full flex flex-col justify-center items-center">
      This form clarifies important questions in advance. Please be as precise as possible, as it saves us both time.
       <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeEba1UP7XHu6ixYcxGKSDSmOjZq1aCeRN57psw8CPvbHQ4cg/viewform?usp=dialog" target='_blank'
 className='w-full max-w-5 mb-5 flex justify-center items-center'>
       <Button className='mt-3 bg-blue-500 hover:bg-blue-400'>Fill the Form</Button>
       </Link>
       Don't like forms? <Link href="mailto:gauravnardia07@gmail.com" className="text-blue-500">gauravnardia07@gmail.com</Link>
    </DialogDescription>
  </DialogHeader>
  </DialogContent>
</Dialog>

       </div>
     </div>
      </section>

    </main>
  );
};

export default Frequently;
