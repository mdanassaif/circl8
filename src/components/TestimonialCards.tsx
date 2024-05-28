'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const circl8Testimonials = [
  {
    quote:
      'Partnering with Circl8 has revolutionized our sustainability efforts. Their efficient plastic collection and redistribution system have significantly reduced our environmental footprint.',
    name: 'Emily Adams',
    title: 'Supply Chain Manager, XYZ Company',
  },
  {
    quote:
      "Circl8's platform has made it incredibly easy for us to contribute to the circular economy. Knowing that our recycled plastic is being repurposed by other companies motivates us to recycle even more.",
    name: 'John Smith',
    title: 'Environmental Coordinator, ABC Corporation',
  },
  {
    quote:
      "We've been using Circl8's services for years now, and they've consistently exceeded our expectations. Their dedication to sustainability is truly commendable.",
    name: 'Sarah Thompson',
    title: 'Procurement Director, DEF Industries',
  },
  {
    quote:
      "Circl8 not only helps us manage our plastic waste effectively but also provides valuable insights into our recycling practices. It's a win-win for us and the environment.",
    name: 'David Brown',
    title: 'Operations Manager, GHI Manufacturing',
  },
  {
    quote:
      "Thanks to Circl8, we've been able to meet our sustainability goals ahead of schedule. Their innovative approach to plastic recycling sets them apart in the industry.",
    name: 'Michelle Garcia',
    title: 'CEO, JKL Enterprises',
  },
];

// / 1329ecfe, 2a3ef1a3, 0011a8
function Circl8Testimonials() {
  return (
    <div className="h-[40rem] w-full bg-white bg-dot-[#3748e3]/[1] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 z-10 text-[#0011a8]">Listen to Our Success Stories</h2>
      
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8 pt-10">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={circl8Testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  )
}


export default Circl8Testimonials