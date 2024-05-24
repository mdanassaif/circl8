"use client"

import Image from "next/image";
import React from "react";
import { WobbleCard } from './ui/wobble-card'

function WhyUs() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto w-full py-20 bg-white">
      <div className="col-span-2 lg:col-span-3 flex justify-center items-center pt-10 pb-20">
        {/* 0011a8 */}
        <p  className=' text-center text-3xl  font-extrabold tracking-light text-[#0011a8]  p-7 sm:text-6xl bg-[#1d34ff0c]' style={{width: '750px', borderRadius: '20px'}}>Why pick us</p>
      </div>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3  min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Plastic Repurposing Solutions
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          Witness the transformation of plastic waste into valuable resources. Our platform showcases the journey of discarded plastic being recycled and repurposed, contributing to a sustainable future. Embrace the power of recycling with us.
          </p>
        </div>
        <Image
          src="/photaas/img1.jpg"
          width={800}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full  min-h-[400px] lg:min-h-[200px]"
        className=""
      >
        <div className="max-w-lg">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-2xl font-semibold tracking-[-0.015em] text-white">
          Innovative Plastic Reprocessing
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
          Explore our cutting-edge methods for recycling plastic. Our platform demonstrates how we are revolutionizing plastic reprocessing, turning waste into valuable resources and paving the way for a greener tomorrow.
          </p>
        </div>
        <Image
          src="/photaas/img5.jpg"
          width={550}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          No contaminated plastic accepted
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
        If someone signals to stop or indicates surrender, the recycling process halts.
        </p>
      </WobbleCard>
    </div>
  );
}

export default WhyUs;
