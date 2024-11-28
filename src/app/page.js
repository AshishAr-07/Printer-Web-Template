import React from 'react'
import { Banner } from './_component/Banner'
import Product from './_component/Product';
import Feature from './_component/Feature';
import Cta from './_component/Cta';
import Testimonial from './_component/Testimonial';
import Icon from './_component/Icon';
import Aboutus from './_component/Aboutus';
import Faq from './_component/Faq';

const items = [
  {
    image: "/Pslider.webp",
    heading: "Printing Solutions You Can Rely On.",
    shortdesc:
      "Elevate your printing experience with our range of dependable and affordable printers designed for home and office",
  },
  {
    image: "/Pslider2.webp",
    heading: "Printing Solutions You Can Rely On.",
    shortdesc:
      "Elevate your printing experience with our range of dependable and affordable printers designed for home and office",
  },
];

export default function page() {
  return (
    <>
    <Banner items={items} />
    <div className='py-4'></div>
    <Aboutus activepage='homepage' />
    <Product activepage='homepage' />
    <Feature/>
    <Cta/>
    <Testimonial/>
    <div className='py-8'></div>
    <Faq/>
    <div className='py-8'></div>
    <Icon/>
    </>
  )
}
