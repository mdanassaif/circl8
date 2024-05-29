"use client";
import React from "react";
import { AnimatedTooltip } from "../../components/ui/animated-tooltip";
import { WavyBackground } from "../../components/ui/wavy-background";
import Footer from "@/components/Footer";

const team = [
  {
    id: 1,
    name: "Rajesh Kumar",
    designation: "Project Manager - Plastic Collection",
    image:
      "https://randomuser.me/api/portraits/men/91.jpg",
  },
  {
    id: 2,
    name: "Priya Sharma",
    designation: "Community Engagement Officer",
    image:
      "https://randomuser.me/api/portraits/women/92.jpg",
  },
  {
    id: 3,
    name: "Amit Patel",
    designation: "Plastic Recycling Specialist",
    image:
      "https://randomuser.me/api/portraits/men/93.jpg",
  },
  {
    id: 4,
    name: "Sneha Gupta",
    designation: "UX Designer - Eco Initiatives",
    image:
      "https://randomuser.me/api/portraits/women/94.jpg",
  },
  {
    id: 5,
    name: "Anand Singh",
    designation: "Logistics Coordinator - Plastic Collection",
    image:
      "https://randomuser.me/api/portraits/men/95.jpg",
  },
  {
    id: 6,
    name: "Neha Verma",
    designation: "Environmental Education Specialist",
    image:
      "https://randomuser.me/api/portraits/women/96.jpg",
  },
];


const Team = () => {
  return (
    <>
    <div className="relative h-screen overflow-hidden flex items-center justify-center">
        <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-black font-bold text-center mb-8">Meet Our Pro Team</h2>
          <p className="text-[1.1rem] w-[25rem] sm:text-[1.2rem] sm:w-[40rem] lg:text-xl text-black text-center mb-6">Our team excels, achieving remarkable feats through dedication, innovation, collaboration, and determination.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 justify-center">
            <AnimatedTooltip items={team}/>

 
        </div>
        </WavyBackground>
    </div>
      <Footer/>
      </>
  )

}

export default Team

// / 1329ecfe, 2a3ef1a3, 0011a8