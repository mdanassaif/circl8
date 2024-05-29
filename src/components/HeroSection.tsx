'use client';


import Link from 'next/link';
import { useState } from 'react';
import { Spotlight } from './ui/Spotlight';
import { Button } from './ui/moving-border';
import ReactPlayer from 'react-player/youtube';

// Function to open Calendly with the specified link
const openCalendly = () => {
  window.open('https://calendly.com/brogee9o9', '_blank');
};

const HeroSection = () => {
  const [playVideo, setPlayVideo] = useState(false);

  const handlePlayVideo = () => {
    setPlayVideo(true);
  };

  const handleCancelVideo = () => {
    setPlayVideo(false);
  };

  return (
    <div className='relative'>
      <div className={`h-auto md:h-[43rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto body ${playVideo ? 'blur-background' : ''}`} style={{ paddingTop: '120px', paddingBottom: '30px', background: 'linear-gradient(to bottom, var(--background-start-color), var(--background-end-color))' }}>
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />

        <div className='p-4 relative z-10 w-full text-center'>
          <h1 className='mt-20 md:mt-0 text-4xl md:text-7xl font-bold text-white'>Data Simplifies, Plastic<br /> Reused for Earth</h1>
          <p className='mt-4 font-normal text-base md:text-lg text-gray-100 max-w-lg mx-auto add_font_family_for_para'>Join us in turning plastic trash into valuable resources for a greener tomorrow.</p>
        </div>

        <div className="mt-4 flex space-x-10 flex-row items-center">
          <Button
            borderRadius="1.75rem"
            className="border-transparent px-6 py-2 bg-gradient-to-br from-neutral to-neutral-200 text-white rounded-lg   transform hover:-translate-y-1 transition duration-400 text-base tracking-wide bg-[#0011a8] font-semibold"
            onClick={openCalendly} // Attach the function to onClick
          >
            Book A Call
          </Button>

          {!playVideo && (
            <Button
              borderRadius="1.75rem"
              className="border-transparent px- py-2 bg-gradient-to-br from-neutral to-neutral-200 text-black rounded-lg transform hover:-translate-y-1 transition duration-400 text-base tracking-wide bg-white font-semibold"
              onClick={handlePlayVideo}
            >
              Play A Video
            </Button>
          )}
        </div>
      </div>

      {playVideo && (
        <div className="video-overlay">
          <div className="video-close" onClick={handleCancelVideo}>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
              <path fill="currentColor" fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m7.707-3.707a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 0 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586z" clip-rule="evenodd" />
            </svg>
          </div>
          <ReactPlayer
            url="https://www.youtube.com/embed/AFTIVN8rRbI?rel=0&showinfo=0&modestbranding=1&iv_load_policy=3"
            controls={false}
            playing
            width="80%"
            height="80%"
            className="video-player"
          />
        </div>
      )}
    </div>
  );
}

export default HeroSection;
