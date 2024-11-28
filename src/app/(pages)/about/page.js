import Aboutus from '@/app/_component/Aboutus'
import Breadcrum from '@/app/_component/Breadcrum'
import Feature from '@/app/_component/Feature'
import Testimonial from '@/app/_component/Testimonial'
import React from 'react'

export default function page() {
  return (
    <>
    <Breadcrum activepage= 'About' />
    <div className='py-8'></div>
    <Aboutus />
    <Feature/>
    <Testimonial/>
    <div className='py-8'></div>
    </>
  )
}
