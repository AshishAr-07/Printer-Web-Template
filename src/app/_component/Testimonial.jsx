'use client'
import React, { useEffect, useState } from 'react'
import { PiQuotesFill } from "react-icons/pi";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const testimonial = [
  {
    name : "Rakesh Sharma" ,
    desc : "PrintS printers stands out with its commitment to delivering high-quality, customized print solutions. I am so satisfied with their service.PrintS printers stands out with its commitment to delivering high-quality, customized print solutions. I am so satisfied with their service."
  },
  {
    name : "Ramesh Jha" ,
    desc : "PrintS truly stands out with its dedication to providing top-notch, customized print solutions. Their topclass service exceeded my expectations.PrintS printers stands out with its commitment to delivering high-quality, customized print solutions. I am so satisfied with their service."
  },
  {
    name : "Harshal patel" ,
    desc : "PrintS has redefined my expectations for printing services. Their attention to detail, exceptional quality, and personalized solutions are unmatched.PrintS printers stands out with its commitment to delivering high-quality, customized print solutions. I am so satisfied with their service."
  },
]
export default function Testimonial() {
  const [currentIndex , setCurrentIndex] = useState(0);
  const [transition,setTransition] = useState(false)
  const currentTestimonial = testimonial[currentIndex]

  const prevSlide = () =>{
    setTransition(true);
    setCurrentIndex((slide)=> (slide -1 + testimonial.length) % testimonial.length )
  }
  const nextSlide = () =>{
    setTransition(true);
    setCurrentIndex((slide)=> (slide + 1) % testimonial.length )
  }
  useEffect(() => {
    const transitionTimer = setTimeout(() => {
      setTransition(false);
    }, 500);

    return () => clearTimeout(transitionTimer);
  }, [currentIndex]);
  return (
    <>
    <div className='w-full flex flex-col justify-center items-center '><h1 className='text-4xl md:text-5xl '>What Client Says ?</h1>
    <span className='bg-[var(--maincolor)] w-32 h-1 rounded-full mt-2 '></span></div>
    
      <section className='relative max-w-screen-xl py-16 mx-auto'>
         <div className={`w-2/3 shadow-md border-b-2 border-[var(--maincolor)] rounded-lg mx-auto  transition-all duration-300 ${transition ? 'opacity-0 translate-y-10 ' : 'opacity-100 translate-y-0'}`}>
         <div
            className="flex flex-col gap-6 p-12 justify-center items-center"   >
            <span>
              <PiQuotesFill
                size={50}
              />
            </span>
            <p className='text-center'>
            {currentTestimonial.desc}
            </p>
            <h2 className='text-2xl'>
             {currentTestimonial.name}
            </h2>
          </div>
        
         </div>
         <button onClick={prevSlide} className='absolute left-2 top-1/2 transform -translate-y-1/2 p-4 rounded-full'><MdOutlineArrowBackIosNew color='black' size={22}/></button>
         <button onClick={nextSlide} className='absolute right-2 top-1/2 transform -translate-y-1/2 p-4 rounded-full'><MdOutlineArrowForwardIos color='black' size={22}/></button>
      </section>
    </>
  )
}