'use client'
import React ,{useRef} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Wrapper from './Wrapper'
import { useInView } from "framer-motion";


export default function Aboutus({ activepage = "product" }) {
    const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
    return (
        <>
            <Wrapper>
                <div ref={ref} className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <section  
                   
                    >
                        <h1 
                         style={{
                            transform: isInView ? "none" : "translateX(-150px)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
                            
    
                          }} className='text-4xl md:text-5xl pb-4'>About Us</h1>
                        <p 
                         style={{
                            transform: isInView ? "none" : "translateX(-150px)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
                            
    
                          }}>Welcome to PrintS, your trusted partner in delivering state-of-the-art factory printing solutions. With a deep commitment to innovation and quality, we specialize in providing advanced printing equipment and comprehensive services tailored to the diverse needs of industrial and commercial printing operations. We understand the fast-paced demands of the printing industry. Whether you&apos;re producing packaging materials, promotional banners, or large-scale commercial prints, we offer reliable, high-performance printers designed to maximize efficiency, reduce downtime, and ensure exceptional print quality every time.<br />
                            At PrintS, we bring decades of experience to the road construction machinery market. Our team is dedicated to understanding the unique needs of contractors, engineers, and construction companies, ensuring we provide cutting-edge solutions that enhance productivity, efficiency, and sustainability.</p>
                        {activepage === "homepage" && (<button 
                         style={{
                            transform: isInView ? "none" : "translateX(-150px)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
                            
    
                          }} className='mt-8'><Link href="/about" className=' py-3 px-8 text-white bg-[var(--maincolor)] rounded-lg' >Know More</Link></button>)}

                    </section>
                    <section >
                        <Image alt='about image' height={500} width={600} src='/Pabs.png' />
                       
                    </section>
                </div>

            </Wrapper>
        </>
    )
}
