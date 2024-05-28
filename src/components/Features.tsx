'use client'

import Link from 'next/link'
import React from 'react'
import { HoverEffect } from "./ui/card-hover-effect"



const resueFact = [
    {
      "title": "Recycling Plastic Bottles",
      "desc": "Learn how we process and recycle plastic bottles to reduce waste and promote sustainability.",
      "slug": "recycling-plastic-bottles",
      "isFeatured": true
    },
    {
      "title": "Eco-Friendly Packaging Solutions",
      "desc": "Discover our innovative packaging solutions made from recycled plastic, contributing to a greener environment.",
      "slug": "eco-friendly-packaging",
      "isFeatured": true
    },
    {
      "title": "Community Plastic Cleanup Events",
      "desc": "Join us in our efforts to clean up plastic waste from our communities and protect the environment for future generations.",
      "slug": "community-plastic-cleanup",
      "isFeatured": true
    },
     
  ]
  


const Feature = () => {
  return (
    <div className='p-20 bg-[#2c60f117] h-auto lg:h-[40rem]'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6'>
            <div className='text-center flex  justify-center'>
                {/* <h2 className='text-base text-black font-semibold tracking-wide uppercase'>Lorem, ipsum dolor.</h2> */}
                <p className='text-center text-2xl font-extrabold tracking-light text-[#0011a8] p-7 sm:text-6xl bg-[#1d34ff0c] sm:w-[750px] w-[300px] rounded-[20px]'>What is our service?</p>
            </div>
            <div className='mt-10'>

            <HoverEffect items={resueFact.map(feature => (
                {
                    title : feature.title,
                    description : feature.desc,
                    link : '/'
                }

            ))} />



            </div>
            {/* <div className='mt-10 text-center'>
                <Link href={'/'} className='px-4 py-2 rounded border border-neutral-600 text-white bg-[#12539e] hover:bg-[#aed8fa] hover:text-black transition duration-200'>
                    View all services
                </Link>
            </div> */}
        </div>
    </div>
  )
}

export default Feature