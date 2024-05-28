"use client"

import Image from "next/image";
import { WobbleCard } from './ui/wobble-card';

function WhyUs() {
  return (
    <div className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
      <div className='text-center flex  justify-center mb-20'>
        <h1 className='text-center text-2xl font-extrabold tracking-light text-[#0011a8] p-7 sm:text-6xl bg-[#1d34ff0c] sm:w-[750px] w-[300px] rounded-[20px]'>Why Choose Us</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8">
          <WobbleCard>
            <div className="p-8 bg-[#3748e3] rounded-t-lg">
              
              <h2 className="text-white text-2xl sm:text-3xl font-semibold mb-4">Eco Rebirth</h2>
              <p className="text-white text-lg mb-6">Witness the magic as discarded plastic undergoes a profound metamorphosis. Explore our platform to track the journey of plastic rebirth, fueling a sustainable tomorrow.</p>
            </div>
            <div className="relative h-40 sm:h-66">
              <Image
                src="/photaas/img1.jpg"
                layout="fill"
                objectFit="cover"
                alt="Eco Rebirth"
                className="rounded-b-lg"
              />
            </div>
          </WobbleCard>

          <WobbleCard>
            <div className="p-8 bg-[#3748e3] rounded-t-lg">
              <h2 className="text-white text-2xl sm:text-3xl font-semibold mb-4">Client Echoes</h2>
              <p className="text-white text-lg mb-6">Discover the reverberating echoes of satisfaction as our clients share their success stories. Dive into our testimonials to witness the impact of our services firsthand.</p>
            </div>
            <div className="relative h-40 sm:h-66">
              <Image
                src="/photaas/img1.jpg"
                layout="fill"
                objectFit="cover"
                alt="Eco Rebirth"
                className="rounded-b-lg"
              />
            </div>
          </WobbleCard>

          <WobbleCard>
            <div className="p-8 bg-[#3748e3] rounded-t-lg">
              <h2 className="text-white text-2xl sm:text-3xl font-semibold mb-4">Client Chronicles</h2>
              <p className="text-white text-lg mb-6">Embark on a journey through our client chronicles and unveil the narratives of triumph and transformation. Delve into their experiences to see how we've helped them achieve their goals.</p>
            </div>
            <div className="relative h-40 sm:h-66">
              <Image
                src="/photaas/img1.jpg"
                layout="fill"
                objectFit="cover"
                alt="Eco Rebirth"
                className="rounded-b-lg"
              />
            </div>
          </WobbleCard>

          

          

        </div>
      </div>
    </div>
  );
}

export default WhyUs;

 
