"use client";
 
// import { calsans } from "@/fonts/calsans";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import abputPic from '../../../public/photaas/abputimg.jpg'
import icon1 from '../../../public/photaas/icons/instagram2.png'
import icon2 from '../../../public/photaas/icons/facebook.png'
import icon3 from '../../../public/photaas/icons/twitter.png'
import icon4 from '../../../public/photaas/icons/email-block.png'
import Footer from "@/components/Footer";


const page = () => {
  
  return (
    <div className="bg-[#0011a832] flex flex-col min-h-screen">
    <div className="px-6 flex-grow">
    <div className="max-w-4xl mx-auto antialiased pt-40 relative">
      {dummyContent.map((item, index) => (
        <div key={`content-${index}`} className="mb-10">
          <p className={twMerge( "text-2xl md:text-4xl  mb-4 text-[#0011a8] font-bold uppercase")}>
            {item.title}
          </p>

          <div className="text-md">
            {item?.image && (
              <Image
                src={item.image}
                alt="blog thumbnail"
                height="1000"
                width="1000"
                className="rounded-lg mb-10 object-cover"
              />
            )}
            {item.description}
          </div>
        </div>
      ))}
    </div>
  </div>
  <Footer/>
  </div>
  
  )
}


const dummyContent = [
  {
    title: "Know About Circl8 more deeply",
    description: (
      <div className="text-black text-md">
        <p className="add_font_family_for_para">Circl8 is a company dedicated to making plastic recycling simple and effective. We collect plastic waste from businesses, recycle it, and supply it back to companies for reuse. Our goal is to help businesses reduce their environmental impact and support a sustainable future.</p>
        <br/>
        <br/>
        <h2 className="font-bold text-xl text-[#0011a8]">Our Services:</h2>
        <br/>
        <ul>
          <li><strong className="text-[#0011a8]">Plastic Collection:</strong> <span className="add_font_family_for_para">We offer a flexible and reliable service to pick up your plastic waste. Our team ensures timely and efficient collection to fit your business schedule, minimizing disruption and maximizing convenience.</span></li>
          <br/>
          <li><strong className="text-[#0011a8]">Recycling:</strong> <span className="add_font_family_for_para">Using advanced technology, we turn collected plastic into high-quality, reusable material. Our state-of-the-art recycling facilities are equipped to handle various types of plastic, ensuring optimal recovery and minimal waste.</span></li>
          <br/>
          <li><strong className="text-[#0011a8]">Supply:</strong> <span className="add_font_family_for_para">The recycled plastic is supplied back to businesses for various uses. Whether you need raw materials for manufacturing or eco-friendly packaging solutions, we provide customized products to meet your specific needs.</span></li>
        </ul>
        <br/>
        <br/>
        <h2 className="font-bold text-xl text-[#0011a8]">Why Choose Circl8?</h2>
        <br/>
        <ul>
          <li><strong className="text-[#0011a8]">Sustainability:</strong> <span className="add_font_family_for_para">We help reduce plastic pollution and conserve resources. By partnering with us, you contribute to the circular economy, where materials are reused and recycled, reducing the need for virgin plastic production.</span></li>
          <br/>
          <li><strong className="text-[#0011a8]">Convenience:</strong> <span className="add_font_family_for_para">Our end-to-end service makes it easy to manage plastic waste. From collection to recycling and supply, we handle every step, so you can focus on your core business activities without worrying about waste management.</span></li>
          <br/>
          <li><strong className="text-[#0011a8]">Compliance:</strong> <span className="add_font_family_for_para">We ensure your waste management practices meet environmental regulations. Our processes comply with local and international standards, helping you avoid legal issues and potential fines.</span></li>
          <br/>
          <li><strong className="text-[#0011a8]">Positive Impact:</strong> <span className="add_font_family_for_para">Enhance your brand reputation and contribute to a healthier planet. Customers and stakeholders increasingly value sustainability, and partnering with Circl8 demonstrates your commitment to environmental responsibility.</span></li>
          <br/>
          <li><strong className="text-[#0011a8]">Expert Support:</strong> <span className="add_font_family_for_para">Our team of experts is always ready to assist you. Whether you need advice on reducing plastic waste, optimizing recycling processes, or understanding regulatory requirements, we provide the support you need to succeed.</span></li>
          <br/>
          <li><strong className="text-[#0011a8]">Cost Efficiency:</strong> <span className="add_font_family_for_para">Our recycling services can help reduce your waste disposal costs. By diverting plastic waste from landfills and converting it into valuable materials, we offer a cost-effective solution for managing your waste.</span></li>
          <br/>
          <li><strong className="text-[#0011a8]">Innovative Solutions:</strong> <span className="add_font_family_for_para">We are constantly innovating to improve our recycling processes and services. Our commitment to research and development ensures that we stay at the forefront of the recycling industry, providing you with the latest and most effective solutions.</span></li>
          <br/>
          <li><strong className="text-[#0011a8]">Customized Programs:</strong> <span className="add_font_family_for_para">We understand that every business is unique. That is why we offer customized recycling programs tailored to your specific needs and goals, ensuring the best possible outcomes for your waste management strategy.</span></li>
        </ul>
        <br/>
        <br/>
        <p className="text-lg font-semibold text-[#0011a8]">Reach out to us today for more information and to discuss how Circl8 can tailor our recycling services to meet your specific business needs. Let's work together to create a sustainable future.</p>
        <br/>
        {/* <div className="flex space-x-4 justify-center items-center mt-5">
          <a href="https://www.facebook.com/Circl8Recycling" className="transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg">
            <Image src={icon1} alt="Facebook" width={32} height={32} className="rounded-full"/>
          </a>
          <a href="https://www.twitter.com/Circl8Recycling" className="transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg">
            <Image src={icon2} alt="Twitter" width={32} height={32} className="rounded-full"/>
          </a>
          <a href="https://www.instagram.com/Circl8Recycling" className="transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg">
            <Image src={icon3}  alt="Instagram" width={32} height={32} className="rounded-full"/>
          </a>
          <a href="https://www.linkedin.com/company/circl8recycling" className="transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg">
            <Image src={icon4}  alt="LinkedIn" width={32} height={32} className="rounded-full"/>
          </a>
        </div> */}
      </div>
    ),
    image: abputPic,
  },
];


export default page