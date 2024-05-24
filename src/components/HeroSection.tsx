import Link from 'next/link'
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { Button } from "./ui/moving-border";

const HeroSection = () => {
  return (
    // below : py-10 md:py-10'
    <div className='h-auto md:h-[43rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto body' style={{ paddingTop: '120px', background: 'linear-gradient(to bottom, var(--background-start-color), var(--background-end-color))' }}>


      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
        

    <div className='p-4 relative z-10 w-full text-center'>
    <h1 className='mt-20 md:mt-0 text-4xl md:text-7xl font-bold text-white'>Data Simplifies, Plastic<br/> Reused for Earth</h1>
        <p className='mt-4 font-normal text-base md:text-lg  text-gray-100 max-w-lg mx-auto'>Join us in turning plastic trash into valuable resources for a greener tomorrow.</p>
    </div>

    <div className="mt-4 flex space-x-10">

    <Link href={'#'}>
    <Button
      borderRadius="1.75rem"
      className="border-transparent px-6 py-2 bg-gradient-to-br from-neutral to-neutral-200 text-white text-lg rounded-lg   transform hover:-translate-y-1 transition duration-400 text-base tracking-wide bg-[#0011a8] font-semibold"
    >
      Book A Call
    </Button>
  </Link>
  <Link href={'#'}>
    <Button
      borderRadius="1.75rem"
      className="border-transparent px-6 py-2 bg-gradient-to-br from-neutral to-neutral-200 text-black text-lg rounded-lg   transform hover:-translate-y-1 transition duration-400 text-base tracking-wide bg-white font-semibold"
    >
      Play A Video
    </Button>
  </Link>

  
 
</div>

    </div>
  )
}

 

export default HeroSection