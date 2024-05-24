'use client'

import Link from 'next/link'
import impData from '../data/important.json'
import { BackgroundGradient } from './ui/background-gradient'


interface Service{
    id: number,
    title: string, 
    slug:  string,
    desc:  string,
    price: number,
    founder: string,
    isPremium: boolean,
    reuse_plastic_context: string,
    
}

const Belowhero = () => {

    const featuredServices = impData.services.filter((service:Service)=> service.isPremium)
  return (
    <div className='py-12 bg-gray-900'>
        <div>
            <div className='text-center'>
                <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>Featured Services</h2>
                <p>Contribute for nature to serve best to new generation</p>

                <div>

                </div>
                <div className='mt-10'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'>
                    {featuredServices.map((service: Service) => (
                            <div key={service.id} className='flex justify-center'>
                                <BackgroundGradient className='flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm'>
                                    <div className='p-4 sm:p-6 flex flex-col items-center text-center flex-grow'>
                                        <p className='text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200'>{service.title}</p>
                                        <p className='text-sm text-neutral-600 dark:text-neutral-400 flex-grow'>{service.desc}</p>
                                        <Link href={`/service/${service.slug}`}>
                                            Learn More

                                        </Link>
                                        
                                    </div>
                                </BackgroundGradient>

                            </div>    
                        ))}
                    </div>
                </div>
                <div className='mt-20 text-center'>
                    <Link href={'#'}
                    className='px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200'>
                    View All Services
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Belowhero