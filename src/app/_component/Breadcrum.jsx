import React from 'react'
import Wrapper from './Wrapper'
import Link from 'next/link'

export default function Breadcrum({activepage}) {
  return (
    <div className='w-full py-12 md:py-16 bg-[var(--seccolor)] '>
     <Wrapper>
        <div className='flex justify-between items-center'>
            <h1 className='text-4xl'> {activepage}</h1>
            <span>
            <h3 className='text-xl cursor-pointer'><Link href='/'>Home</Link>  /  {activepage}</h3>
            </span>
        </div>
     </Wrapper>
    </div>
  )
}
