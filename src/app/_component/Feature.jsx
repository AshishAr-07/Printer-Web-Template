'use client'
import React,{useRef} from 'react'
import Wrapper from './Wrapper'
import { BsPrinter } from "react-icons/bs";
import { PiSealCheckFill } from "react-icons/pi";
import { RiCustomerService2Line } from "react-icons/ri";
import { useInView } from "framer-motion";


const feature = [
    {
        title: "Printer Services",
        icon: BsPrinter,
        desc: "Our printers stands out with its commitment to delivering high-quality, customized print solutions specialized to your needs.",
    },
    {
        title: "Quality Assurance  ",
        icon: PiSealCheckFill,
        desc: "Our printers stands out with its commitment to delivering high-quality, customized print solutions specialized to your needs.",
    },
    {
        title: "Customer Support",
        icon: RiCustomerService2Line,
        desc: "Our printers stands out with its commitment to delivering high-quality, customized print solutions specialized to your needs.",
    },
]

export default function Feature() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <>
            <Wrapper>
                <div ref={ref} className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    {feature.map((item, index) => (
                        <div style={{
                            scale: isInView ? "none" : 1.5,
                            opacity: isInView ? 1 : 0,
                            transition: "scale 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",


                        }} key={index} className='flex flex-col gap-3 cursor-pointer lg:p-12 p-6 p shadow-md border-b-2 rounded hover:border-[var(--maincolor)] justify-center items-center'>
                            <span className='p-5 rounded-full bg-[var(--maincolor)]'><item.icon color='white' size={50} /></span>
                            <h1 className='text-2xl font-bold mt-2 text-center'>{item.title}</h1>
                            <p className='text-center'>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </Wrapper>
        </>
    )
}
