'use client'

import Link from 'next/link'
import React from 'react'
import { HoverEffect } from './ui/card-hover-effect'

const reuseFact = [
  {
    title: 'Recycling Plastic Bottles',
    desc: 'Learn how we process and recycle plastic bottles to reduce waste and promote sustainability.',
    slug: 'recycling-plastic-bottles',
    isFeatured: true,
  },
  {
    title: 'Eco-Friendly Packaging Solutions',
    desc: 'Discover our innovative packaging solutions made from recycled plastic, contributing to a greener environment.',
    slug: 'eco-friendly-packaging',
    isFeatured: true,
  },
  {
    title: 'Community Plastic Cleanup Events',
    desc: 'Join us in our efforts to clean up plastic waste from our communities and protect the environment for future generations.',
    slug: 'community-plastic-cleanup',
    isFeatured: true,
  },
]

const Feature = () => {
  return (
    <div className='p-8 bg-[#2c60f117] h-auto lg:h-auto'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6'>
        <div className='text-center flex justify-center'>
          <p className='text-center text-2xl font-extrabold tracking-tight text-[#0011a8] py-7 px-5 sm:text-4xl bg-[#1d34ff0c] sm:w-[750px] w-full rounded-[20px]'>
            What is our service?
          </p>
        </div>
        <div className='mt-10'>
          <HoverEffect
            items={reuseFact.map((feature) => ({
              title: feature.title,
              description: feature.desc,
              link: '/',
            }))}
          />
        </div>
      </div>
    </div>
  )
}

export default Feature
