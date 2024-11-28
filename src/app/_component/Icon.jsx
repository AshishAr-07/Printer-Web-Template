import Link from 'next/link';
import React from 'react'
import { IoLogoWhatsapp } from "react-icons/io5";

export default function Icon() {
  return (
    <div className='fixed right-4 bottom-4 p-2 rounded-full bg-[#25D366]'><Link href='#' ><IoLogoWhatsapp  size={40} color='white'/></Link></div>
  )
}
