import HeroSection from "@/components/HeroSection";
import TestimonialCards from "@/components/TestimonialCards";
import WhyUs from "@/components/WhyUs";
// import Belowhero from "@/components/BelowHero";
import Feature from "@/components/Features";
// import Image from "next/image";
// import Team from "@/components/Team";
import Footer from "@/components/Footer";
// import Testing from "@/components/Testing";
 

export default function Home() {
  return (
   <main className="min-h-screen bg-light/[0.96] antialiased bg-grid-white/[0.02]">

    <HeroSection/>
    {/* <Belowhero/> */}
    <Feature/>
    <WhyUs/>
    {/* <Testing/> */}
    {/* <TestimonialCards/> */}

    <TestimonialCards/>
    {/* <Team/> */}
    <Footer/>
   </main>
  );
}
