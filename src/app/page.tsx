import HeroSection from "@/components/HeroSection";
import TestimonialCards from "@/components/TestimonialCards";
import WhyUs from "@/components/WhyUs";
import Feature from "@/components/Features";
import Footer from "@/components/Footer";
 
 

export default function Home() {
  return (
   <main className="min-h-screen bg-light/[0.96] antialiased bg-grid-white/[0.02]">

    <HeroSection/>
    <Feature/>
    <WhyUs/>
    <TestimonialCards/>
    <Footer/>
   </main>
  );
}
